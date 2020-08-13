import React from "react";

class Clock extends React.Component{
    //'constructor' is part of 'class' and React components
    //always called when an instance of our class is created
    //aka 'construct'd
  
    constructor (props){
      super(props)
      //bad code: this.state.displayTime = ''
      //we must set state to an object
      this.state = {
        displayTime: '', 
        visitorName: '',
      }
    }
  
   
    //'componentDidMount' is standard in React
    //this is where we load data or otherwise initialize data
  
    componentDidMount (){
      this.timerId = setInterval(() => {
        //call the 'tick'
        this.tick()
      }, 1000);
    }
  
    //custom method as seen on reactjs.org
    //belong to a class or component 
  
    tick (){
      console.log("In tick")
      this.setState({
        displayTime: new Date().toLocaleTimeString,
        visitorName: "Sharon"
      })
    }
    //1000 milliseconds
    // 'render' is the standard for getting 
    //html into our web page
      render () {
      const displayTime = this.state.displayTime
      const visitorName = this.state.visitorName
      return (
        <div className="clock">
          <h2>Time is {displayTime}</h2>
      <div>Thanks for visiting {visitorName}</div>
          </div>
      )
    }  
  }

  export default Clock;