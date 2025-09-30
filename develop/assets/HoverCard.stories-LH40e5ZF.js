import{j as a}from"./jsx-runtime-CWiLgGS-.js";import{B as s}from"./index-fne6WJNb.js";import{H as n}from"./index-BzAwCNA6.js";import"./iframe-PTouGSG2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B6CMjPc4.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-iOmhHyUN.js";import"./index-CYKnLJBP.js";import"./index-Bu9kImAK.js";import"./index-DaGoSj6W.js";import"./index-DGhn_zaE.js";import"./index-B1HdJkhw.js";import"./index-C_c03BiG.js";import"./index-CBN5Rm-y.js";import"./index-UhdEPief.js";import"./index-2ZAYDePd.js";import"./index-CpYGGnvL.js";import"./index-BFBoJLAE.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,A={title:"DataDisplay/HoverCard",component:n,tags:["autodocs"],args:{trigger:"Hover to open card",children:"Card content",onOpenChange:i("open change")},argTypes:{open:{type:"boolean",description:"Whether the card is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the card initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},triggerAsChild:{description:"Pass `asChild` prop to the trigger component.",type:"boolean"},openDelay:{description:"Delay in milliseconds before the card opens.",type:"number"},closeDelay:{description:"Delay in milliseconds before the card closes.",type:"number"},side:{control:"inline-radio",options:["top","right","bottom","left"],table:{type:{summary:"Side"}}},sideOffset:{type:"number",table:{type:{summary:"number"}}},align:{control:"inline-radio",options:["start","center","end"],table:{defaultValue:{summary:"center"},type:{summary:"Align"}}},alignOffset:{type:"number",table:{type:{summary:"number"}}}}},e={},r={args:{trigger:a.jsx(s,{children:"Hover here"}),triggerAsChild:!0}},t={args:{open:!0}},o={args:{defaultOpen:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
