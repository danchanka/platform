(window.webpackJsonp=window.webpackJsonp||[]).push([[534],{597:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(745)),i={title:"How-to: Overriding values"},l={unversionedId:"How-to_Overriding_values",id:"version-v4/How-to_Overriding_values",isDocsHomePage:!1,title:"How-to: Overriding values",description:"Often there are tasks when it is necessary to give the user opportunity to enter the value of some attribute for some general object and then override it for some specific object.",source:"@site/versioned_docs/version-v4/How-to_Overriding_values.md",slug:"/How-to_Overriding_values",permalink:"/platform/How-to_Overriding_values",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Overriding_values.md",version:"v4",lastUpdatedAt:1619790850,formattedLastUpdatedAt:"4/30/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Using objects as templates",permalink:"/platform/How-to_Using_objects_as_templates"},next:{title:"How-to: Binding properties",permalink:"/platform/How-to_Binding_properties"}},c=[],p={toc:c};function s(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Often there are tasks when it is necessary to give the user opportunity to enter the value of some attribute for some general object and then override it for some specific object."),Object(o.b)("p",null,"Let's take a look when you need to define a trade mark-up for a book. At the same time, we have the logic of categories defined. These categories form a tree by specifying a parent for each category. The user should be able to set a mark-up for any product and category at any level."),Object(o.b)("p",null,"Let's define the logic of categories and the ",Object(o.b)("a",{parentName:"p",href:"/platform/Data_properties_DATA_"},"data property")," of this category's markup."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category 'Category';\nname 'Name' = DATA ISTRING[50] (Category) IN id;\n\nparent 'Parent' = DATA Category (Category) AUTOSET;\nnameParent 'Parent' (Category c) = name(parent(c)) IN id;\n\nmarkup 'Markup' = DATA NUMERIC[8,2] (Category);\n")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/RECURSION_operator"},Object(o.b)("inlineCode",{parentName:"a"},"RECURSION")," operator")," is used to calculate the ",Object(o.b)("inlineCode",{parentName:"p"},"level")," property for given two categories. This property will be equal to two to the power of N, where N is the distance between these categories."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"level 'Level' (Category child, Category parent) = RECURSION 1l IF child IS Category AND parent == child\n                                                                 STEP 2l IF parent == parent($parent) MATERIALIZED;\n")),Object(o.b)("p",null,"Let's create a property that will determine the corresponding parent by category and level."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"parent (Category child, LONG level) = GROUP MAX Category parent\n                                                       BY level(child, parent);\n")),Object(o.b)("p",null,'Let\'s find the minimal level of a category for which the a mark-up is defined. It will also be the level of "closest upper" category with a set mark-up.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"nearestGroupLevel 'The closest level for which the markup is set' (Category child) =\n    GROUP MIN level(child, Category parent) IF markup(parent);\n")),Object(o.b)("p",null,"We use this level to determine the category and its mark-up."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"nearestGroup 'The closest group for which the markup is set' (Category category) = parent(category, nearestGroupLevel(category));\n\noverMarkup 'Overidden markup' (Category category) = markup(nearestGroup(category));\n")),Object(o.b)("p",null,"Thus, the ",Object(o.b)("inlineCode",{parentName:"p"},"overMarkup")," property will contain the required markup value for this category with its hierarchy taken into account."),Object(o.b)("p",null,"Let's now define the logic for books. Each of them is associated with a certain category that may be located at any level of the category hierarchy."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\ncategory 'Category' = DATA Category (Book) AUTOSET;\nnameCategory 'Category' (Book b) = name(category(b)) IN id;\n")),Object(o.b)("p",null,"Let's define the data property of a product markup. After that, let's construct an overridden property that will return a product markup if it's not ",Object(o.b)("inlineCode",{parentName:"p"},"NULL")," and a previously created property with a category markup."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"markup 'Product markup' = DATA NUMERIC[8,2] (Book);\n\noverMarkup 'Overidden markup' (Book b) = OVERRIDE markup(b), overMarkup(category(b));\n")),Object(o.b)("p",null,"Finally, let's design a form that will allow the user to enter the markup for categories and products at the same time. Let's output both the data and the overridden markup for the category and the product. Note that changes in overridden properties on the form will be displayed immediately, but saved only when the corresponding button is clicked."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"markup 'Product markup' = DATA NUMERIC[8,2] (Book);\n\noverMarkup 'Overidden markup' (Book b) = OVERRIDE markup(b), overMarkup(category(b));\n")),Object(o.b)("p",null,"As a result, the form with the filled data will look like this:"),Object(o.b)("p",null,Object(o.b)("img",{src:r(900).default})))}s.isMDXComponent=!0},745:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?n.a.createElement(m,l(l({ref:t},p),{},{components:r})):n.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},900:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/46367612-46992522ae9783dad1fc2e055f1ce3ea.png"}}]);