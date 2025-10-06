import{S as a}from"./index-D0ZpzrAF.js";import"./jsx-runtime-C1KuNDNn.js";import"./iframe-DkAy6WyO.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectTrigger-CTOx-gAk.js";import"./styles-BEHD0UYf.js";import"./index-DRQy8aHD.js";import"./index-4p04giZs.js";import"./index-BdQq_4o_.js";import"./index-ClKGt4Qh.js";import"./index-D9Zfvkit.js";import"./index-bOEUjhnl.js";import"./index-NpaYJ5fk.js";import"./index-hMyOMP3u.js";import"./index-i5ZdiAKt.js";import"./index-0KB3Pdy9.js";import"./index-C78AUw0f.js";import"./index-BAEzaPZq.js";import"./index-DVKscggk.js";import"./index-Br-sXRfF.js";import"./index-BPjS6_f0.js";import"./index-C5GUsKTt.js";import"./index-Br9_lN7R.js";import"./index-Bs3OOSxM.js";import"./index-CgW07GQV.js";import"./chevron-down-DUTCpbDf.js";import"./createLucideIcon-DifMnpjQ.js";import"./check-DpoTVBME.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Forms/Select",component:a,tags:["autodocs"],args:{items:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],placeholder:"Select an option",position:"item-aligned",onValueChange:o("value change"),onOpenChange:o("open change")},argTypes:{disabled:{type:"boolean",description:"Whether the select is disabled."},items:{description:"List of items to select from.",table:{type:{summary:"SelectItemProps[]"}}},open:{type:"boolean",description:"Whether the select is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the select initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},placeholder:{description:"Placeholder text for the select.",control:"text",table:{type:{summary:"ReactNode"}}},position:{description:"Position of the select.",control:"select",options:["popper","item-aligned"]},value:{type:"string",description:"Controlled value of the select. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1}},defaultValue:{type:"string",description:"Sets the initial value of the select. Cannot be used with `value`!",if:{arg:"value",exists:!1}}}},e={},t={args:{items:{Group1:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],Group2:[{value:"4",label:"Four"},{value:"5",label:"Five"},{value:"6",label:"Six"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
