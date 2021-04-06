(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(747)),c={title:"IDE"},o={unversionedId:"IDE",id:"version-v4/IDE",isDocsHomePage:!1,title:"IDE",description:"Table of contents",source:"@site/versioned_docs/version-v4/IDE.md",slug:"/IDE",permalink:"/platform/IDE",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/IDE.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Coding conventions",permalink:"/platform/Coding_conventions"},next:{title:"Examples: Overview",permalink:"/platform/Examples"}},l=[{value:"Table of contents",id:"table-of-contents",children:[]},{value:"Creating a new lsFusion project",id:"newproject",children:[]},{value:"Developing an application",id:"dev",children:[]},{value:"Starting up a server",id:"run",children:[]},{value:"Creating a server startup configuration",id:"configuration",children:[]},{value:"Building an application (with embedded server)",id:"build",children:[]}],s={toc:l};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"table-of-contents"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#newproject"},"Creating a new lsFusion project"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#dev"},"Developing an application"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#run"},"Starting up a server"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#configuration"},"Creating a server startup configuration"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#build"},"Building an application (with embedded server)")))),Object(i.b)("h3",{id:"newproject"},"Creating a new lsFusion project"),Object(i.b)("p",null,"Launch ",Object(i.b)("strong",{parentName:"p"},"IDEA")," and select ",Object(i.b)("em",{parentName:"p"},"Create New Project"),",\xa0or when ",Object(i.b)("strong",{parentName:"p"},"IDEA")," is already opened, select ",Object(i.b)("em",{parentName:"p"},"File")," -> ",Object(i.b)("em",{parentName:"p"},"New")," -> ",Object(i.b)("em",{parentName:"p"},"Project")," from the menu."),Object(i.b)("p",null,Object(i.b)("img",{src:n(854).default}),Object(i.b)("img",{src:n(855).default})),Object(i.b)("p",null,"Select project type ",Object(i.b)("strong",{parentName:"p"},"lsFusion"),".\xa0Make sure that the JDK is set and the link to the library with the \xa0",Object(i.b)("strong",{parentName:"p"},"lsFusion")," is selected (when ",Object(i.b)("a",{parentName:"p",href:"/platform/Development_auto_"},"automatic installation")," is used, this link is set automatically; otherwise, click ",Object(i.b)("em",{parentName:"p"},"Download")," or select the previously downloaded library ",Object(i.b)("em",{parentName:"p"},"Create"),") and then*",Object(i.b)("em",{parentName:"p"},"\xa0**click\xa0"),"Next*."),Object(i.b)("p",null,Object(i.b)("img",{src:n(856).default})),Object(i.b)("p",null,"Fill in the name of the project and the directory where the source files will be stored. Adjust the connection parameters for the database and application server when necessary. Click ",Object(i.b)("em",{parentName:"p"},"Finish"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(857).default})),Object(i.b)("h3",{id:"dev"},"Developing an application"),Object(i.b)("p",null,"All the source code written in ",Object(i.b)("strong",{parentName:"p"},"lsFusion")," is stored by default in src/main/lsfusion."),Object(i.b)("p",null,"To add a new ",Object(i.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),", right-click the corresponding folder and select ",Object(i.b)("em",{parentName:"p"},"New\xa0"),"/ ",Object(i.b)("em",{parentName:"p"},"lsFusion")," from the menu:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(858).default})),Object(i.b)("p",null,"You can also create subfolders (by choosing\xa0",Object(i.b)("em",{parentName:"p"},"Package"),") to group similar modules into a directory."),Object(i.b)("h3",{id:"run"},"Starting up a server"),Object(i.b)("p",null,"When you create a new project, a server startup configuration is also created by default. You can run it by selecting \"Run -> Run 'Run lsFusion server,'\" or by clicking on the symbol\xa0",Object(i.b)("img",{src:n(859).default}),"\xa0next to the caption ",Object(i.b)("em",{parentName:"p"},"Run lsFusion server")," in the upper right corner. If startup is successful, the last line in the log should be ",Object(i.b)("em",{parentName:"p"},"Server has successfully started"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(860).default})),Object(i.b)("p",null,Object(i.b)("img",{src:n(861).default})),Object(i.b)("p",null,"After the server has been successfully started, you can connect to it over a web-based or desktop client via a shortcut on your desktop."),Object(i.b)("h3",{id:"configuration"},"Creating a server startup configuration"),Object(i.b)("p",null,"If the platform is embedded to an existing project (for example, ",Object(i.b)("a",{parentName:"p",href:"/platform/Development_manual_#maven"},"via Maven")," for a Maven project), you may need to manually\xa0create\xa0a server startup configuration for the applications. This is done as follows:"),Object(i.b)("p",null,"In the menu, select ",Object(i.b)("em",{parentName:"p"},"Edit configurations"),":"),Object(i.b)("p",null,Object(i.b)("img",{src:n(862).default})),Object(i.b)("p",null,"In the window that opens, click + in the upper left corner and select ",Object(i.b)("em",{parentName:"p"},"lsFusion Server")," from the drop-down list"),Object(i.b)("p",null,Object(i.b)("img",{src:n(863).default})),Object(i.b)("p",null,"Set the configuration name and the module (if there are several)\xa0for which you need to start the lsFusion application server. In the same window, if necessary, you can specify the build process to be followed at configuration startup, additional parameters for the Java virtual machine, etc."),Object(i.b)("p",null,Object(i.b)("img",{src:n(864).default})),Object(i.b)("h3",{id:"build"},"Building an application (with embedded server)"),Object(i.b)("p",null,"To compile a single JAR file that contains both the developed code and the application server itself, you can use the following ",Object(i.b)("a",{parentName:"p",href:"https://blog.jetbrains.com/idea/2010/08/quickly-create-jar-artifact/"},"guide"),". The result JAR file (",Object(i.b)("em",{parentName:"p"},"artifact"),") can be used to install applications on a production server as described in the section ",Object(i.b)("a",{parentName:"p",href:"/platform/Execution_manual_#appservice"},"installing an applications server as a service"),". Note that since\xa0all modules and the server itself will be inside the same JAR file, the installation process is slightly different:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"in the first section\xa0instead of the server JAR file\xa0this file must be downloaded"),Object(i.b)("li",{parentName:"ul"},"the third section (copying application files to the server) can be skipped")))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,f=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(f,o(o({ref:t},s),{},{components:n})):r.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},854:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241572-4a4a765ac64129f10a365ad7d971e4d9.png"},855:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241575-213520422c6d0b41d9a366fb514ed100.png"},856:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241577-0fd21524f5cbcc20e6c3e8d89112a5ec.png"},857:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241579-07003f2b6fedfb885d369a1fbfd9efd6.png"},858:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241581-f96b6a90d6837c31f9ab841fd7512070.png"},859:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAABkElEQVQ4Ee2UO0gDQRCG/9t75eFdxIhFilgYRII2tjZWCoKNgpUoSMDGFIpFqoCFjZWNjYWdjWAhpBMEiVYKIqJiE9TG+CgUTBC9nZWLEjizeQhpBAcGdnZ2vv13dlkln88LNMlYkzglzB+DjexMYuV4Da/vhV91QXrMQCiEo8Il5g7SOH08bxgohWk+Ez7bQtHkSJ+sYv1sEx/k1IVKYVwIQFWhB/wwbRuZ+yyS+2nkXm5rAuUwIjjEQQrATB2mHcSd8ozk4RK2rjIgQVJoFRgHpy93CxWVQQ/6oVl+bOS2sZhdxkPxqQIohTmcw+NEcLUww4BhteDi7QYzeynsXmc9QM0TfQdEVFImyymaq9IHw2AAUzxLpDCHHLBqtycE+qwYFrqn0OEL14eR2y9e+RQ0oWI6Oorx6DCY4lXlUqXKiBy4XjYBdAYiSPUk0GVFy9M/B3Vh7v5jkSEkYhPQmXR5mSnNus+BBEe71opUfBb94d5yQa2BFCa4g8G2AczHE7D0YK16T075/2k9/Wgk+ASZRpR4pMZctgAAAABJRU5ErkJggg=="},860:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241582-2ce951636d580b6f84da92d0566d0f57.png"},861:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241583-328e1c6d1b0fa845c094f426403b1d9b.png"},862:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/57737363-6d4c9f2696d22cee17e04a988f440f32.png"},863:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/57737364-7899f167483b4e142fb7af0824724254.png"},864:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/57737376-16c8bb42e6a15191a116d9d00c625c46.png"}}]);