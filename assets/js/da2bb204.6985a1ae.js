(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{641:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(750)),o={title:"Internationalization"},l={unversionedId:"Internationalization",id:"Internationalization",isDocsHomePage:!1,title:"Internationalization",description:"Internationalization consists of software development techniques that allow adapting the software to the linguistic and cultural particularities of different countries and regions.",source:"@site/docs/Internationalization.md",slug:"/Internationalization",permalink:"/platform/docs/next/Internationalization",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Internationalization.md",version:"current",sidebar:"docs",previous:{title:"Migration",permalink:"/platform/docs/next/Migration"},next:{title:"Execution: Overview",permalink:"/platform/docs/next/Execution"}},c=[{value:"Locale",id:"locale",children:[]},{value:"Formats for specifying locale parameters",id:"formats-for-specifying-locale-parameters",children:[]},{value:"Determining the current locale",id:"current",children:[]},{value:"String data localization",id:"string-data-localization",children:[]}],s={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Internationalization")," consists of software development techniques that allow adapting the software to the linguistic and cultural particularities of different countries and regions."),Object(i.b)("h3",{id:"locale"},"Locale"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Locale"),"\xa0is a set of parameters that defines regional settings, such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Language"),Object(i.b)("li",{parentName:"ul"},"Country (which in turn determines the formats for displaying numbers and dates)"),Object(i.b)("li",{parentName:"ul"},"Timezone"),Object(i.b)("li",{parentName:"ul"},"The starting year for a 100-year period, if the year is specified by a two-digit number")),Object(i.b)("h3",{id:"formats-for-specifying-locale-parameters"},"Formats for specifying locale parameters"),Object(i.b)("p",null,"The language and country are specified in ",Object(i.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/locale/create.html"},"standard Java"),'\xa0format. For example, the language can be specified using the lines "ru", "en", and "fr", and the country, respectively, using "RU", "US", and "CA". The timezone is specified in the format supported by the Java method ',Object(i.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/TimeZone.html#getTimeZone-java.lang.String-"},"TimeZone.getTimeZone"),'\xa0(examples: "PST", "Europe/Minsk", "GMT-8:00").\xa0 The year is specified as a number (example: 1960).'),Object(i.b)("h3",{id:"current"},"Determining the current locale"),Object(i.b)("p",null,"The server locale is determined by the ",Object(i.b)("a",{parentName:"p",href:"http://www.oracle.com/us/technologies/java/locale-140624.html"},"default locale")," of the JVM in which the server starts (namely, the startup parameters ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Launch_parameters#locale-broken"},"user.language, user.country, user.timezone, and user.twoDigitYearStart"),"). When the application server starts, the parameters of this locale are automatically saved in the following properties:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Locale parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Start parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Property"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Language"),Object(i.b)("td",{parentName:"tr",align:null},"user.language"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"Authentication.serverLanguage[]"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Country"),Object(i.b)("td",{parentName:"tr",align:null},"user.country"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"Authentication.serverCountry[]"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Timezone"),Object(i.b)("td",{parentName:"tr",align:null},"user.timezone"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"Authentication.serverTimezone[]"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Starting year of the 100-year period"),Object(i.b)("td",{parentName:"tr",align:null},"user.twoDigitYearStart"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"Authentication.serverTwoDigitYearStart[]"))))),Object(i.b)("p",null,"The server locale is used as ",Object(i.b)("em",{parentName:"p"},"current")," when the action in which localization is being performed is initiated by the system, and not by a particular user (i.e., the system user is considered the current user)."),Object(i.b)("p",null,"Otherwise, the current locale is determined by the values of the following properties (the user who initiated the action is passed as a parameter):"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Property"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Language"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"Authentication.language","[CustomUser]"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Country"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"Authentication.country","[CustomUser]"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Timezone"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"Authentication.timezone","[CustomUser]"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Starting year of the 100-year period"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"Authentication.twoDigitYearStart","[CustomUser]"))))),Object(i.b)("p",null,"In the current platform implementation, the above properties allow you both to use the locale parameters of the user's operating system and to set these parameters explicitly for specific users; or, for example, to use the server locale for all users (this is the default behavior)."),Object(i.b)("h3",{id:"string-data-localization"},"String data localization"),Object(i.b)("p",null,"The main task of platform internationalization is to localize the string data that the user sees. When sending text messages, property captions, actions, forms, etc. to the client from the server, these can be translated into another language or otherwise converted depending on the ",Object(i.b)("a",{parentName:"p",href:"#current"},"current locale"),"."),Object(i.b)("p",null,"Localizable strings are created as follows: in the string, in place of the text to be localized, ",Object(i.b)("em",{parentName:"p"},"the string data ID")," is specified in curly brackets (e.g., '{button.cancel}'). When this string is sent to the client, all IDs found in the string are searched for on the server, then each is searched for in all ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_resource_bundle"},"ResourceBundle")," project files in the required locale. If found, the ID in the brackets is replaced with the corresponding text."))}b.isMDXComponent=!0},750:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return a?r.a.createElement(d,l(l({ref:t},s),{},{components:a})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);