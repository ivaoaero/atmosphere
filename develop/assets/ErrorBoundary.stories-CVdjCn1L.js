import{E as t}from"./ErrorBoundary-BuYyiUPr.js";import"./jsx-runtime-BCSg91tD.js";import"./iframe-BfWqIy39.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qSvyO5Ac.js";import"./index-BnC4IWLr.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-CoaeUEX4.js";const l={title:"Feedback/ErrorBoundary",component:t,tags:["autodocs"],args:{debugMode:!1,error:new Error("This is a sample error")},argTypes:{debugMode:{description:"Show detailed error information",control:"boolean"},error:{description:"Error object to display when debugMode is true",control:"object"}}},r={},e={args:{debugMode:!0}},o={args:{debugMode:!0,error:new Error("Custom error for testing purposes")}},s={args:{debugMode:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{} satisfies Story",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    debugMode: true
  }
} satisfies Story`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    debugMode: true,
    error: new Error('Custom error for testing purposes')
  }
} satisfies Story`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    debugMode: false
  }
} satisfies Story`,...s.parameters?.docs?.source}}};const b=["Default","DebugMode","WithCustomError","ReloadAndClearActions"];export{e as DebugMode,r as Default,s as ReloadAndClearActions,o as WithCustomError,b as __namedExportsOrder,l as default};
