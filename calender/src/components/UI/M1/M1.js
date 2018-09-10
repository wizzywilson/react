import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../../hoc/Aux/Aux'
import './M1.css'
var moment = require('moment');

class M1 extends Component{
render(){

  return(
<Aux >

<button type="button" class="btn btn-primary" data-toggle="modal" id="M1" data-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade aux" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

    <div class="modal-header" id="head">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
 {/* <span className=" headtop" aria-hidden="true">&times;</span> */}
 <span className=" headtop" aria-hidden="true"><i class="fas fa-times"></i></span>



</button>

<button type="button" class="close"  aria-label="Close">
{/* <span className=" headtop" aria-hidden="true">&times;</span> */}
<span className=" headtop" aria-hidden="true"><i class="fas fa-ellipsis-v"></i></span>

</button>



<button type="button" class="close"  aria-label="Close">
{/* <span className=" headtop" aria-hidden="true">&times;</span> */}
<span className=" headtop" aria-hidden="true"><i class="fas fa-envelope"></i></span>

</button>



<button type="button" class="close"  aria-label="Close">
{/* <span className=" headtop" aria-hidden="true">&times;</span> */}
<span className=" headtop" aria-hidden="true"><i class="fas fa-trash"></i></span>

</button>


            <div id="headin">{this.props.data.main}</div>
          </div>



          <div class="modal-footer">
          <div className="row">
            <div class="col-xs-1 f"><i class="far fa-clock"></i></div>
            <div class="col-xs-4 f ">{this.props.data.date1} {this.props.data.time1}</div>
            <div class="col-xs-2 f" >to  </div>


            <div class="col-xs-4 f">{this.props.data.date2} {this.props.data.time2}</div>
            {/* <div class="col-xs-2 f" >{this.props.data.time2}</div> */}
          </div>

          <div className="row">
                    <div class="col-xs-1 f"><i class="far fa-calendar-times"></i></div>
                    <div class="col-xs-2 g f">Wilson</div>


                  </div>

                  {this.props.choose===2?(<div className="row">
                  <div class="col-xs-1">  <i class="fas fa-lock"></i></div>
                  <div class="col-xs-2 g f"> {this.props.modalPrivacy}</div>
                  </div>):null}

                  {this.props.choose===2?(<div className="row">
                  <div class="col-xs-1 f"><i class="far fa-calendar-times"></i></div>
                  <div class="col-xs-7 ">{this.props.data.msg}</div>

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


  });
}

export default connect(mapStateToProps,mapDispatchToProps)(M1);
