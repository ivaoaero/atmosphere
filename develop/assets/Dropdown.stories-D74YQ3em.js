import{j as e}from"./jsx-runtime-f8QT0vQX.js";import{D as d}from"./index-Cd2V5h_5.js";import{c as s}from"./createLucideIcon-CcUF0qy_.js";import{S as p,U as o}from"./users-BhdAPG2h.js";import"./iframe-C6ATIw1n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEkj4GQ_.js";import"./index-WbAbiluB.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./index-DNSeyj-m.js";import"./index-Dils7Wnr.js";import"./index-CS7hBh4Q.js";import"./index-B9ty0KEc.js";import"./index-B9gmC9Pm.js";import"./index-B09Xo6RP.js";import"./index-GzJwBu3m.js";import"./index-D6MU2nw3.js";import"./index-DpBO9mLk.js";import"./index-9cuG20C2.js";import"./index-CAYzp22o.js";import"./index-TAC9-VtM.js";import"./index-CCXAvlZX.js";import"./index-BttPnxrE.js";import"./index-C41eAbh0.js";import"./index-D6KCcWP7.js";import"./index-BARsCRWT.js";import"./check-b_f_Ut68.js";import"./circle-DpoA8Bwx.js";import"./chevron-right-WNAihGf3.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],h=s("credit-card",b);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],m=s("mail",y);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],c=s("message-square",I);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],n=s("plus",x);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],u=s("user-plus",g);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],z=s("user",N),{action:v}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Navigation/DropdownMenu",component:d,tags:["autodocs"],args:{trigger:"Trigger",label:"Label",items:[[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}]],onOpenChange:v("open change")},argTypes:{items:{table:{type:{summary:"DropdownMenuItemsProps"}}},open:{type:"boolean",description:"Whether the dropdown is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the dropdown initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}}}},a={},t={args:{label:"My Account",items:[[{label:"Profile",icon:e.jsx(z,{className:"mr-2 size-4"}),shortcut:"⇧⌘P"},{label:"Billing",icon:e.jsx(h,{className:"mr-2 size-4"}),shortcut:"⇧⌘B"},{label:"Settings",icon:e.jsx(p,{className:"mr-2 size-4"}),shortcut:"⌘S"}],[{label:"Team",icon:e.jsx(o,{className:"mr-2 size-4"})},{label:"Invite Users",icon:e.jsx(u,{className:"mr-2 size-4"}),subItems:[{label:"Email",icon:e.jsx(m,{className:"mr-2 size-4"})},{label:"Message",icon:e.jsx(c,{className:"mr-2 size-4"})}]},{label:"New Team",icon:e.jsx(n,{className:"mr-2 size-4"}),shortcut:"⌘+T",disabled:!0}]]}},r={args:{label:"Choices",items:{type:"checkbox",items:[{label:"Item 1",checked:!0},{label:"Item 2"},{label:"Item 3",disabled:!0}]}}},l={args:{label:"Choices",items:{type:"radio",value:"Item 1",items:[{label:"Custom Label",value:"Item 1"},{value:"Item 2"},{value:"Item 3",disabled:!0}]}}},i={args:{label:"Mixed",items:[[{label:"Team",icon:e.jsx(o,{className:"mr-2 size-4"})},{label:"Invite Users",icon:e.jsx(u,{className:"mr-2 size-4"}),subItems:[{label:"Email",icon:e.jsx(m,{className:"mr-2 size-4"})},{label:"Message",icon:e.jsx(c,{className:"mr-2 size-4"})}]},{label:"New Team",icon:e.jsx(n,{className:"mr-2 size-4"}),shortcut:"⌘+T",disabled:!0}],{type:"radio",value:"Item 1",items:[{label:"Custom Label",value:"Item 1"},{value:"Item 2"},{value:"Item 3",disabled:!0}]},{type:"checkbox",items:[{label:"Item 1",checked:!0},{label:"Item 2"},{label:"Item 3",disabled:!0}]}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{} satisfies Story",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}};const ee=["Default","GroupedWithIconsAndShortcuts","Checkbox","Radio","Mixed"];export{r as Checkbox,a as Default,t as GroupedWithIconsAndShortcuts,i as Mixed,l as Radio,ee as __namedExportsOrder,Z as default};
