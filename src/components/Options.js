import React from "react";

class Options extends React.Component{
    render(){
        return(
            <div>
                <div className="widget--header">
                    <h3 className="widget--header--title">Your options</h3>
                    <button 
                        className="button button--link"
                        onClick={this.props.handleDeleteOptions}
                    >Remove All</button>
                </div>
                
                {this.props.options.length == 0 && <p className="widget--message">Please add and Option to get started!</p>}
                {this.props.options.map((option, index) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        count={index + 1}
                        handleDeleteOption={this.props.handleDeleteOption}
                    />
                    
                    ))
                }
            </div>
            
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div className="option">
                <p className="option--text">{this.props.count}. {this.props.optionText}</p>
                <button 
                    className="button button--link"
                    onClick={(e)=> {this.props.handleDeleteOption(this.props.optionText)}}
                >
                    Remove
                </button>
            </div>
        )
    }
}

export default Options;