"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[3846],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),o=n(79443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",c="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,o=e.block,s=e.defaultValue,u=e.values,p=e.groupId,d=e.className,f=r.Children.toArray(e.children),m=null!=u?u:f.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,g=a(),h=g.tabGroupChoices,b=g.setTabGroupChoices,w=(0,r.useState)(v),y=w[0],k=w[1],N=[];if(null!=p){var O=h[p];null!=O&&O!==y&&m.some((function(e){return e.value===O}))&&k(O)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=m[n].value;k(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,o,a,i,l,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&a<=s&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},82924:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},85350:function(e,t,n){var r=n(67294),o=n(82924);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},37643:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=(n(16213),n(55064),n(58215),["components"]),l={title:"Clients",date:new Date("2022-01-18T21:13:48.000Z")},c=void 0,s={unversionedId:"n3/Advances/neofs/topics/clients",id:"n3/Advances/neofs/topics/clients",isDocsHomePage:!1,title:"Clients",description:"There are two types of client to be aware of and as they are both clients it can get confusing. You have a wallet client and an NeoFS client.",source:"@site/docs/n3/Advances/neofs/topics/clients.mdx",sourceDirName:"n3/Advances/neofs/topics",slug:"/n3/Advances/neofs/topics/clients",permalink:"/website/docs/n3/Advances/neofs/topics/clients",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/Advances/neofs/topics/clients.mdx",tags:[],version:"current",lastUpdatedBy:"Celia18305",frontMatter:{title:"Clients",date:"2022-01-18T21:13:48.000Z"},sidebar:"docs",previous:{title:"ACL Permissions",permalink:"/website/docs/n3/Advances/neofs/topics/acl-permissions"},next:{title:"Containers",permalink:"/website/docs/n3/Advances/neofs/topics/containers"}},u=[{value:"Wallet Client",id:"wallet-client",children:[]},{value:"NeoFS Client",id:"neofs-client",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are two types of client to be aware of and as they are both clients it can get confusing. You have a wallet client and an NeoFS client.\nInteractions with NeoFS will require a NeoFS client, whereas wallet actions will require a wallet client. Note they do not reside in the same package"),(0,a.kt)("h2",{id:"wallet-client"},"Wallet Client"),(0,a.kt)("p",null,"When using a wallet client you will need to import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/nspcc-dev/neo-go/pkg/rpc/client"\n    "github.com/nspcc-dev/neo-go/pkg/wallet"    \n)\n')),(0,a.kt)("p",null,"To create a wallet client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'ctx := context.Background()\n// use endpoint addresses of public RPC nodes, e.g. from https://dora.coz.io/monitor\ncli, err := client.New(ctx, "http://seed1t4.neo.org:20332", client.Options{})\nif err != nil {\n    return fmt.Errorf("can\'t create client: %w", err)\n}\n')),(0,a.kt)("h2",{id:"neofs-client"},"NeoFS Client"),(0,a.kt)("p",null,"The client wraps around the raw API requests to NeoFS.\nOnce you have a client requests to NeoFS can be made so you will need to make this early on from the wallet/private key."),(0,a.kt)("p",null,"When using the NeoFS client you will import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/nspcc-dev/neofs-sdk-go/client"\n)\n')),(0,a.kt)("p",null,"Creating a client can be done like so"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'cli, err := client.New(\n  // provide private key associated with request owner\n  client.WithDefaultPrivateKey(privateKey),\n  // find endpoints in https://testcdn.fs.neo.org/doc/integrations/endpoints/\n  client.WithURIAddress(TESTNET, nil),\n  // check client errors in go compatible way\n  client.WithNeoFSErrorParsing(),\n)\nif err != nil {\n    return fmt.Errorf("can\'t create client: %w", err)\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Private key can be retrieved from a ",(0,a.kt)("a",{parentName:"li",href:"/docs/n3/neofs/topics/wallets"},"wallet")," - its type is ",(0,a.kt)("inlineCode",{parentName:"li"},"*ecdsa.PrivateKey")),(0,a.kt)("li",{parentName:"ul"},"The network is a string, for now you can use ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'TESTNET string = "grpcs://st01.testnet.fs.neo.org:8082"\nMAINNET = "grpcs://st01.testnet.fs.neo.org:8082"\n')))}d.isMDXComponent=!0}}]);