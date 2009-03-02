package platform.client;

import platform.interop.RemoteLogicsInterface;
import platform.interop.navigator.RemoteNavigatorInterface;
import platform.client.layout.Layout;

import javax.swing.*;
import java.rmi.RemoteException;
import java.rmi.Naming;
import java.rmi.NotBoundException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.net.MalformedURLException;
import java.sql.SQLException;
import java.io.IOException;

public class Main {

    public static Layout layout;

    public static void main(String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException, IOException, UnsupportedLookAndFeelException, MalformedURLException, NotBoundException {

        UIManager.setLookAndFeel(UIManager.getInstalledLookAndFeels()[2].getClassName());

        try {
            Class blcl = Class.forName("platform.server.logics.BusinessLogics_Stub");
            System.out.println(blcl.toString());
        } catch (ClassNotFoundException e) {
            System.out.println("cls"+e.getMessage());
        }

        Registry remoteRegistry = LocateRegistry.getRegistry();
//        RemoteLogicsInterface BL = (RemoteLogicsInterface) Naming.lookup(args[0]);
        RemoteLogicsInterface BL = (RemoteLogicsInterface) remoteRegistry.lookup("TmcBusinessLogics");
        System.out.println(BL.result());
        
/*        RemoteLogicsInterface BL = null;
        try {
            BL = new TmcBusinessLogics();
        } catch (Exception e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }*/

        RemoteNavigatorInterface remoteNavigator = BL.createNavigator("user1","user1");

//        RemoteNavigatorInterface remoteNavigator = new LoginDialog(BL).login();
//        if(remoteNavigator==null) return;

        layout = new Layout(remoteNavigator);
        layout.setVisible(true);
    }
}
