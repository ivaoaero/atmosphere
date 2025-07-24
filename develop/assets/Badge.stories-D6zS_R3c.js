import{a as n}from"./index-B-lxVbXh.js";import{B as c}from"./index-u889sD_V.js";import"./v4-CtRu48qb.js";import"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";import"./styles-Dj5kSLHa.js";import"./index-BywojM7u.js";import"./x-vRIRpOA3.js";import"./createLucideIcon-B1d7gGsx.js";const h={title:"Components/Badge",component:c,tags:["autodocs"],args:{text:"Badge Text",size:"sm",variant:"filled",hasDot:!1,pill:!1},argTypes:{variant:{description:"Appearance variant of the badge.",control:"select",options:["flat","filled","leaked"],table:{defaultValue:{summary:"filled"}}},color:{description:"Color of the badge.",control:"select",options:["gray","red","yellow","orange","green","blue","indigo","purple","pink"],table:{defaultValue:{summary:"gray"}}},size:{description:"Size of the badge.",control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"sm"}}},text:{description:"Text content of the badge.",type:"string"},hasDot:{description:"Show a dot next to the badge text.",type:"boolean"},pill:{description:"Display badge as a pill.",type:"boolean"},removeCallback:{description:"Callback to display a remove button.",control:"select",options:["yes","no"],mapping:{yes:n("remove button clicked"),no:void 0}}}},e={args:{color:"gray",removeCallback:void 0,hasDot:!0}},o={args:{color:"gray",removeCallback:n("remove button clicked")}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    removeCallback: undefined,
    hasDot: true
  }
} satisfies Story`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,l,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    removeCallback: action('remove button clicked')
  }
} satisfies Story`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const k=["Default","WithRemoveButton"];export{e as Default,o as WithRemoveButton,k as __namedExportsOrder,h as default};
