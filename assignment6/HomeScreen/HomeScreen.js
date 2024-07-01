import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header"
import OurStory from "./OurStory"
import Clothes from "./Clothes";

export default function HomeScreen(){
    return(
    <View style={styles.container}>
        <ScrollView>
            <Header />
            <OurStory />
            <Clothes />
        </ScrollView>
    </View>
)

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

