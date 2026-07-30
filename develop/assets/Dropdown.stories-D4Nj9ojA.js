import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{B as n,H as r,M as i,Q as a,b as o,c as s,o as c,t as l,u}from"./lucide-react-CLyxYqYY.js";import{r as d,t as f}from"./dropdown-menu-YBQEodqG.js";var p,m,h,g,_,v,y,b,x;e((()=>{l(),d(),p=t(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Navigation/DropdownMenu`,component:f,tags:[`autodocs`],args:{trigger:`Trigger`,label:`Label`,items:[[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`}]],onOpenChange:m(`open change`)},argTypes:{items:{table:{type:{summary:`DropdownMenuItemsProps`}}},open:{type:`boolean`,description:"Whether the dropdown is open. Cannot be used with `defaultOpen`!",if:{arg:`defaultOpen`,exists:!1}},defaultOpen:{type:`boolean`,description:"Sets the dropdown initially open. Cannot be used with `open`!",if:{arg:`open`,exists:!1}}}},g={},_={args:{label:`My Account`,items:[[{label:`Profile`,icon:(0,p.jsx)(s,{className:`mr-2 size-4`}),shortcut:`⇧⌘P`},{label:`Billing`,icon:(0,p.jsx)(a,{className:`mr-2 size-4`}),shortcut:`⇧⌘B`},{label:`Settings`,icon:(0,p.jsx)(o,{className:`mr-2 size-4`}),shortcut:`⌘S`}],[{label:`Team`,icon:(0,p.jsx)(c,{className:`mr-2 size-4`})},{label:`Invite Users`,icon:(0,p.jsx)(u,{className:`mr-2 size-4`}),subItems:[{label:`Email`,icon:(0,p.jsx)(r,{className:`mr-2 size-4`})},{label:`Message`,icon:(0,p.jsx)(n,{className:`mr-2 size-4`})}]},{label:`New Team`,icon:(0,p.jsx)(i,{className:`mr-2 size-4`}),shortcut:`⌘+T`,disabled:!0}]]}},v={args:{label:`Choices`,items:{type:`checkbox`,items:[{label:`Item 1`,checked:!0},{label:`Item 2`},{label:`Item 3`,disabled:!0}]}}},y={args:{label:`Choices`,items:{type:`radio`,value:`Item 1`,items:[{label:`Custom Label`,value:`Item 1`},{value:`Item 2`},{value:`Item 3`,disabled:!0}]}}},b={args:{label:`Mixed`,items:[[{label:`Team`,icon:(0,p.jsx)(c,{className:`mr-2 size-4`})},{label:`Invite Users`,icon:(0,p.jsx)(u,{className:`mr-2 size-4`}),subItems:[{label:`Email`,icon:(0,p.jsx)(r,{className:`mr-2 size-4`})},{label:`Message`,icon:(0,p.jsx)(n,{className:`mr-2 size-4`})}]},{label:`New Team`,icon:(0,p.jsx)(i,{className:`mr-2 size-4`}),shortcut:`⌘+T`,disabled:!0}],{type:`radio`,value:`Item 1`,items:[{label:`Custom Label`,value:`Item 1`},{value:`Item 2`},{value:`Item 3`,disabled:!0}]},{type:`checkbox`,items:[{label:`Item 1`,checked:!0},{label:`Item 2`},{label:`Item 3`,disabled:!0}]}]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Account',
    items: [[{
      label: 'Profile',
      icon: <User className="mr-2 size-4" />,
      shortcut: '⇧⌘P'
    }, {
      label: 'Billing',
      icon: <CreditCard className="mr-2 size-4" />,
      shortcut: '⇧⌘B'
    }, {
      label: 'Settings',
      icon: <Settings className="mr-2 size-4" />,
      shortcut: '⌘S'
    }], [{
      label: 'Team',
      icon: <Users className="mr-2 size-4" />
    }, {
      label: 'Invite Users',
      icon: <UserPlus className="mr-2 size-4" />,
      subItems: [{
        label: 'Email',
        icon: <Mail className="mr-2 size-4" />
      }, {
        label: 'Message',
        icon: <MessageSquare className="mr-2 size-4" />
      }]
    }, {
      label: 'New Team',
      icon: <Plus className="mr-2 size-4" />,
      shortcut: '⌘+T',
      disabled: true
    }]]
  }
} satisfies Story`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choices',
    items: {
      type: 'checkbox',
      items: [{
        label: 'Item 1',
        checked: true
      }, {
        label: 'Item 2'
      }, {
        label: 'Item 3',
        disabled: true
      }]
    }
  }
} satisfies Story`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choices',
    items: {
      type: 'radio',
      value: 'Item 1',
      items: [{
        label: 'Custom Label',
        value: 'Item 1'
      }, {
        value: 'Item 2'
      }, {
        value: 'Item 3',
        disabled: true
      }]
    }
  }
} satisfies Story`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mixed',
    items: [[{
      label: 'Team',
      icon: <Users className="mr-2 size-4" />
    }, {
      label: 'Invite Users',
      icon: <UserPlus className="mr-2 size-4" />,
      subItems: [{
        label: 'Email',
        icon: <Mail className="mr-2 size-4" />
      }, {
        label: 'Message',
        icon: <MessageSquare className="mr-2 size-4" />
      }]
    }, {
      label: 'New Team',
      icon: <Plus className="mr-2 size-4" />,
      shortcut: '⌘+T',
      disabled: true
    }], {
      type: 'radio',
      value: 'Item 1',
      items: [{
        label: 'Custom Label',
        value: 'Item 1'
      }, {
        value: 'Item 2'
      }, {
        value: 'Item 3',
        disabled: true
      }]
    }, {
      type: 'checkbox',
      items: [{
        label: 'Item 1',
        checked: true
      }, {
        label: 'Item 2'
      }, {
        label: 'Item 3',
        disabled: true
      }]
    }]
  }
} satisfies Story`,...b.parameters?.docs?.source}}},x=[`Default`,`GroupedWithIconsAndShortcuts`,`Checkbox`,`Radio`,`Mixed`]}))();export{v as Checkbox,g as Default,_ as GroupedWithIconsAndShortcuts,b as Mixed,y as Radio,x as __namedExportsOrder,h as default};