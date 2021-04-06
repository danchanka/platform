(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{563:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(746)),i={title:"Structured view"},p={unversionedId:"Structured_view",id:"Structured_view",isDocsHomePage:!1,title:"Structured view",description:"All structured views (formats) can be divided into two types:",source:"@site/docs/Structured_view.md",slug:"/Structured_view",permalink:"/platform/next/Structured_view",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Structured_view.md",version:"current",sidebar:"learn",previous:{title:"Report design",permalink:"/platform/next/Report_design"},next:{title:"Open form: Overview",permalink:"/platform/next/Open_form"}},s=[{value:"Export/import name",id:"extid",children:[]},{value:"Hierarchical view",id:"hierarchy",children:[]},{value:"Predefined value",id:"value",children:[]},{value:"XML namespaces",id:"xml-namespaces",children:[]},{value:"Flat view",id:"flat-view",children:[]},{value:"Language",id:"language",children:[]},{value:"Open form",id:"open-form",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All structured views (",Object(o.b)("em",{parentName:"p"},"formats"),") can be divided into two types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Hierarchical")," (XML, JSON) - single text file; the information for ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Form_structure#objects"},"object groups"),"\xa0is put as a list\xa0inside the information for ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Static_view#hierarchy"},"parent")," groups."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Flat")," (DBF, CSV, XLS, TABLE) - one table file for each object group, and each object group with more than one level of ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Static_view#hierarchy"},"nesting")," should have a column in its table named ",Object(o.b)("strong",{parentName:"li"},"parent"),' which should contain the "upper" row number in the parent group table.')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Working with flat formats with a hierarchy depth greater than one is not very convenient (because in this case, the developer has to maintain an additional column), therefore, usually flat formats are used only for working with simple forms (with a hierarchy depth less than one). In other cases, hierarchical formats are usually used."))),Object(o.b)("p",null,"Formats\xa0are also divided into:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"human-readable (text) and binary. All hierarchical formats\xa0are human-readable, flat can be either binary (DBF, TABLE, XLS), or human-readable (CSV). You can and should specify the encoding for human-readable formats (UTF-8 is used by default)."),Object(o.b)("li",{parentName:"ul"},"standardized and internal. At the moment, only one internal format is supported: TABLE (a table of values). All the other formats are standardized. Internal format files are processed in a special way in some\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/next/Integration"},"integration"),"\xa0operations (e.g.,\xa0in\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/next/Access_to_an_external_system_EXTERNAL_#table-broken"},"SQL calls"),"). In addition, internal formats can be used to communicate lsFusion systems with each other.")),Object(o.b)("p",null,"In the current implementation the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_structure#groupcolumns-broken"},"group-in-columns")," platforms are ignored in a structured view."),Object(o.b)("p",null,"When building an object group ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Static_view#hierarchy"},"hierarchy")," in a structured view, the object groups that have all their objects ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Open_form#params"},"passed")," on the form opening are ignored (as if these object groups did not exist)."),Object(o.b)("p",null,"If the property ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_structure#drawgroup-broken"},"display group"),"\xa0is specified explicitly in a\xa0structured view, then\xa0this group should not be earlier than the default one (if the specified group appears earlier, then the\xa0default display group will be used anyway)."),Object(o.b)("h3",{id:"extid"},"Export/import name"),Object(o.b)("p",null,"The name of the property on the form that will be used during export/import can be specified explicitly using the corresponding option (",Object(o.b)("strong",{parentName:"p"},"EXTID"),"). Unless this is done, the name of the property on the form will be used as the name of the export/import. If it is also not specified, then the name of the property itself will be the name of the export/import (without adding parameter objects to its end, as it is done in the other mechanisms -\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Print_view"},"reports"),", customizing interactive\xa0view\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_design"},"design"),", etc.). The export/import names of object groups and property groups are determined similarly."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Because of the grammar nature, the option for specifying import/export name of the form (specifically, its ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Static_view#empty"},"empty group")," of objects) is called ",Object(o.b)("strong",{parentName:"p"},"FORMEXTID")," (not ",Object(o.b)("strong",{parentName:"p"},"EXTID"),")."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Unlike property names on the form, property export/import names (",Object(o.b)("strong",{parentName:"p"},"EXTID"),") of different properties can be equal if these properties are located in different nodes of the hierarchy (i.e., different groups of objects/properties). The same applies to export/import names of object groups and property groups."))),Object(o.b)("h3",{id:"hierarchy"},"Hierarchical view"),Object(o.b)("p",null,"Before directly proceeding with the form export/import, the platform builds a hierarchy of properties, groups of objects/properties as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The hierarchy of objects/properties groups is built in accordance with the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Static_view"},"hierarchy"),"\xa0of object groups and property ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_structure#drawgroup-broken"},"display groups"),": a property display group is considered the parent of this property, the hierarchy of object groups is preserved.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Then for each ",Object(o.b)("strong",{parentName:"p"},"X")," object group:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/platform/next/Groups_of_properties_and_actions"},"property groups")," that all ",Object(o.b)("strong",{parentName:"p"},"X"),"\xa0descendants belong to are determined, then these property groups and their ancestors are automatically included in the hierarchy. Also:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"property groups become the parents of ",Object(o.b)("strong",{parentName:"p"},"X"),"\xa0descendants that belong to those groups")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"the hierarchy of property groups is preserved")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"the ",Object(o.b)("strong",{parentName:"p"},"X")," object group becomes the parent of the uppermost (i.e., that without parents) of the used property groups."))))))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In a hierarchical view, object groups can be included in property groups as well as properties.\xa0"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The described algorithm is very similar to the algorithm for building property containers in the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Form_design#defaultDesign"},"default design")," (with the only difference being that it does not use the hierarchy of object groups). Like in the container building mechanism, the same property group can be included in the hierarchy several times for different groups of objects."))),Object(o.b)("p",null,"After the hierarchy is built, the form is exported/imported recursively according to the following rules:\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"JSON"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'JSON result ::= \n    { JSON with properties, groups of objects/properties without parents }\n\nJSON with properties, groups of objects/properties ::= \n    JSON of the property 1 | JSON of the property group 1 | JSON of the object group 1\n    JSON of the property 2 | JSON of the property group 2 | JSON of the object group 2\n    ...\n    JSON of the property M | JSON of the property group M | JSON of the object group M\n\nJSON of the property ::=\n    "property name on the form" : property value\n\nJSON of the property group ::=\n    "property group name" : { JSON with child properties, groups of properties/objects }\n\nJSON of the object group ::=\n    "object group name" : [\n        { JSON with child properties, groups of properties/objects 1 }, \n        { JSON with child properties, groups of properties/objects 2 },\n        ... \n        { JSON with child properties, groups of properties/objects N },\n    ]\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"XML"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"XML result ::= \n    <form name> XML with properties, groups of properties/objects without parents </form name>\n\nXML with properties, groups of properties/objects ::= \n    XML of the property 1 | XML of the property group 1 | XML of the object group 1\n    XML of the property 2 | XML of the property group 2 | XML of the object group 2\n    ...\n    XML of the property M | XML of the property group M | XML of the object group M\n\nXML of the property ::= \n    <property name on the form> property value </property name on the form>\n\nXML of the property group ::=\n    <property group name> XML with child properties, groups of properties/objects </property group name>\n\nXML of the object group ::=\n    <object group name> XML with child properties, groups of properties/objects 1 </property group name>\n    <object group name> XML with child properties, groups of properties/objects 2 </property group name>\n    ...\n    <object group name> XML with child properties, groups of properties/objects N </property group name>\n")),Object(o.b)("p",null,"When exporting/importing to XML, the special ATTR option can be specified for a property on the form. Thus, when exporting/importing that property, its value will be stored not in a separate tag, but in the attribute of the parent tag:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'<parent tag ... property name on the form = "property value" ...>\n')),Object(o.b)("p",null,"When importing from XML, the name of the uppermost tag (in the rule) is ignored (according to the XML specification, there should be only one such tag)."),Object(o.b)("p",null,"Properties with ",Object(o.b)("strong",{parentName:"p"},"NULL")," values, as well as property groups that do not have any tags inside\xa0as a result of export, are not exported (ignored)."),Object(o.b)("h3",{id:"value"},"Predefined value"),Object(o.b)("p",null,"When importing JSON, if for an object group an array (\xa0","["," ","]",'\xa0) of values contains not an object (\xa0{ } ), but a specific value (for example, a number or a string), then this value is automatically converted\xa0to an object { "',Object(o.b)("strong",{parentName:"p"},"value"),'" : value }. A similar conversion is performed when exporting an object group to JSON: if the object contains exactly one ',Object(o.b)("strong",{parentName:"p"},"value"),' key (i.e., it has the form { "',Object(o.b)("strong",{parentName:"p"},"value"),'" : value}), then instead of it, the value for this ',Object(o.b)("strong",{parentName:"p"},"value"),' key is substituted to the resulting JSON. In addition to "ordinary" object groups, the same conversions are also performed for the ',Object(o.b)("a",{parentName:"p",href:"/platform/next/Static_view#empty"},"empty")," root object group, i.e., for example JSON ","[",'"ab","vv"',"]",' is processed as JSON\xa0{ "',Object(o.b)("strong",{parentName:"p"},"value"),'" : ',"[",'"ab","vv"',"]","\xa0}."),Object(o.b)("p",null,"When importing/exporting XML, if the property is named ",Object(o.b)("strong",{parentName:"p"},"value"),", then the\xa0value of this property will be stored not in a separate tag, but inside (in the text) the parent tag (i.e., as if the parent tag itself was a property view). This behavior is usually used if the parent tag has other tags/attributes in it (XML specification allows this)."),Object(o.b)("p",null,"When importing XML, if the object group is named ",Object(o.b)("strong",{parentName:"p"},"value"),", then all tags are read (with any name).\xa0"),Object(o.b)("h3",{id:"xml-namespaces"},"XML namespaces"),Object(o.b)("p",null,"Unlike other formats, XML supports a concept of namespaces for tags and attributes."),Object(o.b)("p",null,"For example, in lsFusion to export a property to a tag with a specified namespace, you must specify the name of this property using a special syntax:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[namespace[=uri]:]name\n")),Object(o.b)("p",null,"For example, h:table or h=",Object(o.b)("a",{parentName:"p",href:"http://www.w3.org/TR/html4:table"},"http://www.w3.org/TR/html4:table"),". The namespace name may be empty if necessary. If no URI is specified for the namespace, it is inherited from the namespace with the same name of the parent tags. If there are no namespaces with that name in the parent tags, URI is automatically considered equal to ",Object(o.b)("a",{parentName:"p",href:"http://www.w3.org/"},"http://www.w3.org/")," of the namespace>."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It is not possible to specify the property name described above (for example, h:table) in the lsFusion syntax (since the name cannot contain a colon), therefore, to specify such an export name, you should use the ",Object(o.b)("a",{parentName:"p",href:"#extid"},"described above")," ",Object(o.b)("strong",{parentName:"p"},"EXTID")," option."))),Object(o.b)("p",null,"If a namespace must be declared in a tag\xa0, but the tag itself should not belong to it, you must add a property marked\xa0",Object(o.b)("strong",{parentName:"p"},"ATTR"),"\xa0and named xmlns:namespace to the export. It is assumed that the value of this property will contain the URI of the declared namespace."),Object(o.b)("p",null,"Working with namespaces is similar when importing properties, as well as when working with object groups/property groups."),Object(o.b)("h3",{id:"flat-view"},"Flat view"),Object(o.b)("p",null,"Each file for an object group in flat view is a table in which:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Rows are object collections of this object group."),Object(o.b)("li",{parentName:"ul"},"Columns are properties, which ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Form_structure#drawgroup-broken"},"display groups"),"\xa0are equal to this object group.")),Object(o.b)("p",null,"In CSV format (when there is no first header line), the columns are named similarly to XLS (i.e., A is the first, B is the second, etc.)"),Object(o.b)("p",null,"If a column with the form property name is not found when importing the form, then the column next to the column of the previous\xa0property in the list of form properties is selected for import (in this case, the ",Object(o.b)("strong",{parentName:"p"},"parent")," column is considered the first)."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"All of the above options, as well as defining the form structure,\xa0can be done using the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/FORM_instruction"},Object(o.b)("strong",{parentName:"a"},"FORM"),"\xa0instruction"),"."),Object(o.b)("h3",{id:"open-form"},"Open form"),Object(o.b)("p",null,"To display the form in structured view, the corresponding ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Open_form"},"open form"),"\xa0in a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/In_a_structured_view_EXPORT_IMPORT_"},"structured view","\xa0"),"operator is used."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM exportSku\n    OBJECTS st = Store\n\n    OBJECTS s = Sku\n    PROPERTIES(s) id, name, weight\n    FILTERS in(st, s)\n;\n\nexportSku (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT exportSku OBJECTS st = store DBF CHARSET 'CP866';\n    EXPORT exportSku XML;\n    EXPORT exportSku OBJECTS st = store CSV ',';\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"\ndate = DATA DATE (INTEGER);\nsku = DATA BPSTRING[50] (INTEGER);\nprice = DATA NUMERIC[14,2] (INTEGER);\norder = DATA INTEGER (INTEGER);\nFORM import\n    OBJECTS o = INTEGER // orders\n    OBJECTS od = INTEGER // order lines\n    PROPERTIES (o) dateOrder = date // importing the date from the dateOrder field\n    PROPERTIES (od) sku = sku, price = price // importing product quantity from sku and price fields\n    FILTERS order(od) = o // writing the top order to order\n\n;\n\nimportForm()  {\n    INPUT f = FILE DO {\n        IMPORT import JSON FROM f;\n        SHOW import; // showing what was imported\n\n        // creating objects in the database\n        FOR DATE date = date(INTEGER io) NEW o = Order DO {\n            date(o) <- date;\n            FOR order(INTEGER iod) = io NEW od = OrderDetail DO {\n                price(od) <- price(iod);\n                sku(od) <- GROUP MAX Sku sku IF name(sku) = sku(iod); // finding sku with this name\n            }\n        }\n    }\n}\n")))}l.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),l=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(r),h=a,u=b["".concat(i,".").concat(h)]||b[h]||m[h]||o;return r?n.a.createElement(u,p(p({ref:t},c),{},{components:r})):n.a.createElement(u,p({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);