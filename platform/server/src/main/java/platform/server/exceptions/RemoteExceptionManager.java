package platform.server.exceptions;

import java.rmi.RemoteException;
import java.rmi.ServerException;
import java.rmi.Remote;

import platform.interop.exceptions.ComplexQueryException;
import platform.interop.exceptions.InternalServerException;
import platform.interop.exceptions.RemoteServerException;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.ProceedingJoinPoint;

@Aspect
public class RemoteExceptionManager {

    // аспектами ловим все RuntimeException которые доходят до внешней границы сервера и оборачиваем их
    @Around("execution(public * platform.interop.RemoteLogicsInterface.*(..)) ||" +
            "execution(public * platform.interop.navigator.RemoteNavigatorInterface.*(..)) ||" +
            "execution(public * platform.interop.form.RemoteFormInterface.*(..))")
    public Object callRemoteInterface(ProceedingJoinPoint thisJoinPoint) throws Throwable {

        try {
            return thisJoinPoint.proceed();
        } catch (Throwable throwable) {
            if (throwable instanceof RuntimeException && ! (throwable instanceof RemoteServerException)) {
                throw createInternalServerException(throwable);
            } else
                throw throwable;
        }

    }

    public static InternalServerException createInternalServerException(Throwable e) {

        e.printStackTrace();
        return new InternalServerException(0, e.getLocalizedMessage());
    }

}
