(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{308:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return O}));var r=n(3),o=n(7),a=(n(0),n(751)),c={title:"How-to: FORMULA"},l={unversionedId:"How-to_FORMULA",id:"How-to_FORMULA",isDocsHomePage:!1,title:"How-to: FORMULA",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_FORMULA.md",slug:"/How-to_FORMULA",permalink:"/platform/ru/docs/next/How-to_FORMULA",editUrl:"https://github.com/danchanka/platform/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/How-to_FORMULA.md",version:"current",sidebar:"docs",previous:{title:"How-to: \u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043a \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c: \u041e\u0431\u0437\u043e\u0440",permalink:"/platform/ru/docs/next/How-to_Access_to_internal_systems"},next:{title:"How-to: INTERNAL",permalink:"/platform/ru/docs/next/How-to_INTERNAL"}},i=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:[]}]}],p={toc:i};function O(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0417\u0430\u0434\u0430\u043d \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order '\u0417\u0430\u043a\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA STRING[30] (Order);\n\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b \u043d\u0430 \u0437\u0430\u043a\u0443\u043f\u043a\u0443'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(a.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 CSV \u044d\u0442\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a, \u043f\u0440\u0438\u0447\u0435\u043c \u0434\u0430\u0442\u0443 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ISO (YYYY-MM-DD)."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"toISO = FORMULA STRING[10] 'to_char($1,\\'YYYY-MM-DD\\')';\n\nexportToCSV '\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 CSV' () {\n    LOCAL file = FILE ();\n    EXPORT CSV FROM toISO(date(Order o)), number(o) TO file;\n    open(file());\n}\n\nEXTEND FORM orders\n    PROPERTIES() exportToCSV\n;\n")),Object(a.b)("p",null,"\u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",Object(a.b)("a",{parentName:"p",href:"/platform/ru/docs/next/FORMULA_operator"},"FORMULA"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u043d\u0430 \u0432\u0445\u043e\u0434 \u0434\u0430\u0442\u0443 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 YYYY-MM-DD. \u0412 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u0444\u043e\u0440\u043c\u0443\u043b\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f PostgreSQL ",Object(a.b)("a",{parentName:"p",href:"https://www.postgresql.org/docs/11/functions-formatting.html"},"to","_","char"),"."),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",Object(a.b)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"),". \u0422\u0430\u043a\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0441\u0442\u0440\u043e\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u0441\u0443\u043c\u043c\u0430."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\n\nquantity '\u041a\u043e\u043b-\u0432\u043e' = DATA NUMERIC[14,3] (OrderDetail);\nsum '\u0421\u0443\u043c\u043c\u0430' = DATA NUMERIC[14,2] (OrderDetail);\n\nEXTEND FORM orders\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) quantity, sum, NEW, DELETE\n    FILTERS order(d) = o\n;\n")),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0432\u044b\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0437\u0430\u043a\u0430\u0437\u0443 CSV-\u0444\u0430\u0439\u043b \u0441 \u0435\u0433\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u0441\u0443\u043c\u043c\u044b \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0434\u043e 3\u0445 \u0438 2\u0445 \u0437\u043d\u0430\u043a\u043e\u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043d\u0443\u0436\u043d\u043e \u0447\u0442\u043e\u0431\u044b \u0447\u0438\u0441\u043b\u0430 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u043b\u0438\u0441\u044c \u043f\u043e \u0442\u0440\u0438\u0430\u0434\u0430\u043c."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"toString = FORMULA TEXT 'to_char($1,$2)';\n\nexportToCSV '\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 CSV' (Order o) {\n    LOCAL file = FILE ();\n    EXPORT CSV FROM toISO(date(o)), number(o), toString(quantity(OrderDetail d), '999 999.999'), toString(sum(d), '999 999.99') WHERE order(d) = o TO file;\n    open(file());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToCSV\n;\n")),Object(a.b)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e toString, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0430 \u0432\u0445\u043e\u0434 \u0434\u0432\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 (\u0447\u0438\u0441\u043b\u043e \u0438 \u0444\u043e\u0440\u043c\u0430\u0442) \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 ",Object(a.b)("strong",{parentName:"p"},"TEXT"),". \u041f\u0440\u0438 \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u043c \u043d\u0443\u0436\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430."),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3"},"\u041f\u0440\u0438\u043c\u0435\u0440 3"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",Object(a.b)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 2"),"."),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u0430, \u0435\u0441\u043b\u0438 \u0432 \u043d\u043e\u043c\u0435\u0440\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043e\u0434\u043d\u0438 \u0446\u0438\u0444\u0440\u044b."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"onlyDigits = FORMULA NULL BOOLEAN 'CASE WHEN trim($1) ~ \\'^[0-9]*$\\' THEN 1 ELSE NULL END';\n\nEXTEND FORM orders\n    PROPERTIES '\u0422\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b' = onlyDigits(number(o))\n;\n")),Object(a.b)("p",null,"\u0422\u0430\u043a \u043a\u0430\u043a \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u043e\u0440\u043c\u0443\u043b\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043e\u0434\u0438\u043d\u0430\u0440\u043d\u044b\u0435 \u043a\u0430\u0432\u044b\u0447\u043a\u0438, \u0442\u043e \u0438\u0445 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f ",Object(a.b)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%AD%D0%BA%D1%80%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2"},"\u044d\u043a\u0440\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c")," \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0441\u043b\u044d\u0448\u0430 ",Object(a.b)("strong",{parentName:"p"},"\\"),"."),Object(a.b)("p",null,"\u0412\u0430\u0436\u043d\u043e \u0437\u0430\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u0432 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u0442\u0438\u043f ",Object(a.b)("strong",{parentName:"p"},"BOOLEAN")," \u0438\u043c\u0435\u0435\u0442 2 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f : ",Object(a.b)("strong",{parentName:"p"},"TRUE")," \u0438 ",Object(a.b)("strong",{parentName:"p"},"NULL"),". \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0432 ",Object(a.b)("strong",{parentName:"p"},"NULL"),". \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0432 \u044f\u0432\u043d\u0443\u044e \u0437\u043d\u0430\u0442\u044c, \u0447\u0442\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u043c\u0430\u0440\u043a\u0435\u0440 \u043f\u043e\u0441\u043b\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430 ",Object(a.b)("strong",{parentName:"p"},"FORMULA"),"."),Object(a.b)("p",null,"\u041d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f ",Object(a.b)("strong",{parentName:"p"},"BOOLEAN")," \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u043a\u0430\u043a \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 (1 \u0438\u043b\u0438 null), \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u044d\u0442\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0441\u0430\u043c \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0442\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0439 \u0442\u0438\u043f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u043b \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u0442\u0438\u043f\u0443. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u0440\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u044b\u043c (\u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432)."),Object(a.b)("p",null,"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u043e\u043c\u043d\u0438\u0442\u044c ,\u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u043d\u0430 \u0432\u0445\u043e\u0434 \u043b\u044e\u0431\u043e\u043c\u0443 \u0438\u0437 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c ",Object(a.b)("strong",{parentName:"p"},"FORMULA"),", \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f ",Object(a.b)("strong",{parentName:"p"},"NULL"),", \u0442\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043a\u0436\u0435 ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."))}O.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),O=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=O(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=O(n),d=r,s=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(s,l(l({ref:t},p),{},{components:n})):o.a.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);