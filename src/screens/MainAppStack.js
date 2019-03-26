
const tabOptions1 = {
  bottomTab: {
    textColor: 'red',
    selectedTextColor: 'red',
    fontFamily: 'Helvetica',
    fontSize: 10,
    selectedIconColor: 'red',
    icon: require('../assets/images/tab_icon_map.png'),
  },
};
const tabOptions2 = {
  bottomTab: {
    textColor: 'red',
    selectedTextColor: 'red',
    fontFamily: 'Helvetica',
    fontSize: 10,
    selectedIconColor: 'red',
    icon: require('../assets/images/tab_icon_list.png'),
  },
};
const tabOptions3 = {
  bottomTab: {
    textColor: 'red',
    selectedTextColor: 'red',
    fontFamily: 'Helvetica',
    fontSize: 10,
    selectedIconColor: 'red',
    icon: require('../assets/images/tab_icon_favourites.png'),
  },
};
const tabOptions4 = {
  bottomTab: {
    textColor: 'red',
    selectedTextColor: 'red',
    fontFamily: 'Helvetica',
    fontSize: 10,
    selectedIconColor: 'red',
    icon: require('../assets/images/tab_icon_wallet.png'),
  },
};

const tabScreenOptions = (text) => ({
  layout: {
    // backgroundColor: bottomTabsBackgroundColor,
    orientation: ['portrait'], // An array of supported orientations
  },
  topBar: {

    buttonColor: 'red',
    leftButtons: [
      {
        id: 'profile',
        icon: require('../assets/images/icon_profile.png'),
      }
    ],
    rightButtons: [
      {
        id: 'profile',
        icon: require('../assets/images/icon_filter.png'),
      }
    ],
    visible: true,
    drawBehind: false,
    animate: true,
    elevation: 2,

    title: {
      text,
      fontFamily: 'RobotoSlab-Bold',
      color: 'red',
      fontSize: 16,
    },
  },
});

const componentOptions1 = {
  topBar: {
    title: {
      text: 'Main',
    },
  },
};

export const MainAppStack = {
  bottomTabs: {
    id: 'MainAppStack',
    children: [
      {
        stack: {
          children: [
            {
              component: {
                name: 'MainScreen',
                options: tabScreenOptions('EatClub'),
              },
            },
          ],
          options: tabOptions1,
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: 'MainScreen',
                options: componentOptions1,
              },
            },
          ],
          options: tabOptions2,
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: 'MainScreen',
                options: componentOptions1,
              },
            },
          ],
          options: tabOptions3,
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: 'MainScreen',
                options: componentOptions1,
              },
            },
          ],
          options: tabOptions4,
        },
      },
    ],
  },
};
