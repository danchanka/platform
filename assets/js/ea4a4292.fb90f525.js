(window.webpackJsonp=window.webpackJsonp||[]).push([[615,440],{57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return m})),r.d(t,"CodeSample",(function(){return u})),r.d(t,"default",(function(){return h}));var a=r(3),o=r(7),n=r(0),i=r.n(n),s=r(747),p=r(750),c={},l={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},m=[],u=function(e){var t=e.url,r=e.lines,a=Object(n.useState)(""),o=a[0],c=a[1];return Object(n.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),o?r?Object(s.b)(i.a.Fragment,null,Object(s.b)(p.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(i.a.Fragment,null,Object(s.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:m,CodeSample:u};function h(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}))}h.isMDXComponent=!0},687:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return m}));var a=r(3),o=r(7),n=(r(0),r(747)),i=r(57),s={title:"Structured view"},p={unversionedId:"Structured_view",id:"version-v4/Structured_view",isDocsHomePage:!1,title:"Structured view",description:"All structured views (formats) can be divided into two types:",source:"@site/versioned_docs/version-v4/Structured_view.md",slug:"/Structured_view",permalink:"/platform/Structured_view",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Structured_view.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Report design",permalink:"/platform/Report_design"},next:{title:"Open form: Overview",permalink:"/platform/Open_form"}},c=[{value:"Export/import name",id:"extid",children:[]},{value:"Hierarchical view",id:"hierarchy",children:[]},{value:"Predefined value",id:"value",children:[]},{value:"XML namespaces",id:"xml-namespaces",children:[]},{value:"Flat view",id:"flat-view",children:[]},{value:"Language",id:"language",children:[]},{value:"Open form",id:"open-form",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"All structured views (",Object(n.b)("em",{parentName:"p"},"formats"),") can be divided into two types:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Hierarchical")," (XML, JSON) - single text file; the information for ",Object(n.b)("a",{parentName:"li",href:"/platform/Form_structure#objects"},"object groups"),"\xa0is put as a list\xa0inside the information for ",Object(n.b)("a",{parentName:"li",href:"/platform/Static_view#hierarchy"},"parent")," groups."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Flat")," (DBF, CSV, XLS, TABLE) - one table file for each object group, and each object group with more than one level of ",Object(n.b)("a",{parentName:"li",href:"/platform/Static_view#hierarchy"},"nesting")," should have a column in its table named ",Object(n.b)("strong",{parentName:"li"},"parent"),' which should contain the "upper" row number in the parent group table.')),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Working with flat formats with a hierarchy depth greater than one is not very convenient (because in this case, the developer has to maintain an additional column), therefore, usually flat formats are used only for working with simple forms (with a hierarchy depth less than one). In other cases, hierarchical formats are usually used."))),Object(n.b)("p",null,"Formats\xa0are also divided into:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"human-readable (text) and binary. All hierarchical formats\xa0are human-readable, flat can be either binary (DBF, TABLE, XLS), or human-readable (CSV). You can and should specify the encoding for human-readable formats (UTF-8 is used by default)."),Object(n.b)("li",{parentName:"ul"},"standardized and internal. At the moment, only one internal format is supported: TABLE (a table of values). All the other formats are standardized. Internal format files are processed in a special way in some\xa0",Object(n.b)("a",{parentName:"li",href:"/platform/Integration"},"integration"),"\xa0operations (e.g.,\xa0in\xa0",Object(n.b)("a",{parentName:"li",href:"/platform/Access_to_an_external_system_EXTERNAL_#table-broken"},"SQL calls"),"). In addition, internal formats can be used to communicate lsFusion systems with each other.")),Object(n.b)("p",null,"In the current implementation the ",Object(n.b)("a",{parentName:"p",href:"/platform/Form_structure#groupcolumns-broken"},"group-in-columns")," platforms are ignored in a structured view."),Object(n.b)("p",null,"When building an object group ",Object(n.b)("a",{parentName:"p",href:"/platform/Static_view#hierarchy"},"hierarchy")," in a structured view, the object groups that have all their objects ",Object(n.b)("a",{parentName:"p",href:"/platform/Open_form#params"},"passed")," on the form opening are ignored (as if these object groups did not exist)."),Object(n.b)("p",null,"If the property ",Object(n.b)("a",{parentName:"p",href:"/platform/Form_structure#drawgroup-broken"},"display group"),"\xa0is specified explicitly in a\xa0structured view, then\xa0this group should not be earlier than the default one (if the specified group appears earlier, then the\xa0default display group will be used anyway)."),Object(n.b)("h3",{id:"extid"},"Export/import name"),Object(n.b)("p",null,"The name of the property on the form that will be used during export/import can be specified explicitly using the corresponding option (",Object(n.b)("strong",{parentName:"p"},"EXTID"),"). Unless this is done, the name of the property on the form will be used as the name of the export/import. If it is also not specified, then the name of the property itself will be the name of the export/import (without adding parameter objects to its end, as it is done in the other mechanisms -\xa0",Object(n.b)("a",{parentName:"p",href:"/platform/Print_view"},"reports"),", customizing interactive\xa0view\xa0",Object(n.b)("a",{parentName:"p",href:"/platform/Form_design"},"design"),", etc.). The export/import names of object groups and property groups are determined similarly."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Because of the grammar nature, the option for specifying import/export name of the form (specifically, its ",Object(n.b)("a",{parentName:"p",href:"/platform/Static_view#empty"},"empty group")," of objects) is called ",Object(n.b)("strong",{parentName:"p"},"FORMEXTID")," (not ",Object(n.b)("strong",{parentName:"p"},"EXTID"),")."))),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Unlike property names on the form, property export/import names (",Object(n.b)("strong",{parentName:"p"},"EXTID"),") of different properties can be equal if these properties are located in different nodes of the hierarchy (i.e., different groups of objects/properties). The same applies to export/import names of object groups and property groups."))),Object(n.b)("h3",{id:"hierarchy"},"Hierarchical view"),Object(n.b)("p",null,"Before directly proceeding with the form export/import, the platform builds a hierarchy of properties, groups of objects/properties as follows:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The hierarchy of objects/properties groups is built in accordance with the ",Object(n.b)("a",{parentName:"p",href:"/platform/Static_view"},"hierarchy"),"\xa0of object groups and property ",Object(n.b)("a",{parentName:"p",href:"/platform/Form_structure#drawgroup-broken"},"display groups"),": a property display group is considered the parent of this property, the hierarchy of object groups is preserved.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Then for each ",Object(n.b)("strong",{parentName:"p"},"X")," object group:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"/platform/Groups_of_properties_and_actions"},"property groups")," that all ",Object(n.b)("strong",{parentName:"p"},"X"),"\xa0descendants belong to are determined, then these property groups and their ancestors are automatically included in the hierarchy. Also:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"property groups become the parents of ",Object(n.b)("strong",{parentName:"p"},"X"),"\xa0descendants that belong to those groups")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"the hierarchy of property groups is preserved")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"the ",Object(n.b)("strong",{parentName:"p"},"X")," object group becomes the parent of the uppermost (i.e., that without parents) of the used property groups."))))))),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"In a hierarchical view, object groups can be included in property groups as well as properties.\xa0"))),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"The described algorithm is very similar to the algorithm for building property containers in the ",Object(n.b)("a",{parentName:"p",href:"/platform/Form_design#defaultDesign"},"default design")," (with the only difference being that it does not use the hierarchy of object groups). Like in the container building mechanism, the same property group can be included in the hierarchy several times for different groups of objects."))),Object(n.b)("p",null,"After the hierarchy is built, the form is exported/imported recursively according to the following rules:\xa0"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"JSON"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'JSON result ::= \n    { JSON with properties, groups of objects/properties without parents }\n\nJSON with properties, groups of objects/properties ::= \n    JSON of the property 1 | JSON of the property group 1 | JSON of the object group 1\n    JSON of the property 2 | JSON of the property group 2 | JSON of the object group 2\n    ...\n    JSON of the property M | JSON of the property group M | JSON of the object group M\n\nJSON of the property ::=\n    "property name on the form" : property value\n\nJSON of the property group ::=\n    "property group name" : { JSON with child properties, groups of properties/objects }\n\nJSON of the object group ::=\n    "object group name" : [\n        { JSON with child properties, groups of properties/objects 1 }, \n        { JSON with child properties, groups of properties/objects 2 },\n        ... \n        { JSON with child properties, groups of properties/objects N },\n    ]\n')),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"XML"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"XML result ::= \n    <form name> XML with properties, groups of properties/objects without parents </form name>\n\nXML with properties, groups of properties/objects ::= \n    XML of the property 1 | XML of the property group 1 | XML of the object group 1\n    XML of the property 2 | XML of the property group 2 | XML of the object group 2\n    ...\n    XML of the property M | XML of the property group M | XML of the object group M\n\nXML of the property ::= \n    <property name on the form> property value </property name on the form>\n\nXML of the property group ::=\n    <property group name> XML with child properties, groups of properties/objects </property group name>\n\nXML of the object group ::=\n    <object group name> XML with child properties, groups of properties/objects 1 </property group name>\n    <object group name> XML with child properties, groups of properties/objects 2 </property group name>\n    ...\n    <object group name> XML with child properties, groups of properties/objects N </property group name>\n")),Object(n.b)("p",null,"When exporting/importing to XML, the special ATTR option can be specified for a property on the form. Thus, when exporting/importing that property, its value will be stored not in a separate tag, but in the attribute of the parent tag:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'<parent tag ... property name on the form = "property value" ...>\n')),Object(n.b)("p",null,"When importing from XML, the name of the uppermost tag (in the rule) is ignored (according to the XML specification, there should be only one such tag)."),Object(n.b)("p",null,"Properties with ",Object(n.b)("strong",{parentName:"p"},"NULL")," values, as well as property groups that do not have any tags inside\xa0as a result of export, are not exported (ignored)."),Object(n.b)("h3",{id:"value"},"Predefined value"),Object(n.b)("p",null,"When importing JSON, if for an object group an array (\xa0","["," ","]",'\xa0) of values contains not an object (\xa0{ } ), but a specific value (for example, a number or a string), then this value is automatically converted\xa0to an object { "',Object(n.b)("strong",{parentName:"p"},"value"),'" : value }. A similar conversion is performed when exporting an object group to JSON: if the object contains exactly one ',Object(n.b)("strong",{parentName:"p"},"value"),' key (i.e., it has the form { "',Object(n.b)("strong",{parentName:"p"},"value"),'" : value}), then instead of it, the value for this ',Object(n.b)("strong",{parentName:"p"},"value"),' key is substituted to the resulting JSON. In addition to "ordinary" object groups, the same conversions are also performed for the ',Object(n.b)("a",{parentName:"p",href:"/platform/Static_view#empty"},"empty")," root object group, i.e., for example JSON ","[",'"ab","vv"',"]",' is processed as JSON\xa0{ "',Object(n.b)("strong",{parentName:"p"},"value"),'" : ',"[",'"ab","vv"',"]","\xa0}."),Object(n.b)("p",null,"When importing/exporting XML, if the property is named ",Object(n.b)("strong",{parentName:"p"},"value"),", then the\xa0value of this property will be stored not in a separate tag, but inside (in the text) the parent tag (i.e., as if the parent tag itself was a property view). This behavior is usually used if the parent tag has other tags/attributes in it (XML specification allows this)."),Object(n.b)("p",null,"When importing XML, if the object group is named ",Object(n.b)("strong",{parentName:"p"},"value"),", then all tags are read (with any name).\xa0"),Object(n.b)("h3",{id:"xml-namespaces"},"XML namespaces"),Object(n.b)("p",null,"Unlike other formats, XML supports a concept of namespaces for tags and attributes."),Object(n.b)("p",null,"For example, in lsFusion to export a property to a tag with a specified namespace, you must specify the name of this property using a special syntax:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"[namespace[=uri]:]name\n")),Object(n.b)("p",null,"For example, h:table or h=",Object(n.b)("a",{parentName:"p",href:"http://www.w3.org/TR/html4:table"},"http://www.w3.org/TR/html4:table"),". The namespace name may be empty if necessary. If no URI is specified for the namespace, it is inherited from the namespace with the same name of the parent tags. If there are no namespaces with that name in the parent tags, URI is automatically considered equal to ",Object(n.b)("a",{parentName:"p",href:"http://www.w3.org/"},"http://www.w3.org/")," of the namespace>."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"It is not possible to specify the property name described above (for example, h:table) in the lsFusion syntax (since the name cannot contain a colon), therefore, to specify such an export name, you should use the ",Object(n.b)("a",{parentName:"p",href:"#extid"},"described above")," ",Object(n.b)("strong",{parentName:"p"},"EXTID")," option."))),Object(n.b)("p",null,"If a namespace must be declared in a tag\xa0, but the tag itself should not belong to it, you must add a property marked\xa0",Object(n.b)("strong",{parentName:"p"},"ATTR"),"\xa0and named xmlns:namespace to the export. It is assumed that the value of this property will contain the URI of the declared namespace."),Object(n.b)("p",null,"Working with namespaces is similar when importing properties, as well as when working with object groups/property groups."),Object(n.b)("h3",{id:"flat-view"},"Flat view"),Object(n.b)("p",null,"Each file for an object group in flat view is a table in which:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Rows are object collections of this object group."),Object(n.b)("li",{parentName:"ul"},"Columns are properties, which ",Object(n.b)("a",{parentName:"li",href:"/platform/Form_structure#drawgroup-broken"},"display groups"),"\xa0are equal to this object group.")),Object(n.b)("p",null,"In CSV format (when there is no first header line), the columns are named similarly to XLS (i.e., A is the first, B is the second, etc.)"),Object(n.b)("p",null,"If a column with the form property name is not found when importing the form, then the column next to the column of the previous\xa0property in the list of form properties is selected for import (in this case, the ",Object(n.b)("strong",{parentName:"p"},"parent")," column is considered the first)."),Object(n.b)("h3",{id:"language"},"Language"),Object(n.b)("p",null,"All of the above options, as well as defining the form structure,\xa0can be done using the\xa0",Object(n.b)("a",{parentName:"p",href:"/platform/FORM_instruction"},Object(n.b)("strong",{parentName:"a"},"FORM"),"\xa0instruction"),"."),Object(n.b)("h3",{id:"open-form"},"Open form"),Object(n.b)("p",null,"To display the form in structured view, the corresponding ",Object(n.b)("a",{parentName:"p",href:"/platform/Open_form"},"open form"),"\xa0in a\xa0",Object(n.b)("a",{parentName:"p",href:"/platform/In_a_structured_view_EXPORT_IMPORT_"},"structured view","\xa0"),"operator is used."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=export",mdxType:"CodeSample"}),Object(n.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=importForm",mdxType:"CodeSample"}))}m.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return h}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),b=a,h=m["".concat(i,".").concat(b)]||m[b]||u[b]||n;return r?o.a.createElement(h,s(s({ref:t},c),{},{components:r})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},749:function(e,t){function r(e){let t,r=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))r.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,n]=t;if(a&&n){a=parseInt(a),n=parseInt(n);const e=a<n?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(n+=e);for(let t=a;t!==n;t+=e)r.push(t)}}return r}t.default=r,e.exports=r},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return L}));var a=r(3),o=r(0),n=r.n(o),i=r(751),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},p={Prism:r(23).a,theme:s};function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},h=function(e,t){var r=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,r){var a=r.languages,o=r.style;return a&&!a.includes(t)||r.types.forEach((function(t){var r=l({},e[t],o);e[t]=r})),e}),a);return o.root=r,o.plain=l({},r,{backgroundColor:null}),o};function d(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(r[a]=e[a]);return r}var f=function(e){function t(){for(var t=this,r=[],a=arguments.length;a--;)r[a]=arguments[a];e.apply(this,r),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?h(e.theme,e.language):void 0;return t.themeDict=r})),c(this,"getLineProps",(function(e){var r=e.key,a=e.className,o=e.style,n=l({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(n.style=i.plain),void 0!==o&&(n.style=void 0!==n.style?l({},n.style,o):o),void 0!==r&&(n.key=r),a&&(n.className+=" "+a),n})),c(this,"getStyleForToken",(function(e){var r=e.types,a=e.empty,o=r.length,n=t.getThemeDict(t.props);if(void 0!==n){if(1===o&&"plain"===r[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return n[r[0]];var i=a?{display:"inline-block"}:{},s=r.map((function(e){return n[e]}));return Object.assign.apply(Object,[i].concat(s))}})),c(this,"getTokenProps",(function(e){var r=e.key,a=e.className,o=e.style,n=e.token,i=l({},d(e,["key","className","style","token"]),{className:"token "+n.types.join(" "),children:n.content,style:t.getStyleForToken(n),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?l({},i.style,o):o),void 0!==r&&(i.key=r),a&&(i.className+=" "+a),i})),c(this,"tokenize",(function(e,t,r,a){var o={code:t,grammar:r,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var n=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),n}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,a=e.code,o=e.children,n=this.getThemeDict(this.props),i=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],a=[0],o=[e.length],n=0,i=0,s=[],p=[s];i>-1;){for(;(n=a[i]++)<o[i];){var c=void 0,l=t[i],h=r[i][n];if("string"==typeof h?(l=i>0?l:["plain"],c=h):(l=b(l,h.type),h.alias&&(l=b(l,h.alias)),c=h.content),"string"==typeof c){var d=c.split(m),f=d.length;s.push({types:l,content:d[0]});for(var g=1;g<f;g++)u(s),p.push(s=[]),s.push({types:l,content:d[g]})}else i++,t.push(l),r.push(c),a.push(0),o.push(c.length)}i--,t.pop(),r.pop(),a.pop(),o.pop()}return u(s),p}(void 0!==i?this.tokenize(t,a,i,r):[a]),className:"prism-code language-"+r,style:void 0!==n?n.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var g=r(749),y=r.n(g),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=r(753),O=r(748);var N=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),r=e.theme||v,a=e.darkTheme||r;return t?a:r},w=r(752),x=r(58),k=r.n(x);const S=/{([\d,-]+)}/,M=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},r=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${r})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},T=/(?:title=")(.*)(?:")/;function L({children:e,className:t,metastring:r}){const{prism:s}=Object(O.useThemeConfig)(),[c,l]=Object(o.useState)(!1),[m,u]=Object(o.useState)(!1);Object(o.useEffect)((()=>{u(!0)}),[]);const b=Object(o.useRef)(null);let h=[],d="";const g=N(),v=Array.isArray(e)?e.join(""):e;if(r&&S.test(r)){const e=r.match(S)[1];h=y()(e).filter((e=>e>0))}r&&T.test(r)&&(d=r.match(T)[1]);let j=t&&t.replace(/language-/,"");!j&&s.defaultLanguage&&(j=s.defaultLanguage);let x=v.replace(/\n$/,"");if(0===h.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return M(["js","jsBlock"]);case"jsx":case"tsx":return M(["js","jsBlock","jsx"]);case"html":return M(["js","jsBlock","html"]);case"python":case"py":return M(["python"]);default:return M()}})(j),r=v.replace(/\n$/,"").split("\n");let a;for(let o=0;o<r.length;){const n=o+1,i=r[o].match(t);if(null!==i){switch(i.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${n},`;break;case"highlight-start":a=n;break;case"highlight-end":e+=`${a}-${n-1},`}r.splice(o,1)}else o+=1}h=y()(e),x=r.join("\n")}const L=()=>{!function(e,{target:t=document.body}={}){const r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let n=!1;o.rangeCount>0&&(n=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}r.remove(),n&&(o.removeAllRanges(),o.addRange(n)),a&&a.focus()}(x),l(!0),setTimeout((()=>l(!1)),2e3)};return n.a.createElement(f,Object(a.a)({},p,{key:String(m),theme:g,code:x,language:j}),(({className:e,style:t,tokens:r,getLineProps:o,getTokenProps:s})=>n.a.createElement("div",{className:k.a.codeBlockContainer},d&&n.a.createElement("div",{style:t,className:k.a.codeBlockTitle},d),n.a.createElement("div",{className:Object(i.a)(k.a.codeBlockContent,j)},n.a.createElement("div",{tabIndex:0,className:Object(i.a)(e,k.a.codeBlock,"thin-scrollbar",{[k.a.codeBlockWithTitle]:d})},n.a.createElement("div",{className:k.a.codeBlockLines,style:t},r.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const r=o({line:e,key:t});return h.includes(t+1)&&(r.className=`${r.className} docusaurus-highlight-code-line`),n.a.createElement("div",Object(a.a)({key:t},r),e.map(((e,t)=>n.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t}))))))})))),n.a.createElement("button",{ref:b,type:"button","aria-label":Object(w.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(k.a.copyButton),onClick:L},c?n.a.createElement(w.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):n.a.createElement(w.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);