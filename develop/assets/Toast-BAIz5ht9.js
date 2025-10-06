import{j as t}from"./jsx-runtime-C1KuNDNn.js";import{useMDXComponents as r}from"./index-C7jimQt7.js";import{M as s,P as i,C as p}from"./blocks-j6eZxWIb.js";import{T as m}from"./Toast.stories-YTDLejiy.js";import"./iframe-DkAy6WyO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRQy8aHD.js";import"./index-4p04giZs.js";import"./index-CnVWWLAR.js";import"./index-NpaYJ5fk.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-DifMnpjQ.js";import"./ToastProvider-CmU5Z1PG.js";import"./index-ClKGt4Qh.js";import"./index-D9Zfvkit.js";import"./index-bOEUjhnl.js";import"./index-i5ZdiAKt.js";import"./index-0KB3Pdy9.js";import"./index-C78AUw0f.js";import"./index-C5GUsKTt.js";import"./index-G3SXhJbq.js";import"./index-Br9_lN7R.js";import"./index-CgW07GQV.js";import"./x-B14Z8vts.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
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
`,t.jsx(i,{}),`
`,t.jsx(o.h2,{id:"types",children:"Types"}),`
`,t.jsxs(o.p,{children:["The following props can be passed to the first argument of the ",t.jsx(o.code,{children:"toast"})," function:"]}),`
`,t.jsx(p,{})]})}function F(n={}){const{wrapper:o}={...r(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(e,{...n})}):e(n)}export{F as default};
