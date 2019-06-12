import {connect} from "react-redux";
import {Timer} from "./presenter";



// const mapStateToProps = (state) =>({
    
//     isPlaying : state.isPlaying,
//     elapsedTime : state.elapsedTime,
//     timeDuration : state.timeDuration
// })
console.log("asdfsadf");
function mapStateToProps(state){
    console.log("asdfasdF");
    const { isPlaying , elapsedTime,timeDuration} = state;
    return{
        
        isPlaying,
        elapsedTime,
        timeDuration
    }
}

export default connect(mapStateToProps)(Timer);