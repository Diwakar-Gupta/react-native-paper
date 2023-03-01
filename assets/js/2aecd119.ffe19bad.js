"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1904],{8089:(o,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var e=n(7462),a=(n(7294),n(3905)),i=n(214);const s={title:"Dialog.Actions"},l=void 0,c={unversionedId:"components/Dialog/DialogActions",id:"components/Dialog/DialogActions",title:"Dialog.Actions",description:"A component to show a list of actions in a Dialog.",source:"@site/docs/components/Dialog/DialogActions.mdx",sourceDirName:"components/Dialog",slug:"/components/Dialog/DialogActions",permalink:"/react-native-paper/docs/components/Dialog/DialogActions",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Dialog/DialogActions.tsx",tags:[],version:"current",frontMatter:{title:"Dialog.Actions"},sidebar:"components",previous:{title:"Dialog",permalink:"/react-native-paper/docs/components/Dialog/"},next:{title:"Dialog.Content",permalink:"/react-native-paper/docs/components/Dialog/DialogContent"}},r={},p=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],g={toc:p};function m(o){let{components:t,...n}=o;return(0,a.kt)("wrapper",(0,e.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A component to show a list of actions in a Dialog."),(0,a.kt)("div",{class:"screenshots"},(0,a.kt)("figure",null,(0,a.kt)("img",{class:"small",src:"/react-native-paper/screenshots/dialog-actions.png"}))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button, Dialog, Portal } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(false);\n\n  const hideDialog = () => setVisible(false);\n\n  return (\n    <Portal>\n      <Dialog visible={visible} onDismiss={hideDialog}>\n        <Dialog.Actions>\n          <Button onPress={() => console.log('Cancel')}>Cancel</Button>\n          <Button onPress={() => console.log('Ok')}>Ok</Button>\n        </Dialog.Actions>\n      </Dialog>\n    </Portal>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(i.Z,{link:"Dialog/DialogActions",mdxType:"PropTable"}))}m.isMDXComponent=!0}}]);