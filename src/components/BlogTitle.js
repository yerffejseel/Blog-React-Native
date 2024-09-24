import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";

function BlogTitle(props) {
    const navigation = useNavigation();
    const { deleteBlogPost } = useContext(Context)
    return <TouchableOpacity onPress={() => navigation.navigate("Blog", {title: props.title, content: props.content})}>
        <View style={Styles.blog}>
            <Text style={Styles.title}>{props.title}</Text>
            <TouchableOpacity
                onPress={() => deleteBlogPost({title: props.title, content: props.content})}>
                <EvilIcons name="trash" size={40} color="black" />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
}

const Styles = StyleSheet.create({
    blog: {
        display: "flex",
        flexDirection: "row",
        borderColor: "black",
        borderWidth: "1px",
        margin: 10,
        alignItems:"center",
        justifyContent: "space-between"
    }, 
    title: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 30,
        margin: 10
    }
});

export default BlogTitle;