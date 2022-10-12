import React from "react";
import data from "../data/data.json";
import { VictoryChart, VictoryBar, VictoryGroup, VictoryAxis, VictoryTheme, VictoryContainer } from 'victory';

let newData = []
data.map(item => {return newData.push(item)})

class AssignmentChart extends React.Component {
    constructor(props) {
      super(props) 
      this.state = {
        assignmentData: [],
        difficulty: true,
        enjoyment: true,
      }
    
      this.handleChange = this.handleChange.bind(this)
      this.filterAssignments = this.filterAssignments.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({[name]: checked}) : 
            this.setState({[name]: value}) 
    }

    filterAssignments() {
      let value = this.props.assignment 
      let filteredItems = newData.filter((item) => {return item.assignment === value})
      
      this.setState((prevState) => {
        let newState = {...prevState, assignmentData: filteredItems}
        return newState; 
    })
  }

    componentDidMount(){
      this.filterAssignments()
  }

    componentDidUpdate(prevProps) {
      if (this.props.assignment !== prevProps.assignment) {
      this.filterAssignments(this.props.assignment)}
  }
   
    render() {
      return (
        <div>
          <label className="diff">
            <input 
              className="blue-input"
              type="checkbox"
              name="difficulty"
              onChange={this.handleChange}
              checked={this.state.difficulty}
            /> 
            Difficulty
          </label>
          <label className="enjoy">
            <input 
              className="orange-input"
              type="checkbox"
              name="enjoyment"
              onChange={this.handleChange}
              checked={this.state.enjoyment}
            /> 
            Enjoyment
          </label>
          
          <VictoryChart
            domainPadding={{x: 15}}
            domain={{ x: [0, 10], y: [0.0, 5.0] }}
            theme={VictoryTheme.material}
            width={800} height={300}
            containerComponent={<VictoryContainer responsive={false}/>}
          >
          <VictoryAxis 
            style={{ ticks: {stroke: "grey", size: 5},
            tickLabels: {fontSize: 16, padding: 5} }}
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
              barWidth={10}  
              data={this.state.assignmentData}
              x={"name"}
              y={"difficultyRating"}
            /> 
          : null}
            
          {this.state.enjoyment ?
            <VictoryBar 
              style={{ data: { fill: "#ffb212" } }}
              barWidth={10}
              data={this.state.assignmentData}
              x={"name"}
              y={"enjoymentRating"}
            /> 
          : null}
                     
          </VictoryGroup>
          </VictoryChart>
        </div> 
    )}
}    

export default AssignmentChart