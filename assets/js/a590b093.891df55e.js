"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[5763],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return d}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),i=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},l=function(n){var e=i(n.components);return a.createElement(p.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,p=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),f=i(t),d=r,u=f["".concat(p,".").concat(d)]||f[d]||m[d]||o;return t?a.createElement(u,c(c({ref:e},l),{},{components:t})):a.createElement(u,c({ref:e},l))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,c=new Array(o);c[0]=f;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:r,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29078:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return f}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),c=["components"],s={},p="getcontractstate Method",i={unversionedId:"n3/reference/rpc/latest-version/api/getcontractstate",id:"n3/reference/rpc/latest-version/api/getcontractstate",isDocsHomePage:!1,title:"getcontractstate Method",description:"Queries the contract information with the contract script hash or native contract name.",source:"@site/docs/n3/reference/rpc/latest-version/api/getcontractstate.md",sourceDirName:"n3/reference/rpc/latest-version/api",slug:"/n3/reference/rpc/latest-version/api/getcontractstate",permalink:"/website/docs/n3/reference/rpc/latest-version/api/getcontractstate",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/rpc/latest-version/api/getcontractstate.md",tags:[],version:"current",lastUpdatedBy:"Apisit Toompkadee",frontMatter:{},sidebar:"docs",previous:{title:"getconnectioncount Method",permalink:"/website/docs/n3/reference/rpc/latest-version/api/getconnectioncount"},next:{title:"getnativecontracts Method",permalink:"/website/docs/n3/reference/rpc/latest-version/api/getnativecontracts"}},l=[{value:"Parameter Description",id:"parameter-description",children:[]},{value:"Example",id:"example",children:[]}],m={toc:l};function f(n){var e=n.components,t=(0,r.Z)(n,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getcontractstate-method"},"getcontractstate Method"),(0,o.kt)("p",null,"Queries the contract information with the contract script hash or native contract name. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," You must install the plugin ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neo-project/neo-modules/releases"},"RpcServer")," before you can invoke the method."))),(0,o.kt)("h2",{id:"parameter-description"},"Parameter Description"),(0,o.kt)("p",null,"script_hash / name: Contract script hash or the native contract name."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Request body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "getcontractstate",\n  "params": ["neotoken"],\n  "id": 1\n}\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "getcontractstate",\n  "params": ["0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"],\n  "id": 1\n}\n')),(0,o.kt)("p",null,"Response body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "id": 383,\n        "updatecounter": 0,\n        "hash": "0xe7f2e74b3498d3a0d80bcbd5925bca32e4acc4f7",\n        "nef": {\n            "magic": 860243278,\n            "compiler": "Neo.Compiler.CSharp 3.1.0",\n            "source": "https://github.com/neo-project/neo",\n            "tokens": [\n                {\n                    "hash": "0xfffdc93764dbaddd97c48f252a53ea4643faa3fd",\n                    "method": "update",\n                    "paramcount": 3,\n                    "hasreturnvalue": false,\n                    "callflags": "All"\n                },\n                {\n                    "hash": "0xfffdc93764dbaddd97c48f252a53ea4643faa3fd",\n                    "method": "destroy",\n                    "paramcount": 0,\n                    "hasreturnvalue": false,\n                    "callflags": "All"\n                },\n                {\n                    "hash": "0xfe924b7cfe89ddd271abaf7210a80a7e11178758",\n                    "method": "request",\n                    "paramcount": 5,\n                    "hasreturnvalue": false,\n                    "callflags": "All"\n                },\n                {\n                    "hash": "0xacce6fd80d44e1796aa0c2c625e9e4e0ce39efc0",\n                    "method": "itoa",\n                    "paramcount": 1,\n                    "hasreturnvalue": true,\n                    "callflags": "All"\n                },\n                {\n                    "hash": "0xacce6fd80d44e1796aa0c2c625e9e4e0ce39efc0",\n                    "method": "jsonDeserialize",\n                    "paramcount": 1,\n                    "hasreturnvalue": true,\n                    "callflags": "All"\n                },\n                {\n                    "hash": "0xfffdc93764dbaddd97c48f252a53ea4643faa3fd",\n                    "method": "getContract",\n                    "paramcount": 1,\n                    "hasreturnvalue": true,\n                    "callflags": "All"\n                },\n                {\n                    "hash": "0xda65b600f7124ce6c79950c1772a36403104f2be",\n                    "method": "getTransaction",\n                    "paramcount": 1,\n                    "hasreturnvalue": true,\n                    "callflags": "All"\n                },\n                {\n                    "hash": "0xda65b600f7124ce6c79950c1772a36403104f2be",\n                    "method": "getTransactionState",\n                    "paramcount": 1,\n                    "hasreturnvalue": true,\n                    "callflags": "All"\n                }\n            ],\n            "script": "WEH4J+yMQEH4J+yMQDTzQFkMBmVuYWJsZUsRzlCLUBDOQZJd6DFK2CYERRDbIRGzQErYJgRFENshQEsRzlCLUBDOQZJd6DFANLiqJhYMEU5vIGF1dGhvcml6YXRpb24uOlkMBmVuYWJsZRESTRHOUYtREM5B5j8YhEASTRHOUYtREM5B5j8YhEA1d////6omFgwRTm8gYXV0aG9yaXphdGlvbi46WQwGZW5hYmxlEBJNEc5Ri1EQzkHmPxiEQFcAAzVP////JgYiKyIpDCRQYXltZW50IGlzIGRpc2FibGUgb24gdGhpcyBjb250cmFjdCE6QFcBAzUJ////qiYWDBFObyBhdXRob3JpemF0aW9uLjoLenlB2/6odBTAcGgfDAh0cmFuc2ZlcnhBYn1bUkXCSnjPSnnPSnrPDAtVbmxvY2tFdmVudEGVAW9hEdsgIgJAQdv+qHRAQWJ9W1JAVwIAEMBwaB8MCGlzUGF1c2VkWtsoStgkCUrKABQoAzpBYn1bUnHCSmnPDA1Jc1BhdXNlZEV2ZW50QZUBb2FpIgJA2yhK2CQJSsoAFCgDOkBXAAJ5JgQiGgwFV29ybGQMBUhlbGxvQZv2Z85B5j8YhEBB5j8YhEBBm/ZnzkBXAAI1If7//6omFgwRTm8gYXV0aG9yaXphdGlvbi46C3l4NwAAQDcAAEA1+v3//6omFgwRTm8gYXV0aG9yaXphdGlvbi46NwEAQDcBAEBXAgMMCGNhbGxiYWNrcAwIdXNlcmRhdGFxemloeHk3AgBANwIAQFcDBEE5U248DBRYhxcRfgqoEHKvq3HS3Yn+fEuS/pgmEgwNVW5hdXRob3JpemVkITp6EJgmLgwiT3JhY2xlIHJlc3BvbnNlIGZhaWx1cmUgd2l0aCBjb2RlIHo3AwCL2yg6ezcEAHBocWkQznIMCnVzZXJkYXRhOiB5i9soQc/nR5YMEHJlc3BvbnNlIHZhbHVlOiBqi9soQc/nR5ZAQTlTbjxADBRYhxcRfgqoEHKvq3HS3Yn+fEuS/kA3BABAQc/nR5ZAVwACeXhBm/ZnzkHmPxiEQFcBABFwIhtZaDcDAGgSTRHOUYtREM5B5j8YhGhKnHBFaAHoA7Uk4kBXAQBB2/6odDcFAHBoFM4VziICQDcFAEBXAQBB2/6odDcFAHBoFM4TziICQFcCAEEtUQgwcGgQznHCSmk3BgDPDBBUcmFuc2FjdGlvblN0YXRlQZUBb2FpNwcAIgJAQS1RCDBANwYAQDcHAEBWAwwUwJjkrPCyCQ3Rbss9WN5CaocVhRtgDBRC5UOC6G3Nygng2ou2fi+sTUmHRGIMBWFzc2V0QZv2Z84SwGFAEsBA",\n            "checksum": 1593448136\n        },\n        "manifest": {\n            "name": "TestNetFee",\n            "groups": [],\n            "features": {},\n            "supportedstandards": [\n                "NEP-17"\n            ],\n            "abi": {\n                "methods": [\n                    {\n                        "name": "verify",\n                        "parameters": [],\n                        "returntype": "Boolean",\n                        "offset": 13,\n                        "safe": false\n                    },\n                    {\n                        "name": "getPaymentStatus",\n                        "parameters": [],\n                        "returntype": "Boolean",\n                        "offset": 16,\n                        "safe": false\n                    },\n                    {\n                        "name": "enablePayment",\n                        "parameters": [],\n                        "returntype": "Void",\n                        "offset": 72,\n                        "safe": false\n                    },\n                    {\n                        "name": "disablePayment",\n                        "parameters": [],\n                        "returntype": "Void",\n                        "offset": 137,\n                        "safe": false\n                    },\n                    {\n                        "name": "onNEP17Payment",\n                        "parameters": [\n                            {\n                                "name": "from",\n                                "type": "Hash160"\n                            },\n                            {\n                                "name": "amount",\n                                "type": "Integer"\n                            },\n                            {\n                                "name": "data",\n                                "type": "Any"\n                            }\n                        ],\n                        "returntype": "Void",\n                        "offset": 190,\n                        "safe": false\n                    },\n                    {\n                        "name": "unlock",\n                        "parameters": [\n                            {\n                                "name": "toAssetHash",\n                                "type": "Hash160"\n                            },\n                            {\n                                "name": "toAddress",\n                                "type": "Hash160"\n                            },\n                            {\n                                "name": "amount",\n                                "type": "Integer"\n                            }\n                        ],\n                        "returntype": "Boolean",\n                        "offset": 244,\n                        "safe": false\n                    },\n                    {\n                        "name": "isPaused",\n                        "parameters": [],\n                        "returntype": "Boolean",\n                        "offset": 351,\n                        "safe": false\n                    },\n                    {\n                        "name": "_deploy",\n                        "parameters": [\n                            {\n                                "name": "data",\n                                "type": "Any"\n                            },\n                            {\n                                "name": "update",\n                                "type": "Boolean"\n                            }\n                        ],\n                        "returntype": "Void",\n                        "offset": 431,\n                        "safe": false\n                    },\n                    {\n                        "name": "update",\n                        "parameters": [\n                            {\n                                "name": "nefFile",\n                                "type": "ByteArray"\n                            },\n                            {\n                                "name": "manifest",\n                                "type": "String"\n                            }\n                        ],\n                        "returntype": "Void",\n                        "offset": 476,\n                        "safe": false\n                    },\n                    {\n                        "name": "destroy",\n                        "parameters": [],\n                        "returntype": "Void",\n                        "offset": 518,\n                        "safe": false\n                    },\n                    {\n                        "name": "doRequest",\n                        "parameters": [\n                            {\n                                "name": "filter",\n                                "type": "String"\n                            },\n                            {\n                                "name": "url",\n                                "type": "String"\n                            },\n                            {\n                                "name": "gasForResponse",\n                                "type": "Integer"\n                            }\n                        ],\n                        "returntype": "Void",\n                        "offset": 554,\n                        "safe": false\n                    },\n                    {\n                        "name": "callback",\n                        "parameters": [\n                            {\n                                "name": "url",\n                                "type": "String"\n                            },\n                            {\n                                "name": "userdata",\n                                "type": "String"\n                            },\n                            {\n                                "name": "code",\n                                "type": "Integer"\n                            },\n                            {\n                                "name": "result",\n                                "type": "String"\n                            }\n                        ],\n                        "returntype": "Void",\n                        "offset": 592,\n                        "safe": false\n                    },\n                    {\n                        "name": "put",\n                        "parameters": [\n                            {\n                                "name": "key",\n                                "type": "String"\n                            },\n                            {\n                                "name": "value",\n                                "type": "String"\n                            }\n                        ],\n                        "returntype": "Void",\n                        "offset": 789,\n                        "safe": false\n                    },\n                    {\n                        "name": "putMulti",\n                        "parameters": [],\n                        "returntype": "Void",\n                        "offset": 805,\n                        "safe": false\n                    },\n                    {\n                        "name": "testPermission",\n                        "parameters": [],\n                        "returntype": "Any",\n                        "offset": 845,\n                        "safe": false\n                    },\n                    {\n                        "name": "testSupportedStandards",\n                        "parameters": [],\n                        "returntype": "Any",\n                        "offset": 869,\n                        "safe": false\n                    },\n                    {\n                        "name": "getState",\n                        "parameters": [],\n                        "returntype": "Any",\n                        "offset": 889,\n                        "safe": false\n                    },\n                    {\n                        "name": "_initialize",\n                        "parameters": [],\n                        "returntype": "Void",\n                        "offset": 953,\n                        "safe": false\n                    }\n                ],\n                "events": [\n                    {\n                        "name": "UnlockEvent",\n                        "parameters": [\n                            {\n                                "name": "arg1",\n                                "type": "Hash160"\n                            },\n                            {\n                                "name": "arg2",\n                                "type": "Hash160"\n                            },\n                            {\n                                "name": "arg3",\n                                "type": "Integer"\n                            }\n                        ]\n                    },\n                    {\n                        "name": "IsPausedEvent",\n                        "parameters": [\n                            {\n                                "name": "obj",\n                                "type": "Any"\n                            }\n                        ]\n                    },\n                    {\n                        "name": "TransactionState",\n                        "parameters": [\n                            {\n                                "name": "obj",\n                                "type": "Any"\n                            }\n                        ]\n                    }\n                ]\n            },\n            "permissions": [\n                {\n                    "contract": "0x42e54382e86dcdca09e0da8bb67e2fac4d498744",\n                    "methods": [\n                        "test"\n                    ]\n                },\n                {\n                    "contract": "0xacce6fd80d44e1796aa0c2c625e9e4e0ce39efc0",\n                    "methods": [\n                        "itoa",\n                        "jsonDeserialize"\n                    ]\n                },\n                {\n                    "contract": "0xda65b600f7124ce6c79950c1772a36403104f2be",\n                    "methods": [\n                        "getTransaction",\n                        "getTransactionState"\n                    ]\n                },\n                {\n                    "contract": "0xfe924b7cfe89ddd271abaf7210a80a7e11178758",\n                    "methods": [\n                        "request"\n                    ]\n                },\n                {\n                    "contract": "0xfffdc93764dbaddd97c48f252a53ea4643faa3fd",\n                    "methods": [\n                        "destroy",\n                        "getContract",\n                        "update"\n                    ]\n                }\n            ],\n            "trusts": [],\n            "extra": {\n                "Author": "Neo",\n                "Email": "dev@neo.org",\n                "Description": "This is a contract example"\n            }\n        }\n    }\n}\n')))}f.isMDXComponent=!0}}]);