import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, Header } from "@react-navigation/stack";
import Index from "./screens/Index";

const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Index" screenOptions={{headerTitle: "Blogs"}}>
                <Stack.Screen name="Index" component={Index} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;