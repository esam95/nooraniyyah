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
          drawerPosition: 'left',
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Level 1',
            title: 'Level 1',
          }}
        />
        <Drawer.Screen
          name="level2"
          options={{
            drawerLabel: 'Level 2',
            title: 'Level 2',
          }}
        />
        <Drawer.Screen
          name="level3"
          options={{
            drawerLabel: 'Level 3',
            title: 'Level 3',
          }}
        />
        <Drawer.Screen
          name="level4"
          options={{
            drawerLabel: 'Level 4',
            title: 'Level 4',
          }}
        />
        <Drawer.Screen
          name="level5"
          options={{
            drawerLabel: 'Level 5',
            title: 'Level 5',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
