"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[2699],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60198:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={},c="Storage Class",l={unversionedId:"n3/reference/scapi/framework/services/Storage",id:"n3/reference/scapi/framework/services/Storage",isDocsHomePage:!1,title:"Storage Class",description:"Provides a set of methods to insert, query, and delete data in the persistent storage.",source:"@site/docs/n3/reference/scapi/framework/services/Storage.md",sourceDirName:"n3/reference/scapi/framework/services",slug:"/n3/reference/scapi/framework/services/Storage",permalink:"/website/docs/n3/reference/scapi/framework/services/Storage",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/services/Storage.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"Runtime.Trigger Attribute",permalink:"/website/docs/n3/reference/scapi/framework/services/Runtime/Trigger"},next:{title:"Storage.CurrentContext Property",permalink:"/website/docs/n3/reference/scapi/framework/services/Storage/CurrentContext"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Constructor",id:"constructor",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storage-class"},"Storage Class"),(0,o.kt)("p",null,"Provides a set of methods to insert, query, and delete data in the persistent storage."),(0,o.kt)("p",null,"Namespace\uff1a",(0,o.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/services"},"Neo.SmartContract.Framework.Services")),(0,o.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static class Storage\n")),(0,o.kt)("h2",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/scapi/framework/services/Storage/CurrentContext"},"CurrentContext")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the current storage context")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CurrentReadOnlyContext"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the read-only context of the current contract storage")))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/scapi/framework/services/Storage/Delete"},"Delete")),(0,o.kt)("td",{parentName:"tr",align:null},"Deletes the value corresponding to the key from the given storage context. This method has multiple overloads.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/scapi/framework/services/Storage/Get"},"Get")),(0,o.kt)("td",{parentName:"tr",align:null},"Gets the byte[] value corresponding to the given key from the given storage context. This method has multiple overloads.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/scapi/framework/services/Storage/Put"},"Put")),(0,o.kt)("td",{parentName:"tr",align:null},"Puts the key-value pair into the given storage context. This method has multiple overloads.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website/docs/n3/reference/scapi/framework/services/Storage/Find"},"Find")),(0,o.kt)("td",{parentName:"tr",align:null},"Finds the content in the given storage context. This method has multiple overloads.")))),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("p",null,"The Storage class is a static class and does not require a constructor."))}d.isMDXComponent=!0}}]);