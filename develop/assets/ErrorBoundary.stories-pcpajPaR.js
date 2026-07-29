import{i as e}from"./preload-helper-BdFrVu1K.js";import{n as t,t as n}from"./ErrorBoundary-NaL7C602.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`Feedback/ErrorBoundary`,component:n,tags:[`autodocs`],args:{debugMode:!1,error:Error(`This is a sample error`)},argTypes:{debugMode:{description:`Show detailed error information`,control:`boolean`},error:{description:`Error object to display when debugMode is true`,control:`object`}}},i={},a={args:{debugMode:!0}},o={args:{debugMode:!0,error:Error(`Custom error for testing purposes`)}},s={args:{debugMode:!1}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{} satisfies Story`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    debugMode: true
  }
} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    debugMode: true,
    error: new Error('Custom error for testing purposes')
  }
} satisfies Story`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    debugMode: false
  }
} satisfies Story`,...s.parameters?.docs?.source}}},c=[`Default`,`DebugMode`,`WithCustomError`,`ReloadAndClearActions`]}))();export{a as DebugMode,i as Default,s as ReloadAndClearActions,o as WithCustomError,c as __namedExportsOrder,r as default};