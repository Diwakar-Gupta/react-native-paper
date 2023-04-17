import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import {
  CommonActions,
  Link,
  ParamListBase,
  Route,
  TabNavigationState,
} from '@react-navigation/native';

import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import MaterialCommunityIcon from '../../components/MaterialCommunityIcon';
import { useLocaleDirection } from '../../core/Localization';
import { useNavigationLink } from '../adapter';
import type {
  MaterialBottomTabDescriptorMap,
  MaterialBottomTabNavigationConfig,
  MaterialBottomTabNavigationHelpers,
} from '../types';

type Props = MaterialBottomTabNavigationConfig & {
  state: TabNavigationState<ParamListBase>;
  navigation: MaterialBottomTabNavigationHelpers;
  descriptors: MaterialBottomTabDescriptorMap;
};

export default function MaterialBottomTabView({
  state,
  navigation,
  descriptors,
  ...rest
}: Props) {
  const buildLink = useNavigationLink();
  const direction = useLocaleDirection();

  return (
    <BottomNavigation
      {...rest}
      onIndexChange={noop}
      navigationState={state}
      renderScene={({ route }) => descriptors[route.key].render()}
      renderTouchable={
        Platform.OS === 'web'
          ? ({
              onPress,
              route,
              accessibilityRole: _0,
              borderless: _1,
              centered: _2,
              rippleColor: _3,
              style,
              ...rest
            }) => {
              return (
                <Link
                  {...rest}
                  // @ts-expect-error: to could be undefined, but it doesn't affect functionality
                  to={buildLink(route.name, route.params)}
                  accessibilityRole="link"
                  onPress={(e: any) => {
                    if (
                      !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && // ignore clicks with modifier keys
                      (e.button == null || e.button === 0) // ignore everything but left clicks
                    ) {
                      e.preventDefault();
                      onPress?.(e);
                    }
                  }}
                  style={[styles.touchable, style]}
                />
              );
            }
          : undefined
      }
      renderIcon={({ route, focused, color }) => {
        const { options } = descriptors[route.key];

        if (typeof options.tabBarIcon === 'string') {
          return (
            <MaterialCommunityIcon
              direction={direction}
              name={options.tabBarIcon}
              color={color}
              size={24}
            />
          );
        }

        if (typeof options.tabBarIcon === 'function') {
          return options.tabBarIcon({ focused, color });
        }

        return null;
      }}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];

        return options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : (route as Route<string>).name;
      }}
      getColor={({ route }) => descriptors[route.key].options.tabBarColor}
      getBadge={({ route }) => descriptors[route.key].options.tabBarBadge}
      getAccessibilityLabel={({ route }) =>
        descriptors[route.key].options.tabBarAccessibilityLabel
      }
      getTestID={({ route }) =>
        descriptors[route.key].options.tabBarButtonTestID
      }
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      onTabLongPress={({ route }) =>
        navigation.emit({ type: 'tabLongPress', target: route.key })
      }
    />
  );
}

const styles = StyleSheet.create({
  touchable: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function noop() {}
