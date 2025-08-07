import{j as r}from"./jsx-runtime-DiklIkkE.js";import{B as p}from"./index-ByO2Xf1s.js";import{T,a as l,b as y}from"./ToastProvider-BxTxwI1q.js";import{r as h}from"./index-DRjF_FHU.js";const u=()=>{try{const t=h.useContext(T);if(t)return t}catch(t){console.error(t)}throw new Error("useToast must be used within a ToastProvider")},g={title:"Feedback/Toast",component:l,decorators:t=>r.jsx("div",{className:"min-h-96",children:r.jsx(y,{children:r.jsx(t,{})})}),args:{action:"Toast Action",actionAltText:"Screen reader text for the action",title:"Toast Title",description:"Toast Description"},argTypes:{title:{description:"Title of the Toast.",type:"string"},description:{description:"Description of the Toast.",type:"string"},action:{description:"Action to trigger a toast.",control:"object",table:{type:{summary:"ReactNode"}}},actionAltText:{description:"Describe an alternative way to achieve the action for screen reader users who cannot access the toast easily.",type:"string"},duration:{description:"Duration of the toast.",type:"number",table:{type:{summary:"number"}}},toastProps:{description:"Props to pass to the toast. See https://www.radix-ui.com/primitives/docs/components/toast#root for more details.",control:"object",table:{type:{summary:"ToastProps"}}}}},o={name:"Toast",render:t=>{const s=u();return r.jsx(p,{onClick:()=>s(t),children:"Add Toast"})}},e={name:"Permanent Toast",args:{duration:99999999},render:t=>{const s=u();return r.jsx(p,{onClick:()=>s(t),children:"Add Toast"})}};var a,n,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Toast',
  render: args => {
    const toast = useToast();
    return <Button onClick={() => toast(args)}>Add Toast</Button>;
  }
} satisfies Story`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Permanent Toast',
  args: {
    duration: 99999999
  },
  render: args => {
    const toast = useToast();
    return <Button onClick={() => toast(args)}>Add Toast</Button>;
  }
} satisfies Story`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const x=["ToastStory","PermanentToastStory"],P=Object.freeze(Object.defineProperty({__proto__:null,PermanentToastStory:e,ToastStory:o,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{P as T};
