import { StyleSheet, Text } from 'react-native';
import { theme } from '../colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import Followings from './Followings';
import Home from "./Home";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <Text>홈화면</Text>;
}

function BookmarkScreen() {
  return <Text>저장 페이지</Text>;
}

function UploadScreen() {
  return <Text>업로드 페이지</Text>;
}

function ProfileScreen() {
  return <Text>마이 페이지</Text>;
}

export default function Main({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: theme.main,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Save"
        component={BookmarkScreen}
        options={{
          title: '저장',
          tabBarIcon: ({color, size}) => (
            <Icon name="bookmark" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          title: '업로드',
          tabBarIcon: ({color, size}) => (
            <Icon name="upload" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Heart"
        component={Followings}
        options={{
          title: '팔로잉',
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'MY',
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
