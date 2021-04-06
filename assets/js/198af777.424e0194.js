(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(746)),p={title:"DIALOG operator"},i={unversionedId:"DIALOG_operator",id:"version-v4/DIALOG_operator",isDocsHomePage:!1,title:"DIALOG operator",description:"The DIALOG\xa0operator creates an\xa0action that\xa0opens a form\xa0in an interactive view in dialog mode.",source:"@site/versioned_docs/version-v4/DIALOG_operator.md",slug:"/DIALOG_operator",permalink:"/platform/DIALOG_operator",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/DIALOG_operator.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"DELETE operator",permalink:"/platform/DELETE_operator"},next:{title:"EMAIL operator",permalink:"/platform/EMAIL_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Input options</em>",id:"input-options",children:[]},{value:"<em>Additional options</em>",id:"additional-options",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DIALOG"),"\xa0operator creates an\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/In_an_interactive_view_SHOW_DIALOG_"},"opens a form"),"\xa0in an interactive view in ",Object(o.b)("a",{parentName:"p",href:"/platform/In_an_interactive_view_SHOW_DIALOG_#dialog"},"dialog")," mode.\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"DIALOG name\n[OBJECTS objName1 [= expr1] [NULL] [inputOptions1], ..., objNameN [= exprN] [NULL] [inputOptionsN]]\n[formActionOptions]\n[DO actionOperator [ELSE elseActionOperator]]\n")),Object(o.b)("p",null,"When opening the list/edit form, the syntax is slightly different:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"DIALOG classFormType className\n[= expr] [NULL] [inputOptions]\n[formActionOptions]\n[DO actionOperator [ELSE elseActionOperator]]\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"inputOptions")," \u2013 object options that determine whether the last current values of this object should be returned after the form is closed and what to do next with these values (defined with one of the following syntaxes):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"INPUT [alias] [NULL]\nCHANGE [= changeExpr] [NOCONSTRAINTFILTER] [alias] [NULL]\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formActionOptions")," - additional\xa0options for this action. They can be added one by one in any order:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"windowType\nMANAGESESSION | NOMANAGESESSION\nCANCEL | NOCANCEL\nNEWSESSION | NESTEDSESSION\nREADONLY\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DIALOG"),"\xa0operator creates an action that opens the specified form. When opening a form in the\xa0",Object(o.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block you can ",Object(o.b)("a",{parentName:"p",href:"/platform/Open_form#params"},"specify"),"\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Value_input#initial"},"initial values")," for the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Form_structure"},"form objects")," and also return the last current values to the specified parameters and execute the ",Object(o.b)("strong",{parentName:"p"},"DO")," action which will process the received values in case the input has not been cancelled."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Form name.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"classFormType")),Object(o.b)("p",null,"Keyword. Determines which form to open:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LIST")," \u2013 list form"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EDIT")," \u2013 edit form")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")),Object(o.b)("p",null,"The name of the custom class for which a list/edit form should be opened.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objName1 ... objNameN")),Object(o.b)("p",null,"Names of form objects for which initial values are specified. ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple IDs"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr1 ... exprN")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"Expressions")," which values determine the initial values for form objects."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NULL")),Object(o.b)("p",null,"Specifies that ",Object(o.b)("strong",{parentName:"p"},"NULL")," values can be passed. This option is automatically enabled if the object returns a value."),Object(o.b)("h3",{id:"input-options"},Object(o.b)("em",{parentName:"h3"},"Input options")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"INPUT")),Object(o.b)("p",null,"Keyword. If used, then the last current value of the object of the opened form will be written to the specified local parameter and, if necessary, to the specified property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"alias")),Object(o.b)("p",null,"The name of the local parameter to which the input result is written.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),". If the name is not specified, then the name of the form object will be used as the parameter name."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGE")),Object(o.b)("p",null,"A keyword indicating that in addition to the value input the result needs to be written to the specified property. Also by default, this option sets an additional filter for the object values on the opened form so that\xa0when selecting an object and changing the specified property to the value of this object, none of the existing ",Object(o.b)("a",{parentName:"p",href:"/platform/Constraints"},"constraints")," are violated.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NOCONSTRAINTFILTER")),Object(o.b)("p",null,"If used, no additional filter for constraint compliance is set."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"changeExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," that determines the property to which the input result is written.\xa0By default, the property specified as the initial object value is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NULL")),Object(o.b)("p",null,"A keyword that determines whether the user can select ",Object(o.b)("strong",{parentName:"p"},"NULL"),' as the return value (using the special "Drop" action \u2013\xa0',Object(o.b)("strong",{parentName:"p"},"System.formDrop"),"). If not used, will be enabled if and only if the ",Object(o.b)("strong",{parentName:"p"},"CHANGE")," option is specified."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was completed successfully."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"elseActionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was cancelled. Parameters added to the input block (INPUT) cannot be used as parameters."),Object(o.b)("h3",{id:"additional-options"},Object(o.b)("em",{parentName:"h3"},"Additional options")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"windowType")),Object(o.b)("p",null,"Method of\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/In_an_interactive_view_SHOW_DIALOG_#location"},"the form layout"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DOCKED"),"\xa0- as a tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FLOAT"),"\xa0-\xa0as a window. Used by default.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"MANAGESESSION")," | ",Object(o.b)("em",{parentName:"p"},"NOMANAGESESSION")),Object(o.b)("p",null,"Keyword. Determines whether or not the\xa0created form is considered to be the ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#session-broken"},"session owner"),"\xa0(if so, the corresponding buttons for managing the session will be shown on the form in interactive mode). By default, the platform tries to determine which mode to use ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#sysactions"},"automatically"),"\xa0depending on the context."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CANCEL")," | ",Object(o.b)("em",{parentName:"p"},"NOCANCEL")),Object(o.b)("p",null,'Keyword. Determines whether or not to show the "Cancel" system action (',Object(o.b)("strong",{parentName:"p"},"System.formCancel"),")**\xa0**on the form.\xa0By default, the platform tries to determine which mode to use ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#sysactions"},"automatically"),"\xa0depending on context."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NEWSESSION | NESTEDSESSION")),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Keyword. Determines that the form will be opened in a new (nested) session. By default, the form is opened in the current session."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"READONLY")),Object(o.b)("p",null,"Keyword. If specified, the form is opened in ",Object(o.b)("a",{parentName:"p",href:"/platform/In_an_interactive_view_SHOW_DIALOG_#extra"},"read-only")," mode."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM selectSku\n    OBJECTS s = Sku\n    PROPERTIES(s) id\n;\n\ntestDialog  {\n    DIALOG selectSku OBJECTS s INPUT DO {\n        MESSAGE 'Selected sku : ' + id(s);\n    }\n}\n\nsku = DATA Sku (OrderDetail);\nidSku (OrderDetail d) = id(sku(d));\n\nchangeSku (OrderDetail d)  {\n    DIALOG selectSku OBJECTS s = sku(d) CHANGE;\n\n    //equivalent to the first option\n    DIALOG selectSku OBJECTS s = sku(d) INPUT NULL CONSTRAINTFILTER DO {\n        sku(d) <- s;\n    }\n}\n")))}b.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(n),O=r,u=s["".concat(p,".").concat(O)]||s[O]||m[O]||o;return n?a.a.createElement(u,i(i({ref:t},l),{},{components:n})):a.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);