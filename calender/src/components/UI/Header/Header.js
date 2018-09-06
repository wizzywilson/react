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
console.log()

    return(
      <Aux>
            <nav className="navbar navbar-default">
              <div>
                    <div className="logo">
                      <a className="navbar-brand" href="#">Calender</a>
                    </div>

                    <div className="d">
                        <ul className="nav navbar-nav">
                          <li><button onClick=""className="buton btn"><i className="fa fa-chevron-left"/></button></li>
                          <li><button onClick=""className="buton btn"><i className="fa fa-chevron-right"/></button></li>
                          <li><div className="year_month"><b>{this.props.date.year} / {moment(this.props.date.fulldate).format('MMMM')}</b></div></li>
                          <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Change<span className="caret"></span></a>
                              <ul className="dropdown-menu">
                                <li><a href="#">YEAR</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">MONTH</a></li>
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
    date:state.date,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({
      dHandler:(date)=> dispatch({type:'DATE',date:date,}),
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
