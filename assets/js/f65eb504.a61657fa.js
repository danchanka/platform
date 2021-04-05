(window.webpackJsonp=window.webpackJsonp||[]).push([[659],{729:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),s=(r(0),r(751)),o={title:"Projects"},i={unversionedId:"Projects",id:"Projects",isDocsHomePage:!1,title:"Projects",description:"Project is a collection of modules\xa0and additional information (pictures, report design files, etc.) that fully describe the functionality of the information system being created.",source:"@site/docs/Projects.md",slug:"/Projects",permalink:"/platform/docs/next/Projects",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Projects.md",version:"current",sidebar:"docs",previous:{title:"Modules",permalink:"/platform/docs/next/Modules"},next:{title:"Extensions: Overview",permalink:"/platform/docs/next/Extensions"}},l=[{value:"Language",id:"language",children:[]}],c={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Project")," is a collection of ",Object(s.b)("a",{parentName:"p",href:"/platform/docs/next/Modules"},"modules"),"\xa0and additional information (pictures, report design files, etc.) that fully describe the functionality of the information system being created."),Object(s.b)("p",null,'Projects, like modules, can depend on each other. A project graph should "include" a module graph. That is, if module ',Object(s.b)("strong",{parentName:"p"},"A")," ",Object(s.b)("a",{parentName:"p",href:"/platform/docs/next/Modules#depends"},"depends")," on module ",Object(s.b)("strong",{parentName:"p"},"B"),", then module ",Object(s.b)("strong",{parentName:"p"},"A")," project should depend on module ",Object(s.b)("strong",{parentName:"p"},"B")," project."),Object(s.b)("p",null,"Also, as a rule, assembly automation and versioning are supported for projects (for example, assembling a single executable file with all dependencies)."),Object(s.b)("h3",{id:"language"},"Language"),Object(s.b)("p",null,"From a technical standpoint, a project is nothing more than a set of files, so project support is not directly a part of the platform. It is assumed that external tools are used for this, from simple built-in IDEs to complex multi-purpose frameworks (such as ",Object(s.b)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven"),")."),Object(s.b)("p",null,"By default, at startup the platform searches for all files with the LSF extension in the\xa0",Object(s.b)("a",{parentName:"p",href:"/platform/docs/next/Launch_parameters#classpath-broken"},"classpath"),"\xa0of the application server being started, and considers them loaded modules. Modules are loaded in the order of their\xa0",Object(s.b)("a",{parentName:"p",href:"/platform/docs/next/Modules#depends"},"dependencies"),", so if ",Object(s.b)("strong",{parentName:"p"},"A")," depends on\xa0",Object(s.b)("strong",{parentName:"p"},"B")," and ",Object(s.b)("strong",{parentName:"p"},"C"),", then by default ",Object(s.b)("strong",{parentName:"p"},"B")," is initialized first, then ",Object(s.b)("strong",{parentName:"p"},"C"),", and only then ",Object(s.b)("strong",{parentName:"p"},"A"),"."),Object(s.b)("p",null,"The above behavior can however be changed using the appropriate lsFusion application server startup parameters:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/platform/docs/next/Launch_parameters#project-broken"},"logics.includePaths, logics.excludePaths")," - the paths (relative to the classpath) in which the platform will look for LSF files. When specifying these parameters\xa0you can use paths to specific files (for example, A/B/C.lsf) as well as path templates (for example, A/","*"," - all LSF files in folder A and all its subfolders). In addition, in these parameters you can specify several paths/path patterns at once, separated by semicolons - for example, A.lsf; dirB/","*",". The name of a JAR file in the path is ignored (that is, a file in b.jar/C/x.lsf is considered to have the path C/x.lsf). By default, includePaths is equal to ","*"," (that is, all files), and excludedPaths is empty."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/platform/docs/next/Launch_parameters#project-broken"},"logics.topModule")," - the name of the top module. If this parameter is specified (not empty), not all LSF files will be loaded, but only the specified module and all its ",Object(s.b)("a",{parentName:"li",href:"/platform/docs/next/Modules#depends"},"dependencies"),". By default, this parameter is considered not specified (empty)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/platform/docs/next/Launch_parameters#project-broken"},"logics.orderDependencies")," - redefinition of the order of dependencies (set as module names separated by commas). Thus, if ",Object(s.b)("strong",{parentName:"li"},"A")," depends on ",Object(s.b)("strong",{parentName:"li"},"B")," and ",Object(s.b)("strong",{parentName:"li"},"C"),", and this parameter contains ",Object(s.b)("strong",{parentName:"li"},"B")," and ",Object(s.b)("strong",{parentName:"li"},"C"),", with ",Object(s.b)("strong",{parentName:"li"},"C")," placed before ",Object(s.b)("strong",{parentName:"li"},"B"),", then ",Object(s.b)("strong",{parentName:"li"},"C")," will be initialized before ",Object(s.b)("strong",{parentName:"li"},"B"),". By default, this parameter is considered not specified (empty); that is, the REQUIRE order is used in the LSF files themselves.")),Object(s.b)("p",null,"Regardless of the parameters described above, the platform always automatically loads the following system modules: ",Object(s.b)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/System.lsf"},Object(s.b)("strong",{parentName:"a"},"System")),", ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Service.lsf"},"Service")),",\xa0",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Reflection.lsf"},"Reflection")),",\xa0",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Authentication.lsf"},"Authentication")),",\xa0",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Security.lsf"},"Security")),",\xa0",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/SystemEvents.lsf"},"SystemEvents")),",\xa0",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Scheduler.lsf"},"Scheduler")),",\xa0",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Email.lsf"},"Email")),",\xa0",Object(s.b)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Time.lsf"},Object(s.b)("strong",{parentName:"a"},"Time"),","),"\xa0and ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Utils.lsf"},"Utils")),"."))}p.isMDXComponent=!0},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,u=m["".concat(o,".").concat(f)]||m[f]||b[f]||s;return r?n.a.createElement(u,i(i({ref:t},c),{},{components:r})):n.a.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);