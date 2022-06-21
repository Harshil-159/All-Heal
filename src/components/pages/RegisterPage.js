import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="main-register">
            <div div className = 'title' >
                <h2>Join us</h2>
                <h2>Create your personal account</h2>
                </div>
            
            <form action="/home">
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Address</label><br/>
                    <input type="text-area" name="addr" required />
                </p>
                <p>
                    <label>City</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>State</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Pincode</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Contact</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer className='footer'>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
