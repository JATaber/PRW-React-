import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';

import MdAddCircle from 'react-icons/lib/md/add-circle';

const styles = {
    modalBack: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
    },
    modalWindow: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'blue'
    }
};


class Expenses extends Component{
    constructor(props) {
        super(props);

        this.state = {isOpen: false};

        this.openModal = this.openModal.bind(this);
        //this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
        this.setState({modalIsOpen: true})
    }

    closeModal(){
        this.setState({modalIsOpen: false})
    }

    componentDidMount(){
        let expenses = JSON.parse(localStorage.getItem('expenses'));
        console.log(expenses);
        return expenses;
    }

    render(){
        return(
            <div className="content">
                <h2>Expenses</h2>
                <p className="desc">This is where you can see and enter the money you have spent.</p>
                <article className="addBtn">
                    <button className="submit" onClick={this.openModal}><MdAddCircle/> ADD EXPENSE</button>

                    <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose = {this.closeModal}
                    style = {styles.modalWindow}
                    contentLabel = "Add Information"
                    >
                        <form>
                            <label for="name">Income Name</label>
                            <input type="text" id="name" required></input>
                            <label for="revenue">Amount</label>
                            <input type="number" id="revenue"></input>
                            <button className="formClose" type="submit">
                                SUBMIT
                            </button>
                            <button className="formClose" onClick={this.closeModal}>
                                CLOSE
                            </button>
                        </form>
                    </Modal>
                </article>
            </div>
        );
    }
}

export default Expenses;