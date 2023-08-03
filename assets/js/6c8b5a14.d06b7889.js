"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[6603],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(g,o(o({ref:n},i),{},{components:t})):r.createElement(g,o({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52890:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return d}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],c={},p="getAllRecords",s={unversionedId:"n3/Advances/neons/api/getAllRecords",id:"n3/Advances/neons/api/getAllRecords",isDocsHomePage:!1,title:"getAllRecords",description:"Gets all records of the second-level domain and its subdomains.",source:"@site/docs/n3/Advances/neons/api/getAllRecords.md",sourceDirName:"n3/Advances/neons/api",slug:"/n3/Advances/neons/api/getAllRecords",permalink:"/website/docs/n3/Advances/neons/api/getAllRecords",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/Advances/neons/api/getAllRecords.md",tags:[],version:"current",lastUpdatedBy:"Celia18305",frontMatter:{},sidebar:"docs",previous:{title:"deleteRecord",permalink:"/website/docs/n3/Advances/neons/api/deleteRecord"},next:{title:"getPrice",permalink:"/website/docs/n3/Advances/neons/api/getPrice"}},i=[{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],u={toc:i};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getallrecords"},"getAllRecords"),(0,l.kt)("p",null,"Gets all records of the second-level domain and its subdomains. "),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'The second-level domain name, e.g. "test.neo"'),(0,l.kt)("td",{parentName:"tr",align:null},"Required")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Request body #1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://seed1t4.neo.org:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "jsonrpc": "2.0",\n  "method": "invokefunction",\n  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getAllRecords",\n                         [\n                             {\n                                 "type":"String","value":"flamincome.neo"\n                             }\n                         ],\n    []\n],\n  "id": 1\n}\n\'\n')),(0,l.kt)("p",null,"Response body #1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "DA5mbGFtaW5jb21lLm5lbxHAHwwNZ2V0QWxsUmVjb3JkcwwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",\n        "state": "HALT",\n        "gasconsumed": "725394",\n        "exception": null,\n        "stack": [\n            {\n                "type": "InteropInterface",\n                "iterator": [\n                    {\n                        "type": "Array",\n                        "value": [\n                            {\n                                "type": "ByteString",\n                                "value": "c3ViMS5mbGFtaW5jb21lLm5lbw=="\n                            },\n                            {\n                                "type": "Integer",\n                                "value": "1"\n                            },\n                            {\n                                "type": "ByteString",\n                                "value": "MTY1LjIzLjM0LjU0"\n                            }\n                        ]\n                    },\n                    {\n                        "type": "Array",\n                        "value": [\n                            {\n                                "type": "ByteString",\n                                "value": "ZmxhbWluY29tZS5uZW8="\n                            },\n                            {\n                                "type": "Integer",\n                                "value": "5"\n                            },\n                            {\n                                "type": "ByteString",\n                                "value": "YWxpYXMubmVv"\n                            }\n                        ]\n                    },\n                    {\n                        "type": "Array",\n                        "value": [\n                            {\n                                "type": "ByteString",\n                                "value": "ZmxhbWluY29tZS5uZW8="\n                            },\n                            {\n                                "type": "Integer",\n                                "value": "16"\n                            },\n                            {\n                                "type": "ByteString",\n                                "value": "TlpIZjFOSnZ6MXR2RUxHTFdaamhwYjNOcVpKRkZVWXB4VA=="\n                            }\n                        ]\n                    },\n                    {\n                        "type": "Array",\n                        "value": [\n                            {\n                                "type": "ByteString",\n                                "value": "ZmxhbWluY29tZS5uZW8="\n                            },\n                            {\n                                "type": "Integer",\n                                "value": "28"\n                            },\n                            {\n                                "type": "ByteString",\n                                "value": "MjAwMToxZGI4OjA6Og=="\n                            }\n                        ]\n                    }\n                ],\n                "truncated": false\n            }\n        ]\n    }\n}\n')),(0,l.kt)("p",null,"Request body #2"),(0,l.kt)("p",null,"Gets all records of the expired domain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://seed1t4.neo.org:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "jsonrpc": "2.0",\n  "method": "invokefunction",\n  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getAllRecords",\n                         [\n                             {\n                                 "type":"String","value":"expired.neo"\n                             }\n                         ],\n    []\n],\n  "id": 1\n}\n\'\n')),(0,l.kt)("p",null,"Response body #2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "DAtleHBpcmVkLm5lbxHAHwwNZ2V0QWxsUmVjb3JkcwwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",\n        "state": "FAULT",\n        "gasconsumed": "622077",\n        "exception": "An unhandled exception was thrown. The name has expired.",\n        "stack": []\n    }\n}\n')))}d.isMDXComponent=!0}}]);