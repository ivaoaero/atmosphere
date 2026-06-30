import{j as t}from"./jsx-runtime-BdvtLc-0.js";import{useMDXComponents as r}from"./index-DuAHZDLu.js";import{M as s,P as i,C as p}from"./blocks-B5EDT5ZP.js";import{T as m}from"./Toast.stories-BfEdOEXq.js";import"./iframe-BF_NKU4-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bs3_ynwj.js";import"./index-CmTk0Xqu.js";import"./index-DmrEk0fN.js";import"./index-Dz2F0v5h.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-KZWBFGL0.js";import"./ToastProvider-BmVH40Py.js";import"./index-BiXHiB6J.js";import"./index-ChJhSZ1D.js";import"./index-a1ssgu_B.js";import"./index-DIs-FH7o.js";import"./index-BQju25vv.js";import"./index-CykfARAc.js";import"./index-BJ3SWV0H.js";import"./index-VUVI1niR.js";import"./index-_SuknDGg.js";import"./index-B4dRwdfy.js";import"./x-sfcM-vdt.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
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
