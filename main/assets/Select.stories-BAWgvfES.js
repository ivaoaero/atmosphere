import{S as a}from"./index-sV3i2n6g.js";import"./jsx-runtime-BCSg91tD.js";import"./iframe-BfWqIy39.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectTrigger-CQZoYo6j.js";import"./styles-BEHD0UYf.js";import"./index-CEObL4SB.js";import"./index-DA-YmknU.js";import"./index-BdQq_4o_.js";import"./index-DRfTGOGW.js";import"./index-DNoVCocP.js";import"./index-DgHlpNdG.js";import"./index-BnC4IWLr.js";import"./index-BNG0TUXz.js";import"./index-C5y2McuT.js";import"./index-ougmOeTn.js";import"./index-C31b6gz_.js";import"./index-B3SENxo6.js";import"./index-BO3PuLTt.js";import"./index-Bp-5ArQw.js";import"./index-DgF1iFcv.js";import"./index-BtODHlr0.js";import"./index-B3zMAoHS.js";import"./index-CNBkNm3K.js";import"./index-BHnlF_B5.js";import"./chevron-down-ChGpf4_4.js";import"./createLucideIcon-CoaeUEX4.js";import"./check-cXBHxvWC.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Forms/Select",component:a,tags:["autodocs"],args:{items:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],placeholder:"Select an option",position:"item-aligned",onValueChange:o("value change"),onOpenChange:o("open change")},argTypes:{disabled:{type:"boolean",description:"Whether the select is disabled."},items:{description:"List of items to select from.",table:{type:{summary:"SelectItemProps[]"}}},open:{type:"boolean",description:"Whether the select is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the select initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},placeholder:{description:"Placeholder text for the select.",control:"text",table:{type:{summary:"ReactNode"}}},position:{description:"Position of the select.",control:"select",options:["popper","item-aligned"]},value:{type:"string",description:"Controlled value of the select. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1}},defaultValue:{type:"string",description:"Sets the initial value of the select. Cannot be used with `value`!",if:{arg:"value",exists:!1}}}},e={},t={args:{items:{Group1:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],Group2:[{value:"4",label:"Four"},{value:"5",label:"Five"},{value:"6",label:"Six"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
