import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera136002Navigator from '../features/Camera136002/navigator';
import EmailAuth136001Navigator from '../features/EmailAuth136001/navigator';
import ArticleList135982Navigator from '../features/ArticleList135982/navigator';
import Maps135969Navigator from '../features/Maps135969/navigator';
import BlankScreen0135962Navigator from '../features/BlankScreen0135962/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Camera136002: { screen: Camera136002Navigator },
EmailAuth136001: { screen: EmailAuth136001Navigator },
ArticleList135982: { screen: ArticleList135982Navigator },
Maps135969: { screen: Maps135969Navigator },
BlankScreen0135962: { screen: BlankScreen0135962Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
