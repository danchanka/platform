(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{370:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(746)),o={title:"Development (manual)"},s={unversionedId:"Development_manual_",id:"version-v4/Development_manual_",isDocsHomePage:!1,title:"Development (manual)",description:"To install the application server, IDE, and client, Java version 8 or later must first be installed on the computer.",source:"@site/versioned_docs/version-v4/Development_manual_.md",slug:"/Development_manual_",permalink:"/platform/Development_manual_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Development_manual_.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/install",previous:{title:"Manual installation",permalink:"/platform/Manual_installation"},next:{title:"Execution (manual)",permalink:"/platform/Execution_manual_"}},l=[{value:"Installing the IDE Plugin",id:"installing-the-ide-plugin",children:[]},{value:"Installing an application server via IDE",id:"installing-an-application-server-via-ide",children:[]},{value:"Installing a desktop client",id:"installing-a-desktop-client",children:[]},{value:"Installation in existing Java projects",id:"installation-in-existing-java-projects",children:[{value:"Installing an application server via IDE",id:"installing-an-application-server-via-ide-1",children:[]},{value:"Installing the application server via Maven (only for Maven projects)",id:"maven",children:[]}]}],c={toc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"To install the application server, IDE, and client, Java version 8 or later must first be installed on the computer."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"For the application server to work, it must have access to the PostgreSQL database management server of at least version 9.6. The PostgreSQL server must accept connections using password authentication by the md5 or trust method. You can configure authorization by editing the pg","_","hba.conf file, as described in the\xa0PostgreSQL ",Object(r.b)("a",{parentName:"p",href:"http://www.postgresql.org/docs/9.2/static/auth-pg-hba-conf.html"},"documentation"),"."))),Object(r.b)("h3",{id:"installing-the-ide-plugin"},"Installing the IDE Plugin"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"To install the plug-in, Intellij IDEA version 2020.1 or higher must be installed on the computer."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the IDEA settings (File >\xa0Settings), select Plugins > Browse repositories, find the ",Object(r.b)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/7601-lsfusion"},"lsFusion plugin"),", click Install, and restart IDEA.")),Object(r.b)("h3",{id:"installing-an-application-server-via-ide"},"Installing an application server via IDE"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When\xa0",Object(r.b)("a",{parentName:"li",href:"/platform/IDE#newproject"},"creating a new lsFusion project"),"\xa0click the Download button\xa0opposed to the lsFusion library: IDEA automatically downloads the JAR file of the latest (non-beta) version of the lsFusion server from the\xa0",Object(r.b)("a",{parentName:"li",href:"https://download.lsfusion.org/java"},"central server"),"\xa0and installs this file as a dependency of this project (or rather, as its only module: File \u2192 Project Structure \u2192\xa0Modules \u2192 project name \u2192 Dependencies tab). Also, if necessary, you can download another version of the server (different from the latest) or select a previously downloaded server JAR file on the local disk.\xa0\xa0")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Note that IDEA remembers the downloaded/specified application server file in its settings and automatically sets it when creating other lsFusion projects.\xa0"))),Object(r.b)("h3",{id:"installing-a-desktop-client"},"Installing a desktop client"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"After the server starts, in the start log one of the last lines will be a line with a link to the JNLP file (for example,\xa0",Object(r.b)("a",{parentName:"li",href:"https://download.lsfusion.org/java/lsfusion-client-4.1.jnlp"},"https://download.lsfusion.org/java/lsfusion-client-4.1.jnlp"),"), which when run will automatically install the client using Java Web Start technology.")),Object(r.b)("h2",{id:"installation-in-existing-java-projects"},"Installation in existing Java projects"),Object(r.b)("h3",{id:"installing-an-application-server-via-ide-1"},"Installing an application server via IDE"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Download the lsfusion-server-<version",">",".jar file of the required version (for example, lsfusion-server-4.1.jar) from the\xa0",Object(r.b)("a",{parentName:"li",href:"https://download.lsfusion.org/java"},"central server"),"\xa0to the folder of the required project module (we will call this folder\xa0",Object(r.b)("em",{parentName:"li"},"$FUSION","_","DIR$"),")."),Object(r.b)("li",{parentName:"ul"},"If the database server is located on another computer, and if authorization is enabled on the database server (for example, for Postgres, using the md5 method and if the postgres password is not empty), set the ",Object(r.b)("a",{parentName:"li",href:"/platform/Launch_parameters#connectdb-broken"},"database server connection parameters")," (e.g., by creating a startup ",Object(r.b)("a",{parentName:"li",href:"/platform/Launch_parameters#filesettings-broken"},"settings file")," in the\xa0project folder)"),Object(r.b)("li",{parentName:"ul"},"Add the downloaded file as a dependency of the required project module (File \u2192 Project Structure \u2192\xa0Modules \u2192 module name \u2192 Dependencies tab \u2192 +)\xa0"),Object(r.b)("li",{parentName:"ul"},"Create a\xa0",Object(r.b)("a",{parentName:"li",href:"/platform/IDE#configuration"},"startup configuration"),"\xa0(when creating a new lsFusion project, this and the upper two sections are done automatically).\xa0If the platform is loaded as a library, instead of creating a configuration you can use a Spring bean with the logicsInstance ID from the lsfusion.xml configuration file, and its start() and stop() methods, responsible for starting and stopping the application server, respectively.")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"For an existing maven project, server installation and loading can (and should) be done differently (see below).\xa0"))),Object(r.b)("h3",{id:"maven"},"Installing the application server via Maven (only for Maven projects)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Register in pom.xml or as parent lsfusion.platform.build:logics, or as dependency lsfusion.platform:server (at present these artifacts are not in the central repository, and so the path to the lsFusion repository must be specified additionally). For example:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"<repositories>\n    <repository>\n        <id>lsfusion</id>\n        <name>lsFusion Public Repository</name>\n        <url>http://repo.lsfusion.org</url>\n    </repository>\n</repositories>\n\n<parent>\n    <groupId>lsfusion.platform.build</groupId>\n    <artifactId>logics</artifactId>\n    <version>2.0</version>\n</parent>\n")),Object(r.b)("p",{parentName:"li"},"The first option (with parent) is good in that:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Maven will automatically configure an uber-jar assembly (i.e., a single file containing all the project files). You can start this assembly using maven profile "assemble" - when this profile is activated, a JAR file with an "assembly" postfix is additionally generated in the package phase, containing not only the project files, but also the files of all the project dependencies, including files of the application server itself. However, in cases where the application server is installed separately from the application itself (for example, using ',Object(r.b)("a",{parentName:"p",href:"/platform/Execution_auto_"},"automatic installation"),'), including the application server in the resulting uber-jar is undesirable. Therefore, in addition to "assemble," the platform also supports the "noserver" maven profile, which when activated (along with "assemble"), at creation of a JAR file with the "assembly" postfix the application server files will not be included (example command: mvn package assemble noserver).')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Maven and IDE will automatically determine the source and resources directories (for example, src/main/lsfusion is the default)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Maven will automatically configure weaving of the application server aspects. However, this is only rarely necessary - if the project has application RMI servers (that is, objects inheriting lsfusion.interop.server.RmiServerInterface, which are accessed remotely via RMI), or various system annotations of the application server are used (for example, lsfusion.server. base.caches.IdentityLazy for caching execution results)."))),Object(r.b)("p",{parentName:"li"},"In the second case, all of the above must be manually configured directly by the developer."),Object(r.b)("p",{parentName:"li"},"As for other projects not created using the operation for creating a new lsFusion project, for a maven project you must manually create a\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/Launch_parameters#filesettings-broken"},"settings file"),"\xa0and\xa0a ",Object(r.b)("a",{parentName:"p",href:"/platform/IDE#configuration"},"startup configuration"),"\xa0(or, if the platform needs to be loaded as a library, use a\xa0",Object(r.b)("a",{parentName:"p",href:"#bean-broken"},"special Spring bean"),")"))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If working with a large project, and ",Object(r.b)("a",{parentName:"p",href:"/platform/Metaprogramming"},"metacodes")," are actively being used in it (such as ",Object(r.b)("a",{parentName:"p",href:"https://github.com/lsfusion-solutions/erp"},"ERP"),"), it is recommended that in the IDEA startup parameters (idea.exe.vmoptions or idea64.exe.vmoptions) the Xmx be increased to at least 2gb."))))}p.isMDXComponent=!0},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,u=d["".concat(o,".").concat(b)]||d[b]||m[b]||r;return a?i.a.createElement(u,s(s({ref:t},c),{},{components:a})):i.a.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);