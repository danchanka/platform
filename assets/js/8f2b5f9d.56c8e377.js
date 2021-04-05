(window.webpackJsonp=window.webpackJsonp||[]).push([[388,460],{463:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return d}));var n=o(3),r=o(7),a=(o(0),o(751)),s=o(57),i={title:"How-to: Working with documents"},l={unversionedId:"How-to_Working_with_documents",id:"version-1.0.0/How-to_Working_with_documents",isDocsHomePage:!1,title:"How-to: Working with documents",description:"Posting documents",source:"@site/versioned_docs/version-1.0.0/How-to_Working_with_documents.md",slug:"/How-to_Working_with_documents",permalink:"/platform/docs/How-to_Working_with_documents",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/How-to_Working_with_documents.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: Use Cases: Overview",permalink:"/platform/docs/How-to_Use_Cases"},next:{title:"How-to: Registers",permalink:"/platform/docs/How-to_Registers"}},c=[{value:"Posting documents",id:"posting-documents",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Line selection",id:"line-selection",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Aggregated documents",id:"aggregated-documents",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],p={toc:c};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"posting-documents"},"Posting documents"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"There is some logic for working with orders."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=sample1",mdxType:"CodeSample"}),Object(a.b)("p",null,"An order edit form has been created for orders."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"Besides, a ",Object(a.b)("strong",{parentName:"p"},'"Posted"')," property has been added for orders. In the future, only orders with this property will take part in subsequent calculations (for example, calculation of the reserved quantity)."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=sample3",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to do so that instead of the\xa0",Object(a.b)("strong",{parentName:"p"},"\u041e\u041a")," button on the order form, there is a ",Object(a.b)("strong",{parentName:"p"},"Post")," button that simultaneously sets the ",Object(a.b)("strong",{parentName:"p"},"Posted")," property for the order, saves changes, and closes the form."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=solution3",mdxType:"CodeSample"}),Object(a.b)("p",null,"Each time the renamed ",Object(a.b)("strong",{parentName:"p"},"OK")," button is pressed, the ",Object(a.b)("strong",{parentName:"p"},"post"),' action will be executed in a single transaction. With this scheme, if the user wants to "post" a document, they just need to go to the edit form, uncheck the ',Object(a.b)("strong",{parentName:"p"},"Posted")," box in the document header, then click ",Object(a.b)("strong",{parentName:"p"},"Save")," and ",Object(a.b)("strong",{parentName:"p"},"Close"),"."),Object(a.b)("h2",{id:"line-selection"},"Line selection"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"We have an order with an edit form similar to the ",Object(a.b)("strong",{parentName:"p"},"Posting documents")," example."),Object(a.b)("p",null,"We need to add a possibility to enter order lines by specifying the quantify in the table containing the list of products. Any changes in order lines and this table should be automatically synchronized with each other."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=solution4",mdxType:"CodeSample"}),Object(a.b)("p",null,"The form will look like this:"),Object(a.b)("p",null,Object(a.b)("img",{src:o(887).default}),Object(a.b)("img",{src:o(888).default})),Object(a.b)("p",null,"If the quantity changes on the ",Object(a.b)("strong",{parentName:"p"},"Selection"),"\xa0tab, the system will automatically change order lines. If the order lines are changed, the quantity on the ",Object(a.b)("strong",{parentName:"p"},"Selection")," tab will change as well."),Object(a.b)("p",null,"If an order has two or more lines with one book, the system will reset the quantity in the first lines and set the total in the last line. If you want the change to affect the last line only, you need to use the following action during saving:"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=solution4a",mdxType:"CodeSample"}),Object(a.b)("p",null,"However, users may not understand this behavior, since after they enter a particular quantity on the ",Object(a.b)("strong",{parentName:"p"},"Selection")," tab, the total quantity for all lines will be shown in the same column and it will be different from the entered value."),Object(a.b)("h2",{id:"aggregated-documents"},"Aggregated documents"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"We have the order logic."),Object(a.b)("p",null,"We need to add some invoicing logic so that an order could automatically create a corresponding invoice."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("p",null,"In order to implement this logic, you need to create an abstract ",Object(a.b)("strong",{parentName:"p"},"Invoice")," ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Classes"},"class")," with the necessary set of ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Property_extension"},"abstract properties"),"."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=solution5a",mdxType:"CodeSample"}),Object(a.b)("p",null,"A form containing the list of objects of this abstract class is also created. It will contain the objects of all classes inherited from the ",Object(a.b)("strong",{parentName:"p"},"Invoice")," class."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=solution5b",mdxType:"CodeSample"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"edit")," property will call the current object's edit form defined for its class. If it's not defined for the current object's class, no action will be taken. The ",Object(a.b)("strong",{parentName:"p"},"DELETE")," property will delete the current object if it doesn't violate any constrains."),Object(a.b)("p",null,"An object of an abstract class cannot exist in the system. In order for the user to manually create an invoice, a separate class ",Object(a.b)("strong",{parentName:"p"},"UserInvoice")," is created . Also, it requires the creation of properties symmetrical to the abstract ones that are later added as their implementation."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=solution5c",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's create a form for editing a user-generated invoice. Let's add a button for adding a user-generated invoice to the form with a list of abstract invoices."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=solution5d",mdxType:"CodeSample"}),Object(a.b)("p",null,"For orders, let's create a ",Object(a.b)("strong",{parentName:"p"},"createInvoice")," option that will be used for generating an invoice. We will now need to create a ",Object(a.b)("strong",{parentName:"p"},"OrderInvoice")," class that will be inherited from ",Object(a.b)("strong",{parentName:"p"},"Invoice"),". An object of this class will be automatically created and deleted by the system for every order with the ",Object(a.b)("strong",{parentName:"p"},"createInvoice")," option. Therefore, this invoice is an ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Aggregations"},"aggregated object")," for the corresponding order. Aggregation for the invoice line relative to the order line is created identically."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=solution5e",mdxType:"CodeSample"}),Object(a.b)("p",null,"We specify that an attempt to edit such an aggregated invoice will have to open the edit form for the associated order."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDocument&block=solution5f",mdxType:"CodeSample"}),Object(a.b)("p",null,"When you try to delete an invoice created for an order, you will see an error message."),Object(a.b)("p",null,"The fundamental difference between this aggregation approach and one based on generating an invoice against an order is that the system automatically ensures synchronization between orders and invoices. When creating order-based invoices, the user has to manually modify them if corresponding orders are changed. Otherwise, it will require a separate event handling mechanism that will be responsible for it."))}d.isMDXComponent=!0},57:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return d})),o.d(t,"CodeSample",(function(){return u})),o.d(t,"default",(function(){return b}));var n=o(3),r=o(7),a=o(0),s=o.n(a),i=o(751),l=o(754),c={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},d=[],u=function(e){var t=e.url,o=e.lines,n=Object(a.useState)(""),r=n[0],c=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),r?o?Object(i.b)(s.a.Fragment,null,Object(i.b)(l.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(s.a.Fragment,null,Object(i.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:d,CodeSample:u};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,o,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},751:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?r.a.createElement(b,i(i({ref:t},c),{},{components:o})):r.a.createElement(b,i({ref:t},c))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},753:function(e,t){function o(e){let t,o=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))o.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,a]=t;if(n&&a){n=parseInt(n),a=parseInt(a);const e=n<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=n;t!==a;t+=e)o.push(t)}}return o}t.default=o,e.exports=o},754:function(e,t,o){"use strict";o.d(t,"a",(function(){return P}));var n=o(3),r=o(0),a=o.n(r),s=o(755),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:o(23).a,theme:i};function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var o=e.length;return o>0&&e[o-1]===t?e:e.concat(t)},b=function(e,t){var o=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,o){var n=o.languages,r=o.style;return n&&!n.includes(t)||o.types.forEach((function(t){var o=p({},e[t],r);e[t]=o})),e}),n);return r.root=o,r.plain=p({},o,{backgroundColor:null}),r};function h(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(o[n]=e[n]);return o}var f=function(e){function t(){for(var t=this,o=[],n=arguments.length;n--;)o[n]=arguments[n];e.apply(this,o),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var o=e.theme?b(e.theme,e.language):void 0;return t.themeDict=o})),c(this,"getLineProps",(function(e){var o=e.key,n=e.className,r=e.style,a=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==o&&(a.key=o),n&&(a.className+=" "+n),a})),c(this,"getStyleForToken",(function(e){var o=e.types,n=e.empty,r=o.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===o[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return a[o[0]];var s=n?{display:"inline-block"}:{},i=o.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),c(this,"getTokenProps",(function(e){var o=e.key,n=e.className,r=e.style,a=e.token,s=p({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?p({},s.style,r):r),void 0!==o&&(s.key=o),n&&(s.className+=" "+n),s})),c(this,"tokenize",(function(e,t,o,n){var r={code:t,grammar:o,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,o=e.language,n=e.code,r=e.children,a=this.getThemeDict(this.props),s=t.languages[o];return r({tokens:function(e){for(var t=[[]],o=[e],n=[0],r=[e.length],a=0,s=0,i=[],l=[i];s>-1;){for(;(a=n[s]++)<r[s];){var c=void 0,p=t[s],b=o[s][a];if("string"==typeof b?(p=s>0?p:["plain"],c=b):(p=m(p,b.type),b.alias&&(p=m(p,b.alias)),c=b.content),"string"==typeof c){var h=c.split(d),f=h.length;i.push({types:p,content:h[0]});for(var g=1;g<f;g++)u(i),l.push(i=[]),i.push({types:p,content:h[g]})}else s++,t.push(p),o.push(c),n.push(0),r.push(c.length)}s--,t.pop(),o.pop(),n.pop(),r.pop()}return u(i),l}(void 0!==s?this.tokenize(t,n,s,o):[n]),className:"prism-code language-"+o,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var g=o(753),y=o.n(g),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},v=o(757),O=o(752);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(v.a)(),o=e.theme||j,n=e.darkTheme||o;return t?n:o},w=o(756),C=o(58),S=o.n(C);const x=/{([\d,-]+)}/,T=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},o=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${o})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},N=/(?:title=")(.*)(?:")/;function P({children:e,className:t,metastring:o}){const{prism:i}=Object(O.useThemeConfig)(),[c,p]=Object(r.useState)(!1),[d,u]=Object(r.useState)(!1);Object(r.useEffect)((()=>{u(!0)}),[]);const m=Object(r.useRef)(null);let b=[],h="";const g=k(),j=Array.isArray(e)?e.join(""):e;if(o&&x.test(o)){const e=o.match(x)[1];b=y()(e).filter((e=>e>0))}o&&N.test(o)&&(h=o.match(N)[1]);let v=t&&t.replace(/language-/,"");!v&&i.defaultLanguage&&(v=i.defaultLanguage);let C=j.replace(/\n$/,"");if(0===b.length&&void 0!==v){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}})(v),o=j.replace(/\n$/,"").split("\n");let n;for(let r=0;r<o.length;){const a=r+1,s=o[r].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":n=a;break;case"highlight-end":e+=`${n}-${a-1},`}o.splice(r,1)}else r+=1}b=y()(e),C=o.join("\n")}const P=()=>{!function(e,{target:t=document.body}={}){const o=document.createElement("textarea"),n=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}o.remove(),a&&(r.removeAllRanges(),r.addRange(a)),n&&n.focus()}(C),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(f,Object(n.a)({},l,{key:String(d),theme:g,code:C,language:v}),(({className:e,style:t,tokens:o,getLineProps:r,getTokenProps:i})=>a.a.createElement("div",{className:S.a.codeBlockContainer},h&&a.a.createElement("div",{style:t,className:S.a.codeBlockTitle},h),a.a.createElement("div",{className:Object(s.a)(S.a.codeBlockContent,v)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,S.a.codeBlock,"thin-scrollbar",{[S.a.codeBlockWithTitle]:h})},a.a.createElement("div",{className:S.a.codeBlockLines,style:t},o.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const o=r({line:e,key:t});return b.includes(t+1)&&(o.className=`${o.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(n.a)({key:t},o),e.map(((e,t)=>a.a.createElement("span",Object(n.a)({key:t},i({token:e,key:t}))))))})))),a.a.createElement("button",{ref:m,type:"button","aria-label":Object(w.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(S.a.copyButton),onClick:P},c?a.a.createElement(w.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(w.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}},887:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/46367490-6fa52edb76262e3073bb441f407952dd.png"},888:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/46367491-700a0f70aea96127095f971236f1e8c0.png"}}]);