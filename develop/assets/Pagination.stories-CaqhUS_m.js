import{j as e}from"./jsx-runtime-NE_zcNN2.js";import{r as c}from"./iframe-Ch1q1C1w.js";import{P as g}from"./index-Dv5cZRQd.js";import"./preload-helper-PPVm8Dsz.js";import"./styles-BEHD0UYf.js";import"./index-yGvIaMHq.js";import"./index-CAUJLRXY.js";import"./index-CcvLvwC_.js";import"./createLucideIcon-DKmRA99u.js";import"./ellipsis-Bap-zFCS.js";import"./chevron-left-DzNgr_IP.js";import"./chevron-right-DibYcMD3.js";const j={title:"DataDisplay/Lists/Pagination",component:g,tags:["autodocs"],args:{totalPages:10,onPageChange:a=>console.log(a)}},s={},r={args:{defaultActivePageIdx:3}},n={decorators:a=>{const[t,i]=c.useState(5),o=c.useId();return e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("label",{htmlFor:o,className:"mr-2",children:"Active page:"}),e.jsx("input",{id:o,type:"number",value:t,className:"h-8 w-12 text-center",onChange:p=>i(parseInt(p.currentTarget.value))})]}),e.jsx(a,{activePageIdx:t,onPageChange:i})]})},render:(a,t)=>e.jsx(g,{...a,activePageIdx:t.activePageIdx,onPageChange:t.onPageChange})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{} satisfies Story",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultActivePageIdx: 3
  }
} satisfies Story`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...n.parameters?.docs?.source}}};const S=["Default","DefaultActivePage","ActivePageManaged"];export{n as ActivePageManaged,s as Default,r as DefaultActivePage,S as __namedExportsOrder,j as default};
