import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import {connect} from 'react-redux';
import  './Calender.css'

let moment = require('moment');
class Calender extends Component{
allrows=[];
dateIndex={};
modalDates=[];

componentWillUpdate = () =>{
  this.allrows=[];
  this.dateIndex={};
  this.modalDates=this.props.modal.map(m=>m.at);
  let unique_array = Array.from(new Set(this.modalDates))
  this.modalDates=unique_array;
}

componentWillReceiveProps(nextProps){
  if(nextProps.state.scheduledata!==this.props.state.scheduledata){
    document.getElementById('M1').click();
  }
}

afterSchedule = (data,e) =>{
  this.props.afterSchedule(data);
  if(this.props.state.scheduledata===data){
    document.getElementById('M1').click();
  }

  // if(!e) var e = window.event;
  //     e.cancelBubble = true;
  //     if (e.stopPropagation) e.stopPropagation();
  e.preventDefault();
  e.stopPropagation();

}

schedule = (index) =>{
  this.props.daySet(this.allrows[index])
  document.getElementById('buton').click();
}

render(){
  let start=moment([this.props.year, this.props.month - 1]).startOf('month').day('sunday');
  let end=moment([this.props.year, this.props.month - 1]).endOf('month').day('saturday');
  let firstRows=[];
  let lastRows=[];
  let rows=[];

  for(let i=1;i<=7;i++){
    if(start.format('M')===this.props.month){
      firstRows.push({
        val:start.format('D'),
        cl:null,
        day:start.format('L')
      });
      this.allrows.push(start.format('L'));
    }
    else{
      firstRows.push({
        val:start.format('D'),
        cl:"dim",
        day:start.format('L')
      });
      this.allrows.push(start.format('L'));
    }

    if(start.format('D')==='1'){
      firstRows[firstRows.length-1].mon=start.format('MMM')
    }
    else{
      firstRows[firstRows.length-1].mon=null;
    }
    start.add(1, 'day');  
  }

  let i=0;

  while(end.diff(start,'days')){
    if(i===7){
      i=0;
      lastRows.push(rows);
      rows=[];
    }

    if(start.format('M')===this.props.month){
        rows.push({
          val:start.format('D'),
          cl:null,
          day:start.format('L')
        });
        this.allrows.push(start.format('L'));
    }
    else{
      rows.push({
        val:start.format('D'),
        cl:"dim",
        day:start.format('L')
      });
      this.allrows.push(start.format('L'));
    }

    if(start.format('D')==='1'){
      rows[rows.length-1].mon=start.format('MMM')
    }
    else{
      rows[rows.length-1].mon=null;
    }

    start.add(1, 'day');
    i++;

}

if(start.format('M')===this.props.month){
    rows.push({
      val:start.format('D'),
      cl:null,
      day:start.format('L')
    });
    this.allrows.push(start.format('L'));
}
else{
  rows.push({
    val:start.format('D'),
    cl:"dim",
    day:start.format('L')
  });
  this.allrows.push(start.format('L'));
}

if(start.format('D')==='1'){
  rows[rows.length-1].mon=start.format('MMM')
}
else{
  rows[rows.length-1].mon=null;
}
lastRows.push(rows);


this.props.modal.map((m,index)=>{
  if(this.allrows.includes(m.at)){
    if(this.dateIndex[m.at]==null){
        this.dateIndex[m.at]=[index];
    }
    else{
      this.dateIndex[m.at]=[...this.dateIndex[m.at],index];
    }
  }
  return 1;
})

return(
  <Aux>
    <table>
      <thead >
        <tr >
          <td className=" dim wd">  Sun</td>
          <td className=" dim wd">  Mon</td>
          <td className=" dim wd">Tue</td>
          <td className=" dim wd">Wed</td>
          <td className=" dim wd">Thu</td>
          <td className=" dim wd">Fri</td>
          <td className=" dim wd">Sat</td>
        </tr>
      </thead>
      <tbody>
      <tr>
        {firstRows.map((data,index)=>(
          <td key={index} onClick={()=>this.schedule(index)} id="row" className="firstrow"><span id="rowspan" className={data.cl}>{data.mon}  {data.val}</span>
            {this.modalDates.map(d=>d===data.day?(<div key={index+'i'}  className="reminder">{this.dateIndex[data.day].map(val=><div key={index+'j'}  onClick={(e)=>this.afterSchedule(this.props.modal[val],e)} className="rChild pointer">{this.props.modal[val].main}</div>)}</div>):null)}
          </td>))}
      </tr>

      {lastRows.map((rows,index1)=>(
        <tr key={index1}>
          {rows.map((data,index)=>(<td key={index+7} onClick={()=>this.schedule(index+(7*index1+7))} id="row"><span  id="rowspan" className={data.cl}>{data.mon}  {data.val}</span>
          {this.modalDates.map(d=>d===data.day?(<div key={index+'k'} className="reminder">{this.dateIndex[data.day].map(val=><div key={index+'l'} onClick={(e)=>this.afterSchedule(this.props.modal[val],e)} className="rChild">{this.props.modal[val].main}</div>)}</div>):null)}</td>))}
        </tr>
      ))}

</tbody>
    </table>


  </Aux>
      
);
}}



const mapStateToProps = (state) =>{
  return({
    state:state,
    modal:state.modal,
    month:state.month,
    day:state.day,
    year:state.year,
    date:state.date,
    up:state.up,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({
    daySet:(day)=>dispatch({type:'DAYSET',day:day}),
    afterSchedule:(data)=>dispatch({type:'AFTERSCHEDULE',data:data}),
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Calender);
