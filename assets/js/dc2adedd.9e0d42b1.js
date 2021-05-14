(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[75919],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return N},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},N=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,N=i(e,["components","mdxType","originalType","parentName"]),c=m(r),u=n,d=c["".concat(l,".").concat(u)]||c[u]||k[u]||o;return r?a.createElement(d,p(p({ref:t},N),{},{components:r})):a.createElement(d,p({ref:t},N))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var m=2;m<o;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2144:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return N}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),p={title:"Action operator",sidebar_label:"Overview"},i={unversionedId:"Action_operator",id:"version-v4/Action_operator",isDocsHomePage:!1,title:"Action operator",description:"Action operator is a syntax construct that describes an operator creating an action.",source:"@site/versioned_docs/version-v4/Action_operator.md",sourceDirName:".",slug:"/Action_operator",permalink:"/Action_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Action_operator.md",version:"v4",lastUpdatedAt:1619530455,formattedLastUpdatedAt:"4/27/2021",sidebar_label:"Overview",frontMatter:{title:"Action operator",sidebar_label:"Overview"},sidebar:"version-v4/learn",previous:{title:"ACTION instruction",permalink:"/ACTION_instruction"},next:{title:"Operator{...}",permalink:"/Operator_..._"}},l=[{value:"Context dependent operators",id:"contextdependent",children:[]},{value:"Context independent operators",id:"contextindependent",children:[]}],m={toc:l};function N(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Action operator")," is a syntax construct that describes an ",(0,o.kt)("a",{parentName:"p",href:"/%D0%9Eperators"},"operator")," creating an ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"action"),"."),(0,o.kt)("p",null,"Action operators can be divided into ",(0,o.kt)("em",{parentName:"p"},"context dependent")," and ",(0,o.kt)("em",{parentName:"p"},"context independent"),"."),(0,o.kt)("h3",{id:"contextdependent"},"Context dependent operators"),(0,o.kt)("p",null,"Context dependent action operators can use external context parameters. They can be used wherever you need to define an action, for example, when creating another action or ",(0,o.kt)("a",{parentName:"p",href:"/Events"},"event"),". These operators are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Operator_..._"},(0,o.kt)("inlineCode",{parentName:"a"},"{...}")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ACTIVATE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTIVATE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ACTIVE_FORM_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTIVE FORM")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/APPLY_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"APPLY")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ASK_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"ASK")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/BREAK_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"BREAK")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/CANCEL_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"CANCEL")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/CASE_operator_action_"},(0,o.kt)("inlineCode",{parentName:"a"},"CASE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/CHANGE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"CHANGE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/CHANGECLASS_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"CHANGECLASS")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/DELETE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"DELETE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/DIALOG_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"DIALOG")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/EMAIL_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EMAIL")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/EVAL_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EVAL")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/EXEC_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EXEC")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/EXPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EXPORT")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/FOR_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"FOR")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/IF_..._THEN_operator_action_"},(0,o.kt)("inlineCode",{parentName:"a"},"IF ... THEN")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/IMPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"IMPORT")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/INPUT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"INPUT")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/MESSAGE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"MESSAGE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/MULTI_operator_action_"},(0,o.kt)("inlineCode",{parentName:"a"},"MULTI")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/NEW_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NEW")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/NESTEDSESSION_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NESTEDSESSION")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/NEWEXECUTOR_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NEWEXECUTOR")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/NEWSESSION_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NEWSESSION")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/NEWTHREAD_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NEWTHREAD")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/PRINT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"PRINT")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/READ_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"READ")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/REQUEST_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"REQUEST")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/RETURN"},(0,o.kt)("inlineCode",{parentName:"a"},"RETURN")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/SEEK_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"SEEK")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/SHOW_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"SHOW")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/TRY_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"TRY")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/WHILE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"WHILE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/WRITE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"WRITE")," operator"))),(0,o.kt)("h3",{id:"contextindependent"},"Context independent operators"),(0,o.kt)("p",null,"Context independent action operators cannot use external context parameters. Thus they can only be used in the ",(0,o.kt)("a",{parentName:"p",href:"/ACTION_instruction"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTION")," instruction"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ABSTRACT_operator_action_"},(0,o.kt)("inlineCode",{parentName:"a"},"ABSTRACT")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/INTERNAL_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"INTERNAL")," operator"))))}N.isMDXComponent=!0}}]);