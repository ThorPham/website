"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[3380],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63620:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],c={sidebar_position:4},l="Advanced Functions",s={unversionedId:"n3/node/gui/advanced",id:"n3/node/gui/advanced",isDocsHomePage:!1,title:"Advanced Functions",description:"Election and Voting",source:"@site/docs/n3/node/gui/advanced.md",sourceDirName:"n3/node/gui",slug:"/n3/node/gui/advanced",permalink:"/website/docs/n3/node/gui/advanced",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/node/gui/advanced.md",tags:[],version:"current",lastUpdatedBy:"Apisit",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Contract",permalink:"/website/docs/n3/node/gui/contract"},next:{title:"Synchronizing the blockchain faster",permalink:"/website/docs/n3/node/syncblocks"}},d=[{value:"Election and Voting",id:"election-and-voting",children:[{value:"Election",id:"election",children:[]},{value:"Voting",id:"voting",children:[]}]},{value:"Signature",id:"signature",children:[]}],p={toc:d};function u(e){var t=e.components,c=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-functions"},"Advanced Functions"),(0,o.kt)("h2",{id:"election-and-voting"},"Election and Voting"),(0,o.kt)("p",null,"Using Neo-GUI you can elect candidates and vote for Neo consensus nodes. After all the Neo consensus nodes reach a consensus through the DBFT algorithm, new blocks are generated. Voting for consensus nodes is conducted constantly in real time in the Neo blockchain. The main process is:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Neo nodes register as candidates"),(0,o.kt)("li",{parentName:"ol"},"NEO token holders vote for candidates"),(0,o.kt)("li",{parentName:"ol"},"Neo blockchain determines the consensus nodes based on the number of candidates and their votes cast.")),(0,o.kt)("h3",{id:"election"},"Election"),(0,o.kt)("p",null,"After the candidates are registered, the NEO token holders can vote for consensus nodes. Before you participate in the election make sure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You open the wallet"),(0,o.kt)("li",{parentName:"ul"},"There are enough GAS in your wallet (approximately 1000.12 GAS) for payment of  candidate registration.")),(0,o.kt)("p",null,"To register as a candidate:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In Neo-GUI home page click ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Election"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the public key of the account in the list and click ",(0,o.kt)("inlineCode",{parentName:"p"},"OK"),". "))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The multi-signature address is not displayed in the list as it cannot be registered to a candidate."))),(0,o.kt)("p",null,"After the transaction is sent successfully, you can do the following to check if the candidate has been registered:"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Vote")," to enter the ",(0,o.kt)("strong",{parentName:"p"},"Vote")," page. The candidate's public key should be displayed in the candidate list:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(49688).Z})),(0,o.kt)("h3",{id:"voting"},"Voting"),(0,o.kt)("p",null,"Each Neo node can vote for the candidates. The number of NEO in the current voting account will be automatically calculated as the number of the candidate's votes. For example, if you vote for a candidate from an account that has 100 NEO, the candidate receives 100 votes. If NEO in the account is spent after the vote, the candidate' votes will simultaneously be decreased to the current NEO balance."),(0,o.kt)("p",null,"To vote:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In Neo-GUI open a wallet and then click ",(0,o.kt)("inlineCode",{parentName:"li"},"Advanced")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Vote")),(0,o.kt)("li",{parentName:"ol"},"Choose the account to vote"),(0,o.kt)("li",{parentName:"ol"},"In the Candidates field, enter the public key of the candidate to vote. "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"OK"),". ")),(0,o.kt)("p",null,"After voting you can check the votes in the candidates list after the block data has been updated."),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("p",null,"When initiating any transaction from a multi-signature address, e.g. transferring assets, invoking a contract, or voting, the transaction needs to obtain the minimum number of signatures to carry out the transaction."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When GUI prompts there is insufficient signature after you send a transaction from a multi-signature address, copy the transaction information displayed in the pop-up window. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In Neo-GUI, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced"),"-> ",(0,o.kt)("inlineCode",{parentName:"p"},"Signature"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the transaction information copied before into the Transaction Json box, and then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Signature"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(98783).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the output data, enter the next wallet participating in the signature, and repeat that same operation until the signature is completed."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(19462).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Broadcast"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(87836).Z})))))}u.isMDXComponent=!0},49688:function(e,t,n){t.Z=n.p+"assets/images/guiValidators-09ce439a44e9582cb6663ab4a1a2ea9a.png"},98783:function(e,t,n){t.Z=n.p+"assets/images/sign_2-31d3b05ea6009fe4100bce921f278d9e.png"},19462:function(e,t,n){t.Z=n.p+"assets/images/sign_3-df37a525bf6871ed0484c0cefe60785c.png"},87836:function(e,t,n){t.Z=n.p+"assets/images/sign_4-829ffebda082741212f9edd8c56558ca.png"}}]);