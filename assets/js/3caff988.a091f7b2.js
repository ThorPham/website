"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[7993],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68047:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={},l="FindOptions Enumeration",c={unversionedId:"n3/reference/scapi/framework/services/FindOptions",id:"n3/reference/scapi/framework/services/FindOptions",isDocsHomePage:!1,title:"FindOptions Enumeration",description:"Defines find options for searching storage. This is used in the Storage.Find method.",source:"@site/docs/n3/reference/scapi/framework/services/FindOptions.md",sourceDirName:"n3/reference/scapi/framework/services",slug:"/n3/reference/scapi/framework/services/FindOptions",permalink:"/website/docs/n3/reference/scapi/framework/services/FindOptions",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/services/FindOptions.md",tags:[],version:"current",lastUpdatedBy:"Apisit",frontMatter:{},sidebar:"docs",previous:{title:"Crypto Class",permalink:"/website/docs/n3/reference/scapi/framework/services/Crypto"},next:{title:"Iterator Class",permalink:"/website/docs/n3/reference/scapi/framework/services/Iterator"}},p=[{value:"Syntax",id:"syntax",children:[]}],u={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"findoptions-enumeration"},"FindOptions Enumeration"),(0,a.kt)("p",null,"Defines find options for searching storage. This is used in the Storage.Find method."),(0,a.kt)("p",null,"Namespace: Neo.SmartContract"),(0,a.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public enum FindOptions : byte\n{\n    None = 0,\n\n    KeysOnly = 1 << 0,\n    RemovePrefix = 1 << 1,\n    ValuesOnly = 1 << 2,\n    DeserializeValues = 1 << 3,\n    PickField0 = 1 << 4,\n    PickField1 = 1 << 5\n}\n")),(0,a.kt)("h5",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"None: Search all")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"KeysOnly: Search Key only. It cannot be used together with ValuesOnly, DeserializeValues, PickField0, and PickField1.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RemovePrefix: Similar to KeysOnly. It will filter to the first byte of Key, i.e., the prefix of Key. It cannot be used together with ValuesOnly")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ValuesOnly: Search Value only. It cannot be used together with KeysOnly and RemovePrefix.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"DeserializeValues: Search Value and then deserialize the Value.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PickField0: Search the first element of Value array. It must be used together with DeserializeValues, not with PickField1.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PickField1: Search the second element of Value array. It must be used together with DeserializeValues, not with PickField0.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"FindOptions is used in ",(0,a.kt)("a",{parentName:"p",href:"/website/docs/n3/reference/scapi/framework/services/Storage/Find"},"Storage.Find(StorageContext, ByteString, FindOptions)")))))}f.isMDXComponent=!0}}]);