(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{490:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(747)),i={title:"Constraints",sidebar_label:"Overview"},s={unversionedId:"Constraints",id:"version-v4/Constraints",isDocsHomePage:!1,title:"Constraints",description:"Constraints in the platform determine which values the dataproperties can have and which cannot. In general, a constraint is defined as a property which value should always be NULL.",source:"@site/versioned_docs/version-v4/Constraints.md",slug:"/Constraints",permalink:"/platform/Constraints",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Constraints.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Calculated events",permalink:"/platform/Calculated_events"},next:{title:"Simple constraints",permalink:"/platform/Simple_constraints"}},l=[{value:"Show message",id:"message",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Constraints in the platform determine which values the ",Object(o.b)("a",{parentName:"p",href:"/platform/Data_properties_DATA_"},"data"),Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"properties")," can have and which cannot. In general, a constraint is defined as a property which value should always be ",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("p",null,"In fact, a constraint is a ",Object(o.b)("a",{parentName:"p",href:"/platform/Simple_event"},"simple event"),", where condition is the constrained property and handling is ",Object(o.b)("a",{parentName:"p",href:"#message"},"showing")," all the non-",Object(o.b)("strong",{parentName:"p"},"NULL")," values (in the ",Object(o.b)("a",{parentName:"p",href:"/platform/In_a_print_view_PRINT_#interactive"},"asynchronous message")," mode) and ",Object(o.b)("a",{parentName:"p",href:"/platform/Cancel_changes_CANCEL_"},"canceling")," all the changes. As well as for a simple event, you need to specify a base ",Object(o.b)("a",{parentName:"p",href:"/platform/Events"},"event"),", which determines when the defined constraint is checked. "),Object(o.b)("p",null,"Compared to implementation via simple events, constraints have a set of additional advantages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'There is a global checking procedure upon a working database for constraints (similarly to "recalculation" technique in simple events which is not applicable here as long as the handler contains the cancel changes operator)'),Object(o.b)("li",{parentName:"ul"},"Constraints are more understandable and readable since, unlike simple events, they emphasize the static/declarative nature of these rules, i.e. their independence from the moment in time."),Object(o.b)("li",{parentName:"ul"},"You can use the created constraint when showing dialogs for changing properties used in this constraint. In this case, an additional filter will be set in the dialog so that, when the property value changes to the selected one, the constraint is not violated.")),Object(o.b)("p",null,"Note that in some cases, instead of showing a message to the user and canceling the transaction, it is necessary, for example, to automatically resolve the violated constraint. In that case, it is recommended to use ",Object(o.b)("a",{parentName:"p",href:"/platform/Simple_constraints"},"simple constraints"),", or, if it is impossible, simple events."),Object(o.b)("h3",{id:"message"},"Show message"),Object(o.b)("p",null,"For any non-",Object(o.b)("strong",{parentName:"p"},"NULL")," value ",Object(o.b)("a",{parentName:"p",href:"/platform/In_a_print_view_PRINT_"},"output")," the platform uses an automatically generated ",Object(o.b)("a",{parentName:"p",href:"/platform/Forms"},"form"),", consisting of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"one ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#objects"},"group of objects")," with the objects corresponding to the parameters of the constrained property."),Object(o.b)("li",{parentName:"ul"},"properties with the matching classes belonging to the ",Object(o.b)("strong",{parentName:"li"},"System.recognize")," ",Object(o.b)("a",{parentName:"li",href:"/platform/Groups_of_properties_and_actions"},"property group"),"."),Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#filters"},"filter")," equal to the constrained property."),Object(o.b)("li",{parentName:"ul"},"a global message defined by the developer when creating the constraint.")),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"Constraints are created using the ",Object(o.b)("a",{parentName:"p",href:"/platform/CONSTRAINT_instruction"},Object(o.b)("strong",{parentName:"a"},"CONSTRAINT")," instruction"),". "),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"// balance not less than 0\nCONSTRAINT balance(Sku s, Stock st) < 0\n    MESSAGE 'The balance cannot be negative for ' + (GROUP CONCAT 'Product: ' + name(Sku ss) + ' Warehouse: ' + name(Stock sst), '\\n' IF SET(balance(ss, sst) < 0));\n\nbarcode = DATA STRING[15] (Sku);\n// \"emulation\" security policy\nCONSTRAINT DROPCHANGED(barcode(Sku s)) AND name(currentUser()) != 'admin' MESSAGE 'Only the administrator is allowed to change the barcode for an already created product';\n\nsku = DATA Sku (OrderDetail);\nin = DATA BOOLEAN (Sku, Customer);\n\nCONSTRAINT sku(OrderDetail d) AND NOT in(sku(d), customer(order(d)))\n    CHECKED BY sku[OrderDetail] // a filter by available sku when selecting an item for an order line will be applied\n    MESSAGE 'In the order, a product unavailable to the user is selected for the selected customer';\n")))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);