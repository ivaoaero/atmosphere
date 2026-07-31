import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{A as i,E as a,K as o,b as s,i as c,o as l,t as u}from"./lucide-react-CLyxYqYY.js";import{n as d,t as f}from"./sidebar-DZ7fVqis.js";var p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{p=t(n(),1),u(),d(),m=r(),h=(0,p.createContext)(()=>{throw Error(`setValue function must be overridden in the provider`)}),g=({href:e,className:t,children:n})=>{let r=(0,p.useContext)(h);return(0,m.jsx)(`button`,{className:t,onClick:()=>r(e),children:n})},_={title:`Navigation/Sidebar`,component:f,tags:[`autodocs`],decorators:(e,{args:t})=>{let[n,r]=(0,p.useState)(``);return(0,m.jsxs)(`div`,{className:`flex h-screen [&>:nth-child(2)]:flex-none`,children:[(0,m.jsx)(`style`,{children:`
        body {
          padding: 0 !important;
        }
      `}),(0,m.jsx)(h.Provider,{value:r,children:(0,m.jsx)(e,{args:{...t,isActiveCheck:t.isActiveCheck??(e=>e===n)}})}),(0,m.jsx)(`div`,{className:`size-full`})]})},args:{items:[{title:`Dashboard`,description:`Dashboard`,Icon:o,href:`/dashboard`},{title:`Users`,description:`Users`,Icon:l,href:`/users`},{title:`Settings`,description:`Settings`,Icon:s,href:`/settings`}],isDefaultOpen:!0,asLink:g},argTypes:{items:{table:{type:{summary:`SidebarItemProps[]`}}},isActiveCheck:{table:{type:{summary:`(href: string) => boolean`}}},asLink:{control:`object`,table:{type:{summary:`ComponentType<SidebarAsLinkProps>`}}}}},v={},y={args:{isDefaultOpen:!1}},b={args:{asLink:void 0}},x={args:{isActiveCheck:()=>!0}},S={args:{items:[{title:`Dashboard`,description:`Dashboard`,Icon:o,href:`/dashboard`,isActive:!0},{title:`Users`,description:`Users`,Icon:l,href:`/users`},{title:`Settings`,description:`Settings`,Icon:s,href:`/settings`}],isActiveCheck:()=>!1}},C={args:{items:[{title:`Dashboard`,description:`Dashboard`,Icon:o,href:`/dashboard`},{title:`Disconnections`,Icon:c,items:[{title:`History`,description:`Recent disconnects`,Icon:a,href:`/disconnections`},{title:`Force Disconnect`,description:`Kill connection`,Icon:i,href:`/disconnections/force`}]}]}},w={args:{items:[{title:`Dashboard Extra Long Title So it gives me a nice Overflow`,description:`Dashboard Extra Long Title So it gives me a nice Overflow`,Icon:o,href:`/dashboard`},{title:`Disconnections Extra Long Title So it gives me a nice Overflow`,Icon:c,items:[{title:`History Extra Long Title So it gives me a nice Overflow`,description:`Recent disconnects Extra Long Title So it gives me a nice Overflow`,Icon:a,href:`/disconnections`},{title:`Force Disconnect Extra Long Title So it gives me a nice Overflow`,description:`Kill connection Extra Long Title So it gives me a nice Overflow`,Icon:i,href:`/disconnections/force`}]}]}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{} satisfies Story`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isDefaultOpen: false
  }
} satisfies Story`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    asLink: undefined
  }
} satisfies Story`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isActiveCheck: () => true
  }
} satisfies Story`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Dashboard',
      description: 'Dashboard',
      Icon: Home,
      href: '/dashboard',
      isActive: true
    }, {
      title: 'Users',
      description: 'Users',
      Icon: UsersIcon,
      href: '/users'
    }, {
      title: 'Settings',
      description: 'Settings',
      Icon: SettingsIcon,
      href: '/settings'
    }],
    isActiveCheck: () => false
  }
} satisfies Story`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Dashboard Extra Long Title So it gives me a nice Overflow',
      description: 'Dashboard Extra Long Title So it gives me a nice Overflow',
      Icon: Home,
      href: '/dashboard'
    }, {
      title: 'Disconnections Extra Long Title So it gives me a nice Overflow',
      Icon: WifiOff,
      items: [{
        title: 'History Extra Long Title So it gives me a nice Overflow',
        description: 'Recent disconnects Extra Long Title So it gives me a nice Overflow',
        Icon: History,
        href: '/disconnections'
      }, {
        title: 'Force Disconnect Extra Long Title So it gives me a nice Overflow',
        description: 'Kill connection Extra Long Title So it gives me a nice Overflow',
        Icon: Power,
        href: '/disconnections/force'
      }]
    }]
  }
} satisfies Story`,...w.parameters?.docs?.source}}},T=[`Default`,`DefaultClosed`,`DefaultLink`,`CustomActiveCheck`,`IsActiveProperty`,`WithGroups`,`WithOverflow`]}))();export{x as CustomActiveCheck,v as Default,y as DefaultClosed,b as DefaultLink,S as IsActiveProperty,C as WithGroups,w as WithOverflow,T as __namedExportsOrder,_ as default};