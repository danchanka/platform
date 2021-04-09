(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{250:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(746)),i={title:"Interactive view",sidebar_label:"Overview"},s={unversionedId:"Interactive_view",id:"Interactive_view",isDocsHomePage:!1,title:"Interactive view",description:"A form opened in interactive mode is a graphical component with a certain\xa0design in which the user can trigger various events and thereby navigate through system objects, view and change\xa0property values, execute\xa0actions,\xa0and so on. Developers can also use an\xa0additional set of operators with this view, making it possible to manage the open form.",source:"@site/docs/Interactive_view.md",slug:"/Interactive_view",permalink:"/platform/next/Interactive_view",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Interactive_view.md",version:"current",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",sidebar:"learn",previous:{title:"Form views",permalink:"/platform/next/Form_views"},next:{title:"Form design",permalink:"/platform/next/Form_design"}},c=[{value:"Object views",id:"objects",children:[]},{value:"Object trees",id:"tree",children:[]},{value:"Property views",id:"property",children:[]},{value:"Filter group",id:"filtergroup",children:[]},{value:"Custom filters/orders",id:"userfilters",children:[]},{value:"Default objects selection",id:"defaultobject",children:[]},{value:"Object operators",id:"objectoperators",children:[]},{value:"Selection/editing forms",id:"edtClass",children:[]},{value:"Session owner",id:"owner",children:[]},{value:"System actions for form/session lifecycle management",id:"sysactions",children:[]},{value:"Additional features",id:"extra",children:[]},{value:"Language",id:"language",children:[]},{value:"Open form",id:"open-form",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A form opened in ",Object(r.b)("em",{parentName:"p"},"interactive")," mode is a graphical component with a certain\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/next/Form_design"},"design")," in which the user can trigger various ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Form_events"},"events")," and thereby navigate through system objects, view and change\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/next/Properties"},"property")," values, execute\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/next/Actions"},"actions"),",\xa0and so on. Developers can also use an\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/next/Form_operators"},"additional set of operators")," with this view, making it possible to manage the open form."),Object(r.b)("h3",{id:"objects"},"Object views"),Object(r.b)("p",null,"In the interactive view,\xa0object groups can be displayed in a table. The rows in the table are object collections, and the columns are properties. The records displayed in the table and their order are determined by the current ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Form_structure#filters"},"filters")," and ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Form_structure#sort"},"orders"),"."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/platform/next/Form_structure#currentObject-broken"},"Current values")," of objects can change either as a result of an action created using the special search operator ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Search_SEEK_"},"(SEEK)"),", or as a result of a change to the current row, if an object group is displayed in a table."),Object(r.b)("p",null,"When an object group is displayed in a table, the number of rows (object collections) displayed can either be determined automatically based on the height of the visible part of the table, or specified by the developer explicitly when creating the form."),Object(r.b)("h3",{id:"tree"},"Object trees"),Object(r.b)("p",null,"The platform also allows to display multiple object groups in one table simultaneously. This happens similarly to the ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Static_view#hierarchy"},"object group hierarchy")," in a static view, i.e. if we have two groups ",Object(r.b)("strong",{parentName:"p"},"A")," and ",Object(r.b)("strong",{parentName:"p"},"B"),' then, in the "joined" table, the first object collection from ',Object(r.b)("strong",{parentName:"p"},"A")," is displayed first, then all object collections from ",Object(r.b)("strong",{parentName:"p"},"B")," (as filtered), then a second object collection from ",Object(r.b)("strong",{parentName:"p"},"A"),", then again all the object collections from ",Object(r.b)("strong",{parentName:"p"},"B")," and so on. In this case, it is highly desirable that the filters for ",Object(r.b)("strong",{parentName:"p"},"B")," used all objects from ",Object(r.b)("strong",{parentName:"p"},"A,\xa0")," since otherwise combining these groups into a single tree doesn't make sense. Initially, when a form is opened in the table, only\xa0objects of the topmost object group are displayed, but at the same time, a special column is created on the left of the table, using which the user can open nodes on his own and thus view only objects of interest in the lower object groups. Another function of this created column is to demonstrate the nesting of nodes by tabulating the elements inside this column (this allows the user to better understand what level of the hierarchy he is currently at)."),Object(r.b)("p",null,"Object trees also\xa0can be used to display hierarchical data (such as classifiers). In this case, the descendants of the object collection of a group in the tree can be not only object collections of lower groups but also object collections of the same group (such an object group shall be called ",Object(r.b)("em",{parentName:"p"},"hierarchical"),'). To determine these child object collections in a hierarchical object group, it is necessary to define an additional filter for it \u2013 which, unlike regular filters, can refer not only to the values of the filtered object collections but also to the values of the "upper in the tree" object collection (the same approach is used in the\xa0',Object(r.b)("a",{parentName:"p",href:"/platform/next/Recursion_RECURSION_"},"recursion"),' operator). It is highly desirable that the hierarchical filter uses all the values of the upper object collections, since otherwise, as with filters between different groups of objects, creating such a tree doesn\'t make sense. Initially, it is assumed that all values of the "upper in the tree" object collection are ',Object(r.b)("strong",{parentName:"p"},"NULL"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"In the current platform implementation, hierarchical groups allow only trees to be displayed (not directed graphs). Accordingly, it is allowed to use only values of the upper object collections and properties that take lower (filtered) values of objects as input for a hierarchical filter (so that it is guaranteed that the same tree node cannot be reached in different ways)"))),Object(r.b)("p",null,'The properties of different object groups in the tree are arranged in columns under each other, that is, the first column displays the first properties of each object group, the second column displays the second ones, and so on. The total number of tree columns is determined by the last group of objects on the tree (all "extra" properties of the upper groups are simply ignored).'),Object(r.b)("h3",{id:"property"},"Property views"),Object(r.b)("p",null,"Any property or\xa0action can be displayed on a form\xa0in one of the following\xa0",Object(r.b)("em",{parentName:"p"},"views"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Panel")," (",Object(r.b)("strong",{parentName:"li"},"PANEL"),"): a separate component that displays a property caption and this property value for the current values of the form objects."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Toolbar")," (",Object(r.b)("strong",{parentName:"li"},"TOOLBAR"),"): similar to a panel, but this component has a different default location (immediately below the table), and if the table to which a toolbar belongs is hidden then the toolbar is hidden with it."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"table column"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"GRID"),"): a separate column in the table that displays the property values for all object collections (rows) in the table.")),Object(r.b)("p",null,"For each object group, you can specify which ",Object(r.b)("em",{parentName:"p"},"default view"),"\xa0the properties of this group will be displayed in (by default, this view is a table column). If the property has no parameters (that is, it does not have a display group), it is displayed in a panel. Actions are always displayed in a panel by default."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"For the remainder of the section, the behavior of properties and actions is exactly the same and so we will use only the term property (behavior is absolutely identical for actions)."))),Object(r.b)("p",null,"If necessary, the developer can explicitly specify which view a property should use."),Object(r.b)("p",null,"If at any point there are no properties displayed in the table for the object group, the table is automatically hidden."),Object(r.b)("p",null,"By default, the caption of each property on the form is the title of the property itself. If necessary, the developer can specify a different caption, or, if you need even more flexibility, use a property as a caption. This caption property can receive ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Form_structure#groupcolumns-broken"},"upper")," objects of the displayed property as input.\xa0It is also worth noting that if ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Form_structure#groupcolumns-broken"},"groups-in-columns")," are defined for the property, then it is desirable to have different captions for the created columns (in order to distinguish them somehow): in this case, it is recommended to use a property that receives all (!) objects of the defined group-in-columns as input."),Object(r.b)("p",null,"In addition to the captions, you can define colors (both the background color and the text color) for each property view on a form, as well as a condition that needs to be met for the property to be displayed. Like the caption, each of these parameters is defined using some property."),Object(r.b)("h3",{id:"filtergroup"},"Filter group"),Object(r.b)("p",null,"In order to provide the user with an interface for choosing filters to apply, they can be combined into\xa0",Object(r.b)("em",{parentName:"p"},"filter groups"),". For each of these groups, a special component will be created on the form: the user can use it to select one filter from the group as the current active filter. If several filters in one group are applied to different object groups, then the component will be displayed for the last of them."),Object(r.b)("p",null,"The developer can specify a name for each filter group which can be used to access it in the future (for example, in\xa0form design)."),Object(r.b)("h3",{id:"userfilters"},"Custom filters/orders"),Object(r.b)("p",null,"The user can change existing orders or add their own, as well as add their own filters using the corresponding interfaces:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Orders \u2013\xa0by double-clicking on the column heading."),Object(r.b)("li",{parentName:"ul"},"Filters \u2013\xa0by using the corresponding button under the table for each object group. By default, the filter is set to the active property in the table, and filters it for equality to the entered value (for all types except case-insensitive string types, where the filter is set to include the entered string). If necessary, the developer can specify the default filtering type explicitly by using the corresponding option.")),Object(r.b)("h3",{id:"defaultobject"},"Default objects selection"),Object(r.b)("p",null,"In the interactive form view, object group filters can change as a result of various user actions\xa0(for example, changing the upper objects of these filters, selecting filters in the filter group, etc.), after which the ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Form_structure#currentObject-broken"},"current")," objects may no longer meet the conditions of the new filters. Also, when ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Open_form"},"a form is opened"),", some objects may not be ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Open_form#params"},"passed")," or may be passed equal to ",Object(r.b)("strong",{parentName:"p"},"NULL"),". In both of these cases, it is necessary to change the current objects, to some current\xa0",Object(r.b)("em",{parentName:"p"},"default objects.\xa0")," The platform provides several options for selecting new current objects:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"First (",Object(r.b)("strong",{parentName:"li"},"FIRST"),") - the first\xa0object collection (in accordance with the current order)"),Object(r.b)("li",{parentName:"ul"},"Last (",Object(r.b)("strong",{parentName:"li"},"LAST"),") \u2013 last object collection."),Object(r.b)("li",{parentName:"ul"},"Previous (",Object(r.b)("strong",{parentName:"li"},"PREV"),") \u2013 the previous object collection (or as close to it as possible)."),Object(r.b)("li",{parentName:"ul"},"Undefined (",Object(r.b)("strong",{parentName:"li"},"NULL"),") \u2013 ",Object(r.b)("strong",{parentName:"li"},"NULL")," values collection.")),Object(r.b)("p",null,"If none of these options is explicitly specified, the platform will try to determine whether the permanent filters in the group of objects are a) mutually exclusive for different values of the upper objects (if any), and/or b) the filter selects a very small percentage of the total number of objects of the specified classes. In both of these cases, it makes no sense to search for the previous object and, by default, the first object is selected (",Object(r.b)("strong",{parentName:"p"},"FIRST"),"); in all other cases, the previous object (",Object(r.b)("strong",{parentName:"p"},"PREV"),")."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"It is worth noting that the selection of objects by default is pretty the same as the\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/next/Search_SEEK_"},"object search"),"operation, where the search objects are:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"for type PREV",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"on opening a form: either the passed objects, or, if there are none, the last used objects for the form object class."),Object(r.b)("li",{parentName:"ul"},"in other cases: the previous current object values"))),Object(r.b)("li",{parentName:"ul"},"for other types",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"on opening the form - passed objects"),Object(r.b)("li",{parentName:"ul"},"in other cases \u2013 an empty object collection")))),Object(r.b)("p",{parentName:"div"},"Search direction is determined by the object's default type (",Object(r.b)("strong",{parentName:"p"},"PREV"),"\xa0here is equivalent to\xa0",Object(r.b)("strong",{parentName:"p"},"FIRST"),")."))),Object(r.b)("h3",{id:"objectoperators"},"Object operators"),Object(r.b)("p",null,"When adding properties to a form, you can use a predefined set of operators that implement the most common scenarios for working with objects instead of using specific properties (thus avoiding the need to create and name these properties outside the form each time):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Object value (",Object(r.b)("strong",{parentName:"li"},"VALUE"),") \u2013 for a form object of\xa0built-in class\xa0, a special property with one argument will be added which displays the current object value and allows the user to change it. For\xa0",Object(r.b)("a",{parentName:"li",href:"/platform/next/User_classes"},"custom classes"),", a\xa0property will be added which displays the object ID in the database; when you try to change it, it shows a dialog with a list of objects of that class. The selected value will be used as the current value of the object on the form."),Object(r.b)("li",{parentName:"ul"},"Create object (",Object(r.b)("strong",{parentName:"li"},"NEW"),") \u2013 adds an action without arguments, which ",Object(r.b)("a",{parentName:"li",href:"/platform/next/New_object_NEW_"},"creates")," an object of the class of the passed form object (or the class explicitly specified by the developer), after which it automatically makes this object current. If the class has descendants, the user will be shown a dialog where he can select specific child class. If any filters are applied to the form object, for which the object is created, the system will try to ",Object(r.b)("a",{parentName:"li",href:"/platform/next/Property_change_CHANGE_"},"change")," the newly created object's properties so that it meets these filter conditions (as a rule, for created objects, a default value of the class of each filter's value is written to that filter)"),Object(r.b)("li",{parentName:"ul"},"Edit object (",Object(r.b)("strong",{parentName:"li"},"EDIT)"),"\xa0\u2013 adds an action with one argument, which calls the ",Object(r.b)("strong",{parentName:"li"},"System.formEdit")," action (which, in turn, open the default ",Object(r.b)("a",{parentName:"li",href:"#edtClass"},"edit form")," for the edited object class).\xa0"),Object(r.b)("li",{parentName:"ul"},"Create and edit an object (",Object(r.b)("strong",{parentName:"li"},"NEWEDIT"),") \u2013 adds an action without arguments which creates an object of the form object class, calls the edit object action (",Object(r.b)("strong",{parentName:"li"},"EDIT"),"), and if the input is not ",Object(r.b)("a",{parentName:"li",href:"/platform/next/Value_input#result"},"canceled"),", sets the added object as current."),Object(r.b)("li",{parentName:"ul"},"Delete object (",Object(r.b)("strong",{parentName:"li"},"DELETE"),") \u2013 adds an action with one argument which deletes the current object.")),Object(r.b)("p",null,"You can also specify options for the last four operators (ignored for all other actions):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/platform/next/New_session_NEWSESSION_NESTEDSESSION_"},"New Session")," (",Object(r.b)("strong",{parentName:"li"},"NEWSESSION"),") \u2013 in this case, the action added to the form will be executed in a new session.\xa0When opening forms in a new session, it is important to remember that changes made in the current session (form) will not be visible. Thus, this mechanism is only recommended if the form is opened from a form in which the user cannot change anything, or if the properties and actions of the two forms do not intersect in any way. Note that when the operator is used to create a new object (NEW) in a new session, the object is not only created but also edited (NEWEDIT) (otherwise, the session would immediately close and your changes would be lost)."),Object(r.b)("li",{parentName:"ul"},"Nested Session (",Object(r.b)("strong",{parentName:"li"},"NESTEDSESSION"),") \u2013 the action will be executed in a new nested session. As with a new session, ",Object(r.b)("strong",{parentName:"li"},"NEW")," is replaced by ",Object(r.b)("strong",{parentName:"li"},"NEWEDIT"),".")),Object(r.b)("h3",{id:"edtClass"},"Selection/editing forms"),Object(r.b)("p",null,"For each form, you can specify that it is the default form for viewing/editing objects of a given class. In this case, this form will be opened when you call actions created using the operators for object operations (create/edit an object). The same form will be opened when the corresponding \xa0",Object(r.b)("a",{parentName:"p",href:"/platform/next/Open_form#form"},"form selection"),"\xa0option is used in the form opening operator."),Object(r.b)("p",null,"If list/edit form is not defined for a class, the platform will create one automatically. This form will consist of one object of the class, along with all properties matching the class and belonging to the\xa0",Object(r.b)("strong",{parentName:"p"},"System.base")," ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Groups_of_properties_and_actions"},"property group"),". Also, actions of ",Object(r.b)("a",{parentName:"p",href:"#new-broken"},"creating"),", ",Object(r.b)("a",{parentName:"p",href:"#edit-broken"},"editing")," and ",Object(r.b)("a",{parentName:"p",href:"#delete-broken"},"deleting")," an object in a ",Object(r.b)("a",{parentName:"p",href:"#newsession-broken"},"new session")," will be automatically added to the form, along with the ",Object(r.b)("a",{parentName:"p",href:"#value-broken"},"object value")," property if there are no properties from the ",Object(r.b)("strong",{parentName:"p"},"System.id"),' property group corresponding to the class of the object (that is, no "ID" of the object has been added to the form).'),Object(r.b)("h3",{id:"owner"},"Session owner"),Object(r.b)("p",null,"Since a form is opened by default in the current session, it may not always be safe to apply/cancel changes to this session: for example, the changes made in other forms may accidentally be applied. To avoid such situations, the platform has the concept of a ",Object(r.b)("em",{parentName:"p"},"session owner")," \u2013 a form which is responsible for managing the life cycle of the session (for example, applying / canceling changes). By default, it is considered that a form is the session owner if the session did not have any other owner when the form was ",Object(r.b)("a",{parentName:"p",href:"/platform/next/In_an_interactive_view_SHOW_DIALOG_"},"opened"),"."),Object(r.b)("p",null,"To implement the mechanism for working with session owners the platform uses a numerical ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Data_properties_DATA_#local"},"local")," property called ",Object(r.b)("strong",{parentName:"p"},"System.sessionOwners"),". Accordingly, this property is incremented by ",Object(r.b)("strong",{parentName:"p"},"1")," when you open a form and decremented by ",Object(r.b)("strong",{parentName:"p"},"1"),' when you close it. Thus, it shows the nesting depth of the "form opening stack", and is ',Object(r.b)("strong",{parentName:"p"},"NULL")," if the session has no owner and not ",Object(r.b)("strong",{parentName:"p"},"NULL")," otherwise."),Object(r.b)("p",null,"If necessary, the developer can explicitly specify when opening a form that this form is the owner of the session that it uses."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},'Session ownership only affects the display / behavior of system actions for managing the life cycle of a form / session. When using the remaining actions, it is recommended that the developer should consider the risk of applying the "wrong" changes by himself (and, for example, use the mentioned above ',Object(r.b)("strong",{parentName:"p"},"System.sessionOwners")," property)."))),Object(r.b)("h3",{id:"sysactions"},"System actions for form/session lifecycle management"),Object(r.b)("p",null,"The following system\xa0actions\xa0are automatically added to any form (their names are specified in brackets):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Refresh (",Object(r.b)("strong",{parentName:"li"},"System.formRefresh"),") - updates the current state of the form, re-reading all the information from the database."),Object(r.b)("li",{parentName:"ul"},"Save (",Object(r.b)("strong",{parentName:"li"},"System.formApply"),") - saves the changes made on the form to the database."),Object(r.b)("li",{parentName:"ul"},"Cancel (",Object(r.b)("strong",{parentName:"li"},"System.formCancel"),") - cancels all changes made on\xa0the ",Object(r.b)("em",{parentName:"li"},"form"),"."),Object(r.b)("li",{parentName:"ul"},"OK (",Object(r.b)("strong",{parentName:"li"},"System.formOk"),") \u2013 closes the current form and, if the form is the session owner, applies the changes to the database."),Object(r.b)("li",{parentName:"ul"},"Close (",Object(r.b)("strong",{parentName:"li"},"System.formClose"),") - closes the current\xa0",Object(r.b)("em",{parentName:"li"},"form")," and does nothing with the changes."),Object(r.b)("li",{parentName:"ul"},"Drop (",Object(r.b)("strong",{parentName:"li"},"System.formDrop"),") \u2013 closes the current form and returns ",Object(r.b)("strong",{parentName:"li"},"NULL")," as the selected object.")),Object(r.b)("p",null,"By default, these system actions have the following visibility conditions:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Action"),Object(r.b)("th",{parentName:"tr",align:null},"Condition"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Refresh"),Object(r.b)("td",{parentName:"tr",align:null},"Always")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Save, Cancel"),Object(r.b)("td",{parentName:"tr",align:null},"If the form is the owner and actions that change the current session can be called on the form. Cancel may not be shown if the platform determines that canceling the changes is guaranteed to lead to a change of the ",Object(r.b)("a",{parentName:"td",href:"/platform/next/Open_form#params"},"initial values")," of form objects (i.e., selecting other objects)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"OK, Close"),Object(r.b)("td",{parentName:"tr",align:null},"If the form was opened ",Object(r.b)("a",{parentName:"td",href:"/platform/next/In_an_interactive_view_SHOW_DIALOG_#flow"},"synchronously"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Drop"),Object(r.b)("td",{parentName:"tr",align:null},"If the form is opened synchronously, returns a value and allows ",Object(r.b)("strong",null,"NULL")," values to be passed")))),Object(r.b)("p",null,"If necessary, all these actions can be shown/hidden by removing the corresponding components from\xa0the ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Form_design"},"form design"),"\xa0and/or using the corresponding options in the ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Open_form"},"open form")," operator."),Object(r.b)("h3",{id:"extra"},"Additional features"),Object(r.b)("p",null,"You can specify an\xa0image file which will be displayed as the form's icon."),Object(r.b)("p",null,"Also, if necessary, you can enable ",Object(r.b)("em",{parentName:"p"},"automatic update")," mode for a form: the",Object(r.b)("strong",{parentName:"p"},"System.formRefresh")," action will then be executed for the form at a specified interval."),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"All of the above options, as well as defining the form structure,\xa0can be done using the ",Object(r.b)("a",{parentName:"p",href:"/platform/next/FORM_instruction"},Object(r.b)("strong",{parentName:"a"},"FORM")," instruction"),"."),Object(r.b)("h3",{id:"open-form"},"Open form"),Object(r.b)("p",null,"To display the form in the interactive view, the corresponding ",Object(r.b)("a",{parentName:"p",href:"/platform/next/Open_form"},"open form")," operator is used in ",Object(r.b)("a",{parentName:"p",href:"/platform/next/In_an_interactive_view_SHOW_DIALOG_"},"interactive view"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"date = DATA DATE (Order);\nFORM showForm\n    OBJECTS dateFrom = DATE, dateTo = DATE PANEL\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo)\n\n    OBJECTS o = Order\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo\n;\n\ntestShow ()  {\n    SHOW showForm OBJECTS dateFrom = 2010_01_01, dateTo = 2010_12_31;\n\n    NEWSESSION {\n        NEW s = Sku {\n            SHOW sku OBJECTS s = s FLOAT;\n        }\n    }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"FORM selectSku\n    OBJECTS s = Sku\n    PROPERTIES(s) id\n;\n\ntestDialog  {\n    DIALOG selectSku OBJECTS s INPUT DO {\n        MESSAGE 'Selected sku : ' + id(s);\n    }\n}\n\nsku = DATA Sku (OrderDetail);\nidSku (OrderDetail d) = id(sku(d));\n\nchangeSku (OrderDetail d)  {\n    DIALOG selectSku OBJECTS s = sku(d) CHANGE;\n\n    //equivalent to the first option\n    DIALOG selectSku OBJECTS s = sku(d) INPUT NULL CONSTRAINTFILTER DO {\n        sku(d) <- s;\n    }\n}\n")))}p.isMDXComponent=!0},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,d=b["".concat(i,".").concat(m)]||b[m]||h[m]||r;return a?o.a.createElement(d,s(s({ref:t},l),{},{components:a})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);