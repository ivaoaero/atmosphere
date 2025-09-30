import{S as a}from"./index-BbFYRDTk.js";import"./jsx-runtime-CWiLgGS-.js";import"./iframe-PTouGSG2.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectTrigger-Bsu3lWXO.js";import"./styles-BEHD0UYf.js";import"./index-B1HdJkhw.js";import"./index-C_c03BiG.js";import"./index-BdQq_4o_.js";import"./index-CYKnLJBP.js";import"./index-CDjHoBoA.js";import"./index-Bu9kImAK.js";import"./index-B6CMjPc4.js";import"./index-DfVyEKx-.js";import"./index-BFBoJLAE.js";import"./index-CBN5Rm-y.js";import"./index-UhdEPief.js";import"./index-DpocgpT1.js";import"./index-CL7KZ0S3.js";import"./index-DGhn_zaE.js";import"./index-2ZAYDePd.js";import"./index-CEUyIXEJ.js";import"./index-DaGoSj6W.js";import"./index-BLuuVKFL.js";import"./index-BDXz17Cq.js";import"./chevron-down-Bzdo5Yp4.js";import"./createLucideIcon-iOmhHyUN.js";import"./check-Cffpg58Q.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Forms/Select",component:a,tags:["autodocs"],args:{items:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],placeholder:"Select an option",position:"item-aligned",onValueChange:o("value change"),onOpenChange:o("open change")},argTypes:{disabled:{type:"boolean",description:"Whether the select is disabled."},items:{description:"List of items to select from.",table:{type:{summary:"SelectItemProps[]"}}},open:{type:"boolean",description:"Whether the select is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the select initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},placeholder:{description:"Placeholder text for the select.",control:"text",table:{type:{summary:"ReactNode"}}},position:{description:"Position of the select.",control:"select",options:["popper","item-aligned"]},value:{type:"string",description:"Controlled value of the select. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1}},defaultValue:{type:"string",description:"Sets the initial value of the select. Cannot be used with `value`!",if:{arg:"value",exists:!1}}}},e={},t={args:{items:{Group1:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],Group2:[{value:"4",label:"Four"},{value:"5",label:"Five"},{value:"6",label:"Six"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
