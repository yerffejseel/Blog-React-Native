import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";

function BlogForm() {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular
    });
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const { addBlogPost } = useContext(Context);

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
            <Text style={Styles.title}>Blog Title:</Text>
            <TextInput 
                style={Styles.titleInput}
                placeholder="Title"
                value={title}
                onChangeText={(change) => setTitle(change)}
            />
            <Text style={Styles.title}>Blog Content:</Text>
            <TextInput 
                multiline
                numberOfLines={15}
                style={Styles.body}
                placeholder="Content"
                value={body}
                onChangeText={(change) => setBody(change)}
            />
            <Button 
                title="Submit"
                onPress={() => {
                    addBlogPost({title: title, content: body})
                    navigation.navigate("Index")
                }}
            />
        </View>
    </TouchableWithoutFeedback>
}

const Styles = StyleSheet.create({
    title: {
        marginHorizontal: 10,
        marginTop: 10
    },
    titleInput: {
        paddingHorizontal: 10,
        height: 30,
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
        borderRadius: 10
    },
    body: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 15,
        lineHeight: 20,
        paddingHorizontal: 10,
        height: 300,
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
        borderRadius: 10
    }
})

export default BlogForm;