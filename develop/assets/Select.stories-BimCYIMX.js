import{S as a}from"./index-DkA0OBII.js";import"./jsx-runtime-owaHAHyT.js";import"./iframe-CHCV3d-U.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectTrigger-CHYS6e59.js";import"./styles-BEHD0UYf.js";import"./index-DG78kEDc.js";import"./index-DBwva85G.js";import"./index-BdQq_4o_.js";import"./index-B7QXMb6g.js";import"./index-BIYs1ILr.js";import"./index-Cfcon1xl.js";import"./index-NmTJeRio.js";import"./index-CbuI_Zls.js";import"./index-nYoLN4HV.js";import"./index-xzYXHqRN.js";import"./index-Djnvdsrb.js";import"./index-WOPWaWXo.js";import"./index-CW-2hsFF.js";import"./index-N7k8Km2b.js";import"./index-Ndpq0Oxe.js";import"./index-CLngmu5l.js";import"./index-C2MICE2m.js";import"./index-584NzOS-.js";import"./index-DUUWYIFU.js";import"./chevron-down-9thgXZil.js";import"./createLucideIcon-BDY-CiKx.js";import"./check-Bq2R7Kvs.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Forms/Select",component:a,tags:["autodocs"],args:{items:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],placeholder:"Select an option",position:"item-aligned",onValueChange:o("value change"),onOpenChange:o("open change")},argTypes:{disabled:{type:"boolean",description:"Whether the select is disabled."},items:{description:"List of items to select from.",table:{type:{summary:"SelectItemProps[]"}}},open:{type:"boolean",description:"Whether the select is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the select initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},placeholder:{description:"Placeholder text for the select.",control:"text",table:{type:{summary:"ReactNode"}}},position:{description:"Position of the select.",control:"select",options:["popper","item-aligned"]},value:{type:"string",description:"Controlled value of the select. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1}},defaultValue:{type:"string",description:"Sets the initial value of the select. Cannot be used with `value`!",if:{arg:"value",exists:!1}}}},e={},t={args:{items:{Group1:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],Group2:[{value:"4",label:"Four"},{value:"5",label:"Five"},{value:"6",label:"Six"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
