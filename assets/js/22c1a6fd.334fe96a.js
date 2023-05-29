"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2950],{43501:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var n=o(87462),a=(o(67294),o(3905)),i=o(50214),l=o(58764);const s={title:"Dialog.Content"},r=void 0,c={unversionedId:"components/Dialog/DialogContent",id:"components/Dialog/DialogContent",title:"Dialog.Content",description:"A component to show content in a Dialog.",source:"@site/docs/components/Dialog/DialogContent.mdx",sourceDirName:"components/Dialog",slug:"/components/Dialog/DialogContent",permalink:"/react-native-paper/docs/components/Dialog/DialogContent",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Dialog/DialogContent.tsx",tags:[],version:"current",frontMatter:{title:"Dialog.Content"},sidebar:"components",previous:{title:"Dialog.Actions",permalink:"/react-native-paper/docs/components/Dialog/DialogActions"},next:{title:"Dialog.Icon",permalink:"/react-native-paper/docs/components/Dialog/DialogIcon"}},p={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Theme colors",id:"theme-colors",level:2}],m={toc:g};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A component to show content in a Dialog."),(0,a.kt)("div",{class:"screenshots"},(0,a.kt)("figure",null,(0,a.kt)("img",{class:"small",src:"/react-native-paper/screenshots/dialog-content.png"}))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Dialog, Portal, Text } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(false);\n\n  const hideDialog = () => setVisible(false);\n\n  return (\n    <Portal>\n      <Dialog visible={visible} onDismiss={hideDialog}>\n        <Dialog.Content>\n          <Text variant=\"bodyMedium\">This is simple dialog</Text>\n        </Dialog.Content>\n      </Dialog>\n    </Portal>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("span",null),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(i.Z,{link:"Dialog/DialogContent",mdxType:"PropTable"}),(0,a.kt)("h2",{id:"theme-colors"},"Theme colors"),(0,a.kt)(l.Z,{data:void 0,componentName:"Dialog.Content",mdxType:"ThemeColorsTable"}))}d.isMDXComponent=!0}}]);