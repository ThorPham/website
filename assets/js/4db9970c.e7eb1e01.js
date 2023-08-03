"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[6220],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14304:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={sidebar_label:"Interoperable service",sidebar_position:1},p="Interoperable service",m={unversionedId:"n3/reference/scapi/interop",id:"n3/reference/scapi/interop",isDocsHomePage:!1,title:"Interoperable service",description:"This article lists the interoperable service in Neo N3.",source:"@site/docs/n3/reference/scapi/interop.md",sourceDirName:"n3/reference/scapi",slug:"/n3/reference/scapi/interop",permalink:"/website/docs/n3/reference/scapi/interop",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/interop.md",tags:[],version:"current",lastUpdatedBy:"Apisit Toompkadee",sidebarPosition:1,frontMatter:{sidebar_label:"Interoperable service",sidebar_position:1},sidebar:"docs",previous:{title:"symbol Method",permalink:"/website/docs/n3/reference/governance_api/symbol"},next:{title:"ContractManagement Class",permalink:"/website/docs/n3/reference/scapi/framework/native/ContractManagement"}},s=[],c={toc:s};function u(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"interoperable-service"},"Interoperable service"),(0,l.kt)("p",null,"This article lists the interoperable service in Neo N3. "),(0,l.kt)("p",null,"The Interoperable service is the underlying API of the system. For more information on how to use the framework to easily call APIs in high-level languages, see ",(0,l.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework"},"Smart Contracts Framework"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Contract"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Contract.Call"),(0,l.kt)("td",{parentName:"tr",align:null},"Use it to call another contract dynamically.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Contract.GetCallFlags"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the CallFlags for the current context")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Contract.CreateStandardAccount"),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates corresponding account scripthash for the given public key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Contract.CreateMultisigAccount"),(0,l.kt)("td",{parentName:"tr",align:null},"Creates the script hash of multi-signed account using public key.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Crypto"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Crypto.CheckSig"),(0,l.kt)("td",{parentName:"tr",align:null},"Checks the signature for the current script container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Crypto.CheckMultisig"),(0,l.kt)("td",{parentName:"tr",align:null},"Checks the signatures for the current script container")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Iterator"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Iterator.Next"),(0,l.kt)("td",{parentName:"tr",align:null},"Advances the iterator to the next element of the collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Iterator.Values"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the element in the collection at the current position of the iterator")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Runtime"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.Platform"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the name of the current platform")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.GetTrigger"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the trigger of the execution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.GetTime"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the timestamp of the current block")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.GetScriptContainer"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the current script container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.GetExecutingScriptHash"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the script hash of the current context")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.GetCallingScriptHash"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the script hash of the calling contract")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.GetEntryScriptHash"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the script hash of the entry context")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.CheckWitness"),(0,l.kt)("td",{parentName:"tr",align:null},"Determines whether the specified account has witnessed the current transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.GetInvocationCounter"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the number of times the current contract has been called during the execution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.Log"),(0,l.kt)("td",{parentName:"tr",align:null},"Writes a log")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.GetNotifications"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the notifications sent by the specified contract during the execution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.GasLeft"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the remaining GAS that can be spent in order to complete the execution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.BurnGas"),(0,l.kt)("td",{parentName:"tr",align:null},"Burning GAS to benefit the Neo ecosystem")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.GetNetwork"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the current network number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Runtime.GetRandom"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets random number")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Storage"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Storage.GetContext"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the storage context for the current contract")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Storage.GetReadOnlyContext"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the read-only storage context for the current contract")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.StorageContext.AsReadOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"Converts the specified storage context to a new read-only storage context")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Storage.Get"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the entry with the specified key from the storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Storage.Find"),(0,l.kt)("td",{parentName:"tr",align:null},"Finds the entries from the storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Storage.Put"),(0,l.kt)("td",{parentName:"tr",align:null},"Puts a new entry into the storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Storage.Delete"),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes an entry from the storage")))))}u.isMDXComponent=!0}}]);