(window.webpackJsonp=window.webpackJsonp||[]).push([[464,460],{537:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(751)),l=n(57),s={title:"Simple constraints"},c={unversionedId:"Simple_constraints",id:"version-1.0.0/Simple_constraints",isDocsHomePage:!1,title:"Simple constraints",description:"The platform currently supports four types of simple constraints: consequence, exception, equality, and definiteness. For all simple constraints, an automatic resolution mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity.",source:"@site/versioned_docs/version-1.0.0/Simple_constraints.md",slug:"/Simple_constraints",permalink:"/platform/docs/Simple_constraints",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Simple_constraints.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Constraints: Overview",permalink:"/platform/docs/Constraints"},next:{title:"Classes: Overview",permalink:"/platform/docs/Classes"}},i=[{value:"Examples",id:"examples",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The platform currently supports four types of ",Object(a.b)("em",{parentName:"p"},"simple constraints"),": ",Object(a.b)("em",{parentName:"p"},"consequence"),", ",Object(a.b)("em",{parentName:"p"},"exception"),", ",Object(a.b)("em",{parentName:"p"},"equality"),", and ",Object(a.b)("em",{parentName:"p"},"definiteness"),". For all simple constraints, an ",Object(a.b)("em",{parentName:"p"},"automatic resolution")," mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},Object(a.b)("br",null),Object(a.b)("br",null)),Object(a.b)("th",{parentName:"tr",align:null},"Consequence"),Object(a.b)("th",{parentName:"tr",align:null},"Exception"),Object(a.b)("th",{parentName:"tr",align:null},"Equality"),Object(a.b)("th",{parentName:"tr",align:null},"Definiteness"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Number of properties"),Object(a.b)("td",{parentName:"tr",align:null},"2"),Object(a.b)("td",{parentName:"tr",align:null},"2...N"),Object(a.b)("td",{parentName:"tr",align:null},"2"),Object(a.b)("td",{parentName:"tr",align:null},"1")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Description"),Object(a.b)("td",{parentName:"tr",align:null},"If the value of one property (the ",Object(a.b)("em",{parentName:"td"},"premise"),") is non-",Object(a.b)("strong",null,"NULL"),", the value of the second property (the ",Object(a.b)("em",{parentName:"td"},"consequence"),") must also be non-",Object(a.b)("strong",null,"NULL")),Object(a.b)("td",{parentName:"tr",align:null},"Only one of the values of the specified properties must be non-",Object(a.b)("strong",null,"NULL")),Object(a.b)("td",{parentName:"tr",align:null},"If the value of one property is non-",Object(a.b)("strong",null,"NULL")," and the value of the second property is non-",Object(a.b)("strong",null,"NULL"),", they must be equal"),Object(a.b)("td",{parentName:"tr",align:null},"If all property parameters match specified classes, a non-",Object(a.b)("strong",null,"NULL")," value must be specified for them")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Instruction"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",null,Object(a.b)("a",{parentName:"td",href:"/platform/docs/Instruction=_"},"=>"))),Object(a.b)("td",{parentName:"tr",align:null},"Not yet implemented"),Object(a.b)("td",{parentName:"tr",align:null},"Not yet implemented"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",null,"NONULL")," option when defining properties")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Auto-resolution"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("p",null,"Two modes are supported:"),Object(a.b)("br",null),Object(a.b)("ul",null,Object(a.b)("br",null),Object(a.b)("li",null,Object(a.b)("strong",null,"LEFT")," - if the premise changes to non-",Object(a.b)("strong",null,"NULL"),", change the * consequence to non-",Object(a.b)("strong",null,"NULL")),Object(a.b)("br",null),Object(a.b)("li",null,Object(a.b)("strong",null,"RIGHT")," - if the consequence changes to ",Object(a.b)("strong",null,"NULL"),", change the premise to ",Object(a.b)("strong",null,"NULL")),Object(a.b)("br",null))),Object(a.b)("td",{parentName:"tr",align:null},"If one of the properties changes to non-",Object(a.b)("strong",null,"NULL"),", change the rest to ",Object(a.b)("strong",null,"NULL")),Object(a.b)("td",{parentName:"tr",align:null},"If one of the properties changes to a non-",Object(a.b)("strong",null,"NULL")," value, change the second to the same value"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("p",null,Object(a.b)("strong",null,"AGGR")," - if a property value changes to ",Object(a.b)("strong",null,"NULL"),", delete objects corresponding to the parameters"),Object(a.b)("br",null),Object(a.b)("p",null,Object(a.b)("strong",null,"DEFAULT")," value - if objects whose classes match the parameters classes are added/reclassified, change the property value for these objects to the default value."))))),Object(a.b)("p",null,"*","\xa0A change to ",Object(a.b)("strong",{parentName:"p"},"NULL"),"/non-",Object(a.b)("strong",{parentName:"p"},"NULL")," is the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"For ",Object(a.b)("a",{parentName:"li",href:"/platform/docs/Data_properties_DATA_"},"data")," properties - ",Object(a.b)("a",{parentName:"li",href:"/platform/docs/Property_change_CHANGE_"},"input")," ",Object(a.b)("strong",{parentName:"li"},"NULL")," or the default value for this property value class."),Object(a.b)("li",{parentName:"ul"},"For ",Object(a.b)("a",{parentName:"li",href:"/platform/docs/Classification_IS_AS_"},"membership")," to a class - deleting an object ","\\","\\"," adding an object of a class for which belonging to the class is checked."),Object(a.b)("li",{parentName:"ul"},"For an ",Object(a.b)("a",{parentName:"li",href:"/platform/docs/Grouping_GROUP_"},"aggregation")," constraint - (only if changing to non-",Object(a.b)("strong",{parentName:"li"},"NULL"),") create an object of the base class (",Object(a.b)("strong",{parentName:"li"},"System"),".",Object(a.b)("strong",{parentName:"li"},"Object"),"), change to non-",Object(a.b)("strong",{parentName:"li"},"NULL")," conditions of the aggregation constraint, write the values of the corresponding parameters to all grouping values.")),Object(a.b)("p",null,"Just as for a basic ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Constraints"},"constraint"),", for each simple constraint, a base\xa0event must be defined, which determines when the specified constraint will be checked.\xa0"),Object(a.b)("p",null,"Note that the definiteness constraint is a special case of the consequence, in which the consequence is a property that must be defined, and the premise is its signature (a property obtained from it using the corresponding ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Property_signature_CLASS_"},"operator"),")."),Object(a.b)("p",null,"There is also an implicit fifth kind of simple constraint, ",Object(a.b)("em",{parentName:"p"},"uniqueness"),", but it is combined with an aggregation operator (which returns this most unique value), and therefore it is not considered here. Together with consequences, this type of constraint allows to implement the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Aggregations"},"aggregation")," mechanism.\xa0"),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=means",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=n(0),l=n.n(a),s=n(751),c=n(754),i={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],b=function(e){var t=e.url,n=e.lines,r=Object(a.useState)(""),o=r[0],i=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?n?Object(s.b)(l.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(l.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:b};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,s(s({ref:t},i),{},{components:n})):o.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},753:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n(3),o=n(0),a=n.n(o),l=n(755),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(23).a,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=p({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=p({},g(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?p({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,s=[],c=[s];l>-1;){for(;(a=r[l]++)<o[l];){var i=void 0,p=t[l],d=n[l][a];if("string"==typeof d?(p=l>0?p:["plain"],i=d):(p=m(p,d.type),d.alias&&(p=m(p,d.alias)),i=d.content),"string"==typeof i){var g=i.split(u),h=g.length;s.push({types:p,content:g[0]});for(var f=1;f<h;f++)b(s),c.push(s=[]),s.push({types:p,content:g[f]})}else l++,t.push(p),n.push(i),r.push(0),o.push(i.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return b(s),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var f=n(753),y=n.n(f),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(757),v=n(752);var N=()=>{const{prism:e}=Object(v.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),n=e.theme||j,r=e.darkTheme||n;return t?r:n},k=n(756),L=n(58),w=n.n(L);const C=/{([\d,-]+)}/,x=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)},T=/(?:title=")(.*)(?:")/;function S({children:e,className:t,metastring:n}){const{prism:s}=Object(v.useThemeConfig)(),[i,p]=Object(o.useState)(!1),[u,b]=Object(o.useState)(!1);Object(o.useEffect)((()=>{b(!0)}),[]);const m=Object(o.useRef)(null);let d=[],g="";const f=N(),j=Array.isArray(e)?e.join(""):e;if(n&&C.test(n)){const e=n.match(C)[1];d=y()(e).filter((e=>e>0))}n&&T.test(n)&&(g=n.match(T)[1]);let O=t&&t.replace(/language-/,"");!O&&s.defaultLanguage&&(O=s.defaultLanguage);let L=j.replace(/\n$/,"");if(0===d.length&&void 0!==O){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}})(O),n=j.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const a=o+1,l=n[o].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":r=a;break;case"highlight-end":e+=`${r}-${a-1},`}n.splice(o,1)}else o+=1}d=y()(e),L=n.join("\n")}const S=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(L),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(h,Object(r.a)({},c,{key:String(u),theme:f,code:L,language:O}),(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:s})=>a.a.createElement("div",{className:w.a.codeBlockContainer},g&&a.a.createElement("div",{style:t,className:w.a.codeBlockTitle},g),a.a.createElement("div",{className:Object(l.a)(w.a.codeBlockContent,O)},a.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,w.a.codeBlock,"thin-scrollbar",{[w.a.codeBlockWithTitle]:g})},a.a.createElement("div",{className:w.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return d.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(r.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(r.a)({key:t},s({token:e,key:t}))))))})))),a.a.createElement("button",{ref:m,type:"button","aria-label":Object(k.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(w.a.copyButton),onClick:S},i?a.a.createElement(k.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(k.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);