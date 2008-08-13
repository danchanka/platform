/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package platformlocal;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.awt.Dimension;
import java.awt.LayoutManager;
import java.io.ByteArrayInputStream;
import java.io.IOException;

class ClientGroupObjectImplement extends ArrayList<ClientObjectImplement> {

    Integer GID = 0;

    ClientGridView gridView = new ClientGridView();
    ClientFunctionView addView = new ClientFunctionView();
    ClientFunctionView changeClassView = new ClientFunctionView();
    ClientFunctionView delView = new ClientFunctionView();

    @Override
    public boolean equals(Object o) {
        return this == o;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 23 * hash + (this.GID != null ? this.GID.hashCode() : 0);
        return hash;
    }
    
    public ClientGroupObjectImplement() {
    }
}

class ClientGroupObjectMap<T> extends HashMap<ClientObjectImplement,T> {

   
/*  На самом деле не надо - так как сравнивать как раз надо именно по значениям
    @Override
    public boolean equals(Object o) {
        return this == o;
    }

    // Здесь по хорошему нужно hashcode когда новые свойства появятся перегрузить
    @Override
    public int hashCode() {
        int hash = 7;
        return hash;
    } */

}

class ClientGroupObjectValue extends ClientGroupObjectMap<Integer> {
    
}

class ClientObjectImplement {
    
    Integer ID = 0;
    
    ClientGroupObjectImplement groupObject;
 
    String caption = "";
    
    ClientObjectView objectIDView = new ClientObjectView();
    ClientClassView classView = new ClientClassView();
    
    public ClientObjectImplement() {
    }
}

class ClientClass {

    int ID;
    String caption;

    boolean hasChilds;

    public String toString() { return caption; }
}

class ClientComponentView {
    
    ClientContainerView container;
    SimplexConstraints constraints = new SimplexConstraints();
 
    String outName = "";
    
}

class ClientContainerView extends ClientComponentView {
    
    LayoutManager layout;
}

class ClientGridView extends ClientComponentView {
    
}

class ClientClassView extends ClientComponentView {
    
}

class ClientFunctionView extends ClientComponentView {
    
}

abstract class ClientCellView extends ClientComponentView {
    
    Integer ID = 0;

    ClientGroupObjectImplement groupObject;
    
    Dimension minimumSize;
    Dimension maximumSize;
    Dimension preferredSize;

    String caption;

    public int getPreferredWidth() {
        return 50;
    }
    
    public int getPreferredHeight() {
        return 15;
    }
    
    public Dimension getPreferredSize() {
        
        if (preferredSize != null) return preferredSize;
        return new Dimension(getPreferredWidth(), getPreferredHeight());
    }
    
    abstract public PropertyRendererComponent getRendererComponent(ClientForm form);
    abstract public PropertyEditorComponent getEditorComponent(ClientForm form);

}

class ClientPropertyView extends ClientCellView {

    String type;
    
    public int getPreferredWidth() {
        
        int res = 15;
        
        if (type.equals("integer")) res = 9;
        if (type.equals("char(50)")) res = 50;
        
        return res * 5;
    }
    
    private PropertyRendererComponent renderer;
    public PropertyRendererComponent getRendererComponent(ClientForm form) {
        
        if (renderer == null) {
            
            if (type.equals("integer")) renderer = new IntegerPropertyRenderer();
            if (type.equals("char(50)")) renderer = new StringPropertyRenderer();

            if (renderer == null) renderer = new StringPropertyRenderer();
            
        }
        
        return renderer;
        
    }
    
    public PropertyEditorComponent getEditorComponent(ClientForm form) {
        
        if (type.equals("integer")) return new IntegerPropertyEditor();
        if (type.equals("char(50)")) return new StringPropertyEditor();
        
        return new StringPropertyEditor();
        
    }

}

class ClientObjectView extends ClientCellView {

    private PropertyRendererComponent renderer;
    public PropertyRendererComponent getRendererComponent(ClientForm form) {
        
        if (renderer == null) {
            renderer = new IntegerPropertyRenderer();
        }
        
        return renderer;
        
    }
    
    public PropertyEditorComponent getEditorComponent(ClientForm form) {
        
        form.switchClassView(groupObject);
        return null;
    }
    
} 

class ClientFormChanges extends AbstractFormChanges<ClientGroupObjectImplement,ClientGroupObjectValue,ClientPropertyView> {

}


class ClientFormView {
    
    List<ClientGroupObjectImplement> groupObjects = new ArrayList();
    List<ClientObjectImplement> objects = new ArrayList();
    List<ClientPropertyView> properties = new ArrayList();
    
    List<ClientContainerView> containers = new ArrayList();

    ClientFunctionView printView = new ClientFunctionView();
    ClientFunctionView applyView = new ClientFunctionView();
    ClientFunctionView cancelView = new ClientFunctionView();

    List<ClientCellView> order = new ArrayList();
    
    public ClientFormView() {
    }

    public ClientGroupObjectImplement getGroupObject(int id) {
        for (ClientGroupObjectImplement groupObject : groupObjects)
            if (groupObject.GID == id) return groupObject;
        return null;
    }

    public ClientPropertyView getPropertyView(int id) {
        for (ClientPropertyView property : properties)
            if (property.ID == id) return property;
        return null;
    }
}

class DefaultClientFormView extends ClientFormView {

    public DefaultClientFormView(RemoteForm remoteForm) {

        ClientContainerView mainContainer = new ClientContainerView();
        mainContainer.outName = "mainContainer";
        mainContainer.constraints.childConstraints = SingleSimplexConstraint.TOTHE_BOTTOM;

        containers.add(mainContainer);

        Map<GroupObjectImplement, ClientGroupObjectImplement> mgroupObjects = new HashMap();
        Map<ObjectImplement, ClientObjectImplement> mobjects = new HashMap();
        Map<PropertyView, ClientPropertyView> mproperties = new HashMap();
        Map<GroupObjectValue, ClientGroupObjectValue> mobjectValues = new HashMap();

        Map<ClientGroupObjectImplement, ClientContainerView> groupContainers = new HashMap();
        Map<ClientGroupObjectImplement, ClientContainerView> panelContainers = new HashMap();

        for (GroupObjectImplement group : (List<GroupObjectImplement>)remoteForm.Groups) {

            ClientGroupObjectImplement clientGroup = new ClientGroupObjectImplement();
            clientGroup.GID = group.GID;

            mgroupObjects.put(group, clientGroup);
            groupObjects.add(clientGroup);

            ClientContainerView groupContainer = new ClientContainerView();
            groupContainer.outName = "groupContainer " + group.get(0).OutName;
            groupContainer.container = mainContainer;
            groupContainer.constraints.order = remoteForm.Groups.indexOf(group);
            groupContainer.constraints.childConstraints = SingleSimplexConstraint.TOTHE_BOTTOM;

            groupContainers.put(clientGroup, groupContainer);
            containers.add(groupContainer);

            ClientContainerView gridContainer = new ClientContainerView();
            gridContainer.outName = "gridContainer " + group.get(0).OutName;
            gridContainer.container = groupContainer;
            gridContainer.constraints.order = 0;
            gridContainer.constraints.childConstraints = SingleSimplexConstraint.TOTHE_RIGHT;

            containers.add(gridContainer);

            ClientContainerView panelContainer = new ClientContainerView();
            panelContainer.outName = "panelContainer " + group.get(0).OutName;
            panelContainer.container = groupContainer;
            panelContainer.constraints.order = 1;
            panelContainer.constraints.childConstraints = SingleSimplexConstraint.TOTHE_RIGHTBOTTOM;

            panelContainers.put(clientGroup, panelContainer);
            containers.add(panelContainer);

            ClientContainerView buttonContainer = new ClientContainerView();
            buttonContainer.outName = "buttonContainer " + group.get(0).OutName;
            buttonContainer.container = groupContainer;
            buttonContainer.constraints.order = 2;
            buttonContainer.constraints.childConstraints = SingleSimplexConstraint.TOTHE_RIGHT;

            containers.add(buttonContainer);

            clientGroup.gridView.container = gridContainer;
            clientGroup.gridView.constraints.order = 1;
            clientGroup.gridView.constraints.fillVertical = 1;
            clientGroup.gridView.constraints.fillHorizontal = 1;

            clientGroup.addView.container = buttonContainer;
            clientGroup.addView.constraints.order = 0;

            clientGroup.delView.container = buttonContainer;
            clientGroup.delView.constraints.order = 1;

            clientGroup.changeClassView.container = buttonContainer;
            clientGroup.changeClassView.constraints.order = 2;

            for (ObjectImplement object : group) {

                ClientObjectImplement clientObject = new ClientObjectImplement();
                clientObject.ID = object.ID;
                clientObject.groupObject = clientGroup;

                clientObject.objectIDView.ID = object.ID;
                clientObject.objectIDView.groupObject = clientGroup;

                clientObject.objectIDView.container = panelContainer;
                clientObject.objectIDView.constraints.order = -1000 + group.indexOf(object);

                clientObject.caption = object.OutName;
                clientObject.objectIDView.caption = object.OutName;

                clientObject.classView.container = gridContainer;
                clientObject.classView.constraints.order = 0;
                clientObject.classView.constraints.fillVertical = 1;
                clientObject.classView.constraints.fillHorizontal = 0.2;

                clientGroup.add(clientObject);

                mobjects.put(object, clientObject);
                objects.add(clientObject);

                order.add(clientObject.objectIDView);
            }
        }

        for (PropertyView property : (List<PropertyView>)remoteForm.Properties) {

            ClientPropertyView clientProperty = new ClientPropertyView();
            clientProperty.ID = property.ID;

            clientProperty.groupObject = mgroupObjects.get(property.ToDraw);
            clientProperty.constraints.order = remoteForm.Properties.indexOf(property);

            //временно
            clientProperty.caption = property.View.Property.OutName;
            clientProperty.type = property.View.Property.GetDBType();

            mproperties.put(property, clientProperty);
            properties.add(clientProperty);

            clientProperty.container = panelContainers.get(clientProperty.groupObject);

            order.add(clientProperty);
        }

        ClientContainerView formButtonContainer = new ClientContainerView();
        formButtonContainer.container = mainContainer;
        formButtonContainer.constraints.order = remoteForm.Groups.size();
        formButtonContainer.constraints.childConstraints = SingleSimplexConstraint.TOTHE_RIGHT;

        containers.add(formButtonContainer);

        printView.container = formButtonContainer;
        printView.constraints.order = 0;
        printView.constraints.directions = new SimplexComponentDirections(0,0.01,0.01,0);

        applyView.container = formButtonContainer;
        applyView.constraints.order = 1;
        applyView.constraints.directions = new SimplexComponentDirections(0,0,0.01,0.01);

        cancelView.container = formButtonContainer;
        cancelView.constraints.order = 2;
        cancelView.constraints.directions = new SimplexComponentDirections(0,0,0.01,0.01);

    }

}