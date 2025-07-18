import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as c}from"./index-DRjF_FHU.js";import{P as f}from"./index-Dddn034H.js";import"./styles-CytzSlOG.js";import"./index-ByO2Xf1s.js";import"./index-zZ8-XE7G.js";import"./buttonVariants-eaSFswpb.js";import"./index-bksmFdny.js";import"./createLucideIcon-B1d7gGsx.js";import"./ellipsis-BnRCNllq.js";import"./chevron-left-DcjULYqR.js";import"./chevron-right-B-s9fyDC.js";const M={title:"Components/Pagination",component:f,tags:["autodocs"],args:{totalPages:10,onPageChange:a=>console.log(a)}},s={},n={args:{defaultActivePageIdx:3}},r={decorators:a=>{const[t,o]=c.useState(5),i=c.useId();return e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("label",{htmlFor:i,className:"mr-2",children:"Active page:"}),e.jsx("input",{id:i,type:"number",value:t,className:"h-8 w-12 text-center",onChange:h=>o(parseInt(h.currentTarget.value))})]}),e.jsx(a,{activePageIdx:t,onPageChange:o})]})},render:(a,t)=>e.jsx(f,{...a,activePageIdx:t.activePageIdx,onPageChange:t.onPageChange})};var g,p,d;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{} satisfies Story",...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,l,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    defaultActivePageIdx: 3
  }
} satisfies Story`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var v,P,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: Story => {
    const [activePage, setActivePage] = useState(5);
    const id = useId();
    return <div>
        <div className="flex justify-center gap-2">
          <label htmlFor={id} className="mr-2">
            Active page:
          </label>
          <input id={id} type="number" value={activePage} className="h-8 w-12 text-center" onChange={e => setActivePage(parseInt(e.currentTarget.value))} />
        </div>
        <Story activePageIdx={activePage} onPageChange={setActivePage} />
      </div>;
  },
  render: (props, context) => {
    return <Pagination {...props}
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    activePageIdx={context.activePageIdx}
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    onPageChange={context.onPageChange} />;
  }
} satisfies Story`,...(x=(P=r.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const T=["Default","DefaultActivePage","ActivePageManaged"];export{r as ActivePageManaged,s as Default,n as DefaultActivePage,T as __namedExportsOrder,M as default};
