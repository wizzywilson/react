import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux'
import Input from '../Input/Input'
import {connect} from 'react-redux';
import  './Home.css'
import {submitHandler} from '../../store/Action/Action'
import {changed} from '../../store/Action/Action'
import {Api} from '../../store/Action/Action'


window.onpopstate = function(event) {
alert('dd')
};


class Home extends Component{








  submit = (e) =>{
    e.preventDefault();


this.props.sHandler(this.props.login.uname.value,this.props.login.pass.value)
  }


componentDidUpdate(){
  if(this.props.auth){
  this.props.tabledata(this.props.auth);

  this.props.history.push('/user_in')




}
  }




  render(){


  const keys = Object.keys(this.props.login);

  if(this.props.auth){
  //  history.push('/new-location')
  }

  if(this.props.status===false){
    document.getElementById("para").style.visibility = "visible";
  }

  if(this.props.status===true){
    document.getElementById("para").style.visibility = "hidden";
  }




  return(
    <Aux>
      {this.props.status}
      <form >
        <div className="form-group">
          {keys.map((key,index)=>(
            <Input key={index} change={(event)=>this.props.changed(event,key)} value={this.props.login[key].value} type={this.props.login[key]}/>
          ))}
        </div>
        <button to="/user_in" onClick={this.submit} className="btn btn-primary link">Submit</button>

          <p id="para">Invalid username/password</p>

      </form>


    </Aux>


  );
  }
}

const mapStateToProps = (state) =>{
  return({
    login:state.login,
    status:state.lstatus,
    auth:state.auth,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({
    sHandler:(uname,pass)=> dispatch(submitHandler(uname,pass)),
    changed:(e,key) => dispatch(changed(e,key)),
    tabledata:(auth) => dispatch(Api(auth)),
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
