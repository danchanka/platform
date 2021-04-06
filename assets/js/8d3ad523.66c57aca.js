(window.webpackJsonp=window.webpackJsonp||[]).push([[374,440],{449:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),i=(n(0),n(747)),a=n(57),l={title:"How-to: Binding properties"},s={unversionedId:"How-to_Binding_properties",id:"version-v4/How-to_Binding_properties",isDocsHomePage:!1,title:"How-to: Binding properties",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Binding_properties.md",slug:"/How-to_Binding_properties",permalink:"/platform/How-to_Binding_properties",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/How-to_Binding_properties.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"How-to: Overriding values",permalink:"/platform/How-to_Overriding_values"},next:{title:"How-to: Metaprogramming",permalink:"/platform/How-to_Metaprogramming"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Condition",id:"condition-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"example-1"},"Example 1"),Object(i.b)("h3",{id:"condition"},"Condition"),Object(i.b)("p",null,"The concepts of Country, Region and City are defined. A region and a city are always located in a certain country. A city may have a specified region, but need not."),Object(i.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=sample1",mdxType:"CodeSample"}),Object(i.b)("p",null,"We need to define the logic such that a city can only be linked to a region belonging to the country it is in."),Object(i.b)("h3",{id:"solution"},"Solution"),Object(i.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=solution1",mdxType:"CodeSample"}),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"/platform/CONSTRAINT_instruction"},"CONSTRAINT")," instruction defines a condition that must always be ",Object(i.b)("strong",{parentName:"p"},"NULL"),". In this case, the constraint based on this condition will be violated if there is a country defined for the region, a region for the city, and a country for the region, and the region's country is not the same as the city's country. The ",Object(i.b)("strong",{parentName:"p"},"CHECKED BY"),"\xa0block indicates that when you select a region in a dialog, the regions will be filtered by default so as not to violate this constraint. It should be noted that if no country has yet been set for the given city then the condition will always be ",Object(i.b)("strong",{parentName:"p"},"NULL"),", and all existing regions will be shown in the dialog."),Object(i.b)("h2",{id:"example-2"},"Example 2"),Object(i.b)("h3",{id:"condition-1"},"Condition"),Object(i.b)("p",null,"Similar to Example 1."),Object(i.b)("p",null,"We need to make it so that the country is automatically filled when a region is chosen."),Object(i.b)("h3",{id:"solution-1"},"Solution"),Object(i.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=solution2",mdxType:"CodeSample"}),Object(i.b)("p",null,"It should be noted that after the user has chosen a region and a country is set, when the dialog is called again, only the regions of the selected country will be displayed. If the user wants to see all the regions again, he will need to clear the country first. The expression checks that the country has not changed is added to provide the following behavior: if the cities are changed by external actions that change both the country and the region, then the country should not be changed with this event."),Object(i.b)("h2",{id:"example-3"},"Example 3"),Object(i.b)("h3",{id:"condition-2"},"Condition"),Object(i.b)("p",null,"Similar to\xa0Example 1."),Object(i.b)("p",null,"We need to create the same kind of association between the region and the city, but in such a way that a region cannot be selected until a country has been set first."),Object(i.b)("h3",{id:"solution-2"},"Solution"),Object(i.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=solution3",mdxType:"CodeSample"}),Object(i.b)("p",null,"The difference from the first example is that the new condition will also be true if a region is set and a country is not. Therefore, in this case the dialog will not display any regions."),Object(i.b)("h2",{id:"example-4"},"Example 4"),Object(i.b)("h3",{id:"condition-3"},"Condition"),Object(i.b)("p",null,"Similar to\xa0",Object(i.b)("strong",{parentName:"p"},"Example 1"),"."),Object(i.b)("p",null,"If the user first selects a region, and then a country that does not correspond to the original region, the user will receive an error message when trying to save."),Object(i.b)("p",null,"We need to make it so that the region is dropped when a new country is selected, if the region does not correspond to that country."),Object(i.b)("h3",{id:"solution-3"},"Solution"),Object(i.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=solution4",mdxType:"CodeSample"}),Object(i.b)("h2",{id:"example-5"},"Example 5"),Object(i.b)("h3",{id:"condition-4"},"Condition"),Object(i.b)("p",null,"Similar to\xa0",Object(i.b)("strong",{parentName:"p"},"Example 1"),"."),Object(i.b)("p",null,"The solution to the first example has one drawback. The system will not allow you to change the country of a particular region, if the city links to it. The constraint will be violated."),Object(i.b)("p",null,"We need to make it so that when a region's country is changed, it also changes automatically for all that region's cities."),Object(i.b)("h3",{id:"solution-4"},"Solution"),Object(i.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=solution5",mdxType:"CodeSample"}))}d.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return d})),n.d(t,"CodeSample",(function(){return u})),n.d(t,"default",(function(){return m}));var o=n(3),r=n(7),i=n(0),a=n.n(i),l=n(747),s=n(750),c={},p={unversionedId:"CodeSample",id:"version-v4/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-v4/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/CodeSample.mdx",version:"v4"},d=[],u=function(e){var t=e.url,n=e.lines,o=Object(i.useState)(""),r=o[0],c=o[1];return Object(i.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),r?n?Object(l.b)(a.a.Fragment,null,Object(l.b)(s.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(l.b)("br",null)):Object(l.b)(a.a.Fragment,null,Object(l.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(l.b)("br",null)):Object(l.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},h={toc:d,CodeSample:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},h,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(a,".").concat(h)]||d[h]||u[h]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},749:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,i]=t;if(o&&i){o=parseInt(o),i=parseInt(i);const e=o<i?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(i+=e);for(let t=o;t!==i;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var o=n(3),r=n(0),i=n.n(r),a=n(751),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(23).a,theme:l};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var y=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,i=p({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(i.style=a.plain),void 0!==r&&(i.style=void 0!==i.style?p({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return i[n[0]];var a=o?{display:"inline-block"}:{},l=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[a].concat(l))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,i=e.token,a=p({},b(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),c(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var i=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,i=this.getThemeDict(this.props),a=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],i=0,a=0,l=[],s=[l];a>-1;){for(;(i=o[a]++)<r[a];){var c=void 0,p=t[a],m=n[a][i];if("string"==typeof m?(p=a>0?p:["plain"],c=m):(p=h(p,m.type),m.alias&&(p=h(p,m.alias)),c=m.content),"string"==typeof c){var b=c.split(d),y=b.length;l.push({types:p,content:b[0]});for(var g=1;g<y;g++)u(l),s.push(l=[]),l.push({types:p,content:b[g]})}else a++,t.push(p),n.push(c),o.push(0),r.push(c.length)}a--,t.pop(),n.pop(),o.pop(),r.pop()}return u(l),s}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var g=n(749),f=n.n(g),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(753),O=n(748);var k=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||v,o=e.darkTheme||n;return t?o:n},x=n(752),w=n(58),C=n.n(w);const S=/{([\d,-]+)}/,T=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},E=/(?:title=")(.*)(?:")/;function N({children:e,className:t,metastring:n}){const{prism:l}=Object(O.useThemeConfig)(),[c,p]=Object(r.useState)(!1),[d,u]=Object(r.useState)(!1);Object(r.useEffect)((()=>{u(!0)}),[]);const h=Object(r.useRef)(null);let m=[],b="";const g=k(),v=Array.isArray(e)?e.join(""):e;if(n&&S.test(n)){const e=n.match(S)[1];m=f()(e).filter((e=>e>0))}n&&E.test(n)&&(b=n.match(E)[1]);let j=t&&t.replace(/language-/,"");!j&&l.defaultLanguage&&(j=l.defaultLanguage);let w=v.replace(/\n$/,"");if(0===m.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}})(j),n=v.replace(/\n$/,"").split("\n");let o;for(let r=0;r<n.length;){const i=r+1,a=n[r].match(t);if(null!==a){switch(a.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${i},`;break;case"highlight-start":o=i;break;case"highlight-end":e+=`${o}-${i-1},`}n.splice(r,1)}else r+=1}m=f()(e),w=n.join("\n")}const N=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let i=!1;r.rangeCount>0&&(i=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}n.remove(),i&&(r.removeAllRanges(),r.addRange(i)),o&&o.focus()}(w),p(!0),setTimeout((()=>p(!1)),2e3)};return i.a.createElement(y,Object(o.a)({},s,{key:String(d),theme:g,code:w,language:j}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:l})=>i.a.createElement("div",{className:C.a.codeBlockContainer},b&&i.a.createElement("div",{style:t,className:C.a.codeBlockTitle},b),i.a.createElement("div",{className:Object(a.a)(C.a.codeBlockContent,j)},i.a.createElement("div",{tabIndex:0,className:Object(a.a)(e,C.a.codeBlock,"thin-scrollbar",{[C.a.codeBlockWithTitle]:b})},i.a.createElement("div",{className:C.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return m.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),i.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>i.a.createElement("span",Object(o.a)({key:t},l({token:e,key:t}))))))})))),i.a.createElement("button",{ref:h,type:"button","aria-label":Object(x.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(a.a)(C.a.copyButton),onClick:N},c?i.a.createElement(x.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):i.a.createElement(x.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);