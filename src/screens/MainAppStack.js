import { Navigation } from 'react-native-navigation';
import { OnBoardingStackDefaultOptions } from './OnBoardingStack';
import {
  textColour,
  backgroundColour,
  redColour,
  veryLightGreyColour,
  bottomTabsBackgroundColor,
} from '../styles/colours';

const MAIN_APP_TOPBAR_TITLE_LIST = ['Nearby', 'Chat', 'Profile'];
const MAIN_APP_BOTTOM_TAB_TITLE_LIST = ['NEARBY', 'CHAT', 'PROFILE'];
const NEARBY_ICON_IDLE = require('../assets/images/nearby/nearbyTabIconIdle.png');
const NEARBY_ICON_ACTIVE = require('../assets/images/nearby/nearbyTabIconActive.png');
const CHAT_ICON_IDLE = require('../assets/images/chat/chatTabIconIdle.png');
const CHAT_ICON_ACTIVE = require('../assets/images/chat/chatTabIconActive.png');
const PROFILE_ICON_IDLE = require('../assets/images/profile/profileTabIconIdle.png');
const PROFILE_ICON_ACTIVE = require('../assets/images/profile/profileTabIconActive.png');

const goMainApp = () => {
  // XXX think about what's the default MainAppStackOptions
  // Navigation.setDefaultOptions({
  //   OnBoardingStackDefaultOptions,
  // });
  Navigation.setRoot({
    root: MainAppStack,
  });
};

const tabScreenOptions = (text) => ({
  layout: {
    // backgroundColor: bottomTabsBackgroundColor,
    orientation: ['portrait'], // An array of supported orientations
  },
  topBar: {
    largeTitle: {
      text,
      visible: true,
      fontSize: 30,
      color: textColour,
      fontFamily: 'RobotoSlab-Bold',
      // background: {
      //   color: bottomTabsBackgroundColor,
      // },
    },
    buttonColor: redColour,
    backButton: {
      fontFamily: 'RobotoSlab-Bold',
      color: redColour,
    },
    visible: true,
    drawBehind: false,
    animate: true,
    // transparent: true,
    // translucent: true,
    // hideOnScroll: false,
    noBorder: false,
    elevation: 0,
    background: {
      // color: bottomTabsBackgroundColor,
      transparent: true,
      color: 'transparent',
      // blur: true,
    },
    title: {
      text,
      fontFamily: 'RobotoSlab-Bold',
      color: textColour,
      fontSize: 16,
    },
  },
});

const bottomTabsOptions = {
  // when background to blur use transparent color
  // backgroundColor: 'transparent',
  // backgroundColor: bottomTabsBackgroundColor,
  // tabsAttachMode?: 'together' | 'afterInitialTab' | 'onSwitchToTab';
  tabsAttachMode: 'onSwitchToTab',
  translucent: true,
  transparent: true,
  drawBehind: true,
  background: {
    color: 'transparent',
    // color: bottomTabsBackgroundColor,
    blur: true,
    transparent: true,
  },
  // barStyle: 'black',
};

const bottomTabOptions = (text, icon, selectedIcon) => ({
  bottomTab: {
    text,
    icon,
    selectedIcon,
    fontFamily: 'Roboto-Medium',
    fontSize: 11,
    textColor: textColour,
    selectedTextColor: redColour,
    selectedFontFamily: 'Roboto-Bold',
    selectedFontSize: 11,
  },
});

const nearbyBottomTabOptions = bottomTabOptions(
  'NEARBY',
  NEARBY_ICON_IDLE,
  NEARBY_ICON_ACTIVE,
);

const chatBottomTabOptions = bottomTabOptions(
  'CHAT',
  CHAT_ICON_IDLE,
  CHAT_ICON_ACTIVE,
);

const profileBottomTabOptions = bottomTabOptions(
  'PROFILE',
  PROFILE_ICON_IDLE,
  PROFILE_ICON_ACTIVE,
);

// TODO refactor this into a map fn
const MainAppStack = {
  bottomTabs: {
    id: 'MainAppStack',
    children: [
      {
        stack: {
          children: [
            {
              component: {
                name: 'NearbyScreen',
                options: tabScreenOptions('Nearby'),
              },
            },
          ],
          options: nearbyBottomTabOptions,
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: 'ChatScreen',
                options: tabScreenOptions('Chat'),
              },
            },
          ],
          options: chatBottomTabOptions,
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: 'ProfileScreen',
                // FIXME
                options: tabScreenOptions('Profile'),
              },
            },
          ],
          options: profileBottomTabOptions,
        },
      },
    ],
    options: {
      bottomTabs: bottomTabsOptions,
    },
  },
};

export default goMainApp;
