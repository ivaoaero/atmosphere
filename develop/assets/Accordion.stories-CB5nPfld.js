import{A as a}from"./index-5KxvmGuD.js";import"./jsx-runtime-owaHAHyT.js";import"./iframe-CHCV3d-U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cfcon1xl.js";import"./index-BIYs1ILr.js";import"./index-NmTJeRio.js";import"./index-B7QXMb6g.js";import"./index-C2MICE2m.js";import"./index-xzYXHqRN.js";import"./index-DG78kEDc.js";import"./index-DBwva85G.js";import"./index-DxgWi4Ca.js";import"./index-BeUzu6fY.js";import"./index-CW-2hsFF.js";import"./index-CbuI_Zls.js";import"./styles-BEHD0UYf.js";import"./chevron-down-9thgXZil.js";import"./createLucideIcon-BDY-CiKx.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,D={title:"DataDisplay/Accordion",component:a,tags:["autodocs"],args:{type:"single",collapsible:!0,items:[{value:"1",trigger:"Accordion Trigger 1",children:"Accordion Content 1"},{value:"2",trigger:"Accordion Trigger 2",children:"Accordion Content 2"}],onValueChange:s("value change")},argTypes:{value:{type:"string",description:"Controls the value. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1},table:{type:{summary:"string | string[]"}}},defaultValue:{type:"string",description:"Sets the initial value. Cannot be used with `value`!",if:{arg:"value",exists:!1},table:{type:{summary:"string | string[]"}}},type:{description:"Type of the accordion.",control:"inline-radio",options:["single","multiple"]},collapsible:{description:"Whether the accordion is collapsible. Only works with `type`: `single`.",if:{arg:"type",eq:"single"}},disabled:{type:"boolean"}}},e={},t={args:{collapsible:!1}},r={args:{type:"multiple"}},o={args:{defaultValue:"2"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: false
  }
} satisfies Story`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  }
} satisfies Story`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '2'
  }
} satisfies Story`,...o.parameters?.docs?.source}}};const T=["Default","NotCollapsible","Multiple","DefaultOpen"];export{e as Default,o as DefaultOpen,r as Multiple,t as NotCollapsible,T as __namedExportsOrder,D as default};
