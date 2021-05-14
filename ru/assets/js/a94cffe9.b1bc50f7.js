(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[67992],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},99517:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"\u042d\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u044b (MAX, MIN)"},c={unversionedId:"Extremum_MAX_MIN_",id:"version-v4/Extremum_MAX_MIN_",isDocsHomePage:!1,title:"\u042d\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u044b (MAX, MIN)",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u044d\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0438\u043b\u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0441\u0440\u0435\u0434\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u0435\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u043a\u043e\u0433\u043e \u043b\u0438\u0431\u043e \u0438\u0437 \u044d\u0442\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0440\u0430\u0432\u043d\u043e NULL, \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f. \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0440\u0430\u0432\u043d\u044b NULL, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0432\u043d\u043e NULL.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/Extremum_MAX_MIN_.md",sourceDirName:".",slug:"/Extremum_MAX_MIN_",permalink:"/ru/Extremum_MAX_MIN_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/ru/Extremum_MAX_MIN_.md",version:"v4",lastUpdatedAt:1620140923,formattedLastUpdatedAt:"04.05.2021",frontMatter:{title:"\u042d\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u044b (MAX, MIN)"},sidebar:"version-v4/learn",previous:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f (=, >, <, ...)",permalink:"/ru/Comparison_operators_=_..._"},next:{title:"\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b (+, CONCAT, SUBSTRING)",permalink:"/ru/String_operators_+_CONCAT_SUBSTRING_"}},u=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],p={toc:u};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u044d\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u0430")," \u0441\u043e\u0437\u0434\u0430\u0435\u0442 ",(0,o.kt)("a",{parentName:"p",href:"/ru/Properties"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0438\u043b\u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0441\u0440\u0435\u0434\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u0435\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u043a\u043e\u0433\u043e \u043b\u0438\u0431\u043e \u0438\u0437 \u044d\u0442\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0440\u0430\u0432\u043d\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),", \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f. \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0440\u0430\u0432\u043d\u044b ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),", \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0432\u043d\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,o.kt)("h3",{id:"\u044f\u0437\u044b\u043a"},"\u042f\u0437\u044b\u043a"),(0,o.kt)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c, \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",(0,o.kt)("a",{parentName:"p",href:"/ru/MAX_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,o.kt)("inlineCode",{parentName:"a"},"MAX")),",  \u043c\u0438\u043d\u0438\u043c\u0443\u043c - \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",(0,o.kt)("a",{parentName:"p",href:"/ru/MIN_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,o.kt)("inlineCode",{parentName:"a"},"MIN")),"."),(0,o.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"date1 = DATA DATE(INTEGER);\ndate2 = DATA DATE(INTEGER);\nmaxDate (INTEGER i) = MAX date1(i), date2(i);\n\nbalance = DATA INTEGER (Item);\noutcome '\u041e\u0441\u0442\u0430\u0442\u043e\u043a (\u043d\u0435\u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439)' (Item i) = MAX balance(i), 0;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"minPrice(Book b) = MIN price1(b), price2(b);\n\ndate (INTEGER i) = DATA DATE (INTEGER);\nminDate (INTEGER i) = MIN date(i), 2001_01_01;\n")))}l.isMDXComponent=!0}}]);