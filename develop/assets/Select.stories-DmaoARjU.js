import{S as a}from"./index-B3rMqvky.js";import"./jsx-runtime-D02XIDed.js";import"./iframe-D8I3vx8i.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectTrigger-e5c1QOif.js";import"./styles-BEHD0UYf.js";import"./index-Du_LuyHw.js";import"./index-CtrOKa_A.js";import"./index-BdQq_4o_.js";import"./index-D2OkvZ4D.js";import"./index-bH4B2hhC.js";import"./index-CWZ0pSLW.js";import"./index-CAn-yHzd.js";import"./index-DEpeD85L.js";import"./index-z7E-vInd.js";import"./index-CKQ3v7J_.js";import"./index-D8V7NT_5.js";import"./index-Bz5BA1Ez.js";import"./index-GH1wzAuN.js";import"./index-BXuwFgis.js";import"./index-EAs8OwVT.js";import"./index-gcJOrtYr.js";import"./index-CTs-bDfr.js";import"./index-BTRbbS-Z.js";import"./index-EfQLXOYP.js";import"./chevron-down-C2vXvTKW.js";import"./createLucideIcon-CK1sR-k_.js";import"./check-1fl_7TyF.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Forms/Select",component:a,tags:["autodocs"],args:{items:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],placeholder:"Select an option",position:"item-aligned",onValueChange:o("value change"),onOpenChange:o("open change")},argTypes:{disabled:{type:"boolean",description:"Whether the select is disabled."},items:{description:"List of items to select from.",table:{type:{summary:"SelectItemProps[]"}}},open:{type:"boolean",description:"Whether the select is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the select initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},placeholder:{description:"Placeholder text for the select.",control:"text",table:{type:{summary:"ReactNode"}}},position:{description:"Position of the select.",control:"select",options:["popper","item-aligned"]},value:{type:"string",description:"Controlled value of the select. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1}},defaultValue:{type:"string",description:"Sets the initial value of the select. Cannot be used with `value`!",if:{arg:"value",exists:!1}}}},e={},t={args:{items:{Group1:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],Group2:[{value:"4",label:"Four"},{value:"5",label:"Five"},{value:"6",label:"Six"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: {
      Group1: [{
        value: '1',
        label: 'One'
      }, {
        value: '2',
        label: 'Two'
      }, {
        value: '3',
        label: 'Three'
      }],
      Group2: [{
        value: '4',
        label: 'Four'
      }, {
        value: '5',
        label: 'Five'
      }, {
        value: '6',
        label: 'Six'
      }]
    }
  }
} satisfies Story`,...t.parameters?.docs?.source}}};const P=["Default","SelectListWithGroups"];export{e as Default,t as SelectListWithGroups,P as __namedExportsOrder,D as default};
