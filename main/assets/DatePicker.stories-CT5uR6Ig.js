import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./button-BzExgH7W.js";import{n as i,t as a}from"./date-picker-9NCkhgXk.js";var o,s,c,l,u,d,f,p;e((()=>{n(),i(),o=t(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Forms/DatePicker`,component:a,tags:[`autodocs`],args:{onSelect:s(`select`)},argTypes:{autoFocus:{type:`boolean`,description:"See the `@daypicker/react` for mor information on how to use this component. It is a visual wrapper around the `@daypicker/react` component."},onSelect:{action:`selected`},selected:{control:{type:`date`},table:{type:{summary:`Date`}}}}},l={},u={args:{selected:new Date}},d={args:{trigger:(0,o.jsx)(r,{children:`Custom Trigger`})}},f={args:{disabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    selected: new Date()
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Custom Trigger</Button>
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p=[`Default`,`DateSet`,`CustomTrigger`,`Disabled`]}))();export{d as CustomTrigger,u as DateSet,l as Default,f as Disabled,p as __namedExportsOrder,c as default};