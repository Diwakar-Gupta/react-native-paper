"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80],{6578:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var n=e(7462),i=(e(7294),e(3905)),r=e(214);const c={title:"List.AccordionGroup"},s=void 0,p={unversionedId:"components/List/ListAccordionGroup",id:"components/List/ListAccordionGroup",title:"List.AccordionGroup",description:"List.AccordionGroup allows to control a group of List Accordions. id prop for List.Accordion is required in order for group to work.",source:"@site/docs/components/List/ListAccordionGroup.mdx",sourceDirName:"components/List",slug:"/components/List/ListAccordionGroup",permalink:"/react-native-paper/docs/components/List/ListAccordionGroup",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/List/ListAccordionGroup.tsx",tags:[],version:"current",frontMatter:{title:"List.AccordionGroup"},sidebar:"components",previous:{title:"List.Accordion",permalink:"/react-native-paper/docs/components/List/ListAccordion"},next:{title:"List.Icon",permalink:"/react-native-paper/docs/components/List/ListIcon"}},a={},d=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],l={toc:d};function u(o){let{components:t,...e}=o;return(0,i.kt)("wrapper",(0,n.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"List.AccordionGroup allows to control a group of List Accordions. ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," prop for List.Accordion is required in order for group to work.\nList.AccordionGroup can be a controlled or uncontrolled component. The example shows the uncontrolled version.\nAt most one Accordion can be expanded at a given time."),(0,i.kt)("div",{class:"screenshots"},(0,i.kt)("img",{class:"medium",src:"/react-native-paper/screenshots/list-accordion-group.png"})),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import * as React from \'react\';\nimport { View, Text } from \'react-native\';\nimport { List } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <List.AccordionGroup>\n    <List.Accordion title="Accordion 1" id="1">\n      <List.Item title="Item 1" />\n    </List.Accordion>\n    <List.Accordion title="Accordion 2" id="2">\n      <List.Item title="Item 2" />\n    </List.Accordion>\n    <View>\n      <Text>\n        List.Accordion can be wrapped because implementation uses React.Context.\n      </Text>\n      <List.Accordion title="Accordion 3" id="3">\n        <List.Item title="Item 3" />\n      </List.Accordion>\n    </View>\n  </List.AccordionGroup>\n);\n\nexport default MyComponent;\n')),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)(r.Z,{link:"List/ListAccordionGroup",mdxType:"PropTable"}))}u.isMDXComponent=!0}}]);