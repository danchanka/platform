package lsfusion.server.logics.property.actions;

import com.google.common.base.Throwables;
import lsfusion.base.BaseUtils;
import lsfusion.base.IOUtils;
import lsfusion.base.col.interfaces.immutable.ImOrderSet;
import lsfusion.server.data.SQLHandledException;
import lsfusion.server.logics.linear.LCP;
import lsfusion.server.logics.property.ExecutionContext;
import lsfusion.server.logics.property.PropertyInterface;
import lsfusion.server.logics.property.actions.flow.FlowResult;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.ByteArrayBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.HttpClientBuilder;

import javax.mail.BodyPart;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.sql.SQLException;
import java.util.List;

public class ExternalHTTPActionProperty extends ExternalActionProperty {
    private final int bodyParamsCount;

    private static String textPlainType = "text/plain";
    private static String applicationOctetStreamType = "application/octet-stream";
    private static String multipartMixedType = "multipart/mixed";

    public ExternalHTTPActionProperty(int getParamsCount, int bodyParamsCount, String query, List<LCP> targetPropList) {
        super(getParamsCount + bodyParamsCount, query, targetPropList);
        this.bodyParamsCount = bodyParamsCount;
    }

    @Override
    protected FlowResult aspectExecute(ExecutionContext<PropertyInterface> context) throws SQLException, SQLHandledException {
        try {

            String replacedParams = replaceParams(context, connectionString);
            HttpResponse response = readHTTP(context, replacedParams, bodyParamsCount);
            HttpEntity responseEntity = response.getEntity();

            if (response.getStatusLine().getStatusCode() != 200)
                throw new RuntimeException(response.getStatusLine().getReasonPhrase());
            else {
                if (targetPropList.size() == 1) {
                    LCP targetProp = targetPropList.get(0);
                    String contentType = responseEntity.getContentType().getValue();

                    Object result = IOUtils.readBytesFromStream(responseEntity.getContent());
                    if (!contentType.contains(applicationOctetStreamType))
                        result = new String((byte[]) result);
                    targetProp.change(result, context);

                } else if (targetPropList.size() >= 2) {
                    ByteArrayDataSource ds = new ByteArrayDataSource(responseEntity.getContent(), multipartMixedType);
                    MimeMultipart multipart = new MimeMultipart(ds);

                    if (multipart.getCount() != targetPropList.size())
                        throw new RuntimeException(String.format("Expected return params: %s, got: %s", targetPropList.size(), multipart.getCount()));
                    else {
                        for (int i = 0; i < targetPropList.size(); i++) {
                            LCP targetProp = targetPropList.get(i);
                            BodyPart bodyPart = multipart.getBodyPart(i);
                            String contentType = bodyPart.getContentType();

                            Object result = bodyPart.getContent();
                            if (contentType.contains(applicationOctetStreamType)) {
                                result = result instanceof InputStream ? IOUtils.readBytesFromStream((InputStream) result) : null;
                            } else
                                result = targetProp.property.getType().parseString((String) result);
                            targetProp.change(result, context);
                        }
                    }
                }
            }
        } catch (Exception e) {
            throw Throwables.propagate(e);
        }

        return FlowResult.FINISH;
    }

    private HttpResponse readHTTP(ExecutionContext context, String connectionString, int bodyParamsCount) throws IOException {
        ImOrderSet<PropertyInterface> orderInterfaces = getOrderInterfaces();

        HttpPost httpPost = new HttpPost(connectionString);
        HttpEntity entity = null;
        if (bodyParamsCount > 1) {
            MultipartEntityBuilder builder = MultipartEntityBuilder.create();
            for (int i = orderInterfaces.size() - bodyParamsCount; i < orderInterfaces.size(); i++) {
                Object value = context.getKeyValue(orderInterfaces.get(i)).getValue();
                String name = "param" + (i + 1);
                if (value instanceof byte[]) {
                    builder.addPart(name, new ByteArrayBody(BaseUtils.getFile((byte[]) value), name));
                } else {
                    builder.addPart(name, new StringBody(value == null ? "" : String.valueOf(value), ContentType.create(textPlainType, Charset.forName("UTF-8"))));
                }
            }
            entity = builder.build();
            httpPost.addHeader("Content-type", multipartMixedType);

        } else if (bodyParamsCount == 1) {
            Object value = context.getKeyValue(orderInterfaces.get(orderInterfaces.size() - 1)).getValue();
            if (value instanceof byte[]) {
                entity = new ByteArrayEntity(BaseUtils.getFile((byte[]) value));
                httpPost.addHeader("Content-type", applicationOctetStreamType);
            } else {
                entity = new StringEntity(value == null ? "" : String.valueOf(value));
                httpPost.addHeader("Content-type", textPlainType);
            }
        }

        HttpClient httpClient = HttpClientBuilder.create().build();
        if (entity != null)
            httpPost.setEntity(entity);
        return httpClient.execute(httpPost);
    }
}