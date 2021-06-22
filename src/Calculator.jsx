import { Component } from "react";


export default class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            num1:0,
            num2:0,
           total: ''
        }
 
    }

    handleChange = (e, num) => {
        this.setState({[num]: Number(e.target.value)})
        
    }

    handleSubmit = (e, total) => {
        e.preventDefault()
        this.setState({total:this.state.num1 + this.state.num2})
      
    }

    render(){
        return(
        <div className="container">
                <h1>Add with React!</h1>

            <div className="add">
                <form>
                <input type="number" name="num1" value={this.state.num1} onChange={(e) => this.handleChange(e, 'num1')} placeholder="Enter your first number"/>
                <span>+</span>
                <input type="number" name="num2" value={this.state.num2} onChange={(e) => this.handleChange(e, 'num2')} placeholder="Enter your second number" />
                <button onClick={(e) => this.handleSubmit(e, 'total')}>=</button>
                <h3>{this.state.total}</h3>
                </form>
            </div>
        </div>
        )
    }
}