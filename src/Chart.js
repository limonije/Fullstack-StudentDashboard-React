import React from "react";
import data from "./data/data.json";
import { VictoryChart, VictoryBar, VictoryGroup, VictoryAxis, VictoryTheme, VictoryContainer } from 'victory';

let newData = []
data.map(item => {return newData.push(item)})
console.log(newData)

class Chart extends React.Component {
    constructor() {
      super() 
      this.state = {
           
        averageData: [],
        difficulty: true,
        enjoyment: true,
        
    }
    
      this.calculateAverage = this.calculateAverage.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    calculateAverage() {
    const assignments = newData.map(assignment => assignment.assignment)
    const assignmentsSingle = Array.from(new Set(assignments))
    console.log("nieuwe array:", assignmentsSingle)
    assignmentsSingle.forEach(assign => {
        let difficultySeperate = newData.filter(element => (element.assignment === assign)).reduce((prev, curr) => prev + parseInt(curr.difficultyRating), 0) / 10
        let enjoySeperate = newData.filter(element => (element.assignment === assign)).reduce((prev, curr) => prev + parseInt(curr.enjoymentRating), 0) / 10
          
        this.setState((prevState) => {
            const newAverageData = [...prevState.averageData]
            newAverageData.push({assignment: `${assign}`, difficultyRating: difficultySeperate, enjoymentRating: enjoySeperate})
            const newState = {...prevState, averageData: newAverageData}
            return newState;
        })
    }) 
    }
            
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({[name]: checked}) : 
            this.setState({[name]: value}) 
    }

      componentDidMount(){
        this.calculateAverage()
    }

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
              data={this.state.averageData}
              x={"assignment"}
              y={"difficultyRating"}
            
            /> : null}
            
            {this.state.enjoyment ?
            <VictoryBar 
              style={{ data: { fill: "#ffb212" } }}
              barWidth={7}
              data={this.state.averageData}
              x={"assignment"}
              y={"enjoymentRating"}
              
            /> : null}
                     
        </VictoryGroup>
        </VictoryChart>
        </div> 
    )}
}    

export default Chart