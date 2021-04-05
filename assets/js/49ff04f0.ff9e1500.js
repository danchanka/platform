(window.webpackJsonp=window.webpackJsonp||[]).push([[206,460],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),r=(n(0),n(751)),s=n(57),l={title:"How-to: Registers"},i={unversionedId:"How-to_Registers",id:"version-1.0.0/How-to_Registers",isDocsHomePage:!1,title:"How-to: Registers",description:"Accumulation ledger",source:"@site/versioned_docs/version-1.0.0/How-to_Registers.md",slug:"/How-to_Registers",permalink:"/platform/docs/How-to_Registers",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/How-to_Registers.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: Working with documents",permalink:"/platform/docs/How-to_Working_with_documents"},next:{title:"How-to: Numbering",permalink:"/platform/docs/How-to_Numbering"}},c=[{value:"Accumulation ledger",id:"accumulation-ledger",children:[]},{value:"Information ledger",id:"information-ledger",children:[]}],p={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"accumulation-ledger"},"Accumulation ledger"),Object(r.b)("p",null,"Let's assume we need to implement the logic for calculating the SKU balances."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skumaster",mdxType:"CodeSample"}),Object(r.b)("p",null,"Theoretically we could just create a ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Properties"},"property")," that would sum up all incomings and subtract all outgoings, with all operations set explicitly. The weakness of this approach is that whenever a new operation is added, it needs to be added to the formula for calculating the balance. In addition, it will be difficult to build a form with a list of all the operations that can affect the balance for a specific SKU and warehouse. ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Modularity"},"Modularity")," will also be violated, because the module in which the balance property is declared will depend on all modules containing operations that affect it."),Object(r.b)("p",null,"To give the system efficient ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Extensions"},"extensibility"),", it is best to implement this kind of functionality using ",Object(r.b)("em",{parentName:"p"},"ledgers"),". To do this, we introduce an abstract class ",Object(r.b)("strong",{parentName:"p"},"SKULedger"),". One instance of the class will reflect a single change in the balance by a given amount (positive or negative) for one SKU in one warehouse. Abstract properties are set for it, which need to be defined when the class is implemented."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"All ledgers can have an arbitrary number and type of measurements. In this example they are the SKU and the Warehouse."))),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skuledger",mdxType:"CodeSample"}),Object(r.b)("p",null,"The current balance and the balance for a certain time period are calculated only from the properties of the ",Object(r.b)("strong",{parentName:"p"},"SKULedger")," class without reference to specific operations. This code can and must be declared in a separate module. Modules containing specific operations will use and extend this class."),Object(r.b)("p",null,"For example, let's look at one operation: ",Object(r.b)("em",{parentName:"p"},"Stock receipt.")),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skureceipt",mdxType:"CodeSample"}),Object(r.b)("p",null,'To "post" it into the ledger, we need to ',Object(r.b)("a",{parentName:"p",href:"/platform/docs/Class_extension"},"extend the class")," ",Object(r.b)("strong",{parentName:"p"},"SKULedger")," with a ",Object(r.b)("strong",{parentName:"p"},"ReceiptDetail")," class for stock receipt. We also need to ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Property_extension"},"extend the properties")," of the ledger."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skureceiptimplement",mdxType:"CodeSample"}),Object(r.b)("p",null,"Let's look at a more complex case, when we have a document recording transfer from one warehouse to another."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skutransfer",mdxType:"CodeSample"}),Object(r.b)("p",null,'In this case, the data from the document must be "posted" into the ledger twice. By analogy with stock receipt, we will post the line into the ledger as an outgoing operation with a negative value.'),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skutransferimplement",mdxType:"CodeSample"}),Object(r.b)("p",null,"To post it into the ledger for the warehouse where the SKUs are being transferred to, we use object ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/Aggregations"},"aggregation"),'. The line in the transfer document will generate an object, which in turn will be "posted" into the ledger.'),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=skutransferaggregation",mdxType:"CodeSample"}),Object(r.b)("p",null,"The ledger object will only be created when the transfer document has been posted. Therefore, in this case the ",Object(r.b)("strong",{parentName:"p"},"posted")," property will always equal ",Object(r.b)("strong",{parentName:"p"},"TRUE"),"."),Object(r.b)("p",null,"It should be noted that documents with one warehouse can also be posted into the ledger using aggregation. The aggregation scheme is more flexible but requires the creation of additional objects in the system, which may be worse from a performance perspective."),Object(r.b)("h3",{id:"information-ledger"},"Information ledger"),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"information ledger")," technique makes it possible to implement the logic of changing a certain indicator over time in a flexible way. Unlike the inventory ledger, it calculates not the sum of an indicator but its latest value over a certain period of time."),Object(r.b)("p",null,"To implement this technique we introduce an abstract class ",Object(r.b)("strong",{parentName:"p"},"PriceLedger"),". Its instance reflects a single price change for one SKU and one warehouse at a certain time."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=priceledger",mdxType:"CodeSample"}),Object(r.b)("p",null,"As a result, we get properties giving the price by SKU and warehouse for the date/time, the latest price, and also the latest price for that SKU for all warehouses."),Object(r.b)("p",null,"Documents are posted into the information ledger the same way they are posted into the inventory ledger."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLedger&block=pricereceiptimplement",mdxType:"CodeSample"}),Object(r.b)("p",null,"In this case the signature of the abstract property needs to be specified explicitly, because there can be several of them with the same name and namespace (properties are named in just the same way for class ",Object(r.b)("strong",{parentName:"p"},"SKULedger"),")."))}d.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return d})),n.d(t,"CodeSample",(function(){return u})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=n(0),s=n.n(r),l=n(751),i=n(754),c={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},d=[],u=function(e){var t=e.url,n=e.lines,o=Object(r.useState)(""),a=o[0],c=o[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),a?n?Object(l.b)(s.a.Fragment,null,Object(l.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(l.b)("br",null)):Object(l.b)(s.a.Fragment,null,Object(l.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(l.b)("br",null)):Object(l.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:d,CodeSample:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.a.createElement(b,l(l({ref:t},c),{},{components:n})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},753:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,a,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var o=n(3),a=n(0),r=n.n(a),s=n(755),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:l};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=p({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var g=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==a&&(r.style=void 0!==r.style?p({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var s=o?{display:"inline-block"}:{},l=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(l))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,s=p({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(s.style=void 0!==s.style?p({},s.style,a):a),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),c(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var r=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),s=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,s=0,l=[],i=[l];s>-1;){for(;(r=o[s]++)<a[s];){var c=void 0,p=t[s],b=n[s][r];if("string"==typeof b?(p=s>0?p:["plain"],c=b):(p=m(p,b.type),b.alias&&(p=m(p,b.alias)),c=b.content),"string"==typeof c){var h=c.split(d),g=h.length;l.push({types:p,content:h[0]});for(var f=1;f<g;f++)u(l),i.push(l=[]),l.push({types:p,content:h[f]})}else s++,t.push(p),n.push(c),o.push(0),a.push(c.length)}s--,t.pop(),n.pop(),o.pop(),a.pop()}return u(l),i}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var f=n(753),y=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(757),O=n(752);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,o=e.darkTheme||n;return t?o:n},w=n(756),C=n(58),x=n.n(C);const S=/{([\d,-]+)}/,T=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},N=/(?:title=")(.*)(?:")/;function E({children:e,className:t,metastring:n}){const{prism:l}=Object(O.useThemeConfig)(),[c,p]=Object(a.useState)(!1),[d,u]=Object(a.useState)(!1);Object(a.useEffect)((()=>{u(!0)}),[]);const m=Object(a.useRef)(null);let b=[],h="";const f=k(),v=Array.isArray(e)?e.join(""):e;if(n&&S.test(n)){const e=n.match(S)[1];b=y()(e).filter((e=>e>0))}n&&N.test(n)&&(h=n.match(N)[1]);let j=t&&t.replace(/language-/,"");!j&&l.defaultLanguage&&(j=l.defaultLanguage);let C=v.replace(/\n$/,"");if(0===b.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}})(j),n=v.replace(/\n$/,"").split("\n");let o;for(let a=0;a<n.length;){const r=a+1,s=n[a].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":o=r;break;case"highlight-end":e+=`${o}-${r-1},`}n.splice(a,1)}else a+=1}b=y()(e),C=n.join("\n")}const E=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let r=!1;a.rangeCount>0&&(r=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),r&&(a.removeAllRanges(),a.addRange(r)),o&&o.focus()}(C),p(!0),setTimeout((()=>p(!1)),2e3)};return r.a.createElement(g,Object(o.a)({},i,{key:String(d),theme:f,code:C,language:j}),(({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:l})=>r.a.createElement("div",{className:x.a.codeBlockContainer},h&&r.a.createElement("div",{style:t,className:x.a.codeBlockTitle},h),r.a.createElement("div",{className:Object(s.a)(x.a.codeBlockContent,j)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,x.a.codeBlock,"thin-scrollbar",{[x.a.codeBlockWithTitle]:h})},r.a.createElement("div",{className:x.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return b.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(o.a)({key:t},l({token:e,key:t}))))))})))),r.a.createElement("button",{ref:m,type:"button","aria-label":Object(w.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(x.a.copyButton),onClick:E},c?r.a.createElement(w.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(w.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);