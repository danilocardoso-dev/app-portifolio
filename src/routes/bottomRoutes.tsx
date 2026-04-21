import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import SkillScreen from '../screens/SkillScreen';

const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Profile" component={SkillScreen} />
    </Tab.Navigator>
  );
}