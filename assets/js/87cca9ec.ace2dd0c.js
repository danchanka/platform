(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[2792],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=s(r),g=a,d=m["".concat(p,".").concat(g)]||m[g]||c[g]||l;return r?n.createElement(d,o(o({ref:e},u),{},{components:r})):n.createElement(d,o({ref:e},u))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54249:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),o={title:"Logical operators (AND, OR, NOT, XOR)"},i={unversionedId:"Logical_operators_AND_OR_NOT_XOR_",id:"Logical_operators_AND_OR_NOT_XOR_",isDocsHomePage:!1,title:"Logical operators (AND, OR, NOT, XOR)",description:"Logical operators create properties that consider their arguments as logical values of class BOOLEAN\xa0and whose return value is also a value of class BOOLEAN. If the value of an argument of an logical operator is not NULL, then the argument is treated as the value TRUE of class BOOLEAN, otherwise as NULL.",source:"@site/docs/Logical_operators_AND_OR_NOT_XOR_.md",sourceDirName:".",slug:"/Logical_operators_AND_OR_NOT_XOR_",permalink:"/platform/next/Logical_operators_AND_OR_NOT_XOR_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Logical_operators_AND_OR_NOT_XOR_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Logical operators (AND, OR, NOT, XOR)"},sidebar:"learn",previous:{title:"Arithmetic operators (+, -, *, ...)",permalink:"/platform/next/Arithmetic_operators_+_-_..._"},next:{title:"Comparison operators (=, >, <, ...)",permalink:"/platform/next/Comparison_operators_=_..._"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function u(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Logical operators")," create ",(0,l.kt)("a",{parentName:"p",href:"/platform/next/Properties"},"properties")," that consider their arguments as logical values ",(0,l.kt)("a",{parentName:"p",href:"/platform/next/Built-in_classes"},"of class ",(0,l.kt)("strong",{parentName:"a"},"BOOLEAN")),"\xa0and whose return value is also a value of class ",(0,l.kt)("strong",{parentName:"p"},"BOOLEAN"),". If the value of an argument of an logical operator is not ",(0,l.kt)("strong",{parentName:"p"},"NULL"),", then the argument is treated as the value ",(0,l.kt)("strong",{parentName:"p"},"TRUE")," of class ",(0,l.kt)("strong",{parentName:"p"},"BOOLEAN"),", otherwise as ",(0,l.kt)("strong",{parentName:"p"},"NULL"),"."),(0,l.kt)("p",null,"The platform currently supports the following logical operators:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("br",null),"Operator",(0,l.kt)("br",null))),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("br",null),"Name",(0,l.kt)("br",null))),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("br",null),"Description",(0,l.kt)("br",null))),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("br",null),"Example",(0,l.kt)("br",null))),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("div",null,(0,l.kt)("br",null),"Result",(0,l.kt)("br",null))))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AND"),(0,l.kt)("td",{parentName:"tr",align:null},"Conjunction"),(0,l.kt)("td",{parentName:"tr",align:null},"Takes two operands and returns ",(0,l.kt)("strong",null,"TRUE")," if both operands are non-",(0,l.kt)("strong",null,"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE AND TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OR"),(0,l.kt)("td",{parentName:"tr",align:null},"Disjunction"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Takes two operands and returns ",(0,l.kt)("strong",null,"TRUE")," if either operand is non-",(0,l.kt)("strong",null,"NULL"))),(0,l.kt)("td",{parentName:"tr",align:null},"NULL OR TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NOT"),(0,l.kt)("td",{parentName:"tr",align:null},"Negation"),(0,l.kt)("td",{parentName:"tr",align:null},"Takes one operand and returns ",(0,l.kt)("strong",null,"TRUE")," if the operands is ",(0,l.kt)("strong",null,"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"NOT TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XOR"),(0,l.kt)("td",{parentName:"tr",align:null},"Exception"),(0,l.kt)("td",{parentName:"tr",align:null},"Takes two operands and returns ",(0,l.kt)("strong",null,"TRUE")," if exactly one operand is non-",(0,l.kt)("strong",null,"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE XOR TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL")))),(0,l.kt)("h3",{id:"language"},"Language"),(0,l.kt)("p",null,"Description of ",(0,l.kt)("a",{parentName:"p",href:"/platform/next/AND_OR_NOT_XOR_operators"},"logical operator syntax"),"."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"likes = DATA BOOLEAN (Person, Person);\nlikes(Person a, Person b, Person c) = likes(a, b) AND likes(a, c);\noutOfInterval1(value, left, right) = value < left OR value > right;\noutOfInterval2(value, left, right) = NOT (value >= left AND value <= right);\n")))}u.isMDXComponent=!0}}]);