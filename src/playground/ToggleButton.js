import React from "react";

class ToggleButton extends React.Component{
    constructor(props){
        super(props)
        this.handleButtonVisibility = this.handleButtonVisibility.bind(this)
        this.state = {
            Visibility : false
        }
    }
    handleButtonVisibility(){
       this.setState((prevState)=>{
           return{
            Visibility : !prevState.Visibility
           }
       })
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleButtonVisibility}>
                    {this.state.Visibility ? 'Hide Details' : 'Show Details'}
                </button>   
                {this.state.Visibility && (
                    <div>
                        <p>Hye. These Some Details you can now see!</p>
                    </div>
                )}
                
            </div>
        )
    }
}

export default ToggleButton;