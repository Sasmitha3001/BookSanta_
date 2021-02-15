import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'
import SettingScreen from '../screens/SettingScreen'
import NotificationScreen from '../screens/NotificationScreen';
import MyDonationScreen from '../screens/AllDonationScreen'
import ReceivedBooks from '../screens/ReceivedBooksScreen'

export const AppDrawerNavigator=createDrawerNavigator({
    Home: {screen:AppTabNavigator},
    Setting:{screen:SettingScreen},
    Notification:{screen:NotificationScreen},
    MyDonation:{screen:MyDonationScreen},
    ReceivedBooks:{screen:ReceivedBooks}
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
}
)
