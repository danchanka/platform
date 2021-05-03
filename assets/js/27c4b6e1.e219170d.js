(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[1473],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},S=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),S=c(n),d=a,E=S["".concat(p,".").concat(d)]||S[d]||u[d]||o;return n?r.createElement(E,s(s({ref:t},l),{},{components:n})):r.createElement(E,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=S;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}S.displayName="MDXCreateElement"},11712:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s={title:"NESTEDSESSION operator"},i={unversionedId:"NESTEDSESSION_operator",id:"NESTEDSESSION_operator",isDocsHomePage:!1,title:"NESTEDSESSION operator",description:"The NESTEDSESSION\xa0operator creates an\xa0action that executes the other action in a nested session.",source:"@site/docs/NESTEDSESSION_operator.md",sourceDirName:".",slug:"/NESTEDSESSION_operator",permalink:"/platform/next/NESTEDSESSION_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/NESTEDSESSION_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"NESTEDSESSION operator"},sidebar:"learn",previous:{title:"NEW operator",permalink:"/platform/next/NEW_operator"},next:{title:"NEWEXECUTOR operator",permalink:"/platform/next/NEWEXECUTOR_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"NESTEDSESSION"),"\xa0operator creates an\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that executes the other action in a ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/New_session_NEWSESSION_NESTEDSESSION_#nested"},"nested session"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NESTEDSESSION action \n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("strong",{parentName:"p"},"NESTEDSESSION"),"\xa0operator creates an action which executes the other action in a nested session. With that, all changes that have already been made in the current session get into the created nested session. Also, all changes that are made in the nested session will get into the current session when ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Apply_changes_APPLY_"},"the changes are applied")," in the nested session."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"action\xa0")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context-dependent action operator")," that defines an action to be executed in the nested session."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"testNestedSession ()  {\n    NESTEDSESSION {\n        name(Sku s) <- 'aaa';\n        APPLY; // in fact, the changes will not be applied to the database, but to the \"upper\" session\n    }\n\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); // returns all rows\n    CANCEL;\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); // returns NULL if there was no Sku named aaa in the database before\n\n}\n\nFORM sku\n    OBJECTS s = Sku PANEL\n    PROPERTIES(s) id, name\n;\nnewNestedSession()  {\n    NESTEDSESSION {\n        NEW s = Sku {\n            // shows the form, but any changes in it will not be applied to the database, but will be saved in the \"upper session\" session\n            SHOW sku OBJECTS s = s;\n        }\n    }\n}\n")))}l.isMDXComponent=!0}}]);