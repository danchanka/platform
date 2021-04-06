(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{266:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(746)),c={title:"How-to: Property extension"},i={unversionedId:"How-to_Property_extension",id:"How-to_Property_extension",isDocsHomePage:!1,title:"How-to: Property extension",description:"The classic approach for implementing polymorphism can look as follows:",source:"@site/docs/How-to_Property_extension.md",slug:"/How-to_Property_extension",permalink:"/platform/next/How-to_Property_extension",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_Property_extension.md",version:"current",sidebar:"learn",previous:{title:"How-to: Class extension",permalink:"/platform/next/How-to_Class_extension"},next:{title:"How-to: Action extension",permalink:"/platform/next/How-to_Action_extension"}},l=[],p={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The classic approach for implementing polymorphism can look as follows:"),Object(o.b)("p",null,"Let's create an abstract class ",Object(o.b)("strong",{parentName:"p"},"Shape")," with an abstract property ",Object(o.b)("strong",{parentName:"p"},"square"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Shape;\nsquare 'Area' = ABSTRACT DOUBLE (Shape);\n")),Object(o.b)("p",null,"Now, let's create classes ",Object(o.b)("strong",{parentName:"p"},"Rectangle\xa0"),"and ",Object(o.b)("strong",{parentName:"p"},"Circle")," inherited from ",Object(o.b)("strong",{parentName:"p"},"Shape"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Rectangle : Shape;\nwidth 'Width' = DATA DOUBLE (Rectangle);\nheight 'Height' = DATA DOUBLE (Rectangle);\n\nCLASS Circle : Shape;\nradius 'Circle radius' = DATA DOUBLE (Circle);\n")),Object(o.b)("p",null,"Define the implementation of the abstract property ",Object(o.b)("strong",{parentName:"p"},"square\xa0")," for the created classes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"square(rectangle) += width(rectangle) * height(rectangle);\nsquare(circle) += radius(circle) * radius(circle) * 3.14;\n")),Object(o.b)("p",null,"Let's assume that we need to make it so that in certain cases we can override the method of calculating the area for the ",Object(o.b)("strong",{parentName:"p"},"Circle"),' class. In this case, we can use an abstract property, whose implementation can be changed in a different module, to add a kind of "entry point" to the line defining the implementation of area for a circle :'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"overSquareCircle 'Overridden area' = ABSTRACT DOUBLE (Circle);\nsquare(circle) += OVERRIDE overSquareCircle(circle), (radius(circle) * radius(circle) * 3.14);\n")),Object(o.b)("p",null,"If the ",Object(o.b)("strong",{parentName:"p"},"overSquareCircle")," property is not implemented in any module, its value will always be ",Object(o.b)("strong",{parentName:"p"},"NULL")," and the base area calculation mechanism will be used. To change the calculation method to be used, you can define a different implementation in a certain ",Object(o.b)("strong",{parentName:"p"},"MyShape")," module."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyShape;\n\nREQUIRE Shape;\n\noverSquareCircle (circle) += radius(circle) * radius(circle) * 3.14159265359; // using a formula with higher accuracy\n")),Object(o.b)("p",null,"Note that you can use any other expressions instead of the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/OVERRIDE_operator"},"OVERRIDE operator"),". In particular, ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Arithmetic_operators_+_-_..._"},"(+) and (-)")," may be the most frequently used operators."))}s.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(f,i(i({ref:t},p),{},{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);