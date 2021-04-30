(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{452:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(745)),o={title:"Action options"},p={unversionedId:"Action_options",id:"version-v4/Action_options",isDocsHomePage:!1,title:"Action options",description:"When declaring an action in the ACTION instruction a certain set of action options may be specified at the end of the declaration.",source:"@site/versioned_docs/version-v4/Action_options.md",slug:"/Action_options",permalink:"/platform/Action_options",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Action_options.md",version:"v4",lastUpdatedAt:1619530455,formattedLastUpdatedAt:"4/27/2021",sidebar:"version-v4/learn",previous:{title:"WRITE operator",permalink:"/platform/WRITE_operator"},next:{title:"GROUP instruction",permalink:"/platform/GROUP_instruction"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description and parameters",id:"description-and-parameters",children:[{value:"Interactive view block",id:"interactive-view-block",children:[]},{value:"<code>DESIGN</code> instruction default values block",id:"design-instruction-default-values-block",children:[]}]}],l={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When declaring an ",Object(i.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," in the ",Object(i.b)("a",{parentName:"p",href:"/platform/ACTION_instruction"},Object(i.b)("inlineCode",{parentName:"a"},"ACTION")," instruction")," a certain set of ",Object(i.b)("em",{parentName:"p"},"action options")," may be specified at the end of the declaration. "),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"propertyOption1 ... propertyOptionN\n")),Object(i.b)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"IN groupName\nviewType\nON eventType { actionOperator }\nCHANGEKEY key [SHOW | HIDE]\nASON eventType [ACTION] propertyId\nIMAGE path\nCONFIRM\n")),Object(i.b)("h2",{id:"description-and-parameters"},"Description and parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"IN groupName")),Object(i.b)("p",{parentName:"li"},"  Specifying the ",Object(i.b)("a",{parentName:"p",href:"/platform/Groups_of_properties_and_actions"},"group of properties and actions")," to which the action belongs. If the option is not specified, then the action will belong by default to the ",Object(i.b)("inlineCode",{parentName:"p"},"System.private")," group."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"groupName")),Object(i.b)("p",{parentName:"li"},"  A group name. ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Composite ID"),"."))))),Object(i.b)("h3",{id:"interactive-view-block"},"Interactive view block"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"viewType")),Object(i.b)("p",{parentName:"li"},"  Specifying the type of the ",Object(i.b)("a",{parentName:"p",href:"/platform/Interactive_view#property"},"action view")," when added to the form."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GRID")," - table column"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TOOLBAR")," - toolbar"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PANEL")," - panel")),Object(i.b)("p",{parentName:"li"},"It is similar to specifying the viewType option in the ",Object(i.b)("a",{parentName:"p",href:"/platform/Properties_and_actions_block"},"property block")," of the ",Object(i.b)("a",{parentName:"p",href:"/platform/FORM_instruction"},Object(i.b)("inlineCode",{parentName:"a"},"FORM"),"instruction "),". Thus, if this option is not specified either in the action options or in the property block directly on the form, the ",Object(i.b)("a",{parentName:"p",href:"/platform/Interactive_view#defaultPropertyView-broken"},"default view")," of the action display group on the form is used.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ON eventType { actionOperator }")),Object(i.b)("p",{parentName:"li"},"  Specifying an action that will be the default handler of a certain ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_events"},"event")," for all the interactive views of this action. Can be overridden in the property block of the ",Object(i.b)("inlineCode",{parentName:"p"},"FORM")," instruction."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"eventType")),Object(i.b)("p",{parentName:"li"},"  A ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_events"},"form event")," type. It is specified by one of the keywords:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CHANGE")," - occurs when the user tries to change the value of the specified property"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CHANGEWYS")," - occurs when the user tries to change the value of the specified property using a special input mechanism. You can read more in the description of the ",Object(i.b)("a",{parentName:"li",href:"/platform/Form_events"},"form events")," "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GROUPCHANGE")," - occurs when the user tries to change the property value for all objects in the table (group editing)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EDIT")," - occurs when the user tries to edit the object that is the value of the specified property"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CONTEXTMENU [caption]")," - the user has selected the specified item in the property context menu on the form. If necessary, you can also define the caption of this menu item (",Object(i.b)("a",{parentName:"li",href:"/platform/Literals#strliteral-broken"},"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"actionOperator")),Object(i.b)("p",{parentName:"li"},"  A ",Object(i.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ASON eventType [ACTION] propertyId")),Object(i.b)("p",{parentName:"li"},"  Specifies that this action will be the default handler of a certain ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_events"},"event")," for all the interactive views of the specified property or action. Can be overridden in the ",Object(i.b)("a",{parentName:"p",href:"/platform/Properties_and_actions_block"},"property and action block")," of the ",Object(i.b)("inlineCode",{parentName:"p"},"FORM")," instruction. "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"eventType")),Object(i.b)("p",{parentName:"li"},"  Similar to the ",Object(i.b)("inlineCode",{parentName:"p"},"ON")," block.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"propertyId")),Object(i.b)("p",{parentName:"li"},"  An ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"ID of the property or action")," for which the created action will be executed when the specified form event occurs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ACTION")),Object(i.b)("p",{parentName:"li"},"  Keyword. If specified, it is considered that the action is set in ",Object(i.b)("inlineCode",{parentName:"p"},"propertyId"),". If not specified, it is initially considered that a property is defined in ",Object(i.b)("inlineCode",{parentName:"p"},"propertyId"),"; otherwise, if no property is found, it is considered that an action is specified in ",Object(i.b)("inlineCode",{parentName:"p"},"propertyId"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"IMAGE path")),Object(i.b)("p",{parentName:"li"},"  Specifies the file with the image to be displayed as an action icon."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"path")),Object(i.b)("p",{parentName:"li"},"  The relative path to the file. ",Object(i.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". The path is specified relative to the ",Object(i.b)("inlineCode",{parentName:"p"},"images")," folder."))))),Object(i.b)("h3",{id:"design-instruction-default-values-block"},Object(i.b)("inlineCode",{parentName:"h3"},"DESIGN")," instruction default values block"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"CHANGEKEY key [SHOW | HIDE]")),Object(i.b)("p",{parentName:"li"},"  Specifies a ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_events#keyboard-broken"},"keyboard shortcut")," which triggers this action. Sets the value for the ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_design#defaultDesign"},"default design")," and can be overridden in the ",Object(i.b)("a",{parentName:"p",href:"/platform/DESIGN_instruction"},Object(i.b)("inlineCode",{parentName:"a"},"DESIGN")," instruction"),"."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"key")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal")," that defines a keyboard shortcut. The definition method is identical to that for a parameter in the Java class method ",Object(i.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"},"Keystroke.getKeystroke(String)"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"SHOW")),Object(i.b)("p",{parentName:"li"},"  A keyword. If specified, the keyboard shortcut will be displayed in the action caption. Used by default.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"HIDE")),Object(i.b)("p",{parentName:"li"},"  A keyword. If specified, the keyboard shortcut will not be displayed in the action caption. ")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"CONFIRM")),Object(i.b)("p",{parentName:"li"},"  Keyword. If specified, the user will be asked to confirm the action when it is executed. Sets the value for the default design and can be overridden in the ",Object(i.b)("inlineCode",{parentName:"p"},"DESIGN")," instruction."))))}b.isMDXComponent=!0},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,O=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?r.a.createElement(O,p(p({ref:t},l),{},{components:n})):r.a.createElement(O,p({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);