"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[4143],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85840:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={sidebar_label:"Native tokens",sidebar_position:2},c="NEO Token Models",l={unversionedId:"n3/foundation/Native tokens",id:"n3/foundation/Native tokens",isDocsHomePage:!1,title:"NEO Token Models",description:"Native Token",source:"@site/docs/n3/foundation/Native tokens.md",sourceDirName:"n3/foundation",slug:"/n3/foundation/Native tokens",permalink:"/website/docs/n3/foundation/Native tokens",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/foundation/Native tokens.md",tags:[],version:"current",lastUpdatedBy:"Apisit Toompkadee",sidebarPosition:2,frontMatter:{sidebar_label:"Native tokens",sidebar_position:2},sidebar:"docs",previous:{title:"Governance and Incentives",permalink:"/website/docs/n3/foundation/governance"},next:{title:"Wallets",permalink:"/website/docs/n3/foundation/Wallets"}},u=[{value:"Native Token",id:"native-token",children:[]},{value:"NEP17 Assets (Tokens)",id:"nep17-assets-tokens",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"neo-token-models"},"NEO Token Models"),(0,i.kt)("h3",{id:"native-token"},"Native Token"),(0,i.kt)("p",null,"There are 2 kinds of native tokens defined in the Neo system: NEO and NeoGas (GAS)."),(0,i.kt)("p",null,"NEO is the Governing Token. Neo holders can participate in Neo network management, including voting for consensus nodes, network parameter modification, etc. The total amount of NEO is 100 million. Its minimum unit is 1 and can not be divided. It's registered in Genesis block, and stored in standby validators' muti-signature addresses."),(0,i.kt)("p",null,"GAS is the fuel token for the realization of Neo network resource control, with a smallest unit of 0.00000001. Users can obtain GAS either through a claim or purchase. When using the Neo network, they need to pay a certain amount of GAS as network fees, such as transfer, registering assets, publishing assets, running DApps, etc."),(0,i.kt)("p",null,"The Neo N3 Genesis block will mint the exact amount of GAS token needed to account for all GAS token circulating on the NEO Legacy chain at the time of Genesis block."),(0,i.kt)("p",null,"To read more about GAS generation rate and distribution refer to the ",(0,i.kt)("a",{parentName:"p",href:"./governance"},"Governance and Incentives"),"."),(0,i.kt)("h3",{id:"nep17-assets-tokens"},"NEP17 Assets (Tokens)"),(0,i.kt)("p",null,"NEP17 tokens need to be issued and managed through smart contract. Their information is stored in a smart contract's storage. Account model is used. For detailed information, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/n3/develop/write/nep17"},"NEP-17"),"."))}p.isMDXComponent=!0}}]);