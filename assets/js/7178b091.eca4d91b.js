(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{382:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),o=a(7),r=(a(0),a(746)),i={title:"Migration"},s={unversionedId:"Migration",id:"version-v4/Migration",isDocsHomePage:!1,title:"Migration",description:"An lsFusion-based information system uses a relational database management system for permanent data storage. It should be remembered that after certain changes to the system logic, the platform is unable to determine how the data should be migrated. In these cases, the developer must explicitly define the migration method by creating the special migration file migration.script, which should be in the CLASSPATH of the application server.",source:"@site/versioned_docs/version-v4/Migration.md",slug:"/Migration",permalink:"/platform/Migration",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Migration.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Eval (EVAL)",permalink:"/platform/Eval_EVAL_"},next:{title:"Internationalization",permalink:"/platform/Internationalization"}},c=[{value:"Changing the name of a property or action",id:"changing-the-name-of-a-property-or-action",children:[]},{value:"Changing the name of a property/action on a form",id:"changing-the-name-of-a-propertyaction-on-a-form",children:[]},{value:"Changing the name of a custom class",id:"changing-the-name-of-a-custom-class",children:[]},{value:"Changing the name of a static object",id:"changing-the-name-of-a-static-object",children:[]},{value:"Changing the name of a table",id:"changing-the-name-of-a-table",children:[]},{value:"Changing the name of a navigator element",id:"changing-the-name-of-a-navigator-element",children:[]},{value:"Changing the name of a namespace",id:"changing-the-name-of-a-namespace",children:[]},{value:"Example",id:"example",children:[]},{value:"migration.script",id:"migrationscript",children:[]}],m={toc:c};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"An ",Object(r.b)("strong",{parentName:"p"},"lsFusion"),"-based information system uses a relational database management system for permanent data storage. It should be remembered that after certain changes to the system logic, the platform is unable to determine how the data should be migrated. In these cases, the developer must explicitly define the migration method by creating the special ",Object(r.b)("em",{parentName:"p"},"migration file")," ",Object(r.b)("strong",{parentName:"p"},"migration.script"),", which should be in the CLASSPATH of the application server."),Object(r.b)("p",null,"The migration file consists of blocks describing the changes made in the specified version of the database structure. At server startup, all changes from the migration file that have a version higher than the version stored in the database are applied. Changes are applied according to the version, from the lowest version to the highest. If the database structure is changed successfully, the maximum version of all applied blocks is written to the database as the current one. The syntax for the description of each block is as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"V<version number> {\n    change1\n    ...\n    changeN \n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"version number")," is a set of one or more numbers separated by a dot. When comparing the numbers of two versions, the first numbers of the versions are compared first, then if equal the second are compared, and so on. If one version contains fewer numbers than another, during comparison zeros are added to the a version with fewer numbers. For example, version number ",Object(r.b)("strong",{parentName:"p"},"1.3")," is equivalent to number ",Object(r.b)("strong",{parentName:"p"},"1.3.0.0"),", and version ",Object(r.b)("strong",{parentName:"p"},"1.2")," is higher than version ",Object(r.b)("strong",{parentName:"p"},"1.1.3"),". In the migration file, the version number is indicated with a capital letter ",Object(r.b)("strong",{parentName:"p"},"V"),": ",Object(r.b)("strong",{parentName:"p"},"V1.0"),", ",Object(r.b)("strong",{parentName:"p"},"V2.0.11"),"."),Object(r.b)("p",null,"The migration file allows you to handle changes to ",Object(r.b)("a",{parentName:"p",href:"/platform/Naming#canonicalname"},"canonical names"),"\xa0of system elements, which occur when renaming and/or transferring to another namespace. Changes are of the following types:\xa0"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"PROPERTY oldNS.oldName[class1,...,classN] -> newNS.newName[class1,...,classN]\nSTORED PROPERTY oldNS.oldName[class1,...,classN] -> newNS.newName[class1,...,classN]\nFORM PROPERTY oldNS.oldFormName.oldName(object1,...,objectN) -> newNS.newFormName.newName(object1,...,objectN)  \nCLASS oldNS.oldName -> newNS.newName\nOBJECT oldNS.oldClassName.oldName -> newNS.newClassName.newName\nTABLE oldNS.oldName -> newNS.newName\nNAVIGATOR oldNS.oldName -> newNS.newName\n")),Object(r.b)("h3",{id:"changing-the-name-of-a-property-or-action"},"Changing the name of a property or action"),Object(r.b)("p",null,"When renaming a\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/Properties"},"property"),"/",Object(r.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," and/or when moving it to another ",Object(r.b)("a",{parentName:"p",href:"/platform/Naming#namespace"},"namespace"),", the canonical name of the property/action changes. Adding a\xa0",Object(r.b)("strong",{parentName:"p"},"PROPERTY\xa0"),"change to the migration file specifying the old and new canonical names will allow you to preserve the security policy settings, as well as settings from the ",Object(r.b)("strong",{parentName:"p"},"Reflection.properties")," table. If the property is ",Object(r.b)("a",{parentName:"p",href:"/platform/Data_properties_DATA_"},"primary"),", to preserve data when changing the canonical name of this property\xa0",Object(r.b)("strong",{parentName:"p"},"it is necessary")," to add\xa0a ",Object(r.b)("strong",{parentName:"p"},"STORED PROPERTY")," change. Then,\xa0when the server starts, the field corresponding to this property in the database table will be renamed.\xa0Otherwise, the old field will be renamed to the field with the name\xa0",Object(r.b)("strong",{parentName:"p"},"<old ID",">","_","deleted")," (for example, when deleting a property), and a new field will be created with empty values. Apart from that the ",Object(r.b)("strong",{parentName:"p"},"STORED PROPERTY"),"\xa0type is equivalent to the ",Object(r.b)("strong",{parentName:"p"},"PROPERTY")," type."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"On the right side of ",Object(r.b)("strong",{parentName:"p"},"STORED PROPERTY")," and ",Object(r.b)("strong",{parentName:"p"},"PROPERTY")," changes it is not necessary to specify a signature, as here the signature is automatically taken from the left side."))),Object(r.b)("h3",{id:"changing-the-name-of-a-propertyaction-on-a-form"},"Changing the name of a property/action on a form"),Object(r.b)("p",null,"When changing\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/Properties_and_actions_block#name-broken"},"the name of the property on a form"),"\xa0using the migration file, you can preserve information from the table settings for this property/action on the form. For this, the ",Object(r.b)("strong",{parentName:"p"},"FORM PROPERTY")," change type is used. The old and new names are the name of the form namespace, the name of the form, and the name of the property on the form, separated by dots. Also, using this type of change you can preserve information from the table settings when changing the canonical name of the form. To do this, add ",Object(r.b)("strong",{parentName:"p"},"FORM PROPERTY")," changes to the migration file for all properties/actions on the form with the changed canonical name of the form."),Object(r.b)("h3",{id:"changing-the-name-of-a-custom-class"},"Changing the name of a custom class"),Object(r.b)("p",null,"When renaming a\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/User_classes"},"custom class")," and/or when moving it to another namespace, the canonical name of this class changes. In this case, it is ",Object(r.b)("strong",{parentName:"p"},"essential")," to reflect these changes in the migration file\xa0in order to preserve objects of this class and all data associated with these objects. To do this, add a ",Object(r.b)("strong",{parentName:"p"},"CLASS")," change to the migration file, specifying the old and new class names. This will also automatically rename ",Object(r.b)("a",{parentName:"p",href:"/platform/Static_objects"},"static objects")," of this class, if they exist.\xa0"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"It is worth noting that changing the canonical name of a class can lead to changes in the canonical names of data properties. At present these changes are not automatically tracked, and they must also be added to the migration file."))),Object(r.b)("h3",{id:"changing-the-name-of-a-static-object"},"Changing the name of a static object"),Object(r.b)("p",null,"When renaming a ",Object(r.b)("a",{parentName:"p",href:"/platform/Static_objects"},"static object"),", an ",Object(r.b)("strong",{parentName:"p"},"OBJECT")," change is used, which allows you to preserve data associated with the object. The old and new names are the name of the class namespace, the name of the class, and the name of the object, separated by dots.\xa0"),Object(r.b)("h3",{id:"changing-the-name-of-a-table"},"Changing the name of a table"),Object(r.b)("p",null,"When renaming a ",Object(r.b)("a",{parentName:"p",href:"/platform/Tables"},"table")," and/or when moving it to another namespace, the canonical name of this table changes. In this case, after creating a table with a new name, the system automatically moves all the records from the table with the old name in a separate request. However, if you add a ",Object(r.b)("strong",{parentName:"p"},"TABLE"),"\xa0change to the migration file, specifying the old and new canonical table names, a query will be executed to rename the old table, which will be significantly faster."),Object(r.b)("h3",{id:"changing-the-name-of-a-navigator-element"},"Changing the name of a navigator element"),Object(r.b)("p",null,"When renaming a ",Object(r.b)("a",{parentName:"p",href:"/platform/Navigator"},"navigator element"),"\xa0and/or when moving it to another namespace, the canonical name of this element changes. In order to preserve the security policy settings associated with this element,\xa0add a\xa0",Object(r.b)("strong",{parentName:"p"},"NAVIGATOR"),"\xa0change to the migration file, specifying the old and new canonical names of the navigator element.\xa0"),Object(r.b)("h3",{id:"changing-the-name-of-a-namespace"},"Changing the name of a namespace"),Object(r.b)("p",null,"Since the name of a namespace is used in the canonical names of system elements, changing it causes the canonical names of the system elements included in it to change. Therefore, if a namespace name is changed, information on all the above elements must be placed in the migration file. The same must be done when moving system elements to different namespaces."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("h3",{id:"migrationscript"},"migration.script"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"V0.3.1 {\n    STORED PROPERTY Item.gender[Item.Article] -> Item.dataGender[Item.Article] // change of DATA property \n    PROPERTY System.SIDProperty[Reflection.Property] -> Reflection.dbNameProperty[Reflection.Property] // parallel transferring to another namespace and changing of the property name\n    FORM PROPERTY Item.itemForm.name(i) -> Item.itemForm.itemName(i)\n}\n\xa0\nV0.4 {\n    FORM PROPERTY Document.documentForm.name(i) -> Document.itemForm.itemName(i)\n    FORM PROPERTY Item.itemForm.itemName(i) -> Item.itemForm.iname // adding of an explicit name for a property on a form\u0435: iname = itemName(i)\n    CLASS Date.DateInterval -> Date.Interval\n    OBJECT Geo.Direction.North -> Geo.Direction.north\n    TABLE User.oldTable -> User.newTable\n}\n")))}l.isMDXComponent=!0},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=o.a.createContext({}),l=function(e){var t=o.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),h=l(a),b=n,d=h["".concat(i,".").concat(b)]||h[b]||p[b]||r;return a?o.a.createElement(d,s(s({ref:t},m),{},{components:a})):o.a.createElement(d,s({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<r;m++)i[m]=a[m];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);