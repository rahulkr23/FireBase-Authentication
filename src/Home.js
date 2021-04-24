import React , {Component} from "react";
import firebase from "./config/firebase";

class Home extends Component{
    constructor(props)
    {
        super(props)
        this.state={
         
        }
    }
    logout(){
        firebase.auth().signOut();
    }
    render()
    {
        return(
            <div>
               <h1>You Are Successfully Logged In !!</h1>
               <button onClick={this.logout}>Logout</button>
            </div>
        )
    }

}
export default Home;