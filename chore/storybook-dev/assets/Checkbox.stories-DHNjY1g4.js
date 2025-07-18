import{j as a}from"./jsx-runtime-DiklIkkE.js";import{a as f}from"./index-B-lxVbXh.js";import{C as g}from"./index-BVtUfJ2Q.js";import{L as b}from"./index-CIh2jDKv.js";import"./index-DRjF_FHU.js";import"./v4-CtRu48qb.js";import"./styles-CytzSlOG.js";import"./check-BqfYG0dR.js";import"./createLucideIcon-B1d7gGsx.js";import"./index-zZ8-XE7G.js";import"./index-DRtXj63t.js";import"./index-DNjz5F53.js";import"./index-CB2Ck3t8.js";import"./index-Iz9Zo_Nw.js";import"./index-Dd68SkXN.js";import"./index-DSPJRkee.js";import"./index-CVyrcOig.js";import"./index-BHDKhPUC.js";import"./index-DHHUZ-3A.js";const O={title:"Components/Inputs/Checkbox",component:g,tags:["autodocs"],args:{onCheckedChange:f("checked change")},argTypes:{checked:{type:"boolean",description:"Toggles the checked state. Cannot be used with `defaultChecked`!",if:{arg:"defaultChecked",exists:!1},table:{defaultValue:{summary:"false",detail:"If both `checked` and `defaultChecked` are not set, the Switch wont be switched on."}}},defaultChecked:{type:"boolean",description:"Sets the initial checked state. Cannot be used with `checked`!",if:{arg:"checked",exists:!1},table:{defaultValue:{summary:"false",detail:"If both `defaultChecked` and `checked` are not set, the Switch wont be switched on."}}},required:{type:"boolean",table:{defaultValue:{summary:"false"}}}}},e={},t={args:{checked:!0}},r={decorators:(h,{args:{id:u}})=>a.jsxs("div",{className:"flex items-center gap-x-2",children:[a.jsx(h,{}),a.jsx(b,{htmlFor:u,children:"Test"})]}),args:{id:"test"}};var s,o,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{} satisfies Story",...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,d,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    checked: true
  }
} satisfies Story`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  decorators: (Story, {
    args: {
      id
    }
  }) => <div className={'flex items-center gap-x-2'}>
      <Story />
      <Label htmlFor={id}>Test</Label>
    </div>,
  args: {
    id: 'test'
  }
} satisfies Story`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const R=["Uncontrolled","Controlled","WithLabel"];export{t as Controlled,e as Uncontrolled,r as WithLabel,R as __namedExportsOrder,O as default};
