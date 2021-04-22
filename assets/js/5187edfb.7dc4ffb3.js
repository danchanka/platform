(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(747)),o={title:"Form design"},l={unversionedId:"Form_design",id:"Form_design",isDocsHomePage:!1,title:"Form design",description:"The form design defines how a\xa0form\xa0is displayed in the interactive\xa0view.",source:"@site/docs/Form_design.md",slug:"/Form_design",permalink:"/platform/next/Form_design",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Form_design.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Interactive view",permalink:"/platform/next/Interactive_view"},next:{title:"Form events",permalink:"/platform/next/Form_events"}},c=[{value:"Containers",id:"containers",children:[]},{value:"Base components",id:"base-components",children:[]},{value:"Dimensions and components layout",id:"components",children:[]},{value:"Default dimensions and layout",id:"default-dimensions-and-layout",children:[]},{value:"Window size",id:"window-size",children:[]},{value:"<strong>Default design</strong>",id:"defaultDesign",children:[]},{value:"Default design example",id:"default-design-example",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"form design")," defines how a\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/Forms"},"form"),"\xa0is displayed in the ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Interactive_view"},"interactive"),"\xa0view."),Object(i.b)("p",null,"As with any GUI, form\xa0design is a hierarchy whose nodes are ",Object(i.b)("em",{parentName:"p"},"components"),". Components, in turn, can be:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"containers"),": components that contain other components."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"base components"),": graphical vews of the elements described in the\xa0",Object(i.b)("a",{parentName:"li",href:"/platform/next/Form_structure"},"form structure"),"\xa0and the form\xa0",Object(i.b)("a",{parentName:"li",href:"/platform/next/Interactive_view"},"interactive view"),".")),Object(i.b)("p",null,"Each\xa0component must have its own unique name within\xa0",Object(i.b)("em",{parentName:"p"},"the form"),".\xa0"),Object(i.b)("h3",{id:"containers"},"Containers"),Object(i.b)("p",null,"All children of any\xa0container\xa0make an ordered list. It is necessary to determine how the child components of each\xa0container\xa0on the form should be placed. To do this, one of the following\xa0",Object(i.b)("em",{parentName:"p"},"types"),"\xa0can be specified for a\xa0container:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Vertical container"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"CONTAINERV"),"): children are placed from top to bottom."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Horizontal container"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"CONTAINERH"),"): children are placed from left to right."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Tabbed panel"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"TABBED"),"): at any given time exactly one child component is shown. This component is determined by user via selecting the corresponding tab."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Column container"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"COLUMNS"),"): components are placed in a fixed number of columns. When a child component is added, it is placed in the first column with the minimum number of components. In fact, columns are filled first from left to right and then, when the number of columns reaches the specified one, a new row begins, which is located relative to the previous ones from top to bottom; the layout then goes again from left to right and so on.\xa0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Vertical splitter"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"SPLITV"),"): can be used only if the container has exactly two child components. In this case they are arranged from top to bottom, and the user can change how much space is given to each of them."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Horizontal splitter"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"SPLITH"),"): similar to a\xa0vertical splitter, but the child components are placed from left to right."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Scrollable container"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"SCROLL"),"): can be used only if the container has exactly one child component. This single component occupies all the space it needs in the container, and if there is not enough a scroll bar appears.")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"In future versions, the last three types of containers (",Object(i.b)("strong",{parentName:"p"},"SPLITV"),", ",Object(i.b)("strong",{parentName:"p"},"SPLITH"),", ",Object(i.b)("strong",{parentName:"p"},"SCROLL"),") will be deprecated and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/issues/22"},"replaced")," with the corresponding split and scroll options in vertical and horizontal containers."))),Object(i.b)("p",null,"The default container type\xa0is\xa0vertical container (CONTAINERV)",Object(i.b)("em",{parentName:"p"},".")),Object(i.b)("p",null,"If at some point a\xa0container\xa0has no child components\xa0, or they are invisible, it is automatically hidden. In turn, if a\xa0component\xa0is not a child of any\xa0container, then it will not be shown on the form."),Object(i.b)("h3",{id:"base-components"},"Base components"),Object(i.b)("p",null,"When defining the form design, the developer can use the following base components, which are created automatically based on the form structure:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Object groups / trees"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Table/Tree"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"GRID"),"): a component consisting of rows and columns in which the rows correspond to object collections of the corresponding\xa0",Object(i.b)("a",{parentName:"li",href:"/platform/next/Form_structure"},"group of objects")," and columns correspond to\xa0",Object(i.b)("a",{parentName:"li",href:"/platform/next/Properties"},"properties"),"\xa0and\xa0",Object(i.b)("a",{parentName:"li",href:"/platform/next/Actions"},"actions"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"System toolbar"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"TOOLBARSYSTEM"),"): a panel consisting of buttons with which the user can execute various system actions on the rows in the table. Automatically hidden if the\xa0table\xa0becomes invisible."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"User filter"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"USERFILTER"),"): a component with which the user can create and apply their own filters to a\xa0table.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Filter groups")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Filter group"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"FILTERGROUP"),"): a component with which the user can activate the filters they need in a form's ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Interactive_view#filtergroup"},"filter groups"),".")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Properties / Actions")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Property panel"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"PROPERTY"),"): a component that displays the title and current value of a\xa0property. The caption can be either to the left of the value cell or at the top. Not shown if the\xa0property\xa0is displayed in the\xa0table.")),Object(i.b)("h3",{id:"components"},"Dimensions and components layout"),Object(i.b)("p",null,"The developer can control how the platform distributes the available container sizes between its internal components, as well as how these components will be located relative to each other."),Object(i.b)("p",null,"First of all, for each component you can specify the ",Object(i.b)("em",{parentName:"p"},"base")," size that this component will receive in any case, regardless of the algorithm for placing its container."),Object(i.b)("p",null,"To determine the final size of the components and their location inside the container, the following algorithm is used:"),Object(i.b)("p",null,"For each container, one of the directions is considered to be\xa0",Object(i.b)("em",{parentName:"p"},"dynamic"),", and the other ",Object(i.b)("em",{parentName:"p"},"static"),". The dynamic direction is determined from the name of the container, for example, for a vertical container, the dynamic direction will be vertical; for a horizontal splitter it will be horizontal. For a columned or scrollable container, as well as a tab panel, the dynamic direction is considered to be the vertical. Further, depending on the direction:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Dynamic: all components are placed one after another, in the order they are added to the container. Also, ",Object(i.b)("em",{parentName:"p"},"extension coefficient")," (",Object(i.b)("strong",{parentName:"p"},"flex"),") can be specified for each component. In this case, the space remaining in the container (that is, minus the basic dimensions of all internal components) is divided between all components in proportion to their extension coefficients.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Static: ",Object(i.b)("em",{parentName:"p"},"alignment")," can be specified for each component (",Object(i.b)("strong",{parentName:"p"},"alignment"),"). Its values can be ",Object(i.b)("em",{parentName:"p"},"At the start")," (",Object(i.b)("strong",{parentName:"p"},"START"),"), ",Object(i.b)("em",{parentName:"p"},"Center")," (",Object(i.b)("strong",{parentName:"p"},"CENTER"),"), ",Object(i.b)("em",{parentName:"p"},"At the end")," (",Object(i.b)("strong",{parentName:"p"},"END"),"), or ",Object(i.b)("em",{parentName:"p"},"Stretch")," (",Object(i.b)("strong",{parentName:"p"},"STRETCH"),"). In the first three cases, the component gets its base size as the final size, and is positioned in accordance with the specified type of alignment (that is, at the beginning, center, or end). If Stretch is used as the type of alignment, the final size of the component will be the size of the top container (but not less than the base size), and it will be located exactly in the center.\xa0"))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"For example, in the case of a vertical upper container, if the component is set to align at the start then it will be located on the maximum left of the container; if it is set to Stretch, the component will occupy all the space from the left to the right border."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This component layout algorithm is a special case of ",Object(i.b)("a",{parentName:"p",href:"https://www.w3.org/TR/css-flexbox-1/"},"CSS Flexible Box Layout")," (and is implemented using it in the web client). For example, the CSS flex-grow property corresponds to the extension coefficient, and flex-basis corresponds to the base size."))),Object(i.b)("p",null,"The column container breaks its static (horizontal) direction into ",Object(i.b)("strong",{parentName:"p"},"N")," identical parts (where ",Object(i.b)("strong",{parentName:"p"},"N")," is the number of columns): each part then has its own components, as if this part were a separate vertical container."),Object(i.b)("p",null,"For base components, you can specify the ",Object(i.b)("em",{parentName:"p"},"automatic size")," option (",Object(i.b)("strong",{parentName:"p"},"autoSize"),"): in this case, the base size will change automatically in to enclose exactly the entire contents of this base component (for example, for a table: all its records plus a title)."),Object(i.b)("p",null,"The properties\xa0layout in a table\xa0(or rather, the columns that display their values) is done the same way as if the table were a horizontal container, and the columns of the table were internal components of this container.\xa0"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Since the current implementation uses the ",Object(i.b)("a",{parentName:"p",href:"https://www.w3schools.com/cssref/pr_tab_table-layout.asp"},"CSS Table Layout Fixed")," mechanism to place columns inside the table in the Web client, and its capabilities are significantly limited, the extension coefficient for properties displayed in the table can be equal either to 0 or to the base size."))),Object(i.b)("p",null,"The caption and the value cell are placed inside the property panel in the same way as if the panel were a container (horizontal if the caption is on the left, vertical if at the top), in which the cell has an extension coefficient of 1, the caption is 0 and the alignment of both is set to \xa0STRETCH\xa0"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Property value cell sizes")),Object(i.b)("p",null,"When displaying properties, you can explicitly specify\xa0dimensions of the entire container (together with the caption, if the property is in a panel) and also the dimensions of the ",Object(i.b)("em",{parentName:"p"},"value cell")," itself. To do this, add the prefix\xa0",Object(i.b)("strong",{parentName:"p"},"value"),"\xa0to the size name,\xa0e.g. ",Object(i.b)("strong",{parentName:"p"},"valueWidth"),"). Also, it is worth noting that these dimensions (those of the value cells, and not the entire container) are also used to determine the column widths if the property is displayed in a table."),Object(i.b)("p",null,"For property value cells, it is also possible to specify the base width not in pixels, but using a\xa0",Object(i.b)("em",{parentName:"p"},"sample value")," (",Object(i.b)("strong",{parentName:"p"},"widthValue"),")\xa0In this case, the platform\xa0takes into account the user's font/mask/locale to calculate and set the width in pixels so that the user can see exactly the specified sample value (no more, no less). It is assumed that the sample value must be either a string or of a class equal to the class of the property value."),Object(i.b)("p",null,"In addition, cell widths can be specified in ",Object(i.b)("em",{parentName:"p"},"characters")," (",Object(i.b)("strong",{parentName:"p"},"charWidth")," ), which is equivalent to giving a string sample value consisting of the given number of zeros."),Object(i.b)("p",null,"In the last two cases (that is, when specifying the width as a sample value or in characters), if the property value class implies the presence of\xa0buttons on the right during\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/Primitive_input_INPUT_"},"input"),"\xa0(for example, ",Object(i.b)("strong",{parentName:"p"},"DATE"),"\xa0class), then the width of this button (21 pixels) is added to the width of the property value cell."),Object(i.b)("h3",{id:"default-dimensions-and-layout"},"Default dimensions and layout"),Object(i.b)("p",null,"By default, the extension coefficient and alignment for components are determined as follows:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Component"),Object(i.b)("th",{parentName:"tr",align:null},"Extension coefficient"),Object(i.b)("th",{parentName:"tr",align:null},"Alignment"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Table / Tree"),Object(i.b)("td",{parentName:"tr",align:null},"1"),Object(i.b)("td",{parentName:"tr",align:null},"STRETCH")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Component inside scrollable containers, splitters and tabbed panel"),Object(i.b)("td",{parentName:"tr",align:null},"1"),Object(i.b)("td",{parentName:"tr",align:null},"STRETCH")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Property panel inside a horizontal container or property in a table. The property values are objects of\xa0",Object(i.b)("a",{parentName:"td",href:"/platform/next/Built-in_classes"},"built-in classes"),"\xa0of dynamic length (i.e. strings and numbers)"),Object(i.b)("td",{parentName:"tr",align:null},"With of the value cell"),Object(i.b)("td",{parentName:"tr",align:null},"START")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Property panel inside a vertical container. The property values are objects of\xa0",Object(i.b)("a",{parentName:"td",href:"/platform/next/Built-in_classes"},"built-in classes"),"\xa0of dynamic length (i.e. strings and numbers)"),Object(i.b)("td",{parentName:"tr",align:null},"0"),Object(i.b)("td",{parentName:"tr",align:null},"STRETCH")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"All others"),Object(i.b)("td",{parentName:"tr",align:null},"0"),Object(i.b)("td",{parentName:"tr",align:null},"START")))),Object(i.b)("p",null,"The base container size (except the tab panel) is equal by default to the sum of the base sizes of all its child components for the dynamic direction, and the maximum for the static direction.\xa0The base\xa0height of the tab panel is the sum of the base height of its current tab and the height of the tab title bar, the base width is the same as the base width of the current tab."),Object(i.b)("p",null,"The base width of tables/trees is 130 pixels by default, and the height is 70 pixels. The base size of the property panel is determined in the same way as if the panel was a container\xa0(horizontal if the caption is on the left, vertical if it is at the top) consisting of the caption and the value cell. The base size of the remaining base components (as well as the caption in the property panel) is determined in such a way as to enclose all the text contained in them."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Property value cell dimensions")),Object(i.b)("p",null,"The following formulas are used by default to determine the width of a property value cell:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Property value class"),Object(i.b)("th",{parentName:"tr",align:null},"Width unit"),Object(i.b)("th",{parentName:"tr",align:null},"Width/Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Strings"),Object(i.b)("td",{parentName:"tr",align:null},"In characters"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("div",{class:"content-wrapper"},Object(i.b)("br",null),Object(i.b)("div",{class:"code panel pdl"},Object(i.b)("br",null),Object(i.b)("div",{class:"codeContent panelContent pdl"},Object(i.b)("br",null),Object(i.b)("pre",{class:"plain","data-syntaxhighlighter-params":"brush: plain; gutter: false; theme: Confluence","data-theme":"Confluence"},Object(i.b)("code",null,"IF length <= 12",Object(i.b)("br",null),"    result = length",Object(i.b)("br",null),"ELSE IF length = INFINITE",Object(i.b)("br",null),"    result = 15",Object(i.b)("br",null),"ELSE ",Object(i.b)("br",null),"    result = 12 + (length - 12) ^ 0.7")),Object(i.b)("br",null)),Object(i.b)("br",null)),Object(i.b)("br",null)))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Numbers"),Object(i.b)("td",{parentName:"tr",align:null},"In characters"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("div",{class:"content-wrapper"},Object(i.b)("br",null),Object(i.b)("div",{class:"code panel pdl"},Object(i.b)("br",null),Object(i.b)("div",{class:"codeContent panelContent pdl"},Object(i.b)("br",null),Object(i.b)("pre",{class:"plain","data-syntaxhighlighter-params":"brush: plain; gutter: false; theme: Confluence","data-theme":"Confluence"},Object(i.b)("code",null,"IF length <= 6",Object(i.b)("br",null),"    result = length",Object(i.b)("br",null),"ELSE IF this = DOUBLE",Object(i.b)("br",null),"    result = 10",Object(i.b)("br",null),"ELSE ",Object(i.b)("br",null),"    result = MIN(6 + (length - 6) ^ 0.7, 10)")),Object(i.b)("br",null)),Object(i.b)("br",null)),Object(i.b)("br",null),Object(i.b)("p",null,"Where length = integerPart + precision"),Object(i.b)("br",null)))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"COLOR")),Object(i.b)("td",{parentName:"tr",align:null},"In pixels"),Object(i.b)("td",{parentName:"tr",align:null},"40")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Files and file links"),Object(i.b)("td",{parentName:"tr",align:null},"In pixels"),Object(i.b)("td",{parentName:"tr",align:null},"18")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"BOOLEAN")),Object(i.b)("td",{parentName:"tr",align:null},"In pixels"),Object(i.b)("td",{parentName:"tr",align:null},"25")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"DATE")),Object(i.b)("td",{parentName:"tr",align:null},"Sample value"),Object(i.b)("td",{parentName:"tr",align:null},"1991_11_21")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"DATETIME")),Object(i.b)("td",{parentName:"tr",align:null},"Sample value"),Object(i.b)("td",{parentName:"tr",align:null},"1991_11_21_10:55:55")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",null,"TIME")),Object(i.b)("td",{parentName:"tr",align:null},"Sample value"),Object(i.b)("td",{parentName:"tr",align:null},"10:55:55")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"User classes"),Object(i.b)("td",{parentName:"tr",align:null},"In characters"),Object(i.b)("td",{parentName:"tr",align:null},"7")))),Object(i.b)("p",null,"The default height of a property value cell\xa0is equal to the height of the font used, except properties whose values belong to the ",Object(i.b)("strong",{parentName:"p"},"TEXT")," class (in this case, the height is four times the font height)."),Object(i.b)("h3",{id:"window-size"},"Window size"),Object(i.b)("p",null,"If the form opens in ",Object(i.b)("a",{parentName:"p",href:"/platform/next/In_an_interactive_view_SHOW_DIALOG_#location"},"window")," mode it does not have an upper container, so you need to determine this window's initial size. This size is determined similarly to the default base size,\xa0the only difference is that for tables/trees the default size is determined not as a constant (the default is 130.70) but in such a way that it contains their whole contents (similar to the automatic sizing mechanism), but no less than 130 in width and 140 in height."),Object(i.b)("h3",{id:"defaultDesign"},Object(i.b)("strong",{parentName:"h3"},"Default design")),Object(i.b)("p",null,"An automatic design can be created for each form, based on the\xa0form's structure. The developer can modify the automatic design or create a design from scratch."),Object(i.b)("p",null,"The automatic design is generated as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"BOX"),": contains all the components of this form.\xa0Vertical container. Extension coefficient: 1, alignment: STRETCH.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"PANEL"),":\xa0contains components of the properties that are displayed in\xa0PANEL\xa0view\xa0\xa0and ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Form_structure#drawgroup-broken"},"display group"),"\xa0of which is undefined (the property has no parameters). The internal structure and layout are similar to the internal structure and layout of the object group container.\xa0",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"GROUP...")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"OBJECTS"),": contains all the components that are created for object groups/trees on this form.\xa0Vertical container.\xa0Extension coefficient: 1, alignment:\xa0STRETCH.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"BOX")," (<object group/tree",">","): \xa0contains all the components of this group of objects. Vertical container.\xa0Extension coefficient: 1, alignment:\xa0STRETCH.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"GRIDBOX")," (<group of objects / tree",">","): \xa0contains\xa0table\xa0/ tree. Horizontal container. Extension coefficient: 1, alignment: STRETCH.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"GRID (): the base component of a Table."))),Object(i.b)("li",{parentName:"ul"},"TOOLBARBOX (\n):\xa0contains all the components of a toolbar (responsible for layout inside the toolbar). Horizontal container.\xa0Alignment: STRETCH",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"TOOLBARLEFT (): the left side of a toolbar. Horizontal container.\xa0Alignment: CENTER.  ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"TOOLBARSYSTEM (): the base component of the System toolbar.\xa0Alignment: CENTER."))),Object(i.b)("li",{parentName:"ul"},"TOOLBARRIGHT (): the right side of a toolbar.\xa0Horizontal container.\xa0Extension coefficient: 1, alignment:\xa0CENTER.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"FILTERGROUPS ():\xa0contains all the components that are created for\xa0filter groups\xa0corresponding to a\xa0object group.\xa0Horizontal container.\xa0Alignment: CENTER.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"FILTERGROUP: base component of a Filter group.\xa0Alignment: CENTER."))),Object(i.b)("li",{parentName:"ul"},"TOOLBAR (\n): \xa0contains the components of the properties displayed in the\xa0TOOLBAR view and display group equal to the specified one.\xa0Horizontal container.\xa0Alignment: CENTER.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"PROPERTY (): base component of the Property Panel."))))))),Object(i.b)("li",{parentName:"ul"},"USERFILTER (): \xa0base component of the User filter.\xa0Alignment: STRETCH."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"PANEL")," (tree>):\xa0contains the components of the properties displayed in the\xa0PANEL view. Vertical container. Alignment: STRETCH. If several\xa0properties\xa0belong to\xa0",Object(i.b)("a",{parentName:"li",href:"/platform/next/Groups_of_properties_and_actions"},"groups")," for which it is necessary to create separate containers, then a\xa0corresponding hierarchy of containers is created for them and the components of these properties are placed in it:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"GROUP")," (<property group",">",", tree",">","): contains components of properties that belong to the specified object group and property group\xa0(or do not belong to any property group: in this case the property group is not specified, for example GROUP(,a)). Column container.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"PROPERTY (): base component of the Property Panel."))))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"TOOLBARBOX"),": contains property components that are displayed in\xa0TOOLBARview\xa0and have no display group\xa0(for example, the property has no parameters).\xa0The internal structure and layout are similar to the corresponding\xa0internal structure and layout of an object group (except for ",Object(i.b)("strong",{parentName:"li"},"FILTERGROUPS"),", which does not make sense when there is no object group, and therefore is not present in this container).",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"TOOLBARLEFT, TOOLBARRIGHT, TOOLBAR..."))))))),Object(i.b)("h3",{id:"default-design-example"},"Default design example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"\nFORM myForm 'myForm'\n    OBJECTS myObject = myClass\n    PROPERTIES(myObject) myProperty1, myProperty2 PANEL\n    FILTERGROUP myFilter\n        FILTER 'myFilter' myProperty1(myObject)\n;\n")),Object(i.b)("p",null,"The hierarchy\xa0of containers\xa0and\xa0components\xa0in the default design will look like this:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(848).default})),Object(i.b)("h3",{id:"language"},"Language"),Object(i.b)("p",null,"To set up the design of the form, use the\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/DESIGN_instruction"},"*",Object(i.b)("strong",{parentName:"a"},"*DESIGN**")," instruction"),"."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"DESIGN order { // customizing the design of the form, starting with the default design\n    // marking that all changes to the hierarchy will occur for the topmost container\n    NEW orderPane FIRST { // creating a new container as the very first one before the system buttons, in which we put two containers - header and specifications\n        fill = 1; // specifying that the container should occupy all the space available to it\n        type = SPLITV; // specifying that the container will be a vertical splitter\n        MOVE BOX(o) { // moving everything related to the object o to the new container\n            PANEL(o) { // configuring how properties are displayed in the object o panel\n                type = CONTAINERV; // making all descendants go from top to bottom\n                NEW headerRow1 { // creating a container - the first row\n                    type = CONTAINERH;\n                    MOVE PROPERTY(date(o)) { // moving the order date property\n                        caption = 'Date of the edited order'; // \"override\" the property caption in the form design (instead of the standard one)\n                        toolTip = 'Input here the date the order was made'; //setting a hint for the order date property\n                        background = #00FFFF; // making the background red\n                    }\n                    MOVE PROPERTY(time(o)) { // moving the order time property\n                        foreground = #FF00FF; // making the color green\n                    }\n                    MOVE PROPERTY(number(o)) { // moving the order number property\n                        charWidth = 5; // setting that the user should preferably be shown 5 characters\n                    }\n                    MOVE PROPERTY(series(o)); // moving the order series property\n                }\n                NEW headerRow2 {\n                    type = CONTAINERV; // descendants - from top to bottom\n                }\n                MOVE PROPERTY(note(o));\n            }\n\n            size = (400, 300); //specifying that the container o.box should have a base size of 400x300 pixels\n        }\n        NEW detailPane { // creating a container that will store various specifications for the order\n            type = TABBED; // marking that this container should be a tab panel, where its descendats are tabs\n            MOVE BOX(d) { // adding a container with order lines as one of the tabs in the top panel\n                caption = 'Lines'; // setting the caption of the tab panel\n                PROPERTY(index(d)) { focusable = FALSE; } // making the row number column never have focus\n                GRID(d) {\n                    defaultComponent = TRUE; // making sure that by default the focus when opening the form is set to the row table\n                }\n            }\n            MOVE BOX(s) { // adding a container with sku totals as one of the detailPane tabs\n                caption = 'Selection';\n            }\n        }\n    }\n}\n\n// splitting the form definition into two instructions (the second instruction can be transferred to another module)\nDESIGN order {\n    REMOVE TOOLBARLEFT; // removing from the hierarchy the container with the print and export buttons to xls, thereby making them invisible\n}\n")),Object(i.b)("p",null,"The output is the following form:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(849).default})))}b.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),h=a,d=p["".concat(o,".").concat(h)]||p[h]||m[h]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},848:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/57738024-6ecfe5a9355a0ffec21981bab1728b77.png"},849:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/57738025-7364b4b4c703078e55a694077d5ce2f7.jpg"}}]);