import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux'
import './Header.css'
import {connect} from 'react-redux';
var moment = require('moment');
class Header extends Component{

  componentWillMount = () =>{
    var current = new Date();
    this.props.dHandler(current)

  }



  render(){


    return(
      <Aux>
            <nav className="navbar navbar-default">
              <div>
                    <div className="logo">
                      <a className="navbar-brand" href="#">Calender</a>
                    </div>

                    <div className="d">
                        <ul className="nav navbar-nav">
                          <li><button onClick={this.props.prev} className="buton btn"><i className="fa fa-chevron-left"/></button></li>
                          <li><button onClick={this.props.nex} className="buton btn"><i className="fa fa-chevron-right"/></button></li>
                          <li><div className="year_month"><b>{this.props.year} / {moment(this.props.year+'/'+this.props.month+'/'+this.props.day, 'DD/MM/YYYY').format('MMMM')}</b></div></li>
                          <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Change<span className="caret"></span></a>
                              <ul className="dropdown-menu">
                                <li><a onClick={()=>this.props.select('y')} >YEAR</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a onClick={()=>this.props.select('m')} >MONTH</a></li>
                             </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </Aux>
    )
  }
}

const mapStateToProps = (state) =>{
  return({
    date:state.fulldate,
    year:state.year,
    sel:state.select,
    month:state.month,
    day:state.day,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({
      dHandler:(date)=> dispatch({type:'DATE',date:date,}),
      select:(x)=>dispatch({type:'SELECT',x:x}),
      nex:()=>dispatch({type:'NEXT'}),
      prev:()=>dispatch({type:'PREV'}),

  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
