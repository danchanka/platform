(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{466:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(747)),b={title:"Search"},c={unversionedId:"Search",id:"version-v4/Search",isDocsHomePage:!1,title:"Search",description:"Each element in the system contains certain information that allows it to be uniquely identified among other elements of the system. However, providing all the information about the element in each place it is used is rather cumbersome; so the platform has a special search algorithm, which allows you to find the desired element with only part of the information about it (for example, only a short name and the module which uses the item you are searching for).",source:"@site/versioned_docs/version-v4/Search.md",slug:"/Search",permalink:"/platform/Search",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Search.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Naming",permalink:"/platform/Naming"},next:{title:"Modularity",permalink:"/platform/Modularity"}},i=[{value:"Name matches",id:"name",children:[]},{value:"Located in dependent module",id:"module",children:[]},{value:"Located in specified namespace (if explicitly specified)",id:"namespace",children:[]},{value:"Selection of a priority namespace (if the namespace is not explicitly specified)",id:"priority",children:[]},{value:"Number of parameters matches",id:"metacode",children:[]},{value:"Search for property inside action",id:"locals",children:[{value:"Namespace not specified explicitly",id:"nonamespace",children:[]}]},{value:"Located upper in the stack",id:"stack",children:[]},{value:"Suitable classes of parameters",id:"direct",children:[]},{value:"Classes of parameters intersect",id:"indirect",children:[]},{value:"Selection of more specific classes of parameters",id:"concrete",children:[]},{value:"Not searching for an abstract property",id:"notabstract",children:[]},{value:"Abstract property (if an abstract property is being searched for)",id:"abstract",children:[]},{value:"Selection of non-matching classes of parameters (if an abstract property is being searched for)",id:"notequals",children:[]}],o={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Each element in the system contains certain information that allows it ",Object(l.b)("a",{parentName:"p",href:"/platform/Element_identification"},"to be uniquely identified")," among other elements of the system. However, providing all the information about the element in each place it is used is rather cumbersome; so the platform has a special ",Object(l.b)("em",{parentName:"p"},"search")," algorithm, which allows you to find the desired element with only part of the information about it (for example, only a short ",Object(l.b)("a",{parentName:"p",href:"/platform/Naming"},"name")," and the ",Object(l.b)("a",{parentName:"p",href:"/platform/Modules"},"module")," which uses the item you are searching for)."),Object(l.b)("p",null,"In general, a search algorithm consists of one or more ",Object(l.b)("em",{parentName:"p"},"search steps. "),"The steps are executed one after another so that if the required element is not found in the first step, the second step is executed, then the next and so on until either the required element is found or the steps are completed (in the latter case, the platform will throw an error that the element was not found)."),Object(l.b)("p",null,"Each search step, in turn, consists of several substeps:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Step conditions")," - a set of conditions, each of which must be met in order for the step to make sense at all. This check is done before any elements of the system are examined, and depends entirely on the context of the call."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Selection conditions")," - a set of conditions, each of which must be met for any element that is potentially the required element. In this step, the elements are independent of each other, and the result of this step is a selected ",Object(l.b)("em",{parentName:"li"},"set of candidates, "),"to be the required element."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Selection operations"),' - a list of operations each of which filters a set of candidates, depending on which of the candidates in this set is potentially "better" (that is, with a higher probability) suited for the role of the required element.')),Object(l.b)("p",null,"If, after performing the last selection operation, there remains:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"exactly one element - it is considered to be the required element. "),Object(l.b)("li",{parentName:"ul"},"more than one element - the platform will throw an error that it is not possible to unambiguously determine the required element"),Object(l.b)("li",{parentName:"ul"},"zero elements - the platform will either go to the next search step (if one exists) or it will throw an error that the element was not found.")),Object(l.b)("p",null,"Below are the steps, conditions and operations of the search algorithm, depending on the type of the required element:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Element type"),Object(l.b)("th",{parentName:"tr",align:null},"Search step"),Object(l.b)("th",{parentName:"tr",align:null},"Step conditions"),Object(l.b)("th",{parentName:"tr",align:null},"Selection conditions"),Object(l.b)("th",{parentName:"tr",align:null},"Selection operations"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/platform/Modules"},"Modules")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name equals",Object(l.b)("a",{parentName:"td",href:"#name"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/platform/Forms"},"Forms"),", ",Object(l.b)("a",{parentName:"td",href:"/platform/User_classes"},"Classes"),", ",Object(l.b)("a",{parentName:"td",href:"/platform/Navigator"},"Navigator Elements"),", ",Object(l.b)("a",{parentName:"td",href:"/platform/Groups_of_properties_and_actions"},"Property and action groups")," , ",Object(l.b)("a",{parentName:"td",href:"/platform/Tables"},"Tables"),", ",Object(l.b)("a",{parentName:"td",href:"/platform/Navigator_design"},"Navigator Design")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in dependent module",Object(l.b)("a",{parentName:"td",href:"#module"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in specified namespace (if explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#namespace"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#priority"},"...")),Object(l.b)("br",null)))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("a",{parentName:"td",href:"/platform/Metaprogramming"},"Metacodes"))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in dependent module",Object(l.b)("a",{parentName:"td",href:"#module"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in specified namespace (if explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#namespace"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Number of parameters matches",Object(l.b)("a",{parentName:"td",href:"#metacode"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#priority"},"...")),Object(l.b)("br",null)))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/platform/Properties"},"Properties"),", ",Object(l.b)("a",{parentName:"td",href:"/platform/Actions"},"Actions")),Object(l.b)("td",{parentName:"tr",align:null},"Local"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Search for property inside action",Object(l.b)("a",{parentName:"td",href:"#locals"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Namespace not specified explicitly",Object(l.b)("a",{parentName:"td",href:"#nonamespace"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located upper in the stack",Object(l.b)("a",{parentName:"td",href:"#stack"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Parameters classes match",Object(l.b)("a",{parentName:"td",href:"#direct"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Selection of more specific classes of parameters",Object(l.b)("a",{parentName:"td",href:"#concrete"},"...")),Object(l.b)("br",null)))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Local common"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Search for property inside action",Object(l.b)("a",{parentName:"td",href:"#locals"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Namespace not specified explicitly",Object(l.b)("a",{parentName:"td",href:"#nonamespace"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located upper in the stack",Object(l.b)("a",{parentName:"td",href:"#stack"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Parameters classes intersect",Object(l.b)("a",{parentName:"td",href:"#indirect"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Global"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in dependent module",Object(l.b)("a",{parentName:"td",href:"#module"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in specified namespace (if explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#namespace"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Parameters classes match",Object(l.b)("a",{parentName:"td",href:"#direct"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Abstract property (if an abstract property is being searched for)",Object(l.b)("a",{parentName:"td",href:"#abstract"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#priority"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Selection of non-matching classes of parameters (if an abstract property is being searched for)",Object(l.b)("a",{parentName:"td",href:"#notequals"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Selection of more specific classes of parameters",Object(l.b)("a",{parentName:"td",href:"#concrete"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Global common"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Not searching for an abstract property",Object(l.b)("a",{parentName:"td",href:"#notabstract"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in dependent module",Object(l.b)("a",{parentName:"td",href:"#module"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in specified namespace (if explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#namespace"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Parameters classes intersect",Object(l.b)("a",{parentName:"td",href:"#indirect"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#priority"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("p",null,"Description of steps, conditions and operations of the search algorithm:"),Object(l.b)("h2",{id:"name"},"Name matches"),Object(l.b)("p",null,"The name of the candidate matches the search name (must always be specified explicitly when searching). The comparison is case-sensitive (i.e. aA != AA)."),Object(l.b)("h2",{id:"module"},"Located in dependent module"),Object(l.b)("p",null,"Candidate module ",Object(l.b)("a",{parentName:"p",href:"/platform/Modules#depends"},"depends on")," the module in which the search is performed."),Object(l.b)("h2",{id:"namespace"},"Located in specified namespace (if explicitly specified)"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/platform/Naming#namespace"},"Namespace")," of the candidate equals the namespace of the search (if this namespace is specified explicitly)."),Object(l.b)("h2",{id:"priority"},"Selection of a priority namespace (if the namespace is not explicitly specified)"),Object(l.b)("p",null,"If the current set contains candidates from the namespace in which the search is performed, all other candidates are deleted from the set of candidates, and the selection operation is completed. If not, a similar action is repeated for ",Object(l.b)("em",{parentName:"p"},"priority")," namespaces of the module in which the search is being performed (in the order in which these priority namespaces were set). If nothing is found for them either, the set of candidates remains unchanged."),Object(l.b)("h2",{id:"metacode"},"Number of parameters matches"),Object(l.b)("p",null,"The number of parameters of the candidate is equal to the number of parameters of the call."),Object(l.b)("h2",{id:"locals"},"Search for property inside action"),Object(l.b)("p",null,"This step is only executed to search for a property, and only if this search is inside some action (and not, for example, in a form declaration)."),Object(l.b)("h3",{id:"nonamespace"},"Namespace not specified explicitly"),Object(l.b)("p",null,"This step is only executed if no search namespace is specified."),Object(l.b)("h2",{id:"stack"},"Located upper in the stack"),Object(l.b)("p",null,"The candidate is a ",Object(l.b)("a",{parentName:"p",href:"/platform/Data_properties_DATA_#local"},"local property")," and:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"is declared inside an operator of a ",Object(l.b)("a",{parentName:"li",href:"/platform/Sequence_..._"},"sequence")," that executes an action that refers to the required element."),Object(l.b)("li",{parentName:"ul"},"is declared earlier than the action that directly refers to the required element.")),Object(l.b)("h2",{id:"direct"},"Suitable classes of parameters"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"#call-broken"},"Classes of call parameters")," ",Object(l.b)("a",{parentName:"p",href:"#directclasses-broken"},"match")," ",Object(l.b)("a",{parentName:"p",href:"#decl-broken"},"the classes of the candidate's parameters")," or classes of the referring parameters are unknown."),Object(l.b)("h2",{id:"indirect"},"Classes of parameters intersect"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"#call-broken"},"Classes of the referring parameters")," ",Object(l.b)("a",{parentName:"p",href:"#indirectclasses-broken"},"intersect")," with ",Object(l.b)("a",{parentName:"p",href:"#decl-broken"},"classes of the candidate's parameters"),"."),Object(l.b)("h2",{id:"concrete"},"Selection of more specific classes of parameters"),Object(l.b)("p",null,"If the set of candidates includes properties ",Object(l.b)("strong",{parentName:"p"},"A")," and ",Object(l.b)("strong",{parentName:"p"},"B")," such that ",Object(l.b)("strong",{parentName:"p"},"A"),"'s parameter classes match ",Object(l.b)("strong",{parentName:"p"},"B"),"'s, then property ",Object(l.b)("strong",{parentName:"p"},"B")," is removed from the set of candidates."),Object(l.b)("h2",{id:"notabstract"},"Not searching for an abstract property"),Object(l.b)("p",null,"This step is not executed if a property (action) is searched in the ",Object(l.b)("a",{parentName:"p",href:"/platform/Property_extension"},"extension")," operator of the property (action), and the searched property is an extensible (abstract) property (when searching for properties in the right one part of extension operator implementation the common search mechanism is used)."),Object(l.b)("h2",{id:"abstract"},"Abstract property (if an abstract property is being searched for)"),Object(l.b)("p",null,"The candidate is an ",Object(l.b)("a",{parentName:"p",href:"/platform/Property_extension"},"abstract")," property (action)."),Object(l.b)("h2",{id:"notequals"},"Selection of non-matching classes of parameters (if an abstract property is being searched for)"),Object(l.b)("p",null,"If:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"the search is for an abstract property (action)"),Object(l.b)("li",{parentName:"ul"},"the referring parameter classes are not explicitly specified"),Object(l.b)("li",{parentName:"ul"},"the set of candidates includes properties (actions) whose parameter classes are equal to the classes of the call's parameters"),Object(l.b)("li",{parentName:"ul"},"the set of candidates includes properties (actions) whose parameter classes are not equal to the classes of the call's parameters")),Object(l.b)("p",null,"Then: properties (actions) from the third section are deleted from the set of candidates (i.e., those for which the parameter classes are equal to the classes of the referring parameters)"),Object(l.b)("h4",{id:"additional-operations-to-search-for-properties--actions"},"Additional operations to search for properties / actions"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Matching parameter classes")),Object(l.b)("p",null,"Let's say that the classes of parameters (A1, ..., An) ",Object(l.b)("em",{parentName:"p"},"match")," the classes of parameters (B1, ..., Bm) if:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"n = m, i.e. the number of parameters is the same"),Object(l.b)("li",{parentName:"ul"},"for each parameter ",Object(l.b)("strong",{parentName:"li"},"i"),", one of the following is true:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Ai is unknown (equal to ",Object(l.b)("strong",{parentName:"li"},"?"),")"),Object(l.b)("li",{parentName:"ul"},"Bi is unknown (equal to ",Object(l.b)("strong",{parentName:"li"},"?"),")"),Object(l.b)("li",{parentName:"ul"},"Ai ",Object(l.b)("a",{parentName:"li",href:"/platform/User_classes#inheritance"},"inherits")," from Bi (more specifically, the set of descendant classes of Bi includes the set of descendant classes of Ai)")))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Intersection of parameter classes")),Object(l.b)("p",null,"Let's say that the classes of parameters (A1, ..., An) ",Object(l.b)("em",{parentName:"p"},"intersect with")," the classes of parameters (B1, ..., Bm) if:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"n = m, i.e. the number of parameters is the same"),Object(l.b)("li",{parentName:"ul"},"for each parameter ",Object(l.b)("strong",{parentName:"li"},"i"),", one of the following is true:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Ai is unknown (equal to ",Object(l.b)("strong",{parentName:"li"},"?"),")"),Object(l.b)("li",{parentName:"ul"},"Bi is unknown (equal to ",Object(l.b)("strong",{parentName:"li"},"?"),")"),Object(l.b)("li",{parentName:"ul"},"Ai and Bi have a common descendant (more specifically, the set of descendant classes of Bi intersects with the set of descendant classes of Ai)")))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defining the classes of the referring parameters")),Object(l.b)("p",null,"When a call is made a property (action), if the parameter classes are not explicitly set, the platform tries to automatically determine them from the reference context. The following is an (incomplete) list of possible contexts, and how the platform determines the referring parameter classes in these cases:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Context"),Object(l.b)("th",{parentName:"tr",align:null},"Call parameter classes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Composition / Call"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of the values of argument properties")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Use on the form"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of objects taken by the required property/action")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Add actions to the navigator"),Object(l.b)("td",{parentName:"tr",align:null},"Empty list")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Results of input, external access"),Object(l.b)("td",{parentName:"tr",align:null},"Empty list")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Simple partitioning"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of the values of group properties (",Object(l.b)("strong",null,"BY")," block)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Nested local properties in session operators"),Object(l.b)("td",{parentName:"tr",align:null},"Unknown")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Data import"),Object(l.b)("td",{parentName:"tr",align:null},"If a list of values is imported (",Object(l.b)("strong",null,"LIST"),"), the empty list, otherwise a list of a single ",Object(l.b)("strong",null,"INTEGER")," element")))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Determining parameter classes of a property (action)")),Object(l.b)("p",null,"If the parameter classes of a property (action) are not explicitly specified, the platform tries to automatically determine them from the property (action) implementation. The following is an (incomplete) list of possible implementations, and how the platform determines property (action) parameter classes in these cases:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Context"),Object(l.b)("th",{parentName:"tr",align:null},"Call parameter classes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Expressions"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of the parameters (in the order of their use)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Primary, Abstract"),Object(l.b)("td",{parentName:"tr",align:null},"Classes are specified explicitly in the operator itself")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Formula, Internal Call"),Object(l.b)("td",{parentName:"tr",align:null},"The classes can be specified explicitly in the operator itself; if not specified, all parameter classes are considered unknown (",Object(l.b)("strong",null,"?"),") and the number is determined by the specifics of the particular operator")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Grouping"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of the values of group properties (",Object(l.b)("strong",null,"BY")," block)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Operations with object groups"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of objects belonging to the used objects group")))),Object(l.b)("h4",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE ResolveA;\n\nCLASS A;\nCLASS B : A;\nCLASS C : B;\n\nf = DATA INTEGER (A);\nf = DATA INTEGER (C);\n\nMETA defineSmth(prm1)\n    x = DATA INTEGER (prm1);\nEND\n\nMETA defineSmth(prm1, prm2)\n    x = DATA INTEGER (prm1, prm2);\nEND\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE ResolveB;\n\nREQUIRE ResolveA;\n\nf = DATA INTEGER (B);\n\nh(C c) = f(c); // will find the upper declaration - ResolveB.f[B]\nj(C c) = ResolveA.f(c); // will find the declaration in ResolveA - ResolveA.f[C]\nz(C c) = f[A](c); // will find the declaration in ResolveA - ResolveA.f[A]\n\ntest(C c, A a) {\n    LOCAL f = INTEGER (B);\n\n    f(c) <- 1; // will find the upper declaration - f[B]\n    MESSAGE f(a); // will find the upper declaration - f[B]\n    ResolveB.f(c) <- 1; // will find the upper declaration in ResolveB - ResolveB.f[B]\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE ResolveC;\n\nREQUIRE ResolveB, ResolveA;\n\nNAMESPACE ResolveA;\n\nx(B b) = f(b); // will find the declaration in ResolveA - ResolveA.f[A]\ny(B b) = ResolveB.f(b); // will find the declaration in ResolveA - ResolveB.f[B]\n\n@defineSmth(A, B); // will find the declaration in ResolveA - ResolveA.defineSmth(prm1, prm2)\n")))}s.isMDXComponent=!0},747:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(b,".").concat(d)]||p[d]||m[d]||l;return a?r.a.createElement(u,c(c({ref:t},o),{},{components:a})):r.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);