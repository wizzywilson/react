import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../../hoc/Aux/Aux'
import './M1.css'


class M1 extends Component{

  stop = () =>{
    this.props.remove(this.props.data);
    document.getElementById('stop').click()
  }

  

  render(){

    return(
      <Aux >

        <button type="button" className="btn btn-primary" data-toggle="modal" id="M1" data-target="#exampleModal">
          Launch demo modal
        </button>

        <div className="modal fade aux" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header" id="head">

                <button type="button"  id="stop" className="close" data-dismiss="modal" aria-label="Close">
                  <span className=" headtop" aria-hidden="true"><i className="fas fa-times"></i></span>
                </button>

                <button type="button" className="close"  aria-label="Close">
                  <span className=" headtop" aria-hidden="true"><i className="fas fa-ellipsis-v"></i></span>
                </button>

                <button type="button" className="close"  aria-label="Close">
                  <span className=" headtop" aria-hidden="true"><i className="fas fa-envelope"></i></span>
                </button>

                <button type="button" className="close"  aria-label="Close">
                  <span className=" headtop" onClick={()=>this.stop(this.props.data)} aria-hidden="true"><i className="fas fa-trash"></i></span> 
                </button>

                <div id="headin">{this.props.data.main}</div>

                <button className="edit btn btn-sm"  type="button" >
                  <span >
                  <i class="fas fa-pencil-alt"></i>
                     </span>
                </button>


              </div>

              <div className="modal-footer">
                <div className="row">
                  <div className="col-xs-1 f"><i className="far fa-clock"></i></div>
                  <div className="col-xs-4 f ">{this.props.data.date1} {this.props.data.time1}</div>
                  <div className="col-xs-2 f" >to  </div>
                  <div className="col-xs-4 f">{this.props.data.date2} {this.props.data.time2}</div>
                </div>

                <div className="row">
                  <div className="col-xs-1 f"><i className="far fa-calendar-times"></i></div>
                  <div className="col-xs-2 g f">Wilson</div>
                </div>
                  {this.props.choose===2?(<div className="row">
                    <div className="col-xs-1">  <i className="fas fa-lock"></i></div>
                    <div className="col-xs-2 g f"> {this.props.modalPrivacy}</div>
                  </div>):null}

                  {this.props.choose===2?(<div className="row">
                    <div className="col-xs-1 f"><i className="far fa-calendar-times"></i></div>
                    <div className="col-xs-7 ">{this.props.data.msg}</div>
                  </div>):null}
              </div>
            </div>
          </div>
        </div>
      </Aux>
    )
  }
}

const mapStateToProps = (state) =>{
  return({
      month:state.month,
      data:state.scheduledata,
      modalPrivacy:state.modalPrivacy,
      choose:state.choose,
  });
}


const mapDispatchToProps = (dispatch) =>{
  return({
      remove:(x)=>dispatch({type:'REMOVE',remove:x,}),
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(M1);
