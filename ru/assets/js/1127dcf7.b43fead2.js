(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(746)),c={title:"How-to: \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c"},u={unversionedId:"How-to_Form_extension",id:"How-to_Form_extension",isDocsHomePage:!1,title:"How-to: \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c",description:"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0447\u0442\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430\xa0Sku, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u043e\u0439 \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f Sku :",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_Form_extension.md",slug:"/How-to_Form_extension",permalink:"/platform/ru/next/How-to_Form_extension",editUrl:"https://github.com/danchanka/platform/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/How-to_Form_extension.md",version:"current",sidebar:"learn",previous:{title:"How-to: \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439",permalink:"/platform/ru/next/How-to_Action_extension"},next:{title:"How-to: \u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f: \u041e\u0431\u0437\u043e\u0440",permalink:"/platform/ru/next/How-to_Integration"}},i=[],p={toc:i};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0447\u0442\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430\xa0",Object(a.b)("strong",{parentName:"p"},"Sku"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u043e\u0439 \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f Sku :"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Sku;\n\nCLASS Sku; // \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u043c \u043a\u043b\u0430\u0441\u0441 Sku\n\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA BPSTRING[100] (Sku); // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0435\u043c\u0443 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0438\u043c\u044f\n\nFORM sku 'Sku' // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0444\u043e\u0440\u043c\u0443 Item\n    OBJECTS s = Sku PANEL // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442 \u0442\u043e\u0432\u0430\u0440 \u0438 \u0434\u0435\u043b\u0430\u0435\u043c, \u0447\u0442\u043e\u0431\u044b \u043d\u0430 \u043d\u0435\u0439 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u043b\u0441\u044f \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u0438\u043d \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\n    PROPERTIES(s) name // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d\u0438 \u0442\u043e\u0432\u0430\u0440\u0430 \u043d\u0430 \u0444\u043e\u0440\u043c\u0443\n\n    EDIT Sku OBJECT s;\n;\n\nDESIGN sku {\n    NEW skuDetails AFTER BOX(s) { // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 i.box\n                                  // \u044d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u043f\u0430\u043d\u0435\u043b\u044c\u044e \u0437\u0430\u043a\u043b\u0430\u0434\u043e\u043a, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u0442\u043e\u0432\u0430\u0440\u0430\n        type = TABBED;\n        fill = 1; // \u043f\u0443\u0441\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0432\u0441\u044e \u0444\u043e\u0440\u043c\u0443\n    }\n}\n")),Object(a.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u043f\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u043a Sku \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432. \u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c, \u0441\u043e\u0437\u0434\u0430\u0432 \u043d\u043e\u0432\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0432\u0435\u0434\u0435\u0442 \u043d\u043e\u0432\u044b\u0439 \u043a\u043b\u0430\u0441\u0441\xa0",Object(a.b)("strong",{parentName:"p"},"Barcode"),"\xa0\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442 \u0444\u043e\u0440\u043c\u0443 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f Sku \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0432\u0432\u043e\u0434\u0430 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432 :"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Barcode;\n\nREQUIRE Sku;\n\nCLASS Barcode; // \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u043c \u043a\u043b\u0430\u0441\u0441 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u0430\n\nid = DATA BPSTRING[13] (Barcode); // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u0430\nsku = DATA Sku (Barcode); // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0441\u0441\u044b\u043b\u043a\u0443 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u0430 \u043d\u0430 sku\n\nEXTEND FORM sku // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0444\u043e\u0440\u043c\u0443 Item\n    OBJECTS b = Barcode // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432\n    PROPERTIES(b) id // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u043e\u043c\u0435\u0440 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432\n    PROPERTIES(b) NEW, DELETE // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044e \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432\n    FILTERS sku(b) == s // \u0434\u0435\u043b\u0430\u0435\u043c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438\u0441\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u044b \u044d\u0442\u043e\u0433\u043e sku\n;\n\nDESIGN sku { // \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c \u0434\u0438\u0437\u0430\u0439\u043d \u0444\u043e\u0440\u043c\u044b Item\n    skuDetails {\n        MOVE BOX(b); // \u0434\u0435\u043b\u0430\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u0441\u0435, \u0447\u0442\u043e \u043a\u0430\u0441\u0430\u0435\u0442\u0441\u044f \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432, \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u043e\u0439 \u0432 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043e\u043a\n    }\n}\n")),Object(a.b)("p",null,"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u043c\u043e\u0434\u0443\u043b\u044c\xa0",Object(a.b)("strong",{parentName:"p"},"Barcode"),"\xa0\u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0444\u043e\u0440\u043c\u0430\xa0",Object(a.b)("strong",{parentName:"p"},"Sku"),", \u0438 \u0432 \u043d\u0435\u0439 \u0435\u0441\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\xa0",Object(a.b)("strong",{parentName:"p"},"s"),"\xa0\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c\xa0",Object(a.b)("strong",{parentName:"p"},"skuDetails"),". \u0415\u0441\u043b\u0438 \u0444\u043e\u0440\u043c\u0430 \u043f\u043e \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f, \u0442\u043e \u043c\u043e\u0434\u0443\u043b\u044c\xa0",Object(a.b)("strong",{parentName:"p"},"Barcode"),"\xa0\u0441\u0442\u0430\u043d\u0435\u0442 \u043d\u0435\u0440\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b\u043c."))}s.isMDXComponent=!0},746:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(t),m=r,f=l["".concat(c,".").concat(m)]||l[m]||b[m]||a;return t?o.a.createElement(f,u(u({ref:n},p),{},{components:t})):o.a.createElement(f,u({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);