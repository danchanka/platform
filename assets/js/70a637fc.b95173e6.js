(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{388:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(751)),b={title:"Launch parameters: Overview",sidebar_label:"Overview"},i={unversionedId:"Launch_parameters",id:"Launch_parameters",isDocsHomePage:!1,title:"Launch parameters: Overview",description:"-   Application server (Server)",source:"@site/docs/Launch_parameters.md",slug:"/Launch_parameters",permalink:"/platform/docs/next/Launch_parameters",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Launch_parameters.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"System parameters: Overview",permalink:"/platform/docs/next/System_parameters"},next:{title:"Launch events",permalink:"/platform/docs/next/Launch_events"}},o=[{value:"Application server (Server)",id:"application-server-server",children:[{value:"Java",id:"appjava",children:[]},{value:"lsFusion",id:"applsfusion",children:[]}]},{value:"$FUSION_DIR$/conf/settings.properties",id:"fusion_dirconfsettingsproperties",children:[]},{value:"Web server (Client)",id:"web-server-client",children:[{value:"Java",id:"appjava",children:[]},{value:"lsFusion",id:"applsfusion",children:[]}]}],c={toc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Application server (Server)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#appjava"},"Java")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#applsfusion"},"lsFusion")))),Object(l.b)("li",{parentName:"ul"},"Web server (Client)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#webjava"},"Java")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#weblsfusion"},"lsFusion"))))),Object(l.b)("h2",{id:"application-server-server"},"Application server (Server)"),Object(l.b)("h3",{id:"appjava"},"Java"),Object(l.b)("p",null,"Java application server startup parameters are set in the launch command (for example, for\xa0",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Execution_manual_#command-broken"},"manual"),"\xa0or\xa0",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Execution_auto_#settings-broken"},"automatic"),"\xa0installation):"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"System (starting with X)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.oracle.com/technetwork/java/javase/tech/vmoptions-jsp-140102.html"},"Standard")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("p",null,"Standard Java parameters. It is important above all to pay attention to:"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"cp - classpath, the paths in which java looks for class files and other resources (including lsFusion modules).\xa0The default is. - current folder (different for automatic installation)."),Object(l.b)("br",null),Object(l.b)("li",null,"Xmx - maximum memory size. The default value is determined depending on the configuration of the computer on which the application server is running. For complex logics, it is recommended that you allocate at least\xa04GB.\xa0"),Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-XX:CMSInitiatingOccupancyFraction"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"In general, this is the standard parameter responsible for the threshold after which the CMS garbage collector is turned on. At the same time, the platform uses this parameter to target the memory usage amount using LRU caches (setting more aggressive parameters for cleaning them if this goal is exceeded, and less aggressive in the opposite case). For heavily loaded servers, it is recommended that you set it in the range from 40 to 60."),Object(l.b)("td",{parentName:"tr",align:null},"70"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Custom (starting with D)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("p",null,"-Dlsfusion.server.lightstart"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,'"Light" start\xa0mode (usually used during development). In this mode, the server does not perform metadata synchronization operations or create ',Object(l.b)("a",{parentName:"td",href:"/platform/docs/next/Security_policy"},"security policy")," settings forms, etc., and the startup time and the amount of memory consumed at startup are therefore reduced."),Object(l.b)("br",null),Object(l.b)("p",null,"In the ",Object(l.b)("a",{parentName:"td",href:"/platform/docs/next/IDE"},"IDE")," it is set with a checkmark in ",Object(l.b)("a",{parentName:"td",href:"/platform/docs/next/IDE#configuration"},"lsFusion server configuration")," (enabled by default).")),Object(l.b)("td",{parentName:"tr",align:null},"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("p",null,"-Dlsfusion.server.devmode"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Development mode. In this mode:"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"System tasks are not launched (so as not to interfere with the debugger)"),Object(l.b)("br",null),Object(l.b)("li",null,"You can edit ",Object(l.b)("a",{parentName:"td",href:"/platform/docs/next/Report_design"},"report design"),"\xa0in ",Object(l.b)("a",{parentName:"td",href:"/platform/docs/next/In_a_print_view_PRINT_#interactive"},"interactive print")," view"),Object(l.b)("br",null),Object(l.b)("li",null,"Anonymous access to the API and UI is enabled (",Object(l.b)("a",{parentName:"td",href:"/platform/docs/next/Working_parameters"},"system parameters")," enableAPI, enableUI). In addition, anonymous access in this mode is as an admin and not an anonymous user"),Object(l.b)("br",null),Object(l.b)("li",null,"Client is automatically reconnected when connection is lost"),Object(l.b)("br",null),Object(l.b)("li",null,"The cache for reading reports from resources is turned off"),Object(l.b)("br",null)),Object(l.b)("br",null),Object(l.b)("p",null,"In the ",Object(l.b)("a",{parentName:"td",href:"/platform/docs/next/IDE"},"IDE"),", automatically enabled when running ",Object(l.b)("a",{parentName:"td",href:"/platform/docs/next/IDE#configuration"},"lsFusion server configuration"),".")),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-Dlsfusion.server.testmode"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Enables some experimental features"),Object(l.b)("br",null),Object(l.b)("p",null,"Automatically enabled if assertions are enabled (-ea option)")),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h3",{id:"applsfusion"},"lsFusion"),Object(l.b)("p",null,"lsFusion startup parameters for server\xa0applications can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In the resources in the lsfusion.xml file in the places where these parameters are used, after: (relevant for platform forks)"),Object(l.b)("li",{parentName:"ul"},"In lsfusion.properties (usually part of a project, which means it acts by default for all installations)"),Object(l.b)("li",{parentName:"ul"},"In conf/settings.properties (for specific installations)"),Object(l.b)("li",{parentName:"ul"},"In the ",Object(l.b)("a",{parentName:"li",href:"#appjava"},"Java startup options")," (starting with D, e.g. -Dlogics.topModule=FFF)")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("p",null,"Default")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("p",null,"db.server, db.name,\xa0db.user,\xa0db.password, db.connectTimeout"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"string, string, string, string, int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Database server connection parameters:"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"db.server - the address of the database server (plus, if necessary, the port after a colon, for example localhost:6532)"),Object(l.b)("br",null),Object(l.b)("li",null,"db.name - database name"),Object(l.b)("br",null),Object(l.b)("li",null,"db.user - username\xa0to connect to the database server"),Object(l.b)("br",null),Object(l.b)("li",null,"db.user - user\xa0password to connect to the database server"),Object(l.b)("br",null),Object(l.b)("li",null,"db.connectTimeout - DBMS connection timeout"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"localhost, lsfusion, postgres, , 1000")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("p",null,"rmi.port, rmi.exportName, http.port"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"int, string, int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Access settings for the application server:"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"rmi.port - port for the application server (RMI register / objects exported)"),Object(l.b)("br",null),Object(l.b)("li",null,"rmi.exportName - name of the application server (the root RMI object exported by it). It makes sense to use it if you need to export several logics on one port"),Object(l.b)("br",null),Object(l.b)("li",null,"http.port - port for the web server embedded in the application server (used for access from external systems)"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"7652, default, 7651")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("p",null,"logics.includePaths,\xa0logics.excludePaths, logics.topModule, logics.orderDependencies"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"string. string, string, string"),Object(l.b)("td",{parentName:"tr",align:null},"Parameters of the ",Object(l.b)("a",{parentName:"td",href:"/platform/docs/next/Projects"},"project")," (which modules to load and in what order, detailed description here)"),Object(l.b)("td",{parentName:"tr",align:null},"logics.includePaths equals *, others blank")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("p",null,"user.country,\xa0user.language, user.timezone, user.twoDigitYearStart"),Object(l.b)("br",null),Object(l.b)("p",null,"(user.setCountry, user.setLanguage, user.setTimezone)"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"string, string, string, int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Standard Java parameters defining ",Object(l.b)("a",{parentName:"td",href:"/platform/docs/next/Internationalization#locale"},"locale")," parameters (regional settings - language, country, etc., detailed description here)"),Object(l.b)("br",null),Object(l.b)("p",null,'Due to the peculiarities of Java Spring (namely, locale parameters are considered byJava Spring to be set even if they are not explicitly specified in the start command, that is, settings of these parameters in .properties files are ignored), the platform supports "clones" of these parameters that start as set: if they are specified (either in .properties files or in the launch string), they "overload" the native parameters. That is, the priority is OS, -Duser.',Object(l.b)("em",{parentName:"td"},", User.set")," in .properties files and\xa0-Duser.set* (none of the above applies to user.twoDigitYearStart, since it is not a standard Java parameter)")),Object(l.b)("td",{parentName:"tr",align:null},"The first three are determined from the operating system settings, current year minus 80")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("p",null,"db.namingPolicy,\xa0db.maxIdLength"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"string, int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Parameters\xa0of the ",Object(l.b)("a",{parentName:"td",href:"/platform/docs/next/Tables#name"},"naming policy")," for tables and fields:"),Object(l.b)("br",null),Object(l.b)("p",null,"db.namingPolicy - the name of the java class of the property (full name, with package); in the constructor, it must accept one parameter of type int - the maximum size of the name."),Object(l.b)("br",null),Object(l.b)("p",null,"Builtin policy class names:"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Complete with signature - lsfusion.server.physics.dev.id.name.FullDBNamingPolicy"),Object(l.b)("br",null),Object(l.b)("li",null,"Complete without signature\xa0- lsfusion.server.physics.dev.id.name.NamespaceDBNamingPolicy"),Object(l.b)("br",null),Object(l.b)("li",null,"Brief - lsfusion.server.physics.dev.id.name.ShortDBNamingPolicy"),Object(l.b)("br",null)),Object(l.b)("br",null),Object(l.b)("p",null,"db.maxIdLength -\xa0maximum size of a table or field name. Passed as the first parameter to the constructor of the java class of the naming policy for tables and fields.")),Object(l.b)("td",{parentName:"tr",align:null},"Complete with signature, 63")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"db.denyDropModules,\xa0db.denyDropTables"),Object(l.b)("td",{parentName:"tr",align:null},"boolean, boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Ban on deletion at startup:"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"db.denyDropModules - modules"),Object(l.b)("br",null),Object(l.b)("li",null,"db.denyDropTables - tables"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"false, false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"logics.initialAdminPassword"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Default admin password"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null))))),Object(l.b)("p",null,"Example conf/settings.properties file (",Object(l.b)("a",{parentName:"p",href:"#appp3-broken"},"section 3"),"):"),Object(l.b)("h2",{id:"fusion_dirconfsettingsproperties"},"$FUSION","_","DIR$/conf/settings.properties"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"db.server=localhost\ndb.name=lsfusion\ndb.user=postgres\ndb.password=pswrd\n\nrmi.port=7652\n")),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"By default, it is assumed that the startup parameter files conf/settings.properties and lsfusion.properties are located in the application server's startup folder. However, with ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Execution_auto_"},"automatic installation")," under GNU Linux symlinks for these files (as well as for ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Journals_and_logs#logs"},"log")," folders)\xa0 are automatically created to ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Execution_auto_#settings-broken"},"other files")," whose layout is better aligned with Linux ideology."))),Object(l.b)("h2",{id:"web-server-client"},"Web server (Client)"),Object(l.b)("h3",{id:"appjava"},"Java"),Object(l.b)("p",null,"Java web server startup parameters are set in the Tomcat launch command, which, in turn, launches this web server (for example, for ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Execution_auto_#webapp-broken"},"automatic")," installation).\xa0"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"System (starting with X)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.oracle.com/technetwork/java/javase/tech/vmoptions-jsp-140102.html"},"Standard")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("p",null,"Standard Java parameters. It is important above all to pay attention to:"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Xmx - maximum memory size. For complex logics, it is recommended that you allocate at least\xa02GB.\xa0"),Object(l.b)("br",null)),Object(l.b)("br",null)))))),Object(l.b)("h3",{id:"applsfusion"},"lsFusion"),Object(l.b)("p",null,"lsFusion startup parameters for the web server can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In web applications' ",Object(l.b)("a",{parentName:"li",href:"http://tomcat.apache.org/tomcat-7.0-doc/config/context.html#Defining_a_context"},"context")," parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"in a web application in the file /WEB-INF/web.xml, the context-param tag (relevant for platform forks)"),Object(l.b)("li",{parentName:"ul"},"in a web application in the file /META-INF/context.xml, Context tag, Parameter\xa0tag (relevant for platform forks)"),Object(l.b)("li",{parentName:"ul"},"in Tomcat, in the file $CATALINA","_","BASE/conf/","[","enginename","]","/","[","hostname","]","/","[","contextpath","]",".xml,\xa0tag Context, tag Parameter, where:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"$CATALINA","_","BASE$ is the folder where Tomcat is installed (for example, with",Object(l.b)("a",{parentName:"li",href:"/platform/docs/next/Execution_auto_#settings-broken"},"automatic")," installation, this folder is $INSTALL","_","DIR/Client)"),Object(l.b)("li",{parentName:"ul"},"[","contextpath","]"," - contextual path of the web application (for example, with ",Object(l.b)("a",{parentName:"li",href:"/platform/docs/next/Execution_auto_#settings-broken"},"automatic"),"\xa0installation this name is empty by default, which in Tomcat is equivalent to the name ROOT; with ",Object(l.b)("a",{parentName:"li",href:"/platform/docs/next/Execution_manual_#tomcat-broken"},"manual")," installation it\xa0depends on the name of the war file),\xa0"),Object(l.b)("li",{parentName:"ul"},"[","enginename","]"," and\xa0","[","hostname","]"," are the names of the tomcat implementation mechanism and the web server computer (for example, with ",Object(l.b)("a",{parentName:"li",href:"/platform/docs/next/Execution_auto_#settings-broken"},"automatic"),"\xa0installation these names are catalina and localhost respectively)"))),Object(l.b)("li",{parentName:"ul"},"in Tomcat, in the file\xa0$CATALINA","_","BASE/conf/server.xml, Context tag, Parameter tag (not recommended)"))),Object(l.b)("li",{parentName:"ul"},"In URL parameters (e.g. ",Object(l.b)("a",{parentName:"li",href:"http://tryonline.lsfusion.org?host=3.3.3.3&port=4444"},"http://tryonline.lsfusion.org?host=3.3.3.3&port = 4444"),")")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("p",null,"host, port, exportName"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"string, int, string"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Connection settings for the application server. Must match the ",Object(l.b)("a",{parentName:"td",href:"#accessapp-broken"},"access parameters")," for the application server."),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"host - application server address"),Object(l.b)("br",null),Object(l.b)("li",null,"port - port of the application server.\xa0Must match the parameter rmi.port"),Object(l.b)("br",null),Object(l.b)("li",null,"exportName - name of the application server. Must match the parameter rmi.exportName"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"localhost, 7652, default")))),Object(l.b)("p",null,"Example Tomcat configuration file (",Object(l.b)("a",{parentName:"p",href:"#webp3-broken"},"section 3")," in context parameters):"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"$CATALINA","_","BASE/conf/","\\","\\","[","enginename","\\","\\","]","/","\\","\\","[","hostname",Object(l.b)("br",{parentName:"strong"}),"]","/ROOT.xml")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'<?xml version=\'1.0\' encoding=\'utf-8\'?>\n<Context>\n    <Parameter name="host" value="localhost" override="false"/>\n    <Parameter name="port" value="7652" override="false"/>\n</Context>\n')),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"In addition to the launch parameters, the platform also has ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Working_parameters"},"system parameters")," which are set a little differently and are relevant mainly for processes of various components of the platform (that is, processes that occur after they are launched)."))))}s.isMDXComponent=!0},751:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(b,".").concat(m)]||p[m]||u[m]||l;return a?r.a.createElement(d,i(i({ref:t},c),{},{components:a})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var c=2;c<l;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);