(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{745:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return j}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),c=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},m=function(e){var t=c(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,j=m["".concat(p,".").concat(f)]||m[f]||O[f]||o;return r?n.a.createElement(j,b(b({ref:t},l),{},{components:r})):n.a.createElement(j,b({ref:t},l))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,p[1]=b;for(var l=2;l<o;l++)p[l]=r[l];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(7),o=(r(0),r(745)),p={title:"Property operators",sidebar_label:"Overview"},b={unversionedId:"Property_operators",id:"version-v4/Property_operators",isDocsHomePage:!1,title:"Property operators",description:"Property operator is a syntax construct that describes an operator creating a property.",source:"@site/versioned_docs/version-v4/Property_operators.md",slug:"/Property_operators",permalink:"/platform/Property_operators",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Property_operators.md",version:"v4",lastUpdatedAt:1619189037,formattedLastUpdatedAt:"4/23/2021",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Operator priority",permalink:"/platform/Operator_priority"},next:{title:"Arithmetic operators",permalink:"/platform/Arithmetic_operators"}},i=[{value:"Context dependent operators",id:"context-dependent-operators",children:[]},{value:"Context independent operators",id:"contextindependent",children:[]}],l={toc:i};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Property operator")," is a syntax construct that describes an ",Object(o.b)("a",{parentName:"p",href:"/platform/Operators"},"operator")," creating a ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"property"),". "),Object(o.b)("p",null,"Property operators can be divided into ",Object(o.b)("em",{parentName:"p"},"context dependent")," and ",Object(o.b)("em",{parentName:"p"},"context independent"),"."),Object(o.b)("h3",{id:"context-dependent-operators"},"Context dependent operators"),Object(o.b)("p",null,"Context dependent property operators can be part of ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expressions")," and use common parameters (context). These operators are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/Arithmetic_operators"},"Arithmetic operators")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/Operator_"},Object(o.b)("inlineCode",{parentName:"a"},"[]")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/ACTIVE_TAB_operator"},Object(o.b)("inlineCode",{parentName:"a"},"ACTIVE TAB")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/AGGR_operator"},Object(o.b)("inlineCode",{parentName:"a"},"AGGR")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/CASE_operator"},Object(o.b)("inlineCode",{parentName:"a"},"CASE")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/CLASS_operator"},Object(o.b)("inlineCode",{parentName:"a"},"CLASS")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/CONCAT_operator"},Object(o.b)("inlineCode",{parentName:"a"},"CONCAT")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/EXCLUSIVE_operator"},Object(o.b)("inlineCode",{parentName:"a"},"EXCLUSIVE")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/IF_operator"},Object(o.b)("inlineCode",{parentName:"a"},"IF")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/IF_..._THEN_operator"},Object(o.b)("inlineCode",{parentName:"a"},"IF ... THEN")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/JOIN_operator"},Object(o.b)("inlineCode",{parentName:"a"},"JOIN")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/MAX_operator"},Object(o.b)("inlineCode",{parentName:"a"},"MAX")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/MIN_operator"},Object(o.b)("inlineCode",{parentName:"a"},"MIN")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/MULTI_operator"},Object(o.b)("inlineCode",{parentName:"a"},"MULTI")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/OVERRIDE_operator"},Object(o.b)("inlineCode",{parentName:"a"},"OVERRIDE")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/PARTITION_operator"},Object(o.b)("inlineCode",{parentName:"a"},"PARTITION")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/GROUP_operator"},Object(o.b)("inlineCode",{parentName:"a"},"GROUP")," operator")," (without ",Object(o.b)("inlineCode",{parentName:"li"},"BY")," block)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/PREV_operator"},Object(o.b)("inlineCode",{parentName:"a"},"PREV")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/RECURSION_operator"},Object(o.b)("inlineCode",{parentName:"a"},"RECURSION")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/STRUCT_operator"},Object(o.b)("inlineCode",{parentName:"a"},"STRUCT")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/UNGROUP_operator"},Object(o.b)("inlineCode",{parentName:"a"},"UNGROUP")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/Type_conversion_operator"},"Type conversion operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/AND_OR_NOT_XOR_operators"},Object(o.b)("inlineCode",{parentName:"a"},"AND"),", ",Object(o.b)("inlineCode",{parentName:"a"},"OR"),", ",Object(o.b)("inlineCode",{parentName:"a"},"NOT"),", ",Object(o.b)("inlineCode",{parentName:"a"},"XOR")," operators")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/IS_AS_operators"},Object(o.b)("inlineCode",{parentName:"a"},"IS"),", ",Object(o.b)("inlineCode",{parentName:"a"},"AS")," operators")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/Change_operators"},"Change operators")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/Comparison_operators"},"Comparison operators"))),Object(o.b)("h3",{id:"contextindependent"},"Context independent operators"),Object(o.b)("p",null,"Context independent property operators differ from the context dependent ones in that they do not just use the upper parameters but define the parameters themselves. As a result, they cannot be part of expressions and can only be used in the ",Object(o.b)("a",{parentName:"p",href:"/platform/Instruction_="},Object(o.b)("inlineCode",{parentName:"a"},"=")," instruction")," and the ",Object(o.b)("a",{parentName:"p",href:"/platform/JOIN_operator"},Object(o.b)("inlineCode",{parentName:"a"},"JOIN")," operator"),": "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/DATA_operator"},Object(o.b)("inlineCode",{parentName:"a"},"DATA")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/GROUP_operator"},Object(o.b)("inlineCode",{parentName:"a"},"GROUP")," operator")," (with ",Object(o.b)("inlineCode",{parentName:"li"},"BY")," block)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/FORMULA_operator"},Object(o.b)("inlineCode",{parentName:"a"},"FORMULA")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/ABSTRACT_operator"},Object(o.b)("inlineCode",{parentName:"a"},"ABSTRACT")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/Object_group_operator"},"Object group operators"))))}c.isMDXComponent=!0}}]);