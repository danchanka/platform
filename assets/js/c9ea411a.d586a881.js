(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{607:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(3),o=r(7),n=(r(0),r(750)),c={title:"How-to: Overriding values"},i={unversionedId:"How-to_Overriding_values",id:"version-v4/How-to_Overriding_values",isDocsHomePage:!1,title:"How-to: Overriding values",description:"Often there are tasks when it is necessary to give the user opportunity to enter the value of some attribute for some general object and then override it for some specific object.",source:"@site/versioned_docs/version-v4/How-to_Overriding_values.md",slug:"/How-to_Overriding_values",permalink:"/platform/docs/How-to_Overriding_values",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/How-to_Overriding_values.md",version:"v4",sidebar:"version-v4/docs",previous:{title:"How-to: Using objects as templates",permalink:"/platform/docs/How-to_Using_objects_as_templates"},next:{title:"How-to: Binding properties",permalink:"/platform/docs/How-to_Binding_properties"}},l=[],p={toc:l};function s(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Often there are tasks when it is necessary to give the user opportunity to enter the value of some attribute for some general object and then override it for some specific object."),Object(n.b)("p",null,"Let's take a look when you need to define a trade mark-up for a book. At the same time, we have the logic of categories defined. These categories form a tree by specifying a parent for each category. The user should be able to set a mark-up for any product and category at any level."),Object(n.b)("p",null,"Let's define the logic of categories and the ",Object(n.b)("a",{parentName:"p",href:"/platform/docs/Data_properties_DATA_"},"data property")," of this category's markup."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category 'Category';\nname 'Name' = DATA ISTRING[50] (Category) IN id;\n\nparent 'Parent' = DATA Category (Category) AUTOSET;\nnameParent 'Parent' (Category c) = name(parent(c)) IN id;\n\nmarkup 'Markup' = DATA NUMERIC[8,2] (Category);\n")),Object(n.b)("p",null,"The ",Object(n.b)("a",{parentName:"p",href:"/platform/docs/RECURSION_operator"},"RECURSION")," operator is used to calculate the ",Object(n.b)("em",{parentName:"p"},"level")," property for given two categories. This property will be equal to two to the power of N, where N is the distance between these categories."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-lsf"},"level 'Level' (Category child, Category parent) = RECURSION 1l IF child IS Category AND parent == child\n                                                                 STEP 2l IF parent == parent($parent) MATERIALIZED;\n")),Object(n.b)("p",null,"Let's create a property that will determine the corresponding parent by category and level."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-lsf"},"parent (Category child, LONG level) = GROUP MAX Category parent\n                                                       BY level(child, parent);\n")),Object(n.b)("p",null,'Let\'s find the minimal level of a category for which the a mark-up is defined. It will also be the level of "closest upper" category with a set mark-up.'),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-lsf"},"nearestGroupLevel 'The closest level for which the markup is set' (Category child) =\n    GROUP MIN level(child, Category parent) IF markup(parent);\n")),Object(n.b)("p",null,"We use this level to determine the category and its mark-up."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-lsf"},"nearestGroup 'The closest group for which the markup is set' (Category category) = parent(category, nearestGroupLevel(category));\n\noverMarkup 'Overidden markup' (Category category) = markup(nearestGroup(category));\n")),Object(n.b)("p",null,"Thus, the ",Object(n.b)("strong",{parentName:"p"},"overMarkup")," property will contain the required markup value for this category with its hierarchy taken into account."),Object(n.b)("p",null,"Let's now define the logic for books. Each of them is associated with a certain category that may be located at any level of the category hierarchy."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\ncategory 'Category' = DATA Category (Book) AUTOSET;\nnameCategory 'Category' (Book b) = name(category(b)) IN id;\n")),Object(n.b)("p",null,"Let's define the data property of a product markup. After that, let's construct an overridden property that will return a product markup if it's not ",Object(n.b)("strong",{parentName:"p"},"NULL")," and a previously created property with a category markup."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-lsf"},"markup 'Product markup' = DATA NUMERIC[8,2] (Book);\n\noverMarkup 'Overidden markup' (Book b) = OVERRIDE markup(b), overMarkup(category(b));\n")),Object(n.b)("p",null,"Finally, let's design a form that will allow the user to enter the markup for categories and products at the same time. Let's output both the data and the overridden markup for the category and the product. Note that changes in overridden properties on the form will be displayed immediately, but saved only when the corresponding button is clicked."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-lsf"},"markup 'Product markup' = DATA NUMERIC[8,2] (Book);\n\noverMarkup 'Overidden markup' (Book b) = OVERRIDE markup(b), overMarkup(category(b));\n")),Object(n.b)("p",null,"As a result, the form with the filled data will look like this:"),Object(n.b)("p",null,Object(n.b)("img",{src:r(910).default})))}s.isMDXComponent=!0},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=a,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||n;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<n;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},910:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/46367612-46992522ae9783dad1fc2e055f1ce3ea.png"}}]);