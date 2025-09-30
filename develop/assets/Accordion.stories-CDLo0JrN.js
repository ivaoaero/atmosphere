import{A as a}from"./index-tuiazMo8.js";import"./jsx-runtime-CWiLgGS-.js";import"./iframe-PTouGSG2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bu9kImAK.js";import"./index-CDjHoBoA.js";import"./index-B6CMjPc4.js";import"./index-CYKnLJBP.js";import"./index-DaGoSj6W.js";import"./index-CBN5Rm-y.js";import"./index-B1HdJkhw.js";import"./index-C_c03BiG.js";import"./index-BYNbKP5Y.js";import"./index-CpYGGnvL.js";import"./index-CL7KZ0S3.js";import"./index-DfVyEKx-.js";import"./styles-BEHD0UYf.js";import"./chevron-down-Bzdo5Yp4.js";import"./createLucideIcon-iOmhHyUN.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,D={title:"DataDisplay/Accordion",component:a,tags:["autodocs"],args:{type:"single",collapsible:!0,items:[{value:"1",trigger:"Accordion Trigger 1",children:"Accordion Content 1"},{value:"2",trigger:"Accordion Trigger 2",children:"Accordion Content 2"}],onValueChange:s("value change")},argTypes:{value:{type:"string",description:"Controls the value. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1},table:{type:{summary:"string | string[]"}}},defaultValue:{type:"string",description:"Sets the initial value. Cannot be used with `value`!",if:{arg:"value",exists:!1},table:{type:{summary:"string | string[]"}}},type:{description:"Type of the accordion.",control:"inline-radio",options:["single","multiple"]},collapsible:{description:"Whether the accordion is collapsible. Only works with `type`: `single`.",if:{arg:"type",eq:"single"}},disabled:{type:"boolean"}}},e={},t={args:{collapsible:!1}},r={args:{type:"multiple"}},o={args:{defaultValue:"2"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
