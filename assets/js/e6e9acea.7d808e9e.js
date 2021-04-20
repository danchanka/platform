(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{672:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(747)),i={title:"Data import (IMPORT)"},p={unversionedId:"Data_import_IMPORT_",id:"version-v4/Data_import_IMPORT_",isDocsHomePage:!1,title:"Data import (IMPORT)",description:"The data import operator creates an action which reads a file from the value of some property, then, depending on its format, defines the columns (fields) of data in this file, after which it writes the value of each column (field) to the corresponding property (parameter) - import assignment. The mapping of columns to properties can go in either column or name order.",source:"@site/versioned_docs/version-v4/Data_import_IMPORT_.md",slug:"/Data_import_IMPORT_",permalink:"/platform/Data_import_IMPORT_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Data_import_IMPORT_.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Write file (WRITE)",permalink:"/platform/Write_file_WRITE_"},next:{title:"Data export (EXPORT)",permalink:"/platform/Data_export_EXPORT_"}},l=[{value:"General case",id:"general-case",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"data import "),"operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," which reads a file from the value of some ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"property"),", then, depending on its ",Object(o.b)("a",{parentName:"p",href:"/platform/Structured_view"},"format"),", defines the columns (fields) of data in this file, after which it ",Object(o.b)("a",{parentName:"p",href:"/platform/Property_change_CHANGE_"},"writes")," the value of each column (field) to the corresponding property (parameter) - import ",Object(o.b)("em",{parentName:"p"},"assignment"),". The mapping of columns to properties can go in either column or name order."),Object(o.b)("p",null,"Rows, in turn, are mapped during import to objects of specified classes (let's call these objects ",Object(o.b)("em",{parentName:"p"},"imported"),"). In the current platform implementation, there can be at most one object and the specified class must be either ",Object(o.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"numeric")," or a ",Object(o.b)("a",{parentName:"p",href:"/platform/User_classes#abstract"},"specific user-defined class"),". Rows are mapped to the imported object as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"for numeric classes: all imported rows are numbered in the order in which they appear in the file (starting from 0)."),Object(o.b)("li",{parentName:"ul"},"for specific user-defined classes: ",Object(o.b)("a",{parentName:"li",href:"/platform/New_object_NEW_"},"a new object")," of the specified class is created for each row.")),Object(o.b)("p",null,"You can also define an import ",Object(o.b)("em",{parentName:"p"},"condition"),": this is a property in which the ",Object(o.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"default value")," of the property value class is written for each row (as opposed to import destination in which column values are written)."),Object(o.b)("h3",{id:"general-case"},"General case"),Object(o.b)("p",null,"It should be noted that data import is a special case of (syntactic sugar for) ",Object(o.b)("a",{parentName:"p",href:"/platform/In_a_structured_view_EXPORT_IMPORT_#importForm"},"form import"),", in which the imported form is created automatically and consists of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"one ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#objects"},"group of objects")," named ",Object(o.b)("strong",{parentName:"li"},"value")," whose objects correspond to imported objects (not created if there are no imported objects)"),Object(o.b)("li",{parentName:"ul"},"imported properties. The ",Object(o.b)("a",{parentName:"li",href:"/platform/Form_structure#propertygroup-broken"},"property group")," for the properties that are created on the form is the ",Object(o.b)("a",{parentName:"li",href:"/platform/Groups_of_properties_and_actions#builtin"},"builtin")," group ",Object(o.b)("strong",{parentName:"li"},"System.private"),"."),Object(o.b)("li",{parentName:"ul"},"a filter equal to the defined condition.")),Object(o.b)("p",null,"Accordingly, the behavior of the data import operator (for example, determining the names of the resulting columns / keys, ",Object(o.b)("a",{parentName:"p",href:"/platform/Structured_view#value"},"processing of ",Object(o.b)("strong",{parentName:"a"},"value")),", etc.) is completely determined by the behavior of the form import operator (as if the above form were passed to it as a parameter)."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that imports data, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/IMPORT_operator"},Object(o.b)("strong",{parentName:"a"},"IMPORT")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"import()  {\n\n    LOCAL xlsFile = EXCELFILE ();\n\n    LOCAL field1 = BPSTRING[50] (INTEGER);\n    LOCAL field2 = BPSTRING[50] (INTEGER);\n    LOCAL field3 = BPSTRING[50] (INTEGER);\n    LOCAL field4 = BPSTRING[50] (INTEGER);\n\n    LOCAL headField1 = BPSTRING[50] ();\n    LOCAL headField2 = BPSTRING[50] ();\n\n    INPUT f = EXCELFILE DO {\n        IMPORT XLS SHEET 2 FROM f TO field1 = C, field2, field3 = F, field4 = A;\n        IMPORT XLS SHEET ALL FROM f TO field1 = C, field2, field3 = F, field4 = A;\n\n        FOR imported(INTEGER i) DO { // imported property - a system property for iterating data\n            MESSAGE 'field1 value = ' + field1(i);\n            MESSAGE 'field2 value = ' + field2(i);\n            MESSAGE 'field3 value = ' + field3(i);\n            MESSAGE 'field4 value = ' + field4(i);\n       }\n    }\n\n    LOCAL t = FILE ();\n    EXTERNAL SQL 'jdbc:postgresql://localhost/test?user=postgres&password=12345' EXEC 'SELECT x.a,x.b,x.c,x.d FROM orders x WHERE x.id = $1;' PARAMS '4553' TO t;\n    IMPORT FROM t() FIELDS INTEGER a, DATE b, BPSTRING[50] c, BPSTRING[50] d DO        // import with FIELDS option\n        NEW o = Order {\n            number(o) <- a;\n            date(o) <- b;\n            customer(o) <- c;\n            currency(o) <- GROUP MAX Currency currency IF name(currency) = d; // finding currency with this name\n        }\n\n\n    INPUT f = FILE DO\n        IMPORT CSV '*' HEADER CHARSET 'utf-8' FROM f TO field1 = C, field2, field3 = F, field4 = A;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ROOT 'element' ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO() headField1, headField2;\n\n    INPUT f = FILE DO\n        INPUT memo = FILE DO\n            IMPORT DBF MEMO memo FROM f TO field1 = 'DBFField1', field2 = 'DBFField2';\n}\n")))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},f=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,u=f["".concat(i,".").concat(d)]||f[d]||m[d]||o;return r?n.a.createElement(u,p(p({ref:t},c),{},{components:r})):n.a.createElement(u,p({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);