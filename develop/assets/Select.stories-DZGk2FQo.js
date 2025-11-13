import{S as a}from"./index-BfzJ0LXv.js";import"./jsx-runtime-CnF9G3Hy.js";import"./iframe-CNXeHHJ5.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectTrigger-C-ZrteAS.js";import"./styles-BEHD0UYf.js";import"./index-Jqs9KCcc.js";import"./index-BUOsLt6b.js";import"./index-BdQq_4o_.js";import"./index-C-vxIjR4.js";import"./index-D1HDEqKX.js";import"./index-DKHLc6yE.js";import"./index-CrBb1Ttm.js";import"./index-B0WzovbP.js";import"./index-KWlIXQ-s.js";import"./index-BfmfXS-9.js";import"./index-66isIIUc.js";import"./index-NF-znDjM.js";import"./index-BObOZZm2.js";import"./index-B9yBfEXx.js";import"./index-CDc-hsS9.js";import"./index-CHtNBE72.js";import"./index-CcGK-g_W.js";import"./index-OMduagO4.js";import"./index-B-aVhzbC.js";import"./chevron-down-DSL2GJZq.js";import"./createLucideIcon-CjWZbxcw.js";import"./check-CvcP_tvC.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Forms/Select",component:a,tags:["autodocs"],args:{items:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],placeholder:"Select an option",position:"item-aligned",onValueChange:o("value change"),onOpenChange:o("open change")},argTypes:{disabled:{type:"boolean",description:"Whether the select is disabled."},items:{description:"List of items to select from.",table:{type:{summary:"SelectItemProps[]"}}},open:{type:"boolean",description:"Whether the select is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the select initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},placeholder:{description:"Placeholder text for the select.",control:"text",table:{type:{summary:"ReactNode"}}},position:{description:"Position of the select.",control:"select",options:["popper","item-aligned"]},value:{type:"string",description:"Controlled value of the select. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1}},defaultValue:{type:"string",description:"Sets the initial value of the select. Cannot be used with `value`!",if:{arg:"value",exists:!1}}}},e={},t={args:{items:{Group1:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],Group2:[{value:"4",label:"Four"},{value:"5",label:"Five"},{value:"6",label:"Six"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
