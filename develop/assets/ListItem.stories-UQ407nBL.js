import{j as e}from"./jsx-runtime-NE_zcNN2.js";import{B as d}from"./index-yGvIaMHq.js";import{L as g}from"./index-CKiks_uY.js";import{c as u}from"./createLucideIcon-DKmRA99u.js";import{S as y}from"./settings-2-DsZLpYHn.js";import"./iframe-Ch1q1C1w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAUJLRXY.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./index-CHwMff1q.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]],p=u("cloud-download",h);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],I=u("plane",f),S="https://virtualsky.ivao.aero/content/images/size/w300/2022/01/183607355_10159966568413689_568014047533682934_n.png",z={title:"DataDisplay/Lists/ListItem",component:g,tags:["autodocs"],parameters:{docs:{description:{component:"The ListItem component is used to display a list item with an optional image and icon. It can also contain actions like buttons. It must be used inside a `<ul>`."}}},args:{title:"List Item",description:"This is a list item",imageSrc:S},argTypes:{children:{control:"object",table:{type:{summary:"ReactNode"},category:"Actions"}},title:{control:"text",table:{type:{summary:"string"},category:"Content"}},description:{control:"text",table:{type:{summary:"string"},category:"Content"}},isLoading:{control:"boolean",table:{type:{summary:"boolean"},category:"Content"}},headingLevel:{control:"select",options:[1,2,3,4,5,6],table:{type:{summary:"1 | 2 | 3 | 4 | 5 | 6"},category:"Content"}},"aria-label":{control:"text",table:{type:{summary:"string"},category:"Content"}},onClick:{control:"object",table:{type:{summary:"() => void",detail:"When using onClick, `children` won't render as the link will take precedence."},category:"Actions"}},href:{control:"text",table:{type:{summary:"string",detail:"When using href, `children` won't render as the link will take precedence."},category:"Actions"}},Icon:{control:"object",table:{type:{summary:"ReactNode",detail:"LucideIcon"},category:"Icon"}},iconAriaLabel:{control:"text",table:{type:{summary:"string"},category:"Icon"}},imageSrc:{control:"text",table:{type:{summary:"string"},category:"Image"}},imageAlt:{control:"text",table:{type:{summary:"string"},category:"Image"}}}},t={},a={args:{description:void 0}},r={args:{imageSrc:void 0,Icon:void 0}},s={args:{imageSrc:void 0,Icon:I}},o={args:{isLoading:!0}},n={args:{isLoading:!0,children:e.jsxs(d,{variant:"secondary",children:["Install",e.jsx(p,{className:"size-4"})]})}},i={args:{children:e.jsxs(d,{variant:"secondary",children:["Install",e.jsx(p,{className:"size-4"})]})}},c={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(d,{variant:"outline",children:["Configure",e.jsx(y,{className:"size-4"})]}),e.jsxs(d,{variant:"secondary",children:["Install",e.jsx(p,{className:"size-4"})]})]})}},l={args:{onClick:()=>alert("List item clicked")}},m={args:{href:"https://ivao.aero"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{} satisfies Story",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
} satisfies Story`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    Icon: undefined
  }
} satisfies Story`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    Icon: Plane
  }
} satisfies Story`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
} satisfies Story`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: <Button variant={'secondary'}>
        Install
        <CloudDownload className="size-4" />
      </Button>
  }
} satisfies Story`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button variant={'secondary'}>
        Install
        <CloudDownload className="size-4" />
      </Button>
  }
} satisfies Story`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Button variant={'outline'}>
          Configure
          <Settings2 className="size-4" />
        </Button>
        <Button variant={'secondary'}>
          Install
          <CloudDownload className="size-4" />
        </Button>
      </>
  }
} satisfies Story`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: () => alert('List item clicked')
  }
} satisfies Story`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://ivao.aero'
  }
} satisfies Story`,...m.parameters?.docs?.source}}};const B=["Default","WithoutDescription","WithOutImageOrIcon","WithIcon","Loading","LoadingWithAction","WithAction","WithPrimaryAndSecondaryAction","InteractiveOnClick","InteractiveHref"];export{t as Default,m as InteractiveHref,l as InteractiveOnClick,o as Loading,n as LoadingWithAction,i as WithAction,s as WithIcon,r as WithOutImageOrIcon,c as WithPrimaryAndSecondaryAction,a as WithoutDescription,B as __namedExportsOrder,z as default};
