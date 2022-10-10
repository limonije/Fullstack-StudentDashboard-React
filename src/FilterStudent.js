import React from 'react'

class FilterStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({
            value: "", 
        });
    }    
    
    render() {
        return (
            <form className="filter-form" onSubmit={this.handleSubmit}>
                <select
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                        <option value="">-- Select Student --</option>
                        <option value="Sandra">Sandra</option>
                        <option value="Floris">Floris</option>
                        <option value="Storm">Storm</option>
                </select>
                <input type="submit" value="Submit" />
                </form>
        );
    }
}

export default FilterStudent