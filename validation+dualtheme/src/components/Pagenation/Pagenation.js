import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './Pagenation.css'
import {NavLink} from 'react-router-dom';
import {logout} from '../../store/Action/Action'
import { Redirect } from 'react-router-dom'

class Pagenation extends Component{



  handleClick = (event) => {

          this.props.pHandler(event.target.id);

      }


  render(){

          const indexOfLast = this.props.curpage * this.props.perpage;
          const indexOfFirst = indexOfLast - this.props.perpage;
          const currentList = this.props.list.slice(indexOfFirst, indexOfLast);
var classtype=null;
          if(this.props.scroll){
            classtype="page"
          }




  var renderList=null;
  if(this.props.list){

var rows=null;
        if(this.props.scroll){
          rows=this.props.list.map((data,index)=>(
            <tr key={index}>
              <th>{data.id}</th>
              <th>{data.email}</th>
              <th>{data.first_name}</th>
              <th>{data.last_name}</th>
              <th>{data.role}</th>
            </tr>

          ))
        }
        else{
          rows=currentList.map((data,index)=>(
            <tr key={index}>
              <th>{data.id}</th>
              <th>{data.email}</th>
              <th>{data.first_name}</th>
              <th>{data.last_name}</th>
              <th>{data.role}</th>
            </tr>

          ))
        }

         renderList=(
           <div id="table-scroll" className="table-scroll">
  <div ></div>
  <div className="table-wrap">
    <table id="main-table" className="main-table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Email</th>
          <th scope="col">F_name</th>
          <th scope="col">L_name</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>

    </table>
  </div>
</div>
     )
   }





        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.list.length / this.props.perpage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                {number}
              </li>
   );
 });


    return(
      <div>

               {renderList}
               {this.props.auth? <div> <NavLink    className="btn btn-danger  btn-lg btn-block"  onClick={()=>this.props.logout(this.props.auth)} to="/">Logout</NavLink></div> :<Redirect to="/" />}

             {this.props.scroll? null:<ul className="pagelinks">{renderPageNumbers}</ul>}

           </div>
  );
  }

}

const mapStateToProps = (state) =>{
  return({
        list:state.page.list,
        curpage:state.page.currentpage,
        perpage:state.page.perpage,
        tdata:state.tabledata,
      auth:state.auth,
      scroll:state.scroll,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({
        pHandler:(pagenum) => dispatch({type:'PAGEHANDLER',pagenum:pagenum}),
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Pagenation);
