(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{256:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),i=(a(0),a(745)),p={title:"Property options"},o={unversionedId:"Property_options",id:"version-v4/Property_options",isDocsHomePage:!1,title:"Property options",description:"When a property is declared in the = instruction a set of property options can be specified at the end of the declaration",source:"@site/versioned_docs/version-v4/Property_options.md",slug:"/Property_options",permalink:"/platform/Property_options",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Property_options.md",version:"v4",lastUpdatedAt:1619434733,formattedLastUpdatedAt:"4/26/2021",sidebar:"version-v4/learn",previous:{title:"Comparison operators",permalink:"/platform/Comparison_operators"},next:{title:"ACTION instruction",permalink:"/platform/ACTION_instruction"}},b=[{value:"Syntax",id:"syntax",children:[]},{value:"Description and parameters",id:"description-and-parameters",children:[{value:"Interactive view block",id:"interactive-view-block",children:[]},{value:"<code>DESIGN</code> instruction default values block",id:"design-instruction-default-values-block",children:[]}]},{value:"Examples",id:"examples",children:[]}],l={toc:b};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When a ",Object(i.b)("a",{parentName:"p",href:"/platform/Properties"},"property")," is declared in the ",Object(i.b)("a",{parentName:"p",href:"/platform/Instruction_="},Object(i.b)("inlineCode",{parentName:"a"},"=")," instruction")," a set of ",Object(i.b)("em",{parentName:"p"},"property options")," can be specified at the end of the declaration "),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"propertyOption1 ... propertyOptionN\n")),Object(i.b)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"IN groupName\nviewType\nON eventType { actionOperator }\nCHANGEKEY key [SHOW | HIDE]\nMATERIALIZED\nTABLE tableName\nINDEXED\nNONULL [DELETE] eventClause\nAUTOSET\nCHARWIDTH width [FLEX | NOFLEX]\nREGEXP rexpr [message] \nECHO\nDEFAULTCOMPARE [compare]\n")),Object(i.b)("h2",{id:"description-and-parameters"},"Description and parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"IN groupName")),Object(i.b)("p",{parentName:"li"},"  Specifying the ",Object(i.b)("a",{parentName:"p",href:"/platform/Groups_of_properties_and_actions"},"group of properties and actions")," to which the property belongs. If the option is not specified, then the property will belong by default to the group ",Object(i.b)("inlineCode",{parentName:"p"},"System.private"),"."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"groupName")),Object(i.b)("p",{parentName:"li"},"  Group name. ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Compound ID"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"MATERIALIZED")),Object(i.b)("p",{parentName:"li"},"  Keyword marking the property as ",Object(i.b)("a",{parentName:"p",href:"/platform/Materializations"},"materialized"),". These properties will be stored in the database's ",Object(i.b)("a",{parentName:"p",href:"/platform/Tables"},"table")," fields.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"TABLE tableName")),Object(i.b)("p",{parentName:"li"},"  Specifies the ",Object(i.b)("a",{parentName:"p",href:"/platform/Tables"},"table"),' where the property will be stored. The number of table keys must be equal to the number of property arguments, and the argument classes must match the table key classes. If no table is specified, the property will automatically be placed in the "nearest" existing table in the system.'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"tableName")),Object(i.b)("p",{parentName:"li"},"  Table name. Composite ID. ")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"INDEXED")),Object(i.b)("p",{parentName:"li"},"  Keyword. If specified, an ",Object(i.b)("a",{parentName:"p",href:"/platform/Indexes"},"index")," by this property is created. Similar to using the ",Object(i.b)("a",{parentName:"p",href:"/platform/INDEX_instruction"},Object(i.b)("inlineCode",{parentName:"a"},"INDEX")," instruction"),". ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"NONULL [DELETE] eventClause")),Object(i.b)("p",{parentName:"li"},"  Adds a ",Object(i.b)("a",{parentName:"p",href:"/platform/Simple_constraints"},"definiteness")," constraint. If this constraint is violated as a result of some changes for some objects, either the corresponding message will be displayed, or, if ",Object(i.b)("inlineCode",{parentName:"p"},"DELETE")," is specified, such objects will be deleted."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"DELETE")),Object(i.b)("p",{parentName:"li"},"  Keyword that, if specified, then when the property becomes ",Object(i.b)("inlineCode",{parentName:"p"},"NULL"),", objects that are property arguments will be deleted.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"eventClause")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Event_description_block"},"Event type description block"),". Describes the event by which the property will be checked for ",Object(i.b)("inlineCode",{parentName:"p"},"NULL"),"."))))),Object(i.b)("h3",{id:"interactive-view-block"},"Interactive view block"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"viewType")),Object(i.b)("p",{parentName:"li"},"  Specifying the type of ",Object(i.b)("a",{parentName:"p",href:"/platform/Interactive_view#property"},"property view")," when added to the form."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GRID")," - table column"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TOOLBAR")," - toolbar"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PANEL")," - panel")),Object(i.b)("p",{parentName:"li"},"It is similar to specifying the ",Object(i.b)("inlineCode",{parentName:"p"},"viewType")," option in the ",Object(i.b)("a",{parentName:"p",href:"/platform/Properties_and_actions_block"},"property block")," of the ",Object(i.b)("a",{parentName:"p",href:"/platform/FORM_instruction"},Object(i.b)("inlineCode",{parentName:"a"},"FORM"),"instruction"),". Thus, if this option is not specified either in the property options or in the property block directly on the form, the ",Object(i.b)("a",{parentName:"p",href:"/platform/Interactive_view#defaultPropertyView-broken"},"default view")," of the property display group on the form is used.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ON eventType { actionOperator }")),Object(i.b)("p",{parentName:"li"},"  Specifying an action that will be the default handler of a certain ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_events"},"form event")," for all the interactive views of this property. Can be overridden in the property block of the ",Object(i.b)("inlineCode",{parentName:"p"},"FORM")," instruction."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"eventType")),Object(i.b)("p",{parentName:"li"},"  Type of form event. Specified by one of the following options:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CHANGE")," - occurs when the user tries to change the value of a property."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CHANGEWYS")," - occurs when the user tries to change the value of the specified property using a special input mechanism. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GROUPCHANGE")," - occurs when the user tries to change the property value for all objects in the table (group editing).  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EDIT")," - occurs when the user tries to edit the object that is the value of the specified property. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CONTEXTMENU [caption]")," - the user has selected the specified item in the property context menu on the form. If necessary, you can also define the ",Object(i.b)("inlineCode",{parentName:"li"},"caption")," of this menu item (",Object(i.b)("a",{parentName:"li",href:"/platform/Literals#strliteral-broken"},"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"actionOperator")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"Context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."))))),Object(i.b)("h3",{id:"design-instruction-default-values-block"},Object(i.b)("inlineCode",{parentName:"h3"},"DESIGN")," instruction default values block"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"CHARWIDTH width [FLEX | NOFLEX]")),Object(i.b)("p",{parentName:"li"},"  Specifying the ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_design#valueWidth-broken"},"number of characters")," of the property value that should be visible to the user. Sets the value for the default design, can be overridden in a ",Object(i.b)("inlineCode",{parentName:"p"},"DESIGN")," instruction."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"width")),Object(i.b)("p",{parentName:"li"},"  Number of characters. Integer literal. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"FLEX"),"  "),Object(i.b)("p",{parentName:"li"},"  Keyword. If specified, the extension coefficient of the property value is automatically set equal to its base size.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"NOFLEX")),Object(i.b)("p",{parentName:"li"},"  Keyword. If specified, the extension coefficient of the property value is automatically set equal to zero.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"REGEXP rexpr [message]")),Object(i.b)("p",{parentName:"li"},"  Specifying a regular expression to which the property value should correspond after editing. Sets the value for the default design and can be overridden in the ",Object(i.b)("inlineCode",{parentName:"p"},"DESIGN")," instruction."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"rexpr")),Object(i.b)("p",{parentName:"li"},"  A string literal that describes the regular expression. Rules are similar to the rules ",Object(i.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html"},"accepted in Java")," .")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"message")),Object(i.b)("p",{parentName:"li"},"  String literal describing the message that will be shown to the user if they enter a value that does not match the regular expression. If not specified, a default message will be displayed.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ECHO")),Object(i.b)("p",{parentName:"li"},"  A keyword that causes asterisk ",Object(i.b)("inlineCode",{parentName:"p"},"*")," characters to be displayed instead of a property value. Used, for example, for passwords. Can be overridden in the ",Object(i.b)("inlineCode",{parentName:"p"},"DESIGN")," instruction. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"CHANGEKEY key [SHOW | HIDE]")),Object(i.b)("p",{parentName:"li"},"  Specifies a ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_events#keyboard-broken"},"key combination")," which triggers editing of this property. Sets the value for the default design and can be overridden in the ",Object(i.b)("inlineCode",{parentName:"p"},"DESIGN")," instruction."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"key")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal")," describing the key combination. The method of specifying is similar to the method of specifying a parameter in the Java class method ",Object(i.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"},"Keystroke.getKeystroke (String)"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"SHOW")),Object(i.b)("p",{parentName:"li"},"  Keyword. When specified, the key combination will be displayed in the property caption. Used by default.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"HIDE")),Object(i.b)("p",{parentName:"li"},"  Keyword. When specified, the key combination will not be displayed in the property caption. ")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"DEFAULTCOMPARE [compare]")),Object(i.b)("p",{parentName:"li"},"  Specifies a ",Object(i.b)("a",{parentName:"p",href:"/platform/Interactive_view#userfilters"},"default filter")," type for the property."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"compare")),Object(i.b)("p",{parentName:"li"},"  Default filter type. ",Object(i.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". Can be one the following values: ",Object(i.b)("inlineCode",{parentName:"p"},"="),", ",Object(i.b)("inlineCode",{parentName:"p"},">"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<"),", ",Object(i.b)("inlineCode",{parentName:"p"},">="),", ",Object(i.b)("inlineCode",{parentName:"p"},"<="),", ",Object(i.b)("inlineCode",{parentName:"p"},"!="),", ",Object(i.b)("inlineCode",{parentName:"p"},"START_WITH"),", ",Object(i.b)("inlineCode",{parentName:"p"},"CONTAINS"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ENDS_WITH"),", ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE"),". The default value is ",Object(i.b)("inlineCode",{parentName:"p"},"=")," for all data types except case-insensitive string types, for which the default value is ",Object(i.b)("inlineCode",{parentName:"p"},"CONTAINS"),". If ",Object(i.b)("inlineCode",{parentName:"p"},"System.defaultCompareForStringContains")," is enabled, default value is ",Object(i.b)("inlineCode",{parentName:"p"},"CONTAINS")," for all string data regardless of case sensitivity. Can be overridden in the ",Object(i.b)("inlineCode",{parentName:"p"},"DESIGN")," instruction."))))),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"cost 'Cost' (i) = DATA NUMERIC[12,3] (Item);        // property defined by the context-independent DATA property operator\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;       // property defined by expression\ndiff = a - b;                                           // the caption of this property will be 'diff' and the parameters will be (a, b)\n\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; // property defined by DATA operator with additional property options\n")))}c.isMDXComponent=!0},745:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=c(a),d=n,O=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return a?r.a.createElement(O,o(o({ref:t},l),{},{components:a})):r.a.createElement(O,o({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);