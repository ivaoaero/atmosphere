import{j as t}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as e}from"./index-ChEI-nsM.js";import{M as i,P as s,C as p}from"./index-C_O9VJya.js";import{T as m}from"./Toast.stories-HI0VZU5t.js";import"./index-DRjF_FHU.js";import"./iframe-DLimM3Dt.js";import"./index-CiicFVJS.js";import"./index-Bx0Ph3cE.js";import"./index-FTTXbSiM.js";import"./index-DrFu-skq.js";import"./index-ByO2Xf1s.js";import"./index-zZ8-XE7G.js";import"./buttonVariants-eaSFswpb.js";import"./index-bksmFdny.js";import"./styles-CytzSlOG.js";import"./createLucideIcon-B1d7gGsx.js";import"./ToastProvider-BxTxwI1q.js";import"./index-DNjz5F53.js";import"./index-2PLgWUiy.js";import"./index-DRtXj63t.js";import"./index-DE697g4A.js";import"./index-ZGl1IALt.js";import"./index-CjMUjCdG.js";import"./index-DSPJRkee.js";import"./index-CVyrcOig.js";import"./index-CB2Ck3t8.js";import"./index-DPjRV10W.js";import"./x-vRIRpOA3.js";function r(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:m}),`
`,t.jsx(o.h1,{id:"toast",children:"Toast"}),`
`,t.jsx(o.h2,{id:"how-to-use",children:"How to use"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import { ComponentType } from 'react';

import { useToast } from '@ivao/atmosphere-react';

const Component: ComponentType = () => {
  const toast = useToast();

  toast({
    action: 'Toast Action',
    actionAltText: 'Screen reader text for the action',
    title: 'Toast Title',
    description: 'Toast Description',
  });
};
`})}),`
`,t.jsx(o.h2,{id:"result",children:"Result"}),`
`,t.jsx(s,{}),`
`,t.jsx(o.h2,{id:"types",children:"Types"}),`
`,t.jsxs(o.p,{children:["The following props can be passed to the first argument of the ",t.jsx(o.code,{children:"toast"})," function:"]}),`
`,t.jsx(p,{})]})}function N(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{N as default};
