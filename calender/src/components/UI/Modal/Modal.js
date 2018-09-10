import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../../hoc/Aux/Aux'
import './Modal.css'
var moment = require('moment');

class Modal extends Component{

componentDidMount(){
  document.getElementById("1").click();
}

  componentDidUpdate ()
  	{
        if(this.props.choose===1){
            	        this.refs.myTextInput1.value = moment(this.props.date,"MM-DD-YYYY").format('YYYY-MM-DD');
                      this.refs.myTextInput2.value = moment(this.props.date,"MM-DD-YYYY").format('YYYY-MM-DD');
                      this.refs.myTextInput3.value="13:30";
                        this.refs.myTextInput4.value="13:30";

        }
        else if(this.props.choose===2){
          this.refs.myTextInput5.value="Declined because I am out of office";
        }else if(this.props.slotval==="Slots with duration"){
              this.refs.myTextInput7.value="13:30";
        }



  	}

save = () =>{
  const  a=this.refs.myTextInput1.value;
  const  d=this.refs.myTextInput3.value;
  const  b=this.refs.myTextInput4.value;
  const  c=this.refs.myTextInput2.value;
  const a1=document.getElementById('tex').value;
  if(this.props.choose===1){

    this.props.save(null,a,b,c,d,a1);
  }
  else if(this.props.choose===2){
    const msg=this.refs.myTextInput5.value;
  this.props.save(msg,a,b,c,d,a1);
  }
  else if(this.props.choose===3){
    var lasttime=null;
    if(this.props.slotval!=="Single slot"){
       lasttime=this.refs.myTextInput7.value;

    }

      this.props.save(lasttime,a,b,c,d,a1);
  }



}


    addtime = () =>{
      document.getElementById("Time1").style.display="block";
      document.getElementById("Time2").style.display="block";

      document.getElementById('sub').style.display="none";
      console.log('dd');
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

    var p=null;


     if(this.props.choose===2){
      p=(
        <Aux>
        <div className="row">
          <div class="col-xs-1 f"><i class="far fa-calendar-times"></i></div>
          <div class="col-xs-2 f"><input type='text' ref = "myTextInput5" id="decline" placeholder="Add title and time" /></div>
        </div>



        <div className="row">
          <div class="col-xs-1">  <i class="fas fa-lock"></i></div>
          <div class="col-xs-2"><div class="dropdown">
              <button class="btn btn-default btn-sm dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">{this.props.privacyval}
              <span class="caret"></span></button>
              <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                <li role="presentation"><a onClick={()=>this.props.privacy("Public")} role="menuitem" tabindex="-1" href="#">Public</a></li>
                <li role="presentation"><a onClick={()=>this.props.privacy("Private")} role="menuitem" tabindex="-1" href="#">Private</a></li>
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
        <div class="col-xs-1">  </div>
        <div class="col-xs-2"><div class="dropdown">
            <button class="btn btn-default btn-sm dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">{this.props.slotval}
            <span class="caret"></span></button>
            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
              <li role="presentation"><a onClick={()=>this.props.slot("Slots with duration")} role="menuitem" tabindex="-1" href="#">Slots with duration</a></li>
              <li role="presentation"><a onClick={()=>this.props.slot("Single slot")} role="menuitem" tabindex="-1" href="#">Single slot</a></li>
            </ul>
        </div>
      </div>
      {this.props.slotval !== "Single slot" ? <div class="col-xs-4" id="lt"> <input className="tim" step='1' ref = "myTextInput7" type="time" /></div> :null}



  </div>
      )
    }

    return(<div >
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
                    <button  id="1"  onClick={()=>this.modalContent(1)} className="btn btn-primary btn-sm modalbtn" ><b>Event</b></button>
                    <button  id="2" onClick={()=>this.modalContent(2)} className="btn btn-primary btn-sm modalbtn" ><b>Out of office</b></button>
                    <button  id="3" onClick={()=>this.modalContent(3)} className="btn btn-primary btn-sm modalbtn" ><b>Appointment slots</b></button>

                  </div>
                  <div className="row">
                    <div class="col-xs-1 f"><i class="far fa-clock"></i></div>
                    <div class="col-xs-3 f "><input  className="Ip" type="date" ref = "myTextInput1" /></div>
                    <div class="col-xs-2 f" id="Time2"><input className="tim" ref = "myTextInput4" type="time" /></div>

                    <div class="col-xs-3 f"><input className="Ip"  type="date" ref = "myTextInput2" /></div>
                    <div class="col-xs-2 f" id="Time1"><input className="tim" ref = "myTextInput3" type="time" /></div>
                    <div class="col-xs-3 f"><button onClick={this.addtime} id ="sub" className="btn btn-default btn-sm">ADD TIME</button></div>
                  </div>
                    {p}
                </div>
                  <button type="button" class="btn btn-primary btn" data-dismiss="modal" id="save" onClick={this.save} >Save</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>);
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
