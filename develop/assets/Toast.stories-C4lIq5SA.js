import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{n as r,t as i}from"./button-BzExgH7W.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./useToast-SPYXQ13r.js";var d=e({PermanentToastStory:()=>h,ToastStory:()=>m,__namedExportsOrder:()=>g,default:()=>p}),f,p,m,h,g,_=t((()=>{r(),c(),u(),o(),f=n(),p={title:`Feedback/Toast`,component:a,decorators:e=>(0,f.jsx)(`div`,{className:`min-h-96`,children:(0,f.jsx)(l,{children:(0,f.jsx)(e,{})})}),args:{action:`Toast Action`,actionAltText:`Screen reader text for the action`,title:`Toast Title`,description:`Toast Description`},argTypes:{title:{description:`Title of the Toast.`,type:`string`},description:{description:`Description of the Toast.`,type:`string`},action:{description:`Action to trigger a toast.`,control:`object`,table:{type:{summary:`ReactNode`}}},actionAltText:{description:`Describe an alternative way to achieve the action for screen reader users who cannot access the toast easily.`,type:`string`},duration:{description:`Duration of the toast.`,type:`number`,table:{type:{summary:`number`}}},toastProps:{description:`Props to pass to the toast. See https://www.radix-ui.com/primitives/docs/components/toast#root for more details.`,control:`object`,table:{type:{summary:`ToastProps`}}}}},m={name:`Toast`,render:e=>{let t=s();return(0,f.jsx)(i,{onClick:()=>t(e),children:`Add Toast`})}},h={name:`Permanent Toast`,args:{duration:99999999},render:e=>{let t=s();return(0,f.jsx)(i,{onClick:()=>t(e),children:`Add Toast`})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Toast',
  render: args => {
    const toast = useToast();
    return <Button onClick={() => toast(args)}>Add Toast</Button>;
  }
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Permanent Toast',
  args: {
    duration: 99999999
  },
  render: args => {
    const toast = useToast();
    return <Button onClick={() => toast(args)}>Add Toast</Button>;
  }
} satisfies Story`,...h.parameters?.docs?.source}}},g=[`ToastStory`,`PermanentToastStory`]}));_();export{h as PermanentToastStory,m as ToastStory,g as __namedExportsOrder,p as default,_ as n,d as t};