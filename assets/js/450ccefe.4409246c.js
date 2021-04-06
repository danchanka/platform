(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{259:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(7),p=(r(0),r(746)),o={title:"Property options"},i={unversionedId:"Property_options",id:"version-v4/Property_options",isDocsHomePage:!1,title:"Property options",description:"When a property is declared in the = instruction a set of property options can be specified at the end of the declaration",source:"@site/versioned_docs/version-v4/Property_options.md",slug:"/Property_options",permalink:"/platform/Property_options",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Property_options.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Comparison operators",permalink:"/platform/Comparison_operators"},next:{title:"ACTION instruction",permalink:"/platform/ACTION_instruction"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description and parameters",id:"description-and-parameters",children:[]},{value:"<em>Interactive view block</em>",id:"interactive-view-block",children:[]},{value:"<em>DESIGN instruction default values block</em>",id:"design-instruction-default-values-block",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:l};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"When a ",Object(p.b)("a",{parentName:"p",href:"/platform/Properties"},"property")," is declared in the ",Object(p.b)("a",{parentName:"p",href:"/platform/Instruction_="},"= instruction")," a set of ",Object(p.b)("em",{parentName:"p"},"property options")," can be specified at the end of the declaration\xa0"),Object(p.b)("h3",{id:"syntax"},"Syntax"),Object(p.b)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"propertyOption1 ... propertyOptionN\n")),Object(p.b)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"IN groupName\nviewType\nON eventType { actionOperator }\nCHANGEKEY key [SHOW | HIDE]\nMATERIALIZED\nTABLE tableName\nINDEXED\nNONULL [DELETE] eventClause\nAUTOSET\nCHARWIDTH width [FLEX | NOFLEX]\nREGEXP rexpr [message] \nECHO\nDEFAULTCOMPARE [compare]\n")),Object(p.b)("h3",{id:"description-and-parameters"},"Description and parameters"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"IN groupName")),Object(p.b)("p",null,"Specifying the ",Object(p.b)("a",{parentName:"p",href:"/platform/Groups_of_properties_and_actions"},"group of properties and actions")," to which the property belongs. If the option is not specified, then the property will belong by default to the group ",Object(p.b)("strong",{parentName:"p"},"System.private"),"."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"groupName -")," group name. ",Object(p.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Compound ID"),"."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"MATERIALIZED")),Object(p.b)("p",null,"Keyword marking the property as ",Object(p.b)("a",{parentName:"p",href:"/platform/Materializations"},"materialized"),". These properties will be stored in the database's ",Object(p.b)("a",{parentName:"p",href:"/platform/Tables"},"table")," fields."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"TABLE tableName")),Object(p.b)("p",null,"Specifies the ",Object(p.b)("a",{parentName:"p",href:"/platform/Tables"},"table"),' where the property will be stored. The number of table keys must be equal to the number of property arguments, and the argument classes must match the table key classes. If no table is specified, the property will automatically be placed in the "nearest" existing table in the system.'),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"tableName")," - table name. Composite ID.\xa0"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"INDEXED")),Object(p.b)("p",null,"Keyword. If specified, an ",Object(p.b)("a",{parentName:"p",href:"/platform/Indexes"},"index")," by this property is created. Similar to using the ",Object(p.b)("a",{parentName:"p",href:"/platform/INDEX_instruction"},Object(p.b)("strong",{parentName:"a"},"INDEX")," instruction"),".\xa0**\xa0**"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"NONULL\xa0","[","DELETE","]"," eventClause")),Object(p.b)("p",null,"Adds a ",Object(p.b)("a",{parentName:"p",href:"/platform/Simple_constraints"},"definiteness")," constraint. If this constraint is violated as a result of some changes for some objects, either the corresponding message will be displayed, or, if ",Object(p.b)("strong",{parentName:"p"},"DELETE")," is specified, such objects will be deleted."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"DELETE")),Object(p.b)("p",null,"Keyword that, if specified, then when the property becomes ",Object(p.b)("strong",{parentName:"p"},"NULL"),", objects that are property arguments will be deleted."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"eventClause")),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/platform/Event_description_block"},"Event type description block"),". Describes the event by which the property will be checked for ",Object(p.b)("strong",{parentName:"p"},"NULL"),"."),Object(p.b)("h3",{id:"interactive-view-block"},Object(p.b)("em",{parentName:"h3"},"Interactive view block")),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"viewType")),Object(p.b)("p",null,"Specifying the type of ",Object(p.b)("a",{parentName:"p",href:"/platform/Interactive_view#property"},"property view")," when added to the form."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"GRID"),"\xa0- table column"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"TOOLBAR"),"\xa0- toolbar"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"PANEL"),"\xa0- panel")),Object(p.b)("p",null,"It is similar to specifying the viewType option in the ",Object(p.b)("a",{parentName:"p",href:"/platform/Properties_and_actions_block"},"property block")," of the ",Object(p.b)("a",{parentName:"p",href:"/platform/FORM_instruction"},Object(p.b)("strong",{parentName:"a"},"FORM"),"instruction"),". Thus, if this option is not specified either in the property options or in the property block directly on the form, the ",Object(p.b)("a",{parentName:"p",href:"/platform/Interactive_view#defaultPropertyView-broken"},"default view")," of the property display group on the form is used."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"ON eventType { actionOperator\xa0}")),Object(p.b)("p",null,"Specifying an action that will be the default handler of a certain\xa0",Object(p.b)("a",{parentName:"p",href:"/platform/Form_events"},"form event"),"\xa0for all the interactive views of this property. Can be overridden in the property block of the ",Object(p.b)("strong",{parentName:"p"},"FORM"),"instruction."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"eventType")),Object(p.b)("p",null,"Type of form event. Specified by one of the following options:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"CHANGE")," - occurs when the user tries to change the value of a property."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"CHANGEWYS")," -**\xa0**occurs\xa0when the user tries to change the value of the specified property using a special input mechanism.\xa0"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"GROUPCHANGE")," - occurs when the user tries to change the property value for all objects in the table (group editing). \xa0"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"EDIT")," - occurs when the user tries to edit the object that is the value of the specified property.\xa0"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"CONTEXTMENU\xa0"),"[","caption","]","\xa0- the user has selected the specified item in the property context menu on the form.\xa0If necessary, you can also define the caption of this menu item (",Object(p.b)("a",{parentName:"li",href:"/platform/Literals#strliteral-broken"},"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption.")),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"actionOperator")),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"Context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."),Object(p.b)("h3",{id:"design-instruction-default-values-block"},Object(p.b)("em",{parentName:"h3"},"DESIGN instruction default values block")),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"CHARWIDTH\xa0width\xa0"),"[","FLEX | NOFLEX","]"),Object(p.b)("p",null,"Specifying the ",Object(p.b)("a",{parentName:"p",href:"/platform/Form_design#valueWidth-broken"},"number of characters"),"\xa0of the property value that should be visible to the user.\xa0Sets the value for the default design\xa0; can be overridden in\xa0a ",Object(p.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"width")),Object(p.b)("p",null,"Number of characters.\xa0Integer literal.\xa0"),Object(p.b)("p",null,"*",Object(p.b)("em",{parentName:"p"},"FLEX"),"  "),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"})),Object(p.b)("p",null,"Keyword. If specified, the extension coefficient of the property value is automatically set equal to its base size."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"NOFLEX")),Object(p.b)("p",null,"Keyword. If specified, the extension coefficient of the property value is automatically set equal to zero."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"REGEXP rexpr\xa0","[","message","]")),Object(p.b)("p",null,"Specifying a regular expression to which the property value should correspond after editing. Sets the value for the default design and can be overridden in the ",Object(p.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"rexpr")),Object(p.b)("p",null,"A string literal that describes the regular expression. Rules are similar to the rules ",Object(p.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html"},"accepted in Java")," ."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"message")),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"S"),"tring literal describing the message that will be shown to the user if they enter a value that does not match the regular expression. If not specified, a default message will be displayed."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"ECHO")),Object(p.b)("p",null,"A keyword that causes asterisk (","*",") characters to be displayed instead of a property value.\xa0Used, for example, for passwords. Can be overridden in the ",Object(p.b)("strong",{parentName:"p"},"DESIGN")," instruction.\xa0"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"CHANGEKEY key ","[","SHOW\xa0|\xa0HIDE","]","\xa0")),Object(p.b)("p",null,"Specifies a\xa0",Object(p.b)("a",{parentName:"p",href:"/platform/Form_events#keyboard-broken"},"key combination")," which triggers editing of this property. Sets the value for the default design and can be overridden in the ",Object(p.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"key")),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal")," describing the key combination ",Object(p.b)("em",{parentName:"p"},".\xa0")," The method of specifying is similar to the method of specifying a parameter in the Java class\xa0method ",Object(p.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"},"Keystroke.getKeystroke (String)"),"."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"SHOW")),Object(p.b)("p",null,"Keyword. When specified, the key combination will be displayed in the property caption. Used by default."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"HIDE")),Object(p.b)("p",null,"Keyword. When specified, the key combination will not be displayed in the property caption.\xa0"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"DEFAULTCOMPARE")),Object(p.b)("p",null,"Specifies a ",Object(p.b)("a",{parentName:"p",href:"/platform/Interactive_view#userfilters"},"default filter")," type for the property."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"compare")),Object(p.b)("p",null,"Default filter type. ",Object(p.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". Can be one the following values: '=', '",">","', '<', '",">","=',\xa0'<=',\xa0'!=', 'START","_","WITH', 'CONTAINS', 'ENDS","_","WITH', 'LIKE'. The default value is '=' **\xa0",Object(p.b)("strong",{parentName:"p"}," for all data types except case-insensitive string types, for which the default value is 'CONTAINS'"),".\xa0",Object(p.b)("strong",{parentName:"p"}," If "),"System.defaultCompareForStringContains\xa0",Object(p.b)("strong",{parentName:"p"}," is enabled,\xa0default value is 'CONTAINS'"),"\xa0",Object(p.b)("strong",{parentName:"p"},"for all string data regardless of case sensitivity.\xa0Can be overridden in the "),"DESIGN** instruction."),Object(p.b)("h3",{id:"examples"},"Examples"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-lsf"},"cost 'Cost' (i) = DATA NUMERIC[12,3] (Item);        // property defined by the context-independent DATA property operator\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;       // property defined by expression\ndiff = a - b;                                           // the caption of this property will be 'diff' and the parameters will be (a, b)\n\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; // property defined by DATA operator with additional property options\n")))}c.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),c=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=c(r),u=a,f=s["".concat(o,".").concat(u)]||s[u]||m[u]||p;return r?n.a.createElement(f,i(i({ref:t},b),{},{components:r})):n.a.createElement(f,i({ref:t},b))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<p;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);