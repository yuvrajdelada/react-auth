import React, { useState } from "react";
import { Login } from "./login";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { UserAuth } from "./AuthContext";


function LoginLink(props) {
    return (
        <div style={{ textAlign: "center" }}>
            Already have an account? {" "} <button onClick={() => props.onFormSwitch("login")}>Login here </button>
        </div>
    );
}

export const Signup = (props) => {
    const { user } = UserAuth();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); {/* page will get reloaded if not here */ }
        createUserWithEmailAndPassword(auth, email, pass)
        .then ((userCredential) => {
            user = userCredential.user;
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <div style={{ display: "inline-block" }}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Legal Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="John Doe" />
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" /> {/*disappears when user starts typing their email}*/}
                        <label htmlFor="password">Password</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                        <button type="submit">Create Account</button>
                    </form>
                    <LoginLink onFormSwitch={props.onFormSwitch} />
                </div>
            </div>


        </>


    )

}