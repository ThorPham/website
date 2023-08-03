"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[4103],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90580:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={},c="setPrice",s={unversionedId:"n3/Advances/neons/api/setPrice",id:"n3/Advances/neons/api/setPrice",isDocsHomePage:!1,title:"setPrice",description:"Sets the registration price for each second-level domain length (for Neo Committee only).",source:"@site/docs/n3/Advances/neons/api/setPrice.md",sourceDirName:"n3/Advances/neons/api",slug:"/n3/Advances/neons/api/setPrice",permalink:"/website/docs/n3/Advances/neons/api/setPrice",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/Advances/neons/api/setPrice.md",tags:[],version:"current",lastUpdatedBy:"Celia18305",frontMatter:{},sidebar:"docs",previous:{title:"setAdmin",permalink:"/website/docs/n3/Advances/neons/api/setAdmin"},next:{title:"setRecord",permalink:"/website/docs/n3/Advances/neons/api/setRecord"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setprice"},"setPrice"),(0,o.kt)("p",null,"Sets the registration price for each second-level domain length (for Neo Committee only). "),(0,o.kt)("p",null,"The committee multi-signature address is required to generate a new transaction. "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"priceList"),(0,o.kt)("td",{parentName:"tr",align:null},"Long Array"),(0,o.kt)("td",{parentName:"tr",align:null},"The price list for each domain length"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"The first value of the array stands for the default price. "),(0,o.kt)("li",{parentName:"ul"},"The price should not be greater than 10000 GAS. ")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"In this example, the price for each domain length is set as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 or 2-length domains: unavailable"),(0,o.kt)("li",{parentName:"ul"},"3-length domains: 200 GAS"),(0,o.kt)("li",{parentName:"ul"},"4-length domains: 60 GAS"),(0,o.kt)("li",{parentName:"ul"},"5+ length domains: 8 GAS")),(0,o.kt)("p",null,'Therefore, the domain name "alice.neo" costs 8 GAS, "test.neo" costs 60 GAS, and "pay.neo" costs 200GAS.'),(0,o.kt)("p",null,"Request body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://seed1t4.neo.org:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n    "jsonrpc": "2.0",\n    "method": "invokefunction",\n    "params": [\n        "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a",\n        "setPrice",\n        [\n            {\n                "type": "Array",\n                "value": [\n                    {\n                        "type": "Integer",\n                        "value": "800000000"\n                    },\n                    {\n                        "type": "Integer",\n                        "value": "-1"\n                    },\n                    {\n                        "type": "Integer",\n                        "value": "-1"\n                    },\n                    {\n                        "type": "Integer",\n                        "value": "20000000000"\n                    },\n                    {\n                        "type": "Integer",\n                        "value": "6000000000"\n                    }\n                ]\n            }\n        ],\n        [\n            {\n                "account": "NbbBtdAbiCdvCaAhdT5dCgrZsAn1ZaUdot",\n                "scopes": "Global"\n            }\n        ]\n    ],\n    "id": 1\n}\'\n')),(0,o.kt)("p",null,"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "AwC8oGUBAAAAAwDIF6gEAAAADw8CAAivLxXAEcAfDAhzZXRQcmljZQwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",\n        "state": "HALT",\n        "gasconsumed": "418093",\n        "exception": null,\n        "stack": [\n            {\n                "type": "Any"\n            }\n        ]\n    }\n}\n')))}u.isMDXComponent=!0}}]);