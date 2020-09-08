import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import CreateNote from './pages/CreateNote';
import Main from './pages/Main';

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{ title: 'Pain Relieve' }} />
            <Stack.Screen name="CreateNote" component={CreateNote} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;