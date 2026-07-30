import{i as e}from"./preload-helper-BdFrVu1K.js";import{n as t,t as n}from"./accordion-CMv29PA0.js";var r,i,a,o,s,c,l;e((()=>{t(),{action:r}=__STORYBOOK_MODULE_ACTIONS__,i={title:`DataDisplay/Accordion`,component:n,tags:[`autodocs`],args:{type:`single`,collapsible:!0,items:[{value:`1`,trigger:`Accordion Trigger 1`,children:`Accordion Content 1`},{value:`2`,trigger:`Accordion Trigger 2`,children:`Accordion Content 2`}],onValueChange:r(`value change`)},argTypes:{value:{type:`string`,description:"Controls the value. Cannot be used with `defaultValue`!",if:{arg:`defaultValue`,exists:!1},table:{type:{summary:`string | string[]`}}},defaultValue:{type:`string`,description:"Sets the initial value. Cannot be used with `value`!",if:{arg:`value`,exists:!1},table:{type:{summary:`string | string[]`}}},type:{description:`Type of the accordion.`,control:`inline-radio`,options:[`single`,`multiple`]},collapsible:{description:"Whether the accordion is collapsible. Only works with `type`: `single`.",if:{arg:`type`,eq:`single`}},disabled:{type:`boolean`}}},a={},o={args:{collapsible:!1}},s={args:{type:`multiple`}},c={args:{defaultValue:`2`}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: false
  }
} satisfies Story`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  }
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '2'
  }
} satisfies Story`,...c.parameters?.docs?.source}}},l=[`Default`,`NotCollapsible`,`Multiple`,`DefaultOpen`]}))();export{a as Default,c as DefaultOpen,s as Multiple,o as NotCollapsible,l as __namedExportsOrder,i as default};