import React from "react";
import data from "./data/data.json";
//import Student from "./routes/Student";
import { VictoryChart, VictoryBar, VictoryGroup, VictoryAxis, VictoryTheme, VictoryContainer } from 'victory';

let newData = []
data.map(item => {return newData.push(item)})
console.log(newData)

// let studentData = newData
// console.log("This is student data unfiltered: ", studentData)
// let filteredItems = studentData.filter((item) => {return item.name === "Sandra"})
// console.log("This is data for Sandra:", filteredItems)

class Chart extends React.Component {
    constructor(props) {
      super(props) 
      this.state = {
       
        studentData: [],
        difficulty: true,
        enjoyment: true,
        
    }
    
      this.handleChange = this.handleChange.bind(this)
      this.filterStudents = this.filterStudents.bind(this)
      
    }

             
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({[name]: checked}) : 
            this.setState({[name]: value}) 
    }

    
    filterStudents() {

    let value = this.props.student 
    console.log('This is working:', value)
    this.setState((prevState) => {
      let newStudentData = [...prevState.studentData]
      console.log("This is student data unfiltered: ", newStudentData)
      let filteredItems = newData.filter((item) => {return item.name === value})
      console.log("This is data for:", value, ":", filteredItems) 
      let newState = {...prevState, studentData: filteredItems}
      console.log(newState)
      //return newState; 
})
}

   componentDidUpdate() {
    this.filterStudents()
  }
   

    // let studentData = newData
    // console.log("This is student data unfiltered: ", studentData)
    // let filteredItems = studentData.filter((item) => {return item.name === "Sandra"})
    // console.log("This is data for Sandra:", filteredItems)
    // }


       
    render() {
      return (
        <div>
          
          <br />
            <label className="diff">
                        <input 
                            type="checkbox"
                            name="difficulty"
                            onChange={this.handleChange}
                            checked={this.state.difficulty}
                        /> Difficulty
            </label>
                    
                    
                    <label className="enjoy">
                        <input 
                            type="checkbox"
                            name="enjoyment"
                            onChange={this.handleChange}
                            checked={this.state.enjoyment}
                        /> Enjoyment
                    </label>
                    <br />
          
          <VictoryChart
            domainPadding={{x: 15}}
            domain={{ x: [0, 56], y: [0.0, 5.0] }}
            //maxDomain={{ y: 5 }}
            theme={VictoryTheme.material}
            width={1200} height={400}
            containerComponent={<VictoryContainer responsive={false}/>}
            
            >
          <VictoryAxis 
            style={{ ticks: {stroke: "grey", size: 5},
            tickLabels: {angle: 45, fontSize: 12, padding: 5, textAnchor: 'begin'} }}
            
            //tickValues = {filteredItems.lenght}
            //tickFormat = {filteredItems.assignment}
          />
          <VictoryAxis 
            dependentAxis
            
            
          />
          <VictoryGroup offset={10}
            colorScale={"qualitative"}
            >

            {this.state.difficulty ?   
            <VictoryBar
              style={{ data: { fill: "#4f8bc9" } }}
              barWidth={7}  
              data={this.state.studentData}
              x={"assignment"}
              y={"difficultyRating"}
            
            /> : null}
            
            {this.state.enjoyment ?
            <VictoryBar 
              style={{ data: { fill: "#ffb212" } }}
              barWidth={7}
              data={this.state.studentData}
              x={"assignment"}
              y={"enjoymentRating"}
              
            /> : null}
                     
        </VictoryGroup>
        </VictoryChart>
        </div> 
    )}
}    

export default Chart