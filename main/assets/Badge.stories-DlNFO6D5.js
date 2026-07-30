import{i as e}from"./preload-helper-BdFrVu1K.js";import{n as t,t as n}from"./badge-lFKIv6K2.js";var r,i,a,o,s;e((()=>{t(),{action:r}=__STORYBOOK_MODULE_ACTIONS__,i={title:`DataDisplay/Badge`,component:n,tags:[`autodocs`],args:{text:`Badge Text`,size:`sm`,variant:`filled`,hasDot:!1,pill:!1},argTypes:{variant:{description:`Appearance variant of the badge.`,control:`select`,options:[`flat`,`filled`,`leaked`],table:{defaultValue:{summary:`filled`}}},color:{description:`Color of the badge.`,control:`select`,options:[`gray`,`red`,`yellow`,`orange`,`green`,`blue`,`indigo`,`purple`,`pink`],table:{defaultValue:{summary:`gray`}}},size:{description:`Size of the badge.`,control:`select`,options:[`sm`,`md`,`lg`],table:{defaultValue:{summary:`sm`}}},text:{description:`Text content of the badge.`,type:`string`},hasDot:{description:`Show a dot next to the badge text.`,type:`boolean`},pill:{description:`Display badge as a pill.`,type:`boolean`},removeCallback:{description:`Callback to display a remove button.`,control:`select`,options:[`yes`,`no`],mapping:{yes:r(`remove button clicked`),no:void 0}}}},a={args:{color:`gray`,removeCallback:void 0,hasDot:!0}},o={args:{color:`gray`,removeCallback:r(`remove button clicked`)}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    removeCallback: undefined,
    hasDot: true
  }
} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    removeCallback: action('remove button clicked')
  }
} satisfies Story`,...o.parameters?.docs?.source}}},s=[`Default`,`WithRemoveButton`]}))();export{a as Default,o as WithRemoveButton,s as __namedExportsOrder,i as default};