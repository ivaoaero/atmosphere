import{S as a}from"./index-DqgDht6m.js";import"./jsx-runtime-f8QT0vQX.js";import"./iframe-C6ATIw1n.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectTrigger-CEOwuz2f.js";import"./styles-BEHD0UYf.js";import"./index-B9gmC9Pm.js";import"./index-B09Xo6RP.js";import"./index-BdQq_4o_.js";import"./index-DNSeyj-m.js";import"./index-GzJwBu3m.js";import"./index-Dils7Wnr.js";import"./index-WbAbiluB.js";import"./index-D6MU2nw3.js";import"./index-DpBO9mLk.js";import"./index-B9ty0KEc.js";import"./index-9cuG20C2.js";import"./index-CAYzp22o.js";import"./index-TAC9-VtM.js";import"./index-CCXAvlZX.js";import"./index-BttPnxrE.js";import"./index-C41eAbh0.js";import"./index-CS7hBh4Q.js";import"./index-Ci96GbNg.js";import"./index-BLGPF-nx.js";import"./chevron-down-Dl1KvZIh.js";import"./createLucideIcon-CcUF0qy_.js";import"./check-b_f_Ut68.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Forms/Select",component:a,tags:["autodocs"],args:{items:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],placeholder:"Select an option",position:"item-aligned",onValueChange:o("value change"),onOpenChange:o("open change")},argTypes:{disabled:{type:"boolean",description:"Whether the select is disabled."},items:{description:"List of items to select from.",table:{type:{summary:"SelectItemProps[]"}}},open:{type:"boolean",description:"Whether the select is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the select initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},placeholder:{description:"Placeholder text for the select.",control:"text",table:{type:{summary:"ReactNode"}}},position:{description:"Position of the select.",control:"select",options:["popper","item-aligned"]},value:{type:"string",description:"Controlled value of the select. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1}},defaultValue:{type:"string",description:"Sets the initial value of the select. Cannot be used with `value`!",if:{arg:"value",exists:!1}}}},e={},t={args:{items:{Group1:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],Group2:[{value:"4",label:"Four"},{value:"5",label:"Five"},{value:"6",label:"Six"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: {
      Group1: [{
        value: '1',
        label: 'One'
      }, {
        value: '2',
        label: 'Two'
      }, {
        value: '3',
        label: 'Three'
      }],
      Group2: [{
        value: '4',
        label: 'Four'
      }, {
        value: '5',
        label: 'Five'
      }, {
        value: '6',
        label: 'Six'
      }]
    }
  }
} satisfies Story`,...t.parameters?.docs?.source}}};const P=["Default","SelectListWithGroups"];export{e as Default,t as SelectListWithGroups,P as __namedExportsOrder,D as default};
