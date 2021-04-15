(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{358:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),o=(n(0),n(747)),l={title:"Modules"},s={unversionedId:"Modules",id:"Modules",isDocsHomePage:!1,title:"Modules",description:"A module is a functionally complete part of a project. A module consists of declarations of properties, actions, events, constraints, and other system elements.",source:"@site/docs/Modules.md",slug:"/Modules",permalink:"/platform/next/Modules",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Modules.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Modularity",permalink:"/platform/next/Modularity"},next:{title:"Projects",permalink:"/platform/next/Projects"}},i=[{value:"Dependencies between modules",id:"depends",children:[]},{value:"Namespaces",id:"namespaces",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"module")," is a functionally complete part of a ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Projects"},"project"),". A module consists of declarations of ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Element_identification"},"p"),Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"roperties"),", ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"actions"),", ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Events"},"events"),", ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Constraints"},"constraints"),", and other ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Naming"},"system elements"),"."),Object(o.b)("p",null,"Each module has a name, which must be unique within the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Projects"},"project"),"."),Object(o.b)("h3",{id:"depends"},"Dependencies between modules"),Object(o.b)("p",null,"Usually modules use elements from other modules to describe part of their functionality. Accordingly, if module ",Object(o.b)("strong",{parentName:"p"},"B")," uses elements from module ",Object(o.b)("strong",{parentName:"p"},"A"),", it must be specified in module\xa0",Object(o.b)("strong",{parentName:"p"},"B\xa0"),"that it",Object(o.b)("strong",{parentName:"p"},"*\xa0**"),"depends",Object(o.b)("em",{parentName:"p"}," on ",Object(o.b)("strong",{parentName:"em"},"A"),". Based on these dependencies, all modules in the project are arranged in a certain order in which they are initialized. It is guaranteed that if module ",Object(o.b)("strong",{parentName:"em"},"B\xa0"),"depends on module ",Object(o.b)("strong",{parentName:"em"},"A"),", module ",Object(o.b)("strong",{parentName:"em"},"A\xa0"),"will be initialized before module ",Object(o.b)("strong",{parentName:"em"},"B"),". Circular dependencies between project modules are not"),"\xa0*allowed. \xa0"),Object(o.b)("p",null,"If module\xa0",Object(o.b)("strong",{parentName:"p"},"C"),"\xa0depends on module ",Object(o.b)("strong",{parentName:"p"},"B"),", and module\xa0",Object(o.b)("strong",{parentName:"p"},"B"),"\xa0depends on module ",Object(o.b)("strong",{parentName:"p"},"A"),", we will also assume that module ",Object(o.b)("strong",{parentName:"p"},"C"),"\xa0depends on module ",Object(o.b)("strong",{parentName:"p"},"A"),"."),Object(o.b)("p",null,"Any module always automatically depends on the system module ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/System.lsf"},"System")),", regardless of whether or not this is specified explicitly."),Object(o.b)("h3",{id:"namespaces"},"Namespaces"),Object(o.b)("p",null,"In each module a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Naming#namespace"},"namespace"),"\xa0is specified, containing the names of all system elements created in this module. By default, the module creates its own namespace, the name of which is equal to the name of the module. For the module you can also specify a list of additional namespaces that will have priority\xa0when\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Search"},"finding"),"\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Element_identification"},"system elements"),"."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"Each module in the platform corresponds to exactly one file, which starts with a special ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Module_header"},"header"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE EmployeeExample;     // Defining the module name\n\nREQUIRE System, Utils;      // Listing the modules that the Employee module depends on\nNAMESPACE Employee;         // Setting the namespace\n\nCLASS Employee 'Employee';  // Creating a class\nCLASS Position 'Position'; // Creating another class\n\nemployeePosition(employee) = DATA Position (Employee); // Creating property\n")))}c.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.a.createElement(b,s(s({ref:t},p),{},{components:n})):r.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);