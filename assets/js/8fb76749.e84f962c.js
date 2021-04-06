(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{458:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(747)),i={title:"Action options"},p={unversionedId:"Action_options",id:"version-v4/Action_options",isDocsHomePage:!1,title:"Action options",description:"When declaring an action\xa0in the\xa0ACTION\xa0instruction a certain set of\xa0action options may be specified at the end of the declaration.",source:"@site/versioned_docs/version-v4/Action_options.md",slug:"/Action_options",permalink:"/platform/Action_options",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Action_options.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"WRITE operator",permalink:"/platform/WRITE_operator"},next:{title:"GROUP instruction",permalink:"/platform/GROUP_instruction"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description and parameters",id:"description-and-parameters",children:[]},{value:"<em>Interactive view block</em>",id:"interactive-view-block",children:[]},{value:"<em>DESIGN instruction default values block</em>",id:"design-instruction-default-values-block",children:[]}],l={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When declaring an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action"),"\xa0in the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/ACTION_instruction"},Object(o.b)("strong",{parentName:"a"},"ACTION"),"\xa0instruction")," a certain set of\xa0",Object(o.b)("em",{parentName:"p"},"action options")," may be specified at the end of the declaration.\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"propertyOption1 ... propertyOptionN\n")),Object(o.b)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"IN groupName\nviewType\nON eventType { actionOperator }\nEDITKEY key [SHOW | HIDE]\nASON eventType [ACTION] propertyId\nIMAGE path\nCONFIRM\n")),Object(o.b)("h3",{id:"description-and-parameters"},"Description and parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"IN\xa0groupName")),Object(o.b)("p",null,"Specifying the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Groups_of_properties_and_actions"},"group of properties and actions")," to which the action belongs. If the option is not specified, then the action will belong by default to the\xa0",Object(o.b)("strong",{parentName:"p"},"System.private")," group."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName"),"\xa0- a group name.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("h3",{id:"interactive-view-block"},Object(o.b)("em",{parentName:"h3"},"Interactive view block")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"viewType")),Object(o.b)("p",null,"Specifying the type of the ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#property"},"action view"),"\xa0when added to the form."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GRID"),"\xa0- table column"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TOOLBAR"),"\xa0- toolbar"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PANEL"),"\xa0- panel")),Object(o.b)("p",null,"It is similar to specifying the viewType option in the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Properties_and_actions_block"},"property block")," of the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/FORM_instruction"},Object(o.b)("strong",{parentName:"a"},"FORM"),"instruction\xa0"),". Thus, if this option is not specified either in the action options or in the property block directly on the form, the ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#defaultPropertyView-broken"},"default view"),"\xa0of the action display group on the form is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ON eventType { actionOperator\xa0}")),Object(o.b)("p",null,"Specifying an action that will be the default handler of a certain\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Form_events"},"event"),"\xa0for all the interactive views of this action. Can be overridden in the property block of the ",Object(o.b)("strong",{parentName:"p"},"FORM"),"\xa0instruction."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventType")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/Form_events"},"form event"),"\xa0type. It is specified by one of the keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGE"),"\xa0-\xa0occurs when the user tries to change the value of the specified property"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGEWYS"),"\xa0-\xa0occurs when the user tries to change the value of the specified property using a special input mechanism. You can read more in the description of the\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Form_events"},"form events"),"\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GROUPCHANGE"),"\xa0-\xa0occurs when the user tries to change the property value for all objects in the table (group editing)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EDIT"),"\xa0-\xa0occurs when the user tries to edit the object that is the value of the specified property"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CONTEXTMENU\xa0"),"[","caption","]","\xa0- the user has selected the specified item in the property context menu on the form.\xa0If necessary, you can also define the caption of this menu item (",Object(o.b)("a",{parentName:"li",href:"/platform/Literals#strliteral-broken"},"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption.")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ASON eventType\xa0","[","ACTION","]"," propertyId")),Object(o.b)("p",null,"Specifies that this action will be the default handler of a\xa0certain\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Form_events"},"event"),"\xa0for all the interactive views of the specified property or action.\xa0Can be overridden in the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Properties_and_actions_block"},"property and action block"),"\xa0of the\xa0",Object(o.b)("strong",{parentName:"p"},"FORM")," instruction.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventType")),Object(o.b)("p",null,"Similar to the ON block."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"ID of the property or action")," for which the created action will be executed when the specified form event occurs."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ACTION")),Object(o.b)("p",null,"Keyword. If specified, it is considered that the action is set in propertyId. If not specified, it is initially considered that a property is defined in\xa0propertyId; otherwise, if no property is found, it is considered that an action is specified in propertyId."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"IMAGE\xa0path")),Object(o.b)("p",null,"Specifies the file with the image to be displayed as an action icon."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"path"),"\xa0is the relative path to the file.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". The path is specified relative to the\xa0",Object(o.b)("strong",{parentName:"p"},"images")," folder."),Object(o.b)("h3",{id:"design-instruction-default-values-block"},Object(o.b)("em",{parentName:"h3"},"DESIGN instruction default values block")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"EDITKEY key\xa0","[","SHOW | HIDE","]")),Object(o.b)("p",null,"Specifies a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Form_events#keyboard-broken"},"keyboard shortcut")," which triggers this action. Sets the value for the ",Object(o.b)("a",{parentName:"p",href:"/platform/Form_design#defaultDesign"},"default\xa0design")," and can be overridden in the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/DESIGN_instruction"},Object(o.b)("strong",{parentName:"a"},"DESIGN"),"\xa0instruction"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"key"),"\xa0-*\xa0",Object(o.b)("em",{parentName:"p"}," a ",Object(o.b)("a",{parentName:"em",href:"/platform/Literals#strliteral-broken"},"string literal")," that defines a keyboard shortcut"),".\xa0*The definition method is identical to that for a parameter in the Java class method\xa0",Object(o.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"},"Keystroke.getKeystroke(String)"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SHOW"),"\xa0- a keyword. If specified, the keyboard shortcut will be displayed in the action caption. Used by default."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HIDE"),"\xa0- a\xa0keyword. If specified, the\xa0keyboard shortcut will not be displayed in the action caption.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CONFIRM")),Object(o.b)("p",null,"Keyword. If specified, the user will be asked to confirm the\xa0action when it is executed.\xa0Sets the value for the\xa0default design and can be overridden in the\xa0",Object(o.b)("strong",{parentName:"p"},"DESIGN")," instruction."))}b.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(n),f=r,u=s["".concat(i,".").concat(f)]||s[f]||m[f]||o;return n?a.a.createElement(u,p(p({ref:t},l),{},{components:n})):a.a.createElement(u,p({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);