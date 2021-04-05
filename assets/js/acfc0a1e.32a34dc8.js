(window.webpackJsonp=window.webpackJsonp||[]).push([[470,460],{543:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(751)),i=n(57),c={title:"How-to: Data export"},l={unversionedId:"How-to_Data_export",id:"version-1.0.0/How-to_Data_export",isDocsHomePage:!1,title:"How-to: Data export",description:"Example 1",source:"@site/versioned_docs/version-1.0.0/How-to_Data_export.md",slug:"/How-to_Data_export",permalink:"/platform/docs/How-to_Data_export",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/How-to_Data_export.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: Working with external formats: Overview",permalink:"/platform/docs/How-to_Working_with_external_formats"},next:{title:"How-to: Data import",permalink:"/platform/docs/How-to_Data_import"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have sales orders for several books."),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExport&block=sample1",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to create a button that exports the contents of the order in the XML format."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExport&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"To upload the data in the XML format, we need to create a form ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Structured_view"},"with the corresponding structure")," and then call the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/EXPORT_operator"},"EXPORT operator"),". This operator will generate a file based on the form and then write the file to the ",Object(a.b)("strong",{parentName:"p"},"exportFile")," property, which is then opened on the client side using the ",Object(a.b)("strong",{parentName:"p"},"open"),' action. The file will be opened in the software associated with its extension (i. e. ".json").'),Object(a.b)("p",null,"The resulting XML will look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'<Order timeStamp="13.11.18 12:28:58">\n   <Info>\n      <date>13.11.18</date>\n      <number>12</number>\n      <Customer>\n         <name>Customer2</name>\n         <address>Address2</address>\n      </Customer>\n   </Info>\n   <Specification count="2">\n      <Detail>\n         <nameBook>Book2</nameBook>\n         <quantity>1</quantity>\n         <price currency="USD">3.99</price>\n      </Detail>\n      <Detail>\n         <nameBook>Book1</nameBook>\n         <quantity>2</quantity>\n         <price currency="EUR">4.99</price>\n      </Detail>\n   </Specification>\n</Order>\n')),Object(a.b)("p",null,"The parent tag ",Object(a.b)("strong",{parentName:"p"},"Order")," matches the name of the form. Names of all other tags are defined either by a property name on the form (e. g. ",Object(a.b)("strong",{parentName:"p"},"date"),", ",Object(a.b)("strong",{parentName:"p"},"number"),"\xa0or ",Object(a.b)("strong",{parentName:"p"},"count"),") or by the special parameter\xa0",Object(a.b)("strong",{parentName:"p"},"EXTID")," (e. g. ",Object(a.b)("strong",{parentName:"p"},"name")," and ",Object(a.b)("strong",{parentName:"p"},"address"),"). Use of EXTID is preferable when the form contains several properties with the same name, but for different objects."),Object(a.b)("p",null,'To create "intermediate" tags (e. g. ',Object(a.b)("strong",{parentName:"p"},"Info"),", ",Object(a.b)("strong",{parentName:"p"},"Customer")," or ",Object(a.b)("strong",{parentName:"p"},"Specification"),"), the correspondingly nested groups are created to which the necessary properties are then exported."),Object(a.b)("p",null,"Use of the ",Object(a.b)("strong",{parentName:"p"},"ATTR"),"\xa0attribute allows you to put the value not in a separate tag, but in the attribute of a parent tag (e. g. ",Object(a.b)("strong",{parentName:"p"},"timeStamp")," or ",Object(a.b)("strong",{parentName:"p"},"count"),")."),Object(a.b)("p",null,"To put the currency attribute into the ",Object(a.b)("strong",{parentName:"p"},"price")," tag, a group with the corresponding name is created, into which the ",Object(a.b)("strong",{parentName:"p"},"nameCurrency")," and ",Object(a.b)("strong",{parentName:"p"},"price")," properties are then added. Since the ",Object(a.b)("strong",{parentName:"p"},"ATTR")," attribute is specified for currency, the currency is added to the ",Object(a.b)("strong",{parentName:"p"},"price")," tag as attribute. And for the price, the predefined ",Object(a.b)("strong",{parentName:"p"},"EXTID"),"\xa0",Object(a.b)("strong",{parentName:"p"},"value")," is set and therefore the value is written directly to the ",Object(a.b)("strong",{parentName:"p"},"price")," tag. Without all these parameters, the result would be as follows:"),Object(a.b)("p",null,"<price",">","<currency",">","USD</currency",">","<price",">","4.99</price",">","</price",">","."),Object(a.b)("p",null,"If you have a target XML template into which you need to export data, then use the following rules."),Object(a.b)("p",null,"Any tag in the resulting file is generated by one of four elements:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"Property")," (to be declared using ",Object(a.b)("strong",{parentName:"li"},"PROPERTIES"),")."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"Object")," (to be declared using ",Object(a.b)("strong",{parentName:"li"},"OBJECTS"),")."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"Property group")," (to be declared using ",Object(a.b)("strong",{parentName:"li"},"GROUP")," outside the form)."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"Form")," (the upper tag)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If the tag repeats several times in a row (e. g. ",Object(a.b)("strong",{parentName:"p"},"Detail"),"), declare an ",Object(a.b)("em",{parentName:"p"},"object")," with the matching name.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If a tag contains nested tags, but is used only once (e. g. ",Object(a.b)("strong",{parentName:"p"},"Specification"),"), then declare a ",Object(a.b)("em",{parentName:"p"},"property group"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'If the tag contains attributes (e. g. count = "2"), then it must be generated either by a ',Object(a.b)("em",{parentName:"p"},"property group")," or by an ",Object(a.b)("em",{parentName:"p"},"object")," (depending on whether this tag is used once or more).")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If the tag contains a value, then such tag must be generated either by a ",Object(a.b)("em",{parentName:"p"},"property"),"\xa0(e. g. ",Object(a.b)("strong",{parentName:"p"},"nameBook")," or ",Object(a.b)("strong",{parentName:"p"},"quantity"),') with the corresponding name or by an object/property group with the only "nested" property having ',Object(a.b)("strong",{parentName:"p"},"EXTID")," 'value')."))),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to create a button that exports the contents of the order in the JSON format."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExport&block=solution2",mdxType:"CodeSample"}),Object(a.b)("p",null,"The resulting file will look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{  \n   "timeStamp":"13.11.18 15:11:45",\n   "Info":{  \n      "date":"13.11.18",\n      "number":"12",\n      "Customer":{  \n         "address":"Address 2",\n         "name":"Customer 2"\n      }\n   },\n   "Specification":{  \n      "count":2,\n      "Detail":[  \n         {  \n            "quantity":1,\n            "price":3.99,\n            "nameBook":"Book 2"\n         },\n         {  \n            "quantity":2,\n            "price":4.99,\n            "nameBook":"Book 1"\n         }\n      ]\n   }\n}\n')),Object(a.b)("p",null,"Note that the ",Object(a.b)("strong",{parentName:"p"},"ATTR")," instruction is ignored when you export data in the JSON format."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to create a button that exports all the orders for a certain date in the CSV format."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExport&block=solution3",mdxType:"CodeSample"}),Object(a.b)("p",null,"The first action gets a date as input and then generates a flat CSV file with a semicolon delimiter using the ",Object(a.b)("strong",{parentName:"p"},"EXPORT")," operator. The file will look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"number;customer;book;quantity;price\n14;Customer 1;Book 1;2;8.99\n12;Customer 2;Book 2;1;3.99\n12;Customer 2;Book 1;2;4.99\n")),Object(a.b)("p",null,"The column name is overridden for the first three parameters, while the other two use the names of the corresponding properties. The result is first written to the local property ",Object(a.b)("strong",{parentName:"p"},"file"),". Then the user is prompted to save the file from that property to his workstation. This is done using",Object(a.b)("a",{parentName:"p",href:"/platform/docs/WRITE_operator"},"WRITE operator"),"."),Object(a.b)("p",null,"The second action opens the form, asks the user to enter a date and then calls the first data export action."))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return b})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=n(0),i=n.n(a),c=n(751),l=n(754),s={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],b=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],s=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return s(e)}))}),[t,s]),r?n?Object(c.b)(i.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(i.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},753:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var o=n(3),r=n(0),a=n.n(r),i=n(755),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:c};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function h(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(c))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=p({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?p({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),s(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,c=[],l=[c];i>-1;){for(;(a=o[i]++)<r[i];){var s=void 0,p=t[i],d=n[i][a];if("string"==typeof d?(p=i>0?p:["plain"],s=d):(p=m(p,d.type),d.alias&&(p=m(p,d.alias)),s=d.content),"string"==typeof s){var h=s.split(u),f=h.length;c.push({types:p,content:h[0]});for(var g=1;g<f;g++)b(c),l.push(c=[]),c.push({types:p,content:h[g]})}else i++,t.push(p),n.push(s),o.push(0),r.push(s.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return b(c),l}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var g=n(753),y=n.n(g),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(757),v=n(752);var k=()=>{const{prism:e}=Object(v.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),n=e.theme||j,o=e.darkTheme||n;return t?o:n},N=n(756),w=n(58),x=n.n(w);const T=/{([\d,-]+)}/,C=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},S=/(?:title=")(.*)(?:")/;function E({children:e,className:t,metastring:n}){const{prism:c}=Object(v.useThemeConfig)(),[s,p]=Object(r.useState)(!1),[u,b]=Object(r.useState)(!1);Object(r.useEffect)((()=>{b(!0)}),[]);const m=Object(r.useRef)(null);let d=[],h="";const g=k(),j=Array.isArray(e)?e.join(""):e;if(n&&T.test(n)){const e=n.match(T)[1];d=y()(e).filter((e=>e>0))}n&&S.test(n)&&(h=n.match(S)[1]);let O=t&&t.replace(/language-/,"");!O&&c.defaultLanguage&&(O=c.defaultLanguage);let w=j.replace(/\n$/,"");if(0===d.length&&void 0!==O){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}})(O),n=j.replace(/\n$/,"").split("\n");let o;for(let r=0;r<n.length;){const a=r+1,i=n[r].match(t);if(null!==i){switch(i.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":o=a;break;case"highlight-end":e+=`${o}-${a-1},`}n.splice(r,1)}else r+=1}d=y()(e),w=n.join("\n")}const E=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(w),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(f,Object(o.a)({},l,{key:String(u),theme:g,code:w,language:O}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:c})=>a.a.createElement("div",{className:x.a.codeBlockContainer},h&&a.a.createElement("div",{style:t,className:x.a.codeBlockTitle},h),a.a.createElement("div",{className:Object(i.a)(x.a.codeBlockContent,O)},a.a.createElement("div",{tabIndex:0,className:Object(i.a)(e,x.a.codeBlock,"thin-scrollbar",{[x.a.codeBlockWithTitle]:h})},a.a.createElement("div",{className:x.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return d.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(o.a)({key:t},c({token:e,key:t}))))))})))),a.a.createElement("button",{ref:m,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(x.a.copyButton),onClick:E},s?a.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);