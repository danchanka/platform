(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{488:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(750)),c={title:"Coding conventions"},p={unversionedId:"Coding_conventions",id:"version-v4/Coding_conventions",isDocsHomePage:!1,title:"Coding conventions",description:"1.  Common",source:"@site/versioned_docs/version-v4/Coding_conventions.md",slug:"/Coding_conventions",permalink:"/platform/docs/Coding_conventions",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Coding_conventions.md",version:"v4",sidebar:"version-v4/docs",previous:{title:"Empty instruction",permalink:"/platform/docs/Empty_instruction"},next:{title:"IDE",permalink:"/platform/docs/IDE"}},i=[],b={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Common")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Class names, module names, and namespace names begin with a capital letter. Other names (property, action, form, parameter, etc.) start with a lowercase letter. If the name consists of several words, then each subsequent word in the name begins with a capital letter."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"MODULE MyModule;\n\nNAMESPACE MyNamespace;\n\nCLASS MyClass 'My Class';\n\nmyProperty 'My Property' = DATA BOOLEAN (MyClass);\nmyAction 'My Action' (MyClass o) {\n    myProperty(o) <- TRUE;\n}\n\nFORM myForm\n;\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Module, requirements and namespace declarations must be separated by blank lines:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"MODULE MyModule;\n\nREQUIRE MyModule2;\n\nNAMESPACE MyNamespace;\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'"=", "<", "',">",'", "<=", "',">",'=", "+", "-" signs are separated on both sides by spaces.'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"value(x) = 324\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"A space is placed after the comma. There should be no space before the comma."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"f(x, y, z) = g(x, y, z) + h(x, y);\n\nFORM test\n    OBJECTS a = Class1, b = Class2\n    PROPERTIES VALUE(a), VALUE(b), name(a), name(b)\n;\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Every new property or action declaration starts on a new line. If there is another code after the ";", then a space is placed after the character.'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"runAction1 (X x) = { f(x) <- 1; g(x) <- 1; }\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'When declaring a property or action, a space is inserted between the name or type and the symbol "(". When using a property, there is no space.'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"nameProperty (MyClass o) = name(property(o));\nmyProperty = DATA STRING[10] (MyClass);\n"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Actions"),"  "),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Each "logically nested" line should have an offset by exactly 4 spaces. Actions are considered nested after ',Object(o.b)("strong",{parentName:"p"},"IF"),", ",Object(o.b)("strong",{parentName:"p"},"FOR"),", ",Object(o.b)("strong",{parentName:"p"},"WHILE"),", as well as after the property declaration itself:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"IF x = 1 THEN\n    f(a) <- TRUE;\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Spaces are placed before and after symbols "{" and "<-".'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"FOR f(a) DO\xa0{\n\xa0 \xa0 x(a) <- TRUE;\n}\n\u0438\u043b\u0438\nFOR f(a) DO\xa0{ x(a)\xa0<- TRUE;\xa0}\n"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Forms")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Object declarations are separated by an empty line."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"FORM test\n    OBJECTS a = Object\n    PROPERTIES(a) VALUE\n\n    OBJECTS b = Object\n    PROPERTIES(b) VALUE\n;   \n")))))))}l.isMDXComponent=!0},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=l(n),O=r,d=s["".concat(c,".").concat(O)]||s[O]||m[O]||o;return n?a.a.createElement(d,p(p({ref:t},b),{},{components:n})):a.a.createElement(d,p({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=O;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);