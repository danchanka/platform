(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{371:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),o=(a(0),a(746)),l={title:"How-to: Physical model"},i={unversionedId:"How-to_Physical_model",id:"How-to_Physical_model",isDocsHomePage:!1,title:"How-to: Physical model",description:"By default, each class in the database creates a separate table that stores all those properties whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys.",source:"@site/docs/How-to_Physical_model.md",slug:"/How-to_Physical_model",permalink:"/platform/next/How-to_Physical_model",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_Physical_model.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"How-to: Metaprogramming",permalink:"/platform/next/How-to_Metaprogramming"},next:{title:"How-to: Internationalization",permalink:"/platform/next/How-to_Internationalization"}},p=[],s={toc:p};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, each class in the database creates a separate table that stores all those ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"properties")," whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys."),Object(o.b)("p",null,"To explicitly specify a table in which all properties with one parameter of this class will be stored, we can use the following construct:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Animal 'Animal';\nTABLE animal(Animal);\n\nname 'Name' = DATA STRING[50] (Animal);\n")),Object(o.b)("p",null,"With a standard ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Tables#name"},"field naming policy"),", a <",Object(o.b)("a",{parentName:"p",href:"/platform/next/Naming"},"Namespace"),">",Object(o.b)("strong",{parentName:"p"},"_","animal")," table will be created within the database, with a key ",Object(o.b)("strong",{parentName:"p"},"key0")," with the internal ID of an animal and a\xa0<",Object(o.b)("a",{parentName:"p",href:"/platform/next/Naming"},"Namespace"),">",Object(o.b)("strong",{parentName:"p"},"_","name","_","Animal")," field storing its name."),Object(o.b)("p",null,"For properties with multiple parameters, we can create a table as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Country 'Country';\n\nTABLE animalCountry (Animal, Country);\npopulation 'Number' = DATA INTEGER (Animal, Country);\n")),Object(o.b)("p",null,"In this case we create a <Namespace",">",Object(o.b)("strong",{parentName:"p"},"_","animalCountry")," table with two keys: ",Object(o.b)("strong",{parentName:"p"},"key0")," for the animal and ",Object(o.b)("strong",{parentName:"p"},"key1")," for the country. It will also have a <Namespace",">",Object(o.b)("strong",{parentName:"p"},"_","population","_","Animal","_","Country")," field."),Object(o.b)("p",null,"All other properties with signature (",Object(o.b)("strong",{parentName:"p"},"Animal"),", ",Object(o.b)("strong",{parentName:"p"},"Country"),") will also be placed in this table. If some property needs to be placed in a separate table, then the following technique can be used:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"TABLE ageAnimalCountry (Animal, Country);\naverageAge 'Average age' = DATA NUMERIC[8,2] (Animal, Country) TABLE ageAnimalCountry;\n")),Object(o.b)("p",null,"This table will only store properties for which it is explicitly specified. All others will go into the first table declared with the necessary signature."),Object(o.b)("p",null,"Computed properties that need to be stored ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Materializations"},"permanently")," in the table need to be marked with the keyword ",Object(o.b)("strong",{parentName:"p"},"MATERIALIZED")," :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"totalPopulation 'Total number' (Animal a) = GROUP SUM population(a, Country c) MATERIALIZED;\n")),Object(o.b)("p",null,"The table in which this field will be stored will be selected according to the same algorithm as for ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Data_properties_DATA_"},"data properties"),". In this case, it will go into the table <Namespace",">",Object(o.b)("strong",{parentName:"p"},"_","animal"),"."))}c.isMDXComponent=!0},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(a),u=n,f=b["".concat(l,".").concat(u)]||b[u]||m[u]||o;return a?r.a.createElement(f,i(i({ref:t},s),{},{components:a})):r.a.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);