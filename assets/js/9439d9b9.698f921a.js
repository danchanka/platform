(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{475:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(746)),i={title:"Form events"},s={unversionedId:"Form_events",id:"version-v4/Form_events",isDocsHomePage:!1,title:"Form events",description:"While the application is running, there is a number of events for each form that occur as a result of certain user actions:",source:"@site/versioned_docs/version-v4/Form_events.md",slug:"/Form_events",permalink:"/platform/Form_events",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Form_events.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Form design",permalink:"/platform/Form_design"},next:{title:"Form operators: Overview",permalink:"/platform/Form_operators"}},c=[{value:"Default handlers",id:"default",children:[]},{value:"Standard handlers",id:"predefined",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"While the application is running, there is a number of events for each form that occur as a result of certain user actions:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Global")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"QUERYCLOSE")," - the user tries to close the form by clicking on the corresponding button in the form header."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"QUERYOK"),"\xa0- the user tries to close a modal form by double-clicking on any row in the table.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"For objects on the form")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGE")," - user ",Object(o.b)("a",{parentName:"li",href:"/platform/Interactive_view#objects"},"changed")," the ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#currentObject-broken"},"current value")," of an object.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"For properties or actions on the form")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGE")," - the user initiated a property change or action call."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGEWYS")," - the user initiated a WYSIWYG property change using the PASTE operation or a special input mechanism\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GROUPCHANGE")," - the user initiated a property change for all objects in the table"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EDIT"),"\xa0- the user initiated editing of an object"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CONTEXTMENU"),"\xa0- the user selected the specified item in the context menu of a property (action) on the form")),Object(o.b)("p",null,"There are also several so-called ",Object(o.b)("em",{parentName:"p"},"derivative")," events that are nothing more than syntactic sugar, but at the same time allow you more effectively to solve typical problems that arise when working with forms:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Global")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"INIT"),"\xa0- occurs immediately after the form is opened."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"APPLY")," - occurs when the form session is saved to the database (inside the transaction, at the very beginning, before global event handling is performed).**",Object(o.b)("br",{parentName:"li"}),"**"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"APPLY BEFORE")," - occurs immediately before the form session is saved to the database (before the start of the transaction)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"APPLY AFTER")," -\xa0occurs immediately after the form session is successfully saved to the database (after the end of the transaction)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CANCEL"),"\xa0- occurs when the form session changes are canceled."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CLOSE"),"\xa0- occurs when the ",Object(o.b)("strong",{parentName:"li"},"System.formClose")," action is executed."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DROP"),"\xa0- occurs when the ",Object(o.b)("strong",{parentName:"li"},"System.formDrop")," action is executed.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If the form is\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#owner"},"the session owner"),"\xa0(meaning that when the ",Object(o.b)("strong",{parentName:"p"},"System.formOk"),"\xa0action is executed the form session ",Object(o.b)("a",{parentName:"p",href:"/platform/Apply_changes_APPLY_"},"is saved"),"):"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"OK, OK BEFORE, OK AFTER"),"\xa0- occurs when the ",Object(o.b)("strong",{parentName:"li"},"System.formOk")," action is executed, at the moments similar to the corresponding moments for the ",Object(o.b)("strong",{parentName:"li"},"APPLY"),"\xa0event (i.e. inside, before and after the transaction). In this case, ",Object(o.b)("strong",{parentName:"li"},"OK")," and ",Object(o.b)("strong",{parentName:"li"},"OK BEFORE")," handlers are executed before executing ",Object(o.b)("strong",{parentName:"li"},"APPLY")," and ",Object(o.b)("strong",{parentName:"li"},"APPLY\xa0BEFORE")," handlers, and ",Object(o.b)("strong",{parentName:"li"},"OK AFTER")," is executed after ",Object(o.b)("strong",{parentName:"li"},"APPLY AFTER"),".")),Object(o.b)("p",{parentName:"div"},"If the form is not the session owner:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"OK")," -\xa0occurs when the",Object(o.b)("strong",{parentName:"li"},"System.formOk")," action is executed")),Object(o.b)("p",{parentName:"div"},"If ",Object(o.b)("strong",{parentName:"p"},"OK BEFORE")," and ",Object(o.b)("strong",{parentName:"p"},"OK AFTER")," handlers are defined, but the form is not the session owner, these handlers are still executed, respectively before and after the ",Object(o.b)("strong",{parentName:"p"},"OK")," event handler."))),Object(o.b)("p",null,"If, after the execution of event handlers with the ",Object(o.b)("strong",{parentName:"p"},"BEFORE")," postfix, the ",Object(o.b)("strong",{parentName:"p"},"System.applyCanceled"),"\xa0property value\xa0equals ",Object(o.b)("strong",{parentName:"p"},"TRUE"),", further execution of the action that led to the occurrence of this event is stopped (for example, with ",Object(o.b)("strong",{parentName:"p"},"APPLY BEFORE"),", saving the session is interrupted as if one of the existing constraints\xa0had been ",Object(o.b)("a",{parentName:"p",href:"/platform/Constraints"},"violated"),")."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For the remainder of the section, the behavior of properties and actions is exactly the same and so we will use only the term property (behavior is absolutely identical for actions)."))),Object(o.b)("p",null,"The developer can execute certain actions (",Object(o.b)("em",{parentName:"p"},"handlers"),") when any of the events described above occurs. In the current implementation\xa0there can be several handlers for global events and form object events, but only one for form property events. In the first case, the handler is added to the corresponding list, in the second case, the handler replaces the existing one."),Object(o.b)("p",null,"For property, it is possible to define its event handlers for the whole logics at once. In that case, these handlers will be automatically added to all forms where these properties are displayed."),Object(o.b)("p",null,"You can also specify a keyboard shortcut for each property, pressing which triggers the property's ",Object(o.b)("strong",{parentName:"p"},"CHANGE")," event. If several properties on the form correspond to one key combination, the event will be triggered only for the property whose component is closest to the current active component in the component hierarchy."),Object(o.b)("h3",{id:"default"},"Default handlers"),Object(o.b)("p",null,"For some events, the platform automatically creates default handlers:"),Object(o.b)("p",null,"QUERYCLOSE"),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0Calls the ",Object(o.b)("strong",{parentName:"p"},"System.formClose")," action"),Object(o.b)("p",null,"QUERYOK"),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0Calls the ",Object(o.b)("strong",{parentName:"p"},"System.formOk")," action"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGE")),Object(o.b)("p",null,"The user is requested for an object of the changed property value class, after which\xa0the received object is written to this property. If the property is not ",Object(o.b)("a",{parentName:"p",href:"/platform/Property_change_CHANGE_#changeable"},"mutable"),", the ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#userfilters"},"user filter")," mechanism\xa0for this property\xa0(or for the property specified using the corresponding option) is automatically called."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"GROUPCHANGE")),Object(o.b)("p",null,"Calls the ",Object(o.b)("strong",{parentName:"p"},"CHANGE")," event handler for all objects that meet the filter conditions of the object group in which the changed property is displayed.\xa0"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If property event handler uses (even ",Object(o.b)("a",{parentName:"p",href:"/platform/Value_request_REQUEST_#implicit"},"implicitly"),") the ",Object(o.b)("a",{parentName:"p",href:"/platform/Value_request_REQUEST_"},"value request")," operator, then default handler can be created ",Object(o.b)("a",{parentName:"p",href:"/platform/Value_request_REQUEST_#defaultChange-broken"},"in a different way"),"."))),Object(o.b)("p",null,"For an ",Object(o.b)("em",{parentName:"p"},"object request")," from the user, depending on the type of class\xa0, the following operators are used:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Builtin classes\xa0- the ",Object(o.b)("a",{parentName:"li",href:"/platform/Primitive_input_INPUT_"},"input primitive")," operator."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/User_classes"},"Custom classes"),"\xa0- the ",Object(o.b)("a",{parentName:"li",href:"/platform/In_an_interactive_view_SHOW_DIALOG_"},"open form")," operator. The form is the\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Interactive_view#edtClass"},"list")," form for this class.\xa0")),Object(o.b)("h3",{id:"predefined"},"Standard handlers"),Object(o.b)("p",null,"For properties and actions on the form, it is also possible to define the following ",Object(o.b)("em",{parentName:"p"},"standard")," change event handlers (",Object(o.b)("strong",{parentName:"p"},"CHANGE"),", ",Object(o.b)("strong",{parentName:"p"},"CHANGEWYS"),", ",Object(o.b)("strong",{parentName:"p"},"GROUPCHANGE"),", ",Object(o.b)("strong",{parentName:"p"},"EDIT"),"):\xa0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Read Only\xa0"),"(",Object(o.b)("strong",{parentName:"li"},"READONLY"),") - if the property is displayed in the table, the handler will be similar to ",Object(o.b)("strong",{parentName:"li"},"CHANGE")," default handler when the property is not mutable (that is, the user filter mechanism will be called). If the property is not displayed in the table,\xa0nothing will happen. You can also make this option conditional (",Object(o.b)("strong",{parentName:"li"},"READONLYIF"),") (that is, change only if the value of some property is not ",Object(o.b)("strong",{parentName:"li"},"NULL"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Selector"),"\xa0(",Object(o.b)("strong",{parentName:"li"},"SELECTOR"),") - when you try to make a change, a dialog will be shown in which the user will be asked to change the ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#currentObject-broken"},"current value")," of the object.")),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To define the form event handlers, use the ",Object(o.b)("strong",{parentName:"p"},"ON")," option in the ",Object(o.b)("strong",{parentName:"p"},"FORM")," instruction (",Object(o.b)("a",{parentName:"p",href:"/platform/Event_block"},"events")," block, ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties_and_actions_block"},"properties and actions")," block, ",Object(o.b)("a",{parentName:"p",href:"/platform/Object_blocks#objects"},"objects")," block), as well as in ",Object(o.b)("a",{parentName:"p",href:"/platform/Property_options"},"property options"),".\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"showImpossibleMessage()  { MESSAGE 'It\\'s impossible'; };\n\nposted = DATA BOOLEAN (Invoice);\n\nFORM invoice 'Invoice' // creating a form for editing an invoice\n    OBJECTS i = Invoice PANEL // creating an object of the invoice class\n\n//    ...  setting the rest of the form behavior\n\n    EVENTS\n        ON OK { posted(i) <- TRUE; }, // specifying that when the user clicks OK, an action should be executed that will execute actions to \"conduction\" this invoice\n        ON DROP showImpossibleMessage() // by clicking the formDrop button, showing a message that this cannot be, since this button by default will be shown only in the form for choosing an invoice, and this form is basically an invoice edit form\n;\n\nCLASS Shift;\ncurrentShift = DATA Shift();\n\nCLASS Cashier;\ncurrentCashier = DATA Cashier();\n\nCLASS Receipt;\nshift = DATA Shift (Receipt);\ncashier = DATA Cashier (Receipt);\n\nFORM POS 'POS' // declaring the form for product sale to the customer in the salesroom\n\n    OBJECTS r = Receipt PANEL // adding an object that will store the current receipt\n//    ... declaring the behavior of the form\n\n;\n\ncreateReceipt ()  {\n    NEW r = Receipt {\n        shift(r) <- currentShift();\n        cashier(r) <- currentCashier();\n\n        SEEK POS.r = r;\n    }\n}\n\nEXTEND FORM POS // adding a property through the form extension so that SEEK could be applied to the already created object on the form\n    EVENTS\n        ON INIT createReceipt() // when opening the form, executing the action to create a new receipt, which fills in the shift, cashier and other information\n;\n")))}b.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),h=a,d=p["".concat(i,".").concat(h)]||p[h]||m[h]||o;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);