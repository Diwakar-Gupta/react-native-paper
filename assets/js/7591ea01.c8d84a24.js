"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1852],{2366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),s=a(214);const o={title:"Searchbar"},c=void 0,p={unversionedId:"components/Searchbar",id:"components/Searchbar",title:"Searchbar",description:"Searchbar is a simple input box where users can type search queries.",source:"@site/docs/components/Searchbar.mdx",sourceDirName:"components",slug:"/components/Searchbar",permalink:"/react-native-paper/docs/components/Searchbar",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Searchbar.tsx",tags:[],version:"current",frontMatter:{title:"Searchbar"},sidebar:"components",previous:{title:"RadioButton.Item",permalink:"/react-native-paper/docs/components/RadioButton/RadioButtonItem"},next:{title:"SegmentedButtons",permalink:"/react-native-paper/docs/components/SegmentedButtons/"}},i={},u=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],l={toc:u};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Searchbar is a simple input box where users can type search queries."),(0,n.kt)("div",{class:"screenshots"},(0,n.kt)("img",{class:"small",src:"/react-native-paper/screenshots/searchbar.png"})),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Searchbar } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [searchQuery, setSearchQuery] = React.useState('');\n\n  const onChangeSearch = query => setSearchQuery(query);\n\n  return (\n    <Searchbar\n      placeholder=\"Search\"\n      onChangeText={onChangeSearch}\n      value={searchQuery}\n    />\n  );\n};\n\nexport default MyComponent;\n\n")),(0,n.kt)("h2",{id:"props"},"Props"),(0,n.kt)(s.Z,{link:"Searchbar",mdxType:"PropTable"}))}h.isMDXComponent=!0}}]);