(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{574:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(3),i=n(7),r=(n(0),n(747)),a={title:"How-to: Binding properties"},c={unversionedId:"How-to_Binding_properties",id:"How-to_Binding_properties",isDocsHomePage:!1,title:"How-to: Binding properties",description:"Example 1",source:"@site/docs/How-to_Binding_properties.md",slug:"/How-to_Binding_properties",permalink:"/platform/next/How-to_Binding_properties",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_Binding_properties.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"How-to: Overriding values",permalink:"/platform/next/How-to_Overriding_values"},next:{title:"How-to: Metaprogramming",permalink:"/platform/next/How-to_Metaprogramming"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Condition",id:"condition-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]}],u={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example-1"},"Example 1"),Object(r.b)("h3",{id:"condition"},"Condition"),Object(r.b)("p",null,"The concepts of Country, Region and City are defined. A region and a city are always located in a certain country. A city may have a specified region, but need not."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Country 'Country';\nname 'Name' = DATA ISTRING[100] (Country) IN id;\n\nCLASS Region 'Region';\nname 'Name' = DATA ISTRING[100] (Region) IN id;\n\ncountry 'Country' = DATA Country (Region) NONULL DELETE;\nnameCountry 'Country' (Region r)= name(country(r)) IN id;\n\nCLASS City 'City';\nname 'Name' = DATA ISTRING[100] (City);\n\ncountry 'Country' = DATA Country (City) NONULL DELETE;\nnameCountry (City c) = name(country(c));\n\nregion 'Region' = DATA Region (City);\nnameRegion (City c) = name(region(c));\n\nFORM cities 'Cities'\n    OBJECTS c = City\n    PROPERTIES(c) name, nameCountry, nameRegion, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW cities;\n}\n")),Object(r.b)("p",null,"We need to define the logic such that a city can only be linked to a region belonging to the country it is in."),Object(r.b)("h3",{id:"solution"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT country(City c) != country(region(c)) CHECKED BY region[City] MESSAGE 'The country of the city region must match the country of the city';\n")),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/platform/next/CONSTRAINT_instruction"},"CONSTRAINT")," instruction defines a condition that must always be ",Object(r.b)("strong",{parentName:"p"},"NULL"),". In this case, the constraint based on this condition will be violated if there is a country defined for the region, a region for the city, and a country for the region, and the region's country is not the same as the city's country. The ",Object(r.b)("strong",{parentName:"p"},"CHECKED BY"),"\xa0block indicates that when you select a region in a dialog, the regions will be filtered by default so as not to violate this constraint. It should be noted that if no country has yet been set for the given city then the condition will always be ",Object(r.b)("strong",{parentName:"p"},"NULL"),", and all existing regions will be shown in the dialog."),Object(r.b)("h2",{id:"example-2"},"Example 2"),Object(r.b)("h3",{id:"condition-1"},"Condition"),Object(r.b)("p",null,"Similar to Example 1."),Object(r.b)("p",null,"We need to make it so that the country is automatically filled when a region is chosen."),Object(r.b)("h3",{id:"solution-1"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL CHANGED(region(City c)) AND NOT CHANGED(country(c)) DO {\n    country(c) <- country(region(c));\n}\n")),Object(r.b)("p",null,"It should be noted that after the user has chosen a region and a country is set, when the dialog is called again, only the regions of the selected country will be displayed. If the user wants to see all the regions again, he will need to clear the country first. The expression checks that the country has not changed is added to provide the following behavior: if the cities are changed by external actions that change both the country and the region, then the country should not be changed with this event."),Object(r.b)("h2",{id:"example-3"},"Example 3"),Object(r.b)("h3",{id:"condition-2"},"Condition"),Object(r.b)("p",null,"Similar to\xa0Example 1."),Object(r.b)("p",null,"We need to create the same kind of association between the region and the city, but in such a way that a region cannot be selected until a country has been set first."),Object(r.b)("h3",{id:"solution-2"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT region(City c) AND NOT country(c) = country(region(c)) CHECKED BY region[City] MESSAGE 'The country of the city region must match the country of the city';\n")),Object(r.b)("p",null,"The difference from the first example is that the new condition will also be true if a region is set and a country is not. Therefore, in this case the dialog will not display any regions."),Object(r.b)("h2",{id:"example-4"},"Example 4"),Object(r.b)("h3",{id:"condition-3"},"Condition"),Object(r.b)("p",null,"Similar to\xa0",Object(r.b)("strong",{parentName:"p"},"Example 1"),"."),Object(r.b)("p",null,"If the user first selects a region, and then a country that does not correspond to the original region, the user will receive an error message when trying to save."),Object(r.b)("p",null,"We need to make it so that the region is dropped when a new country is selected, if the region does not correspond to that country."),Object(r.b)("h3",{id:"solution-3"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL CHANGED(country(City c)) AND country(c) != country(region(c)) DO {\n    region(c) <- NULL;\n}\n")),Object(r.b)("h2",{id:"example-5"},"Example 5"),Object(r.b)("h3",{id:"condition-4"},"Condition"),Object(r.b)("p",null,"Similar to\xa0",Object(r.b)("strong",{parentName:"p"},"Example 1"),"."),Object(r.b)("p",null,"The solution to the first example has one drawback. The system will not allow you to change the country of a particular region, if the city links to it. The constraint will be violated."),Object(r.b)("p",null,"We need to make it so that when a region's country is changed, it also changes automatically for all that region's cities."),Object(r.b)("h3",{id:"solution-4"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"// 1 option\nWHEN SETCHANGED(country(region(City c))) DO\n    country(c) <- country(region(c));\n\n// 2 option\nWHEN SETCHANGED(country(Region r)) DO\n    country(City c) <- country(r) WHERE region(c) = r;\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,b=d["".concat(a,".").concat(h)]||d[h]||p[h]||r;return n?i.a.createElement(b,c(c({ref:t},u),{},{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<r;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);