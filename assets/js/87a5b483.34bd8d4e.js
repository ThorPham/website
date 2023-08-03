"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[4056],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(p,".").concat(m)]||u[m]||i[m]||o;return t?r.createElement(g,l(l({ref:n},d),{},{components:t})):r.createElement(g,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4285:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],c={},p="getRecord",s={unversionedId:"n3/Advances/neons/api/getRecord",id:"n3/Advances/neons/api/getRecord",isDocsHomePage:!1,title:"getRecord",description:"Gets the record of a second-level domain or its subdomains with the specific type.",source:"@site/docs/n3/Advances/neons/api/getRecord.md",sourceDirName:"n3/Advances/neons/api",slug:"/n3/Advances/neons/api/getRecord",permalink:"/website/docs/n3/Advances/neons/api/getRecord",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/Advances/neons/api/getRecord.md",tags:[],version:"current",lastUpdatedBy:"Celia18305",frontMatter:{},sidebar:"docs",previous:{title:"getPrice",permalink:"/website/docs/n3/Advances/neons/api/getPrice"},next:{title:"isAvailable",permalink:"/website/docs/n3/Advances/neons/api/isAvailable"}},d=[{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],i={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getrecord"},"getRecord"),(0,o.kt)("p",null,"Gets the record of a second-level domain or its subdomains with the specific type. "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},'The second-level domain name, e.g. "test.neo", or the subdomain "pay.test.neo"'),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"Byte"),(0,o.kt)("td",{parentName:"tr",align:null},"Available types are:",(0,o.kt)("br",null),"1 - IPV4 address record",(0,o.kt)("br",null),"5 - Canonical name record",(0,o.kt)("br",null),"16 - Text record",(0,o.kt)("br",null),"28 - IPV6 address record"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("h5",{id:"example-1-get-the-ipv4-address-record"},"Example #1 Get the IPV4 address record"),(0,o.kt)("p",null,"Request body #1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://seed1t4.neo.org:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "jsonrpc": "2.0",\n  "method": "invokefunction",\n  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getRecord",\n                         [\n                             {\n                                 "type":"String","value":"sub1.flamincome.neo"\n                             },{"type":"Integer","value":"1"}\n                         ],\n    [\n      {\n        "account": "NV1butKWMZSpWhBGU7PyP5Qe81Wq3zDkHP",\n        "scopes": "CalledByEntry"\n      }\n    ]\n],\n  "id": 1\n}\n\'\n')),(0,o.kt)("p",null,"Response body #1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "EQwTc3ViMS5mbGFtaW5jb21lLm5lbxLAHwwJZ2V0UmVjb3JkDBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",\n        "state": "HALT",\n        "gasconsumed": "1756494",\n        "exception": null,\n        "stack": [\n            {\n                "type": "ByteString",\n                "value": "MTY1LjIzLjM0LjU0"\n            }\n        ]\n    }\n}\n')),(0,o.kt)("h5",{id:"example-2-get-the-canonical-name-record"},"Example #2 Get the Canonical name record"),(0,o.kt)("p",null,"Request body #2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://seed1t4.neo.org:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "jsonrpc": "2.0",\n  "method": "invokefunction",\n  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getRecord",\n                         [\n                             {\n                                 "type":"String","value":"flamincome.neo"\n                             },{"type":"Integer","value":"5"}\n                         ],\n    [\n      {\n        "account": "NV1butKWMZSpWhBGU7PyP5Qe81Wq3zDkHP",\n        "scopes": "CalledByEntry"\n      }\n    ]\n],\n  "id": 1\n}\n\'\n')),(0,o.kt)("p",null,"Response body #2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "FQwOZmxhbWluY29tZS5uZW8SwB8MCWdldFJlY29yZAwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",\n        "state": "HALT",\n        "gasconsumed": "1654128",\n        "exception": null,\n        "stack": [\n            {\n                "type": "ByteString",\n                "value": "YWxpYXMubmVv"\n            }\n        ]\n    }\n}\n')),(0,o.kt)("h5",{id:"example-3-get-the-text-record"},"Example #3 Get the Text record"),(0,o.kt)("p",null,"Request body #3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://seed1t4.neo.org:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "jsonrpc": "2.0",\n  "method": "invokefunction",\n  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getRecord",\n                         [\n                             {\n                                 "type":"String","value":"flamincome.neo"\n                             },{"type":"Integer","value":"16"}\n                         ],\n    [\n      {\n        "account": "NV1butKWMZSpWhBGU7PyP5Qe81Wq3zDkHP",\n        "scopes": "CalledByEntry"\n      }\n    ]\n],\n  "id": 1\n}\n\'\n')),(0,o.kt)("p",null,"Response body #3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "IAwOZmxhbWluY29tZS5uZW8SwB8MCWdldFJlY29yZAwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",\n        "state": "HALT",\n        "gasconsumed": "1654128",\n        "exception": null,\n        "stack": [\n            {\n                "type": "ByteString",\n                "value": "TlFKS1NOZFRnTlgzd25vOVFQWXB3TmhmVVRnNERuRXM2UA=="\n            }\n        ]\n    }\n}\n')),(0,o.kt)("h5",{id:"example-4-get-the-ipv6-record"},"Example #4 Get the IPV6 record"),(0,o.kt)("p",null,"Request body #4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://seed1t4.neo.org:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "jsonrpc": "2.0",\n  "method": "invokefunction",\n  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getRecord",\n                         [\n                             {\n                                 "type":"String","value":"flamincome.neo"\n                             },{"type":"Integer","value":"28"}\n                         ],\n    [\n      {\n        "account": "NV1butKWMZSpWhBGU7PyP5Qe81Wq3zDkHP",\n        "scopes": "CalledByEntry"\n      }\n    ]\n],\n  "id": 1\n}\n\'\n')),(0,o.kt)("p",null,"Response body #4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "ABwMDmZsYW1pbmNvbWUubmVvEsAfDAlnZXRSZWNvcmQMFLbLwLkAmZsTjKCyoF2KU3a3VYNTQWJ9W1I=",\n        "state": "HALT",\n        "gasconsumed": "1654128",\n        "exception": null,\n        "stack": [\n            {\n                "type": "ByteString",\n                "value": "MjAwMToxZGI4OjA6Og=="\n            }\n        ]\n    }\n}\n')),(0,o.kt)("h5",{id:"example-5-get-the-record-of-expired-domains"},"Example #5 Get the record of expired domains"),(0,o.kt)("p",null,"Request body #5 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://localhost:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "jsonrpc": "2.0",\n  "method": "invokefunction",\n  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getRecord",\n                         [\n                             {\n                                 "type":"String","value":"expired.neo"\n                             },{"type":"Integer","value":"16"}\n                         ],\n    [\n      {\n        "account": "NV1butKWMZSpWhBGU7PyP5Qe81Wq3zDkHP",\n        "scopes": "CalledByEntry"\n      }\n    ]\n],\n  "id": 1\n}\n\'\n')),(0,o.kt)("p",null,"Response body #5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "IAwLZXhwaXJlZC5uZW8SwB8MCWdldFJlY29yZAwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",\n        "state": "FAULT",\n        "gasconsumed": "1083138",\n        "exception": "An unhandled exception was thrown. The name has expired.",\n        "stack": []\n    }\n}\n')))}u.isMDXComponent=!0}}]);