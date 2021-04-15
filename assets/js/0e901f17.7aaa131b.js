(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{107:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return p}));var n=o(3),r=o(7),i=(o(0),o(747)),a={title:"How-to: Constraints"},l={unversionedId:"How-to_Constraints",id:"version-v4/How-to_Constraints",isDocsHomePage:!1,title:"How-to: Constraints",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Constraints.md",slug:"/How-to_Constraints",permalink:"/platform/How-to_Constraints",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Constraints.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Declarative logic",permalink:"/platform/How-to_Declarative_logic"},next:{title:"How-to: Inheritance and aggregation",permalink:"/platform/How-to_Inheritance_and_aggregation"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Condition",id:"condition-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]},{value:"Example 6",id:"example-6",children:[{value:"Condition",id:"condition-5",children:[]},{value:"Solution",id:"solution-5",children:[]}]}],d={toc:c};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"example-1"},"Example 1"),Object(i.b)("h3",{id:"condition"},"Condition"),Object(i.b)("p",null,"There is a book for which a price is defined."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n")),Object(i.b)("p",null,"We need to do so that it will be impossible to enter prices higher than 100."),Object(i.b)("h3",{id:"solution"},"Solution"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nCONSTRAINT price(Book b) > 100\n    MESSAGE 'The book price cannot be more than 100 rubles';\n\n// Option 2\nCONSTRAINT SET(price(Book b) > 100)\n    MESSAGE 'The book price cannot be more than 100 rubles';\n")),Object(i.b)("p",null,"If a user tries to save a book costing over 100 on any form, the user will see a message with a corresponding text. This message will also contain all objects of the ",Object(i.b)("strong",{parentName:"p"},"Book")," class for which the constraint is violated. Values of properties from the ",Object(i.b)("strong",{parentName:"p"},"id")," group will be shown for each object."),Object(i.b)("p",null,"Both options are identical from the execution perspective. If the platform does not find any ",Object(i.b)("a",{parentName:"p",href:"/platform/Change_operators_SET_CHANGED_..._"},"change operator"),' in a constraint, the entire expression is automatically "wrapped" into a ',Object(i.b)("strong",{parentName:"p"},"SET")," operator."),Object(i.b)("h2",{id:"example-2"},"Example 2"),Object(i.b)("h3",{id:"condition-1"},"Condition"),Object(i.b)("p",null,"We have an order with a date, ID and a posted/not posted flag."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\ndate 'Date' = DATA DATE (Order) IN id;\nnumber 'Number' = DATA INTEGER (Order) IN id;\nposted 'Completed' = DATA BOOLEAN (Order) IN id;\n")),Object(i.b)("p",null,"You need to prohibit the change of the order date."),Object(i.b)("h3",{id:"solution-1"},"Solution"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT CHANGED(date(Order o)) AND posted(o)\n    MESSAGE 'It is forbidden to change the date of a completed order';\n")),Object(i.b)("h2",{id:"example-3"},"Example 3"),Object(i.b)("h3",{id:"condition-2"},"Condition"),Object(i.b)("p",null,"Identical to \xa0",Object(i.b)("strong",{parentName:"p"},"Example 2"),"."),Object(i.b)("p",null,"You need to prohibit the deletion of a posted order."),Object(i.b)("h3",{id:"solution-2"},"Solution"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT DROPPED(Order o IS Order) AND PREV(date(o)) < currentDate()\n    MESSAGE 'It is forbidden to delete old orders';\n")),Object(i.b)("p",null,"When an order is deleted, all of its properties will be ",Object(i.b)("strong",{parentName:"p"},"NULL"),". That is why you need to you use the ",Object(i.b)("strong",{parentName:"p"},"PREV")," operator to access its property values."),Object(i.b)("h2",{id:"example-4"},"Example 4"),Object(i.b)("h3",{id:"condition-3"},"Condition"),Object(i.b)("p",null,"Similar to ",Object(i.b)("strong",{parentName:"p"},"Example 1")," and ",Object(i.b)("strong",{parentName:"p"},"Example 2"),". Also, the order contains lines with a price and a link to the book."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d)) IN id;\n\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n")),Object(i.b)("p",null,"You need to prohibit the entry of order price values exceeding the price of the book by 10%."),Object(i.b)("h3",{id:"solution-3"},"Solution"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT price(OrderDetail d) > price(book(d)) * 1.1\n    MESSAGE 'The price in the order cannot exceed the price of the book by 10%';\n")),Object(i.b)("p",null,"Since the expression contains no change operators, this constraint will be triggered when the price changes for a line, book or book price. Therefore, the user will not be able to change the book price if there have been orders for it with a price lower by up to 10%. If such behavior is not required, you need to explicitly apply change operators to those properties that should trigger constraints upon change."),Object(i.b)("h2",{id:"example-5"},"Example 5"),Object(i.b)("h3",{id:"condition-4"},"Condition"),Object(i.b)("p",null,"Similar to \xa0",Object(i.b)("strong",{parentName:"p"},"Example 4"),". Here are added the concept of a customer and the possibility to select books that will be available to the customer."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[100] (Customer);\n\nin 'On' = DATA BOOLEAN (Customer, Book);\n\ncustomer 'Customer' = DATA Customer (OrderDetail);\n")),Object(i.b)("p",null,"We need to prohibit the entry of books that are unavailable to the buyer for the order line."),Object(i.b)("h3",{id:"solution-4"},"Solution"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT book(OrderDetail d) AND NOT in(customer(d), book(d))\n    CHECKED BY book[OrderDetail]\n    MESSAGE 'A book is selected in the order line that is not allowed for the customer';\n")),Object(i.b)("p",null,"It is important to check that the ",Object(i.b)("strong",{parentName:"p"},"book")," property for the order line is set because otherwise, the constraint will be applied to all order lines with the yet unselected book. The ",Object(i.b)("strong",{parentName:"p"},"CHECKED BY\xa0")," block adds the filter for the order line on the book selection form in order to avoid violating the defined constraint. This way, the user will only see books available to the buyer."),Object(i.b)("h2",{id:"example-6"},"Example 6"),Object(i.b)("h3",{id:"condition-5"},"Condition"),Object(i.b)("p",null,"Identical to \xa0",Object(i.b)("strong",{parentName:"p"},"Example 4"),"."),Object(i.b)("p",null,"We need to prohibit the entry of books that are unavailable to the buyer for the order line, but only for posted orders."),Object(i.b)("h3",{id:"solution-5"},"Solution"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nCONSTRAINT (CHANGED(book(OrderDetail d)) OR CHANGED(price(d)) OR CHANGED(posted(order(d)))) AND posted(order(d))\n           AND price(d) > price(book(d)) * 1.1\n           MESSAGE 'The price in the order cannot exceed the price of the book by 10%';\n\n// Option 2\nconstraintBook (OrderDetail d) =\n    (CHANGED(book(d)) OR CHANGED(price(d)) OR CHANGED(posted(order(d)))) AND posted(order(d)) AND price(d) > price(book(d)) * 1.1;\nWHEN (GROUP MAX constraintBook(OrderDetail d)) DO {\n    MESSAGE 'A book is selected in the order line that is not allowed for the customer by lines: \\n' +\n            (GROUP CONCAT ('Date ' + date(order(OrderDetail d)) + '; Number ' + number(order(d))) IF constraintBook(d), ',') NOWAIT;\n    CANCEL;\n}\n")),Object(i.b)("p",null,"The second scenario is similar to the first one, but lets you modify the message shown to the user and the logic of constraint handling."))}p.isMDXComponent=!0},747:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return h}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(o),u=n,h=s["".concat(a,".").concat(u)]||s[u]||b[u]||i;return o?r.a.createElement(h,l(l({ref:t},d),{},{components:o})):r.a.createElement(h,l({ref:t},d))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var d=2;d<i;d++)a[d]=o[d];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);