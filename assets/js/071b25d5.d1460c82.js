(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{747:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(747)),i={title:"Filters and sortings block"},s={unversionedId:"Filters_and_sortings_block",id:"version-v4/Filters_and_sortings_block",isDocsHomePage:!1,title:"Filters and sortings block",description:"The filter and order block of the FORM instruction \u2013 add filters and orderings to the form structure; add filter groups to the interactive form view.",source:"@site/versioned_docs/version-v4/Filters_and_sortings_block.md",slug:"/Filters_and_sortings_block",permalink:"/platform/Filters_and_sortings_block",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Filters_and_sortings_block.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Properties and actions block",permalink:"/platform/Properties_and_actions_block"},next:{title:"Event block",permalink:"/platform/Event_block"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Filter group block",id:"filtergroup",children:[]},{value:"Syntax",id:"syntax-1",children:[]},{value:"Description",id:"description-1",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"Examples",id:"examples-1",children:[]},{value:"Order block",id:"sort",children:[]},{value:"Syntax",id:"syntax-2",children:[]},{value:"Description",id:"description-2",children:[]},{value:"Parameters",id:"parameters-2",children:[]},{value:"Examples",id:"examples-2",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The filter and order block of the ",Object(o.b)("a",{parentName:"p",href:"/platform/FORM_instruction"},"FORM instruction")," \u2013 add ",Object(o.b)("a",{parentName:"p",href:"/platform/Form_structure#filters"},"filters")," and ",Object(o.b)("a",{parentName:"p",href:"/platform/Form_structure#sort"},"orderings")," to the form structure; add ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#filtergroup"},"filter groups")," to the interactive form view."),Object(o.b)("p",null,"Fixed filter block"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"FILTERS expression1, ..., expressionN\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The fixed filters block adds filters that will be automatically applied when any form data is read. One block can list an arbitrary number of filters separated by a comma ."),Object(o.b)("p",null,"Each filter is defined with an  ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," that defines the filtering condition. In all expressions and context-dependent action operators you can use the names of the objects already declared on the form as parameters."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression1, ..., expressionN")),Object(o.b)("p",null,"List of filter expressions."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock;\nname = DATA ISTRING[100] (Stock);\nregion = DATA Region (Stock);\n\nCLASS Group;\nname = DATA ISTRING[100] (Group);\n\ngroup = DATA Group(Sku);\nnameGroup (Sku s) = name(group(s));\n\nactive = DATA BOOLEAN (Sku);\n\nonStock = DATA NUMERIC[10,2] (Stock, Sku);\n\nFORM onStock 'Balances' // creating a form in which the balances of products can be viewed\n    OBJECTS r = Region PANEL // adding a region object\n    PROPERTIES name(r) SELECTOR // adding the property name of the region, when clicking on which the user can select it\n\n    OBJECTS st = Stock // adding the warehouse object\n    PROPERTIES name(st) READONLY // adding the warehouse name\n    FILTERS region(st) == r // adding a filter so that only warehouses of the selected region are shown\n\n    OBJECTS s = Sku // adding products\n    PROPERTIES READONLY groupName = nameGroup(s), name(s), onStock(st, s) // adding the name of the group of products, assigning it groupName as the name of the property on the form, as well as the name and balance of the product\n    FILTERS active(s) // turning it on to show only active products\n;\n")),Object(o.b)("h3",{id:"filtergroup"},"Filter group block"),Object(o.b)("h3",{id:"syntax-1"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[EXTEND] FILTERGROUP groupName\n    FILTER caption1 expression1 [keystroke1] [DEFAULT]\n    ...\n    FILTER captionN expressionN [keystrokeN] [DEFAULT]\n")),Object(o.b)("h3",{id:"description-1"},"Description"),Object(o.b)("p",null,"The filter group block adds a set of filters to the form. A special UI component is then created for them, making it possible to apply one filter at a time. If the keyword ",Object(o.b)("strong",{parentName:"p"},"EXTEND")," is specified , the component is not created, but used for extension. In one block, you can define a single group of filters consisting of an arbitrary number of filters that will be shown to the user in the order of listing. "),Object(o.b)("p",null,"Each filter is defined with an ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," that defines the filtering condition. In all expressions and context-dependent action operators you can use the names of the objects already declared on the form as parameters."),Object(o.b)("h3",{id:"parameters-1"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName")),Object(o.b)("p",null,"Internal name of a filter group ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),". If the ",Object(o.b)("strong",{parentName:"p"},"EXTEND")," keyword is specified, the platform will search the form for the created filter group with the specified name \u2014 otherwise a new filter group with the specified name will be created."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption1, ..., captionN")),Object(o.b)("p",null,"Captions that will be shown in the user interface for the corresponding filter being added. Each caption is defined with a ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#strliteral-broken"},"string literal"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression1, ..., expressionN")),Object(o.b)("p",null,"Expressions describing filters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"keystroke1, ..., keystrokeN")),Object(o.b)("p",null,"Keyboard shortcuts that, when pressed by the user, will select a corresponding filter in the group. Each keyboard shortcut is defined with a string literal and the definition method is similar to that for a parameter in the Java class method ",Object(o.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"},"Keystroke.getKeystroke(String)"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DEFAULT")),Object(o.b)("p",null,"A keyword specifying that the filter being added must be selected automatically when the form is added. Can be specified for one filter in the group only."),Object(o.b)("h3",{id:"examples-1"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"active = DATA BOOLEAN (Stock);\n\nEXTEND FORM onStock // extending the previously created form with balances\n    FILTERGROUP stockActive // creating a group of filters with one filter, which will be shown as a checkbox by which the user can enable/disable the filter\n        FILTER 'Active' active(st) 'F11' // adding filter for active warehouses only, which will be applied by pressing F11\n    FILTERGROUP skuAvailability // creating a new filter group in which the user can select one of the filters using the drop-down list\n        FILTER 'Is on stock' onStock (st, s) 'F10' DEFAULT // adding a filter that will display only products on stock, which will be selected by pressing F10 and will be automatically selected when the form is opened\n;\n\n// ...\n\nEXTEND FORM onStock\n    EXTEND FILTERGROUP skuAvailability\n        FILTER 'Negative balances' onStock (st, s) < 0 'F9' // adding filter by expression\n;\n")),Object(o.b)("h3",{id:"sort"},"Order block"),Object(o.b)("h3",{id:"syntax-2"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ORDER formPropertyName1 [DESC] \n      ...\n      formPropertyNameN [DESC]\n")),Object(o.b)("h3",{id:"description-2"},"Description"),Object(o.b)("p",null,"An order block adds orderings to the form that will be automatically applied when any data are read on it. One block can list an arbitrary number of properties on the form separated by a comma in any sequence. These properties must be added to the form in advance."),Object(o.b)("h3",{id:"parameters-2"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formPropertyName1, ..., formPropertyNameN")),Object(o.b)("p",null,"Names of properties or form actions specifying the order."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DESC")),Object(o.b)("p",null,"Keyword. Specifies reverse order. By default, ascending order is used."),Object(o.b)("h3",{id:"examples-2"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"EXTEND FORM onStock // extending the previously created form with balances\n    ORDERS name(s) // enabling ordering by warehouse name in the warehouse list\n    ORDERS groupName, onStock(st, s) DESC // enabling ordering in ascending order of the group name, and inside in descending order of the balance in the warehouse\n                                            // it should be noted that the property is the property name on the form groupName, not just the property name nameGroupSku\n;\n")))}p.isMDXComponent=!0}}]);