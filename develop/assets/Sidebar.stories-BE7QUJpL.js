import{j as a}from"./jsx-runtime-C1KuNDNn.js";import{S as c}from"./index-BrCFwz2g.js";import{c as r}from"./createLucideIcon-DifMnpjQ.js";import{U as d,S as p}from"./users-pekkuOrH.js";import"./iframe-DkAy6WyO.js";import"./preload-helper-PPVm8Dsz.js";import"./chevron-right-BCYz65AR.js";import"./styles-BEHD0UYf.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],m=r("history",l);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],n=r("house",h);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],u=r("power",f);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],k=r("wifi-off",y),_={title:"Navigation/Sidebar",component:c,tags:["autodocs"],decorators:i=>a.jsxs("div",{className:"flex h-screen",children:[a.jsx(i,{}),a.jsx("div",{className:"size-full bg-fuselage-50 dark:bg-fuselage-950"})]}),args:{items:[{title:"Dashboard",description:"Dashboard",Icon:n,href:"/dashboard",isActive:!0},{title:"Users",description:"Users",Icon:d,href:"/users"},{title:"Settings",description:"Settings",Icon:p,href:"/settings"}],isDefaultOpen:!0},argTypes:{items:{table:{type:{summary:"SidebarItemProps[]"}}},isActiveCheck:{table:{type:{summary:"(href: string) => boolean"}}},asLink:{control:"object",table:{type:{summary:"ComponentType<SidebarAsLinkProps>"}}}}},e={},s={args:{isDefaultOpen:!1}},t={args:{isActiveCheck:()=>!0}},o={args:{items:[{title:"Dashboard",description:"Dashboard",Icon:n,href:"/dashboard"},{title:"Disconnections",Icon:k,items:[{title:"History",description:"Recent disconnects",Icon:m,href:"/disconnections"},{title:"Force Disconnect",description:"Kill connection",Icon:u,href:"/disconnections/force"}]}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDefaultOpen: false
  }
} satisfies Story`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isActiveCheck: () => true
  }
} satisfies Story`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Dashboard',
      description: 'Dashboard',
      Icon: Home,
      href: '/dashboard'
    }, {
      title: 'Disconnections',
      Icon: WifiOff,
      items: [{
        title: 'History',
        description: 'Recent disconnects',
        Icon: History,
        href: '/disconnections'
      }, {
        title: 'Force Disconnect',
        description: 'Kill connection',
        Icon: Power,
        href: '/disconnections/force'
      }]
    }]
  }
} satisfies Story`,...o.parameters?.docs?.source}}};const w=["Default","DefaultClosed","CustonActiveCheck","WithGroups"];export{t as CustonActiveCheck,e as Default,s as DefaultClosed,o as WithGroups,w as __namedExportsOrder,_ as default};
