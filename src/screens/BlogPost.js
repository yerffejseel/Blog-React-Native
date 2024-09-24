import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Montserrat_600SemiBold, Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";

function BlogPost({ route }) {
    const[fontsLoaded] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_400Regular
    })
    const {title, content} = route.params;
    return <View>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.content}>{content}</Text>
    </View>
}

const Styles = StyleSheet.create({
    title: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 35,
        margin: 15
    },
    content: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 15,
        marginHorizontal: 15
    }
})

export default BlogPost;