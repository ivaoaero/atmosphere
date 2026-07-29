import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{Et as n,t as r}from"./lucide-react-CLyxYqYY.js";import{n as i,t as a}from"./button-2QH7dBAV.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{r(),i(),o=t(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`General/Button/Button`,component:a,tags:[`autodocs`],args:{children:`Send`,size:`md`,variant:`primary`,disabled:!1,onClick:s(`clicked`)},argTypes:{children:{description:`Content of the button.`,control:`text`,table:{type:{summary:`ReactNode`}}},variant:{description:`Appearance variant of the button.`,control:`select`,options:[`primary`,`secondary`,`outline`,`destructive`,`ghost`,`link`],table:{defaultValue:{summary:`primary`}}},size:{description:`Size of the button.`,control:`select`,options:[`sm`,`md`,`lg`,`icon`],table:{defaultValue:{summary:`md`}}},disabled:{description:`Whether the button is disabled.`,control:`boolean`},asChild:{control:!1,description:`Apply all the button styles to a child element. Useful to avoid "Button in Button" situations`}}},l={name:`Primary`,args:{variant:`primary`}},u={name:`Primary as Child`,args:{variant:`primary`,size:`md`,asChild:!0,children:(0,o.jsx)(`a`,{href:`https://ivao.aero`,rel:`noreferrer`,target:`_blank`,children:`Go to IVAO Website`})}},d={args:{variant:`secondary`}},f={args:{variant:`outline`}},p={args:{variant:`destructive`}},m={args:{variant:`ghost`}},h={args:{variant:`link`}},g={args:{size:`icon`,children:(0,o.jsx)(n,{})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    variant: 'primary'
  }
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Primary as Child',
  args: {
    variant: 'primary',
    size: 'md',
    asChild: true,
    children: <a href="https://ivao.aero" rel="noreferrer" target="_blank">
        Go to IVAO Website
      </a>
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  }
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link'
  }
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    children: <Check />
  }
} satisfies Story`,...g.parameters?.docs?.source}}},_=[`Primary`,`PrimaryAsChild`,`Secondary`,`Outline`,`Destructive`,`Ghost`,`Link`,`Icon`]}))();export{p as Destructive,m as Ghost,g as Icon,h as Link,f as Outline,l as Primary,u as PrimaryAsChild,d as Secondary,_ as __namedExportsOrder,c as default};