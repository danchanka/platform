(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(745)),o={title:"Journals and logs"},i={unversionedId:"Journals_and_logs",id:"Journals_and_logs",isDocsHomePage:!1,title:"Journals and logs",description:"Logs {logs}",source:"@site/docs/Journals_and_logs.md",slug:"/Journals_and_logs",permalink:"/platform/next/Journals_and_logs",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Journals_and_logs.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Scheduler",permalink:"/platform/next/Scheduler"},next:{title:"Profiler",permalink:"/platform/next/Profiler"}},c=[{value:"Logs",id:"logs",children:[]},{value:"Logs",id:"logs",children:[]}],s={toc:c};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"logs"},"Logs"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Error log (fig. 1).")),Object(l.b)("p",null,"This log contains all errors that occurred during the operation. Errors are divided into the following classes (the \xabObject class\xbb column):"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"errors that occurred on the server \u2013\u2013 errors are displayed on a white background and are included in class \xabException on server\xbb;"),Object(l.b)("li",{parentName:"ul"},"errors that occurred on the server and were received by the client application \u2013\u2013 errors are displayed on a pink background and are included in class \xabException on server (from client)\xbb;"),Object(l.b)("li",{parentName:"ul"},"errors that occurred in the client application \u2013 errors are displayed on a yellow background and fall into two classes: \xabException on client\xbb and \xabException on web client\xbb;"),Object(l.b)("li",{parentName:"ul"},"connection errors \u2013 errors are displayed on a blue background and are divided into two classes:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\xabTemporary connection loss\xbb - connection with the server was interrupted, but was then restored;"),Object(l.b)("li",{parentName:"ul"},"\xabPermanent connection loss\xbb - connection with the server was interrupted and could not be restored;")))),Object(l.b)("p",null,Object(l.b)("img",{src:n(836).default})),Object(l.b)("p",null,"\xa0Fig. 1 Error log."),Object(l.b)("p",null,"The \xabException trace\xbb section displays the java stack for the error; the \xabException LSF trace\xbb displays the lsfusion stack.\xa0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Connection Log (fig. 2).")),Object(l.b)("p",null,Object(l.b)("img",{src:n(837).default}),"**\xa0**"),Object(l.b)("p",null,"Fig. 2 Connection Log."),Object(l.b)("p",null,"The log stores information about users who connected to the system, from which computer, the characteristics of that computer, as well as information about the date and time of connection / disconnection. On the form, you can display the users currently working with the database: \xabActive connections\xbb."),Object(l.b)("p",null,"The \xabForm\xbb section shows which forms the user entered and how many times. The \xabSession\xbb section lets you trace when changes were applied, for some forms."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The startup log stores information about the dates and times when the application server was started (restarted). You can also see the name of the computer on which the server is installed and the version of the application (if filled in during the build).")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The change log contains more detailed information about the changes which were reflected in the \xabSession\xbb section of the connection log (fig. 3.).")),Object(l.b)("p",null,Object(l.b)("img",{src:n(838).default})),Object(l.b)("p",null,"Fig. 3 Change log."),Object(l.b)("p",null,"The \xabChange\xbb column displays a list of Properties (columns) where the values changed, as well as the number of changes (rows). Only changes in the current form are logged: dependent Properties that change simultaneously on other tables do not feature on this list."),Object(l.b)("p",null,"The form lets you filter the changes made by users (excluding system changes) by checking \xabOnly user changes\xbb."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The client application log contains information about the quality of the connection while working with the application server for a given period of time (fig. 4.).")),Object(l.b)("p",null,Object(l.b)("img",{src:n(839).default})),Object(l.b)("p",null,"Fig. 4 Client application log."),Object(l.b)("p",null,"As well as system memory indicators, you can analyze the average response time (ping) in milliseconds and the memory available to and used by the java application on client computers in the upper part of the form. The period to be analyzed is set by entering \xabDate from\xbb and \xabDate to\xbb in the \xabDate and time\xbb section. In addition to dates, you can also set a threshold value here for the same indicators (ping and memory)\u2013this allows you to get the total time (in seconds) when the client PC has exceeded the threshold values."),Object(l.b)("p",null,"The \xabData\xbb tab at the bottom provides a chronology of changes in response time and in memory available and used. This information is displayed for the Desktop client only."),Object(l.b)("p",null,"How much information should be stored in these logs is indicated in the Admin form ","\\","\\"," Settings ","\\","\\"," Logging tab (fig. 5.)."),Object(l.b)("p",null,Object(l.b)("img",{src:n(840).default})),Object(l.b)("p",null,"Fig. 5 Setting the number of days for logging."),Object(l.b)("p",null,"If you need to track changes to the individual values of any\xa0 Properties (columns), a mechanism for user logging has been developed to allow you to do it. For example, let's say you need to record changes to an employee's last name in the Employees directory. To do this:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"go to any entry in the \xabSurname\xbb column and right-click to bring up the \xabConfigure property policy\xbb menu (fig. 6.);")),Object(l.b)("p",null,Object(l.b)("img",{src:n(841).default})),Object(l.b)("p",null,"Fig. 6 Select a property to log changes."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"in the \xabSecurity policy\xbb form, check \xabLogged by user\xbb and click \xabOK\xbb (fig. 7.);")),Object(l.b)("p",null,Object(l.b)("img",{src:n(842).default})),Object(l.b)("p",null,"Fig. 7 Setting user logging."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"once you restart the application server, right-clicking on the \xabSurname\xbb property will bring up an additional \xabShow Change History\xbb menu item. If the surname for the current record has been changed by someone, then this will be reflected in the property change history (fig. 8).")),Object(l.b)("h3",{id:""},Object(l.b)("img",{src:n(843).default})),Object(l.b)("p",null,"Fig. 8. Property change history."),Object(l.b)("p",null,"The retention time for these logs is set to the same retention time as for the Change Log."),Object(l.b)("h3",{id:"logs"},"Logs"),Object(l.b)("p",null,"The following set of logs is supported for each platform component in the platform:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Component"),Object(l.b)("th",{parentName:"tr",align:null},"Folder"),Object(l.b)("th",{parentName:"tr",align:null},"Logs"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Application server (Server)"),Object(l.b)("td",{parentName:"tr",align:null},"$FUSION_DIR$/logs, where $FUSION_DIR$ is the application server startup folder"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"stdout - standard output log (output to the standard output stream, i.e. to the OS console, IDE, etc.). Includes start and explain logs."),Object(l.b)("br",null),Object(l.b)("li",null,"stderr - general error log"),Object(l.b)("br",null),Object(l.b)("li",null,"start - a log of the stop and start process"),Object(l.b)("br",null),Object(l.b)("li",null,"remote, invocation - logs of processes related to accessing the application server"),Object(l.b)("br",null),Object(l.b)("li",null,"sql, sqlhand, sqlconnection, sqlconflict, sqladjust - logs of processes related to accessing the database server"),Object(l.b)("br",null),Object(l.b)("li",null,"explain, explaincompile - logs where query plans are displayed (database server and application server, respectively)"),Object(l.b)("br",null),Object(l.b)("li",null,"lru - log of memory management processes (mainly LRU caches)"),Object(l.b)("br",null),Object(l.b)("li",null,"allocatedbytes - log of memory allocation processes"),Object(l.b)("br",null),Object(l.b)("li",null,"assert - a log of various checks on meeting specified conditions (or rather, non-meeting)"),Object(l.b)("br",null),Object(l.b)("li",null,"mail - mail log"),Object(l.b)("br",null),Object(l.b)("li",null,"jasperReports - JasperReports log"),Object(l.b)("br",null),Object(l.b)("li",null,"jdbc - jdbc driver log"),Object(l.b)("br",null),Object(l.b)("li",null,"exinfo - a log of additional information (not included in the above)"),Object(l.b)("br",null)),Object(l.b)("br",null)))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Web server (Client)"),Object(l.b)("td",{parentName:"tr",align:null},"$CATALINA_BASE$/logs,\xa0\xa0where\xa0$CATALINA_BASE$ is the folder where Tomcat is installed"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"catalina.out - general output log"),Object(l.b)("br",null),Object(l.b)("li",null,"gwtlog, gwtlog-err - GWT logs"),Object(l.b)("br",null),Object(l.b)("li",null,"invocation -\xa0logs of processes related to accessing the web server"),Object(l.b)("br",null)))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Desktop client"),Object(l.b)("td",{parentName:"tr",align:null},"$USER_DIR$/.fusion/logs,\xa0where $USER_DIR$ is the user folder"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"stdout - standard output log (output to the standard output stream, i.e. to the OS console, IDE, etc.)."),Object(l.b)("br",null),Object(l.b)("li",null,"stderr - general error log"),Object(l.b)("br",null),Object(l.b)("li",null,"remote, invocation - logs of processes related to accessing the application server"),Object(l.b)("br",null),Object(l.b)("li",null,"jasperReports - JasperReports log"),Object(l.b)("br",null)))))),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"With ",Object(l.b)("a",{parentName:"p",href:"/platform/next/Execution_auto_"},"automatic installation")," under Linux, symlinks for these folders (as well as for the ",Object(l.b)("a",{parentName:"p",href:"/platform/next/Launch_parameters#applsfusion"},"lsFusion launch parameters"),") are automatically created to ",Object(l.b)("a",{parentName:"p",href:"/platform/next/Execution_auto_#logs-broken"},"other folders")," whose location is better aligned with Linux ideology."))))}b.isMDXComponent=!0},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,h=u["".concat(o,".").concat(p)]||u[p]||d[p]||l;return n?a.a.createElement(h,i(i({ref:t},s),{},{components:n})):a.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},836:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241132-a78ad45f17ae5241063f3bed45a573fc.png"},837:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241133-5696a142aee31ad27fa735a5fb071342.png"},838:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241134-77c906c0463d46fcfdeb0daa6c8f1b1d.png"},839:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241135-746459cb2512064a6afcf809a358f92d.png"},840:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241136-82a4ded811cb69cd37024f69d542a851.png"},841:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241138-4bbe3199b2d5daecd4f2f189ddac25b5.png"},842:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241139-757d6d4e309da6be74572557eea3aa48.png"},843:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241140-befbd6aed40287bfe38660bddbaa7ba9.png"}}]);