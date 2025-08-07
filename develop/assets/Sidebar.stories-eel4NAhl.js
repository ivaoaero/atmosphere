import{j as a}from"./jsx-runtime-DiklIkkE.js";import{S as D}from"./index-DOmvUsiR.js";import{c as r}from"./createLucideIcon-B1d7gGsx.js";import{U as S,S as v}from"./users-BjQLgtf9.js";import"./index-DRjF_FHU.js";import"./chevron-right-B-s9fyDC.js";import"./styles-CytzSlOG.js";/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],M=r("History",I);/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],g=r("House",C);/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],x=r("Power",_);/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],j=r("WifiOff",H),L={title:"Navigation/Sidebar",component:D,tags:["autodocs"],decorators:b=>a.jsxs("div",{className:"flex h-screen",children:[a.jsx(b,{}),a.jsx("div",{className:"size-full bg-fuselage-50 dark:bg-fuselage-950"})]}),args:{items:[{title:"Dashboard",description:"Dashboard",Icon:g,href:"/dashboard",isActive:!0},{title:"Users",description:"Users",Icon:S,href:"/users"},{title:"Settings",description:"Settings",Icon:v,href:"/settings"}],isDefaultOpen:!0},argTypes:{items:{table:{type:{summary:"SidebarItemProps[]"}}},isActiveCheck:{table:{type:{summary:"(href: string) => boolean"}}},asLink:{control:"object",table:{type:{summary:"ComponentType<SidebarAsLinkProps>"}}}}},e={},s={args:{isDefaultOpen:!1}},t={args:{isActiveCheck:()=>!0}},o={args:{items:[{title:"Dashboard",description:"Dashboard",Icon:g,href:"/dashboard"},{title:"Disconnections",Icon:j,items:[{title:"History",description:"Recent disconnects",Icon:M,href:"/disconnections"},{title:"Force Disconnect",description:"Kill connection",Icon:x,href:"/disconnections/force"}]}]}};var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{} satisfies Story",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isDefaultOpen: false
  }
} satisfies Story`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,f,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isActiveCheck: () => true
  }
} satisfies Story`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var u,y,k;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const U=["Default","DefaultClosed","CustonActiveCheck","WithGroups"];export{t as CustonActiveCheck,e as Default,s as DefaultClosed,o as WithGroups,U as __namedExportsOrder,L as default};
