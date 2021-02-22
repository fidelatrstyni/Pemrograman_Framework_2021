import { render } from '@testing-library/react';
//import {ReactComponent as Logo} from '../../assets/instagram.svg'
import React from 'react';
import './LoginCSS.css';

class LoginComponent extends React.Component{
    render(){
        return(
            <div>
                <h3>Form Login</h3>
                <div className='div-login'>
                    <div className="div-title">
                        <h1>Tugas Pertemuan Ketiga</h1>
                    </div>
                    <div className="div-form">
                        <form>
                            <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                            <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                            <button>Log In</button>
                            <input type='checkbox' checked className='checkbox'/>Remember me?
                            <button className='cancel'>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default LoginComponent;