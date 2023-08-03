"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[6167],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35488:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={},p="ownerOf",s={unversionedId:"n3/Advances/neons/api/ownerOf",id:"n3/Advances/neons/api/ownerOf",isDocsHomePage:!1,title:"ownerOf",description:"Gets the domain owner. If the domain has expired, an error message is returned instead of the owner.",source:"@site/docs/n3/Advances/neons/api/ownerOf.md",sourceDirName:"n3/Advances/neons/api",slug:"/n3/Advances/neons/api/ownerOf",permalink:"/website/docs/n3/Advances/neons/api/ownerOf",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/Advances/neons/api/ownerOf.md",tags:[],version:"current",lastUpdatedBy:"Celia18305",frontMatter:{},sidebar:"docs",previous:{title:"isAvailable",permalink:"/website/docs/n3/Advances/neons/api/isAvailable"},next:{title:"properties",permalink:"/website/docs/n3/Advances/neons/api/properties"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ownerof"},"ownerOf"),(0,o.kt)("p",null,"Gets the domain owner. If the domain has expired, an error message is returned instead of the owner."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"domain name"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},'A domain name, e.g. "edge.neo"'),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Request body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'curl --request POST \\\n  --url http://seed1t4.neo.org:20332/ \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "jsonrpc": "2.0",\n  "method": "invokefunction",\n  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "ownerOf",\n                         [\n                             {\n                                 "type":"ByteArray","value":"ZWRnZS5uZW8="\n                             }\n                         ],\n    [\n      {\n        "account": "NMzaUBM56iumJ8pHfjjCuKsAepKxENkUqN",\n        "scopes": "CalledByEntry"\n      }\n    ]\n],\n  "id": 1\n}\n\'\n')),(0,o.kt)("p",null,"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "script": "DAhlZGdlLm5lbxHAHwwHb3duZXJPZgwUGonUjYn4waZtPT0O9IMs686pLxVBYn1bUg==",\n        "state": "HALT",\n        "gasconsumed": "589170",\n        "exception": null,\n        "stack": [\n            {\n                "type": "ByteString",\n                "value": "3f9BbV5KcZwWd8ismxMpFmvXJ+g="\n            }\n        ]\n    }\n}\n')))}d.isMDXComponent=!0}}]);