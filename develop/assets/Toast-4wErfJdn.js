import{j as t}from"./jsx-runtime-f8QT0vQX.js";import{useMDXComponents as r}from"./index-c8vZQsOm.js";import{M as s,P as i,C as p}from"./blocks-CHWqzGMa.js";import{T as m}from"./Toast.stories-EOiyKZBv.js";import"./iframe-C6ATIw1n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9gmC9Pm.js";import"./index-B09Xo6RP.js";import"./index-CEkj4GQ_.js";import"./index-WbAbiluB.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-CcUF0qy_.js";import"./ToastProvider-DjASEqp4.js";import"./index-DNSeyj-m.js";import"./index-GzJwBu3m.js";import"./index-Dils7Wnr.js";import"./index-DpBO9mLk.js";import"./index-B9ty0KEc.js";import"./index-9cuG20C2.js";import"./index-C41eAbh0.js";import"./index-D6KCcWP7.js";import"./index-CS7hBh4Q.js";import"./index-BLGPF-nx.js";import"./x-C1-El_AH.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
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
