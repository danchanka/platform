(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{746:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=p(n),O=r,d=s["".concat(b,".").concat(O)]||s[O]||u[O]||l;return n?a.a.createElement(d,c(c({ref:t},i),{},{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var i=2;i<l;i++)b[i]=n[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(746)),b={title:"String operators (+, CONCAT, SUBSTRING)"},c={unversionedId:"String_operators_+_CONCAT_SUBSTRING_",id:"version-v4/String_operators_+_CONCAT_SUBSTRING_",isDocsHomePage:!1,title:"String operators (+, CONCAT, SUBSTRING)",description:"String operators are operators which parameters and result are the properties which values are instances of the string classes. The platform currently supports the following string operators:",source:"@site/versioned_docs/version-v4/String_operators_+_CONCAT_SUBSTRING_.md",slug:"/String_operators_+_CONCAT_SUBSTRING_",permalink:"/platform/String_operators_+_CONCAT_SUBSTRING_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/String_operators_+_CONCAT_SUBSTRING_.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Extremum (MAX, MIN)",permalink:"/platform/Extremum_MAX_MIN_"},next:{title:"Structure operations (STRUCT, [])",permalink:"/platform/Structure_operations_STRUCT_"}},o=[{value:"Determining the result class",id:"determining-the-result-class",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"String operators are operators which parameters and result are the properties which values are instances of the string classes. The platform currently supports the following string operators:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Operator",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Name",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Description",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Example",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Result",Object(l.b)("br",null)),Object(l.b)("br",null))))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"+, ",Object(l.b)("strong",null,Object(l.b)("a",{parentName:"td",href:"/platform/CONCAT_operator"},"CONCAT")))),Object(l.b)("td",{parentName:"tr",align:null},"Concatenation"),Object(l.b)("td",{parentName:"tr",align:null},"Takes two operands and returns a string obtained by concatenating the strings specified in the operands"),Object(l.b)("td",{parentName:"tr",align:null},"'a' + 'b'"),Object(l.b)("td",{parentName:"tr",align:null},"'ab'")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"SUBSTRING")),Object(l.b)("td",{parentName:"tr",align:null},"Substring"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Takes three operands and\xa0returns a substring obtained from the string specified in the first operand, starting with the character specified in the second operand, and having length specified in the third operand")),Object(l.b)("td",{parentName:"tr",align:null},"SUBSTRING('abc', 2, 2)"),Object(l.b)("td",{parentName:"tr",align:null},"'bc'")))),Object(l.b)("p",null,"The ",Object(l.b)("strong",{parentName:"p"},"+")," and ",Object(l.b)("strong",{parentName:"p"},"SUBSTRING")," operators return ",Object(l.b)("strong",{parentName:"p"},"NULL")," if one of the operands is ",Object(l.b)("strong",{parentName:"p"},"NULL"),".\xa0The ",Object(l.b)("strong",{parentName:"p"},"CONCAT"),"\xa0operator treats\xa0",Object(l.b)("strong",{parentName:"p"},"NULL"),"\xa0value of the operand as an empty string (however, concatenation of two ",Object(l.b)("strong",{parentName:"p"},"NULL")," values still returns ",Object(l.b)("strong",{parentName:"p"},"NULL"),"). Also, in the ",Object(l.b)("strong",{parentName:"p"},"CONCAT")," operator you can optionally specify the third operand (",Object(l.b)("em",{parentName:"p"},"delimiter"),") which will be inserted if and only if both operands are not ",Object(l.b)("strong",{parentName:"p"},"NULL"),". For example, CONCAT ' ', 'John', 'Smith' = 'John Smith', but CONCAT ' ', 'John', NULL = 'John'."),Object(l.b)("h3",{id:"determining-the-result-class"},"Determining the result class"),Object(l.b)("p",null,"The result class is defined as:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Operator"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"+"),", ",Object(l.b)("strong",null,"CONCAT")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("pre",null,Object(l.b)("code",null,"result = STRING","[p1.blankPadded AND p2.blankPadded, p1.caseInsensitive OR p2.caseInsensitive, p1.length + p2.length]")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"SUBSTRING(p, from, length)")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("pre",null,Object(l.b)("code",null,"result = STRING","[p.blankPadded, p.caseInsensitive, length]")))))),Object(l.b)("p",null,"where ",Object(l.b)("em",{parentName:"p"},"blankPadded"),",\xa0",Object(l.b)("em",{parentName:"p"},"caseInsensitive"),"\xa0and\xa0",Object(l.b)("em",{parentName:"p"},"length")," are determined similarly to the rules for construction of a common ancestor\xa0for two\xa0built-in classes (Strings family)."),Object(l.b)("p",null,"In the + operator, operands which classes are other than string are cast to strings in accordance with the following table:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Class"),Object(l.b)("th",{parentName:"tr",align:null},"Cast class"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("strong",null,"DATE"),", ",Object(l.b)("strong",null,"DATETIME"),", ",Object(l.b)("strong",null,"TIME"))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING","[25]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"NUMERIC")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING","[p.length]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"LOGICAL")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING","[1]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"FILE")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"TEXT"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/platform/User_classes"},"Object")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING","[10]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Other"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"STRING","[8]"))))),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Person;\nfirstName = DATA STRING[100] (Person);\nmiddleName = DATA STRING[100] (Person);\nlastName = DATA STRING[100] (Person);\n\nfullName(Person p) = CONCAT ' ', firstName(p), middleName(p), lastName(p);     // if some part of the name is not specified, then this part will be skipped along with a space\n")))}p.isMDXComponent=!0}}]);