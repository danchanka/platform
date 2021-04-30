(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{712:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(745)),i={title:"How-to: Property extension"},c={unversionedId:"How-to_Property_extension",id:"version-v4/How-to_Property_extension",isDocsHomePage:!1,title:"How-to: Property extension",description:"The classic approach for implementing polymorphism can look as follows:",source:"@site/versioned_docs/version-v4/How-to_Property_extension.md",slug:"/How-to_Property_extension",permalink:"/platform/How-to_Property_extension",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Property_extension.md",version:"v4",lastUpdatedAt:1619768637,formattedLastUpdatedAt:"4/30/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Class extension",permalink:"/platform/How-to_Class_extension"},next:{title:"How-to: Action extension",permalink:"/platform/How-to_Action_extension"}},l=[],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The classic approach for implementing polymorphism can look as follows:"),Object(o.b)("p",null,"Let's create an abstract class ",Object(o.b)("inlineCode",{parentName:"p"},"Shape")," with an abstract property ",Object(o.b)("inlineCode",{parentName:"p"},"square"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Shape;\nsquare 'Area' = ABSTRACT DOUBLE (Shape);\n")),Object(o.b)("p",null,"Now, let's create classes ",Object(o.b)("inlineCode",{parentName:"p"},"Rectangle")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Circle")," inherited from ",Object(o.b)("inlineCode",{parentName:"p"},"Shape"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Rectangle : Shape;\nwidth 'Width' = DATA DOUBLE (Rectangle);\nheight 'Height' = DATA DOUBLE (Rectangle);\n\nCLASS Circle : Shape;\nradius 'Circle radius' = DATA DOUBLE (Circle);\n")),Object(o.b)("p",null,"Define the implementation of the abstract property ",Object(o.b)("inlineCode",{parentName:"p"},"square")," for the created classes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"square(rectangle) += width(rectangle) * height(rectangle);\nsquare(circle) += radius(circle) * radius(circle) * 3.14;\n")),Object(o.b)("p",null,"Let's assume that we need to make it so that in certain cases we can override the method of calculating the area for the ",Object(o.b)("inlineCode",{parentName:"p"},"Circle"),' class. In this case, we can use an abstract property, whose implementation can be changed in a different module, to add a kind of "entry point" to the line defining the implementation of area for a circle :'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"overSquareCircle 'Overridden area' = ABSTRACT DOUBLE (Circle);\nsquare(circle) += OVERRIDE overSquareCircle(circle), (radius(circle) * radius(circle) * 3.14);\n")),Object(o.b)("p",null,"If the ",Object(o.b)("inlineCode",{parentName:"p"},"overSquareCircle")," property is not implemented in any module, its value will always be ",Object(o.b)("inlineCode",{parentName:"p"},"NULL")," and the base area calculation mechanism will be used. To change the calculation method to be used, you can define a different implementation in a certain ",Object(o.b)("inlineCode",{parentName:"p"},"MyShape")," module."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyShape;\n\nREQUIRE Shape;\n\noverSquareCircle (circle) += radius(circle) * radius(circle) * 3.14159265359; // using a formula with higher accuracy\n")),Object(o.b)("p",null,"Note that you can use any other expressions instead of the ",Object(o.b)("a",{parentName:"p",href:"/platform/OVERRIDE_operator"},Object(o.b)("inlineCode",{parentName:"a"},"OVERRIDE")," operator"),". In particular, ",Object(o.b)("a",{parentName:"p",href:"/platform/Arithmetic_operators_+_-_..._"},Object(o.b)("inlineCode",{parentName:"a"},"(+)")," and ",Object(o.b)("inlineCode",{parentName:"a"},"(-)")," operators")," may be the most frequently used."))}s.isMDXComponent=!0},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);