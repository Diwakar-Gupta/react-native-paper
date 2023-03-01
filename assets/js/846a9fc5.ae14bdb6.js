"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4270],{4654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>w,frontMatter:()=>N,metadata:()=>v,toc:()=>b});var a=n(7462),r=n(7294),i=n(3905),o=n(3989),l=n(6767),p=n.n(l);const m=e=>{let{sourceColor:t}=e;const n=.12,a=.38,{schemes:r,palettes:i}=(0,o.qj)((0,o.fq)(p()(t).hex())),{light:l,dark:m}=["light","dark"].reduce(((e,t)=>{const o=r[t].toJSON(),l=["transparent",.05,.08,.11,.12,.14].reduce(((e,t,n)=>({...e,[`level${n}`]:0===n?t:p()(o.surface).mix(p()(o.primary),Number(t)).rgb().string()})),{}),m={surfaceDisabled:p()(o.onSurface).alpha(n).rgb().string(),onSurfaceDisabled:p()(o.onSurface).alpha(a).rgb().string(),backdrop:p()(i.neutralVariant.tone(20)).alpha(.4).rgb().string()};return{...e,[t]:Object.assign({},...Object.entries(o).map((e=>{let[t,n]=e;return{[t]:p()(n).rgb().string()}})),{elevation:l,...m})}}),{light:{},dark:{}});return{light:l,dark:m}},s=e=>{let{value:t,onValueChange:n,color:a}=e;const i=t?a:"none";return r.createElement(r.Fragment,null,r.createElement("input",{checked:t,onChange:n,className:"react-switch-checkbox",id:"react-switch-new",type:"checkbox"}),r.createElement("label",{style:{background:i},className:"react-switch-label",htmlFor:"react-switch-new"},r.createElement("span",{className:"react-switch-button"})))},c=e=>r.createElement("input",(0,a.Z)({className:"searchBar"},e)),u="purple",d=(e,t)=>{let n="";return n=e.startsWith("on")?`${e.charAt(2).toLowerCase()}${e.slice(3)}`:`on${e.charAt(0).toUpperCase()}${e.slice(1)}`,t[n]},h=["elevation","shadow","scrim","inverseSurface","inverseOnSurface","surfaceDisabled","onSurfaceDisabled","outlineVariant","backdrop","inversePrimary"],k={container:{margin:"16px"},colorView:{border:"1px solid #ccc",padding:"0px 0px 5px 5px",height:"100%",borderWidth:"1px 0px 0px 0px"},colorTitle:{fontSize:"0.8em"},copy:{padding:"10px",textAlign:"center",border:"1px solid #ccc",borderRadius:"2px",float:"right",marginRight:"10px",cursor:"pointer"},schemaView:{marginTop:"5px"},switchView:{display:"flex",flexDirection:"row",alignItems:"center",marginLeft:"20px"},switchLabel:{margin:0,fontWeight:"bold"},searchContainer:{display:"flex",flexDirection:"row",alignItems:"center"},error:{color:"red"}},g=()=>{const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(u),[i,o]=(0,r.useState)({light:{},dark:{}}),[l,p]=(0,r.useState)(!1),[g,N]=(0,r.useState)(""),f=(0,r.useRef)({light:{},dark:{}}),v=e?"dark":"light";(0,r.useEffect)((()=>{const e=setTimeout((()=>{if(CSS.supports("color",n)){const e=m({sourceColor:n});f.current={light:{...e.light},dark:{...e.dark}},h.forEach((t=>{delete e.light[t],delete e.dark[t]})),o({...e})}else""!==n.trim()&&N(`"${n}": it's not a color`)}),1e3);return()=>clearTimeout(e)}),[n]);const y=()=>{const e={colors:f.current[v]};return JSON.stringify(e,null,2)},b=Object.entries(i[v]);return r.createElement("div",{style:k.container},r.createElement("span",{style:k.searchContainer},r.createElement(c,{onBlur:()=>{""===n.trim()&&a(u)},type:"search",value:n,onChange:e=>{g&&N(""),a(e.target.value)}}),r.createElement("span",{style:k.switchView},r.createElement("p",{style:k.switchLabel},"Dark Mode:"),r.createElement(s,{value:e,color:"green",onValueChange:()=>t(!e)}))),r.createElement("p",{style:k.error},g),r.createElement("div",{className:"gridParent"},r.createElement("div",{className:"gridColors"},b.map(((e,t)=>r.createElement("span",{key:t,style:{backgroundColor:e[1],...k.colorView,color:d(e[0],i[v])}},r.createElement("p",{style:k.colorTitle},e[0]))))),r.createElement("div",{style:k.schemaView},r.createElement("pre",null,r.createElement("p",{onClick:()=>{navigator.clipboard.writeText(y()),p(!0),setTimeout((()=>p(!1)),1e3)},style:k.copy},l?"copied":"copy"),r.createElement("code",{className:"language-json"},y())))))},N={title:"Theming"},f="Theming",v={unversionedId:"guides/theming",id:"guides/theming",title:"Theming",description:'Note: To observe changes related to switching between light and dark mode in the app, ensure that the "Override force-dark" feature in the "developer options" settings on your Android device is not overridden.',source:"@site/docs/guides/02-theming.mdx",sourceDirName:"guides",slug:"/guides/theming",permalink:"/react-native-paper/docs/guides/theming",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/guides/02-theming.tsx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Theming"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/react-native-paper/docs/guides/getting-started"},next:{title:"Icons",permalink:"/react-native-paper/docs/guides/icons"}},y={},b=[{value:"Applying a theme to the whole app",id:"applying-a-theme-to-the-whole-app",level:2},{value:"Accessing theme properties",id:"accessing-theme-properties",level:2},{value:"Theme properties",id:"theme-properties",level:2},{value:"Extending the theme",id:"extending-the-theme",level:2},{value:"Creating dynamic theme colors",id:"creating-dynamic-theme-colors",level:2},{value:"Using schemes:",id:"using-schemes",level:3},{value:"Adapting React Navigation theme",id:"adapting-react-navigation-theme",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Simple built-in theme overrides",id:"simple-built-in-theme-overrides",level:3},{value:"Advanced theme overrides",id:"advanced-theme-overrides",level:3},{value:"Material Design 2",id:"material-design-2",level:2},{value:"Simple setup",id:"simple-setup",level:3},{value:"Advanced setup",id:"advanced-setup",level:3},{value:"Typescript",id:"typescript-1",level:3},{value:"Migrating to Material You",id:"migrating-to-material-you",level:3},{value:"Applying a theme to a paper component",id:"applying-a-theme-to-a-paper-component",level:2},{value:"Customizing all instances of a component",id:"customizing-all-instances-of-a-component",level:2},{value:"Dark Theme",id:"dark-theme",level:2},{value:"Gotchas",id:"gotchas",level:2}],C={toc:b};function w(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},C,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"theming"},"Theming"),(0,i.kt)("b",null,"Note:")," To observe changes related to switching between light and dark mode in the app, ensure that the ",(0,i.kt)("i",null,'"Override force-dark"')," feature in the ",(0,i.kt)("i",null,'"developer options"')," settings on your Android device is ",(0,i.kt)("b",null,"not overridden"),".",(0,i.kt)("h2",{id:"applying-a-theme-to-the-whole-app"},"Applying a theme to the whole app"),(0,i.kt)("p",null,"To support custom themes, paper exports a ",(0,i.kt)("inlineCode",{parentName:"p"},"Provider")," component. You need to wrap your root component with the provider to be able to support themes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nexport default function Main() {\n  return (\n    <PaperProvider>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("p",null,"By default React Native Paper will apply the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-paper/blob/main/src/styles/themes/v3/LightTheme.tsx"},"Material You theme (MD3)")," if no ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," prop is passed to to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Provider"),"."),(0,i.kt)("h2",{id:"accessing-theme-properties"},"Accessing theme properties"),(0,i.kt)("p",null,"Use the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"useTheme()")," hook to get access to the theme's variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { useTheme } from 'react-native-paper';\n\nexport default function PaymentScreen() {\n  const theme = useTheme();\n\n  return <View style={{ backgroundColor: theme.colors.primary }} />;\n}\n")),(0,i.kt)("p",null,"You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"withTheme()")," HOC exported from the library. If you wrap your component with the HOC, you'll receive the theme as a prop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { withTheme } from 'react-native-paper';\n\nfunction PaymentScreen({ theme }) {\n  return <View style={{ backgroundColor: theme.colors.primary }} />;\n}\n\nexport default withTheme(PaymentScreen);\n")),(0,i.kt)("h2",{id:"theme-properties"},"Theme properties"),(0,i.kt)("p",null,"You can change the theme prop dynamically and all the components will automatically update to reflect the new theme."),(0,i.kt)("p",null,"A theme usually contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dark")," (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"): whether this is a dark theme or light theme.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"version"),": specify which design system components should follow in the app"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"3 - new Material You (MD3)"),(0,i.kt)("li",{parentName:"ul"},"2 - previous Material Design (MD2)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mode")," (",(0,i.kt)("inlineCode",{parentName:"p"},"'adaptive' | 'exact'"),"): color mode for dark theme (See ",(0,i.kt)("a",{parentName:"p",href:"#dark-theme"},"Dark Theme"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"roundness")," (",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"): roundness of common elements, such as buttons.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"colors")," (",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"): various colors used throughout different elements."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"The primary key color is used to derive roles for key components across the UI, such as the FAB, prominent buttons, active states, as well as the tint of elevated surfaces.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onPrimary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"primaryContainer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onPrimaryContainer"))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"The secondary key color is used for less prominent components in the UI such as filter chips, while expanding the opportunity for color expression.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secondary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onSecondary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secondaryContainer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onSecondaryContainer"))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"The tertiary key color is used to derive the roles of contrasting accents that can be used to balance primary and secondary colors or bring heightened attention to an element.")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"The tertiary color role is left for teams to use at their discretion and is intended to support broader color expression in products.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tertiary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onTertiary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tertiaryContainer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onTertiaryContainer"))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"The neutral key color is used to derive the roles of surface and background, as well as high emphasis text and icons.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"background")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onBackground")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"surface")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onSurface"))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"The neutral variant key color is used to derive medium emphasis text and icons, surface variants, and component outlines.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"surfaceVariant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onSurfaceVariant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outline"))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"In addition to the accent and neutral key color, the color system includes a semantic color role for error")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onError")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"errorContainer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onErrorContainer"))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Surfaces at elevation levels 0-5 are tinted via color overlays based on the primary color, such as app bars or menus. The addition of a grade from 0-5 introduces tonal variation to the surface baseline.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"elevation")," (",(0,i.kt)("inlineCode",{parentName:"li"},"object"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level0")," - transparent"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level1")," - 5% opacity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level2")," - 8% opacity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level3")," - 11% opacity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level4")," - 12% opacity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level5")," - 14% opacity")))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Colors for disabled state")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"surfaceDisabled")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onSurfaceDisabled"))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"These additional role mappings exist in a scheme and are mapped to components where needed.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shadow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inverseOnSurface")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inverseSurface")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inversePrimary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"backdrop")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"fonts")," (",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"): various fonts styling properties under the text variant key used in component."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("inlineCode",{parentName:"li"},"variant")," e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"labelMedium"),"]"," (",(0,i.kt)("inlineCode",{parentName:"li"},"object"),"):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fontFamily")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"letterSpacing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fontWeight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lineHeight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fontSize")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"animation")," (",(0,i.kt)("inlineCode",{parentName:"p"},"object"),")"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scale")," - scale for all animations")))),(0,i.kt)("p",null,"When creating a custom theme, you will need to provide all of these properties."),(0,i.kt)("p",null,"If you don't use a custom theme, Paper will automatically turn animations on/off, depending on device settings."),(0,i.kt)("p",null,"Otherwise, your custom theme will need to handle it manually, using React Native's ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/accessibilityinfo"},"AccessibilityInfo API"),"."),(0,i.kt)("h2",{id:"extending-the-theme"},"Extending the theme"),(0,i.kt)("p",null,"Keeping your own properties in the theme is fully supported by our library:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport {\n  MD3LightTheme as DefaultTheme,\n  Provider as PaperProvider,\n} from 'react-native-paper';\nimport App from './src/App';\n\nconst theme = {\n  ...DefaultTheme,\n  // Specify custom property\n  myOwnProperty: true,\n  // Specify custom property in nested object\n  colors: {\n    myOwnColor: '#BADA55',\n  },\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("h2",{id:"creating-dynamic-theme-colors"},"Creating dynamic theme colors"),(0,i.kt)("p",null,"Dynamic Color Themes allows for generating two color schemes lightScheme and darkScheme, based on the provided source color.\nCreated schemes are following the Material Design 3 color system and covering colors structure from the Paper theme. User may generate these schemes using the following tool:"),(0,i.kt)(g,{mdxType:"DynamicColorTheme"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Passed source color into the util is translated into tones to automatically provide the range of tones that map to color roles. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"customColors",src:n(8047).Z,width:"1610",height:"696"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Source: ",(0,i.kt)("a",{parentName:"em",href:"https://m3.material.io/styles/color/the-color-system/custom-colors"},"Material You Color System"))),(0,i.kt)("h3",{id:"using-schemes"},"Using schemes:"),(0,i.kt)("p",null,"Once we have copied the color schemes from the generated JSON above, we can use by passing it to the colors in ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," object as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport {\n  MD3LightTheme as DefaultTheme,\n  Provider as PaperProvider,\n} from 'react-native-paper';\nimport App from './src/App';\n\nconst theme = {\n  ...DefaultTheme,\n  colors: yourGeneratedLightOrDarkScheme, // Copy it from the color codes scheme and then use it here\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("h2",{id:"adapting-react-navigation-theme"},"Adapting React Navigation theme"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"adaptNavigationTheme")," function takes an existing React Navigation theme and returns a React Navigation theme using the colors from Material Design 3. This theme can be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," so that React Navigation's UI elements have the same color scheme as Paper."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"adaptNavigationTheme(themes)\n")),(0,i.kt)("b",null,"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"NAME"),(0,i.kt)("th",{parentName:"tr",align:null},"TYPE"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"themes"),(0,i.kt)("td",{parentName:"tr",align:null},"object")))),(0,i.kt)("p",null,"Valid ",(0,i.kt)("inlineCode",{parentName:"p"},"themes")," keys are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reactNavigationLight")," () - React Navigation compliant light theme."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reactNavigationDark")," () - React Navigation compliant dark theme."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"materialLight")," () - React Native Paper compliant light theme."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"materialDark")," () - React Native Paper compliant dark theme.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// App.tsx\nimport { NavigationContainer, DefaultTheme } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { Provider, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';\nconst Stack = createStackNavigator();\nconst { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });\nexport default function App() {\n  return (\n    <Provider theme={MD3LightTheme}>\n      <NavigationContainer theme={LightTheme}>\n        <Stack.Navigator initialRouteName=\"Home\">\n          <Stack.Screen name=\"Home\" component={HomeScreen} />\n          <Stack.Screen name=\"Details\" component={DetailsScreen} />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </Provider>\n  );\n}\n")),(0,i.kt)("h2",{id:"typescript"},"TypeScript"),(0,i.kt)("p",null,"By default, TypeScript works well whenever you change the value of the built-in theme's properties. It gets more complicated when you want to extend the theme's properties or change their types. In order to fully support TypeScript, you will need to follow the guide that fits your use-case most accurately:"),(0,i.kt)("p",null,"There are two supported ways of overriding the theme:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("b",null,"Simple built-in theme overrides")," - when you only customize the values and the whole theme schema remains the same"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("b",null,"Advanced theme overrides")," - when you ",(0,i.kt)("i",null,"add new properties")," or ",(0,i.kt)("i",null,"change the built-in schema shape"))),(0,i.kt)("p",null,"\ud83d\udccd",(0,i.kt)("b",null,"Warning"),": TypeScript support for withTheme is currently limited to ",(0,i.kt)("b",null,"Material You (MD3)")," theme only. "),(0,i.kt)("i",null,"We are planning to provide a better support of handling custom theme overrides in future releases."),(0,i.kt)("h3",{id:"simple-built-in-theme-overrides"},"Simple built-in theme overrides"),(0,i.kt)("p",null,"You can provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," prop with a theme object with the same properties as the default theme:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nconst theme = {\n  ...MD3LightTheme, // or MD3DarkTheme\n  roundness: 2,\n  colors: {\n    ...MD3LightTheme.colors,\n    primary: '#3498db',\n    secondary: '#f1c40f',\n    tertiary: '#a1b2c3',\n  },\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("h3",{id:"advanced-theme-overrides"},"Advanced theme overrides"),(0,i.kt)("p",null,"If you need to modify the built-in theme schema by adding a new property or changing its type, you need to follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pass your theme overrides to the Provider component")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react';\nimport { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nconst theme = {\n  ...MD3LightTheme,\n\n  // Specify a custom property\n  custom: 'property',\n\n  // Specify a custom property in nested object\n  colors: {\n    ...MD3LightTheme.colors,\n    brandPrimary: '#fefefe',\n    brandSecondary: 'red',\n  },\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a typed ",(0,i.kt)("inlineCode",{parentName:"li"},"useAppTheme()")," hook in your project")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react';\nimport {\n  MD3LightTheme,\n  Provider as PaperProvider,\n  useTheme,\n} from 'react-native-paper';\nimport App from './src/App';\n\nconst theme = {\n  ...MD3LightTheme,\n\n  // Specify a custom property\n  custom: 'property',\n\n  // Specify a custom property in nested object\n  colors: {\n    ...MD3LightTheme.colors,\n    brandPrimary: '#fefefe',\n    brandSecondary: 'red',\n  },\n};\n\nexport type AppTheme = typeof theme;\n\nexport const useAppTheme = () => useTheme<AppTheme>();\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Start using the ",(0,i.kt)("inlineCode",{parentName:"li"},"useAppTheme()")," hook across your components in the whole app")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react';\nimport { useAppTheme } from './App';\n\nexport default function HomeScreen() {\n  const {\n    colors: { brandPrimary },\n  } = useAppTheme();\n\n  return <View style={{ backgroundColor: brandPrimary }}>...</View>;\n}\n")),(0,i.kt)("h2",{id:"material-design-2"},"Material Design 2"),(0,i.kt)("p",null,"Using Material Design 2 is ",(0,i.kt)("b",null,"fully supported in React Native Paper v5.x"),"."),(0,i.kt)("h3",{id:"simple-setup"},"Simple setup"),(0,i.kt)("p",null,"In order to use the Material Design 2 theme you can just pass ",(0,i.kt)("inlineCode",{parentName:"p"},"{ version: 2 }")," to the PaperProvider theme prop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={{ version: 2 }}>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("p",null,"Specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"{ version: 2 }")," tells React Native Paper to use the built in Material Design 2 theme, so you don't have to fully extend it on your own."),(0,i.kt)("h3",{id:"advanced-setup"},"Advanced setup"),(0,i.kt)("p",null,"As with any theme, you can also specify your custom properties within the Material Design 2 theme:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { MD2LightTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nexport default function Main() {\n  const theme = {\n    ...MD2LightTheme,\n\n    // Specify a custom property\n    custom: 'property',\n\n    // Specify a custom nested property\n    colors: {\n      ...MD2LightTheme.colors,\n      primary: '#fefefe',\n    },\n  };\n\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("h3",{id:"typescript-1"},"Typescript"),(0,i.kt)("p",null,"Due to the amount of changes in the theme's schema shape it falls into the ",(0,i.kt)("a",{parentName:"p",href:"#advanced-theme-overrides"},"Advanced theme overrides")," category. The steps are identical as with any advanced theme, just make sure to extend the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"MD2LightTheme")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"MD2DarkTheme")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"MD3LightTheme")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"MD3DarkTheme"),"."),(0,i.kt)("p",null,"The final example for Material Design 2 would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react';\nimport {\n  MD2LightTheme,\n  Provider as PaperProvider,\n  useTheme,\n} from 'react-native-paper';\nimport App from './src/App';\n\nconst theme = {\n  // Extend Material Design 2 theme\n\n  ...MD2LightTheme, // or MD2DarkTheme\n\n  // Specify a custom property\n  myOwnProperty: true,\n\n  // Specify a custom nested property\n  colors: {\n    ...MD2LightTheme.colors,\n    myOwnColor: '#BADA55',\n  },\n};\n\nexport type AppTheme = typeof theme;\n\nexport const useAppTheme = () => useTheme<AppTheme>();\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n\n// App.tsx\n\nexport default function App() {\n  const { theme } = useAppTheme();\n\n  return <View style={{ backgroundColor: theme.colors.primary }} />;\n}\n")),(0,i.kt)("h3",{id:"migrating-to-material-you"},"Migrating to Material You"),(0,i.kt)("p",null,"If you are migrating from Material Design 2 (4.x and lower) to Material You (5.x), please refer to our ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/introducing-v5-with-material-you.html"},"Migration Guide")),(0,i.kt)("h2",{id:"applying-a-theme-to-a-paper-component"},"Applying a theme to a paper component"),(0,i.kt)("p",null,"If you want to change the theme for a certain component from the library, you can directly pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," prop to the component. The theme passed as the prop is merged with the theme from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Provider"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button } from 'react-native-paper';\n\nexport default function ButtonExample() {\n  return (\n    <Button raised theme={{ roundness: 3 }}>\n      Press me\n    </Button>\n  );\n}\n")),(0,i.kt)("h2",{id:"customizing-all-instances-of-a-component"},"Customizing all instances of a component"),(0,i.kt)("p",null,"Sometimes you want to style a component in a different way everywhere, but don't want to change the properties in the theme, so that other components are not affected. For example, say you want to change the font for all your buttons, but don't want to change ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.fonts.labelLarge")," because it affects other components."),(0,i.kt)("p",null,"We don't have an API to do this, because you can already do it with components:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button } from 'react-native-paper';\n\nexport default function FancyButton(props) {\n  return (\n    <Button\n      theme={{ typescale: { labelLarge: { letterSpacing: 1 } } }}\n      {...props}\n    />\n  );\n}\n")),(0,i.kt)("p",null,"Now you can use your ",(0,i.kt)("inlineCode",{parentName:"p"},"FancyButton")," component everywhere instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," from Paper."),(0,i.kt)("h2",{id:"dark-theme"},"Dark Theme"),(0,i.kt)("p",null,"Since 3.0 we adapt dark theme to follow ",(0,i.kt)("a",{parentName:"p",href:"https://material.io/design/color/dark-theme.html"},"Material design guidelines"),". ",(0,i.kt)("br",null),"\nIn contrast to light theme, dark theme by default uses ",(0,i.kt)("inlineCode",{parentName:"p"},"surface")," colour instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"primary")," on large components like ",(0,i.kt)("inlineCode",{parentName:"p"},"AppBar")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"BottomNavigation"),".",(0,i.kt)("br",null),"\nThe dark theme adds a white overlay with opacity depending on elevation of surfaces. It uses it for the better accentuation of surface elevation. Using only shadow is highly imperceptible on dark surfaces."),(0,i.kt)("p",null,"We are aware that users often use dark theme in their own ways and may not want to use the default dark theme features from the guidelines.",(0,i.kt)("br",null),"\nThat's why if you are using dark theme you can switch between two dark theme ",(0,i.kt)("inlineCode",{parentName:"p"},"mode"),"s:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exact")," where everything is like it was before. ",(0,i.kt)("inlineCode",{parentName:"li"},"Appbar")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"BottomNavigation")," will still use primary colour by default.",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"adaptive")," where we follow ",(0,i.kt)("a",{parentName:"li",href:"https://material.io/design/color/dark-theme.html"},"Material design guidelines"),", the surface will use white overlay with opacity to show elevation, ",(0,i.kt)("inlineCode",{parentName:"li"},"Appbar")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"BottomNavigation")," will use surface colour as a background.")),(0,i.kt)("p",null,"If you don't use a custom theme, Paper will automatically change between the default theme and the default dark theme, depending on device settings."),(0,i.kt)("p",null,"Otherwise, your custom theme will need to handle it manually, using React Native's ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/appearance"},"Appearance API"),"."),(0,i.kt)("h2",{id:"gotchas"},"Gotchas"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Provider")," exposes the theme to the components via ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React's context API"),", which means that the component must be in the same tree as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Provider"),". Some React Native components will render a different tree such as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Modal"),", in which case the components inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"Modal")," won't be able to access the theme. The work around is to get the theme using the ",(0,i.kt)("inlineCode",{parentName:"p"},"withTheme")," HOC and pass it down to the components as props, or expose it again with the exported ",(0,i.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," component."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Modal")," component from the library already handles this edge case, so you won't need to do anything."))}w.isMDXComponent=!0},8047:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/custom-colors-f699d24b3730422c7fee32413f1ac396.png"}}]);