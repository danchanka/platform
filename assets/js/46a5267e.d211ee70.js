(window.webpackJsonp=window.webpackJsonp||[]).push([[194,460],{268:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=(n(0),n(751)),l=n(57),s={title:"How-to: Interaction via HTTP protocol"},i={unversionedId:"How-to_Interaction_via_HTTP_protocol",id:"version-1.0.0/How-to_Interaction_via_HTTP_protocol",isDocsHomePage:!1,title:"How-to: Interaction via HTTP protocol",description:"Example 1",source:"@site/versioned_docs/version-1.0.0/How-to_Interaction_via_HTTP_protocol.md",slug:"/How-to_Interaction_via_HTTP_protocol",permalink:"/platform/docs/How-to_Interaction_via_HTTP_protocol",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/How-to_Interaction_via_HTTP_protocol.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: Data import",permalink:"/platform/docs/How-to_Data_import"},next:{title:"How-to: Frontend",permalink:"/platform/docs/How-to_Frontend"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution-4",children:[]}]},{value:"Example 6",id:"example-6",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-5",children:[]}]},{value:"Example 7",id:"example-7",children:[{value:"Task",id:"task-4",children:[]},{value:"Solution",id:"solution-6",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"task"},"Task"),Object(a.b)("p",null,"We have a certain set of cities associated with their countries."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=sample1",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to send an HTTP request for adding a city in the JSON format to a certain url."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"The\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Data_export_EXPORT_"},"EXPORT"),"\xa0operator will create a JSON in the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Built-in_classes"},"FILE")," format and then will write it to the exportFile property. Here is an example of the generated file:\xa0"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{"countryId":"123","name":"San Francisco"}\n')),Object(a.b)("p",null,"Then we call the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Access_to_an_external_system_EXTERNAL_"},"EXTERNAL")," operator, which sends a request to the specified url passing there the contents of the generated file as Body. In this case, since the property in the FROM block has the type JSON, ",Object(a.b)("em",{parentName:"p"},"application/json")," will be used as the content type. <namespace",">","<property name",">"," is encoded in the url. In this case, the namespace of the action being called (",Object(a.b)("strong",{parentName:"p"},"createCity"),") is ",Object(a.b)("strong",{parentName:"p"},"Location"),". All parameters are passed consequently with the ID\xa0",Object(a.b)("strong",{parentName:"p"},"p"),". \xa0The response from the server will be written to the ",Object(a.b)("strong",{parentName:"p"},"result")," property. Suppose that the response is received in the JSON format and has one of the following types:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{"code":"0","message":"OK"}\n\n{"code":"1","message":"Invalid country code"}\n')),Object(a.b)("p",null,"The response is handled by the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Data_import_IMPORT_"},"IMPORT")," operator which parses the corresponding parameters into the ",Object(a.b)("strong",{parentName:"p"},"code")," and ",Object(a.b)("strong",{parentName:"p"},"message")," properties respectively. If any error occurs, the user will see a corresponding error message."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"task-1"},"Task"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),".\xa0"),Object(a.b)("p",null,"We need to handle the incoming HTTP request and create a new city in the database with the parameters provided in the request."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution2",mdxType:"CodeSample"}),Object(a.b)("p",null,"Since the property is named ",Object(a.b)("strong",{parentName:"p"},"createCity")," and located in the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Modules"},"module")," with the namespace ",Object(a.b)("strong",{parentName:"p"},"Location"),", the url on which the request will be handled looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"http://localhost:7651/exec?action=Location.createCity\n")),Object(a.b)("p",null,"Body of the HTTP request will be passed as a parameter of the type ",Object(a.b)("strong",{parentName:"p"},"FILE"),". The values read from the ",Object(a.b)("strong",{parentName:"p"},"countryId")," and ",Object(a.b)("strong",{parentName:"p"},"name")," parameters are written to the local properties ",Object(a.b)("strong",{parentName:"p"},"cy")," and ",Object(a.b)("strong",{parentName:"p"},"ne")," respectively."),Object(a.b)("p",null,"If there is no country with the corresponding code, then a JSON file is generated similar to that described in the previous example, and the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Exit_RETURN_"},"RETURN")," operator is called to abort execution. By default, the response message value is also stored in the ",Object(a.b)("strong",{parentName:"p"},"exportFile")," property."),Object(a.b)("p",null,'If all the actions are completed successfully, the corresponding "OK message" is generated in response.'),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"task-2"},"Task"),Object(a.b)("p",null,"We have the logic of book orders."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=sample3",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to send an HTTP request for creating a new order in the JSON format to a certain url."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution3",mdxType:"CodeSample"}),Object(a.b)("p",null,"To create a JSON with nested tags, we need to create a form with the corresponding objects linked via the ",Object(a.b)("strong",{parentName:"p"},"FILTERS")," block of operators. Based on the dependencies between objects, the system will generate a JSON file with the corresponding structure. In the considering example, the output JSON structure will look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n   "dt":"20.08.18",\n   "nm":"1",\n   "detail":[\n      {\n         "pr":5.99,\n         "id":"b1",\n         "qn":3\n      },\n      {\n         "pr":6.99,\n         "id":"b2",\n         "qn":2\n      }\n   ]\n}\n')),Object(a.b)("p",null,'We do not create a custom tag for "order", since the object value is passed as an argument to the ',Object(a.b)("strong",{parentName:"p"},"EXPORT")," operator.",Object(a.b)("br",{parentName:"p"}),"\n","In this example, the response to the HTTP request is ignored."),Object(a.b)("h2",{id:"example-4"},"Example 4"),Object(a.b)("h3",{id:"task-3"},"Task"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 3"),".\xa0"),Object(a.b)("p",null,"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."),Object(a.b)("h3",{id:"solution-3"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution4",mdxType:"CodeSample"}),Object(a.b)("p",null,"To import the corresponding file in the JSON format, we need to create a form of a similar structure, except that the INTEGER type will be used as object classes. During the import process, the tag values will be placed in the properties with the corresponding names. The ",Object(a.b)("strong",{parentName:"p"},"date")," and ",Object(a.b)("strong",{parentName:"p"},"number")," properties have no parameters, since their values in JSON are provided at the topmost level."),Object(a.b)("h2",{id:"example-5"},"Example 5"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 4"),".\xa0"),Object(a.b)("p",null,"We need to send an HTTP request to create an order in the JSON format to a certain url as in the previous example, except that everything must be wrapped in the ",Object(a.b)("strong",{parentName:"p"},"order")," tag."),Object(a.b)("h3",{id:"solution-4"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution5",mdxType:"CodeSample"}),Object(a.b)("p",null,"Unlike the previous example, here we create a property ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/Groups_of_properties_and_actions"},"group")," named ",Object(a.b)("strong",{parentName:"p"},"order")," using the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/GROUP_operator"},"GROUP"),' operator. When declaring a form, we put all the properties of the purchase order as well as the "detail" object into this property group. The result JSON will look like this:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n   "order":{\n      "dt":"20.08.18",\n      "nm":"1",\n      "detail":[\n         {\n            "pr":5.99,\n            "id":"b1",\n            "qn":3\n         },\n         {\n            "pr":6.99,\n            "id":"b2",\n            "qn":2\n         }\n      ]\n   }\n}\n')),Object(a.b)("h2",{id:"example-6"},"Example 6"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 5"),".\xa0"),Object(a.b)("p",null,"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."),Object(a.b)("h3",{id:"solution-5"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution6",mdxType:"CodeSample"}),Object(a.b)("p",null,"Just as in the export process, we put all the properties and the ",Object(a.b)("strong",{parentName:"p"},"detail"),' object to the "order" group to correctly receive the new version of JSON.'),Object(a.b)("h2",{id:"example-7"},"Example 7"),Object(a.b)("h3",{id:"task-4"},"Task"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 3"),".\xa0"),Object(a.b)("p",null,"We need to return a list of order numbers for a given date using an HTTP GET request in which this date is provided."),Object(a.b)("h3",{id:"solution-6"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution7",mdxType:"CodeSample"}),Object(a.b)("p",null,"The url to which the HTTP request should be sent will look like this: \xa0 http://localhost:7651/exec?action=Location.getOrdersByDate&p=12.11.2018\xa0."),Object(a.b)("p",null,"The response JSON will look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n    "order": [\n        {\n            "nm": "42"\n        },\n        {\n            "nm": "65"\n        }\n    ]\n}\n')))}d.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return d})),n.d(t,"CodeSample",(function(){return u})),n.d(t,"default",(function(){return m}));var o=n(3),r=n(7),a=n(0),l=n.n(a),s=n(751),i=n(754),c={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/platform/docs/CodeSample",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},d=[],u=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],c=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),r?n?Object(s.b)(l.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(l.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:d,CodeSample:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||a;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},753:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var o=n(3),r=n(0),a=n.n(r),l=n(755),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:s};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function h(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var l=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(s))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,l=p({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),c(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,l=0,s=[],i=[s];l>-1;){for(;(a=o[l]++)<r[l];){var c=void 0,p=t[l],m=n[l][a];if("string"==typeof m?(p=l>0?p:["plain"],c=m):(p=b(p,m.type),m.alias&&(p=b(p,m.alias)),c=m.content),"string"==typeof c){var h=c.split(d),f=h.length;s.push({types:p,content:h[0]});for(var y=1;y<f;y++)u(s),i.push(s=[]),s.push({types:p,content:h[y]})}else l++,t.push(p),n.push(c),o.push(0),r.push(c.length)}l--,t.pop(),n.pop(),o.pop(),r.pop()}return u(s),i}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var y=n(753),g=n.n(y),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(757),v=n(752);var k=()=>{const{prism:e}=Object(v.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||O,o=e.darkTheme||n;return t?o:n},T=n(756),x=n(58),w=n.n(x);const N=/{([\d,-]+)}/,S=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},E=/(?:title=")(.*)(?:")/;function C({children:e,className:t,metastring:n}){const{prism:s}=Object(v.useThemeConfig)(),[c,p]=Object(r.useState)(!1),[d,u]=Object(r.useState)(!1);Object(r.useEffect)((()=>{u(!0)}),[]);const b=Object(r.useRef)(null);let m=[],h="";const y=k(),O=Array.isArray(e)?e.join(""):e;if(n&&N.test(n)){const e=n.match(N)[1];m=g()(e).filter((e=>e>0))}n&&E.test(n)&&(h=n.match(E)[1]);let j=t&&t.replace(/language-/,"");!j&&s.defaultLanguage&&(j=s.defaultLanguage);let x=O.replace(/\n$/,"");if(0===m.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}})(j),n=O.replace(/\n$/,"").split("\n");let o;for(let r=0;r<n.length;){const a=r+1,l=n[r].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":o=a;break;case"highlight-end":e+=`${o}-${a-1},`}n.splice(r,1)}else r+=1}m=g()(e),x=n.join("\n")}const C=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(x),p(!0),setTimeout((()=>p(!1)),2e3)};return a.a.createElement(f,Object(o.a)({},i,{key:String(d),theme:y,code:x,language:j}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:s})=>a.a.createElement("div",{className:w.a.codeBlockContainer},h&&a.a.createElement("div",{style:t,className:w.a.codeBlockTitle},h),a.a.createElement("div",{className:Object(l.a)(w.a.codeBlockContent,j)},a.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,w.a.codeBlock,"thin-scrollbar",{[w.a.codeBlockWithTitle]:h})},a.a.createElement("div",{className:w.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return m.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),a.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>a.a.createElement("span",Object(o.a)({key:t},s({token:e,key:t}))))))})))),a.a.createElement("button",{ref:b,type:"button","aria-label":Object(T.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(w.a.copyButton),onClick:C},c?a.a.createElement(T.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(T.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}}}]);