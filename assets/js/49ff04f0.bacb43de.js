(window.webpackJsonp=window.webpackJsonp||[]).push([[208,462],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(751)),s=n(57),i={title:"How-to: Registers"},l={unversionedId:"How-to_Registers",id:"version-1.0.0/How-to_Registers",isDocsHomePage:!1,title:"How-to: Registers",description:"Accumulation ledger",source:"@site/versioned_docs/version-1.0.0/How-to_Registers.md",slug:"/How-to_Registers",permalink:"/platform/docs/How-to_Registers",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/How-to_Registers.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: Working with documents",permalink:"/platform/docs/How-to_Working_with_documents"},next:{title:"How-to: Numbering",permalink:"/platform/docs/How-to_Numbering"}},c=[{value:"Accumulation ledger",id:"accumulation-ledger",children:[]},{value:"Information ledger",id:"information-ledger",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"accumulation-ledger"},"Accumulation ledger"),Object(a.b)("p",null,"Let's assume we need to implement the logic for calculating the SKU balances."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skumaster",mdxType:"CodeSample"}),Object(a.b)("p",null,"Theoretically we could just create a ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Properties"},"property")," that would sum up all incomings and subtract all outgoings, with all operations set explicitly. The weakness of this approach is that whenever a new operation is added, it needs to be added to the formula for calculating the balance. In addition, it will be difficult to build a form with a list of all the operations that can affect the balance for a specific SKU and warehouse. ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Modularity"},"Modularity")," will also be violated, because the module in which the balance property is declared will depend on all modules containing operations that affect it."),Object(a.b)("p",null,"To give the system efficient ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Extensions"},"extensibility"),", it is best to implement this kind of functionality using ",Object(a.b)("em",{parentName:"p"},"ledgers"),". To do this, we introduce an abstract class ",Object(a.b)("strong",{parentName:"p"},"SKULedger"),". One instance of the class will reflect a single change in the balance by a given amount (positive or negative) for one SKU in one warehouse. Abstract properties are set for it, which need to be defined when the class is implemented."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"All ledgers can have an arbitrary number and type of measurements. In this example they are the SKU and the Warehouse."))),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skuledger",mdxType:"CodeSample"}),Object(a.b)("p",null,"The current balance and the balance for a certain time period are calculated only from the properties of the ",Object(a.b)("strong",{parentName:"p"},"SKULedger")," class without reference to specific operations. This code can and must be declared in a separate module. Modules containing specific operations will use and extend this class."),Object(a.b)("p",null,"For example, let's look at one operation: ",Object(a.b)("em",{parentName:"p"},"Stock receipt.")),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skureceipt",mdxType:"CodeSample"}),Object(a.b)("p",null,'To "post" it into the ledger, we need to ',Object(a.b)("a",{parentName:"p",href:"/platform/docs/Class_extension"},"extend the class")," ",Object(a.b)("strong",{parentName:"p"},"SKULedger")," with a ",Object(a.b)("strong",{parentName:"p"},"ReceiptDetail")," class for stock receipt. We also need to ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Property_extension"},"extend the properties")," of the ledger."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skureceiptimplement",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's look at a more complex case, when we have a document recording transfer from one warehouse to another."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skutransfer",mdxType:"CodeSample"}),Object(a.b)("p",null,'In this case, the data from the document must be "posted" into the ledger twice. By analogy with stock receipt, we will post the line into the ledger as an outgoing operation with a negative value.'),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skutransferimplement",mdxType:"CodeSample"}),Object(a.b)("p",null,"To post it into the ledger for the warehouse where the SKUs are being transferred to, we use object ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Aggregations"},"aggregation"),'. The line in the transfer document will generate an object, which in turn will be "posted" into the ledger.'),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skutransferaggregation",mdxType:"CodeSample"}),Object(a.b)("p",null,"The ledger object will only be created when the transfer document has been posted. Therefore, in this case the ",Object(a.b)("strong",{parentName:"p"},"posted")," property will always equal ",Object(a.b)("strong",{parentName:"p"},"TRUE"),"."),Object(a.b)("p",null,"It should be noted that documents with one warehouse can also be posted into the ledger using aggregation. The aggregation scheme is more flexible but requires the creation of additional objects in the system, which may be worse from a performance perspective."),Object(a.b)("h3",{id:"information-ledger"},"Information ledger"),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"information ledger")," technique makes it possible to implement the logic of changing a certain indicator over time in a flexible way. Unlike the inventory ledger, it calculates not the sum of an indicator but its latest value over a certain period of time."),Object(a.b)("p",null,"To implement this technique we introduce an abstract class ",Object(a.b)("strong",{parentName:"p"},"PriceLedger"),". Its instance reflects a single price change for one SKU and one warehouse at a certain time."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=priceledger",mdxType:"CodeSample"}),Object(a.b)("p",null,"As a result, we get properties giving the price by SKU and warehouse for the date/time, the latest price, and also the latest price for that SKU for all warehouses."),Object(a.b)("p",null,"Documents are posted into the information ledger the same way they are posted into the inventory ledger."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=pricereceiptimplement",mdxType:"CodeSample"}),Object(a.b)("p",null,"In this case the signature of the abstract property needs to be specified explicitly, because there can be several of them with the same name and namespace (properties are named in just the same way for class ",Object(a.b)("strong",{parentName:"p"},"SKULedger"),")."))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=n(0),s=n.n(a),i=n(751),l=n(756),c={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],d=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],c=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),r?n?Object(i.b)(s.a.Fragment,null,Object(i.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(s.a.Fragment,null,Object(i.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.a.createElement(b,i(i({ref:t},c),{},{components:n})):r.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},753:function(e,t,n){"use strict";var o=n(0),r=n(754);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},754:function(e,t,n){"use strict";var o=n(0),r=n.n(o).a.createContext(void 0);t.a=r},755:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},756:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var o=n(3),r=n(0),a=n.n(r),s=n(757),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:i};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function h(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var s=o?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,s=p({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?p({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),c(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,s=0,i=[],l=[i];s>-1;){for(;(a=o[s]++)<r[s];){var c=void 0,p=t[s],b=n[s][a];if("string"==typeof b?(p=s>0?p:["plain"],c=b):(p=m(p,b.type),b.alias&&(p=m(p,b.alias)),c=b.content),"string"==typeof c){var h=c.split(u),f=h.length;i.push({types:p,content:h[0]});for(var g=1;g<f;g++)d(i),l.push(i=[]),i.push({types:p,content:h[g]})}else s++,t.push(p),n.push(c),o.push(0),r.push(c.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return d(i),l}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var g=n(755),y=n.n(g),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(753),O=n(752),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||v,o=e.darkTheme||n;return t?o:n},w=n(758),C=n(58),x=n.n(C),S=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")},N=/(?:title=")(.*)(?:")/;function E(e){var t=e.children,n=e.className,i=e.metastring,c=Object(O.useThemeConfig)().prism,p=Object(r.useState)(!1),u=p[0],d=p[1],m=Object(r.useState)(!1),b=m[0],h=m[1];Object(r.useEffect)((function(){h(!0)}),[]);var g=Object(r.useRef)(null),v=[],j="",C=k(),E=Array.isArray(t)?t.join(""):t;if(i&&S.test(i)){var L=i.match(S)[1];v=y()(L).filter((function(e){return e>0}))}i&&N.test(i)&&(j=i.match(N)[1]);var P=n&&n.replace(/language-/,"");!P&&c.defaultLanguage&&(P=c.defaultLanguage);var U=E.replace(/\n$/,"");if(0===v.length&&void 0!==P){for(var D,B="",_=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(P),R=E.replace(/\n$/,"").split("\n"),A=0;A<R.length;){var H=A+1,I=R[A].match(_);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=H+",";break;case"highlight-start":D=H;break;case"highlight-end":B+=D+"-"+(H-1)+","}R.splice(A,1)}else A+=1}v=y()(B),U=R.join("\n")}var M=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(U),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.a.createElement(f,Object(o.a)({},l,{key:String(b),theme:C,code:U,language:P}),(function(e){var t,n=e.className,r=e.style,i=e.tokens,l=e.getLineProps,c=e.getTokenProps;return a.a.createElement("div",{className:x.a.codeBlockContainer},j&&a.a.createElement("div",{style:r,className:x.a.codeBlockTitle},j),a.a.createElement("div",{className:Object(s.a)(x.a.codeBlockContent,P)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=j,t))},a.a.createElement("div",{className:x.a.codeBlockLines,style:r},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(o.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(o.a)({key:t},c({token:e,key:t})))})))})))),a.a.createElement("button",{ref:g,type:"button","aria-label":Object(w.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(x.a.copyButton),onClick:M},u?a.a.createElement(w.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(w.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);