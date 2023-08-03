"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[9032],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69083:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],l={sidebar_position:0},c="Installing Neo-GUI",s={unversionedId:"n3/node/gui/install",id:"n3/node/gui/install",isDocsHomePage:!1,title:"Installing Neo-GUI",description:"Neo-GUI is a full-node application on the Neo blockchain. It uses Electron cross-platform technology and currently can run on Windows 10 and macOS systems.",source:"@site/docs/n3/node/gui/install.md",sourceDirName:"n3/node/gui",slug:"/n3/node/gui/install",permalink:"/website/docs/n3/node/gui/install",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/node/gui/install.md",tags:[],version:"current",lastUpdatedBy:"Apisit",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docs",previous:{title:"Installing Neo-CLI",permalink:"/website/docs/n3/node/cli/setup"},next:{title:"Viewing Blockchain Information",permalink:"/website/docs/n3/node/gui/blockchain"}},p=[{value:"Downloading the client",id:"downloading-the-client",children:[]},{value:"Connecting to the network",id:"connecting-to-the-network",children:[]}],d={toc:p};function u(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-neo-gui"},"Installing Neo-GUI"),(0,i.kt)("p",null,"Neo-GUI is a full-node application on the Neo blockchain. It uses Electron cross-platform technology and currently can run on Windows 10 and macOS systems."),(0,i.kt)("p",null,"It has these main functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Viewing and searching blockchain information"),(0,i.kt)("li",{parentName:"ul"},"Basic wallet operations, including creating wallets, importing wallets, transferring transactions, etc."),(0,i.kt)("li",{parentName:"ul"},"Deploying and invoking smart contracts"),(0,i.kt)("li",{parentName:"ul"},"Election and voting consensus nodes")),(0,i.kt)("h2",{id:"downloading-the-client"},"Downloading the client"),(0,i.kt)("p",null,"Neo-GUI is an open source project, thus you can download the installation package of the corresponding system version on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/neo-ngd/Neo3-GUI/releases"},"GitHub")," , and complete the installation according to the prompts."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Make sure your Windows / macOS system has ",(0,i.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download/dotnet-core/current/runtime"},".NET Core 5.0")," installed.")))),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"When installing on the Windows system, do not install Neo-GUI under the default path C:\\Program Files, or you have to run the client with the administrator privileges to connect the client to the network and download the blockchain data."))),(0,i.kt)("h2",{id:"connecting-to-the-network"},"Connecting to the network"),(0,i.kt)("p",null,"After installation Neo-GUI connects to the N3 main net automatically. "),(0,i.kt)("p",null,"To connect the node to test net, go to any page and click ",(0,i.kt)("strong",{parentName:"p"},"Settings")," in the lower left corner. Then check ",(0,i.kt)("strong",{parentName:"p"},"Testnet"),"."),(0,i.kt)("p",null,"If you have already built a private chain (see ",(0,i.kt)("a",{parentName:"p",href:"/website/docs/n3/develop/network/private-chain/solo"},"Setting up private chain"),"), you can also connect Neo-GUI to it."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," file of your private chain."),(0,i.kt)("p",{parentName:"li"},"Make sure that the address port configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," SeedList can be accessed from this machine.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the path ",(0,i.kt)("inlineCode",{parentName:"p"},"resources\\build-neo-node")," under Neo-GUI installation directory and find the file ",(0,i.kt)("inlineCode",{parentName:"p"},"config.private.json"),"  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace the content of ",(0,i.kt)("inlineCode",{parentName:"p"},"config.private.json")," with the content of config.json you found in Step 1")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run Neo-GUI and go to any page.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," in the lower left corner.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under ",(0,i.kt)("strong",{parentName:"p"},"Network")," check ",(0,i.kt)("inlineCode",{parentName:"p"},"Privatenet"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(12293).Z})))),(0,i.kt)("p",null,"After a while, when you see the block synchronization data displayed at the top of the main page is increasing, that indicates your client has connected to the network successfully."))}u.isMDXComponent=!0},12293:function(e,t,n){t.Z=n.p+"assets/images/guinetwork-8d6adeff138013ab3c4998fffc111f7b.png"}}]);