import{j as a}from"./jsx-runtime-f8QT0vQX.js";import{C as c}from"./index-DpwCqR0A.js";import{L as i}from"./index-BwCbOssj.js";import"./iframe-C6ATIw1n.js";import"./preload-helper-PPVm8Dsz.js";import"./styles-BEHD0UYf.js";import"./check-b_f_Ut68.js";import"./createLucideIcon-CcUF0qy_.js";import"./index-WbAbiluB.js";import"./index-Dils7Wnr.js";import"./index-DNSeyj-m.js";import"./index-CS7hBh4Q.js";import"./index-Ci96GbNg.js";import"./index-BttPnxrE.js";import"./index-D6KCcWP7.js";import"./index-B9ty0KEc.js";import"./index-B9gmC9Pm.js";import"./index-B09Xo6RP.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,T={title:"Forms/Checkbox",component:c,tags:["autodocs"],args:{onCheckedChange:d("checked change")},argTypes:{checked:{type:"boolean",description:"Toggles the checked state. Cannot be used with `defaultChecked`!",if:{arg:"defaultChecked",exists:!1},table:{defaultValue:{summary:"false",detail:"If both `checked` and `defaultChecked` are not set, the Switch wont be switched on."}}},defaultChecked:{type:"boolean",description:"Sets the initial checked state. Cannot be used with `checked`!",if:{arg:"checked",exists:!1},table:{defaultValue:{summary:"false",detail:"If both `defaultChecked` and `checked` are not set, the Switch wont be switched on."}}},required:{type:"boolean",table:{defaultValue:{summary:"false"}}}}},e={},t={args:{checked:!0}},r={decorators:(s,{args:{id:o}})=>a.jsxs("div",{className:"flex items-center gap-x-2",children:[a.jsx(s,{}),a.jsx(i,{htmlFor:o,children:"Test"})]}),args:{id:"test"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
