import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../../hoc/Aux/Aux'
import './Modal.css'
var moment = require('moment');

class Modal extends Component{

  componentDidMount(){
    document.getElementById("1").click();
  }

  componentDidUpdate(){
    if(this.props.choose===1){
      this.refs.myTextInput1.value = moment(this.props.date,"MM-DD-YYYY").format('YYYY-MM-DD');
      this.refs.myTextInput2.value = moment(this.props.date,"MM-DD-YYYY").format('YYYY-MM-DD');
      this.refs.myTextInput3.value="13:30";
      this.refs.myTextInput4.value="13:30";
    }
    else if(this.props.choose===2){
      this.refs.myTextInput5.value="Declined because I am out of office";
    }
    else if(this.props.slotval==="Slots with duration"){
      this.refs.myTextInput7.value="13:30";
    }
  }

  save = () =>{
    const  date1=this.refs.myTextInput1.value;
    const  time2=this.refs.myTextInput3.value;
    const  time1=this.refs.myTextInput4.value;
    const  date2=this.refs.myTextInput2.value;
    const a1=document.getElementById('tex').value;
    if(this.props.choose===1){
      this.props.save(null,date1,time1,date2,time2,a1);
    }
    else if(this.props.choose===2){
      const msg=this.refs.myTextInput5.value;
      this.props.save(msg,date1,time1,date2,time2,a1);
    }
    else if(this.props.choose===3){
      let lasttime=null;
      if(this.props.slotval!=="Single slot"){
        lasttime=this.refs.myTextInput7.value;
      }
      this.props.save(lasttime,date1,time1,date2,time2,a1);
    }
  }


  addtime = () =>{
    document.getElementById("Time1").style.display="block";
    document.getElementById("Time2").style.display="block";
    document.getElementById('sub').style.display="none";
  }

  modalContent = (val) =>{
    if(val===1){
      document.getElementById(1).style.backgroundColor = '#4285f4';
      document.getElementById(2).style.backgroundColor = "white";
      document.getElementById(3).style.backgroundColor = "white";
      document.getElementById(1).style.color = "white";
      document.getElementById(2).style.color = "#757575";
      document.getElementById(3).style.color = "#757575";
      this.props.chooseHandler(1);
    }
    else if(val===2){
      document.getElementById(1).style.backgroundColor = "white";
      document.getElementById(2).style.backgroundColor = '#4285f4';
      document.getElementById(3).style.backgroundColor = "white";
      document.getElementById(1).style.color = "#757575";
      document.getElementById(2).style.color = "white";
      document.getElementById(3).style.color = "#757575";
      this.props.chooseHandler(2);
    }
    else if(val===3){
      document.getElementById(1).style.backgroundColor = "white";
      document.getElementById(2).style.backgroundColor = "white";
      document.getElementById(3).style.backgroundColor = '#4285f4';
      document.getElementById(1).style.color = "#757575";
      document.getElementById(2).style.color = "#757575";
      document.getElementById(3).style.color = "white";
      this.props.chooseHandler(3);
    }

  }

  render(){
    let p=null;
    if(this.props.choose===2){
      p=(
        <Aux>
          <div className="row">
            <div className="col-xs-1 f"><i className="far fa-calendar-times"></i></div>
            <div className="col-xs-2 f"><input type='text' ref = "myTextInput5" id="decline" placeholder="Add title and time" /></div>
          </div>

          <div className="row">
            <div className="col-xs-1">  <i className="fas fa-lock"></i></div>
            <div className="col-xs-2">
              <div className="dropdown">
                <button className="btn btn-default btn-sm dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">{this.props.privacyval}
                <span className="caret"></span></button>
                <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                  <li role="presentation"><a onClick={()=>this.props.privacy("Public")} role="menuitem" tabindex="-1" >Public</a></li>
                  <li role="presentation"><a onClick={()=>this.props.privacy("Private")} role="menuitem" tabindex="-1" >Private</a></li>
                </ul>
              </div>
            </div>
          </div>
        </Aux>
      )
    }
    else if(this.props.choose===3){
      p=(
          <div className="row">
            <div className="col-xs-1">  </div>
            <div className="col-xs-2">
              <div className="dropdown">
                <button className="btn btn-default btn-sm dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">{this.props.slotval}
                <span className="caret"></span></button>
                <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                  <li role="presentation"><a onClick={()=>this.props.slot("Slots with duration")} role="menuitem" tabindex="-1" >Slots with duration</a></li>
                  <li role="presentation"><a onClick={()=>this.props.slot("Single slot")} role="menuitem" tabindex="-1" >Single slot</a></li>
                </ul>
              </div>
            </div>
            {this.props.slotval !== "Single slot" ? <div className="col-xs-4" id="lt"> <input className="tim" step='1' ref = "myTextInput7" type="time" /></div> :null}
          </div>
      )
    }

    return(
      <div >
        <div className="container">

          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" id="buton" data-target="#myModal">Open Modal</button>

          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">

                <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <div>

                    <input type='text' id="tex" placeholder="Add title and time" />

                    <div className="butonSet container">
                      <button  id="1"  onClick={()=>this.modalContent(1)} className="btn btn-primary btn-sm modalbtn" ><b>Event</b></button>
                      <button  id="2" onClick={()=>this.modalContent(2)} className="btn btn-primary btn-sm modalbtn" ><b>Out of office</b></button>
                      <button  id="3" onClick={()=>this.modalContent(3)} className="btn btn-primary btn-sm modalbtn" ><b>Appointment slots</b></button>
                    </div>

                      <div className="row">
                          <div className="col-xs-1 f"><i className="far fa-clock"></i></div>
                          <div className="col-xs-3 f "><input  className="Ip" type="date" ref = "myTextInput1" /></div>
                          <div className="col-xs-2 f" id="Time2"><input className="tim" ref = "myTextInput4" type="time" /></div>

                          <div className="col-xs-3 f"><input className="Ip"  type="date" ref = "myTextInput2" /></div>
                          <div className="col-xs-2 f" id="Time1"><input className="tim" ref = "myTextInput3" type="time" /></div>
                          <div className="col-xs-3 f"><button onClick={this.addtime} id ="sub" className="btn btn-default btn-sm">ADD TIME</button></div>
                      </div>
                    {p}

                  </div>
                  <button type="button" className="btn btn-primary btn" data-dismiss="modal" id="save" onClick={this.save} >Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return({
    month:state.month,
    day:state.day,
    year:state.year,
    date:state.date,
    privacyval:state.modalPrivacy,
    slotval:state.modalSlot,
    choose:state.choose,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({
    privacy:(x)=> dispatch({type:'PRIVACY',x:x,}),
    chooseHandler:(x)=>dispatch({type:'CHOOSE',x:x,}),
    slot:(x)=>dispatch({type:'SLOT',x:x,}),
    save:(a1,a,b,c,d,e)=>dispatch({type:'SAVE',a1:a1,a:a,b:b,c:c,d:d,e:e}),
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);