(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{328:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(746)),i={title:"Activation (ACTIVATE)"},c={unversionedId:"Activation_ACTIVATE_",id:"Activation_ACTIVATE_",isDocsHomePage:!1,title:"Activation (ACTIVATE)",description:"The activation operator creates an action that activates one of three form elements:",source:"@site/docs/Activation_ACTIVATE_.md",slug:"/Activation_ACTIVATE_",permalink:"/platform/next/Activation_ACTIVATE_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Activation_ACTIVATE_.md",version:"current",lastUpdatedBy:"pavel-miniutka",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Focus operations",permalink:"/platform/next/Focus_operations"},next:{title:"Activity (ACTIVE)",permalink:"/platform/next/Activity_ACTIVE_"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"activation")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that activates one of three form elements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Property - sets the focus on the specified ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Properties"},"property")," on the form."),Object(o.b)("li",{parentName:"ul"},"Tab \u2014 selects one of the tabs in the specified ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Form_design#tab-broken"},"tab panel"),"."),Object(o.b)("li",{parentName:"ul"},"Form - activates the specified ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Forms"},"form"),", if open. If one form was opened several times, the one opened first is activated.")),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To create an action that activates a form element, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/ACTIVATE_operator"},Object(o.b)("strong",{parentName:"a"},"ACTIVATE")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"//Form with two tabs\nFORM myForm 'My form'\n    OBJECTS u = CustomUser\n    PROPERTIES(u) name\n\n    OBJECTS c = Chat\n    PROPERTIES(c) name\n;\n\nDESIGN myForm {\n    NEW tabbedPane FIRST {\n        type = TABBED;\n        NEW contacts {\n            caption = 'Contacts';\n            MOVE BOX(u);\n        }\n        NEW recent {\n            caption = 'Recent';\n            MOVE BOX(c);\n        }\n    }\n}\n\ntestAction()  {\n    ACTIVATE FORM myForm;\n    ACTIVATE TAB myForm.recent;\n}\n\nCLASS ReceiptDetail;\nbarcode = DATA STRING[30] (ReceiptDetail);\nquantity = DATA STRING[30] (ReceiptDetail);\n\nFORM POS\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) barcode, quantityGrid = quantity\n;\n\ncreateReceiptDetail 'Add sales line'(STRING[30] barcode)  {\n    NEW d = ReceiptDetail {\n        barcode(d) <- barcode;\n        ACTIVATE PROPERTY POS.quantityGrid;\n    }\n}\n")))}s.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);