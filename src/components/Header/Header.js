import React, { Component } from 'react';
import './Header.css'
import Menu from '../Menu/Menu';

export default class Header extends Component {
    

    render() {
        return <>
            <nav className='Header'>
                <Menu/>
                <h2 className='title'>
                    FigTech
                </h2>
            </nav>
        </>
    }

}