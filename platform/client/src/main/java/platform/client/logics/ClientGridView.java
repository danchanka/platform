package platform.client.logics;

import platform.client.form.decorator.ClientHighlighter;

import java.io.DataInputStream;
import java.io.IOException;
import java.util.Collection;

public class ClientGridView extends ClientComponentView {

    public boolean showFind;
    public boolean showFilter;

    public byte minRowCount;
    public boolean tabVertical = true;
    public ClientHighlighter highlighter;

    public ClientGridView(DataInputStream inStream, Collection<ClientContainerView> containers) throws IOException, ClassNotFoundException {
        super(inStream, containers);

        showFind = inStream.readBoolean();
        showFilter = inStream.readBoolean();

        minRowCount = inStream.readByte();
        tabVertical = inStream.readBoolean();
        if (!inStream.readBoolean()) {
            highlighter = new ClientHighlighter(inStream);
        }
    }
}
