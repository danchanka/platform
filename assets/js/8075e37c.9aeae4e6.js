(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{417:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),o=(n(0),n(750)),i={title:"How-to: Numbering"},u={unversionedId:"How-to_Numbering",id:"How-to_Numbering",isDocsHomePage:!1,title:"How-to: Numbering",description:"Let's suppose we have a set of books. For each of these books, we define a number as an integer.",source:"@site/docs/How-to_Numbering.md",slug:"/How-to_Numbering",permalink:"/platform/docs/next/How-to_Numbering",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_Numbering.md",version:"current",sidebar:"docs",previous:{title:"How-to: Registers",permalink:"/platform/docs/next/How-to_Registers"},next:{title:"How-to: Using objects as templates",permalink:"/platform/docs/next/How-to_Using_objects_as_templates"}},s=[],l={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's suppose we have a set of books. For each of these books, we define a number as an integer."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nnumber 'Number' = DATA INTEGER (Book) IN id;\nname 'Name' = DATA ISTRING[50] (Book) IN id;\n")),Object(o.b)("p",null,"We implement a property that will find a book by its number. It can be useful, for example, for importing data where each book is identified by a number. It can be used to get a link to a book object by getting its number as a parameter."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"book (INTEGER number) = GROUP AGGR Book b BY number(b);\n\nbookExists (INTEGER number)  {\n    IF book(number) THEN\n        MESSAGE 'The book with the number ' + number + ' exists. Its name : ' + name(book(number));\n    ELSE\n        MESSAGE 'The book with the number ' + number + ' does not exist';\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Grouping_GROUP_"},"GROUP AGGR")," operator automatically adds a constraint on the uniqueness of the number. If you try to save the same number to the database, you will get an error message."),Object(o.b)("p",null,"Let's add an ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Events"},"event")," that will automatically number books by increasing the maximum number existing in the database."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"WHEN SET(Book b IS Book) AND NOT number(b) DO {\n    number(b) <- (GROUP MAX number(Book bb)) (+) 1;\n}\n")),Object(o.b)("p",null,"The event will be triggered at the moment of saving a book to the database in the same transaction."),Object(o.b)("p",null,"In some situations, you may need to apply different numbering for the same object. For this purpose, you can add a special ",Object(o.b)("strong",{parentName:"p"},"Numerator")," class."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Numerator 'Numerator';\nname 'Name' = DATA ISTRING[50] (Numerator) IN id;\n\nvalue = DATA INTEGER (Numerator);\n")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"value")," property will store the current value of the numerator that will be written to the number of the necessary object. To achieve this, a reference to a particular numerator is set for an object (for example, an order). If such a reference is specified at the time of object creation, you need to automatically assign the numerator's current value increased by one to the order number."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\nnumber 'Number' = DATA INTEGER (Order) IN id;\n\nnumerator 'Numerator' = DATA Numerator (Order);\nWHEN CHANGED(numerator(Order o)) AND NOT CHANGED(number(o)) DO {\n    number(o) <- value(numerator(o));\n    value (Numerator n) <- value(n) (+) 1 WHERE n == numerator(o);\n}\n")),Object(o.b)("p",null,"The event conditions check if the number has been changed in order to avoid changing it if the user specified it manually (or if it was assigned during import)."),Object(o.b)("p",null,'An important difference between the numerator and "assigning the maximum value plus one" is the support of the simultaneous object creation. In this case, if two users simultaneously create objects, the last started saving user will get a message about number duplication and will need to manually re-save it. Changes made in all events in this way will be "rolled back" and re-saving will generate a new number. If you use a numerator, the last user\'s transaction will get a CONFLICT UPDATE on the ',Object(o.b)("strong",{parentName:"p"},"value")," field for the numerator (since both transactions change the field of the same row in the database). The system will then automatically roll back the transaction and all the changes made in the event and will start processing it again without the user's involvement. This way, the user will only experience slower data saving (up two times slower), but no additional actions will be required."),Object(o.b)("p",null,"You can define a default numerator with property without arguments so that the user does not have to select a numerator every time. After that, you can create an event that will automatically set the numerator if the user doesn't choose it manually."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"defaultNumerator 'Default numerator' = DATA Numerator();\n\nWHEN SET(Order o IS Order) AND NOT CHANGED(numerator(o)) DO\n    numerator(o) <- defaultNumerator();\n")))}c.isMDXComponent=!0},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(n),p=r,d=b["".concat(i,".").concat(p)]||b[p]||m[p]||o;return n?a.a.createElement(d,u(u({ref:t},l),{},{components:n})):a.a.createElement(d,u({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);