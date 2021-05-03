(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[22034],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return N},kt:function(){return c}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},p=Object.keys(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),i=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},N=function(t){var e=i(t.components);return a.createElement(l.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,p=t.originalType,l=t.parentName,N=m(t,["components","mdxType","originalType","parentName"]),f=i(r),c=n,s=f["".concat(l,".").concat(c)]||f[c]||k[c]||p;return r?a.createElement(s,o(o({ref:e},N),{},{components:r})):a.createElement(s,o({ref:e},N))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=r.length,o=new Array(p);o[0]=f;var m={};for(var l in e)hasOwnProperty.call(e,l)&&(m[l]=e[l]);m.originalType=t,m.mdxType="string"==typeof t?t:n,o[1]=m;for(var i=2;i<p;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},451:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return o},metadata:function(){return m},toc:function(){return l},default:function(){return N}});var a=r(22122),n=r(19756),p=(r(67294),r(3905)),o={title:"Action operator",sidebar_label:"Overview"},m={unversionedId:"Action_operator",id:"Action_operator",isDocsHomePage:!1,title:"Action operator",description:"Action operator is a syntax construct that describes an operator creating an action.",source:"@site/docs/Action_operator.md",sourceDirName:".",slug:"/Action_operator",permalink:"/platform/next/Action_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Action_operator.md",version:"current",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",frontMatter:{title:"Action operator",sidebar_label:"Overview"},sidebar:"learn",previous:{title:"ACTION instruction",permalink:"/platform/next/ACTION_instruction"},next:{title:"Operator{...}",permalink:"/platform/next/Operator_..._"}},l=[{value:"Context dependent operators",id:"contextdependent",children:[]},{value:"Context independent operators",id:"contextindependent",children:[]}],i={toc:l};function N(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},i,r,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Action operator")," is a syntax construct that describes an ",(0,p.kt)("a",{parentName:"p",href:"/platform/next/%D0%9Eperators"},"operator")," creating an ",(0,p.kt)("a",{parentName:"p",href:"/platform/next/Actions"},"action"),"."),(0,p.kt)("p",null,"Action operators can be divided into ",(0,p.kt)("em",{parentName:"p"},"context dependent")," and ",(0,p.kt)("em",{parentName:"p"},"context independent"),"."),(0,p.kt)("h3",{id:"contextdependent"},"Context dependent operators"),(0,p.kt)("p",null,"Context dependent action operators can use external context parameters. They can be used wherever you need to define an action, for example, when creating another action or ",(0,p.kt)("a",{parentName:"p",href:"/platform/next/Events"},"event"),". These operators are:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/Operator_..._"},(0,p.kt)("strong",{parentName:"a"},"{...}")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/ACTIVATE_operator"},(0,p.kt)("strong",{parentName:"a"},"ACTIVATE")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/ACTIVE_FORM_operator"},(0,p.kt)("strong",{parentName:"a"},"ACTIVE FORM")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/APPLY_operator"},(0,p.kt)("strong",{parentName:"a"},"APPLY")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/ASK_operator"},(0,p.kt)("strong",{parentName:"a"},"ASK")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/BREAK_operator"},(0,p.kt)("strong",{parentName:"a"},"BREAK")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/CANCEL_operator"},(0,p.kt)("strong",{parentName:"a"},"CANCEL")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/CASE_operator_action_"},(0,p.kt)("strong",{parentName:"a"},"CASE")," operator (action)"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/CHANGE_operator"},(0,p.kt)("strong",{parentName:"a"},"CHANGE"),"\xa0operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/CHANGECLASS_operator"},(0,p.kt)("strong",{parentName:"a"},"CHANGECLASS")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/DELETE_operator"},(0,p.kt)("strong",{parentName:"a"},"DELETE")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/DIALOG_operator"},(0,p.kt)("strong",{parentName:"a"},"DIALOG")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/EMAIL_operator"},(0,p.kt)("strong",{parentName:"a"},"EMAIL")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/EVAL_operator"},(0,p.kt)("strong",{parentName:"a"},"EVAL")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/EXEC_operator"},(0,p.kt)("strong",{parentName:"a"},"EXEC")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/EXPORT_operator"},(0,p.kt)("strong",{parentName:"a"},"EXPORT")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/FOR_operator"},(0,p.kt)("strong",{parentName:"a"},"FOR")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/IF_..._THEN_operator_action_"},(0,p.kt)("strong",{parentName:"a"},"IF")," ... ",(0,p.kt)("strong",{parentName:"a"},"THEN")," operator (action)"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/IMPORT_operator"},(0,p.kt)("strong",{parentName:"a"},"IMPORT")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/INPUT_operator"},(0,p.kt)("strong",{parentName:"a"},"INPUT")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/MESSAGE_operator"},(0,p.kt)("strong",{parentName:"a"},"MESSAGE")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/MULTI_operator_action_"},(0,p.kt)("strong",{parentName:"a"},"MULTI")," operator (action)"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/NEW_operator"},(0,p.kt)("strong",{parentName:"a"},"NEW")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/NESTEDSESSION_operator"},(0,p.kt)("strong",{parentName:"a"},"NESTEDSESSION")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/NEWEXECUTOR_operator"},(0,p.kt)("strong",{parentName:"a"},"NEWEXECUTOR")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/NEWSESSION_operator"},(0,p.kt)("strong",{parentName:"a"},"NEWSESSION")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/NEWTHREAD_operator"},(0,p.kt)("strong",{parentName:"a"},"NEWTHREAD")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/PRINT_operator"},(0,p.kt)("strong",{parentName:"a"},"PRINT")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/READ_operator"},(0,p.kt)("strong",{parentName:"a"},"READ")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/REQUEST_operator"},(0,p.kt)("strong",{parentName:"a"},"REQUEST")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/RETURN"},(0,p.kt)("strong",{parentName:"a"},"RETURN")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/SEEK_operator"},(0,p.kt)("strong",{parentName:"a"},"SEEK")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/SHOW_operator"},(0,p.kt)("strong",{parentName:"a"},"SHOW"),"\xa0operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/TRY_operator"},(0,p.kt)("strong",{parentName:"a"},"TRY")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/WHILE_operator"},(0,p.kt)("strong",{parentName:"a"},"WHILE")," operator"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/platform/next/WRITE_operator"},(0,p.kt)("strong",{parentName:"a"},"WRITE")," operator")))),(0,p.kt)("h3",{id:"contextindependent"},"Context independent operators"),(0,p.kt)("p",null,"Context independent action operators cannot use external context parameters. Thus they can only be used in the\xa0",(0,p.kt)("a",{parentName:"p",href:"/platform/next/ACTION_instruction"},(0,p.kt)("strong",{parentName:"a"},"ACTION"),"\xa0instruction"),":"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/platform/next/ABSTRACT_operator_action_"},(0,p.kt)("strong",{parentName:"a"},"ABSTRACT")," operator")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/platform/next/INTERNAL_operator"},(0,p.kt)("strong",{parentName:"a"},"INTERNAL")," operator"))))}N.isMDXComponent=!0}}]);