import{j as t}from"./jsx-runtime-CWiLgGS-.js";import{useMDXComponents as r}from"./index-CqfohsHu.js";import{M as s,P as i,C as p}from"./blocks-CuewbtSz.js";import{T as m}from"./Toast.stories-BJkcxba1.js";import"./iframe-PTouGSG2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1HdJkhw.js";import"./index-C_c03BiG.js";import"./index-fne6WJNb.js";import"./index-B6CMjPc4.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-iOmhHyUN.js";import"./ToastProvider-BrIZIC2c.js";import"./index-CYKnLJBP.js";import"./index-CDjHoBoA.js";import"./index-Bu9kImAK.js";import"./index-BFBoJLAE.js";import"./index-CBN5Rm-y.js";import"./index-UhdEPief.js";import"./index-CEUyIXEJ.js";import"./index-CpYGGnvL.js";import"./index-DaGoSj6W.js";import"./index-BDXz17Cq.js";import"./x-BvFN0My8.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
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
