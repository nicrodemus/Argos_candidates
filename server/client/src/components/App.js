
//import './App.css';
import React,{Component} from "react";
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Header from "./Header";
import CrewNewMember from "./CrewNewMember"; 
import Landing from "./Landing"
class App extends Component{

  componentDidMount() {
    
    // this.props.fetchRecipe()
     this.props.fetchAllCrew();
   }
  render(){
  return (
    <div className="container">
      <  BrowserRouter>
      <div>
      <Header />
      <Switch> 
      <Route exact path="/form/new" component={CrewNewMember} />
      <Route path="/" component={Landing} />

      </Switch>
      </div>
       
        </BrowserRouter>
    </div>
  );
}
}
export default connect(null,actions)(App);
