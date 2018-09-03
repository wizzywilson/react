import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux'
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import classes from './User_In.css'
import {logout} from '../../store/Action/Action'
import { Redirect } from 'react-router-dom'




class user_in extends Component{


render(){

var p=null;
  if(this.props.tdata){


     p=(
      <table className="table table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {this.props.tdata.map((data,index)=>(
          <tr key={index}>
            <th>{data.id}</th>
            <th>{data.email}</th>
            <th>{data.first_name}</th>
            <th>{data.last_name}</th>
            <th>{data.role}</th>
          </tr>

        ))}

      </tbody>
    </table>
  )
  }

return(
  <Aux>


 {p}
 {this.props.auth? <div className={classes.na}> <NavLink    className="btn btn-danger  btn-lg btn-block"  onClick={()=>this.props.logout(this.props.auth)} to="/">Logout</NavLink></div> :<Redirect to="/" />}

  </Aux>
)

}

}

const mapStateToProps = (state) =>{
  return({
    login:state.login,
    tdata:state.tabledata,
  auth:state.auth,

  });
}

const mapDispatchToProps = (dispatch) =>{
  return({
    logout:(auth)=>dispatch(logout(auth))
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(user_in);
