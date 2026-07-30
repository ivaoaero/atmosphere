import{i as e}from"./preload-helper-BdFrVu1K.js";import{n as t,t as n}from"./select-BsqC2mpF.js";var r,i,a,o,s;e((()=>{t(),{action:r}=__STORYBOOK_MODULE_ACTIONS__,i={title:`Forms/Select`,component:n,tags:[`autodocs`],args:{items:[{value:`1`,label:`One`},{value:`2`,label:`Two`},{value:`3`,label:`Three`}],placeholder:`Select an option`,position:`item-aligned`,onValueChange:r(`value change`),onOpenChange:r(`open change`)},argTypes:{disabled:{type:`boolean`,description:`Whether the select is disabled.`},items:{description:`List of items to select from.`,table:{type:{summary:`SelectItemProps[]`}}},open:{type:`boolean`,description:"Whether the select is open. Cannot be used with `defaultOpen`!",if:{arg:`defaultOpen`,exists:!1}},defaultOpen:{type:`boolean`,description:"Sets the select initially open. Cannot be used with `open`!",if:{arg:`open`,exists:!1}},placeholder:{description:`Placeholder text for the select.`,control:`text`,table:{type:{summary:`ReactNode`}}},position:{description:`Position of the select.`,control:`select`,options:[`popper`,`item-aligned`]},value:{type:`string`,description:"Controlled value of the select. Cannot be used with `defaultValue`!",if:{arg:`defaultValue`,exists:!1}},defaultValue:{type:`string`,description:"Sets the initial value of the select. Cannot be used with `value`!",if:{arg:`value`,exists:!1}}}},a={},o={args:{items:{Group1:[{value:`1`,label:`One`},{value:`2`,label:`Two`},{value:`3`,label:`Three`}],Group2:[{value:`4`,label:`Four`},{value:`5`,label:`Five`},{value:`6`,label:`Six`}]}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: {
      Group1: [{
        value: '1',
        label: 'One'
      }, {
        value: '2',
        label: 'Two'
      }, {
        value: '3',
        label: 'Three'
      }],
      Group2: [{
        value: '4',
        label: 'Four'
      }, {
        value: '5',
        label: 'Five'
      }, {
        value: '6',
        label: 'Six'
      }]
    }
  }
} satisfies Story`,...o.parameters?.docs?.source}}},s=[`Default`,`SelectListWithGroups`]}))();export{a as Default,o as SelectListWithGroups,s as __namedExportsOrder,i as default};