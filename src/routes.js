import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

//Importing the pages
import CreateNote from './pages/CreateNote';
import Main from './pages/Main';
import FullNote from './pages/FullNote';

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{ title: 'Pain Relieve' }} />
            <Stack.Screen name="CreateNote" component={CreateNote} options={ {title: 'Criar uma nota'}}/>
            <Stack.Screen name="FullNote" component={FullNote} options={{title: 'Pain Relieve'}} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;