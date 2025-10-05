import{j as t}from"./jsx-runtime-NE_zcNN2.js";import{useMDXComponents as r}from"./index-DkgJ-12T.js";import{M as s,P as i,C as p}from"./blocks-DJCVnDh-.js";import{T as m}from"./Toast.stories-CaCn_XO4.js";import"./iframe-Ch1q1C1w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8BNAociu.js";import"./index-B8L5zJfB.js";import"./index-yGvIaMHq.js";import"./index-CAUJLRXY.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-DKmRA99u.js";import"./ToastProvider-C_O8uIsI.js";import"./index-CgZagMB8.js";import"./index-4CjaotZF.js";import"./index-SkCWWcZv.js";import"./index-DCmijGhJ.js";import"./index-CVolwxKW.js";import"./index-BjgpHM6h.js";import"./index-Benp6fCl.js";import"./index-CSIhAl52.js";import"./index-Cszns1R9.js";import"./index-DKDRjBVf.js";import"./x-BRHf-KIt.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
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
