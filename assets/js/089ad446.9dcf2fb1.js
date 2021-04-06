(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{747:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return j}));var a=r(0),p=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,p=function(e,t){if(null==e)return{};var r,a,p={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var m=p.a.createContext({}),l=function(e){var t=p.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},i=function(e){var t=l(e.components);return p.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},s=p.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,n=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),i=l(r),s=a,j=i["".concat(n,".").concat(s)]||i[s]||O[s]||o;return r?p.a.createElement(j,b(b({ref:t},m),{},{components:r})):p.a.createElement(j,b({ref:t},m))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,n[1]=b;for(var m=2;m<o;m++)n[m]=r[m];return p.a.createElement.apply(null,n)}return p.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),p=r(7),o=(r(0),r(747)),n={title:"Property operators: Overview",sidebar_label:"Overview"},b={unversionedId:"Property_operators",id:"version-v4/Property_operators",isDocsHomePage:!1,title:"Property operators: Overview",description:"Property operator\xa0is a syntax construct that describes an operator creating a property.",source:"@site/versioned_docs/version-v4/Property_operators.md",slug:"/Property_operators",permalink:"/platform/Property_operators",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Property_operators.md",version:"v4",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Operator priority",permalink:"/platform/Operator_priority"},next:{title:"Arithmetic operators",permalink:"/platform/Arithmetic_operators"}},c=[{value:"Context dependent operators",id:"context-dependent-operators",children:[]},{value:"Context independent operators",id:"contextindependent",children:[]}],m={toc:c};function l(e){var t=e.components,r=Object(p.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Property operator"),"\xa0is a syntax construct that describes an ",Object(o.b)("a",{parentName:"p",href:"/platform/Operators"},"operator")," creating a ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"property"),".\xa0"),Object(o.b)("p",null,"Property operators can be divided into ",Object(o.b)("em",{parentName:"p"},"context dependent")," and ",Object(o.b)("em",{parentName:"p"},"context independent"),"."),Object(o.b)("h3",{id:"context-dependent-operators"},"Context dependent operators"),Object(o.b)("p",null,"Context dependent property operators can be part of ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expressions")," and use common parameters\xa0(context). These operators are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/Arithmetic_operators"},"Arithmetic operators"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/Operator_"},Object(o.b)("strong",{parentName:"a"},"[","]")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/ACTIVE_TAB_operator"},Object(o.b)("strong",{parentName:"a"},"ACTIVE TAB")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/AGGR_operator"},Object(o.b)("strong",{parentName:"a"},"AGGR")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/CASE_operator"},Object(o.b)("strong",{parentName:"a"},"CASE")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/CLASS_operator"},Object(o.b)("strong",{parentName:"a"},"CLASS")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/CONCAT_operator"},Object(o.b)("strong",{parentName:"a"},"CONCAT")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/EXCLUSIVE_operator"},Object(o.b)("strong",{parentName:"a"},"EXCLUSIVE")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/IF_operator"},Object(o.b)("strong",{parentName:"a"},"IF")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/IF_..._THEN_operator"},Object(o.b)("strong",{parentName:"a"},"IF")," operator ... ",Object(o.b)("strong",{parentName:"a"},"THEN")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/JOIN_operator"},Object(o.b)("strong",{parentName:"a"},"JOIN")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/MAX_operator"},Object(o.b)("strong",{parentName:"a"},"MAX")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/MIN_operator"},Object(o.b)("strong",{parentName:"a"},"MIN")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/MULTI_operator"},Object(o.b)("strong",{parentName:"a"},"MULTI")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/OVERRIDE_operator"},Object(o.b)("strong",{parentName:"a"},"OVERRIDE")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/PARTITION_operator"},Object(o.b)("strong",{parentName:"a"},"PARTITION")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/GROUP_operator"},Object(o.b)("strong",{parentName:"a"},"GROUP"),"\xa0operator"),"\xa0(without BY block)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/PREV_operator"},Object(o.b)("strong",{parentName:"a"},"PREV")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/RECURSION_operator"},Object(o.b)("strong",{parentName:"a"},"RECURSION")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/STRUCT_operator"},Object(o.b)("strong",{parentName:"a"},"STRUCT")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/UNGROUP_operator"},Object(o.b)("strong",{parentName:"a"},"UNGROUP")," operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/Type_conversion_operator"},"Type conversion operator"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/AND_OR_NOT_XOR_operators"},Object(o.b)("strong",{parentName:"a"},"AND"),", ",Object(o.b)("strong",{parentName:"a"},"OR"),", ",Object(o.b)("strong",{parentName:"a"},"NOT"),", ",Object(o.b)("strong",{parentName:"a"},"XOR")," operators"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/IS_AS_operators"},Object(o.b)("strong",{parentName:"a"},"IS"),", ",Object(o.b)("strong",{parentName:"a"},"AS")," operators"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/Change_operators"},"Change operators"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/Comparison_operators"},"Comparison operators")))),Object(o.b)("h3",{id:"contextindependent"},"Context independent operators"),Object(o.b)("p",null,"Context independent property operators differ from the context dependent ones in that they do not just use the upper parameters but define the parameters themselves. As a result, they cannot be part of expressions and can only be used in the ",Object(o.b)("a",{parentName:"p",href:"/platform/Instruction_="},Object(o.b)("strong",{parentName:"a"},"=")," instruction")," and the ",Object(o.b)("a",{parentName:"p",href:"/platform/JOIN_operator"},Object(o.b)("strong",{parentName:"a"},"JOIN")," operator"),":\xa0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/DATA_operator"},Object(o.b)("strong",{parentName:"a"},"DATA")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/GROUP_operator"},Object(o.b)("strong",{parentName:"a"},"GROUP")," operator"),"\xa0(with BY block)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/FORMULA_operator"},Object(o.b)("strong",{parentName:"a"},"FORMULA")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/ABSTRACT_operator"},Object(o.b)("strong",{parentName:"a"},"ABSTRACT")," operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/Object_group_operator"},"Object group operators"))))}l.isMDXComponent=!0}}]);