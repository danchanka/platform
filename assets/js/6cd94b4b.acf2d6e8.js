(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{369:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(747)),c={title:"ACTIVATE operator"},p={unversionedId:"ACTIVATE_operator",id:"version-v4/ACTIVATE_operator",isDocsHomePage:!1,title:"ACTIVATE operator",description:"The ACTIVATE operator creates an action that activates a specified form, tab, property, or action on a form",source:"@site/versioned_docs/version-v4/ACTIVATE_operator.md",slug:"/ACTIVATE_operator",permalink:"/platform/ACTIVATE_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/ACTIVATE_operator.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"ABSTRACT operator (action)",permalink:"/platform/ABSTRACT_operator_action_"},next:{title:"ACTIVE FORM operator",permalink:"/platform/ACTIVE_FORM_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTIVATE")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/Activation_ACTIVATE_"},"activates")," a specified ",Object(o.b)("a",{parentName:"p",href:"/platform/Forms"},"form"),", tab, property, or action on a form"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ACTIVATE FORM formName\nACTIVATE TAB formName.componentSelector\nACTIVATE PROPERTY formPropertyId\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTIVATE")," operator creates an action that activates a form, a tab, a property or an action on a form. "),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formName")),Object(o.b)("p",null,"Form name. ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"componentSelector")),Object(o.b)("p",null,"Design component ",Object(o.b)("a",{parentName:"p",href:"/platform/DESIGN_instruction#selector-broken"},"selector"),". The component must be a tab in the tab panel."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formPropertyId")),Object(o.b)("p",null,"The global ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#formpropertyid-broken"},"ID of a property or action on a form")," which should get focus."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"//Form with two tabs\nFORM myForm 'My form'\n    OBJECTS u = CustomUser\n    PROPERTIES(u) name\n\n    OBJECTS c = Chat\n    PROPERTIES(c) name\n;\n\nDESIGN myForm {\n    NEW tabbedPane FIRST {\n        type = TABBED;\n        NEW contacts {\n            caption = 'Contacts';\n            MOVE BOX(u);\n        }\n        NEW recent {\n            caption = 'Recent';\n            MOVE BOX(c);\n        }\n    }\n}\n\ntestAction()  {\n    ACTIVATE FORM myForm;\n    ACTIVATE TAB myForm.recent;\n}\n\nCLASS ReceiptDetail;\nbarcode = DATA STRING[30] (ReceiptDetail);\nquantity = DATA STRING[30] (ReceiptDetail);\n\nFORM POS\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) barcode, quantityGrid = quantity\n;\n\ncreateReceiptDetail 'Add sales line'(STRING[30] barcode)  {\n    NEW d = ReceiptDetail {\n        barcode(d) <- barcode;\n        ACTIVATE PROPERTY POS.quantityGrid;\n    }\n}\n")))}m.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=m(r),u=n,f=b["".concat(c,".").concat(u)]||b[u]||s[u]||o;return r?a.a.createElement(f,p(p({ref:t},l),{},{components:r})):a.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);