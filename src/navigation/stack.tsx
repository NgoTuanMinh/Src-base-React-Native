import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenName from '../utils/screenName';
import colors from '../utils/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBar from '../components/common/bottomTabBar/BottomTabBar';
import {DetailSoldScreen, ExploreScreen, HomeScreen, ProfileScreen} from '../screens';
import DialogCommon from '../components/common/dialog/Dialog';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Stack = createStackNavigator();
const Home = createStackNavigator();
const Explore = createStackNavigator();
const Profile = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export const RootStack = () => {
  return (
    <>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenName.BOTTOM_STACK}
          component={BottomStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <DialogCommon />
    </>
  );
};

const HomeStack = () => {
  return (
    <Home.Navigator
      screenOptions={{cardStyle: {backgroundColor: colors.white}}}>
      <Home.Screen
        name={ScreenName.HOME_SCREEN}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Home.Screen
        name={ScreenName.DETAIL_SOLD_SCREEN}
        component={DetailSoldScreen}
        options={{headerShown: false}}
      />
      {/* <Home.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} options={{header: ({ navigation }) => <Header title="Home" isBackButton={false} navigation={navigation} />}} /> */}
    </Home.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <Explore.Navigator
      screenOptions={{cardStyle: {backgroundColor: colors.white}}}>
      <Explore.Screen
        name={ScreenName.EXPLORE_SCREEN}
        component={ExploreScreen}
        options={{headerShown: false}}
      />
    </Explore.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Profile.Navigator
      screenOptions={{cardStyle: {backgroundColor: colors.white}}}>
      <Profile.Screen
        name={ScreenName.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Profile.Navigator>
  );
};

const BottomStack = () => {
  return (
    <>
      <BottomTab.Navigator tabBar={(props: any) => <BottomTabBar {...props} />}>
        <BottomTab.Screen
          name={ScreenName.HOME_STACK}
          component={HomeStack}
          options={{headerShown: false}}
        />
        <BottomTab.Screen
          name={ScreenName.EXPLORE_STACK}
          component={ExploreStack}
          options={{headerShown: false}}
        />
        <BottomTab.Screen
          name={ScreenName.PROFILE_STACK}
          component={ProfileStack}
          options={{headerShown: false}}
        />
      </BottomTab.Navigator>
    </>
  );
};
