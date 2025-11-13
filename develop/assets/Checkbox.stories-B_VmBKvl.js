import{j as a}from"./jsx-runtime-CnF9G3Hy.js";import{C as c}from"./index-UAnlr1yz.js";import{L as i}from"./index-BQLxr_c5.js";import"./iframe-CNXeHHJ5.js";import"./preload-helper-PPVm8Dsz.js";import"./styles-BEHD0UYf.js";import"./check-CvcP_tvC.js";import"./createLucideIcon-CjWZbxcw.js";import"./index-CrBb1Ttm.js";import"./index-DKHLc6yE.js";import"./index-C-vxIjR4.js";import"./index-CcGK-g_W.js";import"./index-OMduagO4.js";import"./index-CDc-hsS9.js";import"./index-DZNJfbyl.js";import"./index-BfmfXS-9.js";import"./index-Jqs9KCcc.js";import"./index-BUOsLt6b.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,T={title:"Forms/Checkbox",component:c,tags:["autodocs"],args:{onCheckedChange:d("checked change")},argTypes:{checked:{type:"boolean",description:"Toggles the checked state. Cannot be used with `defaultChecked`!",if:{arg:"defaultChecked",exists:!1},table:{defaultValue:{summary:"false",detail:"If both `checked` and `defaultChecked` are not set, the Switch wont be switched on."}}},defaultChecked:{type:"boolean",description:"Sets the initial checked state. Cannot be used with `checked`!",if:{arg:"checked",exists:!1},table:{defaultValue:{summary:"false",detail:"If both `defaultChecked` and `checked` are not set, the Switch wont be switched on."}}},required:{type:"boolean",table:{defaultValue:{summary:"false"}}}}},e={},t={args:{checked:!0}},r={decorators:(s,{args:{id:o}})=>a.jsxs("div",{className:"flex items-center gap-x-2",children:[a.jsx(s,{}),a.jsx(i,{htmlFor:o,children:"Test"})]}),args:{id:"test"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
