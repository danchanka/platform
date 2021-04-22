(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{549:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(747)),p={title:"JOIN operator"},i={unversionedId:"JOIN_operator",id:"version-v4/JOIN_operator",isDocsHomePage:!1,title:"JOIN operator",description:"The JOIN operator creates a property that implements a composition.",source:"@site/versioned_docs/version-v4/JOIN_operator.md",slug:"/JOIN_operator",permalink:"/platform/JOIN_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/JOIN_operator.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"IF ... THEN operator",permalink:"/platform/IF_..._THEN_operator"},next:{title:"MAX operator",permalink:"/platform/MAX_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"JOIN")," operator creates a ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"property")," that implements a ",Object(o.b)("a",{parentName:"p",href:"/platform/Composition_JOIN_"},"composition"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'[JOIN] propertyId(expr1, ..., exprN)\n \n[JOIN] "[" operator "]" (expr1, ..., exprN)\n \n[JOIN] "[" expression "]" (expr1, ..., exprN) \n')),Object(o.b)("p",null,'Where "',"[",'" and "',"]",'" are ordinary brackets.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")," "),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"JOIN")," operator creates a property that implements a composition of properties. The ",Object(o.b)("a",{parentName:"p",href:"/platform/Composition_JOIN_"},"main property")," can be defined by one of the three following options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"an ID of the existing property"),Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("a",{parentName:"li",href:"/platform/Property_operators#contextindependent"},"context independent")," ",Object(o.b)("a",{parentName:"li",href:"/platform/Property_operators"},"property operator")," enclosed in brackets."),Object(o.b)("li",{parentName:"ul"},"an ",Object(o.b)("a",{parentName:"li",href:"/platform/Expression"},"expression")," enclosed in brackets.")),Object(o.b)("p",null,"The latter two options allow to use as the main property a property without a name which is created right at the place of use. In certain cases, this can make the code more concise and avoids the explicit declaration of an intermediate property using the ",Object(o.b)("a",{parentName:"p",href:"/platform/Instruction_="},"= instruction"),' that will not be used anywhere else. An operator or expression enclosed in brackets with an equal sign can use external parameters if necessary. When determining the parameters of the created "anonymous" property, the same rules apply as when creating the property in the ',Object(o.b)("a",{parentName:"p",href:"/platform/Instruction_="},"= instruction"),", in the case when the parameters are not defined explicitly.    "),Object(o.b)("p",null,"Formally, the ",Object(o.b)("strong",{parentName:"p"},"JOIN")," operator is also responsible for such constructions as ",Object(o.b)("strong",{parentName:"p"},"propertyID(a, b)"),", i.e. just an existing property with the parameters passed to it. In such cases, when possible, the ",Object(o.b)("strong",{parentName:"p"},"JOIN")," operator will not create a new anonymous property but return the property with the ",Object(o.b)("strong",{parentName:"p"},"propertyID"),".** **"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"Property ID"),". "),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr1, ..., exprN")),Object(o.b)("p",null,"A list of expressions defining the arguments of the main property. The number of expressions should be equal to the number of parameters of the main property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"operator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/Property_operators"},"context-independent")," property operator that is used to create the main property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," which is used to define the main property. Cannot be a single parameter."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"f = DATA INTEGER (INTEGER, INTEGER, INTEGER);\ng = DATA INTEGER (INTEGER, INTEGER);\nh = DATA INTEGER (INTEGER, INTEGER);\nc(a, b) = f(g(a, b), h(b, 3), a);\n\ncount = DATA BPSTRING[255] (INTEGER);\nname = DATA BPSTRING[255] (INTEGER);\nformatted(INTEGER a, INTEGER b) = [FORMULA BPSTRING[255] ' CAST($1 AS TEXT) || \\' / \\' || CAST($2 AS TEXT)'](count(a), name(b));\n")),Object(o.b)("p",null,"Sometimes it\u2019s convenient to define the main property with an expression to simplify the source code and make it more understandable."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Triangle;\ncathetus1 = DATA DOUBLE(Triangle);\ncathetus2 = DATA DOUBLE(Triangle);\n\nhypotenuseSq(triangle) = cathetus1(triangle)*cathetus1(triangle) + cathetus2(triangle)*cathetus2(triangle);\n\nhypotenuseSq2(triangle) = [ x*x + y*y](cathetus1(triangle), cathetus2(triangle)); // a similar property set using composition\n")))}l.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,f=b["".concat(p,".").concat(u)]||b[u]||m[u]||o;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);