"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[2086],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return l}});var a=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=a.createContext({}),f=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=f(e.components);return a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=f(n),l=c,m=s["".concat(i,".").concat(l)]||s[l]||b[l]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function l(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,o=new Array(r);o[0]=s;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:c,o[1]=d;for(var f=2;f<r;f++)o[f]=n[f];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14602:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return f},toc:function(){return p},default:function(){return s}});var a=n(87462),c=n(63366),r=(n(67294),n(3905)),o=["components"],d={},i="getcommittee Method",f={unversionedId:"n3/reference/rpc/latest-version/api/getcommittee",id:"n3/reference/rpc/latest-version/api/getcommittee",isDocsHomePage:!1,title:"getcommittee Method",description:"Gets the public key list of current Neo committee members.",source:"@site/docs/n3/reference/rpc/latest-version/api/getcommittee.md",sourceDirName:"n3/reference/rpc/latest-version/api",slug:"/n3/reference/rpc/latest-version/api/getcommittee",permalink:"/website/docs/n3/reference/rpc/latest-version/api/getcommittee",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/rpc/latest-version/api/getcommittee.md",tags:[],version:"current",lastUpdatedBy:"Apisit Toompkadee",frontMatter:{},sidebar:"docs",previous:{title:"getblockheader Method",permalink:"/website/docs/n3/reference/rpc/latest-version/api/getblockheader"},next:{title:"getconnectioncount Method",permalink:"/website/docs/n3/reference/rpc/latest-version/api/getconnectioncount"}},p=[{value:"Example",id:"example",children:[]}],b={toc:p};function s(e){var t=e.components,n=(0,c.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getcommittee-method"},"getcommittee Method"),(0,r.kt)("p",null,"Gets the public key list of current Neo committee members."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"}," Before you can invoke this method you must install the plugin ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neo-project/neo-modules/releases"},"RpcServer"),"."))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Request body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "getcommittee",\n  "params": [],\n  "id": 1\n}\n')),(0,r.kt)("p",null,"Response body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": [\n        "020f2887f41474cfeb11fd262e982051c1541418137c02a0f4961af911045de639",\n        "03204223f8c86b8cd5c89ef12e4f0dbb314172e9241e30c9ef2293790793537cf0",\n        "0222038884bbd1d8ff109ed3bdef3542e768eef76c1247aea8bc8171f532928c30",\n        "0226933336f1b75baa42d42b71d9091508b638046d19abd67f4e119bf64a7cfb4d",\n        "023a36c72844610b4d34d1968662424011bf783ca9d984efa19a20babf5582f3fe",\n        "03409f31f0d66bdc2f70a9730b66fe186658f84a8018204db01c106edc36553cd0",\n        "02486fd15702c4490a26703112a5cc1d0923fd697a33406bd5a1c00e0013b09a70",\n        "024c7b7fb6c310fccf1ba33b082519d82964ea93868d676662d4a59ad548df0e7d",\n        "02504acbc1f4b3bdad1d86d6e1a08603771db135a73e61c9d565ae06a1938cd2ad",\n        "03708b860c1de5d87f5b151a12c2a99feebd2e8b315ee8e7cf8aa19692a9e18379",\n        "0288342b141c30dc8ffcde0204929bb46aed5756b41ef4a56778d15ada8f0c6654",\n        "02a62c915cf19c7f19a50ec217e79fac2439bbaad658493de0c7d8ffa92ab0aa62",\n        "02aaec38470f6aad0042c6e877cfd8087d2676b0f516fddd362801b9bd3936399e",\n        "03b209fd4f53a7170ea4444e0cb0a6bb6a53c2bd016926989cf85f9b0fba17a70c",\n        "03b8d9d5771d8f513aa0869b9cc8d50986403b78c6da36890638c3d46a5adce04a",\n        "03c6aa6e12638b36e88adc1ccdceac4db9929575c3e03576c617c49cce7114a050",\n        "02ca0e27697b9c248f6f16e085fd0061e26f44da85b58ee835c110caa5ec3ba554",\n        "02cd5a5547119e24feaa7c2a0f37b8c9366216bab7054de0065c9be42084003c8a",\n        "03cdcea66032b82f5c30450e381e5295cae85c5e6943af716cc6b646352a6067dc",\n        "03d281b42002647f0113f36c7b8efb30db66078dfaaa9ab3ff76d043a98d512fde",\n        "02df48f60e8f3e01c48ff40b9b7f1310d7a8b2a193188befe1c2e3df740e895093"\n    ]\n}\n')))}s.isMDXComponent=!0}}]);