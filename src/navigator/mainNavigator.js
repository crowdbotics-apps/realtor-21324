import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList135982Navigator from '../features/ArticleList135982/navigator';
import Maps135969Navigator from '../features/Maps135969/navigator';
import BlankScreen0135962Navigator from '../features/BlankScreen0135962/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
