import React from "react";

class Action extends React.Component{
    render(){
        return(
            <div>
                <button
                    className="big--button" 
                    onClick={this.props.handlePic} 
                    disabled={!this.props.hasOptions}
                >
                    What Should I Do ?
                </button> 
            </div>
        )
    }
}

export default Action;