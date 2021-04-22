(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{595:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(747)),s={title:"Custom formula (FORMULA)"},c={unversionedId:"Custom_formula_FORMULA_",id:"Custom_formula_FORMULA_",isDocsHomePage:!1,title:"Custom formula (FORMULA)",description:"The custom formula operator allows you to create a property that calculates defined formula in SQL. You can specify different implementations of the formula for different SQL servers.\xa0The formula is defined as a string, within which the special character $ and the number of this parameter (starting from 1) are used to access the parameter. Accordingly, the number of parameters of the result property will be equal to the greatest of the numbers of the parameters used.",source:"@site/docs/Custom_formula_FORMULA_.md",slug:"/Custom_formula_FORMULA_",permalink:"/platform/next/Custom_formula_FORMULA_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Custom_formula_FORMULA_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Internal call (INTERNAL)",permalink:"/platform/next/Internal_call_INTERNAL_"},next:{title:"Eval (EVAL)",permalink:"/platform/next/Eval_EVAL_"}},i=[{value:"Determining the result class",id:"determining-the-result-class",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"custom formula")," operator allows you to create a ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"property")," that calculates defined formula in SQL. You can specify different implementations of the formula for different SQL servers.\xa0The formula is defined as a string, within which the special character $ and the number of this parameter (starting from 1) are used to access the parameter. Accordingly, the number of parameters of the result property will be equal to the greatest of the numbers of the parameters used.\xa0"),Object(o.b)("p",null,"Using this operator is recommended only if the task cannot be accomplished using other operators, and only if it is known for certain which specific SQL servers can be used, or if the syntax constructs used comply with one of the latest SQL standards."),Object(o.b)("h3",{id:"determining-the-result-class"},"Determining the result class"),Object(o.b)("p",null,"By default, the result class of the custom operator is a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Built-in_classes#commonparentclass"},"common ancestor"),"\xa0of all its operands. If necessary, the developer can specify this class explicitly."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare a property using a custom formula, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/FORMULA_operator"},Object(o.b)("strong",{parentName:"a"},"FORMULA")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"round(number, digits) = FORMULA 'round(CAST(($1) as numeric),$2)';  // a property with two parameters: a rounded number and the number of decimal places\ntoString15(str) = FORMULA BPSTRING[15] 'CAST($1 AS character(15))';   // a property that converts the value passed as an argument to a 15-character string.\njumpWorkdays = FORMULA NULL DATE PG 'jumpWorkdays($1, $2, $3)', MS 'dbo.jumpWorkdays($1, $2, $3)'; // a property with two different implementations for different SQL dialects\n")))}u.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.a.createElement(d,c(c({ref:t},l),{},{components:r})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);