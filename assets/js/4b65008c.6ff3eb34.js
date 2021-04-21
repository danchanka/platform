(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(747)),i={title:"Module header"},l={unversionedId:"Module_header",id:"version-v4/Module_header",isDocsHomePage:!1,title:"Module header",description:"Each module begins with a header.",source:"@site/versioned_docs/version-v4/Module_header.md",slug:"/Module_header",permalink:"/platform/Module_header",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Module_header.md",version:"v4",lastUpdatedAt:1619001833,formattedLastUpdatedAt:"4/21/2021",sidebar:"version-v4/learn",previous:{title:"Instructions",permalink:"/platform/Instructions"},next:{title:"Instruction =",permalink:"/platform/Instruction_="}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Examples",id:"examples",children:[]}]}],c={toc:p};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each ",Object(o.b)("a",{parentName:"p",href:"/platform/Modules"},"module")," begins with a ",Object(o.b)("em",{parentName:"p"},"header"),"."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"MODULE name;\n[REQUIRE moduleName1, ..., moduleNameN;]\n[PRIORITY namespaceName1, ..., namespaceNameM;]\n[NAMESPACE namespaceName;]\n")),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The module header can consist of four special instructions, in the following order:"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"MODULE"),"  instruction defines the module name. It is required. Each module within one ",Object(o.b)("a",{parentName:"p",href:"/platform/Projects"},"project")," must have a unique name."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"REQUIRE")," instruction defines the list of modules on which the current module ",Object(o.b)("a",{parentName:"p",href:"/platform/Modules#depends"},"depends"),". If the ",Object(o.b)("inlineCode",{parentName:"p"},"REQUIRE")," instruction is absent, that is equivalent to depending only on the ",Object(o.b)("inlineCode",{parentName:"p"},"System")," module."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"PRIORITY")," instruction defines the list of additional ",Object(o.b)("a",{parentName:"p",href:"/platform/Naming#namespace"},"namespaces")," that will have priority in ",Object(o.b)("a",{parentName:"p",href:"/platform/Search"},"finding")," ",Object(o.b)("a",{parentName:"p",href:"/platform/Element_identification"},"system elements"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"NAMESPACE")," instruction defines the module's namespace.  "),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"name")),Object(o.b)("p",{parentName:"li"},"  The name of the module. ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),". Module names cannot contain an underscore.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"moduleName1, ..., moduleNameN")),Object(o.b)("p",{parentName:"li"},"  A list of the names of modules that the current module depends on. Each name is a simple ID. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"namespaceName1, ..., namespaceNameM")),Object(o.b)("p",{parentName:"li"},"  A list of namespace names. Each name is a simple ID. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"namespaceName")),Object(o.b)("p",{parentName:"li"},"  The name of the module namespace. A simple ID that cannot contain an underscore. If the ",Object(o.b)("inlineCode",{parentName:"p"},"NAMESPACE")," instruction is not used in the header, the name of the current module's namespace will be equal to the name of the module. "))),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE EmployeeExample;     // Defining the module name\n\nREQUIRE System, Utils;      // Listing the modules that the Employee module depends on\nNAMESPACE Employee;         // Setting the namespace\n\nCLASS Employee 'Employee';  // Creating a class\nCLASS Position 'Position'; // Creating another class\n\nemployeePosition(employee) = DATA Position (Employee); // Creating property\n")))}m.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=m(n),d=a,b=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(b,l(l({ref:t},c),{},{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);