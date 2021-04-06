(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{484:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(749)),i={title:"Data import (IMPORT)"},p={unversionedId:"Data_import_IMPORT_",id:"Data_import_IMPORT_",isDocsHomePage:!1,title:"Data import (IMPORT)",description:"The data import\xa0operator creates an action which\xa0reads a file from the value of some property, then, depending on its format, defines the columns (fields) of data in this file, after which it writes the value of each column (field) to the corresponding property (parameter) - import assignment.\xa0The mapping of columns to properties can go in either column or name order.",source:"@site/docs/Data_import_IMPORT_.md",slug:"/Data_import_IMPORT_",permalink:"/platform/next/Data_import_IMPORT_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Data_import_IMPORT_.md",version:"current",sidebar:"learn",previous:{title:"Write file (WRITE)",permalink:"/platform/next/Write_file_WRITE_"},next:{title:"Data export (EXPORT)",permalink:"/platform/next/Data_export_EXPORT_"}},l=[{value:"General case",id:"general-case",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"data import\xa0"),"operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," which\xa0reads a file from the value of some ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"property"),", then, depending on its ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Structured_view"},"format"),", defines the columns (fields) of data in this file, after which it ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Property_change_CHANGE_"},"writes")," the value of each column (field) to the corresponding property (parameter) - import ",Object(o.b)("em",{parentName:"p"},"assignment"),".\xa0The mapping of columns to properties can go in either column or name order."),Object(o.b)("p",null,"Rows, in turn, are mapped during import to objects of specified classes (let's call these objects\xa0",Object(o.b)("em",{parentName:"p"},"imported"),"). In the current platform implementation, there can be at most one object and the specified class must be either ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Built-in_classes"},"numeric")," or a ",Object(o.b)("a",{parentName:"p",href:"/platform/next/User_classes#abstract"},"specific user-defined class"),". Rows are mapped to the imported object as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"for numeric classes: all imported\xa0rows are numbered in the order in which they appear in the file (starting from 0)."),Object(o.b)("li",{parentName:"ul"},"for\xa0specific\xa0user-defined classes: ",Object(o.b)("a",{parentName:"li",href:"/platform/next/New_object_NEW_"},"a new object"),"\xa0of the specified class is created for each row.")),Object(o.b)("p",null,"You can also define an import\xa0",Object(o.b)("em",{parentName:"p"},"condition"),":\xa0this is a property in which the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Built-in_classes"},"default value")," of the property value class is written for each row (as opposed to import destination in which column values are written)."),Object(o.b)("h3",{id:"general-case"},"General case"),Object(o.b)("p",null,"It should be noted that data import is a special case of (syntactic sugar for)\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/In_a_structured_view_EXPORT_IMPORT_#importForm"},"form import"),", in which the imported form is created automatically and consists of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"one\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/next/Form_structure#objects"},"group of objects"),"\xa0named ",Object(o.b)("strong",{parentName:"li"},"value")," whose objects correspond to imported objects (not created if there are no imported objects)"),Object(o.b)("li",{parentName:"ul"},"imported properties. The\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/next/Form_structure#propertygroup-broken"},"property group"),"\xa0for the properties that are created on the form is the ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Groups_of_properties_and_actions#builtin"},"builtin")," group ",Object(o.b)("strong",{parentName:"li"},"System.private"),"."),Object(o.b)("li",{parentName:"ul"},"a filter equal to the defined condition.")),Object(o.b)("p",null,"Accordingly, the behavior of the data import operator (for example, determining the names of the resulting columns / keys, ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Structured_view#value"},"processing of ",Object(o.b)("strong",{parentName:"a"},"value")),", etc.) is completely determined by the behavior of the form import operator (as if the above form were passed to it as a parameter)."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that imports data, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IMPORT_operator"},Object(o.b)("strong",{parentName:"a"},"IMPORT")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"import()  {\n\n    LOCAL xlsFile = EXCELFILE ();\n\n    LOCAL field1 = BPSTRING[50] (INTEGER);\n    LOCAL field2 = BPSTRING[50] (INTEGER);\n    LOCAL field3 = BPSTRING[50] (INTEGER);\n    LOCAL field4 = BPSTRING[50] (INTEGER);\n\n    LOCAL headField1 = BPSTRING[50] ();\n    LOCAL headField2 = BPSTRING[50] ();\n\n    INPUT f = EXCELFILE DO {\n        IMPORT XLS SHEET 2 FROM f TO field1 = C, field2, field3 = F, field4 = A;\n        IMPORT XLS SHEET ALL FROM f TO field1 = C, field2, field3 = F, field4 = A;\n\n        FOR imported(INTEGER i) DO { // imported property - a system property for iterating data\n            MESSAGE 'field1 value = ' + field1(i);\n            MESSAGE 'field2 value = ' + field2(i);\n            MESSAGE 'field3 value = ' + field3(i);\n            MESSAGE 'field4 value = ' + field4(i);\n       }\n    }\n\n    LOCAL t = FILE ();\n    EXTERNAL SQL 'jdbc:postgresql://localhost/test?user=postgres&password=12345' EXEC 'SELECT x.a,x.b,x.c,x.d FROM orders x WHERE x.id = $1;' PARAMS '4553' TO t;\n    IMPORT FROM t() FIELDS INTEGER a, DATE b, BPSTRING[50] c, BPSTRING[50] d DO        // import with FIELDS option\n        NEW o = Order {\n            number(o) <- a;\n            date(o) <- b;\n            customer(o) <- c;\n            currency(o) <- GROUP MAX Currency currency IF name(currency) = d; // finding currency with this name\n        }\n\n\n    INPUT f = FILE DO\n        IMPORT CSV '*' HEADER CHARSET 'utf-8' FROM f TO field1 = C, field2, field3 = F, field4 = A;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ROOT 'element' ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO() headField1, headField2;\n\n    INPUT f = FILE DO\n        INPUT memo = FILE DO\n            IMPORT DBF MEMO memo FROM f TO field1 = 'DBFField1', field2 = 'DBFField2';\n}\n")))}s.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},f=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,u=f["".concat(i,".").concat(d)]||f[d]||m[d]||o;return r?a.a.createElement(u,p(p({ref:t},c),{},{components:r})):a.a.createElement(u,p({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);