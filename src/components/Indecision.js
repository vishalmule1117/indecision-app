import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";


class Indecision extends React.Component{
    constructor(props){
        super(props);
        // this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        // this.handlePic = this.handlePic.bind(this);
        // this.handleAddOption = this.handleAddOption.bind(this);
        // this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options : [],
            selectedOption:undefined
        };
    }
    handleDeleteOptions = () =>{
        this.setState(() => ({options: []}));
    }
    handleDeleteOption = (optionToRemove) =>{
      this.setState( (prevState)=> ({
        options: prevState.options.filter( (option)=> optionToRemove !== option)
      }));
    }
    handlePic = () =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState( () => ({
            selectedOption : option
        }));
        
    }
    handleAddOption = (option) =>{
        if(!option){
            return 'Enter valid value to add item.';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exits.'
        }
        this.setState((prevState) => ({ options : prevState.options.concat(option)}));
    }
    handleClearSelectedOption = () =>{
        this.setState(() => ({selectedOption:undefined}))
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options: options}))
            }
        }catch{
            // Do Nothing at all
        }
        console.log('componentDidMount')
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
   
    render(){
        const title = 'To Do List App';
        const subtitle = 'Put Your Life in hands on computer';

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePic={this.handlePic}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

export default Indecision;