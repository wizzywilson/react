import React,{Component} from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux'
import TextBox from '../../components/textBox/textBox'
import { Table } from 'reactstrap';
import classes from './Api.css'
import {connect} from 'react-redux'
import {load} from '../../store/action/action'

class Api extends Component{

  filterHandler = (e) =>{
    this.props.fHandler(e);
  }
  render(){

    if(this.props.datas.length===0){
      this.props.rowss();
    }



    return(
      <Aux>
          <TextBox look={this.filterHandler}/>

          <Table className={classes.tab}  borderless >
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>

                {this.props.display.map((data,index)=>(
                  <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.employee_name}</td>
                  <td>{data.employee_salary}</td>
                  <td>{data.employee_age}</td>
                </tr>
                ))}


            </tbody>
          </Table>


      </Aux>

    );
  }
}

const mapStateToProps = (state) =>{
  return({
    datas:state.red2.datas,
    display:state.red2.display,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({
      rowss:()=>dispatch(load()),
      fHandler:(e)=>dispatch({type:"FILTER",e:e})
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Api);
