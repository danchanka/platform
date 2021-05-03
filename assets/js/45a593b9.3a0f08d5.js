(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[57391],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(n),u=a,d=f["".concat(l,".").concat(u)]||f[u]||m[u]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46078:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Action options"},p={unversionedId:"Action_options",id:"Action_options",isDocsHomePage:!1,title:"Action options",description:"When declaring an action\xa0in the\xa0ACTION\xa0instruction a certain set of\xa0action options may be specified at the end of the declaration.",source:"@site/docs/Action_options.md",sourceDirName:".",slug:"/Action_options",permalink:"/platform/next/Action_options",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Action_options.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Action options"},sidebar:"learn",previous:{title:"WRITE operator",permalink:"/platform/next/WRITE_operator"},next:{title:"GROUP instruction",permalink:"/platform/next/GROUP_instruction"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description and parameters",id:"description-and-parameters",children:[]},{value:"<em>Interactive view block</em>",id:"interactive-view-block",children:[]},{value:"<em>DESIGN instruction default values block</em>",id:"design-instruction-default-values-block",children:[]}],s={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When declaring an ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Actions"},"action"),"\xa0in the\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/ACTION_instruction"},(0,o.kt)("strong",{parentName:"a"},"ACTION"),"\xa0instruction")," a certain set of\xa0",(0,o.kt)("em",{parentName:"p"},"action options")," may be specified at the end of the declaration.\xa0"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"propertyOption1 ... propertyOptionN\n")),(0,o.kt)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"IN groupName\nviewType\nON eventType { actionOperator }\nCHANGEKEY key [SHOW | HIDE]\nASON eventType [ACTION] propertyId\nIMAGE path\nCONFIRM\n")),(0,o.kt)("h3",{id:"description-and-parameters"},"Description and parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"IN\xa0groupName")),(0,o.kt)("p",null,"Specifying the\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Groups_of_properties_and_actions"},"group of properties and actions")," to which the action belongs. If the option is not specified, then the action will belong by default to the\xa0",(0,o.kt)("strong",{parentName:"p"},"System.private")," group."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"groupName"),"\xa0- a group name.\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#cid-broken"},"Composite ID"),"."),(0,o.kt)("h3",{id:"interactive-view-block"},(0,o.kt)("em",{parentName:"h3"},"Interactive view block")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"viewType")),(0,o.kt)("p",null,"Specifying the type of the ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Interactive_view#property"},"action view"),"\xa0when added to the form."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GRID"),"\xa0- table column"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TOOLBAR"),"\xa0- toolbar"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PANEL"),"\xa0- panel")),(0,o.kt)("p",null,"It is similar to specifying the viewType option in the\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Properties_and_actions_block"},"property block")," of the\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/FORM_instruction"},(0,o.kt)("strong",{parentName:"a"},"FORM"),"instruction\xa0"),". Thus, if this option is not specified either in the action options or in the property block directly on the form, the ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Interactive_view#defaultPropertyView-broken"},"default view"),"\xa0of the action display group on the form is used."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ON eventType { actionOperator\xa0}")),(0,o.kt)("p",null,"Specifying an action that will be the default handler of a certain\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_events"},"event"),"\xa0for all the interactive views of this action. Can be overridden in the property block of the ",(0,o.kt)("strong",{parentName:"p"},"FORM"),"\xa0instruction."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"eventType")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_events"},"form event"),"\xa0type. It is specified by one of the keywords:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CHANGE"),"\xa0-\xa0occurs when the user tries to change the value of the specified property"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CHANGEWYS"),"\xa0-\xa0occurs when the user tries to change the value of the specified property using a special input mechanism. You can read more in the description of the\xa0",(0,o.kt)("a",{parentName:"li",href:"/platform/next/Form_events"},"form events"),"\xa0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GROUPCHANGE"),"\xa0-\xa0occurs when the user tries to change the property value for all objects in the table (group editing)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EDIT"),"\xa0-\xa0occurs when the user tries to edit the object that is the value of the specified property"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CONTEXTMENU\xa0"),"[","caption","]","\xa0- the user has selected the specified item in the property context menu on the form.\xa0If necessary, you can also define the caption of this menu item (",(0,o.kt)("a",{parentName:"li",href:"/platform/next/Literals#strliteral-broken"},"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption.")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"actionOperator")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ASON eventType\xa0","[","ACTION","]"," propertyId")),(0,o.kt)("p",null,"Specifies that this action will be the default handler of a\xa0certain\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_events"},"event"),"\xa0for all the interactive views of the specified property or action.\xa0Can be overridden in the\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Properties_and_actions_block"},"property and action block"),"\xa0of the\xa0",(0,o.kt)("strong",{parentName:"p"},"FORM")," instruction.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"eventType")),(0,o.kt)("p",null,"Similar to the ON block."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"propertyId")),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"ID of the property or action")," for which the created action will be executed when the specified form event occurs."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ACTION")),(0,o.kt)("p",null,"Keyword. If specified, it is considered that the action is set in propertyId. If not specified, it is initially considered that a property is defined in\xa0propertyId; otherwise, if no property is found, it is considered that an action is specified in propertyId."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"IMAGE\xa0path")),(0,o.kt)("p",null,"Specifies the file with the image to be displayed as an action icon."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"path"),"\xa0is the relative path to the file.\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Literals#strliteral-broken"},"String literal"),". The path is specified relative to the\xa0",(0,o.kt)("strong",{parentName:"p"},"images")," folder."),(0,o.kt)("h3",{id:"design-instruction-default-values-block"},(0,o.kt)("em",{parentName:"h3"},"DESIGN instruction default values block")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"CHANGEKEY key\xa0","[","SHOW | HIDE","]")),(0,o.kt)("p",null,"Specifies a\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_events#keyboard-broken"},"keyboard shortcut")," which triggers this action. Sets the value for the ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_design#defaultDesign"},"default\xa0design")," and can be overridden in the\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/DESIGN_instruction"},(0,o.kt)("strong",{parentName:"a"},"DESIGN"),"\xa0instruction"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"key"),"\xa0-*\xa0",(0,o.kt)("em",{parentName:"p"}," a ",(0,o.kt)("a",{parentName:"em",href:"/platform/next/Literals#strliteral-broken"},"string literal")," that defines a keyboard shortcut"),".\xa0*The definition method is identical to that for a parameter in the Java class method\xa0",(0,o.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"},"Keystroke.getKeystroke(String)"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"SHOW"),"\xa0- a keyword. If specified, the keyboard shortcut will be displayed in the action caption. Used by default."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HIDE"),"\xa0- a\xa0keyword. If specified, the\xa0keyboard shortcut will not be displayed in the action caption.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"CONFIRM")),(0,o.kt)("p",null,"Keyword. If specified, the user will be asked to confirm the\xa0action when it is executed.\xa0Sets the value for the\xa0default design and can be overridden in the\xa0",(0,o.kt)("strong",{parentName:"p"},"DESIGN")," instruction."))}c.isMDXComponent=!0}}]);