import React , {Component} from "react";
import {View,Text,StyleSheet,StatusBar} from "react-native";
// import * as Font from "expo-font";
import Button from "../Button/Button";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {actionCreators as mansubActions} from "../../reducer";

//connect에 필요한 함수들 
const mapStateToProps = state =>
 ({ 
     isPlaying: state.isPlaying,
    elapsedTime : state.elapsedTime,
    timerDuration : state.timerDuration
})

const mapDispatchToProps = dispatch => ({ // 이렇게 쓰면 return 포함임. 
    startTimer : bindActionCreators(mansubActions.startTimer , dispatch), // dispatch꼭 써주기 
    restartTimer : bindActionCreators(mansubActions.restartTimer , dispatch),
    addSecond : bindActionCreators(mansubActions.addSecond , dispatch)
})

 class Timer extends Component {

    // async componentDidMount(){
    //     await Font.loadAsync({'BM-font': require('../../assets/fonts/BMHANNAPro.ttf')});
    // }
    
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        // console.log("currentprops is :",currentProps.isPlaying , "nextprops is : ",nextProps.isPlaying);
        if(!currentProps.isPlaying && nextProps.isPlaying){
            //start interval
            const timeInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({
                timeInterval
            })
        }else if(currentProps.isPlaying && !nextProps.isPlaying){//정지
            //stop interval
            clearInterval(this.state.timeInterval);
        }
    }

    render() {
        console.log(this.props);
        const {isPlaying , elapsedTime , timerDuration,startTimer,restartTimer} = this.props;
        return(
            <View style = { styles.container}>
                <StatusBar barStyle={"light-content"}></StatusBar>
                <View style = { styles.upper}>
                    <Text style = { styles.time}>{Math.floor((timerDuration-elapsedTime)/60)}:{(timerDuration-elapsedTime)%60 < 10 ? '0'+(timerDuration-elapsedTime)%60 : (timerDuration-elapsedTime)%60}</Text>
                </View>
                <View style = { styles.lower}>
                    {!isPlaying && (<Button iconName={"play-circle"} onPress={startTimer}></Button>)}
                     {isPlaying && (<Button iconName={"stop-circle"} onPress={restartTimer}></Button>)}
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
export default connect(mapStateToProps,mapDispatchToProps)(Timer);