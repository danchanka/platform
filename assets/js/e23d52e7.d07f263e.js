(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{659:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(749)),s={title:"Access from an external system"},i={unversionedId:"Access_from_an_external_system",id:"version-v4/Access_from_an_external_system",isDocsHomePage:!1,title:"Access from an external system",description:"The platform allows external systems\xa0\xa0 to access an lsFusion-based system using various network protocols. The interface of such interaction is a call for an action with specified parameters and, if necessary, the return of certain property values (without parameters) as \xa0results. It is assumed that all parameter and result objects are objects of built-in classes.",source:"@site/versioned_docs/version-v4/Access_from_an_external_system.md",slug:"/Access_from_an_external_system",permalink:"/platform/Access_from_an_external_system",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Access_from_an_external_system.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Integration: Overview",permalink:"/platform/Integration"},next:{title:"Access from an internal system",permalink:"/platform/Access_from_an_internal_system"}},c=[{value:"Defining an action",id:"actiontype",children:[]},{value:"Protocols",id:"protocols",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The platform allows external systems\xa0\xa0 to access an lsFusion-based system using various network protocols. The interface of such interaction is a call for an action with specified parameters and, if necessary, the return of certain property values (without parameters) as \xa0",Object(o.b)("em",{parentName:"p"},"results"),". It is assumed that all parameter and result objects are objects of ",Object(o.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"built-in classes"),"."),Object(o.b)("h3",{id:"actiontype"},"Defining an action"),Object(o.b)("p",null,"An action being called can be defined in one of the three ways:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"EXEC \u2013 the name of the action is specified."),Object(o.b)("li",{parentName:"ul"},"EVAL \u2013 code in the lsFusion language is specified. It is assumed that this code contains a declaration of an action named ",Object(o.b)("strong",{parentName:"li"},"run"),". This is the action that will be called."),Object(o.b)("li",{parentName:"ul"},"EVAL ACTION \u2013 action code in the lsFusion language is specified. To access a parameter, the special character $ and the parameter number (starting from 1) are used.")),Object(o.b)("h3",{id:"protocols"},"Protocols"),Object(o.b)("p",null,"The platform currently supports the following network protocols:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"HTTP"))),Object(o.b)("p",null,"Communication over this protocol is supported both for an application server on port 7651, as well as a web server (if any) on the same port, that has a web client installed."),Object(o.b)("p",null,"The URL format, depending on the method of ",Object(o.b)("a",{parentName:"p",href:"#actiontype"},"action definition"),", looks as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"EXEC - http://server address:port/exec?action=<action name",">",'. The "action" parameter must always be specified.'),Object(o.b)("li",{parentName:"ul"},"EVAL - http://server address:port/eval?script=<code",">",'. If the "script" parameter is not specified, it is assumed that the code is passed in the first BODY parameter.'),Object(o.b)("li",{parentName:"ul"},"EVAL ACTION \u2013 http://server address:port/eval/action?script=<action code",">",'.\xa0If the "script" parameter is not specified, it is assumed that the code is passed in the first BODY parameter.')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Parameters")),Object(o.b)("p",null,"Parameters can be passed both in the request string (by appending constructs like &p=<parameter value",">"," to the end of the string), as well as in the request body (BODY). It is assumed that URL parameters are substituted (in the order of their appearance in the request) for the executed action before BODY parameters."),Object(o.b)("p",null,"When processing BODY parameters, parameters with the content type from the following\xa0",Object(o.b)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties"},"table")," are considered files and are passed to the action parameters as objects of the file class ( ",Object(o.b)("strong",{parentName:"p"},"FILE")," , *",Object(o.b)("strong",{parentName:"p"},"*PDFFILE**"),' \xa0, etc.). During this process, the corresponding file\xa0extension is taken from the table mentioned above. If a particular content type is not found in the table, but it starts with "application", the parameter is still considered a file, and the file extension is taken from the right part of the content\xa0type (for example, it will be "abc" for the "application/abc" content type). Parameters with the application/null content type are considered to be equal to ',Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("p",null,"BODY parameters with types of content different from the ones mentioned above are considered strings and are automatically converted into parameter classes of the called action upon being called. Empty strings are converted into ",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"Headers"),"\xa0of an executed request are automatically saved to the ",Object(o.b)("strong",{parentName:"p"},"System.headers","[","TEXT","]")," property. The name of the header is written to the only parameter of this property, and the value of the header is written to the property's value."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Results")),Object(o.b)("p",null,"Properties whose values must be returned as the result are passed in the request string by adding strings like &return=<property name",">"," to its end. It is assumed that the values of specified properties are returned in the order of their appearance in the request string. By default, if no result properties are specified, the resulting property is the first one with a non-",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0value from the following\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Built-in_classes#export-broken"},"list"),".\xa0"),Object(o.b)("p",null,"If the result of a request is a file (",Object(o.b)("strong",{parentName:"p"},"FILE"),", ",Object(o.b)("strong",{parentName:"p"},"PDFFILE"),", etc.), the response ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Media_type"},"content type"),"\xa0, depending on the file extension,\xa0is determined in accordance with the following ",Object(o.b)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties"},"table"),". If the file extension is not found in this table, the content type is set\xa0to application/<file\xa0extension",">","."),Object(o.b)("p",null,"The file extension in this case is determined automatically, similarly\xa0to the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/WRITE_operator#extension-broken"},Object(o.b)("strong",{parentName:"a"},"WRITE"),"\xa0operator"),"."),Object(o.b)("p",null,"In all of the three cases above, if the result value is ",Object(o.b)("strong",{parentName:"p"},"NULL"),", a null string (for example, application/null) is substituted for the file extension in the content type, and an empty string is returned as the response itself."),Object(o.b)("p",null,"Request results different from files are converted into strings and are passed as a text/plain content type. ",Object(o.b)("strong",{parentName:"p"},"NULL")," values are returned as empty strings."),Object(o.b)("p",null,"The values of the\xa0",Object(o.b)("strong",{parentName:"p"},"System.headersTo","[","TEXT","]")," property are automatically written to the\xa0",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"headers"),"\xa0of the request result. So, the header name is read from the only parameter of this property, and the header value is read from the property value."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Several "),"results/\xa0",Object(o.b)("em",{parentName:"p"},"parameters\xa0"),"in BODY**"),Object(o.b)("p",null,"If the type of request BODY is multipart/","*"," or application/x-www-form-urlencoded, it will be split into parts, and each part will be considered a separate request parameter. In this case, the order of these parameters is equal to the order in corresponding parts of the request BODY."),Object(o.b)("p",null,"At the same time, if the number of results being returned is more than one, then the following happens:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the request has a returnmultitype=bodyurl parameter, the response content type on transmission\xa0is set to application/x-www-form-urlencoded and the results are encoded as if they were ",Object(o.b)("a",{parentName:"li",href:"#url-broken"},"passed in the request string"),"."),Object(o.b)("li",{parentName:"ul"},"Otherwise, the response content type during transmission is set to multipart/mixed, and the results are passed as internal parts of this response.\xa0")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Note that the processing of parameters and request results is largely similar to their processing during ",Object(o.b)("a",{parentName:"p",href:"/platform/Access_to_an_external_system_EXTERNAL_"},"access to an external system")," over the HTTP protocol (in this case, parameters are processed as results and vice versa, results are processed as parameters)."))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Stateful API")),Object(o.b)("p",null,"The API described above is a REST API. Accordingly, the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Change_sessions"},"change session"),"\xa0is created when a call is initiated, and closes immediately after the call ends. However, there are situations where such behavior is undesirable, and you need to accumulate changes for a certain period of time (for example, while the user is inputting data), which means that the session must be saved and handed over between sessions. In order to do this, you can add a string of the following format to the end of the query string: &session=<session ID",">",", where <session ID",">"," is any non-empty string. In this case, the session will not be closed after the call, but will be associated with a previously passed ID, so that all subsequent calls with this ID will be executed in this session. In order to close a session (after the end of a call), you need to add the ","_","close postfix (for example,&session=0","_","close) to its ID in the request string."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Since cookie files are implicitly used for working with HTTP sessions, it is important not to forget to save / pass cookies between stateful http calls (this, however, is typically done automatically by a browser, the HttpClient in Java, etc.)"))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The current implementation of the platform assumes that if sessions are used, the elements of the system (for example, local properties) created in the current call are deleted \u2014 that is, they are not visible in subsequent calls."))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Authentication")),Object(o.b)("p",null,"When executing an http request, it is often necessary to identify the user on whose behalf the specified action will be executed. At the moment, two types of authentication are supported by the platform:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic identification"),' - the user name and password are passed in an encoded form in the "Authorization: Basic <credentials',">",'"heading.'),Object(o.b)("li",{parentName:"ul"},"Token-based authentication consists of two stages:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"At the first stage, you need to execute the \xa0",Object(o.b)("strong",{parentName:"li"},"Authentication.getAuthToken","[","]")," action with basic authentication. The result of this action will be an authentication token with a fixed lifetime (one day ",Object(o.b)("a",{parentName:"li",href:"/platform/Working_parameters#authTokenExpiration-broken"},"by default"),"). An example of a request: \xa0",Object(o.b)("a",{parentName:"li",href:"http://localhost/exec?action=getAuthToken."},"http://localhost/exec?action=getAuthToken.")),Object(o.b)("li",{parentName:"ul"},'The token you receive can be used for authentication during its lifetime by passing it in the "Authorization: Bearer <token',">",'" header (similarly to JWT which is used in the current implementation of the platform for generating authentication tokens).')))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Form API")),Object(o.b)("p",null,"Apart from executing actions, the platform also supports an API\xa0(similar to JSON API) for working with ",Object(o.b)("a",{parentName:"p",href:"/platform/Forms"},"forms"),", or specifically, their ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view"},"interactive views"),". Since it's a stateful API designed for the asynchronous mode (which means that the HTTPS interface itself has a number of system parameters, such as a request index, index of the latest received response, etc.), it's easier to use this API with the help of special libraries for specific languages/platforms that you want to integrate with:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"JavaScript"))),Object(o.b)("p",null,"The JavaScript library is available in the central npm-repository under the name \xa0",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/~lsfusion"},"@lsfusion/core"),"."),Object(o.b)("p",null,"The key concept in this API is the concept of ",Object(o.b)("em",{parentName:"p"},"state"),". A state is a JS object with a structure corresponding to form elements in the following way:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#objects"},"An object group")," corresponds to a JS object that is stored in the js field of the state object. The name of the field matches the name of the object group. Each JS object from the object group, in turn, stores an array of JS objects (with ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#filters"},"filters")," and ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#sort"},"orders")," taken into account) in the ",Object(o.b)("strong",{parentName:"li"},"list")," field. The JS object of the object group corresponds to the ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#currentObject-broken"},"current")," object collection. Also, each JS object of an array (including the JS object of the object group) in the ",Object(o.b)("strong",{parentName:"li"},"value")," field stores the value of objects \u2013 only values if there is just one object in the object group or, if there are multiple objects, a JS object with fields whose names are equal to object names and values are equal to object values."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/Properties"},"Properties")," correspond to a value stored in a field (the name of the field is equal to the property name) of a JS object which is determined in the following way depending on the existence of parameters and\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Interactive_view#property"},"its view"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"A property has parameters:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The property view is equal to ",Object(o.b)("strong",{parentName:"li"},"GRID")," of each JS object in the ",Object(o.b)("strong",{parentName:"li"},"list")," array of the JS object of this property's ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#drawgroup-broken"},"display group"),"."),Object(o.b)("li",{parentName:"ul"},"The property's view is equal to ",Object(o.b)("strong",{parentName:"li"},"PANEL"),", ",Object(o.b)("strong",{parentName:"li"},"TOOLBAR"),"\xa0 of the JS object\xa0of this property's\xa0display group"))),Object(o.b)("li",{parentName:"ul"},"A property has no parameters - of a JS state object.")))),Object(o.b)("p",null,"The task of the library is to automatically keep this state described above up to date, both during form creation and during its subsequent modification (this behavior is often called reactivity)."),Object(o.b)("p",null,"The library exports the following functions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"create - creates a new form. Parameters:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"setState - a state change request function. This function is supposed to take a single parameter \u2013 a state change function (which, in turn, has just one parameter, the previous state, and outputs the next state as the result) and as a result of execution add this function to the state change queue (or, for example, apply it right away depending on the implementation of the view logic). This state management logic is fully identical to the state management logic in React and, as a rule, if used inside a React component, the setState parameter is passed as updateState => this.setState(updateState)."),Object(o.b)("li",{parentName:"ol"},"baseUrl - the URL of the lsFusion web server - a string, for example\xa0'",Object(o.b)("a",{parentName:"li",href:"https://demo.lsfusion.org/hockeystats'"},"https://demo.lsfusion.org/hockeystats'"),"."),Object(o.b)("li",{parentName:"ol"},'formData - an object describing the form. Must contain either a name field with the name of the form (for example {name: "MainForm"}) or a script field with the form code (for example, script:"OBJECTS i = Invoice PROPERTIES (i) date, stock")'))),Object(o.b)("li",{parentName:"ul"},"change - changes the form data. Parameters:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"setState - a state change request function."),Object(o.b)("li",{parentName:"ol"},"changes - a JS object containing what exactly needs to be changed. The structure of a JS change object is the same as that of the JS state object, except that a JS object of an object group does not have/is not supposed to have a ",Object(o.b)("strong",{parentName:"li"},"list")," field \u2013 that is, all changes are supposed to be made for current object collection. However, if necessary, the value can be set to a single-element array, which will mean that there is no need to change the current object, but property values should be changed for the specified, not the current object. For example, change(setState, {game:{value:","[","30","]",", hostGoals:40, guestGoals:30}}) will change the number of goals to 40 and 30, but not for the current game, but for one with an object id 30. You can also specify actions in a JS change object (there are no actions in JS state objects). The value of the corresponding field in this case can be arbitrary. For example, change(setState, {game: {doSmthWithGame : true}})"),Object(o.b)("li",{parentName:"ol"},"currentState - a JS object of the current state. Optional parameter. In order to ensure the best UX in the asynchronous mode, it is advised that the user change values only for the objects that he sees during the change and not when the change is processed (the state can change at this moment and so can current objects). Therefore, when calling this function, it is recommended to pass the state that was used to render the view in which the user initiated this change as the currentState parameter."))),Object(o.b)("li",{parentName:"ul"},"close - closes the form. Parameters:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"setState - a state change request function."))),Object(o.b)("li",{parentName:"ul"},"formCreated - checks whether the form has been initialized (and, accordingly, whether the state has been filled). Returns a boolean value. Parameters:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"state - a JS state object"))),Object(o.b)("li",{parentName:"ul"},"numberOfPendingRequests - show how many change requests are currently queued. Returns a long type value. Parameters:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"state - a JS state object")))),Object(o.b)("p",null,"As the names of object groups and properties, not names on the form are used, but ",Object(o.b)("a",{parentName:"p",href:"/platform/Structured_view#extid"},"export/import")," names (which, however, match the names on forms if not explicitly defined). While working with a form via Form API, actions created using operators for ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#objectoperators"},"object operations")," ",Object(o.b)("strong",{parentName:"p"},"NEW")," and ",Object(o.b)("strong",{parentName:"p"},"DELETE")," automatically get export/import names ",Object(o.b)("strong",{parentName:"p"},"NEW")," and ",Object(o.b)("strong",{parentName:"p"},"DELETE"),", respectively (that is you can call change(setState, {game : {NEW:true}} for adding an object, for example) ). Also, when Form API is used, it automatically adds a property called logMessage to the form to which all dialog messages are written (including those generated when ",Object(o.b)("a",{parentName:"p",href:"/platform/Constraints"},"constraints")," were violated)."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Authentication, stateful and form API are only supported when executing http requests on the web server. When an application server (or specifically, a built-in web server) executes an HTTP request, authentication headers, as well as parameters with the session ID, are ignored (the user is considered anonymous). Form API is completely unsupported by the built-in web server."))),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Rest API (Python)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'import json\nimport requests\nfrom requests_toolbelt.multipart import decoder\n\nlsfCode = ("run(INTEGER no, DATE date, FILE detail) {\\n"\n           "    NEW o = FOrder {\\n"\n           "        no(o) <- no;\\n"\n           "        date(o) <- date;\\n"\n           "        LOCAL detailId = INTEGER (INTEGER);\\n"\n           "        LOCAL detailQuantity = INTEGER (INTEGER);\\n"\n           "        IMPORT JSON FROM detail TO detailId, detailQuantity;\\n"\n           "        FOR imported(INTEGER i) DO {\\n"\n           "            NEW od = FOrderDetail {\\n"\n           "                id(od) <- detailId(i);\\n"\n           "                quantity(od) <- detailQuantity(i);\\n"\n           "                price(od) <- 5;\\n"\n           "                order(od) <- o;\\n"\n           "            }\\n"\n           "        }\\n"\n           "        APPLY;\\n"\n           "        EXPORT JSON FROM price = price(FOrderDetail od), id = id(od) WHERE order(od) == o;\\n"\n           "        EXPORT FROM orderPrice(o), exportFile();\\n"\n           "    }\\n"\n           "}")\n\norder_no = 354\norder_date = \'10.10.2017\'\norder_details = [dict(id=1, quantity=10),\n                 dict(id=2, quantity=15),\n                 dict(id=5, quantity=4),\n                 dict(id=10, quantity=18),\n                 dict(id=11, quantity=1),\n                 dict(id=12, quantity=3)]\n\norder_json = json.dumps(order_details)\n\nurl = \'http://localhost:7651/eval\'\npayload = {\'script\': lsfCode, \'no\': str(order_no), \'date\': order_date,\n           \'detail\': (\'order.json\', order_json, \'text/json\')}\n\nresponse = requests.post(url, files=payload)\nmultipart_data = decoder.MultipartDecoder.from_response(response)\n\nsum_part, json_part = multipart_data.parts\nsum = int(sum_part.text)\ndata = json.loads(json_part.text)\n\n##############################################################\n\nprint(sum)\nfor item in data:\n    print(\'{0:3}: price {1}\'.format(int(item[\'id\']), int(item[\'price\'])))\n\n##############################################################\n# 205\n#   4: price 5\n#  18: price 5\n#   3: price 5\n#   1: price 5\n#  10: price 5\n#  15: price 5\n')))}p.isMDXComponent=!0},749:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(s,".").concat(m)]||h[m]||b[m]||o;return a?r.a.createElement(d,i(i({ref:t},l),{},{components:a})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);