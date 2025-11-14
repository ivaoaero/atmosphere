import{S as a}from"./index-CUA_fhiI.js";import"./jsx-runtime-Yr_ShJXw.js";import"./iframe-BwY6xiO3.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectTrigger-B0IkchAy.js";import"./styles-BEHD0UYf.js";import"./index-B7OingXl.js";import"./index-BpPkTFuP.js";import"./index-BdQq_4o_.js";import"./index-R1Lm0jY6.js";import"./index-BWWYObjh.js";import"./index-ClYANb0b.js";import"./index-C7Ed_MJs.js";import"./index-B_VjzJ2-.js";import"./index-BwINywQ5.js";import"./index-78SE2NcP.js";import"./index-CBuLMHHx.js";import"./index-CTAAX8Uc.js";import"./index-CAucrZWy.js";import"./index-Dy4BmhdQ.js";import"./index-BXKZarbg.js";import"./index-Ddx1gD24.js";import"./index-DMu4pfr9.js";import"./index-CHyy-3Nl.js";import"./index-c9SJGqr2.js";import"./chevron-down-BuTdjwEg.js";import"./createLucideIcon-D8kvyRIX.js";import"./check-D63nNgtc.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Forms/Select",component:a,tags:["autodocs"],args:{items:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],placeholder:"Select an option",position:"item-aligned",onValueChange:o("value change"),onOpenChange:o("open change")},argTypes:{disabled:{type:"boolean",description:"Whether the select is disabled."},items:{description:"List of items to select from.",table:{type:{summary:"SelectItemProps[]"}}},open:{type:"boolean",description:"Whether the select is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the select initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},placeholder:{description:"Placeholder text for the select.",control:"text",table:{type:{summary:"ReactNode"}}},position:{description:"Position of the select.",control:"select",options:["popper","item-aligned"]},value:{type:"string",description:"Controlled value of the select. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1}},defaultValue:{type:"string",description:"Sets the initial value of the select. Cannot be used with `value`!",if:{arg:"value",exists:!1}}}},e={},t={args:{items:{Group1:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],Group2:[{value:"4",label:"Four"},{value:"5",label:"Five"},{value:"6",label:"Six"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
