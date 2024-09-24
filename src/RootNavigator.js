import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./screens/Index";
import { TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import BlogForm from "./screens/BlogForm";
import Ionicons from '@expo/vector-icons/Ionicons';
import BlogPost from "./screens/BlogPost";



const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Index" >
                <Stack.Screen 
                name="Index" 
                component={Index} 
                options={({ navigation }) => ({
                    headerTitle: "Blog List", 
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Form")}>
                            <AntDesign style={Styles.add} name="plus" size={24} color="black" />
                        </TouchableOpacity>
                    )
                })} />
                <Stack.Screen 
                    name="Form" 
                    component={BlogForm} 
                    options={({ navigation }) => ({
                        headerTitle: "Add a Blog",
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" />
                            </TouchableOpacity>
                        )
                    })}/>
                <Stack.Screen 
                    name="Blog"
                    component={BlogPost}
                    options={({ navigation }) => ({
                        headerTitle: "Blog Post",
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" />
                            </TouchableOpacity>
                        )
                    })}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Styles = StyleSheet.create({
    add: {
        marginHorizontal: 15
    }
})

export default RootNavigator;