import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{c as n,m as r,o as i,r as a,s as o}from"./blocks-CDJuEgir.js";import{t as s}from"./mdx-react-shim-glWqz64R.js";import{n as c,t as l}from"./Toast.stories-C4lIq5SA.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`toast`,children:`Toast`}),`
`,(0,f.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import { ComponentType } from 'react';

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
`,(0,f.jsx)(t.h2,{id:`result`,children:`Result`}),`
`,(0,f.jsx)(o,{}),`
`,(0,f.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,f.jsxs)(t.p,{children:[`The following props can be passed to the first argument of the `,(0,f.jsx)(t.code,{children:`toast`}),` function:`]}),`
`,(0,f.jsx)(a,{})]})}function d(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),s(),n(),c()}))();export{d as default};