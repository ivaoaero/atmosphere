import{A as a}from"./index-DLxSDql8.js";import"./jsx-runtime-NE_zcNN2.js";import"./iframe-Ch1q1C1w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SkCWWcZv.js";import"./index-4CjaotZF.js";import"./index-CAUJLRXY.js";import"./index-CgZagMB8.js";import"./index-Cszns1R9.js";import"./index-CVolwxKW.js";import"./index-8BNAociu.js";import"./index-B8L5zJfB.js";import"./index-Br-vWqte.js";import"./index-CSIhAl52.js";import"./index-BySSxp3b.js";import"./index-C_YfdT_g.js";import"./styles-BEHD0UYf.js";import"./chevron-down-DQllg31q.js";import"./createLucideIcon-DKmRA99u.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,D={title:"DataDisplay/Accordion",component:a,tags:["autodocs"],args:{type:"single",collapsible:!0,items:[{value:"1",trigger:"Accordion Trigger 1",children:"Accordion Content 1"},{value:"2",trigger:"Accordion Trigger 2",children:"Accordion Content 2"}],onValueChange:s("value change")},argTypes:{value:{type:"string",description:"Controls the value. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1},table:{type:{summary:"string | string[]"}}},defaultValue:{type:"string",description:"Sets the initial value. Cannot be used with `value`!",if:{arg:"value",exists:!1},table:{type:{summary:"string | string[]"}}},type:{description:"Type of the accordion.",control:"inline-radio",options:["single","multiple"]},collapsible:{description:"Whether the accordion is collapsible. Only works with `type`: `single`.",if:{arg:"type",eq:"single"}},disabled:{type:"boolean"}}},e={},t={args:{collapsible:!1}},r={args:{type:"multiple"}},o={args:{defaultValue:"2"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
