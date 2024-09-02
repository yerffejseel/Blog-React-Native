import React, { useContext } from "react";
import { View, Text, Button, FlatList} from "react-native";
import BlogContext from "../context/BlogContext";

function Index() {
    const {blogs, setBlogs} = useContext(BlogContext);
    return <View>
        <FlatList 
            data={blogs}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={(item) => {
                
            }}
        />
    </View>
}

export default Index;