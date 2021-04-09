(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(746)),i={title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)"},l={unversionedId:"Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",id:"Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",isDocsHomePage:!1,title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",description:"The selection operator creates a property that determines for a set of\xa0conditions\xa0which condition is met, and returns the value of the result corresponding to that condition. If none of the conditions is met, then the value of the created property will be NULL.",source:"@site/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md",slug:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",permalink:"/platform/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Property signature (CLASS)",permalink:"/platform/next/Property_signature_CLASS_"},next:{title:"Set operations",permalink:"/platform/next/Set_operations"}},c=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Implicit definition",id:"implicit-definition",children:[]},{value:"Single form",id:"single",children:[]},{value:"Determining the result class",id:"determining-the-result-class",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"selection")," operator creates a property that determines for a set of\xa0",Object(a.b)("em",{parentName:"p"},"conditions\xa0"),"which condition is met, and returns the value of the ",Object(a.b)("em",{parentName:"p"},"result")," corresponding to that condition. If none of the conditions is met, then the value of the created property will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),".\xa0"),Object(a.b)("p",null,"All conditions and results are defined as some properties and/or parameters. Accordingly, a condition ",Object(a.b)("em",{parentName:"p"},"is satisfied")," if the value of the property or parameter by which this condition is set is not equal to ",Object(a.b)("strong",{parentName:"p"},"NULL"),".\xa0"),Object(a.b)("h3",{id:"poly"},"Polymorphic form"),Object(a.b)("p",null,"The platform also allows you to define a condition and the corresponding result with one property. In this case, the condition may be either matching the property's ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Property_signature_CLASS_"},"signature"),",\xa0or the property itself. We will call this the",Object(a.b)("em",{parentName:"p"},"polymorphic")," form of the operator."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Note that the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Extremum_MAX_MIN_"},"extremum operator")," and logical operators basically are also varieties of the selection operator (and of\xa0its polymorphic form, i.e. the conditions and result are defined by one property)"))),Object(a.b)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),Object(a.b)("p",null,"The selection operator lets you specify that all its conditions are ",Object(a.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(a.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),Object(a.b)("h3",{id:"implicit-definition"},"Implicit definition"),Object(a.b)("p",null,"This operator supports\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/next/Property_extension"},"implicit definition"),"\xa0using the technique of extensions, which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),Object(a.b)("h3",{id:"single"},"Single form"),Object(a.b)("p",null,"The\xa0",Object(a.b)("em",{parentName:"p"},"single\xa0"),"form of the selection operator checks exactly one condition. If this condition is met, the value of the specified result is returned. It is also possible to specify an\xa0",Object(a.b)("em",{parentName:"p"},"alternative result\xa0"),"which value is returned if the condition is not met."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"))),Object(a.b)("h3",{id:"determining-the-result-class"},"Determining the result class"),Object(a.b)("p",null,"The result class of the selection operator is the common ancestor (builtin or ",Object(a.b)("a",{parentName:"p",href:"/platform/next/User_classes#commonparentclass"},"user-defined"),") of its operands."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To create a property implementing a general form of selection, the\xa0",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/next/CASE_operator"},"CASE"))," operator is used. The polymorphic form of the selection operator is implemented using the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/next/MULTI_operator"},"MULTI")),",\xa0",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/next/OVERRIDE_operator"},"OVERRIDE"),"\xa0and ",Object(a.b)("a",{parentName:"strong",href:"/platform/next/EXCLUSIVE_operator"},"EXCLUSIVE")),",",Object(a.b)("strong",{parentName:"p"},"\xa0operators; the"),"single form using the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/next/IF_operator"},"IF")),"\xa0and ",Object(a.b)("strong",{parentName:"p"},"IF ... THEN")," operator (the only operator that allows the specification of an alternative result)."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Color;\nid = DATA STRING[100] (Color);\n\nbackground 'Color' (Color c) = CASE\n    WHEN id(c) == 'Black' THEN RGB(0,0,0)\n    WHEN id(c) == 'Red' THEN RGB(255,0,0)\n    WHEN id(c) == 'Green' THEN RGB(0,255,0)\n;\n\nid (TypeExecEnv type) = CASE EXCLUSIVE\n    WHEN type == TypeExecEnv.materialize THEN 3\n    WHEN type == TypeExecEnv.disablenestloop THEN 2\n    WHEN type == TypeExecEnv.none THEN 1\n    ELSE 0\n;\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"nameMulti (Human h) = MULTI 'Male' IF h IS Male, 'Female' IF h IS Female;\n\nCLASS Ledger;\nCLASS InLedger : Ledger;\nquantity = DATA INTEGER (InLedger);\n\nCLASS OutLedger : Ledger;\nquantity = DATA INTEGER (OutLedger);\n\nsignedQuantity (Ledger l) = MULTI quantity[InLedger](l), quantity[OutLedger](l);\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Group;\nmarkup = DATA NUMERIC[8,2] (Group);\n\nmarkup = DATA NUMERIC[8,2] (Book);\ngroup = DATA Group (Book);\noverMarkup (Book b) = OVERRIDE markup(b), markup(group(b));\n\nnotNullDate (INTEGER i) = OVERRIDE date(i), 2010_01_01;\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"background 'Color' (INTEGER i) = EXCLUSIVE RGB(255,238,165) IF i <= 5,\n                                                   RGB(255,160,160) IF i > 5;\n\nCLASS Human;\n\nCLASS Male : Human;\nCLASS Female : Human;\n\nname(Human h) = EXCLUSIVE 'Male' IF h IS Male, 'Female' IF h IS Female;\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"name = DATA STRING[100] (Book);\nhasName (Book b) = TRUE IF name(b);\n\nbackground (Book b) = RGB(224, 255, 128) IF b IS Book;\n\ncountTags (Book b) = GROUP SUM 1 IF in(b, Tag t);\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"price1 = DATA NUMERIC[10,2] (Book);\nprice2 = DATA NUMERIC[10,2] (Book);\nmaxPrice (Book b) = IF price1(b) > price2(b) THEN price1(b) ELSE price2(b);\n\nsex (Human h) = IF h IS Male THEN 'Male' ELSE ('Female' IF h IS Female); // if h is of another class, it will be NULL\n\nisDifferent(a, b) = IF a != b THEN TRUE;\n")))}s.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||a;return n?o.a.createElement(u,l(l({ref:t},p),{},{components:n})):o.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);