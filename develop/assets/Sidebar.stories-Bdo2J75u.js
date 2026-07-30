import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{A as n,E as r,K as i,b as a,i as o,o as s,t as c}from"./lucide-react-CLyxYqYY.js";import{n as l,t as u}from"./sidebar-DB6Pkc90.js";var d,f,p,m,h,g,_;e((()=>{c(),l(),d=t(),f={title:`Navigation/Sidebar`,component:u,tags:[`autodocs`],decorators:e=>(0,d.jsxs)(`div`,{className:`flex h-screen`,children:[(0,d.jsx)(e,{}),(0,d.jsx)(`div`,{className:`bg-fuselage-50 dark:bg-fuselage-950 size-full`})]}),args:{items:[{title:`Dashboard`,description:`Dashboard`,Icon:i,href:`/dashboard`,isActive:!0},{title:`Users`,description:`Users`,Icon:s,href:`/users`},{title:`Settings`,description:`Settings`,Icon:a,href:`/settings`}],isDefaultOpen:!0},argTypes:{items:{table:{type:{summary:`SidebarItemProps[]`}}},isActiveCheck:{table:{type:{summary:`(href: string) => boolean`}}},asLink:{control:`object`,table:{type:{summary:`ComponentType<SidebarAsLinkProps>`}}}}},p={},m={args:{isDefaultOpen:!1}},h={args:{isActiveCheck:()=>!0}},g={args:{items:[{title:`Dashboard`,description:`Dashboard`,Icon:i,href:`/dashboard`},{title:`Disconnections`,Icon:o,items:[{title:`History`,description:`Recent disconnects`,Icon:r,href:`/disconnections`},{title:`Force Disconnect`,description:`Kill connection`,Icon:n,href:`/disconnections/force`}]}]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isDefaultOpen: false
  }
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isActiveCheck: () => true
  }
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}},_=[`Default`,`DefaultClosed`,`CustonActiveCheck`,`WithGroups`]}))();export{h as CustonActiveCheck,p as Default,m as DefaultClosed,g as WithGroups,_ as __namedExportsOrder,f as default};