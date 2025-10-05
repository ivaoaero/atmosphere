import{j as a}from"./jsx-runtime-NE_zcNN2.js";import{C as c}from"./index-3pAqbODM.js";import{L as i}from"./index-DjaOyhTB.js";import"./iframe-Ch1q1C1w.js";import"./preload-helper-PPVm8Dsz.js";import"./styles-BEHD0UYf.js";import"./check-CbhTweN9.js";import"./createLucideIcon-DKmRA99u.js";import"./index-CAUJLRXY.js";import"./index-SkCWWcZv.js";import"./index-CgZagMB8.js";import"./index-Cszns1R9.js";import"./index-CrzjBVB-.js";import"./index-WokkxWKH.js";import"./index-CSIhAl52.js";import"./index-CVolwxKW.js";import"./index-8BNAociu.js";import"./index-B8L5zJfB.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,T={title:"Forms/Checkbox",component:c,tags:["autodocs"],args:{onCheckedChange:d("checked change")},argTypes:{checked:{type:"boolean",description:"Toggles the checked state. Cannot be used with `defaultChecked`!",if:{arg:"defaultChecked",exists:!1},table:{defaultValue:{summary:"false",detail:"If both `checked` and `defaultChecked` are not set, the Switch wont be switched on."}}},defaultChecked:{type:"boolean",description:"Sets the initial checked state. Cannot be used with `checked`!",if:{arg:"checked",exists:!1},table:{defaultValue:{summary:"false",detail:"If both `defaultChecked` and `checked` are not set, the Switch wont be switched on."}}},required:{type:"boolean",table:{defaultValue:{summary:"false"}}}}},e={},t={args:{checked:!0}},r={decorators:(s,{args:{id:o}})=>a.jsxs("div",{className:"flex items-center gap-x-2",children:[a.jsx(s,{}),a.jsx(i,{htmlFor:o,children:"Test"})]}),args:{id:"test"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
