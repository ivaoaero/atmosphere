import{j as t}from"./jsx-runtime-owaHAHyT.js";import{useMDXComponents as r}from"./index-C7LXB2Hf.js";import{M as s,P as i,C as p}from"./blocks-DzAf9vqc.js";import{T as m}from"./Toast.stories-BLEdWxOI.js";import"./iframe-CHCV3d-U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DG78kEDc.js";import"./index-DBwva85G.js";import"./index-CPGIoAFM.js";import"./index-NmTJeRio.js";import"./index-CcvLvwC_.js";import"./styles-BEHD0UYf.js";import"./createLucideIcon-BDY-CiKx.js";import"./ToastProvider-DBKhzJ97.js";import"./index-B7QXMb6g.js";import"./index-BIYs1ILr.js";import"./index-Cfcon1xl.js";import"./index-nYoLN4HV.js";import"./index-xzYXHqRN.js";import"./index-Djnvdsrb.js";import"./index-CLngmu5l.js";import"./index-BeUzu6fY.js";import"./index-C2MICE2m.js";import"./index-DUUWYIFU.js";import"./x-CR_2WVVR.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
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
