(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[79756],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47476:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return i},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),c={title:"How-to: \u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438"},p={unversionedId:"How-to_Inheritance_and_aggregation",id:"How-to_Inheritance_and_aggregation",isDocsHomePage:!1,title:"How-to: \u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438",description:"\u0414\u043b\u044f \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u043e\u0432 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u043b\u043e\u0433\u0438\u043a\u0443 \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u043f\u0430\u0440\u0442\u0438\u0439 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430. \u0421\u0434\u0435\u043b\u0430\u0435\u043c \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043a\u0430\u0436\u0434\u044b\u0439 \u0442\u0430\u043a\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043d, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043b \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u043d\u0443 \u043d\u043e\u0432\u0443\u044e \u043f\u0430\u0440\u0442\u0438\u044e \u0442\u043e\u0432\u0430\u0440\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_Inheritance_and_aggregation.md",sourceDirName:".",slug:"/How-to_Inheritance_and_aggregation",permalink:"/platform/ru/next/How-to_Inheritance_and_aggregation",editUrl:"https://github.com/danchanka/platform/edit/master/docs/ru/How-to_Inheritance_and_aggregation.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"05.04.2021",frontMatter:{title:"How-to: \u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438"},sidebar:"learn",previous:{title:"How-to: \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",permalink:"/platform/ru/next/How-to_Constraints"},next:{title:"How-to: \u041f\u043e\u0438\u0441\u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",permalink:"/platform/ru/next/How-to_Searching_for_elements"}},i=[],u={toc:i};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u043e\u0432 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u043b\u043e\u0433\u0438\u043a\u0443 \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u043f\u0430\u0440\u0442\u0438\u0439 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430. \u0421\u0434\u0435\u043b\u0430\u0435\u043c \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043a\u0430\u0436\u0434\u044b\u0439 \u0442\u0430\u043a\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043d, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043b \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u043d\u0443 \u043d\u043e\u0432\u0443\u044e \u043f\u0430\u0440\u0442\u0438\u044e \u0442\u043e\u0432\u0430\u0440\u0430."),(0,o.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u0432 \u043b\u043e\u0433\u0438\u043a\u0435 \u043f\u043e\u043d\u044f\u0442\u0438\u0435 \u0442\u043e\u0432\u0430\u0440, \u043f\u0430\u0440\u0442\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0443\u0442 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Item '\u0422\u043e\u0432\u0430\u0440';\nname '\u0418\u043c\u044f' = DATA ISTRING[50] (Item) IN id;\nFORM items '\u0422\u043e\u0432\u0430\u0440\u044b'\n    OBJECTS i = Item\n    PROPERTIES(i) name, NEW, DELETE\n;\nNAVIGATOR {\n    NEW items;\n}\n")),(0,o.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c ",(0,o.kt)("a",{parentName:"p",href:"/platform/ru/next/User_classes"},"\u043a\u043b\u0430\u0441\u0441")," ",(0,o.kt)("strong",{parentName:"p"},"Receipt"),", \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u0440\u0430\u0436\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Receipt '\u041f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Receipt) IN id;\nitem '\u0422\u043e\u0432\u0430\u0440' = DATA Item (Receipt);\nnameItem '\u0422\u043e\u0432\u0430\u0440' (Receipt r) = name(item(r)) IN id;\nposted '\u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043d' = DATA BOOLEAN (Receipt);\n\nFORM receipts '\u041f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f'\n    OBJECTS r = Receipt\n    PROPERTIES(r) date, nameItem, posted, NEW, DELETE\n;\nNAVIGATOR {\n    NEW receipts;\n}\n")),(0,o.kt)("p",null,"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u0443\u044e \u0441\u0445\u0435\u043c\u0443 \u0441 \u043e\u0434\u043d\u0438\u043c \u043a\u043b\u0430\u0441\u0441\u043e\u043c. \u041d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u0432\u0430 \u043a\u043b\u0430\u0441\u0441\u0430 : ",(0,o.kt)("strong",{parentName:"p"},"Receipt"),"\xa0(\u0434\u043b\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432) \u0438 ",(0,o.kt)("strong",{parentName:"p"},"ReceiptDetail\xa0"),"(\u0434\u043b\u044f \u0441\u0442\u0440\u043e\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432)."),(0,o.kt)("p",null,"\u041f\u043e \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u043b\u0430\u0441\u0441 Production, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Production '\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Production) IN id;\nitem '\u0422\u043e\u0432\u0430\u0440' = DATA Item (Production);\nnameItem '\u0422\u043e\u0432\u0430\u0440' (Production p) = name(item(p)) IN id;\nposted '\u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043d' = DATA BOOLEAN (Production);\n\nFORM productions '\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430'\n    OBJECTS p = Production\n    PROPERTIES(p) date, nameItem, posted, NEW, DELETE\n;\nNAVIGATOR {\n    NEW productions;\n}\n")),(0,o.kt)("p",null,"\u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b \u0431\u0435\u0437 \u043a\u0430\u043a\u043e\u0433\u043e-\u043b\u0438\u0431\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u0414\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043b\u043e\u0433\u0438\u043a\u0438 \u043f\u0430\u0440\u0442\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 ",(0,o.kt)("strong",{parentName:"p"},"Batch")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Batch '\u041f\u0430\u0440\u0442\u0438\u044f';\ndate '\u0414\u0430\u0442\u0430' = ABSTRACT DATE (Batch) IN id;\nitem '\u0422\u043e\u0432\u0430\u0440' = ABSTRACT Item (Batch);\nnameItem '\u0422\u043e\u0432\u0430\u0440' (Batch b) = name(item(b));\ntype '\u0422\u0438\u043f' = ABSTRACT STRING[30] (Batch);\n\nFORM batches '\u041f\u0430\u0440\u0442\u0438\u0438'\n    OBJECTS b = Batch\n    PROPERTIES(b) READONLY date, nameItem, type, objectClassName\n;\nNAVIGATOR {\n    NEW batches;\n}\n")),(0,o.kt)("p",null,"\u041a\u0430\u0436\u0434\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u044d\u0442\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u0430. \u0412\u0441\u0435 \u0435\u0433\u043e ",(0,o.kt)("a",{parentName:"p",href:"/platform/ru/next/Properties"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430")," \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u044b \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u043c\u0438, \u0442\u043e \u0435\u0441\u0442\u044c \u0438\u0445 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u043f\u0430\u0440\u0442\u0438\u0438."),(0,o.kt)("p",null,"\u0412 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,o.kt)("strong",{parentName:"p"},"Batch"),". \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u044b \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442 \u043d\u0435\u0433\u043e \u0443\u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u044b. \u0412 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u043b\u0430\u0441\u0441 \u0434\u043b\u044f \u043f\u0430\u0440\u0442\u0438\u0439, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0445 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u043e\u0432 :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ReceiptBatch '\u041f\u0430\u0440\u0442\u0438\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f';\nbatch (Receipt receipt) = AGGR ReceiptBatch WHERE posted(receipt);\n")),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,o.kt)("a",{parentName:"p",href:"/platform/ru/next/AGGR_operator"},"AGGR")," \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,o.kt)("strong",{parentName:"p"},"Receipt"),",\xa0\u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 ",(0,o.kt)("strong",{parentName:"p"},"posted")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e, \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c\u0441\u044f (\u0438 \u0443\u0434\u0430\u043b\u044f\u0442\u044c\u0441\u044f) \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,o.kt)("strong",{parentName:"p"},"ReceiptBatch"),". \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u0432\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441\u043e \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438 \u044d\u0442\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0434\u0440\u0443\u0433 \u043d\u0430 \u0434\u0440\u0443\u0433\u0430 : ",(0,o.kt)("strong",{parentName:"p"},"batch(Receipt r)")," \u0438 ",(0,o.kt)("strong",{parentName:"p"},"receipt(ReceiptBatch b)"),"."),(0,o.kt)("p",null,"\u0414\u0430\u043b\u044c\u0448\u0435 \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0443\u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441 ",(0,o.kt)("strong",{parentName:"p"},"ReceiptBatch")," \u043e\u0442 ",(0,o.kt)("strong",{parentName:"p"},"Batch"),", \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u043f\u0430\u0440\u0442\u0438\u0438, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f, \u0442\u0430\u043a\u0436\u0435 \u044f\u0432\u043b\u044f\u043b\u0438\u0441\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 (\u0442\u043e \u0435\u0441\u0442\u044c \u0440\u0430\u043d\u0435\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0442\u0438\u044f\u043c\u0438) :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"EXTEND CLASS ReceiptBatch : Batch;\ndate(ReceiptBatch rb) += date(receipt(rb));\nitem(ReceiptBatch rb) += item(receipt(rb));\ntype(ReceiptBatch rb) += '\u041f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435' IF rb IS ReceiptBatch;\n")),(0,o.kt)("p",null,"\u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,o.kt)("a",{parentName:"p",href:"/platform/ru/next/EXTEND_CLASS_instruction"},"EXTEND CLASS"),".\xa0\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 ",(0,o.kt)("strong",{parentName:"p"},"Batch")," \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f, \u043a\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043e\u043d\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,o.kt)("strong",{parentName:"p"},"ReceiptBatch"),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u0442\u044b \u0438 \u0442\u043e\u0432\u0430\u0440\u0430 \u043f\u043e\u0434\u0442\u044f\u0433\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043e\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0447\u0435\u0440\u0435\u0437 \u0441\u0441\u044b\u043b\u043a\u0443 ",(0,o.kt)("strong",{parentName:"p"},"receipt(ReceiptBatch b)"),". \u0412 \u0442\u0438\u043f \u043f\u0430\u0440\u0442\u0438\u0438 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0443\u0436\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c, \u0447\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 (\u0438\u043d\u0430\u0447\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043b\u044e\u0431\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430, \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443 \u043e \u043d\u0435\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u044b)."),(0,o.kt)("p",null,"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u0443\u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0438 \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043f\u0440\u0438 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,o.kt)("strong",{parentName:"p"},"ReceiptBatch"),"."),(0,o.kt)("p",null,"\u041f\u043e \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0430\u0440\u0442\u0438\u0438 \u0434\u043b\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430 :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ProductionBatch '\u041f\u0430\u0440\u0442\u0438\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430';\nbatch (Production production) = AGGR ProductionBatch WHERE posted(production);\n\nEXTEND CLASS ProductionBatch : Batch;\ndate(ProductionBatch rb) += date(production(rb));\nitem(ProductionBatch rb) += item(production(rb));\ntype(ProductionBatch rb) += '\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e' IF rb IS ProductionBatch;\n")),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441 \u0434\u043b\u044f \u0440\u0443\u0447\u043d\u043e\u0433\u043e \u0432\u0432\u043e\u0434\u0430 \u043f\u0430\u0440\u0442\u0438\u0439 \u0441\u0430\u043c\u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS UserBatch '\u041f\u0430\u0440\u0442\u0438\u044f, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u0430\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u0432\u0440\u0443\u0447\u043d\u0443\u044e';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (UserBatch) IN id;\nitem '\u0422\u043e\u0432\u0430\u0440' = DATA Item (UserBatch);\nnameItem '\u0422\u043e\u0432\u0430\u0440' (UserBatch b) = name(item(b));\n\nFORM userBatches '\u041f\u0430\u0440\u0442\u0438\u0438 (\u0440\u0443\u0447\u043d\u044b\u0435)'\n    OBJECTS b = UserBatch\n    PROPERTIES(b) date, nameItem, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW userBatches;\n}\n\nEXTEND CLASS UserBatch : Batch;\ndate(UserBatch ub) += date(ub);\nitem(UserBatch ub) += item(ub);\ntype(UserBatch ub) += '\u0420\u0443\u0447\u043d\u044b\u0435' IF ub IS UserBatch;\n")))}l.isMDXComponent=!0}}]);