"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[5811],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85854:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],l={},i="transfer",c={unversionedId:"n3/Advances/neons/api/transfer",id:"n3/Advances/neons/api/transfer",isDocsHomePage:!1,title:"transfer",description:"Transfers a domain from the owner's address to another address. The signature of the owner is required. The expired domains cannot be transferred.",source:"@site/docs/n3/Advances/neons/api/transfer.md",sourceDirName:"n3/Advances/neons/api",slug:"/n3/Advances/neons/api/transfer",permalink:"/website/docs/n3/Advances/neons/api/transfer",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/Advances/neons/api/transfer.md",tags:[],version:"current",lastUpdatedBy:"Celia18305",frontMatter:{},sidebar:"docs",previous:{title:"tokensOf",permalink:"/website/docs/n3/Advances/neons/api/tokensOf"},next:{title:"NeoVM Instructions",permalink:"/website/docs/n3/Advances/Neo VM instructions"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transfer"},"transfer"),(0,o.kt)("p",null,"Transfers a domain from the owner's address to another address. The signature of the owner is required. The expired domains cannot be transferred. "),(0,o.kt)("p",null,"After transfered, all subdomains and records are reserved, and the admin is re-set as null. "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"to"),(0,o.kt)("td",{parentName:"tr",align:null},"Address"),(0,o.kt)("td",{parentName:"tr",align:null},"The target address to transfer to"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"domain"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"The domain to be transferred"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"data"),(0,o.kt)("td",{parentName:"tr",align:null},"objec"),(0,o.kt)("td",{parentName:"tr",align:null},"The data information used after transfer"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Request body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://seed1t4.neo.org:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "jsonrpc": "2.0",\n  "method": "invokefunction",\n  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "transfer",\n                         [ {"type":"Hash160","value":"0x713c5666c9710bf6933572cf134a2a8f518f1a30"},\n                             {\n                                 "type":"String","value":"t1.neo"\n                             },\n                            {"type":"String","value":"test"}\n                         ],\n    [\n      {\n        "account": "NQJKSNdTgNX3wno9QPYpwNhfUTg4DnEs6P",\n        "scopes": "CalledByEntry"\n      }\n    ]\n],\n  "id": 1\n}\n\'\n')),(0,o.kt)("p",null,"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "DAR0ZXN0DAZ0MS5uZW8MFDAaj1GPKkoTz3I1k/YLcclmVjxxE8AfDAh0cmFuc2ZlcgwUGonUjYn4waZtPT0O9IMs686pLxVBYn1bUg==",\n        "state": "HALT",\n        "gasconsumed": "1075683",\n        "exception": null,\n        "stack": [\n            {\n                "type": "Boolean",\n                "value": true\n            }\n        ]\n    }\n}\n')))}u.isMDXComponent=!0}}]);