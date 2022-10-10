import React from 'react'

class FilterRating extends React.Component {
    constructor() {
        super()
        this.state = {
            difficulty: true,
            enjoyment: true,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
    
    render() {
        return (
            <main>
                <form>
                                    
                    <label>
                        <input 
                            type="checkbox"
                            name="difficulty"
                            onChange={this.handleChange}
                            checked={this.state.difficulty}
                        /> Difficulty
                    </label>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="enjoyment"
                            onChange={this.handleChange}
                            checked={this.state.enjoyment}
                        /> Enjoyment
                    </label>
                    <br />
                                                           
                    
                </form>
                <hr />
                
                
                
            </main>
        )
    }
}

export default FilterRating
