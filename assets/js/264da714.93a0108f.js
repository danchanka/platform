(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(746)),o={title:"Set operations: Overview",sidebar_label:"Overview"},i={unversionedId:"Set_operations",id:"version-v4/Set_operations",isDocsHomePage:!1,title:"Set operations: Overview",description:"One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more properties are not\xa0NULL. In the property logic such an operation is the calculation of various\xa0aggregate functions.",source:"@site/versioned_docs/version-v4/Set_operations.md",slug:"/Set_operations",permalink:"/platform/Set_operations",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Set_operations.md",version:"v4",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",permalink:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},next:{title:"Grouping (GROUP)",permalink:"/platform/Grouping_GROUP_"}},c=[{value:"Aggregate functions",id:"func",children:[]},{value:"Operation correctness",id:"correct",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more ",Object(l.b)("a",{parentName:"p",href:"/platform/Properties"},"properties")," are not\xa0",Object(l.b)("strong",{parentName:"p"},"NULL"),". In the property logic such an operation is the calculation of various\xa0",Object(l.b)("em",{parentName:"p"},"aggregate functions"),".\xa0"),Object(l.b)("h3",{id:"func"},"Aggregate functions"),Object(l.b)("p",null,"An aggregate function\xa0calculates a certain\xa0",Object(l.b)("em",{parentName:"p"},"result"),"\xa0as a single object on a set of object collections. This function is defined by the\xa0",Object(l.b)("em",{parentName:"p"},"initial value"),"\xa0(typically\xa0",Object(l.b)("strong",{parentName:"p"},"NULL"),"),\xa0",Object(l.b)("a",{parentName:"p",href:"/platform/Properties"},"properties"),"\xa0that it uses (",Object(l.b)("em",{parentName:"p"},"operands"),"),\xa0",Object(l.b)("em",{parentName:"p"},"operation of addition"),"\xa0to the\xa0",Object(l.b)("em",{parentName:"p"},"intermediate result"),"\xa0of the current operand values, and\xa0",Object(l.b)("em",{parentName:"p"},"conversion function"),"\xa0of the intermediate result to the final (typically the intermediate result is the final result)."),Object(l.b)("p",null,"Aggregate function is\xa0",Object(l.b)("em",{parentName:"p"},"commutative")," if the order in which the object collections of the original set are iterated over does not matter when calculating the result.\xa0"),Object(l.b)("p",null,"The table below shows the currently supported types of aggregate functions:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type/instruction option"),Object(l.b)("th",{parentName:"tr",align:null},"Initial value"),Object(l.b)("th",{parentName:"tr",align:null},"Names of the operands"),Object(l.b)("th",{parentName:"tr",align:null},"Add operation"),Object(l.b)("th",{parentName:"tr",align:null},"Conversion function"),Object(l.b)("th",{parentName:"tr",align:null},"Commutativity"),Object(l.b)("th",{parentName:"tr",align:null},"Data type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SUM"),Object(l.b)("td",{parentName:"tr",align:null},"NULL"),Object(l.b)("td",{parentName:"tr",align:null},"operand"),Object(l.b)("td",{parentName:"tr",align:null},"result = result (+) operand"),Object(l.b)("td",{parentName:"tr",align:null},"result"),Object(l.b)("td",{parentName:"tr",align:null},"+"),Object(l.b)("td",{parentName:"tr",align:null},"number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MAX"),Object(l.b)("td",{parentName:"tr",align:null},"NULL"),Object(l.b)("td",{parentName:"tr",align:null},"operand"),Object(l.b)("td",{parentName:"tr",align:null},"result = max(result, operand)"),Object(l.b)("td",{parentName:"tr",align:null},"result"),Object(l.b)("td",{parentName:"tr",align:null},"+"),Object(l.b)("td",{parentName:"tr",align:null},"any comparable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MIN"),Object(l.b)("td",{parentName:"tr",align:null},"NULL"),Object(l.b)("td",{parentName:"tr",align:null},"operand"),Object(l.b)("td",{parentName:"tr",align:null},"result = min(result, operand)"),Object(l.b)("td",{parentName:"tr",align:null},"result"),Object(l.b)("td",{parentName:"tr",align:null},"+"),Object(l.b)("td",{parentName:"tr",align:null},"any comparable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"CONCAT")),Object(l.b)("td",{parentName:"tr",align:null},"NULL"),Object(l.b)("td",{parentName:"tr",align:null},"separator, operand"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"result = CONCAT separator, result, operand")),Object(l.b)("td",{parentName:"tr",align:null},"result"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LAST / PREV"),Object(l.b)("td",{parentName:"tr",align:null},"NULL"),Object(l.b)("td",{parentName:"tr",align:null},"where, operand"),Object(l.b)("td",{parentName:"tr",align:null},"result = IF where THEN operand ELSE result"),Object(l.b)("td",{parentName:"tr",align:null},"result"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"any"))))),Object(l.b)("p",null,"From the perspective of determining the set of object collections and the result display method, four main operators for working with sets can be distinguished:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/platform/Grouping_GROUP_"},"Group (GROUP)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/platform/Partitioning_sorting_PARTITION_..._ORDER_"},"Partition/order (PARTITION ... ORDER)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/platform/Recursion_RECURSION_"},"Recursion (RECURSION)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/platform/Distribution_UNGROUP_"},"Distribution (UNGROUP)"))),Object(l.b)("h3",{id:"correct"},"Operation correctness"),Object(l.b)("p",null,"You should consider that during each operation on a set of object collections, this set must be finite. In this case, the operation is called\xa0",Object(l.b)("em",{parentName:"p"},"correct"),"."),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS A;\nd = DATA INTEGER (A);\n\nf (b) = GROUP SUM 1 IF d(a) < b;\nmessageF  { MESSAGE f(5); } // will be executed successfully\n\ng = GROUP SUM f(b);\nmessageG  { MESSAGE g(); } // f(b) is not NULL for infinite number b, the platform will throw an error\n\nFORM f\n    OBJECTS d=DATE\n;\n\nprintFWithD { PRINT f OBJECTS d=currentDate(); } // will be executed successfully\n\nprintFWithoutD { PRINT f; } // there is no filter for dates, and d IS DATE is not NULL for an infinite number d, the platform will throw an error\n")),Object(l.b)("p",null,"There are several non-trivial cases when the operation is correct but the platform cannot determine this. For example, if the only limiting condition for a parameter is whether it falls within the range:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"hs = GROUP SUM 1 IF (a AS INTEGER) >= 4 AND a <= 6;\nmessageHS  { MESSAGE hs(); } // theoretically, it should return 3, but the platform will still throw an error\nhi = GROUP SUM 1 IF iterate(a, 4, 6); // workaround: to work with intervals, the iterate property can be used (which, in turn, is implemented through recursion)\n")))}p.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||l;return n?a.a.createElement(d,i(i({ref:t},b),{},{components:n})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);