"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[4701],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=a.Children.toArray(e.children),h=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),b=k.tabGroupChoices,v=k.setTabGroupChoices,g=(0,a.useState)(f),y=g[0],N=g[1],C=[];if(null!=p){var w=b[p];null!=w&&w!==y&&h.some((function(e){return e.value===w}))&&N(w)}var E=function(e){var t=e.currentTarget,n=C.indexOf(t),a=h[n].value;N(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,r,o,l,i,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&o<=c&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:E,onClick:E},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},82924:function(e,t,n){var a=n(67294).createContext(void 0);t.Z=a},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},85350:function(e,t,n){var a=n(67294),r=n(82924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},9364:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=(n(16213),n(55064),n(58215),["components"]),i={title:"Policies",date:new Date("2022-01-18T21:13:48.000Z")},s=void 0,c={unversionedId:"n3/Advances/neofs/topics/policies",id:"n3/Advances/neofs/topics/policies",isDocsHomePage:!1,title:"Policies",description:"Before we can create a container, we need to define the policy. A policy defines which storage nodes on NeoFS you are happy to store your data on.",source:"@site/docs/n3/Advances/neofs/topics/policies.mdx",sourceDirName:"n3/Advances/neofs/topics",slug:"/n3/Advances/neofs/topics/policies",permalink:"/website/docs/n3/Advances/neofs/topics/policies",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/Advances/neofs/topics/policies.mdx",tags:[],version:"current",lastUpdatedBy:"Celia18305",frontMatter:{title:"Policies",date:"2022-01-18T21:13:48.000Z"},sidebar:"docs",previous:{title:"Objects",permalink:"/website/docs/n3/Advances/neofs/topics/objects"},next:{title:"Tokens",permalink:"/website/docs/n3/Advances/neofs/topics/tokens"}},u=[{value:"Overview",id:"overview",children:[{value:"Filters",id:"filters",children:[]},{value:"A Key",id:"a-key",children:[]},{value:"A value",id:"a-value",children:[]},{value:"An operation",id:"an-operation",children:[]},{value:"Selectors",id:"selectors",children:[]},{value:"A name",id:"a-name",children:[]},{value:"An Attribute",id:"an-attribute",children:[]},{value:"The count",id:"the-count",children:[]},{value:"A Clause",id:"a-clause",children:[]},{value:"Replicas",id:"replicas",children:[]},{value:"Container backup Factor (CBF)",id:"container-backup-factor-cbf",children:[]}]},{value:"Examples",id:"examples",children:[{value:"References",id:"references",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before we can create a container, we need to define the policy. A policy defines which storage nodes on NeoFS you are happy to store your data on."),(0,o.kt)("p",null,"The approach to do this is to use the simple policy language provided. A policy is made up of 4 components"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("h3",{id:"filters"},"Filters"),(0,o.kt)("p",null,"Filters are used to decide which nodes meet the requirements to store an object. Think of it as 'filtering' out nodes based on some condition. All nodes have attributes that can be used to filter their capabilities and whether they meet the requirements for the policy."),(0,o.kt)("p",null,"A filter can check for instance if a node is situated in Europe, and the data would be stored on SSDs (solid state drives)."),(0,o.kt)("p",null,"A filter contains"),(0,o.kt)("h3",{id:"a-key"},"A Key"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The name of the attribute to filter")),(0,o.kt)("h3",{id:"a-value"},"A value"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The value to compare the attribute with")),(0,o.kt)("h3",{id:"an-operation"},"An operation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The way in which to make the comparison (less than, greater then, equal to etc)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"filter"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EQ"),(0,o.kt)("td",{parentName:"tr",align:null},"equal to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NE"),(0,o.kt)("td",{parentName:"tr",align:null},"not equal to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GE"),(0,o.kt)("td",{parentName:"tr",align:null},"greater than or equal to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GT"),(0,o.kt)("td",{parentName:"tr",align:null},"greater than")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LT"),(0,o.kt)("td",{parentName:"tr",align:null},"greater than")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LE"),(0,o.kt)("td",{parentName:"tr",align:null},"less than or equal to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OR"),(0,o.kt)("td",{parentName:"tr",align:null},"or")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AND"),(0,o.kt)("td",{parentName:"tr",align:null},"and")))),(0,o.kt)("p",null,"A filter could therefore be "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Country = Italy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Rating > 3.5"))),(0,o.kt)("p",null,"Filters can also have names so they can be grouped into 'meanings', for instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Country = Finland OR Country = Iceland AS ColdCountry\n")),(0,o.kt)("p",null,"Now you can refer to Finland and Iceland as ",(0,o.kt)("inlineCode",{parentName:"p"},"ColdCountry")," in further/more complex filters such as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'FILTER Country EQ "Finland" OR "Iceland" AS ColdCountry\nFILTER ColdCountry AND StorageType = SSD AND Price < 100\nFILTER SSD EQ true AS IsSSD\nFILTER @IsSSD AND Country EQ "RU" AND City EQ "St.Petersburg" AS SPBSSD\nFILTER \'Continent\' EQ \'North America\' OR Continent EQ \'South America\' AS Americas\n')),(0,o.kt)("p",null,"Note country codes come from the open ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/jpatokal/openflights/master/data/countries.dat"},"flight database"),". NeoFS uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nspcc-dev/neofs-locode-db"},"code found here")," to manage these codes"),(0,o.kt)("h3",{id:"selectors"},"Selectors"),(0,o.kt)("p",null,"Once a filter has found some nodes that adhere to the requirements, selectors can now be specified to decide which nodes end up in the container policy."),(0,o.kt)("p",null,"Selectors are slightly easier to understand as part of examples, but the principles of selectors are outlined here"),(0,o.kt)("p",null,"A selector contains"),(0,o.kt)("h3",{id:"a-name"},"A name"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a name that can be referred to ")),(0,o.kt)("h3",{id:"an-attribute"},"An Attribute"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the name of the attribute that will be used to group nodes together. The nodes will be grouped into buckets based on the value of the attribute, or you however create 'random' groups of nodes.")),(0,o.kt)("h3",{id:"the-count"},"The count"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of nodes that should be included in a bucket")),(0,o.kt)("h3",{id:"a-clause"},"A Clause"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The clause specifies how to interpret the count e.g",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"SAME - choose nodes that are part of the same bucket"),(0,o.kt)("li",{parentName:"ul"},"DISTINCT - choose nodes that are from distinct buckets")))),(0,o.kt)("h4",{id:"select--filter"},"Select + Filter"),(0,o.kt)("p",null,"Its easiest to understand a placement policy when considering this combination defines minimal suitable container. ",(0,o.kt)("inlineCode",{parentName:"p"},"FILTER")," specifies a subset of suitable nodes and ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," picks exact nodes from this subset. If network map does not have enough nodes for a minimal suitable container, an error will be produced."),(0,o.kt)("p",null,"Some examples of ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"FILTER")),(0,o.kt)("p",null,"This one is simpler, select 6 nodes from any location."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT 6 FROM *\n")),(0,o.kt)("p",null,"This example states the policy should select a single node that is located in St Petersburg, Russia"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'SELECT 1 FROM SPB\nFILTER Country EQ "RU" AND City EQ "St.Petersburg" AS SPB\n')),(0,o.kt)("p",null,"(note this isn't strictly accurate but works for the example - read about Container Backup Factors)"),(0,o.kt)("h3",{id:"replicas"},"Replicas"),(0,o.kt)("p",null,"Replicas define how many copies of objects should be stored within a Replica. A replica is a group of nodes where a single copy of an object is stored. "),(0,o.kt)("p",null,"With replicas you can decide how much redundancy you would like when it comes to a container's contents and making sure that the data isn't lost"),(0,o.kt)("h3",{id:"container-backup-factor-cbf"},"Container backup Factor (CBF)"),(0,o.kt)("p",null,"The container backup factor defines the maximum number of nodes that should be included within a container's set of nodes."),(0,o.kt)("p",null,"You could have a placement policy that specifies there should be ",(0,o.kt)("inlineCode",{parentName:"p"},"10 nodes within 2 countries")," with a Container Backup Factor of ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("p",null,"In this case the CBF will attempt to have 20 nodes in 2 countries, but anything from 10-20 is good and better, but not a failure."),(0,o.kt)("p",null,"Note, although we have outlined CBF as a concept last here, it should come second, after ",(0,o.kt)("inlineCode",{parentName:"p"},"REP")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placement Policy"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"REP 3")),(0,o.kt)("td",{parentName:"tr",align:null},'When no select or filter is defined, the default will be just to "replicate 3 times selecting from anywhere, i.e ',(0,o.kt)("inlineCode",{parentName:"td"},"REP 3 SELECT 3 FROM *")," . Note CBF defaults to 3, and still applies here, so replicate from 3-9 nodes if they exist")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"REP 3 CBF 4")),(0,o.kt)("td",{parentName:"tr",align:null},"As above, however CBF has been set to 4, so this will select between 3 and 12 nodes to replicate data over")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"REP 1 IN SPB SELECT 1 IN City FROM * AS SPB")),(0,o.kt)("td",{parentName:"tr",align:null},"1 replica in every city")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"REP 2 SELECT 6 FROM *")),(0,o.kt)("td",{parentName:"tr",align:null},"Replicate objects twice, selecting minimum of 6 nodes from anywhere. With CBF it will select up to 18 nodes")))),(0,o.kt)("p",null,"When making policies, it should be defined in the order ",(0,o.kt)("inlineCode",{parentName:"p"},"REP, CBF, SELECT, FILTER")),(0,o.kt)("p",null,"Basic example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"const placementPolicy = `REP 2 IN X\nCBF 2\nSELECT 2 FROM * AS X\n`\n")),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Spec ",(0,o.kt)("a",{parentName:"li",href:"https://nspcc.ru/upload/neofs-spec-latest.pdf#a"},"https://nspcc.ru/upload/neofs-spec-latest.pdf#a")),(0,o.kt)("li",{parentName:"ul"},"Tests/Examples ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nspcc-dev/neofs-sdk-go/blob/master/policy/query_test.go"},"https://github.com/nspcc-dev/neofs-sdk-go/blob/master/policy/query_test.go")),(0,o.kt)("li",{parentName:"ul"},"JSON format of policies (can help seeing complexity) ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nspcc-dev/neofs-sdk-go/blob/master/netmap/json_tests/filter_simple.json"},"https://github.com/nspcc-dev/neofs-sdk-go/blob/master/netmap/json_tests/filter_simple.json"))))}d.isMDXComponent=!0}}]);