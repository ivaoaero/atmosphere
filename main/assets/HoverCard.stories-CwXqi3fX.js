import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./button-BzExgH7W.js";import{n as i,t as a}from"./hover-card-DOfzJr1n.js";var o,s,c,l,u,d,f,p;e((()=>{n(),i(),o=t(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`DataDisplay/HoverCard`,component:a,tags:[`autodocs`],args:{trigger:`Hover to open card`,children:`Card content`,onOpenChange:s(`open change`)},argTypes:{open:{type:`boolean`,description:"Whether the card is open. Cannot be used with `defaultOpen`!",if:{arg:`defaultOpen`,exists:!1}},defaultOpen:{type:`boolean`,description:"Sets the card initially open. Cannot be used with `open`!",if:{arg:`open`,exists:!1}},triggerAsChild:{description:"Pass `asChild` prop to the trigger component.",type:`boolean`},openDelay:{description:`Delay in milliseconds before the card opens.`,type:`number`},closeDelay:{description:`Delay in milliseconds before the card closes.`,type:`number`},side:{control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`Side`}}},sideOffset:{type:`number`,table:{type:{summary:`number`}}},align:{control:`inline-radio`,options:[`start`,`center`,`end`],table:{defaultValue:{summary:`center`},type:{summary:`Align`}}},alignOffset:{type:`number`,table:{type:{summary:`number`}}}}},l={},u={args:{trigger:(0,o.jsx)(r,{children:`Hover here`}),triggerAsChild:!0}},d={args:{open:!0}},f={args:{defaultOpen:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Hover here</Button>,
    triggerAsChild: true
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p=[`Default`,`WithButtonTrigger`,`ManagedState`,`DefaultOpen`]}))();export{l as Default,f as DefaultOpen,d as ManagedState,u as WithButtonTrigger,p as __namedExportsOrder,c as default};