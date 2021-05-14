(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10080],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(h,a(a({ref:n},c),{},{components:t})):r.createElement(h,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},17434:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a={title:"How-to: Working with documents"},l={unversionedId:"How-to_Working_with_documents",id:"version-v4/How-to_Working_with_documents",isDocsHomePage:!1,title:"How-to: Working with documents",description:"Posting documents",source:"@site/versioned_docs/version-v4/How-to_Working_with_documents.md",sourceDirName:".",slug:"/How-to_Working_with_documents",permalink:"/How-to_Working_with_documents",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Working_with_documents.md",version:"v4",lastUpdatedAt:1620392810,formattedLastUpdatedAt:"5/7/2021",frontMatter:{title:"How-to: Working with documents"},sidebar:"version-v4/learn",previous:{title:"How-to: Use Cases",permalink:"/How-to_Use_Cases"},next:{title:"How-to: Registers",permalink:"/How-to_Registers"}},s=[{value:"Posting documents",id:"posting-documents",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Line selection",id:"line-selection",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Aggregated documents",id:"aggregated-documents",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],d={toc:s};function c(e){var n=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"posting-documents"},"Posting documents"),(0,i.kt)("h3",{id:"task"},"Task"),(0,i.kt)("p",null,"There is some logic for working with orders."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[10] (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n")),(0,i.kt)("p",null,"An order edit form has been created for orders."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,i.kt)("p",null,"Besides, a ",(0,i.kt)("inlineCode",{parentName:"p"},"posted")," property has been added for orders. In the future, only orders with this property will take part in subsequent calculations (for example, calculation of the reserved quantity)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"posted 'Completed' = DATA BOOLEAN (Order);\nreserved 'Reserved' (Book b) = GROUP SUM quantity(OrderDetail d) IF posted(order(d)) BY book(d);\n\nEXTEND FORM order\n    PROPERTIES(o) posted\n;\n")),(0,i.kt)("p",null,"We need to do so that instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u041e\u041a")," button on the order form, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," button that simultaneously sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"posted")," property for the order, saves changes, and closes the form."),(0,i.kt)("h3",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"post 'Complete' (Order o)  { posted(o) <- TRUE; }\n\nEXTEND FORM order\n    EVENTS ON OK post(o)\n;\nDESIGN order {\n    PROPERTY(formOk()) {\n        caption = 'Complete';\n    }\n}\n")),(0,i.kt)("p",null,"Each time the renamed ",(0,i.kt)("inlineCode",{parentName:"p"},"OK")," button is pressed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"post"),' action will be executed in a single transaction. With this scheme, if the user wants to "post" a document, they just need to go to the edit form, uncheck the ',(0,i.kt)("inlineCode",{parentName:"p"},"Posted")," box in the document header, then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Close"),"."),(0,i.kt)("h2",{id:"line-selection"},"Line selection"),(0,i.kt)("h3",{id:"task-1"},"Task"),(0,i.kt)("p",null,"We have an order with an edit form similar to the ",(0,i.kt)("a",{parentName:"p",href:"#posting-documents"},(0,i.kt)("strong",{parentName:"a"},"Posting documents"))," example."),(0,i.kt)("p",null,"We need to add a possibility to enter order lines by specifying the quantify in the table containing the list of products. Any changes in order lines and this table should be automatically synchronized with each other."),(0,i.kt)("h3",{id:"solution-1"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"quantity 'Qty' (Order o, Book b) = GROUP SUM quantity(OrderDetail d) BY order(d), book(d);\nlastOrderDetail 'Last line' (Order o, Book b) = GROUP LAST OrderDetail d ORDER d BY order(d), book(d);\n\nchangeQuantity 'Change quantity' (Order o, Book b)  {\n    INPUT q = INTEGER DO { // requesting a number\n        IF lastOrderDetail(o, b) THEN { // checking if there is at least one row\n            IF q THEN // inputting a number\n                quantity(OrderDetail d) <- q IF d == lastOrderDetail(o, b) WHERE order(d) == o AND book(d) == b; // writing the quantity in the last row with such a book\n            ELSE // the number is dropped - deleting the row\n                DELETE OrderDetail d WHERE order(d) == o AND book(d) == b;\n        } ELSE\n            IF q THEN\n                NEW d = OrderDetail { // creating a new row\n                    order(d) <- o;\n                    book(d) <- b;\n                    quantity(d) <- q;\n                }\n    }\n}\n\nEXTEND FORM order\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY, quantity(o, b) ON CHANGE changeQuantity(o, b)\n;\n\nDESIGN order {\n    OBJECTS {\n        NEW pane { // creating a container after the order header\n            fill = 1;\n            type = TABBED;\n            MOVE BOX(d);\n            MOVE BOX(b) {\n                caption = 'Selection';\n            }\n        }\n    }\n}\n")),(0,i.kt)("p",null,"The form will look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(14966).Z}),(0,i.kt)("img",{src:t(70216).Z})),(0,i.kt)("p",null,"If the quantity changes on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Selection")," tab, the system will automatically change order lines. If the order lines are changed, the quantity on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Selection")," tab will change as well."),(0,i.kt)("p",null,"If an order has two or more lines with one book, the system will reset the quantity in the first lines and set the total in the last line. If you want the change to affect the last line only, you need to use the following action during saving:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"quantity(OrderDetail d) <- q WHERE d == lastOrderDetail(o, b);\n")),(0,i.kt)("p",null,"However, users may not understand this behavior, since after they enter a particular quantity on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Selection")," tab, the total quantity for all lines will be shown in the same column and it will be different from the entered value."),(0,i.kt)("h2",{id:"aggregated-documents"},"Aggregated documents"),(0,i.kt)("h3",{id:"task-2"},"Task"),(0,i.kt)("p",null,"We have the order logic."),(0,i.kt)("p",null,"We need to add some invoicing logic so that an order could automatically create a corresponding invoice."),(0,i.kt)("h3",{id:"solution-2"},"Solution"),(0,i.kt)("p",null,"In order to implement this logic, you need to create an abstract ",(0,i.kt)("inlineCode",{parentName:"p"},"Invoice")," ",(0,i.kt)("a",{parentName:"p",href:"/Classes"},"class")," with the necessary set of ",(0,i.kt)("a",{parentName:"p",href:"/Property_extension"},"abstract properties"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Invoice 'Invoice';\ndate 'Date' = ABSTRACT DATE (Invoice);\nnumber 'Number' = ABSTRACT STRING[10] (Invoice);\n\nCLASS ABSTRACT InvoiceDetail 'Invoice line';\ninvoice 'Invoice' = ABSTRACT Invoice (InvoiceDetail);\nbook 'Book' = ABSTRACT Book (InvoiceDetail);\n\nquantity 'Quantity' = ABSTRACT INTEGER (InvoiceDetail);\nprice 'Price' = ABSTRACT NUMERIC[14,2] (InvoiceDetail);\n")),(0,i.kt)("p",null,"A form containing the list of objects of this abstract class is also created. It will contain the objects of all classes inherited from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Invoice")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM invoices 'Invoices'\n    OBJECTS i = Invoice\n    PROPERTIES(i) READONLY date, number\n    PROPERTIES(i) NEWSESSION edit, DELETE\n;\n\nNAVIGATOR {\n    NEW invoices;\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," property will call the current object's edit form defined for its class. If it's not defined for the current object's class, no action will be taken. The ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," property will delete the current object if it doesn't violate any constrains."),(0,i.kt)("p",null,"An object of an abstract class cannot exist in the system. In order for the user to manually create an invoice, a separate class ",(0,i.kt)("inlineCode",{parentName:"p"},"UserInvoice")," is created . Also, it requires the creation of properties symmetrical to the abstract ones that are later added as their implementation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS UserInvoice 'Custom invoice' : Invoice;\ndate 'Date' = DATA DATE (UserInvoice);\nnumber 'Number' = DATA STRING[10] (UserInvoice);\n\nCLASS UserInvoiceDetail 'Custom invoice line' : InvoiceDetail;\nuserInvoice 'Custom invoice' = DATA UserInvoice (UserInvoiceDetail);\nbook 'Book' = DATA Book (UserInvoiceDetail);\nnameBook 'Book' (UserInvoiceDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (UserInvoiceDetail);\nprice 'Price' = DATA NUMERIC[14,2] (UserInvoiceDetail);\n\n// implementing invoice properties\ndate(UserInvoice i) += date(i);\nnumber(UserInvoice i) += number(i);\n\n// implementing the properties of the invoice lines\ninvoice (UserInvoiceDetail d) += userInvoice(d);\nbook (UserInvoiceDetail d) += book(d);\n\nquantity (UserInvoiceDetail d) += quantity(d);\nprice (UserInvoiceDetail d) += price(d);\n")),(0,i.kt)("p",null,"Let's create a form for editing a user-generated invoice. Let's add a button for adding a user-generated invoice to the form with a list of abstract invoices."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM userInvoice 'Invoice (custom)'\n    OBJECTS i = UserInvoice PANEL\n    PROPERTIES(i) date, number\n\n    OBJECTS d = UserInvoiceDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS userInvoice(d) == i\n\n    EDIT UserInvoice OBJECT i\n;\n\nEXTEND FORM invoices\n    PROPERTIES(i) NEWSESSION NEW[UserInvoice]\n;\n")),(0,i.kt)("p",null,"For orders, let's create a ",(0,i.kt)("inlineCode",{parentName:"p"},"createInvoice")," option that will be used for generating an invoice. We will now need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderInvoice")," class that will be inherited from ",(0,i.kt)("inlineCode",{parentName:"p"},"Invoice"),". An object of this class will be automatically created and deleted by the system for every order with the ",(0,i.kt)("inlineCode",{parentName:"p"},"createInvoice")," option. Therefore, this invoice is an ",(0,i.kt)("a",{parentName:"p",href:"/Aggregations"},"aggregated object")," for the corresponding order. Aggregation for the invoice line relative to the order line is created identically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"createInvoice 'Create invoice' = DATA BOOLEAN (Order);\nEXTEND FORM order PROPERTIES(o) createInvoice;\n\n// aggregated invoice\nCLASS OrderInvoice 'Invoice based on order' : Invoice;\norderInvoice = AGGR OrderInvoice WHERE createInvoice(Order order) MATERIALIZED INDEXED;\ndate(OrderInvoice i) += date(order(i));\nnumber(OrderInvoice i) += number(order(i));\n\n// aggregated invoice lines\ncreateInvoiceDetail 'Create invoice line' (OrderDetail d) = createInvoice(order(d));\n\nCLASS OrderInvoiceDetail 'Invoice line based on order' : InvoiceDetail;\norderInvoiceDetail = AGGR OrderInvoiceDetail WHERE createInvoiceDetail(OrderDetail orderDetail) MATERIALIZED INDEXED;\n\ninvoice (OrderInvoiceDetail d) += orderInvoice(order(orderDetail(d)));\nbook (OrderInvoiceDetail d) += book(orderDetail(d));\n\nquantity (OrderInvoiceDetail d) += quantity(orderDetail(d));\nprice (OrderInvoiceDetail d) += price(orderDetail(d));\n")),(0,i.kt)("p",null,"We specify that an attempt to edit such an aggregated invoice will have to open the edit form for the associated order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"edit(OrderInvoice i) + {  edit(order(i)); }\n")),(0,i.kt)("p",null,"When you try to delete an invoice created for an order, you will see an error message."),(0,i.kt)("p",null,"The fundamental difference between this aggregation approach and one based on generating an invoice against an order is that the system automatically ensures synchronization between orders and invoices. When creating order-based invoices, the user has to manually modify them if corresponding orders are changed. Otherwise, it will require a separate event handling mechanism that will be responsible for it."))}c.isMDXComponent=!0},14966:function(e,n,t){"use strict";n.Z=t.p+"assets/images/How-to_Working_with_documents_line-6fa52edb76262e3073bb441f407952dd.png"},70216:function(e,n,t){"use strict";n.Z=t.p+"assets/images/How-to_Working_with_documents_select-700a0f70aea96127095f971236f1e8c0.png"}}]);