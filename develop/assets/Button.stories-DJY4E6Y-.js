import{j as c}from"./jsx-runtime-D02XIDed.js";import{B as m}from"./index-BgrIROma.js";import{C as d}from"./check-1fl_7TyF.js";import"./iframe-D8I3vx8i.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAn-yHzd.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-CK1sR-k_.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,C={title:"General/Button/Button",component:m,tags:["autodocs"],args:{children:"Send",size:"md",variant:"primary",disabled:!1,onClick:l("clicked")},argTypes:{children:{description:"Content of the button.",control:"text",table:{type:{summary:"ReactNode"}}},variant:{description:"Appearance variant of the button.",control:"select",options:["primary","secondary","outline","destructive","ghost","link"],table:{defaultValue:{summary:"primary"}}},size:{description:"Size of the button.",control:"select",options:["sm","md","lg","icon"],table:{defaultValue:{summary:"md"}}},disabled:{description:"Whether the button is disabled.",control:"boolean"},asChild:{control:!1,description:'Apply all the button styles to a child element. Useful to avoid "Button in Button" situations'}}},r={name:"Primary",args:{variant:"primary"}},e={name:"Primary as Child",args:{variant:"primary",size:"md",asChild:!0,children:c.jsx("a",{href:"https://ivao.aero",rel:"noreferrer",target:"_blank",children:"Go to IVAO Website"})}},a={args:{variant:"secondary"}},s={args:{variant:"outline"}},t={args:{variant:"destructive"}},o={args:{variant:"ghost"}},i={args:{variant:"link"}},n={args:{size:"icon",children:c.jsx(d,{})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    variant: 'primary'
  }
} satisfies Story`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Primary as Child',
  args: {
    variant: 'primary',
    size: 'md',
    asChild: true,
    children: <a href="https://ivao.aero" rel="noreferrer" target="_blank">
        Go to IVAO Website
      </a>
  }
} satisfies Story`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
} satisfies Story`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
} satisfies Story`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  }
} satisfies Story`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
} satisfies Story`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link'
  }
} satisfies Story`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    children: <Check />
  }
} satisfies Story`,...n.parameters?.docs?.source}}};const k=["Primary","PrimaryAsChild","Secondary","Outline","Destructive","Ghost","Link","Icon"];export{t as Destructive,o as Ghost,n as Icon,i as Link,s as Outline,r as Primary,e as PrimaryAsChild,a as Secondary,k as __namedExportsOrder,C as default};
