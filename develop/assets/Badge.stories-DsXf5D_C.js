import{B as a}from"./index-CCrYrFWS.js";import"./jsx-runtime-CWiLgGS-.js";import"./iframe-PTouGSG2.js";import"./preload-helper-PPVm8Dsz.js";import"./styles-BEHD0UYf.js";import"./index-CcvLvwC_.js";import"./x-BvFN0My8.js";import"./createLucideIcon-iOmhHyUN.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m={title:"DataDisplay/Badge",component:a,tags:["autodocs"],args:{text:"Badge Text",size:"sm",variant:"filled",hasDot:!1,pill:!1},argTypes:{variant:{description:"Appearance variant of the badge.",control:"select",options:["flat","filled","leaked"],table:{defaultValue:{summary:"filled"}}},color:{description:"Color of the badge.",control:"select",options:["gray","red","yellow","orange","green","blue","indigo","purple","pink"],table:{defaultValue:{summary:"gray"}}},size:{description:"Size of the badge.",control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"sm"}}},text:{description:"Text content of the badge.",type:"string"},hasDot:{description:"Show a dot next to the badge text.",type:"boolean"},pill:{description:"Display badge as a pill.",type:"boolean"},removeCallback:{description:"Callback to display a remove button.",control:"select",options:["yes","no"],mapping:{yes:t("remove button clicked"),no:void 0}}}},e={args:{color:"gray",removeCallback:void 0,hasDot:!0}},o={args:{color:"gray",removeCallback:t("remove button clicked")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    removeCallback: undefined,
    hasDot: true
  }
} satisfies Story`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    removeCallback: action('remove button clicked')
  }
} satisfies Story`,...o.parameters?.docs?.source}}};const g=["Default","WithRemoveButton"];export{e as Default,o as WithRemoveButton,g as __namedExportsOrder,m as default};
