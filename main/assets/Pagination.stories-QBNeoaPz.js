import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./pagination-a4pa3HQf.js";var o,s,c,l,u,d,f;e((()=>{o=t(n(),1),i(),s=r(),c={title:`DataDisplay/Lists/Pagination`,component:a,tags:[`autodocs`],args:{totalPages:10,onPageChange:e=>console.log(e)}},l={},u={args:{defaultActivePageIdx:3}},d={decorators:e=>{let[t,n]=(0,o.useState)(5),r=(0,o.useId)();return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`flex justify-center gap-2`,children:[(0,s.jsx)(`label`,{htmlFor:r,className:`mr-2`,children:`Active page:`}),(0,s.jsx)(`input`,{id:r,type:`number`,value:t,className:`h-8 w-12 text-center`,onChange:e=>n(parseInt(e.currentTarget.value))})]}),(0,s.jsx)(e,{activePageIdx:t,onPageChange:n})]})},render:(e,t)=>(0,s.jsx)(a,{...e,activePageIdx:t.activePageIdx,onPageChange:t.onPageChange})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultActivePageIdx: 3
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}},f=[`Default`,`DefaultActivePage`,`ActivePageManaged`]}))();export{d as ActivePageManaged,l as Default,u as DefaultActivePage,f as __namedExportsOrder,c as default};