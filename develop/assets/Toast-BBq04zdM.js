import{j as t}from"./jsx-runtime-CnF9G3Hy.js";import{useMDXComponents as r}from"./index-CVYuD52S.js";import{M as s,P as i,C as p}from"./blocks-DnRDOta-.js";import{T as m}from"./Toast.stories-DWrLpp0m.js";import"./iframe-CNXeHHJ5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Jqs9KCcc.js";import"./index-BUOsLt6b.js";import"./index-DQnlAEMm.js";import"./index-CrBb1Ttm.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-CjWZbxcw.js";import"./ToastProvider-Csvt3ueE.js";import"./index-C-vxIjR4.js";import"./index-D1HDEqKX.js";import"./index-DKHLc6yE.js";import"./index-KWlIXQ-s.js";import"./index-BfmfXS-9.js";import"./index-66isIIUc.js";import"./index-CHtNBE72.js";import"./index-DZNJfbyl.js";import"./index-CcGK-g_W.js";import"./index-B-aVhzbC.js";import"./x-U-G2WmVU.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
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
