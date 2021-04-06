(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{410:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(746)),s={title:"Value request (REQUEST)"},i={unversionedId:"Value_request_REQUEST_",id:"Value_request_REQUEST_",isDocsHomePage:!1,title:"Value request (REQUEST)",description:"The value\xa0request operator creates an action in which requesting value(s) is separated from directly processing the value(s). Accordingly, this operator allows not to perform a value request if its result is known in advance in the context of the call (the value of the System.requestPushed property is equal to TRUE). This, in turn, automatically gives you the following capabilities in various use cases:",source:"@site/docs/Value_request_REQUEST_.md",slug:"/Value_request_REQUEST_",permalink:"/platform/next/Value_request_REQUEST_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Value_request_REQUEST_.md",version:"current",sidebar:"learn",previous:{title:"Primitive input (INPUT)",permalink:"/platform/next/Primitive_input_INPUT_"},next:{title:"Object group operations: Overview",permalink:"/platform/next/Object_group_operations"}},l=[{value:"Implicit use",id:"implicit",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"value\xa0request")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," in which ",Object(o.b)("em",{parentName:"p"},"requesting")," value(s) is separated from directly ",Object(o.b)("em",{parentName:"p"},"processing")," the value(s). Accordingly, this operator allows not to perform a value request if its result ",Object(o.b)("em",{parentName:"p"},"is known in advance")," in the context of the call (the value of the ",Object(o.b)("strong",{parentName:"p"},"System.requestPushed")," property is equal to ",Object(o.b)("strong",{parentName:"p"},"TRUE"),"). This, in turn, automatically gives you the following capabilities in various use cases:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Asynchronous input")),Object(o.b)("p",null,"If the user initiates a ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_events"},"property"),"\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_events"},"change event")," (",Object(o.b)("strong",{parentName:"p"},"CHANGE"),"), and processing it contains exactly one request for the value of a builtin class\xa0(the most common case), then the platform does not call it immediately, but first asks the user to input the value of the\xa0builtin class. As soon as this input is completed, the user can immediately continue his work and the input result asynchronously (in a new thread) is sent to the server, where the processing of the occurred event is started only at that moment (and not when the event actually occurred). Moreover (we call this technique\xa0",Object(o.b)("em",{parentName:"p"},"pushing"),"\xa0the query value), the query result is marked as known in advance (the value of the ",Object(o.b)("strong",{parentName:"p"},"System.requestPushed")," property is set to ",Object(o.b)("strong",{parentName:"p"},"TRUE"),"), and the input value is written to the special property family: ",Object(o.b)("strong",{parentName:"p"},"requested.")," Accordingly, since this property family is used as the default result of all ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Value_input"},"value input","\xa0"),"operators, synchronous processing is emulated; however, the ergonomics of changing data on the form is significantly improved (for example, the user can continue to input data without waiting for the calculation of all properties on the form)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"PASTE")),Object(o.b)("p",null,"When the user inserts a value into a property cell using the OS tools, the platform triggers a WYSIWYG event to change this property (",Object(o.b)("strong",{parentName:"p"},"CHANGEWYS"),"), and calls the corresponding handler on the server. In this case, the value that the user inserted is pushed as the request value."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Change event (",Object(o.b)("strong",{parentName:"em"},"CHANGEWYS"),"\xa0and ",Object(o.b)("strong",{parentName:"em"},"CHANGE"),")\xa0",Object(o.b)("a",{parentName:"em",href:"/platform/next/Form_events#default"},"default handler")," for composition")),Object(o.b)("p",null,"If a property being changed is created using the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Composition_JOIN_"},"composition")," operator\xa0with one argument\xa0(most often a name or ID), and change event handler is not explicitly defined for it, the platform automatically creates this handler as follows:\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGE")),Object(o.b)("p",null,"The user is ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_events#queryValue-broken"},"requested")," an object of the property value class which is used as an argument, and this property value changes to the received object\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGEWYS")),Object(o.b)("p",null,"The user is requested for an object of the class of the value of the edited property, after which the platform finds the first object which composition property value is equal to the value input by the user and then changes the value of the\xa0property used as an argument to this object."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In both cases, a property change means calling the ",Object(o.b)("strong",{parentName:"p"},"CHANGE")," event handler, while the value to which the property changes is pushed as the request value."))),Object(o.b)("p",null,'Creating such default handlers allows to use PASTE "out of the box" for properties whose values belong not only to built-in but also to custom classes.'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Group change (",Object(o.b)("strong",{parentName:"em"},"GROUPCHANGE"),") default handler")),Object(o.b)("p",null,"By default, group change handler is created as follows: ",Object(o.b)("strong",{parentName:"p"},"CHANGE")," is called first for objects' ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_structure#currentObject-broken"},"current values"),", then if the input has not been canceled, the same handler is called for all other values of objects (matching the filter), with the value of the ",Object(o.b)("strong",{parentName:"p"},"System.requestPushed\xa0"),"property set to\xa0",Object(o.b)("strong",{parentName:"p"},"TRUE")," (it is assumed that the result of the input does not change during its handling, thus the behavior is emulated as if the first value was pushed)."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In fact, the value request operator performs only two operations: it ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Branching_CASE_IF_MULTI_"},"checks")," ",Object(o.b)("strong",{parentName:"p"},"System.requestPushed")," (pushing the value) for the\xa0value request action and ",Object(o.b)("strong",{parentName:"p"},"System.requestCanceled")," (canceling the value) for the request processing action, and it is also responsible for determining the possibility of asynchronous input of the property being changed. At the same time, using this operator makes the code clearer and more readable, therefore it is recommended to use it (instead of explicit checks and options)."))),Object(o.b)("p",null,"As with other value input operators, it is possible to define\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Value_input#result"},"main\xa0and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled). Accordingly, it is these two actions in this operator that are responsible for processing request values."),Object(o.b)("h3",{id:"implicit"},"Implicit use"),Object(o.b)("p",null,"Note that all ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Value_input"},"value input"),' operators can be automatically "wrapped" in the value request operator by using the corresponding option (',Object(o.b)("strong",{parentName:"p"},"DO"),"). And since, as a rule, a value is input using one input operator, it is recommended to use this option by default, and use the value request operator explicitly only in really complex cases, for example, if there can be several input options (depending on the condition, different forms, etc.)"),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"The syntax of the value request operator is described by the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/REQUEST_operator"},Object(o.b)("strong",{parentName:"a"},"REQUEST")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"\nrequestCustomer (Order o)  {\n    LOCAL resultValue = STRING[100] ();\n    REQUEST {\n        ASK 'Choose from list?' DO\n            DIALOG customers OBJECTS c = resultValue() CHANGE;\n        ELSE\n            INPUT = resultValue() CHANGE;\n    } DO\n        customer(o) <- resultValue();\n}\n\nFORM request\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE requestCustomer(o) // for example, group adjustment will be performed\n;\n")))}p.isMDXComponent=!0},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,b=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return a?r.a.createElement(b,i(i({ref:t},c),{},{components:a})):r.a.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);