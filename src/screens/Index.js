import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet} from "react-native";
import { Context } from "../context/BlogContext";
import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";
import BlogTitle from "../components/BlogTitle";

function Index() {
    const {state, deleteBlogPost} = useContext(Context);
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular
    })
    return !state.length ? <Text style={Styles.text}>No Blogs to Display</Text> : 
        (<View>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return <BlogTitle title={item.title} content={item.content}/>
                }}
            />      
        </View>)
}

const Styles = StyleSheet.create({
    text: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 30,
        margin: 20,
        alignSelf: "center"
    }
})

export default Index;