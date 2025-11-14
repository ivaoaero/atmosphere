import{j as a}from"./jsx-runtime-owaHAHyT.js";import{C as c}from"./index-BVYkO_c2.js";import{L as i}from"./index-IESKUpWV.js";import"./iframe-CHCV3d-U.js";import"./preload-helper-PPVm8Dsz.js";import"./styles-BEHD0UYf.js";import"./check-Bq2R7Kvs.js";import"./createLucideIcon-BDY-CiKx.js";import"./index-NmTJeRio.js";import"./index-Cfcon1xl.js";import"./index-B7QXMb6g.js";import"./index-C2MICE2m.js";import"./index-584NzOS-.js";import"./index-Ndpq0Oxe.js";import"./index-BeUzu6fY.js";import"./index-xzYXHqRN.js";import"./index-DG78kEDc.js";import"./index-DBwva85G.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,T={title:"Forms/Checkbox",component:c,tags:["autodocs"],args:{onCheckedChange:d("checked change")},argTypes:{checked:{type:"boolean",description:"Toggles the checked state. Cannot be used with `defaultChecked`!",if:{arg:"defaultChecked",exists:!1},table:{defaultValue:{summary:"false",detail:"If both `checked` and `defaultChecked` are not set, the Switch wont be switched on."}}},defaultChecked:{type:"boolean",description:"Sets the initial checked state. Cannot be used with `checked`!",if:{arg:"checked",exists:!1},table:{defaultValue:{summary:"false",detail:"If both `defaultChecked` and `checked` are not set, the Switch wont be switched on."}}},required:{type:"boolean",table:{defaultValue:{summary:"false"}}}}},e={},t={args:{checked:!0}},r={decorators:(s,{args:{id:o}})=>a.jsxs("div",{className:"flex items-center gap-x-2",children:[a.jsx(s,{}),a.jsx(i,{htmlFor:o,children:"Test"})]}),args:{id:"test"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
} satisfies Story`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: (Story, {
    args: {
      id
    }
  }) => <div className={'flex items-center gap-x-2'}>
      <Story />
      <Label htmlFor={id}>Test</Label>
    </div>,
  args: {
    id: 'test'
  }
} satisfies Story`,...r.parameters?.docs?.source}}};const j=["Uncontrolled","Controlled","WithLabel"];export{t as Controlled,e as Uncontrolled,r as WithLabel,j as __namedExportsOrder,T as default};
