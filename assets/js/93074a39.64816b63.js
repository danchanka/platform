(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[59919],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21945:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"MULTI operator (action)"},p={unversionedId:"MULTI_operator_action_",id:"MULTI_operator_action_",isDocsHomePage:!1,title:"MULTI operator (action)",description:"The\xa0MULTI\xa0operator creates an action\xa0that implements\xa0branching\xa0(polymorphic form).",source:"@site/docs/MULTI_operator_action_.md",sourceDirName:".",slug:"/MULTI_operator_action_",permalink:"/platform/next/MULTI_operator_action_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/MULTI_operator_action_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"MULTI operator (action)"},sidebar:"learn",previous:{title:"MESSAGE operator",permalink:"/platform/next/MESSAGE_operator"},next:{title:"NEW operator",permalink:"/platform/next/NEW_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("strong",{parentName:"p"},"MULTI"),"\xa0operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Actions"},"action"),"\xa0that implements\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Branching_CASE_IF_MULTI_#poly"},"branching"),"\xa0(polymorphic form)."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\xa0MULTI [exclusionType] action1, ..., actionN \n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("strong",{parentName:"p"},"MULTI"),"\xa0operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met.\xa0The property selection condition is\xa0that the parameters\xa0match this action\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/CLASS_operator"},"signature"),".\xa0"),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"exclusionType")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Branching_CASE_IF_MULTI_#exclusive"},"Type of mutual exclusion"),". Determines whether several conditions for the action selection can be met simultaneously with a certain set of parameters. It is\xa0specified by one of the keywords:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EXCLUSIVE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OVERRIDE"))),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that the conditions for the action selection cannot be met simultaneously. The\xa0",(0,o.kt)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in which case the first action in the list which selection condition is met will be selected.\xa0"),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type is used by default."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"action1, ..., actionN"),"\xa0**\xa0**\xa0"),(0,o.kt)("p",null,"A list of ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context dependent\xa0action operators")," which define the actions from which the selection is made."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shape;\n\nCLASS Square : Shape;\nCLASS Circle : Shape;\n\nmessage (Square s)  { MESSAGE 'Square'; }\nmessage (Circle c)  { MESSAGE 'Circle'; }\n\nmessage (Shape s) = MULTI message[Square](s), message[Circle](s);\n")))}s.isMDXComponent=!0}}]);