(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{501:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(747)),l={title:"Materials management"},c={unversionedId:"Materials_management",id:"version-v4/Materials_management",isDocsHomePage:!1,title:"Materials management",description:'Description of the "Materials management" task',source:"@site/versioned_docs/version-v4/Materials_management.md",slug:"/Materials_management",permalink:"/platform/Materials_management",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Materials_management.md",version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"4/29/2021",sidebar:"version-v4/learn",previous:{title:"Score table",permalink:"/platform/Score_table"},next:{title:"How-to",permalink:"/platform/How-to"}},o=[{value:"Description of the &quot;Materials management&quot; task",id:"description-of-the-materials-management-task",children:[]},{value:"Defining domain logic",id:"defining-domain-logic",children:[{value:"Defining a stock",id:"defining-a-stock",children:[]},{value:"Defining an item",id:"defining-an-item",children:[]},{value:"Defining a legal entity",id:"defining-a-legal-entity",children:[]},{value:"Defining a receipt",id:"defining-a-receipt",children:[]},{value:"Defining a shipment",id:"defining-a-shipment",children:[]},{value:"Defining current item balance",id:"defining-current-item-balance",children:[]}]},{value:"Defining view logic",id:"defining-view-logic",children:[]},{value:"The complete source code (on Github)",id:"the-complete-source-code-on-github",children:[]}],s={toc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description-of-the-materials-management-task"},'Description of the "Materials management" task'),Object(r.b)("p",null,"The information system being created using the ",Object(r.b)("strong",{parentName:"p"},"lsFusion")," platform must support very basic supply chain execution capabilities."),Object(r.b)("p",null,"For simplicity, let's define one type of document in our system that increases the stock balance \u2014 a receipt from the supplier; and one type of document that does the opposite \u2014 a shipment for a wholesale to a customer."),Object(r.b)("h2",{id:"defining-domain-logic"},"Defining domain logic"),Object(r.b)("p",null,"The information system will consist of a set of ",Object(r.b)("a",{parentName:"p",href:"/platform/Modules"},"modules"),", each implementing a logically isolated piece of functionality. Each module can use the functionality of other modules, which involves special syntax constructions for defining module dependencies."),Object(r.b)("p",null,"Based on our task, let's define the list of modules to be implemented: stock module, item module, legal entity module, receipt module, shipment module, current balance module. We will separately define the main module that will be executed and will basically be a compound solution. The composition of modules can be different and is determined by the developer depending on the need to re-use the functionality elsewhere."),Object(r.b)("h3",{id:"defining-a-stock"},"Defining a stock"),Object(r.b)("p",null,"Let's create a module where we will define a stock instance and its attributes."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Stock;\n")),Object(r.b)("p",null,"Let's define the concept of a stock and its attributes: name, address."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock 'Warehouse';\n\nname 'Name' = DATA STRING[100] (Stock) IN base;\naddress 'Address' = DATA STRING[150] (Stock) IN base;\n")),Object(r.b)("h3",{id:"defining-an-item"},"Defining an item"),Object(r.b)("p",null,"Let's create a module in which we'll define the concept of an item and its attributes."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Item;\n")),Object(r.b)("p",null,"Let's define the concept of an item and its attributes: name, barcode."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Item 'Product';\n\nname 'Name' = DATA STRING[100](Item) IN base;\nbarcode 'Barcode' = DATA BPSTRING[13](Item) IN base;\n")),Object(r.b)("p",null,"Let's set the wholesale price for an item."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"salePrice 'Wholesale price' = DATA NUMERIC[17,2](Item) IN base;\n")),Object(r.b)("h3",{id:"defining-a-legal-entity"},"Defining a legal entity"),Object(r.b)("p",null,"Let's create a module where we will define a legal entity instance and its attributes. In the system, legal entities will act as suppliers and customers."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE LegalEntity;\n")),Object(r.b)("p",null,"Let's define the concept of a legal entity and its attributes: name, legal address, Tax ID."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS LegalEntity 'Organization';\n\nname 'Name' = DATA STRING[100](LegalEntity) IN base;\naddress 'Address' = DATA STRING[150](LegalEntity) IN base;\ninn 'TIN' = DATA BPSTRING[9](LegalEntity) IN base;\n")),Object(r.b)("p",null,"We define the uniqueness of the Tax ID for the legal entity."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"legalEntityINN = GROUP AGGR LegalEntity legalEntity BY inn(legalEntity);\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"legalEntityINN")," property binds an organization and a Tax ID one-to-one and allows to find a legal entity by a Tax ID. The expression of the property can be interpreted as follows: when grouping legal entities by Tax ID (",Object(r.b)("inlineCode",{parentName:"p"},"inn")," property), each group must contain a non-repeating legal entity."),Object(r.b)("h3",{id:"defining-a-receipt"},"Defining a receipt"),Object(r.b)("p",null,"Let's create a module where we'll define all instances and attributes required for defining the logic of a supplier receipt."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Receipt;\n")),Object(r.b)("p",null,"Let's define the use of functionality from other modules in the ",Object(r.b)("inlineCode",{parentName:"p"},"Receipt")," module."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Stock, Item, LegalEntity;\n")),Object(r.b)("p",null,"We define the concepts that determine the logic of a supplier receipt. Let's work on the premise that all documents (both receipts and shipments) in the system consist of a header and an item specification. Accordingly, let's define the concepts of a receipt header and receipt line."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Receipt 'Receipt';\nCLASS ReceiptDetail 'Receipt line';\n")),Object(r.b)("p",null,"Each receipt line contains a link to the document header, so in the end, the header and the subset of lines with links to this document together define the receipt from the user perspective. The ",Object(r.b)("inlineCode",{parentName:"p"},"NONULL")," parameter indicates that the link must be defined. The ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE")," parameter specifies that if the main ",Object(r.b)("inlineCode",{parentName:"p"},"Receipt")," object is deleted, all ",Object(r.b)("inlineCode",{parentName:"p"},"ReceiptDetail")," lines linking to it will also be deleted. By default, when an object is deleted, all links to it are nullified. This way, without the ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE")," parameter, the system will show an error message about an undefined link."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"receipt 'Line document' = DATA Receipt (ReceiptDetail) NONULL DELETE;\n")),Object(r.b)("p",null,"Let's define the line number in a receipt."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"index 'Line number' (ReceiptDetail d) =\n        PARTITION SUM 1 IF d IS ReceiptDetail\n        ORDER d BY receipt(d);\n")),Object(r.b)("p",null,"The use of the name of an object class in expressions is similar to using its identification number (id) created by the system for all objects by an automatic counter. In this case, the use of the ",Object(r.b)("inlineCode",{parentName:"p"},"ORDER d")," construct helps sort the lines of the receipt by the order of ascension of their id, i.e. basically in the order of their creation."),Object(r.b)("p",null,"Here, the ",Object(r.b)("inlineCode",{parentName:"p"},"PARTITION")," instruction uses the ",Object(r.b)("inlineCode",{parentName:"p"},"BY")," block that groups objects by a certain attribute. The calculation of the expression cumulative total is performed in each group. In this case, the line number is determined only within this line's document (",Object(r.b)("inlineCode",{parentName:"p"},"receipt")," property)."),Object(r.b)("p",null,"We define a set of key attributes of a receipt header: number, date, supplier and its name, the stock where the product is received and its name. The name of the supplier and the stock will be needed in the future for displaying them on the form."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"number 'Receipt number' = DATA BPSTRING[10] (Receipt);\ndate 'Receipt date' = DATA DATE (Receipt);\n\nsupplier 'Supplier' = DATA LegalEntity (Receipt);\nnameSupplier 'Supplier name' (Receipt r) = name(supplier(r));\n\nstock 'Warehouse' = DATA Stock (Receipt);\nnameStock 'Warehouse name' (Receipt r) = name(stock(r));\n")),Object(r.b)("p",null,"We define a set of key attributes of a receipt line: item and its name, quantity, supplier price, supplier amount (price multiplied by quantity)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"item 'Product' = DATA Item (ReceiptDetail);\nnameItem 'Product name' (ReceiptDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4] (ReceiptDetail);\nprice 'Supplier price' = DATA NUMERIC[17,2] (ReceiptDetail);\nsum 'Supplier amount' (ReceiptDetail d) = quantity(d) * price(d);\n")),Object(r.b)("h3",{id:"defining-a-shipment"},"Defining a shipment"),Object(r.b)("p",null,"Let's create a module where we will define all instances and attributes required for a wholesale shipment."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Shipment;\n")),Object(r.b)("p",null," We define the use of functionality from other modules in the ",Object(r.b)("inlineCode",{parentName:"p"},"Shipment")," module."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Stock, Item, LegalEntity;\n")),Object(r.b)("p",null,"Similarly to the receipt, we define the shipment header and lines, as well as a link in the line to the header and its number."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shipment 'Shipment';\nCLASS ShipmentDetail 'Shipment line';\n\nshipment 'Line document' = DATA Shipment (ShipmentDetail) NONULL DELETE;\nindex 'Line number' (ShipmentDetail d) =\n        PARTITION SUM 1 IF d IS ShipmentDetail\n        ORDER d BY shipment(d);\n")),Object(r.b)("p",null,"We define a set of attributes for the shipment: number, date, customer and its name, the stock from which the item is shipped, and its name."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"number 'Shipment number' = DATA BPSTRING[10] (Shipment);\ndate 'Shipment date' = DATA DATE (Shipment);\n\ncustomer 'Customer' = DATA LegalEntity (Shipment);\nnameCustomer 'Customer name' (Shipment s) = name(customer(s));\n\nstock 'Warehouse' = DATA Stock(Shipment);\nnameStock 'Warehouse name' (Shipment s) = name(stock(s));\n")),Object(r.b)("p",null,"We define a set of key attributes of a shipment: item and its name, quantity, sale price, sale amount (price multiplied by quantity)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"item 'Product' = DATA Item (ShipmentDetail);\nnameItem 'Product name' (ShipmentDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4](ShipmentDetail);\nprice 'Selling price' = DATA NUMERIC[17,2](ShipmentDetail);\nsum 'Sale amount' (ShipmentDetail d) = quantity(d) * price(d);\n")),Object(r.b)("p",null,"We implement the auto filling of the item sale price in the shipment with the value of the wholesale price defined by the user for item (",Object(r.b)("inlineCode",{parentName:"p"},"salePrice")," property). Auto filling for the shipment line should work when the item is changed (",Object(r.b)("inlineCode",{parentName:"p"},"WHEN CHANGED")," instruction)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"price(ShipmentDetail d) <- salePrice(item(d)) WHEN CHANGED(item(d));\n")),Object(r.b)("h3",{id:"defining-current-item-balance"},"Defining current item balance"),Object(r.b)("p",null,"The current item balance is defined as a difference between all item receipts and all its shipments."),Object(r.b)("p",null,"Let's create a separate module."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE StockItem;\n")),Object(r.b)("p",null," We define the use of functionality from other modules in the ",Object(r.b)("inlineCode",{parentName:"p"},"StockItem")," module."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Shipment, Receipt;\n")),Object(r.b)("p",null,"Let's define the calculated property of the current item balance at the stock in quantitative terms."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"receivedQuantity 'Total income' = GROUP SUM quantity(ReceiptDetail d) BY item(d), stock(receipt(d));\nshippedQuantity 'Total expenses' = GROUP SUM quantity(ShipmentDetail d) BY item(d), stock(shipment(d));\ncurrentBalance 'Current balance' (Item i, Stock s) = receivedQuantity (i, s) (-) shippedQuantity (i, s);\n")),Object(r.b)("p",null,"Let's prohibit the negative item balance. The prohibition will work for any user action resulting in a negative balance. In this case, the user will see a specified message on the screen."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT currentBalance(Item i, Stock s) < 0 MESSAGE 'The balance of the product cannot be negative';\n")),Object(r.b)("h2",{id:"defining-view-logic"},"Defining view logic"),Object(r.b)("p",null,"In order to be able to work with the created solution, let's add directory forms and a current balances form, and also a set of paired forms for working with documents: a form for listing receipts and a form for editing them, a form for listing shipments and a form for editing them."),Object(r.b)("p",null,"First, let's create directory forms."),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"Stock")," module, we add a form that provides the user with the functionality of creating and deleting stocks, as well as changing their attributes."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"FORM stocks 'Warehouses'\n    OBJECTS s = Stock\n    PROPERTIES(s) name, address, NEW, DELETE\n;\n")),Object(r.b)("p",null,"In a similar manner, we'll create an item form in the ",Object(r.b)("inlineCode",{parentName:"p"},"Item")," module, and a legal entity form in the ",Object(r.b)("inlineCode",{parentName:"p"},"LegalEntity")," module."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Item 'Product';\n\nname 'Name' = DATA STRING[100](Item) IN base;\nbarcode 'Barcode' = DATA BPSTRING[13](Item) IN base;\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS LegalEntity 'Organization';\n\nname 'Name' = DATA STRING[100](LegalEntity) IN base;\naddress 'Address' = DATA STRING[150](LegalEntity) IN base;\ninn 'TIN' = DATA BPSTRING[9](LegalEntity) IN base;\n")),Object(r.b)("p",null,"Let's create edit forms for a receipt and a shipment. These forms will be used for creating new documents or editing existing ones. The layout of the forms will be similar: two vertical blocks, the top one containing a panel with the header attributes of the document being created/edited, and the lower one containing the document lines in a grid view and their attributes."),Object(r.b)("p",null,"In the Receipt module, we should create a receipt edit form. For the form we are building, we specify that it will be used as a default form for creating/editing receipts (the ",Object(r.b)("inlineCode",{parentName:"p"},"EDIT")," instruction)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"FORM receipt 'Receipt'\n    OBJECTS r = Receipt PANEL\n    PROPERTIES(r) number, date, nameSupplier, nameStock\n\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) index, nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n    FILTERS receipt(d) = r\n\n    EDIT Receipt OBJECT r\n;\n")),Object(r.b)("p",null,"Line filtering for the current receipt is performed with the help of the ",Object(r.b)("inlineCode",{parentName:"p"},"FILTERS receipt(d) == r")," expression. The ",Object(r.b)("inlineCode",{parentName:"p"},"FILTERS")," construct displays an object of a corresponding class on the form if the filter expression returns a value different from ",Object(r.b)("inlineCode",{parentName:"p"},"NULL"),". In this case, the receipt line will be displayed on the form if the header of the document to which the line is linked (",Object(r.b)("inlineCode",{parentName:"p"},"receipt")," property) equals to the current object of the top block. In other words, only the lines of the created/edited document will be displayed."),Object(r.b)("p",null,"In addition, if a filter is specified for objects of this class on the form, then when the user presses the ",Object(r.b)("inlineCode",{parentName:"p"},"NEW")," button, the property of the newly added object will be automatically filled in a way that will make this object meet the filter conditions. In this case, when a new receipt line is created, the ",Object(r.b)("inlineCode",{parentName:"p"},"receipt")," property of this line will be automatically filled with a link to the current header of the receipt."),Object(r.b)("p",null,"Let's create an edit form for the shipment in the ",Object(r.b)("inlineCode",{parentName:"p"},"Shipment")," module. For the form we are creating, we specify that it will be used as the default form for creating/editing shipments (",Object(r.b)("inlineCode",{parentName:"p"},"EDIT")," instruction)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"FORM shipment 'Shipment'\n    OBJECTS s = Shipment PANEL\n    PROPERTIES(s) number, date, nameCustomer, nameStock\n\n    OBJECTS d = ShipmentDetail\n    PROPERTIES(d) nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n    FILTERS shipment(d) = s\n\n    EDIT Shipment OBJECT s\n;\n")),Object(r.b)("p",null,"Visually, supplier receipt and shipment forms will look almost identical and consist of two vertical blocks: one with a table for document headers and one with a table of document lines. Document lines should support visual filtering by documents and their subsets displayed on the form will change when navigating in the top block."),Object(r.b)("p",null,"Let's create a receipt form. On this form, we will display all the properties defined above for document headers and their lines. Additionally, we will place automatically defined buttons for creating/editing a receipt using the edit form created above. All properties of document headers and their lines, except the buttons for creating/editing a receipt, should be read-only for editing directly on the form (",Object(r.b)("inlineCode",{parentName:"p"},"READONLY")," operator)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"FORM receipts 'Receipts'\n    OBJECTS r = Receipt\n    PROPERTIES(r) READONLY number, date, nameSupplier, nameStock\n    PROPERTIES(r) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) READONLY index, nameItem, quantity, price, sum\n    FILTERS receipt(d) = r\n;\n")),Object(r.b)("p",null,"Let's create the shipment form in a similar manner."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"FORM shipments 'Shipments'\n    OBJECTS s = Shipment\n    PROPERTIES(s) READONLY number, date, nameCustomer, nameStock\n    PROPERTIES(s) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS d = ShipmentDetail\n    PROPERTIES(d) READONLY nameItem, quantity, price, sum\n    FILTERS shipment(d) = s\n;\n")),Object(r.b)("p",null,"Next, in the ",Object(r.b)("inlineCode",{parentName:"p"},"StockItem")," module, let's create a form for displaying current balances. A form should be a table whose lines contain information about the item (its name and barcode), the name of the stock, and the current balance for this item at this stock. The count of lines on the form will be equal to the count of items entered into the system multiplied by the count of entered stocks. To display only relevant data (i.e. only those items and stocks, for whose intersection the current balance is not ",Object(r.b)("inlineCode",{parentName:"p"},"NULL"),"), let's add a filter to the form."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"FORM currentBalanceItemStock 'Current balances'\n    OBJECTS si = (s = Stock, i = Item)\n    PROPERTIES READONLY name(i), barcode(i), name(s), currentBalance(i, s)\n    FILTERS currentBalance(i, s)\n;\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"OBJECTS si = (s = Stock, i = Item)")," construct adds an object group with the name ",Object(r.b)("inlineCode",{parentName:"p"},"si"),", which is a Cartesian product of ",Object(r.b)("inlineCode",{parentName:"p"},"Stock")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Item")," class objects."),Object(r.b)("p",null,"Finally, let's declare the head module and specify what functionality from other modules will be used in it."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE StockAccounting;\n\nREQUIRE Stock, Item, LegalEntity, Receipt, Shipment, StockItem;\n")),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"StockAccounting")," module, we compose the system menu. Directories should be added to the predefined ",Object(r.b)("inlineCode",{parentName:"p"},"masterData")," folder of the navigator that we show immediately after the directories. We place the current balance form to the main menu (horizontal window ",Object(r.b)("inlineCode",{parentName:"p"},"root"),"). Links to directory and document forms will be shown on the vertical ",Object(r.b)("inlineCode",{parentName:"p"},"toolbar")," when the user selects a corresponding ",Object(r.b)("inlineCode",{parentName:"p"},"root")," folder."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    NEW FOLDER masterData 'Directories' FIRST WINDOW toolbar {\n        NEW items;\n        NEW stocks;\n        NEW legalEntities;\n    }\n    NEW FOLDER documents 'Documents' AFTER masterData WINDOW toolbar {\n        NEW receipts;\n        NEW shipments;\n    }\n    NEW currentBalanceItemStock AFTER documents;\n}\n")),Object(r.b)("p",null,"The process of creating an information system is completed."),Object(r.b)("h2",{id:"the-complete-source-code-on-github"},"The complete source code (on ",Object(r.b)("a",{parentName:"h2",href:"https://github.com/lsfusion/samples/tree/master/mm"},"Github"),")"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Stock;\n\nCLASS Stock 'Warehouse';\n\nname 'Name' = DATA STRING[100] (Stock) IN base;\naddress 'Address' = DATA STRING[150] (Stock) IN base;\n\nFORM stocks 'Warehouses'\n    OBJECTS s = Stock\n    PROPERTIES(s) name, address, NEW, DELETE\n;\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Item;\n\nCLASS Item 'Product';\n\nname 'Name' = DATA STRING[100](Item) IN base;\nbarcode 'Barcode' = DATA BPSTRING[13](Item) IN base;\n\nsalePrice 'Wholesale price' = DATA NUMERIC[17,2](Item) IN base;\n\nFORM items 'Products'\n    OBJECTS i = Item\n    PROPERTIES(i) name, barcode, salePrice, NEW, DELETE\n;\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE LegalEntity;\n\nCLASS LegalEntity 'Organization';\n\nname 'Name' = DATA STRING[100](LegalEntity) IN base;\naddress 'Address' = DATA STRING[150](LegalEntity) IN base;\ninn 'TIN' = DATA BPSTRING[9](LegalEntity) IN base;\n\nlegalEntityINN = GROUP AGGR LegalEntity legalEntity BY inn(legalEntity);\n\nFORM legalEntities 'Organization'\n    OBJECTS l = LegalEntity\n    PROPERTIES(l) name, inn, address, NEW, DELETE\n;\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Receipt;\n\nREQUIRE Stock, Item, LegalEntity;\n\nCLASS Receipt 'Receipt';\nCLASS ReceiptDetail 'Receipt line';\n\nreceipt 'Line document' = DATA Receipt (ReceiptDetail) NONULL DELETE;\n\nindex 'Line number' (ReceiptDetail d) =\n        PARTITION SUM 1 IF d IS ReceiptDetail\n        ORDER d BY receipt(d);\n\nnumber 'Receipt number' = DATA BPSTRING[10] (Receipt);\ndate 'Receipt date' = DATA DATE (Receipt);\n\nsupplier 'Supplier' = DATA LegalEntity (Receipt);\nnameSupplier 'Supplier name' (Receipt r) = name(supplier(r));\n\nstock 'Warehouse' = DATA Stock (Receipt);\nnameStock 'Warehouse name' (Receipt r) = name(stock(r));\n\nitem 'Product' = DATA Item (ReceiptDetail);\nnameItem 'Product name' (ReceiptDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4] (ReceiptDetail);\nprice 'Supplier price' = DATA NUMERIC[17,2] (ReceiptDetail);\nsum 'Supplier amount' (ReceiptDetail d) = quantity(d) * price(d);\n\nFORM receipt 'Receipt'\n    OBJECTS r = Receipt PANEL\n    PROPERTIES(r) number, date, nameSupplier, nameStock\n\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) index, nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n    FILTERS receipt(d) = r\n\n    EDIT Receipt OBJECT r\n;\n\nFORM receipts 'Receipts'\n    OBJECTS r = Receipt\n    PROPERTIES(r) READONLY number, date, nameSupplier, nameStock\n    PROPERTIES(r) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) READONLY index, nameItem, quantity, price, sum\n    FILTERS receipt(d) = r\n;\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Shipment;\n\nREQUIRE Stock, Item, LegalEntity;\n\nCLASS Shipment 'Shipment';\nCLASS ShipmentDetail 'Shipment line';\n\nshipment 'Line document' = DATA Shipment (ShipmentDetail) NONULL DELETE;\nindex 'Line number' (ShipmentDetail d) =\n        PARTITION SUM 1 IF d IS ShipmentDetail\n        ORDER d BY shipment(d);\n\nnumber 'Shipment number' = DATA BPSTRING[10] (Shipment);\ndate 'Shipment date' = DATA DATE (Shipment);\n\ncustomer 'Customer' = DATA LegalEntity (Shipment);\nnameCustomer 'Customer name' (Shipment s) = name(customer(s));\n\nstock 'Warehouse' = DATA Stock(Shipment);\nnameStock 'Warehouse name' (Shipment s) = name(stock(s));\n\nitem 'Product' = DATA Item (ShipmentDetail);\nnameItem 'Product name' (ShipmentDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4](ShipmentDetail);\nprice 'Selling price' = DATA NUMERIC[17,2](ShipmentDetail);\nsum 'Sale amount' (ShipmentDetail d) = quantity(d) * price(d);\n\nprice(ShipmentDetail d) <- salePrice(item(d)) WHEN CHANGED(item(d));\n\nFORM shipment 'Shipment'\n    OBJECTS s = Shipment PANEL\n    PROPERTIES(s) number, date, nameCustomer, nameStock\n\n    OBJECTS d = ShipmentDetail\n    PROPERTIES(d) nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n    FILTERS shipment(d) = s\n\n    EDIT Shipment OBJECT s\n;\n\nFORM shipments 'Shipments'\n    OBJECTS s = Shipment\n    PROPERTIES(s) READONLY number, date, nameCustomer, nameStock\n    PROPERTIES(s) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS d = ShipmentDetail\n    PROPERTIES(d) READONLY nameItem, quantity, price, sum\n    FILTERS shipment(d) = s\n;\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE StockItem;\n\nREQUIRE Shipment, Receipt;\n\nreceivedQuantity 'Total income' = GROUP SUM quantity(ReceiptDetail d) BY item(d), stock(receipt(d));\nshippedQuantity 'Total expenses' = GROUP SUM quantity(ShipmentDetail d) BY item(d), stock(shipment(d));\ncurrentBalance 'Current balance' (Item i, Stock s) = receivedQuantity (i, s) (-) shippedQuantity (i, s);\n\nCONSTRAINT currentBalance(Item i, Stock s) < 0 MESSAGE 'The balance of the product cannot be negative';\n\nFORM currentBalanceItemStock 'Current balances'\n    OBJECTS si = (s = Stock, i = Item)\n    PROPERTIES READONLY name(i), barcode(i), name(s), currentBalance(i, s)\n    FILTERS currentBalance(i, s)\n;\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE StockAccounting;\n\nREQUIRE Stock, Item, LegalEntity, Receipt, Shipment, StockItem;\n\nNAVIGATOR {\n    NEW FOLDER masterData 'Directories' FIRST WINDOW toolbar {\n        NEW items;\n        NEW stocks;\n        NEW legalEntities;\n    }\n    NEW FOLDER documents 'Documents' AFTER masterData WINDOW toolbar {\n        NEW receipts;\n        NEW shipments;\n    }\n    NEW currentBalanceItemStock AFTER documents;\n}\n")))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);