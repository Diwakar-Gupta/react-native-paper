"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8524],{34230:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>v,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=e(87462),a=(e(67294),e(3905)),i=e(50214);e(58764);const r={title:"BottomNavigation.Bar"},s=void 0,c={unversionedId:"components/BottomNavigation/BottomNavigationBar",id:"components/BottomNavigation/BottomNavigationBar",title:"BottomNavigation.Bar",description:"A navigation bar which can easily be integrated with React Navigation's Bottom Tabs Navigator.",source:"@site/docs/components/BottomNavigation/BottomNavigationBar.mdx",sourceDirName:"components/BottomNavigation",slug:"/components/BottomNavigation/BottomNavigationBar",permalink:"/react-native-paper/docs/components/BottomNavigation/BottomNavigationBar",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/BottomNavigation/BottomNavigationBar.tsx",tags:[],version:"current",frontMatter:{title:"BottomNavigation.Bar"},sidebar:"components",previous:{title:"BottomNavigation",permalink:"/react-native-paper/docs/components/BottomNavigation/"},next:{title:"createMaterialBottomTabNavigator",permalink:"/react-native-paper/docs/components/BottomNavigation/createMaterialBottomTabNavigator"}},m={},l=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],p={toc:l};function v(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A navigation bar which can easily be integrated with ",(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/bottom-tab-navigator/"},"React Navigation's Bottom Tabs Navigator"),"."),(0,a.kt)("div",{class:"screenshots"},(0,a.kt)("img",{class:"small",src:"/react-native-paper/screenshots/bottom-navigation-tabs.jpg"})),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { View, StyleSheet } from 'react-native';\n\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { Text, BottomNavigation } from 'react-native-paper';\nimport Icon from 'react-native-vector-icons/MaterialCommunityIcons';\n\nconst Tab = createBottomTabNavigator();\n\nexport default function MyComponent() {\n  return (\n    <Tab.Navigator\n      screenOptions={{\n        headerShown: false,\n      }}\n      tabBar={({ navigation, state, descriptors, insets }) => (\n        <BottomNavigation.Bar\n          navigationState={state}\n         safeAreaInsets={insets}\n          onTabPress={({ route, preventDefault }) => {\n            const event = navigation.emit({\n              type: 'tabPress',\n              target: route.key,\n              canPreventDefault: true,\n            });\n\n            if (event.defaultPrevented) {\n              preventDefault();\n            } else {\n             navigation.dispatch({\n                ...CommonActions.navigate(route.name, route.params),\n                target: state.key,\n              });\n            }\n          }}\n          renderIcon={({ route, focused, color }) => {\n            const { options } = descriptors[route.key];\n            if (options.tabBarIcon) {\n              return options.tabBarIcon({ focused, color, size: 24 });\n            }\n\n            return null;\n          }}\n          getLabelText={({ route }) => {\n            const { options } = descriptors[route.key];\n            const label =\n              options.tabBarLabel !== undefined\n                ? options.tabBarLabel\n                : options.title !== undefined\n                ? options.title\n                : route.title;\n\n            return label;\n          }}\n        />\n      )}\n    >\n      <Tab.Screen\n        name=\"Home\"\n        component={HomeScreen}\n        options={{\n          tabBarLabel: 'Home',\n          tabBarIcon: ({ color, size }) => {\n            return <Icon name=\"home\" size={size} color={color} />;\n          },\n        }}\n      />\n      <Tab.Screen\n        name=\"Settings\"\n        component={SettingsScreen}\n        options={{\n          tabBarLabel: 'Settings',\n          tabBarIcon: ({ color, size }) => {\n            return <Icon name=\"cog\" size={size} color={color} />;\n          },\n        }}\n      />\n    </Tab.Navigator>\n  );\n}\n\nfunction HomeScreen() {\n  return (\n    <View style={styles.container}>\n      <Text variant=\"headlineMedium\">Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={styles.container}>\n      <Text variant=\"headlineMedium\">Settings!</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n")),(0,a.kt)("span",null),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(i.Z,{link:"BottomNavigation/BottomNavigationBar",mdxType:"PropTable"}),(0,a.kt)("span",null))}v.isMDXComponent=!0}}]);