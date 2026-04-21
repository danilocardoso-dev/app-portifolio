import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../src/screens/MainScreen';
import SkillScreen from '../src/screens/SkillScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={MainScreen}
        options={{ title: 'Inicio', tabBarIcon: () => <Ionicons name="home" size={24} color="black" /> }} />
      <Tab.Screen name="Profile" component={SkillScreen} options={{ title: 'Skills ', tabBarIcon: () => <Ionicons name="person" size={24} color="black" /> }} />
    </Tab.Navigator>
  );
}