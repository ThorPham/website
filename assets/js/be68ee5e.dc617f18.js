"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[9196],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27779:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),o=["components"],l={},i="Contract Class",s={unversionedId:"n3/reference/scapi/framework/services/Contract",id:"n3/reference/scapi/framework/services/Contract",isDocsHomePage:!1,title:"Contract Class",description:"The class representing a contract.",source:"@site/docs/n3/reference/scapi/framework/services/Contract.md",sourceDirName:"n3/reference/scapi/framework/services",slug:"/n3/reference/scapi/framework/services/Contract",permalink:"/website/docs/n3/reference/scapi/framework/services/Contract",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/services/Contract.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"CallFlags Enumerator",permalink:"/website/docs/n3/reference/scapi/framework/services/CallFlags"},next:{title:"Contract.Call Method",permalink:"/website/docs/n3/reference/scapi/framework/services/Contract/Call"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Constructor",id:"constructor",children:[]}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"contract-class"},"Contract Class"),(0,c.kt)("p",null,"The class representing a contract."),(0,c.kt)("p",null,"Namespace\uff1a",(0,c.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/services"},"Neo.SmartContract.Framework.Services")),(0,c.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,c.kt)("h2",{id:"syntax"},"Syntax"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cs"},"public class Contract\n")),(0,c.kt)("h2",{id:"attributes"},"Attributes"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Name"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Id"),(0,c.kt)("td",{parentName:"tr",align:null},"Contract Id. The native contract ID is a negative integer, and the normal contract ID is a positive integer.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"UpdateCounter"),(0,c.kt)("td",{parentName:"tr",align:null},"Contract update counter")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Hash"),(0,c.kt)("td",{parentName:"tr",align:null},"Contract hash, which is determined by the deployer's script hash, the contract NEF checkcode, and the contract name.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Nef"),(0,c.kt)("td",{parentName:"tr",align:null},"Nef")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Manifest"),(0,c.kt)("td",{parentName:"tr",align:null},"Json strings that represents the contract Manifest")))),(0,c.kt)("h2",{id:"methods"},"Methods"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Name"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/scapi/framework/services/Contract/Call"},"Call(UInt160 scriptHash, string method, object[] arguments)")),(0,c.kt)("td",{parentName:"tr",align:null},"Invokes the contract")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/scapi/framework/services/Contract/GetCallFlags"},"GetCallFlags()")),(0,c.kt)("td",{parentName:"tr",align:null},"Gets the CallFlag of the contract")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/scapi/framework/services/Contract/CreateStandardAccount"},"CreateStandardAccount()")),(0,c.kt)("td",{parentName:"tr",align:null},"Generate a script hash of standard account with public key")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"CreateMultisigAccount(int, params Cryptography.ECC.ECPoint[])"),(0,c.kt)("td",{parentName:"tr",align:null},"Generate a script hash of multi-signature accounts based on the public key list and minimum number of signatures")))),(0,c.kt)("h2",{id:"constructor"},"Constructor"),(0,c.kt)("p",null,"The Contract object can be constructed through ",(0,c.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/native/ContractManagement/GetContract"},"ContractManagement.GetContract(UInt60 hash)"),"."),(0,c.kt)("p",null," ",(0,c.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/native/ContractManagement/Deploy"},"ContractManagement.Deploy(byte[] nefFile, string manifest)")," publishes the contract onto the blockchain and returns a contract object."))}m.isMDXComponent=!0}}]);