import React , {Component} from "react";
import {View,Text,StyleSheet,StatusBar} from "react-native";
// import * as Font from "expo-font";
import Button from "./Button";


 class Timer extends Component {

    // async componentDidMount(){
    //     await Font.loadAsync({'BM-font': require('../../assets/fonts/BMHANNAPro.ttf')});
    // }


    render() {
        console.log(this.props);
        
        return(
            <View style = { styles.container}>
                <StatusBar barStyle={"light-content"}></StatusBar>
                <View style = { styles.upper}>
                    <Text style = { styles.time}>25:00</Text>
                </View>
                <View style = { styles.lower}>
                    <Button iconName={"play-circle"} onPress={()=> alert("it works")}></Button>
                    <Button iconName={"stop-circle"} onPress={()=> alert("it works")}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        
        backgroundColor : "#CE0B24"
    },
    upper : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#CE0B24"
    },
    time : {
        color : "white",
        fontSize : 120,
        // fontFamily : "BM-font",
        fontWeight : "normal"
    },
    lower : {
        flex: 1,
        fontSize : 50,
        color : "white",
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#CE0B24"
    }
})

export default Timer;