(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[20357],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13172:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438"},p={unversionedId:"Aggregations",id:"version-v4/Aggregations",isDocsHomePage:!1,title:"\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438",description:"\u041f\u043e\u0434 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0435\u0439 \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e (\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e) \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043d\u0435 NULL \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430. \u0414\u043b\u044f \u0442\u0430\u043a\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442 \u044d\u0442\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435, \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/Aggregations.md",sourceDirName:".",slug:"/Aggregations",permalink:"/platform/ru/Aggregations",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/ru/Aggregations.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"16.04.2021",frontMatter:{title:"\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438"},sidebar:"version-v4/learn",previous:{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u044b",permalink:"/platform/ru/User_classes"},next:{title:"\u041b\u043e\u0433\u0438\u043a\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439",permalink:"/platform/ru/View_logic"}},c=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],u={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041f\u043e\u0434 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0435\u0439 \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e (",(0,a.kt)("em",{parentName:"p"},"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e"),") \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043d\u0435 ",(0,a.kt)("strong",{parentName:"p"},"NULL")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e ",(0,a.kt)("em",{parentName:"p"},"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e")," \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430. \u0414\u043b\u044f \u0442\u0430\u043a\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442 \u044d\u0442\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435, \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442. "),(0,a.kt)("p",null,"\u0410\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0438 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c\u0443 ",(0,a.kt)("a",{parentName:"p",href:"/platform/ru/Classes"},"\u043a\u043b\u0430\u0441\u0441\u0443"),"."),(0,a.kt)("p",null,"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0439 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0434\u0432\u0443\u0445 ",(0,a.kt)("a",{parentName:"p",href:"/platform/ru/Simple_constraints"},"\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0439")," \u0441 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c \u0438 ",(0,a.kt)("a",{parentName:"p",href:"/platform/ru/Grouping_GROUP_"},"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e")," \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430. \u041f\u0435\u0440\u0432\u043e\u0435 \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435 - \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430, \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0433\u0434\u0430 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043d\u0435 ",(0,a.kt)("strong",{parentName:"p"},"NULL"),", \u0438 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0432\u043e \u0432\u0441\u0435 \u0435\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0432\u0442\u043e\u0440\u043e\u0435 \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435 - \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0433\u0434\u0430 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f ",(0,a.kt)("strong",{parentName:"p"},"NULL"),"."),(0,a.kt)("h3",{id:"\u044f\u0437\u044b\u043a"},"\u042f\u0437\u044b\u043a"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"/platform/ru/AGGR_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,a.kt)("strong",{parentName:"a"},"AGGR")),"."),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS A; CLASS B; CLASS C;\nf = DATA INTEGER (A, B);\nc = AGGR C WHERE f(A a, B b) MATERIALIZED INDEXED;\n\nCLASS AB;\nab = AGGR AB WHERE A a IS A AND B b IS B; // \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0430\u0440\u044b A B \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 AB\n\nCLASS Shipment '\u041f\u043e\u0441\u0442\u0430\u0432\u043a\u0430';\ndate = ABSTRACT DATE (Shipment);\nCLASS Invoice '\u0418\u043d\u0432\u043e\u0439\u0441';\ncreateShipment '\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443' = DATA BOOLEAN (Invoice);\ndate '\u0414\u0430\u0442\u0430 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u043e\u0439' = DATA DATE (Invoice);\nCLASS ShipmentInvoice '\u041f\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u043e \u0438\u043d\u0432\u043e\u0439\u0441\u0443' : Shipment;\nshipment(Invoice invoice) = AGGR ShipmentInvoice WHERE createShipment(invoice); // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043f\u043e \u0438\u043d\u0432\u043e\u0439\u0441\u0443, \u0435\u0441\u043b\u0438 \u0434\u043b\u044f \u0438\u043d\u0432\u043e\u0439\u0441\u0430 \u0437\u0430\u0434\u0430\u043d\u0430 \u043e\u043f\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443\ndate(ShipmentInvoice si) += sum(date(invoice(si)),1); // \u0434\u0430\u0442\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 = \u0434\u0430\u0442\u0430 \u0438\u043d\u0432\u043e\u0439\u0441\u0430 + 1\n")))}l.isMDXComponent=!0}}]);