(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{749:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,d=s["".concat(i,".").concat(f)]||s[f]||u[f]||a;return n?o.a.createElement(d,c(c({ref:t},b),{},{components:n})):o.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(749)),i={title:"User interface"},c={unversionedId:"User_interface",id:"User_interface",isDocsHomePage:!1,title:"User interface",description:"Working with objects",source:"@site/docs/User_interface.md",slug:"/User_interface",permalink:"/platform/next/User_interface",editUrl:"https://github.com/danchanka/platform/edit/master/docs/User_interface.md",version:"current",sidebar:"learn",previous:{title:"Working parameters",permalink:"/platform/next/Working_parameters"},next:{title:"Interpreter",permalink:"/platform/next/Interpreter"}},l=[{value:"Working with objects",id:"working-with-objects",children:[]},{value:"Print and export features",id:"print-and-export-features",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"working-with-objects"},"Working with objects"),Object(a.b)("p",null,"Create:\xa0",Object(a.b)("strong",{parentName:"p"},'"Add"'),"\xa0or **\xa0",Object(a.b)("strong",{parentName:"p"},'"Insert" on the keyboard,',Object(a.b)("br",{parentName:"strong"}),"Change"),'\xa0: "Edit"',Object(a.b)("strong",{parentName:"p"},"\xa0or"),"\xa0",Object(a.b)("strong",{parentName:"p"},'"Backspace" on the keyboard,',Object(a.b)("br",{parentName:"strong"}),"Delete:\xa0"),'"Delete"**\xa0or the Ctrl + Delete combination on the keyboard.  '),Object(a.b)("p",null,"Each table has a set of buttons for built-in functions for working with data in the table:  "),Object(a.b)("p",null,"Table row filtering function"),Object(a.b)("p",null,'Filtering is activated via the "Select" button\xa0\xa0and is carried out according to one or more filtering conditions.'),Object(a.b)("p",null,"Each condition includes a column, a comparison operation (=, ",">",", <, <=, ",">","=, !=, Starts with) and a value for comparison."),Object(a.b)("p",null,"To show how two filtering conditions are fulfilled together/separately, specify\xa0",Object(a.b)("strong",{parentName:"p"},'"AND/OR"\xa0'),"after the first condition:"),Object(a.b)("p",null,'To add a filtering condition, click the "Add" button:'),Object(a.b)("p",null,'To remove a filtering condition, click the "Delete" button:'),Object(a.b)("p",null,'To filter by specified conditions, click the "Apply" button:'),Object(a.b)("p",null,"Group adjustment function"),Object(a.b)("p",null,"Select the table column for which all values are to be adjusted, click the\xa0",Object(a.b)("strong",{parentName:"p"},'"Group adjustment"\xa0'),"button or the\xa0",Object(a.b)("strong",{parentName:"p"},'"F12"')," key, and enter or select a new value from the list. If a filter is applied to the table, only the values of the filtered rows are adjusted.  "),Object(a.b)("p",null,"Table entry counting function"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},'"Number of entries"')," button\xa0counts the number of entries in the table, or, if a filter is applied to the table, the number of filtered rows.  "),Object(a.b)("p",null,"Summary function"),Object(a.b)("p",null,"Select a table column containing numerical data and press the\xa0",Object(a.b)("strong",{parentName:"p"},'"Summarize"')," button.\xa0\xa0If a filter is applied to the table, only the filtered rows are summarized.  "),Object(a.b)("p",null,"Grouping function"),Object(a.b)("p",null,"To get the summary data from the values in the table, click the\xa0",Object(a.b)("strong",{parentName:"p"},'"Group"')," button.\xa0If a filter is applied to the table, only data for the filtered rows are combined.**  "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"In the"),'\xa0"Group"\xa0',Object(a.b)("strong",{parentName:"p"},"form that opens we set flags for the columns by which to group in the"),'\xa0"Group by"',Object(a.b)("strong",{parentName:"p"}," block, and we set flags for the columns in which the values are to be summarized (maximized) in the"),'\xa0"Sum"',Object(a.b)("strong",{parentName:"p"}," ("),'"Maximum"',Object(a.b)("strong",{parentName:"p"},") block, and click the\xa0"),'"Result"** button.'),Object(a.b)("p",null,"\xa0**\xa0**"),Object(a.b)("h3",{id:"print-and-export-features"},"Print and export features"),Object(a.b)("p",null,"To open the table printing form, press the\xa0",Object(a.b)("strong",{parentName:"p"},'"Print table"')," button. To transfer the table data to Excel, press the\xa0",Object(a.b)("strong",{parentName:"p"},'"Export to XLS"')," button. If a filter is applied to the table, only filtered rows are printed and exported."),Object(a.b)("p",null,".\xa0Table settings function"),Object(a.b)("p",null,"To adjust how the table columns are displayed, press the\xa0",Object(a.b)("strong",{parentName:"p"},'"Table settings"')," button.  "),Object(a.b)("p",null,"In the\xa0",Object(a.b)("strong",{parentName:"p"},'"Table settings"')," form that opens, \xa0double-click (or drag) the name of the column to hide it or to make it visible. If necessary, save/reset the settings for the current user or all users. Click the\xa0",Object(a.b)("strong",{parentName:"p"},'"OK"')," button\xa0to apply the settings.\xa0"))}p.isMDXComponent=!0}}]);