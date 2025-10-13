import{S as a}from"./index-BLdxw1gT.js";import"./jsx-runtime-BKjQ0onw.js";import"./iframe-DwOd4V3o.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectTrigger-Di8iC4PZ.js";import"./styles-BEHD0UYf.js";import"./index-wOTSxcE-.js";import"./index-B8VqKjUM.js";import"./index-BdQq_4o_.js";import"./index-Dulb8G-Y.js";import"./index-CBrI5lsF.js";import"./index-B3bG6qs3.js";import"./index-gW72QKi9.js";import"./index-ie6WgIWY.js";import"./index-L6YV28Vs.js";import"./index-biOcxHdM.js";import"./index-DINYfAcy.js";import"./index-Ct3HgrVM.js";import"./index-Cqe1Ekt_.js";import"./index-CPEunlhw.js";import"./index-uomDh-zb.js";import"./index-DyylmNbj.js";import"./index-DNYNzo6q.js";import"./index-C0-L3yNJ.js";import"./index-B24HbxLq.js";import"./chevron-down-DxGcpLEf.js";import"./createLucideIcon-BP1G_In4.js";import"./check-BSeWjW5e.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Forms/Select",component:a,tags:["autodocs"],args:{items:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],placeholder:"Select an option",position:"item-aligned",onValueChange:o("value change"),onOpenChange:o("open change")},argTypes:{disabled:{type:"boolean",description:"Whether the select is disabled."},items:{description:"List of items to select from.",table:{type:{summary:"SelectItemProps[]"}}},open:{type:"boolean",description:"Whether the select is open. Cannot be used with `defaultOpen`!",if:{arg:"defaultOpen",exists:!1}},defaultOpen:{type:"boolean",description:"Sets the select initially open. Cannot be used with `open`!",if:{arg:"open",exists:!1}},placeholder:{description:"Placeholder text for the select.",control:"text",table:{type:{summary:"ReactNode"}}},position:{description:"Position of the select.",control:"select",options:["popper","item-aligned"]},value:{type:"string",description:"Controlled value of the select. Cannot be used with `defaultValue`!",if:{arg:"defaultValue",exists:!1}},defaultValue:{type:"string",description:"Sets the initial value of the select. Cannot be used with `value`!",if:{arg:"value",exists:!1}}}},e={},t={args:{items:{Group1:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],Group2:[{value:"4",label:"Four"},{value:"5",label:"Five"},{value:"6",label:"Six"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{} satisfies Story",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
