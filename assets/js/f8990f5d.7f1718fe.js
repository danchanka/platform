(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{726:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(746)),i={title:"Event block"},c={unversionedId:"Event_block",id:"Event_block",isDocsHomePage:!1,title:"Event block",description:"The event block of the \xa0FORM instruction\xa0- a set of constructions controlling events in an interactive form view.",source:"@site/docs/Event_block.md",slug:"/Event_block",permalink:"/platform/next/Event_block",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Event_block.md",version:"current",lastUpdatedBy:"pavel-miniutka",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Filters and sortings block",permalink:"/platform/next/Filters_and_sortings_block"},next:{title:"DESIGN instruction",permalink:"/platform/next/DESIGN_instruction"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters\xa0",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The event block of the \xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/FORM_instruction"},"FORM instruction"),"\xa0- a set of constructions controlling ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_events"},"events")," in an interactive form view."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"EVENTS\xa0formEventDecl1, ..., formEventDeclN\n")),Object(o.b)("p",null,"Where each ",Object(o.b)("em",{parentName:"p"},"formEventDecli")," has the following syntax:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ON eventType eventActionId(param1, ..., paramK) | { eventActionOperator }\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The event block allows to define handlers for ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_events"},"form events")," that occur as the result of certain user actions. Each block can have an arbitrary number of comma-separated event handlers. If several handlers\xa0are defined for an event, they are guaranteed to be executed in the order they are defined.\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventType")),Object(o.b)("p",null,"Type of form event. It is specified with one of the following keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"INIT"),"\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"OK")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"OK BEFORE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"OK AFTER")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"APPLY")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"APPLY BEFORE"),"\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"APPLY AFTER"),"\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CANCEL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CLOSE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DROP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGE")," objName \u2013 specifies that the action will be executed when the object\xa0",Object(o.b)("em",{parentName:"li"},"objName")," is changed."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"QUERYOK")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"QUERYCANCEL"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventActionId")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"ID of the action"),",\xa0that will be the event handler."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramK")),Object(o.b)("p",null,"List of action parameters. Each parameter is specified with the\xa0object name on the form.\xa0The object\xa0name, in turn, is specified with a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"Context-dependent action operator"),". You can use the names of already declared objects on the form as parameters."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"showImpossibleMessage()  { MESSAGE 'It\\'s impossible'; };\n\nposted = DATA BOOLEAN (Invoice);\n\nFORM invoice 'Invoice' // creating a form for editing an invoice\n    OBJECTS i = Invoice PANEL // creating an object of the invoice class\n\n//    ...  setting the rest of the form behavior\n\n    EVENTS\n        ON OK { posted(i) <- TRUE; }, // specifying that when the user clicks OK, an action should be executed that will execute actions to \"conduction\" this invoice\n        ON DROP showImpossibleMessage() // by clicking the formDrop button, showing a message that this cannot be, since this button by default will be shown only in the form for choosing an invoice, and this form is basically an invoice edit form\n;\n\nCLASS Shift;\ncurrentShift = DATA Shift();\n\nCLASS Cashier;\ncurrentCashier = DATA Cashier();\n\nCLASS Receipt;\nshift = DATA Shift (Receipt);\ncashier = DATA Cashier (Receipt);\n\nFORM POS 'POS' // declaring the form for product sale to the customer in the salesroom\n\n    OBJECTS r = Receipt PANEL // adding an object that will store the current receipt\n//    ... declaring the behavior of the form\n\n;\n\ncreateReceipt ()  {\n    NEW r = Receipt {\n        shift(r) <- currentShift();\n        cashier(r) <- currentCashier();\n\n        SEEK POS.r = r;\n    }\n}\n\nEXTEND FORM POS // adding a property through the form extension so that SEEK could be applied to the already created object on the form\n    EVENTS\n        ON INIT createReceipt() // when opening the form, executing the action to create a new receipt, which fills in the shift, cashier and other information\n;\n")))}b.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,f=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);