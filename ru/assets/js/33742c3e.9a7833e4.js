(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[65681],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31066:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"IDE"},p={unversionedId:"IDE",id:"version-v4/IDE",isDocsHomePage:!1,title:"IDE",description:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e lsFusion \u043f\u0440\u043e\u0435\u043a\u0442\u0430 {newproject}",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/IDE.md",sourceDirName:".",slug:"/IDE",permalink:"/ru/IDE",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/ru/IDE.md",version:"v4",lastUpdatedAt:1620889677,formattedLastUpdatedAt:"13.05.2021",frontMatter:{title:"IDE"},sidebar:"version-v4/learn",previous:{title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430",permalink:"/ru/Coding_conventions"},next:{title:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",permalink:"/ru/Examples"}},s=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e lsFusion \u043f\u0440\u043e\u0435\u043a\u0442\u0430",id:"newproject",children:[]},{value:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"dev",children:[]},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0430",id:"run",children:[]},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",id:"configuration",children:[]},{value:"\u0421\u0431\u043e\u0440\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f (\u0441\u043e \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c)",id:"build",children:[]}],l={toc:s};function c(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"newproject"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e lsFusion \u043f\u0440\u043e\u0435\u043a\u0442\u0430"),(0,i.kt)("p",null,"\u0412\u044b\u0431\u0438\u0440\u0430\u0435\u043c \u043f\u0443\u043d\u043a\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"Create New Project")," \u043f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435 ",(0,i.kt)("strong",{parentName:"p"},"IDEA"),". \u0418\u043b\u0438, \u0435\u0441\u043b\u0438 ",(0,i.kt)("strong",{parentName:"p"},"IDEA")," \u0443\u0436\u0435 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430, \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c \u0432 \u043c\u0435\u043d\u044e \u043f\u0443\u043d\u043a\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"File > New > Project"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9125).Z}),(0,i.kt)("img",{src:n(95273).Z})),(0,i.kt)("p",null,"\u0412\u044b\u0431\u0438\u0440\u0430\u0435\u043c \u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"lsFusion"),". \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c, \u0447\u0442\u043e \u0437\u0430\u0434\u0430\u043d JDK \u0438 \u0432\u044b\u0431\u0440\u0430\u043d\u0430 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"lsFusion")," (\u043f\u0440\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/Development_auto_"},"\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435")," \u044d\u0442\u0430 \u0441\u0441\u044b\u043b\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438, \u0435\u0441\u043b\u0438 \u0435\u0435 \u0432\u0441\u0435 \u0436\u0435 \u043d\u0435\u0442 - \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"Download")," \u0438\u043b\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c \u0443\u0436\u0435 \u0441\u043a\u0430\u0447\u0430\u043d\u043d\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"Create"),"), \u043d\u0430\u0436\u0438\u043c\u0430\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"Next"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(49087).Z})),(0,i.kt)("p",null,"\u0417\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u043c \u0438\u043c\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b. \u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u041d\u0430\u0436\u0438\u043c\u0430\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"Finish"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(20093).Z})),(0,i.kt)("h3",{id:"dev"},"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u0412\u0435\u0441\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 ",(0,i.kt)("strong",{parentName:"p"},"lsFusion"),", \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/lsfusion"),"."),(0,i.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 ",(0,i.kt)("a",{parentName:"p",href:"/ru/Modules"},"\u043c\u043e\u0434\u0443\u043b\u044c")," \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0436\u0430\u0432 \u043f\u0440\u0430\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043c\u044b\u0448\u0438 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043f\u0430\u043f\u043a\u043e\u0439 \u0438 \u0432\u044b\u0431\u0440\u0430\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u0435\u043d\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"New > lsFusion Module"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7342).Z})),(0,i.kt)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438, \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u043f\u0430\u043f\u043a\u0438 (\u043f\u0443\u043d\u043a\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"Package"),"), \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u0443\u044f \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438."),(0,i.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0432 \u044d\u0442\u043e\u0439 ",(0,i.kt)("a",{parentName:"p",href:"https://habr.com/ru/company/lsfusion/blog/465573/"},"\u0441\u0442\u0430\u0442\u044c\u0435"),"."),(0,i.kt)("h3",{id:"run"},"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),(0,i.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0435\u0435, \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u0435\u043d\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"Run -> Run 'Run lsFusion server'"),", \u0438\u043b\u0438 \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u0437\u043d\u0430\u0447\u043e\u043a ",(0,i.kt)("img",{src:n(47286).Z})," \u0440\u044f\u0434\u043e\u043c \u0441 \u043d\u0430\u0434\u043f\u0438\u0441\u044c\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"Run lsFusion server")," \u0432 \u043f\u0440\u0430\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0433\u043b\u0443. \u041f\u0440\u0438 \u0443\u0434\u0430\u0447\u043d\u043e\u043c \u0441\u0442\u0430\u0440\u0442\u0435 \u0441\u0430\u043c\u043e\u0439 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439 \u0432 \u043b\u043e\u0433\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"Server has successfully started"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(95793).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(56013).Z})),(0,i.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0441\u0435\u0440\u0432\u0435\u0440 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u043f\u0443\u0449\u0435\u043d, \u043a \u043d\u0435\u043c\u0443 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0432\u0435\u0431 \u0438\u043b\u0438 \u0434\u0435\u0441\u043a\u0442\u043e\u043f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u044f\u0440\u043b\u044b\u043a \u043d\u0430 \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u0441\u0442\u043e\u043b\u0435."),(0,i.kt)("h3",{id:"configuration"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043a \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0443 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.kt)("a",{parentName:"p",href:"/ru/Development_manual_#maven"},"\u0447\u0435\u0440\u0435\u0437 Maven")," \u043a maven \u043f\u0440\u043e\u0435\u043a\u0442\u0443), \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432\u0440\u0443\u0447\u043d\u0443\u044e. \u0414\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u044d\u0442\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,i.kt)("p",null,"\u0412\u044b\u0431\u0438\u0440\u0430\u0435\u043c \u043f\u0443\u043d\u043a\u0442 \u043c\u0435\u043d\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit configurations"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(54485).Z})),(0,i.kt)("p",null,"\u0412 \u043e\u0442\u043a\u0440\u044b\u0432\u0448\u0435\u043c\u0441\u044f \u043e\u043a\u043d\u0435, \u0436\u043c\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," \u0432 \u043b\u0435\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0433\u043b\u0443 \u0438 \u0432 \u0432\u044b\u043f\u0430\u0432\u0448\u0435\u043c \u0441\u043f\u0438\u0441\u043a\u0435 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"lsFusion Server")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(37361).Z})),(0,i.kt)("p",null,"\u0417\u0430\u0434\u0430\u0435\u043c \u0438\u043c\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0438 \u043c\u043e\u0434\u0443\u043b\u044c (\u0435\u0441\u043b\u0438 \u0438\u0445 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e), \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 lsFusion. \u0422\u0430\u043a\u0436\u0435 \u0432 \u044d\u0442\u043e\u043c \u043e\u043a\u043d\u0435, \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438, \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u0441\u0431\u043e\u0440\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0434\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438, \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u044b Java, \u0438 \u0442.\u043f."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6212).Z})),(0,i.kt)("h3",{id:"build"},"\u0421\u0431\u043e\u0440\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f (\u0441\u043e \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c)"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u0435\u0434\u0438\u043d\u044b\u0439 jar-\u0444\u0430\u0439\u043b, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043a\u0430\u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u0434, \u0442\u0430\u043a \u0438 \u0441\u0430\u043c \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 ",(0,i.kt)("a",{parentName:"p",href:"https://blog.jetbrains.com/idea/2010/08/quickly-create-jar-artifact/"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0435\u0439"),". \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 jar-\u0444\u0430\u0439\u043b (",(0,i.kt)("em",{parentName:"p"},"artifact"),") \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043f\u0443\u043d\u043a\u0442\u043e\u043c ",(0,i.kt)("a",{parentName:"p",href:"/ru/Execution_manual_#appservice"},"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430"),". \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0442\u0430\u043a \u043a\u0430\u043a \u0432\u0441\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0438 \u0441\u0430\u043c \u0441\u0435\u0440\u0432\u0435\u0440 \u0431\u0443\u0434\u0443\u0442 \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0434\u043d\u043e\u0433\u043e jar-\u0444\u0430\u0439\u043b\u0430, \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0432 \u043f\u0435\u0440\u0432\u043e\u043c \u043f\u0443\u043d\u043a\u0442\u0435 \u0432\u043c\u0435\u0441\u0442\u043e jar-\u0444\u0430\u0439\u043b\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0438\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b"),(0,i.kt)("li",{parentName:"ul"},"\u0442\u0440\u0435\u0442\u0438\u0439 \u043f\u0443\u043d\u043a\u0442 (\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440) \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c")))}c.isMDXComponent=!0},7342:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_add_module-f96b6a90d6837c31f9ab841fd7512070.png"},37361:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_add_server-7899f167483b4e142fb7af0824724254.png"},6212:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_conf_name-16c8bb42e6a15191a116d9d00c625c46.png"},95273:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_create_project-213520422c6d0b41d9a366fb514ed100.png"},54485:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_edit_conf-6d4c9f2696d22cee17e04a988f440f32.png"},20093:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_project_name-07003f2b6fedfb885d369a1fbfd9efd6.png"},49087:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_project_type-0fd21524f5cbcc20e6c3e8d89112a5ec.png"},95793:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_run_command-2ce951636d580b6f84da92d0566d0f57.png"},56013:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_run_in_operationbar-328e1c6d1b0fa845c094f426403b1d9b.png"},47286:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAABkElEQVQ4Ee2UO0gDQRCG/9t75eFdxIhFilgYRII2tjZWCoKNgpUoSMDGFIpFqoCFjZWNjYWdjWAhpBMEiVYKIqJiE9TG+CgUTBC9nZWLEjizeQhpBAcGdnZ2vv13dlkln88LNMlYkzglzB+DjexMYuV4Da/vhV91QXrMQCiEo8Il5g7SOH08bxgohWk+Ez7bQtHkSJ+sYv1sEx/k1IVKYVwIQFWhB/wwbRuZ+yyS+2nkXm5rAuUwIjjEQQrATB2mHcSd8ozk4RK2rjIgQVJoFRgHpy93CxWVQQ/6oVl+bOS2sZhdxkPxqQIohTmcw+NEcLUww4BhteDi7QYzeynsXmc9QM0TfQdEVFImyymaq9IHw2AAUzxLpDCHHLBqtycE+qwYFrqn0OEL14eR2y9e+RQ0oWI6Oorx6DCY4lXlUqXKiBy4XjYBdAYiSPUk0GVFy9M/B3Vh7v5jkSEkYhPQmXR5mSnNus+BBEe71opUfBb94d5yQa2BFCa4g8G2AczHE7D0YK16T075/2k9/Wgk+ASZRpR4pMZctgAAAABJRU5ErkJggg=="},9125:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_welcome_screen-4a4a765ac64129f10a365ad7d971e4d9.png"}}]);