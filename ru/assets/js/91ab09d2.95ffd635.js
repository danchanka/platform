(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[87945],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},190:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return i},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),c={title:"\u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},p={unversionedId:"Metaprogramming",id:"Metaprogramming",isDocsHomePage:!1,title:"\u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:"\u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u044d\u0442\u043e \u0432\u0438\u0434 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u0441 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u043f\u043e\u0440\u043e\u0436\u0434\u0430\u0435\u0442 \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0439 \u043a\u043e\u0434. \u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0441\u0442\u0438 \u043a\u043e\u0434\u0430 \u0438 \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Metaprogramming.md",sourceDirName:".",slug:"/Metaprogramming",permalink:"/ru/next/Metaprogramming",editUrl:"https://github.com/danchanka/platform/edit/master/docs/ru/Metaprogramming.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"05.04.2021",frontMatter:{title:"\u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},sidebar:"learn",previous:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c",permalink:"/ru/next/Form_extension"},next:{title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/ru/next/Integration"}},i=[{value:"\u041c\u0435\u0442\u0430\u043a\u043e\u0434",id:"metacode",children:[]},{value:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043b\u0435\u043a\u0441\u0435\u043c",id:"concat",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],u={toc:i};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")," - \u044d\u0442\u043e \u0432\u0438\u0434 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u0441 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u043f\u043e\u0440\u043e\u0436\u0434\u0430\u0435\u0442 \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0439 \u043a\u043e\u0434. \u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0441\u0442\u0438 \u043a\u043e\u0434\u0430 \u0438 \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438. \xa0"),(0,a.kt)("h3",{id:"metacode"},"\u041c\u0435\u0442\u0430\u043a\u043e\u0434"),(0,a.kt)("p",null,"\u0412 \u044f\u0437\u044b\u043a\u0435 l",(0,a.kt)("strong",{parentName:"p"},"sFusion\xa0"),"\u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u043c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,a.kt)("em",{parentName:"p"},"\u043c\u0435\u0442\u0430\u043a\u043e\u0434"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439\xa0\u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f\xa0",(0,a.kt)("a",{parentName:"p",href:"/ru/next/META_instruction"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0435\u0439 ",(0,a.kt)("strong",{parentName:"a"},"META")),".\xa0\u041c\u0435\u0442\u0430\u043a\u043e\u0434 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0438 \u0431\u043b\u043e\u043a\u0430 \u043a\u043e\u0434\u0430 \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 ",(0,a.kt)("strong",{parentName:"p"},"lsFusion"),", \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\xa0",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Instructions"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0439"),".**\xa0",(0,a.kt)("strong",{parentName:"p"},"\u042d\u0442\u043e\u0442 \u0431\u043b\u043e\u043a \u043a\u043e\u0434\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0442\u044c\u0441\u044f \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u043e\u043c "),"END**.\xa0\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u0440\u0438\u043c\u0435\u0440 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u0443\u044e ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Forms"},"\u0444\u043e\u0440\u043c\u0443")," \u0434\u0432\u0430 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Actions"},"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"META addActions(formName)\n    EXTEND FORM formName\n        PROPERTIES() showMessage, closeForm\n    ;\nEND\n")),(0,a.kt)("p",null,"\u0412 \u043f\u0435\u0440\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430. \u041e\u043d \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430 ",(0,a.kt)("strong",{parentName:"p"},"META"),", \u0438\u043c\u0435\u043d\u0438 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u0438 \u0441\u043f\u0438\u0441\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432. \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u0435\u0442\u0430\u043a\u043e\u0434 ",(0,a.kt)("strong",{parentName:"p"},"addActions")," \u0438\u043c\u0435\u0435\u0442 \u043e\u0434\u0438\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("strong",{parentName:"p"},"formName"),". \u042d\u0442\u043e \u0438\u043c\u044f \u0444\u043e\u0440\u043c\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Instruction_"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0435\u0439 @"),".\xa0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"@addActions(documentForm);\n@addActions(orderForm);\n")),(0,a.kt)("p",null,"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u043c @, \u0437\u0430\u0442\u0435\u043c \u0438\u0434\u0435\u0442 \u0438\u043c\u044f \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b. \u041f\u0440\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043a\u043e\u0434\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043c\u0435\u043d\u0435\u043d \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0435 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 @, \u0432\u043e \u0432\u0441\u0435\u0445 \u043c\u0435\u0441\u0442\u0430\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430. \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430\xa0",(0,a.kt)("strong",{parentName:"p"},"formName")," \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0430 ",(0,a.kt)("strong",{parentName:"p"},"documentForm")," \u0438 \u043d\u0430 ",(0,a.kt)("strong",{parentName:"p"},"orderForm"),". \u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u0432\u044b\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u043f\u043e\u0440\u043e\u0436\u0434\u0430\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u0434\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"EXTEND FORM documentForm\n    PROPERTIES() showMessage, closeForm\n;\n\nEXTEND FORM orderForm\n    PROPERTIES() showMessage, closeForm\n;\n")),(0,a.kt)("h3",{id:"concat"},"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043b\u0435\u043a\u0441\u0435\u043c"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u0447\u0430\u0441\u0442\u043e \u0431\u044b\u0432\u0430\u0435\u0442 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043d\u043e\u0432\u044b\u0445 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Element_identification"},"\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"),"\xa0\u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u043d\u0443\u0436\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u043d\u043e\u0432\u044b\u0435 \u0438\u043c\u0435\u043d\u0430. \u041f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0438\u043c\u0435\u043d\u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u0431\u044b\u0432\u0430\u0435\u0442 \u043d\u0435\u0443\u0434\u043e\u0431\u043d\u043e. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f ","#","#",", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Tokens"},"\u043b\u0435\u043a\u0441\u0435\u043c"),". \u042d\u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0434\u0432\u0435 \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u0435 \u043b\u0435\u043a\u0441\u0435\u043c\u044b \u0432 \u043e\u0434\u043d\u0443. \u0415\u0441\u043b\u0438 \u0436\u0435 \u043e\u0434\u043d\u0430 \u0438\u0437 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0445 \u043b\u0435\u043a\u0441\u0435\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Literals#strliteral-broken"},"\u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u043c \u043b\u0438\u0442\u0435\u0440\u0430\u043b\u043e\u043c"),", \u0442\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0434\u0438\u043d \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0439 \u043b\u0438\u0442\u0435\u0440\u0430\u043b."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, caption)\n    object##Name '\u0418\u043c\u044f '##caption = DATA BPSTRING[100](object);\n    object##Type '\u0422\u0438\u043f '##caption = DATA Type (object);\n    object##Value '\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c '##caption = DATA INTEGER (object);\nEND\n\n@objectProperties(Document, '\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430');\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 ",(0,a.kt)("strong",{parentName:"p"},"objectProperties")," \u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0434:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"DocumentName '\u0418\u043c\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430' = DATA BPSTRING[100](Document);\nDocumentType '\u0422\u0438\u043f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430' = DATA Type (Document);\nDocumentValue '\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430' = DATA INTEGER (Document);\n")),(0,a.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f ","#","#","#",", \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 ","#","#",", \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0432\u043e \u0432\u0442\u043e\u0440\u043e\u043c \u0438\u0437 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0445 \u043b\u0438\u0442\u0435\u0440\u0430\u043b\u043e\u0432 \u043f\u0435\u0440\u0432\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b, \u0435\u0441\u043b\u0438 \u043e\u043d \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u0443\u043a\u0432\u043e\u0439, \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440."),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, type, caption)\n    object##Name '\u0418\u043c\u044f'##caption = DATA BPSTRING[100](###object-broken); // \u0434\u0435\u043b\u0430\u0435\u043c \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u043f\u0435\u0440\u0432\u0443\u044e \u0431\u0443\u043a\u0432\u0443\n    object##Type '\u0422\u0438\u043f'##caption = DATA type (###object-broken);\n    object##Value '\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c'##caption = DATA INTEGER (###object-broken);\nEND\n\nMETA objectProperties(object, type)\n    @objectProperties(object, type, '');\nEND\n")))}l.isMDXComponent=!0}}]);