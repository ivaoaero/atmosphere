import{j as t}from"./jsx-runtime-D02XIDed.js";import{useMDXComponents as r}from"./index-BSISJvNR.js";import{M as s,P as i,C as p}from"./blocks-DGW7_7bB.js";import{T as m}from"./Toast.stories-CeRrPUNL.js";import"./iframe-D8I3vx8i.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Du_LuyHw.js";import"./index-CtrOKa_A.js";import"./index-BgrIROma.js";import"./index-CAn-yHzd.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-CK1sR-k_.js";import"./ToastProvider-DBWaoy5y.js";import"./index-D2OkvZ4D.js";import"./index-bH4B2hhC.js";import"./index-CWZ0pSLW.js";import"./index-z7E-vInd.js";import"./index-CKQ3v7J_.js";import"./index-D8V7NT_5.js";import"./index-gcJOrtYr.js";import"./index-mf5fc1KQ.js";import"./index-CTs-bDfr.js";import"./index-EfQLXOYP.js";import"./x-NVObRLR0.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
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
