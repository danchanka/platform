(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{322:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(751)),a={title:"How-to: Working with documents"},c={unversionedId:"How-to_Working_with_documents",id:"How-to_Working_with_documents",isDocsHomePage:!1,title:"How-to: Working with documents",description:"Posting documents",source:"@site/docs/How-to_Working_with_documents.md",slug:"/How-to_Working_with_documents",permalink:"/platform/docs/next/How-to_Working_with_documents",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_Working_with_documents.md",version:"current",sidebar:"docs",previous:{title:"How-to: Use Cases: Overview",permalink:"/platform/docs/next/How-to_Use_Cases"},next:{title:"How-to: Registers",permalink:"/platform/docs/next/How-to_Registers"}},l=[{value:"Posting documents",id:"posting-documents",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Line selection",id:"line-selection",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Aggregated documents",id:"aggregated-documents",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],s={toc:l};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"posting-documents"},"Posting documents"),Object(i.b)("h3",{id:"condition"},"Condition"),Object(i.b)("p",null,"There is some logic for working with orders."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[10] (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n")),Object(i.b)("p",null,"An order edit form has been created for orders."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"FORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(i.b)("p",null,"Besides, a ",Object(i.b)("strong",{parentName:"p"},'"Posted"')," property has been added for orders. In the future, only orders with this property will take part in subsequent calculations (for example, calculation of the reserved quantity)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"posted 'Completed' = DATA BOOLEAN (Order);\nreserved 'Reserved' (Book b) = GROUP SUM quantity(OrderDetail d) IF posted(order(d)) BY book(d);\n\nEXTEND FORM order\n    PROPERTIES(o) posted\n;\n")),Object(i.b)("p",null,"We need to do so that instead of the\xa0",Object(i.b)("strong",{parentName:"p"},"\u041e\u041a")," button on the order form, there is a ",Object(i.b)("strong",{parentName:"p"},"Post")," button that simultaneously sets the ",Object(i.b)("strong",{parentName:"p"},"Posted")," property for the order, saves changes, and closes the form."),Object(i.b)("h3",{id:"solution"},"Solution"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"post 'Complete' (Order o)  { posted(o) <- TRUE; }\n\nEXTEND FORM order\n    EVENTS ON OK post(o)\n;\nDESIGN order {\n    PROPERTY(formOk()) {\n        caption = 'Complete';\n    }\n}\n")),Object(i.b)("p",null,"Each time the renamed ",Object(i.b)("strong",{parentName:"p"},"OK")," button is pressed, the ",Object(i.b)("strong",{parentName:"p"},"post"),' action will be executed in a single transaction. With this scheme, if the user wants to "post" a document, they just need to go to the edit form, uncheck the ',Object(i.b)("strong",{parentName:"p"},"Posted")," box in the document header, then click ",Object(i.b)("strong",{parentName:"p"},"Save")," and ",Object(i.b)("strong",{parentName:"p"},"Close"),"."),Object(i.b)("h2",{id:"line-selection"},"Line selection"),Object(i.b)("h3",{id:"condition-1"},"Condition"),Object(i.b)("p",null,"We have an order with an edit form similar to the ",Object(i.b)("strong",{parentName:"p"},"Posting documents")," example."),Object(i.b)("p",null,"We need to add a possibility to enter order lines by specifying the quantify in the table containing the list of products. Any changes in order lines and this table should be automatically synchronized with each other."),Object(i.b)("h3",{id:"solution-1"},"Solution"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"quantity 'Qty' (Order o, Book b) = GROUP SUM quantity(OrderDetail d) BY order(d), book(d);\nlastOrderDetail 'Last line' (Order o, Book b) = GROUP LAST OrderDetail d ORDER d BY order(d), book(d);\n\nchangeQuantity 'Change quantity' (Order o, Book b)  {\n    INPUT q = INTEGER DO { // requesting a number\n        IF lastOrderDetail(o, b) THEN { // checking if there is at least one row\n            IF q THEN // inputting a number\n                quantity(OrderDetail d) <- q IF d == lastOrderDetail(o, b) WHERE order(d) == o AND book(d) == b; // writing the quantity in the last row with such a book\n            ELSE // the number is dropped - deleting the row\n                DELETE OrderDetail d WHERE order(d) == o AND book(d) == b;\n        } ELSE\n            IF q THEN\n                NEW d = OrderDetail { // creating a new row\n                    order(d) <- o;\n                    book(d) <- b;\n                    quantity(d) <- q;\n                }\n    }\n}\n\nEXTEND FORM order\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY, quantity(o, b) ON CHANGE changeQuantity(o, b)\n;\n\nDESIGN order {\n    OBJECTS {\n        NEW pane { // creating a container after the order header\n            fill = 1;\n            type = TABBED;\n            MOVE BOX(d);\n            MOVE BOX(b) {\n                caption = 'Selection';\n            }\n        }\n    }\n}\n")),Object(i.b)("p",null,"The form will look like this:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(864).default}),Object(i.b)("img",{src:n(865).default})),Object(i.b)("p",null,"If the quantity changes on the ",Object(i.b)("strong",{parentName:"p"},"Selection"),"\xa0tab, the system will automatically change order lines. If the order lines are changed, the quantity on the ",Object(i.b)("strong",{parentName:"p"},"Selection")," tab will change as well."),Object(i.b)("p",null,"If an order has two or more lines with one book, the system will reset the quantity in the first lines and set the total in the last line. If you want the change to affect the last line only, you need to use the following action during saving:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"quantity(OrderDetail d) <- q WHERE d == lastOrderDetail(o, b);\n")),Object(i.b)("p",null,"However, users may not understand this behavior, since after they enter a particular quantity on the ",Object(i.b)("strong",{parentName:"p"},"Selection")," tab, the total quantity for all lines will be shown in the same column and it will be different from the entered value."),Object(i.b)("h2",{id:"aggregated-documents"},"Aggregated documents"),Object(i.b)("h3",{id:"condition-2"},"Condition"),Object(i.b)("p",null,"We have the order logic."),Object(i.b)("p",null,"We need to add some invoicing logic so that an order could automatically create a corresponding invoice."),Object(i.b)("h3",{id:"solution-2"},"Solution"),Object(i.b)("p",null,"In order to implement this logic, you need to create an abstract ",Object(i.b)("strong",{parentName:"p"},"Invoice")," ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Classes"},"class")," with the necessary set of ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Property_extension"},"abstract properties"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Invoice 'Invoice';\ndate 'Date' = ABSTRACT DATE (Invoice);\nnumber 'Number' = ABSTRACT STRING[10] (Invoice);\n\nCLASS ABSTRACT InvoiceDetail 'Invoice line';\ninvoice 'Invoice' = ABSTRACT Invoice (InvoiceDetail);\nbook 'Book' = ABSTRACT Book (InvoiceDetail);\n\nquantity 'Quantity' = ABSTRACT INTEGER (InvoiceDetail);\nprice 'Price' = ABSTRACT NUMERIC[14,2] (InvoiceDetail);\n")),Object(i.b)("p",null,"A form containing the list of objects of this abstract class is also created. It will contain the objects of all classes inherited from the ",Object(i.b)("strong",{parentName:"p"},"Invoice")," class."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"FORM invoices 'Invoices'\n    OBJECTS i = Invoice\n    PROPERTIES(i) READONLY date, number\n    PROPERTIES(i) NEWSESSION edit, DELETE\n;\n\nNAVIGATOR {\n    NEW invoices;\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"edit")," property will call the current object's edit form defined for its class. If it's not defined for the current object's class, no action will be taken. The ",Object(i.b)("strong",{parentName:"p"},"DELETE")," property will delete the current object if it doesn't violate any constrains."),Object(i.b)("p",null,"An object of an abstract class cannot exist in the system. In order for the user to manually create an invoice, a separate class ",Object(i.b)("strong",{parentName:"p"},"UserInvoice")," is created . Also, it requires the creation of properties symmetrical to the abstract ones that are later added as their implementation."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS UserInvoice 'Custom invoice' : Invoice;\ndate 'Date' = DATA DATE (UserInvoice);\nnumber 'Number' = DATA STRING[10] (UserInvoice);\n\nCLASS UserInvoiceDetail 'Custom invoice line' : InvoiceDetail;\nuserInvoice 'Custom invoice' = DATA UserInvoice (UserInvoiceDetail);\nbook 'Book' = DATA Book (UserInvoiceDetail);\nnameBook 'Book' (UserInvoiceDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (UserInvoiceDetail);\nprice 'Price' = DATA NUMERIC[14,2] (UserInvoiceDetail);\n\n// implementing invoice properties\ndate(UserInvoice i) += date(i);\nnumber(UserInvoice i) += number(i);\n\n// implementing the properties of the invoice lines\ninvoice (UserInvoiceDetail d) += userInvoice(d);\nbook (UserInvoiceDetail d) += book(d);\n\nquantity (UserInvoiceDetail d) += quantity(d);\nprice (UserInvoiceDetail d) += price(d);\n")),Object(i.b)("p",null,"Let's create a form for editing a user-generated invoice. Let's add a button for adding a user-generated invoice to the form with a list of abstract invoices."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"FORM userInvoice 'Invoice (custom)'\n    OBJECTS i = UserInvoice PANEL\n    PROPERTIES(i) date, number\n\n    OBJECTS d = UserInvoiceDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS userInvoice(d) == i\n\n    EDIT UserInvoice OBJECT i\n;\n\nEXTEND FORM invoices\n    PROPERTIES(i) NEWSESSION NEW[UserInvoice]\n;\n")),Object(i.b)("p",null,"For orders, let's create a ",Object(i.b)("strong",{parentName:"p"},"createInvoice")," option that will be used for generating an invoice. We will now need to create a ",Object(i.b)("strong",{parentName:"p"},"OrderInvoice")," class that will be inherited from ",Object(i.b)("strong",{parentName:"p"},"Invoice"),". An object of this class will be automatically created and deleted by the system for every order with the ",Object(i.b)("strong",{parentName:"p"},"createInvoice")," option. Therefore, this invoice is an ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Aggregations"},"aggregated object")," for the corresponding order. Aggregation for the invoice line relative to the order line is created identically."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"createInvoice 'Create invoice' = DATA BOOLEAN (Order);\nEXTEND FORM order PROPERTIES(o) createInvoice;\n\n// aggregated invoice\nCLASS OrderInvoice 'Invoice based on order' : Invoice;\norderInvoice = AGGR OrderInvoice WHERE createInvoice(Order order) MATERIALIZED INDEXED;\ndate(OrderInvoice i) += date(order(i));\nnumber(OrderInvoice i) += number(order(i));\n\n// aggregated invoice lines\ncreateInvoiceDetail 'Create invoice line' (OrderDetail d) = createInvoice(order(d));\n\nCLASS OrderInvoiceDetail 'Invoice line based on order' : InvoiceDetail;\norderInvoiceDetail = AGGR OrderInvoiceDetail WHERE createInvoiceDetail(OrderDetail orderDetail) MATERIALIZED INDEXED;\n\ninvoice (OrderInvoiceDetail d) += orderInvoice(order(orderDetail(d)));\nbook (OrderInvoiceDetail d) += book(orderDetail(d));\n\nquantity (OrderInvoiceDetail d) += quantity(orderDetail(d));\nprice (OrderInvoiceDetail d) += price(orderDetail(d));\n")),Object(i.b)("p",null,"We specify that an attempt to edit such an aggregated invoice will have to open the edit form for the associated order."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"edit(OrderInvoice i) + {  edit(order(i)); }\n")),Object(i.b)("p",null,"When you try to delete an invoice created for an order, you will see an error message."),Object(i.b)("p",null,"The fundamental difference between this aggregation approach and one based on generating an invoice against an order is that the system automatically ensures synchronization between orders and invoices. When creating order-based invoices, the user has to manually modify them if corresponding orders are changed. Otherwise, it will require a separate event handling mechanism that will be responsible for it."))}d.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(n),p=r,O=b["".concat(a,".").concat(p)]||b[p]||u[p]||i;return n?o.a.createElement(O,c(c({ref:t},s),{},{components:n})):o.a.createElement(O,c({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},864:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367490-6fa52edb76262e3073bb441f407952dd.png"},865:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367491-700a0f70aea96127095f971236f1e8c0.png"}}]);