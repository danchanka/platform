(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{272:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),c=(a(0),a(746)),o={title:"How-to: Inheritance and aggregation"},i={unversionedId:"How-to_Inheritance_and_aggregation",id:"version-v4/How-to_Inheritance_and_aggregation",isDocsHomePage:!1,title:"How-to: Inheritance and aggregation",description:"In order to demonstrate the principles of object inheritance and aggregation, let's implement the logic of creating batches based on receipts and production documents. Let's make it so that each new document with a Posted property will automatically generate exactly one new product batch.",source:"@site/versioned_docs/version-v4/How-to_Inheritance_and_aggregation.md",slug:"/How-to_Inheritance_and_aggregation",permalink:"/platform/How-to_Inheritance_and_aggregation",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/How-to_Inheritance_and_aggregation.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"How-to: Constraints",permalink:"/platform/How-to_Constraints"},next:{title:"How-to: Searching for elements",permalink:"/platform/How-to_Searching_for_elements"}},s=[],p={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In order to demonstrate the principles of object inheritance and aggregation, let's implement the logic of creating batches based on receipts and production documents. Let's make it so that each new document with a Posted property will automatically generate exactly one new product batch."),Object(c.b)("p",null,"Let's update our logic with the notion of a product whose batches will be accounted for:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Item 'Product';\nname 'Name' = DATA ISTRING[50] (Item) IN id;\nFORM items 'Products'\n    OBJECTS i = Item\n    PROPERTIES(i) name, NEW, DELETE\n;\nNAVIGATOR {\n    NEW items;\n}\n")),Object(c.b)("p",null,"Let's create a ",Object(c.b)("strong",{parentName:"p"},"Receipt")," ",Object(c.b)("a",{parentName:"p",href:"/platform/User_classes"},"class")," with objects that will indicate the receipt of products:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Receipt 'Arrival';\ndate 'Date' = DATA DATE (Receipt) IN id;\nitem 'Product' = DATA Item (Receipt);\nnameItem 'Product' (Receipt r) = name(item(r)) IN id;\nposted 'Completed' = DATA BOOLEAN (Receipt);\n\nFORM receipts 'Arrivals'\n    OBJECTS r = Receipt\n    PROPERTIES(r) date, nameItem, posted, NEW, DELETE\n;\nNAVIGATOR {\n    NEW receipts;\n}\n")),Object(c.b)("p",null,"For the purposes of this example, let's use a simplified scheme with a single class. In reality, you would be using two classes: ",Object(c.b)("strong",{parentName:"p"},"Receipt"),"\xa0(for documents) and ",Object(c.b)("strong",{parentName:"p"},"ReceiptDetail\xa0"),"(for document lines)."),Object(c.b)("p",null,"In a similar way, let's create a Production class to be used for manufactured products:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Production 'Production';\ndate 'Date' = DATA DATE (Production) IN id;\nitem 'Product' = DATA Item (Production);\nnameItem 'Product' (Production p) = name(item(p)) IN id;\nposted 'Completed' = DATA BOOLEAN (Production);\n\nFORM productions 'Production'\n    OBJECTS p = Production\n    PROPERTIES(p) date, nameItem, posted, NEW, DELETE\n;\nNAVIGATOR {\n    NEW productions;\n}\n")),Object(c.b)("p",null,"So far, we've been only creating regular classes without any inheritance. To implement the batch logic, let's create an abstract class called ",Object(c.b)("strong",{parentName:"p"},"Batch"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Batch 'Batch';\ndate 'Date' = ABSTRACT DATE (Batch) IN id;\nitem 'Product' = ABSTRACT Item (Batch);\nnameItem 'Product' (Batch b) = name(item(b));\ntype 'Type' = ABSTRACT STRING[30] (Batch);\n\nFORM batches 'Batches'\n    OBJECTS b = Batch\n    PROPERTIES(b) READONLY date, nameItem, type, objectClassName\n;\nNAVIGATOR {\n    NEW batches;\n}\n")),Object(c.b)("p",null,"Each object of this class will correspond to one batch of a particular product. All of its ",Object(c.b)("a",{parentName:"p",href:"/platform/Properties"},"properties")," will be declared abstract \u2014 that is, their implementation will differ depending on the class of a particular batch."),Object(c.b)("p",null,"You cannot directly create objects of the abstract ",Object(c.b)("strong",{parentName:"p"},"Batch")," class in the system. To do that, you need to declare specific classes that will be inherited from it. In particular, let's create a class for batches formed from the receipt of products:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ReceiptBatch 'Arrival based batch';\nbatch (Receipt receipt) = AGGR ReceiptBatch WHERE posted(receipt);\n")),Object(c.b)("p",null,"Use the ",Object(c.b)("a",{parentName:"p",href:"/platform/AGGR_operator"},"AGGR")," operator for each object of the ",Object(c.b)("strong",{parentName:"p"},"Receipt"),",\xa0 class with a defined ",Object(c.b)("strong",{parentName:"p"},"posted")," property to automatically create (and delete) an object of the ",Object(c.b)("strong",{parentName:"p"},"ReceiptBatch")," class. At this time, the system creates two properties with reciprocal object links: ",Object(c.b)("strong",{parentName:"p"},"batch(Receipt r)")," and ",Object(c.b)("strong",{parentName:"p"},"receipt(ReceiptBatch b)"),"."),Object(c.b)("p",null,"Now we need to inherit the ",Object(c.b)("strong",{parentName:"p"},"ReceiptBatch")," class from ",Object(c.b)("strong",{parentName:"p"},"Batch")," to make sure that all batches created by the receipt document also become objects of the abstract class (that is, previously declared batches):"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"EXTEND CLASS ReceiptBatch : Batch;\ndate(ReceiptBatch rb) += date(receipt(rb));\nitem(ReceiptBatch rb) += item(receipt(rb));\ntype(ReceiptBatch rb) += 'Arrival' IF rb IS ReceiptBatch;\n")),Object(c.b)("p",null,"Inheritance is implemented with the help of the ",Object(c.b)("a",{parentName:"p",href:"/platform/EXTEND_CLASS_instruction"},"EXTEND CLASS")," operator.\xa0After that, for each abstract property of ",Object(c.b)("strong",{parentName:"p"},"Batch"),", we define how exactly it should be calculated for a specific ",Object(c.b)("strong",{parentName:"p"},"ReceiptBatch")," class. Date and product values are retrieved from the receipt document through the ",Object(c.b)("strong",{parentName:"p"},"receipt(ReceiptBatch b)")," link. The necessary string is substituted into the batch type under the condition that the object belongs to the right class (otherwise, the expression will be defined for objects of any class, and the system will generate a signature mismatch error)."),Object(c.b)("p",null,"Note that you could inherit a class directly while declaring the ",Object(c.b)("strong",{parentName:"p"},"ReceiptBatch")," class."),Object(c.b)("p",null,"In a similar fashion, let's create batches for manufacturing documents:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ProductionBatch 'Production based batch';\nbatch (Production production) = AGGR ProductionBatch WHERE posted(production);\n\nEXTEND CLASS ProductionBatch : Batch;\ndate(ProductionBatch rb) += date(production(rb));\nitem(ProductionBatch rb) += item(production(rb));\ntype(ProductionBatch rb) += 'Production' IF rb IS ProductionBatch;\n")),Object(c.b)("p",null,"If necessary, you can create a class for manual batch entry by the user:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS UserBatch 'Manually created batch';\ndate 'Date' = DATA DATE (UserBatch) IN id;\nitem 'Product' = DATA Item (UserBatch);\nnameItem 'Product' (UserBatch b) = name(item(b));\n\nFORM userBatches 'Batches (manual)'\n    OBJECTS b = UserBatch\n    PROPERTIES(b) date, nameItem, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW userBatches;\n}\n\nEXTEND CLASS UserBatch : Batch;\ndate(UserBatch ub) += date(ub);\nitem(UserBatch ub) += item(ub);\ntype(UserBatch ub) += 'Manual' IF ub IS UserBatch;\n")))}l.isMDXComponent=!0},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(a),u=n,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||c;return a?r.a.createElement(m,i(i({ref:t},p),{},{components:a})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);