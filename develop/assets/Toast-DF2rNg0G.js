import{j as t}from"./jsx-runtime-BCSg91tD.js";import{useMDXComponents as r}from"./index-OXqrlGn0.js";import{M as s,P as i,C as p}from"./blocks-TINiXMwz.js";import{T as m}from"./Toast.stories-BeXyPqaI.js";import"./iframe-BfWqIy39.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEObL4SB.js";import"./index-DA-YmknU.js";import"./index-qSvyO5Ac.js";import"./index-BnC4IWLr.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-CoaeUEX4.js";import"./ToastProvider-OWn4hHAl.js";import"./index-DRfTGOGW.js";import"./index-DNoVCocP.js";import"./index-DgHlpNdG.js";import"./index-C5y2McuT.js";import"./index-ougmOeTn.js";import"./index-C31b6gz_.js";import"./index-BtODHlr0.js";import"./index-CQj8-fvf.js";import"./index-B3zMAoHS.js";import"./index-BHnlF_B5.js";import"./x-ah1bBGQC.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
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
