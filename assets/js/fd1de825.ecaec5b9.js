"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[484],{6425:(t,o,e)=>{e.r(o),e.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=e(87462),a=(e(67294),e(3905)),r=e(50214),u=(e(47582),e(58764),e(29518));const i={title:"RadioButton.Group"},d=void 0,p={unversionedId:"components/RadioButton/RadioButtonGroup",id:"components/RadioButton/RadioButtonGroup",title:"RadioButton.Group",description:"Radio button group allows to control a group of radio buttons.",source:"@site/docs/components/RadioButton/RadioButtonGroup.mdx",sourceDirName:"components/RadioButton",slug:"/components/RadioButton/RadioButtonGroup",permalink:"/react-native-paper/docs/components/RadioButton/RadioButtonGroup",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/RadioButton/RadioButtonGroup.tsx",tags:[],version:"current",frontMatter:{title:"RadioButton.Group"},sidebar:"components",previous:{title:"RadioButton.Android",permalink:"/react-native-paper/docs/components/RadioButton/RadioButtonAndroid"},next:{title:"RadioButton.IOS",permalink:"/react-native-paper/docs/components/RadioButton/RadioButtonIOS"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"onValueChange (required)",id:"onvaluechange-required",level:3},{value:"value (required)",id:"value-required",level:3},{value:"children (required)",id:"children-required",level:3}],c={toc:s};function m(t){let{components:o,...e}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,e,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Radio button group allows to control a group of radio buttons."),(0,a.kt)(u.Z,{screenshotData:{Android:"screenshots/radio-button-group-android.gif",iOS:"screenshots/radio-button-group-ios.gif"},baseUrl:"/react-native-paper/",mdxType:"ScreenshotTabs"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View } from 'react-native';\nimport { RadioButton, Text } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [value, setValue] = React.useState('first');\n\n  return (\n    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>\n      <View>\n        <Text>First</Text>\n        <RadioButton value=\"first\" />\n      </View>\n      <View>\n        <Text>Second</Text>\n        <RadioButton value=\"second\" />\n      </View>\n    </RadioButton.Group>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("span",null),(0,a.kt)("div",null,(0,a.kt)("h3",{id:"onvaluechange-required"},"onValueChange (required)")),(0,a.kt)(r.Z,{componentLink:"RadioButton/RadioButtonGroup",prop:"onValueChange",mdxType:"PropTable"}),(0,a.kt)("div",null,(0,a.kt)("h3",{id:"value-required"},"value (required)")),(0,a.kt)(r.Z,{componentLink:"RadioButton/RadioButtonGroup",prop:"value",mdxType:"PropTable"}),(0,a.kt)("div",null,(0,a.kt)("h3",{id:"children-required"},"children (required)")),(0,a.kt)(r.Z,{componentLink:"RadioButton/RadioButtonGroup",prop:"children",mdxType:"PropTable"}),(0,a.kt)("span",null),(0,a.kt)("span",null),(0,a.kt)("span",null))}m.isMDXComponent=!0}}]);