import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240,
          },
          drawerPosition: 'right',
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Level 1',
            title: 'Level 1',
          }}
        />
        <Drawer.Screen
          name="level2" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Level 2',
            title: 'Level 2',
          }}
        />
        <Drawer.Screen
          name="level3" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Level 3',
            title: 'Level 3',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
