import{j as a}from"./jsx-runtime-C1KuNDNn.js";import{B as s}from"./index-CnVWWLAR.js";import{H as n}from"./index-DDbjGu17.js";import"./iframe-DkAy6WyO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-NpaYJ5fk.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-DifMnpjQ.js";import"./index-ClKGt4Qh.js";import"./index-bOEUjhnl.js";import"./index-Br9_lN7R.js";import"./index-Br-sXRfF.js";import"./index-DRQy8aHD.js";import"./index-4p04giZs.js";import"./index-0KB3Pdy9.js";import"./index-C78AUw0f.js";import"./index-BPjS6_f0.js";import"./index-G3SXhJbq.js";import"./index-i5ZdiAKt.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,A={title:"DataDisplay/HoverCard",component:n,tags:["autodocs"],args:{trigger:"Hover to open card",children:"Card content",onOpenChange:i("open change")},argTypes:{open:{type:"boolean",description:"Whether the card is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the card initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},triggerAsChild:{description:"Pass `asChild` prop to the trigger component.",type:"boolean"},openDelay:{description:"Delay in milliseconds before the card opens.",type:"number"},closeDelay:{description:"Delay in milliseconds before the card closes.",type:"number"},side:{control:"inline-radio",options:["top","right","bottom","left"],table:{type:{summary:"Side"}}},sideOffset:{type:"number",table:{type:{summary:"number"}}},align:{control:"inline-radio",options:["start","center","end"],table:{defaultValue:{summary:"center"},type:{summary:"Align"}}},alignOffset:{type:"number",table:{type:{summary:"number"}}}}},e={},r={args:{trigger:a.jsx(s,{children:"Hover here"}),triggerAsChild:!0}},t={args:{open:!0}},o={args:{defaultOpen:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Hover here</Button>,
    triggerAsChild: true
  }
} satisfies Story`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  }
} satisfies Story`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
} satisfies Story`,...o.parameters?.docs?.source}}};const T=["Default","WithButtonTrigger","ManagedState","DefaultOpen"];export{e as Default,o as DefaultOpen,t as ManagedState,r as WithButtonTrigger,T as __namedExportsOrder,A as default};
