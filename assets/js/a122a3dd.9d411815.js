"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1806],{42798:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var n=t(87462),a=(t(67294),t(3905)),i=t(50214),l=t(58764);const s={title:"Dialog.Icon"},r=void 0,c={unversionedId:"components/Dialog/DialogIcon",id:"components/Dialog/DialogIcon",title:"Dialog.Icon",description:"@supported Available in v5.x with theme version 3",source:"@site/docs/components/Dialog/DialogIcon.mdx",sourceDirName:"components/Dialog",slug:"/components/Dialog/DialogIcon",permalink:"/react-native-paper/docs/components/Dialog/DialogIcon",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Dialog/DialogIcon.tsx",tags:[],version:"current",frontMatter:{title:"Dialog.Icon"},sidebar:"components",previous:{title:"Dialog.Content",permalink:"/react-native-paper/docs/components/Dialog/DialogContent"},next:{title:"Dialog.ScrollArea",permalink:"/react-native-paper/docs/components/Dialog/DialogScrollArea"}},p={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Theme colors",id:"theme-colors",level:2}],m={toc:g};function d(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"@supported Available in v5.x with theme version 3\nA component to show an icon in a Dialog."),(0,a.kt)("div",{class:"screenshots"},(0,a.kt)("img",{class:"small",src:"/react-native-paper/screenshots/dialog-icon.png"})),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { StyleSheet } from 'react-native';\nimport { Dialog, Portal, Text } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(false);\n\n  const hideDialog = () => setVisible(false);\n\n  return (\n    <Portal>\n      <Dialog visible={visible} onDismiss={hideDialog}>\n        <Dialog.Icon icon=\"alert\" />\n        <Dialog.Title style={styles.title}>This is a title</Dialog.Title>\n        <Dialog.Content>\n          <Text variant=\"bodyMedium\">This is simple dialog</Text>\n        </Dialog.Content>\n      </Dialog>\n    </Portal>\n  );\n};\n\nconst styles = StyleSheet.create({\n  title: {\n    textAlign: 'center',\n  },\n})\n\nexport default MyComponent;\n")),(0,a.kt)("span",null),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(i.Z,{link:"Dialog/DialogIcon",mdxType:"PropTable"}),(0,a.kt)("h2",{id:"theme-colors"},"Theme colors"),(0,a.kt)(l.Z,{data:void 0,componentName:"Dialog.Icon",mdxType:"ThemeColorsTable"}))}d.isMDXComponent=!0}}]);