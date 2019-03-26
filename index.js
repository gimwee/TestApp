import { Navigation } from "react-native-navigation";
import { MainAppStack } from './src/screens/MainAppStack';
import MainScreen from './src/containers/MainScreen/index';

Navigation.registerComponent('MainScreen', () => MainScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: MainAppStack,
  });
});
