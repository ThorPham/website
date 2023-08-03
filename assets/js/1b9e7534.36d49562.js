"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[6807],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,v=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93880:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],s={},i="resolve",c={unversionedId:"n3/Advances/neons/api/resolve",id:"n3/Advances/neons/api/resolve",isDocsHomePage:!1,title:"resolve",description:"Resolves the record of a second-level domain with the specific type. The maximum resolving depth is 2.",source:"@site/docs/n3/Advances/neons/api/resolve.md",sourceDirName:"n3/Advances/neons/api",slug:"/n3/Advances/neons/api/resolve",permalink:"/website/docs/n3/Advances/neons/api/resolve",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/Advances/neons/api/resolve.md",tags:[],version:"current",lastUpdatedBy:"Celia18305",frontMatter:{},sidebar:"docs",previous:{title:"renew",permalink:"/website/docs/n3/Advances/neons/api/renew"},next:{title:"roots",permalink:"/website/docs/n3/Advances/neons/api/roots"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resolve"},"resolve"),(0,o.kt)("p",null,"Resolves the record of a second-level domain with the specific type. The maximum resolving depth is 2. "),(0,o.kt)("p",null,'For example, when you resolve a domain "test.neo" with the IPV4 type:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if the domain has a IPV4 record, then the record is returned directly "),(0,o.kt)("li",{parentName:"ul"},'if the domain has a canonical name record "alias.neo", which involves a IPV4 record, then the IPV4 record is returned. ')),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},'The second-level domain, e.g. "test.neo"'),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer"),(0,o.kt)("td",{parentName:"tr",align:null},"Available types are:",(0,o.kt)("br",null),"1 - IPV4 address record",(0,o.kt)("br",null),"5 - Canonical name record",(0,o.kt)("br",null),"16 - Text record",(0,o.kt)("br",null),"28 - IPV6 address record"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Request body #1"),(0,o.kt)("p",null,'In this example, suppose "test1.neo" has no text record, but it has the cname record "test2.neo"; "test2.neo" has no text record, but it has the cname record "test3.neo"; "test3.neo" has a text record "test3". Then resolving "test1.neo" with the text record will return test3.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://seed1t4.neo.org:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "jsonrpc": "2.0",\n  "method": "invokefunction",\n  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "resolve",\n                         [\n                             {\n                                 "type":"String","value":"test1.neo"\n                             },\n                             {\n                                 "type":"Integer","value":"16"\n                             }\n                         ]\n],\n  "id": 1\n}\n\'\n')),(0,o.kt)("p",null,"Response body #1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "IAwJdGVzdDEubmVvEsAfDAdyZXNvbHZlDBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",\n        "state": "HALT",\n        "gasconsumed": "4410468",\n        "exception": null,\n        "stack": [\n            {\n                "type": "ByteString",\n                "value": "dGVzdDM="\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"Request body #2"),(0,o.kt)("p",null,"In this example, the depth is greater than 2 and no record is found."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://seed1t4.neo.org:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "jsonrpc": "2.0",\n  "method": "invokefunction",\n  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "resolve",\n                         [\n                             {\n                                 "type":"String","value":"test1.neo"\n                             },\n                             {\n                                 "type":"Integer","value":"16"\n                             }\n                         ]\n],\n  "id": 1\n}\n\'\n')),(0,o.kt)("p",null,"Response body #2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "IAwJdGVzdDEubmVvEsAfDAdyZXNvbHZlDBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",\n        "state": "FAULT",\n        "gasconsumed": "4512384",\n        "exception": "An unhandled exception was thrown. Too many redirections.",\n        "stack": []\n    }\n}\n')))}u.isMDXComponent=!0}}]);