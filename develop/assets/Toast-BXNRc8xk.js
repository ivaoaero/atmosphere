import{j as t}from"./jsx-runtime-Yr_ShJXw.js";import{useMDXComponents as r}from"./index-DIVaMh5J.js";import{M as s,P as i,C as p}from"./blocks-oTmeMvAj.js";import{T as m}from"./Toast.stories-BbQtZ4Ib.js";import"./iframe-BwY6xiO3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7OingXl.js";import"./index-BpPkTFuP.js";import"./index-DhBMW_et.js";import"./index-C7Ed_MJs.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-D8kvyRIX.js";import"./ToastProvider-DI3V6PMm.js";import"./index-R1Lm0jY6.js";import"./index-BWWYObjh.js";import"./index-ClYANb0b.js";import"./index-BwINywQ5.js";import"./index-78SE2NcP.js";import"./index-CBuLMHHx.js";import"./index-Ddx1gD24.js";import"./index-CRHFuuAw.js";import"./index-DMu4pfr9.js";import"./index-c9SJGqr2.js";import"./x-DQB1gk7g.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
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
