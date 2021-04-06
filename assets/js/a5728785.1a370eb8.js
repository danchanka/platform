(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{515:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),o=(r(0),r(750)),i={title:"Expression: Overview",sidebar_label:"Overview"},p={unversionedId:"Expression",id:"Expression",isDocsHomePage:!1,title:"Expression: Overview",description:"An expression is a combination of property operators and parameters. When an expression is evaluated sequentially in priority\xa0 order, all the operators are executed.",source:"@site/docs/Expression.md",slug:"/Expression",permalink:"/platform/docs/next/Expression",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Expression.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Instruction =: Overview",permalink:"/platform/docs/next/Instruction_="},next:{title:"Operator priority",permalink:"/platform/docs/next/Operator_priority"}},s=[{value:"Examples",id:"examples",children:[]}],l={toc:s};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An ",Object(o.b)("em",{parentName:"p"},"expression")," is a combination of ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Property_operators"},"property operators")," and ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"parameters"),". When an expression is evaluated sequentially in ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Operator_priority"},"priority"),"\xa0 order, all the operators are executed."),Object(o.b)("p",null,"The result of that execution will be either a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"property")," or a parameter (in the case of single-parameter expression). Their value shall be called the ",Object(o.b)("em",{parentName:"p"},"value")," of the expression."),Object(o.b)("p",null,"An expression can be described by the following set of recursive rules:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",null,"Rule")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",null,"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("pre",null,Object(o.b)("code",null,"expression := parameter ","|"," constant ","|"," prefixOperator"))),Object(o.b)("td",{parentName:"tr",align:null},"A single parameter, ",Object(o.b)("a",{parentName:"td",href:"/platform/docs/next/Constant"},"constant"),", or non-arithmetic prefix operator")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("pre",null,Object(o.b)("code",null,"expression := prefixArithmOp expression"))),Object(o.b)("td",{parentName:"tr",align:null},"A unary arithmetic prefix operator, with the expression passed to it as an operand")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("pre",null,Object(o.b)("code",null,"expression := expression postfixOp"))),Object(o.b)("td",{parentName:"tr",align:null},"A unary postfix operator, with the expression passed to it as an operand")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("pre",null,Object(o.b)("code",null,"expression := expression binaryOp expression"))),Object(o.b)("td",{parentName:"tr",align:null},"A binary operator with the expressions passed to it as operands")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("pre",null,Object(o.b)("code",null,"expression := ( expression )"))),Object(o.b)("td",{parentName:"tr",align:null},"Expression in parentheses")))),Object(o.b)("p",null,"An expression cannot include ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Property_operators#contextindependent"},"context-independent")," property operators."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Team;\n\nwins(team) = DATA INTEGER(Team);\nties(team) = DATA INTEGER(Team);\n\npoints(Team team) = wins(team) * 3 + ties(team); // The number of points received by the team for the matches played\n// In this case, the expression is written to the right of the equal sign. It defines a new property called points.\n// When calculating the expression, two JOIN operators are first executed: wins(team) and ties(team), substituting the team parameter in the wins and ties properties\n// Then the multiplication operator will be executed, which will build a property that returns a number equal to the product of the return value of wins(team) and the number 3\n// Then the addition operator will be executed, which will create a property that sums the return values (wins(team) * 3) and ties(team)\n// The resulting property will be the result of the expression\n\nCLASS Game;\nCLASS BonusGame : Game;\n\ngamePoints(Game game) = 2 (+) (1 IF game IS BonusGame); // The number of points per game. If the game is bonus, then 3, otherwise 2.\n// In this example, the order of execution of the operators will be as follows: IS, IF, (+)\n")))}c.isMDXComponent=!0},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(d,p(p({ref:t},l),{},{components:r})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);