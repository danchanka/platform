(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{300:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(749)),c={title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430"},p={unversionedId:"Coding_conventions",id:"Coding_conventions",isDocsHomePage:!1,title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430",description:"1.  \u041e\u0431\u0449\u0438\u0435",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Coding_conventions.md",slug:"/Coding_conventions",permalink:"/platform/ru/next/Coding_conventions",editUrl:"https://github.com/danchanka/platform/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/Coding_conventions.md",version:"current",sidebar:"learn",previous:{title:"\u041f\u0443\u0441\u0442\u0430\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f",permalink:"/platform/ru/next/Empty_instruction"},next:{title:"IDE",permalink:"/platform/ru/next/IDE"}},b=[],i={toc:b};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u041e\u0431\u0449\u0438\u0435")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u0418\u043c\u0435\u043d\u0430 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0438 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438\u043c\u0435\u043d \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u043a\u0432\u044b. \u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043c\u0435\u043d\u0430 (\u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u0444\u043e\u0440\u043c, \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0438 \u0442. \u0434.) \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0439 \u0431\u0443\u043a\u0432\u044b. \u0415\u0441\u043b\u0438 \u0438\u043c\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u043b\u043e\u0432, \u0442\u043e \u043a\u0430\u0436\u0434\u043e\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0441\u043b\u043e\u0432\u043e \u0432 \u0438\u043c\u0435\u043d\u0438 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u043a\u0432\u044b."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"MODULE MyModule;\n\nNAMESPACE MyNamespace;\n\nCLASS MyClass 'My Class';\n\nmyProperty 'My Property' = DATA BOOLEAN (MyClass);\nmyAction 'My Action' (MyClass o) {\n    myProperty(o) <- TRUE;\n}\n\nFORM myForm\n;\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f, \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438\u043c\u0435\u043d \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u0443\u0441\u0442\u044b\u043c\u0438 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438 :"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"MODULE MyModule;\n\nREQUIRE MyModule2;\n\nNAMESPACE MyNamespace;\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'\u0417\u043d\u0430\u043a\u0438 "=", "<", "',">",'", "<=", "',">",'=", "+", "-" \u043e\u0442\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u0441 \u043e\u0431\u0435\u0438\u0445 \u0441\u0442\u043e\u0440\u043e\u043d \u043f\u0440\u043e\u0431\u0435\u043b\u0430\u043c\u0438.'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"value(x) = 324\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b. \u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u043f\u0440\u043e\u0431\u0435\u043b\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"f(x, y, z) = g(x, y, z) + h(x, y);\n\nFORM test\n    OBJECTS a = Class1, b = Class2\n    PROPERTIES VALUE(a), VALUE(b), name(a), name(b)\n;\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438. \u0415\u0441\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 ";" \u0435\u0441\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u043a\u043e\u0434, \u0442\u043e \u043f\u043e\u0441\u043b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b.'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"runAction1 (X x) = { f(x) <- 1; g(x) <- 1; }\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'\u041f\u0440\u0438 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0438\u043c\u0435\u043d\u0435\u043c \u0438\u043b\u0438 \u0442\u0438\u043f\u043e\u043c \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u043c "(" \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b. \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u0440\u043e\u0431\u0435\u043b \u043d\u0435 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f.'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"nameProperty (MyClass o) = name(property(o));\nmyProperty = DATA STRING[10] (MyClass);\n"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"),"  "),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'\u041a\u0430\u0436\u0434\u0430\u044f "\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u0430\u044f" \u0441\u0442\u0440\u043e\u043a\u0430 \u0441\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0440\u043e\u0432\u043d\u043e \u043d\u0430 4 \u043f\u0440\u043e\u0431\u0435\u043b\u0430. \u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e\u0441\u043b\u0435 IF, FOR, WHILE, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0441\u043b\u0435 \u0441\u0430\u043c\u043e\u0433\u043e \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430:'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"IF x = 1 THEN\n    f(a) <- TRUE;\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'\u041f\u0435\u0440\u0435\u0434 \u0438 \u043f\u043e\u0441\u043b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 "{" \u0438 "<-"\xa0\u0441\u0442\u0430\u0432\u044f\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b\u044b.'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"FOR f(a) DO\xa0{\n\xa0 \xa0 x(a) <- TRUE;\n}\n\u0438\u043b\u0438\nFOR f(a) DO\xa0{ x(a)\xa0<- TRUE;\xa0}\n"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u0424\u043e\u0440\u043c\u044b")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"FORM test\n    OBJECTS a = Object\n    PROPERTIES(a) VALUE\n\n    OBJECTS b = Object\n    PROPERTIES(b) VALUE\n;   \n")))))))}l.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,s=m["".concat(c,".").concat(u)]||m[u]||O[u]||o;return n?a.a.createElement(s,p(p({ref:t},i),{},{components:n})):a.a.createElement(s,p({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);