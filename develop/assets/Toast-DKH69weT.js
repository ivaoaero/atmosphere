import{j as t}from"./jsx-runtime-BKjQ0onw.js";import{useMDXComponents as r}from"./index-Bs1409f8.js";import{M as s,P as i,C as p}from"./blocks-8EmcOn8J.js";import{T as m}from"./Toast.stories-Dtd4mYBE.js";import"./iframe-DwOd4V3o.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wOTSxcE-.js";import"./index-B8VqKjUM.js";import"./index-BQMNlY0R.js";import"./index-gW72QKi9.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-BP1G_In4.js";import"./ToastProvider-SqSsEb6d.js";import"./index-Dulb8G-Y.js";import"./index-CBrI5lsF.js";import"./index-B3bG6qs3.js";import"./index-L6YV28Vs.js";import"./index-biOcxHdM.js";import"./index-DINYfAcy.js";import"./index-DyylmNbj.js";import"./index-ZMOuz4s1.js";import"./index-DNYNzo6q.js";import"./index-B24HbxLq.js";import"./x-B56QfaWd.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
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
