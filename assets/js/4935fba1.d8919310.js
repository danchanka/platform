(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(747)),i={title:"Execution (manual)"},s={unversionedId:"Execution_manual_",id:"version-v4/Execution_manual_",isDocsHomePage:!1,title:"Execution (manual)",description:"To install the application server, web server and client, Java version 8 or later must first be installed on the computer.",source:"@site/versioned_docs/version-v4/Execution_manual_.md",slug:"/Execution_manual_",permalink:"/platform/Execution_manual_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Execution_manual_.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/install",previous:{title:"Development (manual)",permalink:"/platform/Development_manual_"}},l=[{value:"Installing the application server as a service",id:"installing-the-application-server-as-a-service",children:[]},{value:"Installing the web server (web and desktop client) as a service",id:"appservice",children:[]},{value:"Installing only the desktop client (on the client&#39;s computer)",id:"installing-only-the-desktop-client-on-the-clients-computer",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To install the application server, web server and client, Java version 8 or later must first be installed on the computer."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For the application server to work, it must have access to the PostgreSQL database management server of at least version 9.6. The PostgreSQL server must accept connections using password authentication by the md5 or trust method. You can configure authorization by editing the pg","_","hba.conf file, as described in the\xa0",Object(o.b)("a",{parentName:"p",href:"http://www.postgresql.org/docs/9.2/static/auth-pg-hba-conf.html"},"PostgreSQL"),"\xa0documentation."))),Object(o.b)("h3",{id:"installing-the-application-server-as-a-service"},"Installing the application server as a service"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Download the file lsfusion-server-<version",">",".jar of the required version (for example lsfusion-server-4.1.jar) from\xa0",Object(o.b)("a",{parentName:"p",href:"https://download.lsfusion.org/java"},"the central server"),"\xa0to some folder (we will call this folder\xa0",Object(o.b)("em",{parentName:"p"},"$FUSION","_","DIR$"),").")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If the database server is located on another computer, and if authorization is enabled on the database server (for example, for Postgres, using the md5 method and if the password postgres is not empty), set the ",Object(o.b)("a",{parentName:"p",href:"/platform/Launch_parameters#connectdb-broken"},"parameters for connecting to the database server")," (e.g. by creating a startup\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Launch_parameters#filesettings-broken"},"settings file"),"in the\xa0",Object(o.b)("em",{parentName:"p"},"$FUSION","_","DIR$")," folder)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Place ",Object(o.b)("a",{parentName:"p",href:"/platform/Modules"},"modules")," developed in the lsFusion language as files with the extension lsf\xa0to the\xa0",Object(o.b)("em",{parentName:"p"},"$FUSION","_","DIR$\xa0 folder")," (or any subfolder). In addition, the rest of the resource files if any must also be placed there (e.g. report files, compiled Java files, pictures, etc.).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a service in the operating system (for example, using\xa0",Object(o.b)("a",{parentName:"p",href:"http://commons.apache.org/daemon/"},"Apache Commons Daemon"),"). In this case you must use the $FUSION","_","DIR$ folder as the working directory and the following line as the start command: Linux"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"bash")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'java -cp ".:lsfusion-server-4.1.jar" lsfusion.server.logics.BusinessLogicsBootstrap\n')),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Sample script to start a service on CentOS"),"\n\xa0Expand source"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'[Unit]\nDescription=lsFusion\nAfter=network.target\n\n[Service]\nType=forking\nEnvironment="PID_FILE=/usr/lsfusion/jsvc-lsfusion.pid"\nEnvironment="JAVA_HOME=/usr/java/latest"\nEnvironment="LSFUSION_HOME=/usr/lsfusion"\nEnvironment="LSFUSION_OPTS=-Xms1g -Xmx4g"\nEnvironment="CLASSPATH=.:lsfusion-server-4.1.jar"\n\nExecStart=/usr/bin/jsvc \\\n        -home $JAVA_HOME \\\n        -jvm server \\\n        -cwd $LSFUSION_HOME \\\n        -pidfile $PID_FILE \\\n        -outfile ${LSFUSION_HOME}/logs/stdout.log \\\n        -errfile ${LSFUSION_HOME}/logs/stderr.log \\\n        -cp ${LSFUSION_HOME}/${CLASSPATH} \\\n        $LSFUSION_OPTS \\\n        lsfusion.server.logics.BusinessLogicsBootstrap\n\nExecStop=/usr/bin/jsvc \\\n        -home $JAVA_HOME \\\n        -stop \\\n        -pidfile $PID_FILE \\\n        lsfusion.server.logics.BusinessLogicsBootstrap\n\n[Install]\nWantedBy=multi-user.target\n')),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Windows")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"cmd")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'java -cp ".;lsfusion-server-4.1.jar" lsfusion.server.logics.BusinessLogicsBootstrap\n')))),Object(o.b)("h3",{id:"appservice"},"Installing the web server (web and desktop client) as a service"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To install the web server, Apache Tomcat version 8 or higher must be installed on the computer."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Download the file lsfusion-client-<version",">",".war of the required version from\xa0",Object(o.b)("a",{parentName:"li",href:"https://download.lsfusion.org/java"},"the central server"),".\xa0For example, lsfusion-client-4.1.war.\xa0"),Object(o.b)("li",{parentName:"ul"},"If the application server is located on another computer, as well as if ",Object(o.b)("a",{parentName:"li",href:"/platform/Launch_parameters#accessapp-broken"},"access parameters to the application server")," are different from the standard, set ",Object(o.b)("a",{parentName:"li",href:"/platform/Launch_parameters#connectapp-broken"},"connection parameters to the application server")," (for example by creating / editing the Tomcat\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Launch_parameters#filewebsettings-broken"},"settings file"),")\xa0"),Object(o.b)("li",{parentName:"ul"},"Deploy the application on Tomcat. The easiest way is to copy Tomcat to the webapps folder. In this case, the file can be renamed first (for example, to lsfusion.war), since the file name will correspond to the context path where the application will be available. If Tomcat uses port 8080, then the web client will be available at:\xa0",Object(o.b)("a",{parentName:"li",href:"http://localhost:8080/"},"http://localhost:8080/"),"<filename of the war file",">",". For example,\xa0",Object(o.b)("a",{parentName:"li",href:"http://localhost:8080/lsfusion/"},"http://localhost:8080/lsfusion"),". An empty context name in Tomcat corresponds to the name ROOT, that is, if the file name is ROOT.war, the web client will be available at\xa0",Object(o.b)("a",{parentName:"li",href:"http://localhost:8080/"},"http://localhost:8080/"),'. You can download the desktop client from the authorization page at "Run Desktop Client" (via Java Web Start).')),Object(o.b)("h3",{id:"installing-only-the-desktop-client-on-the-clients-computer"},"Installing only the desktop client (on the client's computer)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Download the file lsfusion-client-<version",">",".jar of the required version from\xa0",Object(o.b)("a",{parentName:"p",href:"https://download.lsfusion.org/"},"the central server"),".\xa0For example, lsfusion-client-4.1.jar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a shortcut on the desktop. In this case, you need to use as the working directory the directory which contains the downloaded client jar-file. Use the following line as the launch command:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"bash")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"java -jar lsfusion-client-4.1.jar\n")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can also use the method of installing the desktop client for development. To do this, just download the file lsfusion-client-<version",">",".jnlp of the required version from the central server, and then run it locally on the client. This method is faster and more convenient, but less flexible."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The latest versions that are currently under development (snapshots) can be downloaded directly from the maven repository ",Object(o.b)("a",{parentName:"p",href:"https://repo.lsfusion.org/"},"https://repo.lsfusion.org"),". For example, for the server, the full path is as follows: ",Object(o.b)("a",{parentName:"p",href:"https://repo.lsfusion.org/nexus/service/rest/repository/browse/public/lsfusion/platform/server/"},"https://repo.lsfusion.org/nexus/service/rest/repository/browse/public/lsfusion/platform/server/")," (for server and desktop client you need to download jar files with the -assembly postfix)"))))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);