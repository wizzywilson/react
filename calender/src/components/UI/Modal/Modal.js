import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../../hoc/Aux/Aux'
import './Modal.css'
var moment = require('moment');

class Modal extends Component{

  componentDidUpdate ()
  	{


  	        this.refs.myTextInput1.value = moment(this.props.date,"MM-DD-YYYY").format('YYYY-MM-DD');
            this.refs.myTextInput2.value = moment(this.props.date,"MM-DD-YYYY").format('YYYY-MM-DD');

  this.refs.myTextInput3.value="13:30";
    this.refs.myTextInput4.value="13:30";
    this.refs.myTextInput5.value="Declined because I am out of office";

  	}
    addtime = () =>{
      document.getElementById("Time1").style.display="block";
      document.getElementById("Time2").style.display="block";

      document.getElementById('sub').style.display="none";
      console.log('dd');
    }

    privacy = () =>{
      
    }

  render(){
    return(<div>
      <div class="container">

        {/* <!-- Trigger the modal with a button --> */}
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" id="buton" data-target="#myModal">Open Modal</button>

        {/* <!-- Modal --> */}
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">

            {/* <!-- Modal content--> */}
            <div class="modal-content">

              <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div>
                  <input type='text' id="tex" placeholder="Add title and time" />
                  <div className="butonSet container">
                    <button name="name" className="btn btn-primary btn-sm modalbtn"><b>Event</b></button>
                    <button name="name" className="btn btn-primary btn-sm modalbtn" ><b>Out of office</b></button>
                    <button name="name" className="btn btn-primary btn-sm modalbtn" ><b>Appointment slots</b></button>

                  </div>


                    <div className="row">
                      <div class="col-sm-1"><i class="far fa-clock"></i></div>
                      <div class="col-sm-3"><input  className="Ip" type="date" ref = "myTextInput1" /></div>
                      <div class="col-sm-2" id="Time2"><input className="tim" ref = "myTextInput4" type="time" /></div>

                      <div class="col-sm-3"><input className="Ip"  type="date" ref = "myTextInput2" /></div>
                      <div class="col-sm-2" id="Time1"><input className="tim" ref = "myTextInput3" type="time" /></div>
                      <div class="col-sm-3"><button onClick={this.addtime} id ="sub" className="btn btn-default btn-sm">ADD TIME</button></div>
                    </div>


                    <div className="row">
                      <div class="col-sm-1"><i class="far fa-calendar-times"></i></div>
                      <div class="col-sm-2"><input type='text' ref = "myTextInput5" id="decline" placeholder="Add title and time" /></div>
                    </div>



                    <div className="row">
                      <div class="col-sm-1">  <i class="fas fa-lock"></i></div>
                      <div class="col-sm-2"><button className="btn btn-default btn-sm" id="priv" onClick={this.privacy}>Public</button></div>
                    </div>

                    {/* <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Change<span className="caret"></span></a>
                        <ul className="dropdown-menu">
                          <li><a onClick={()=>this.props.select('y')} >YEAR</a></li>
                          <li role="separator" className="divider"></li>
                          <li><a onClick={()=>this.props.select('m')} >MONTH</a></li>
                       </ul>
                    </li> */}




                  {/* <div className="eventset">
                    <i class="far fa-clock"></i>
                    <input type="date" ref = "myTextInput2" /><button className="btn btn-default">ADD TIME</button>
                  </div> */}
                </div>
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>);
  }
}

const mapStateToProps = (state) =>{{


}
  return({
    month:state.month,
    day:state.day,
    year:state.year,
    date:state.date,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({

  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);
