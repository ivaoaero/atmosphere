import{j as r}from"./jsx-runtime-f8QT0vQX.js";import{B as a}from"./index-CEkj4GQ_.js";import{T as i,a as c,b as d}from"./ToastProvider-DjASEqp4.js";import{r as m}from"./iframe-C6ATIw1n.js";const n=()=>{try{const t=m.useContext(i);if(t)return t}catch(t){console.error(t)}throw new Error("useToast must be used within a ToastProvider")},p={title:"Feedback/Toast",component:c,decorators:t=>r.jsx("div",{className:"min-h-96",children:r.jsx(d,{children:r.jsx(t,{})})}),args:{action:"Toast Action",actionAltText:"Screen reader text for the action",title:"Toast Title",description:"Toast Description"},argTypes:{title:{description:"Title of the Toast.",type:"string"},description:{description:"Description of the Toast.",type:"string"},action:{description:"Action to trigger a toast.",control:"object",table:{type:{summary:"ReactNode"}}},actionAltText:{description:"Describe an alternative way to achieve the action for screen reader users who cannot access the toast easily.",type:"string"},duration:{description:"Duration of the toast.",type:"number",table:{type:{summary:"number"}}},toastProps:{description:"Props to pass to the toast. See https://www.radix-ui.com/primitives/docs/components/toast#root for more details.",control:"object",table:{type:{summary:"ToastProps"}}}}},o={name:"Toast",render:t=>{const s=n();return r.jsx(a,{onClick:()=>s(t),children:"Add Toast"})}},e={name:"Permanent Toast",args:{duration:99999999},render:t=>{const s=n();return r.jsx(a,{onClick:()=>s(t),children:"Add Toast"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Toast',
  render: args => {
    const toast = useToast();
    return <Button onClick={() => toast(args)}>Add Toast</Button>;
  }
} satisfies Story`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Permanent Toast',
  args: {
    duration: 99999999
  },
  render: args => {
    const toast = useToast();
    return <Button onClick={() => toast(args)}>Add Toast</Button>;
  }
} satisfies Story`,...e.parameters?.docs?.source}}};const u=["ToastStory","PermanentToastStory"],g=Object.freeze(Object.defineProperty({__proto__:null,PermanentToastStory:e,ToastStory:o,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{g as T};
