import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{P as n,S as r,nt as i,t as a}from"./lucide-react-CLyxYqYY.js";import{n as o,t as s}from"./button-BzExgH7W.js";import{n as c,t as l}from"./list-item-CEqh70dC.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{a(),o(),c(),u=t(),d={title:`DataDisplay/Lists/ListItem`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"The ListItem component is used to display a list item with an optional image and icon. It can also contain actions like buttons. It must be used inside a `<ul>`."}}},args:{title:`List Item`,description:`This is a list item`,imageSrc:`https://virtualsky.ivao.aero/content/images/size/w300/2022/01/183607355_10159966568413689_568014047533682934_n.png`},argTypes:{children:{control:`object`,table:{type:{summary:`ReactNode`},category:`Actions`}},title:{control:`text`,table:{type:{summary:`string`},category:`Content`}},description:{control:`text`,table:{type:{summary:`string`},category:`Content`}},isLoading:{control:`boolean`,table:{type:{summary:`boolean`},category:`Content`}},headingLevel:{control:`select`,options:[1,2,3,4,5,6],table:{type:{summary:`1 | 2 | 3 | 4 | 5 | 6`},category:`Content`}},"aria-label":{control:`text`,table:{type:{summary:`string`},category:`Content`}},onClick:{control:`object`,table:{type:{summary:`() => void`,detail:"When using onClick, `children` won't render as the link will take precedence."},category:`Actions`}},href:{control:`text`,table:{type:{summary:`string`,detail:"When using href, `children` won't render as the link will take precedence."},category:`Actions`}},Icon:{control:`object`,table:{type:{summary:`ReactNode`,detail:`LucideIcon`},category:`Icon`}},iconAriaLabel:{control:`text`,table:{type:{summary:`string`},category:`Icon`}},imageSrc:{control:`text`,table:{type:{summary:`string`},category:`Image`}},imageAlt:{control:`text`,table:{type:{summary:`string`},category:`Image`}}}},f={},p={args:{description:void 0}},m={args:{imageSrc:void 0,Icon:void 0}},h={args:{imageSrc:void 0,Icon:n}},g={args:{isLoading:!0}},_={args:{isLoading:!0,children:(0,u.jsxs)(s,{variant:`secondary`,children:[`Install`,(0,u.jsx)(i,{className:`size-4`})]})}},v={args:{children:(0,u.jsxs)(s,{variant:`secondary`,children:[`Install`,(0,u.jsx)(i,{className:`size-4`})]})}},y={args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(s,{variant:`outline`,children:[`Configure`,(0,u.jsx)(r,{className:`size-4`})]}),(0,u.jsxs)(s,{variant:`secondary`,children:[`Install`,(0,u.jsx)(i,{className:`size-4`})]})]})}},b={args:{onClick:()=>alert(`List item clicked`)}},x={args:{href:`https://ivao.aero`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    Icon: undefined
  }
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    Icon: Plane
  }
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: <Button variant={'secondary'}>
        Install
        <CloudDownload className="size-4" />
      </Button>
  }
} satisfies Story`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button variant={'secondary'}>
        Install
        <CloudDownload className="size-4" />
      </Button>
  }
} satisfies Story`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: () => alert('List item clicked')
  }
} satisfies Story`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://ivao.aero'
  }
} satisfies Story`,...x.parameters?.docs?.source}}},S=[`Default`,`WithoutDescription`,`WithOutImageOrIcon`,`WithIcon`,`Loading`,`LoadingWithAction`,`WithAction`,`WithPrimaryAndSecondaryAction`,`InteractiveOnClick`,`InteractiveHref`]}))();export{f as Default,x as InteractiveHref,b as InteractiveOnClick,g as Loading,_ as LoadingWithAction,v as WithAction,h as WithIcon,m as WithOutImageOrIcon,y as WithPrimaryAndSecondaryAction,p as WithoutDescription,S as __namedExportsOrder,d as default};