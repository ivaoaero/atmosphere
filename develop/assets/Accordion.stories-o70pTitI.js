import{A as a}from"./index-DZ2Dlx-W.js";import"./jsx-runtime-CnF9G3Hy.js";import"./iframe-CNXeHHJ5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKHLc6yE.js";import"./index-D1HDEqKX.js";import"./index-CrBb1Ttm.js";import"./index-C-vxIjR4.js";import"./index-CcGK-g_W.js";import"./index-BfmfXS-9.js";import"./index-Jqs9KCcc.js";import"./index-BUOsLt6b.js";import"./index-kSEaVwhj.js";import"./index-DZNJfbyl.js";import"./index-BObOZZm2.js";import"./index-B0WzovbP.js";import"./styles-BEHD0UYf.js";import"./chevron-down-DSL2GJZq.js";import"./createLucideIcon-CjWZbxcw.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,D={title:"DataDisplay/Accordion",component:a,tags:["autodocs"],args:{type:"single",collapsible:!0,items:[{value:"1",trigger:"Accordion Trigger 1",children:"Accordion Content 1"},{value:"2",trigger:"Accordion Trigger 2",children:"Accordion Content 2"}],onValueChange:s("value change")},argTypes:{value:{type:"string",description:"Controls the value. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1},table:{type:{summary:"string | string[]"}}},defaultValue:{type:"string",description:"Sets the initial value. Cannot be used with `value`!",if:{arg:"value",exists:!1},table:{type:{summary:"string | string[]"}}},type:{description:"Type of the accordion.",control:"inline-radio",options:["single","multiple"]},collapsible:{description:"Whether the accordion is collapsible. Only works with `type`: `single`.",if:{arg:"type",eq:"single"}},disabled:{type:"boolean"}}},e={},t={args:{collapsible:!1}},r={args:{type:"multiple"}},o={args:{defaultValue:"2"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
