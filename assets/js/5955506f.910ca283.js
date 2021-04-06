(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{323:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(750)),p={title:"FORMULA operator"},s={unversionedId:"FORMULA_operator",id:"version-v4/FORMULA_operator",isDocsHomePage:!1,title:"FORMULA operator",description:"The FORMULA operator creates a property that implements a custom formula.",source:"@site/versioned_docs/version-v4/FORMULA_operator.md",slug:"/FORMULA_operator",permalink:"/platform/docs/FORMULA_operator",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/FORMULA_operator.md",version:"v4",sidebar:"version-v4/docs",previous:{title:"EXCLUSIVE operator",permalink:"/platform/docs/EXCLUSIVE_operator"},next:{title:"GROUP operator",permalink:"/platform/docs/GROUP_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"FORMULA")," operator creates a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Properties"},"property")," that implements a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Custom_formula_FORMULA_"},"custom formula"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"FORMULA [NULL] [className] [syntaxType1] text1, ..., [syntaxTypeN] textN\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"FORMULA")," operator creates a property that executes an arbitrary formula in SQL. It is possible to specify different formulas for different SQL dialects so that these properties are portable between different DBMSs.\xa0"),Object(o.b)("p",null,"This property operator cannot be used inside ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Expression"},"expressions"),"."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NULL")),Object(o.b)("p",null,"Keyword specifying that the property being created may return ",Object(o.b)("strong",{parentName:"p"},"NULL")," if all parameter values are non-",Object(o.b)("strong",{parentName:"p"},"NULL"),". If not specified, then the property must be defined so that for non-",Object(o.b)("strong",{parentName:"p"},"NULL")," parameters it will always return a non-",Object(o.b)("strong",{parentName:"p"},"NULL")," value (failure to fulfill this condition may lead to unpredictable results)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")),Object(o.b)("p",null,"The name of the ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Built-in_classes"},"builtin class"),"\xa0of the value returned by the property. If not specified, the resulting class is considered to be the ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Built-in_classes#commonparentclass"},"common ancestor"),"\xa0of all property operands."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"syntaxType1, ..., syntaxTypeN")),Object(o.b)("p",null,"Keywords defining SQL dialect types. The following types are currently supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PG")," - PostgreSQL syntax"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MS")," - MS SQL Server syntax")),Object(o.b)("p",null,"If the dialect type is not specified explicitly, then the corresponding formula text is set as the default text. Each of the types (or the lack of a type) must appear in the operator no more than once."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"text1, ..., textN")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/docs/IDs#strliteral-broken"},"String literals"),", each of which contains a formula in SQL syntax. The notation ",Object(o.b)("strong",{parentName:"p"},"$1"),", ",Object(o.b)("strong",{parentName:"p"},"$2")," etc. is used to pass property parameters to the formula, where the number denotes the property parameter number. Parameter numbers start from 1. The number of parameters in the created property will be equal to the maximum parameter number specified in the description of the formula."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"round(number, digits) = FORMULA 'round(CAST(($1) as numeric),$2)';  // a property with two parameters: a rounded number and the number of decimal places\ntoString15(str) = FORMULA BPSTRING[15] 'CAST($1 AS character(15))';   // a property that converts the value passed as an argument to a 15-character string.\njumpWorkdays = FORMULA NULL DATE PG 'jumpWorkdays($1, $2, $3)', MS 'dbo.jumpWorkdays($1, $2, $3)'; // a property with two different implementations for different SQL dialects\n")))}l.isMDXComponent=!0},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=l(r),b=a,f=m["".concat(p,".").concat(b)]||m[b]||u[b]||o;return r?n.a.createElement(f,s(s({ref:t},i),{},{components:r})):n.a.createElement(f,s({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var i=2;i<o;i++)p[i]=r[i];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);