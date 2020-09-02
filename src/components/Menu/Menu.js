import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';

export default class Menu extends Component {
    constructor(){
        super()
        this.state={
            menuOpen: false,
        };
        this.wrapper = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
    
        const domNode = ReactDOM.findDOMNode(this.wrapperRef);

        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                menuOpen: false
            });
        }
    }

    setMenu = e => {
        const menuOpen = !this.state.menuOpen
        this.setState({
            menuOpen: menuOpen
        })
    }

    menuButtons = e => {
        return (
            <div className="menu-links" ref={this.wrapperRef}>
                <div className='link'>Home</div>
                <div className='link'>Login</div>
                <div className='link'>Register</div>
            </div>
        )
    }

    render(){
        return(
            <div className="Menu" ref={this.wrapperRef}>
                {this.state.menuOpen ? this.menuButtons() : <img onClick={()=>this.setMenu()} src="https://images.squarespace-cdn.com/content/5a6b88782aeba59c65011319/1516996941896-NC1J09O6VK4IFUZB8P0O/fig-logo-short-large.png?format=1500w&content-type=image%2Fpng" alt="Menu"/> }
            </div>
            
        )
    }
}