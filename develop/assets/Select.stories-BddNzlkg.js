import{S as a}from"./index-DrQcZIzp.js";import"./jsx-runtime-NE_zcNN2.js";import"./iframe-Ch1q1C1w.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectTrigger-CoA2qYPp.js";import"./styles-BEHD0UYf.js";import"./index-8BNAociu.js";import"./index-B8L5zJfB.js";import"./index-BdQq_4o_.js";import"./index-CgZagMB8.js";import"./index-4CjaotZF.js";import"./index-SkCWWcZv.js";import"./index-CAUJLRXY.js";import"./index-C_YfdT_g.js";import"./index-DCmijGhJ.js";import"./index-CVolwxKW.js";import"./index-BjgpHM6h.js";import"./index-DVQhCQUQ.js";import"./index-BySSxp3b.js";import"./index-CtgZTLzu.js";import"./index-WokkxWKH.js";import"./index-Benp6fCl.js";import"./index-Cszns1R9.js";import"./index-CrzjBVB-.js";import"./index-DKDRjBVf.js";import"./chevron-down-DQllg31q.js";import"./createLucideIcon-DKmRA99u.js";import"./check-CbhTweN9.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Forms/Select",component:a,tags:["autodocs"],args:{items:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],placeholder:"Select an option",position:"item-aligned",onValueChange:o("value change"),onOpenChange:o("open change")},argTypes:{disabled:{type:"boolean",description:"Whether the select is disabled."},items:{description:"List of items to select from.",table:{type:{summary:"SelectItemProps[]"}}},open:{type:"boolean",description:"Whether the select is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the select initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},placeholder:{description:"Placeholder text for the select.",control:"text",table:{type:{summary:"ReactNode"}}},position:{description:"Position of the select.",control:"select",options:["popper","item-aligned"]},value:{type:"string",description:"Controlled value of the select. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1}},defaultValue:{type:"string",description:"Sets the initial value of the select. Cannot be used with `value`!",if:{arg:"value",exists:!1}}}},e={},t={args:{items:{Group1:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],Group2:[{value:"4",label:"Four"},{value:"5",label:"Five"},{value:"6",label:"Six"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
