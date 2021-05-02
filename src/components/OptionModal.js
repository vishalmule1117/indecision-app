import React from 'react';
import Modal from 'react-modal';

class  OptionModal extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Modal
                isOpen={!!this.props.selectedOption}
                contentLabel="Selected Option"
                closeTimeoutMS={200}
                className="modal"
                >
                <h3 className="modal--title">Selected Options</h3>
                {this.props.selectedOption && <p className="modal--body">{this.props.selectedOption}</p>}
                <button className="button" onClick={this.props.handleClearSelectedOption}>Okay</button>
                </Modal>  
            </div>  
        )
    }
};

export default OptionModal;
