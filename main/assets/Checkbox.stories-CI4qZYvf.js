import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./checkbox-CRTtHjyN.js";import{n as i,t as a}from"./label-Cmb5xL33.js";var o,s,c,l,u,d,f;e((()=>{n(),i(),o=t(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Forms/Checkbox`,component:r,tags:[`autodocs`],args:{onCheckedChange:s(`checked change`)},argTypes:{checked:{type:`boolean`,description:"Toggles the checked state. Cannot be used with `defaultChecked`!",if:{arg:`defaultChecked`,exists:!1},table:{defaultValue:{summary:`false`,detail:"If both `checked` and `defaultChecked` are not set, the Switch wont be switched on."}}},defaultChecked:{type:`boolean`,description:"Sets the initial checked state. Cannot be used with `checked`!",if:{arg:`checked`,exists:!1},table:{defaultValue:{summary:`false`,detail:"If both `defaultChecked` and `checked` are not set, the Switch wont be switched on."}}},required:{type:`boolean`,table:{defaultValue:{summary:`false`}}}}},l={},u={args:{checked:!0}},d={decorators:(e,{args:{id:t}})=>(0,o.jsxs)(`div`,{className:`flex items-center gap-x-2`,children:[(0,o.jsx)(e,{}),(0,o.jsx)(a,{htmlFor:t,children:`Test`})]}),args:{id:`test`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}},f=[`Uncontrolled`,`Controlled`,`WithLabel`]}))();export{u as Controlled,l as Uncontrolled,d as WithLabel,f as __namedExportsOrder,c as default};