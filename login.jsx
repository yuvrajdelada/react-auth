import React, { useState, useEffect, useRef } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "./AuthContext";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"

function SignUpLink(props) {
    return (
        <div style={{ textAlign: "center" }}>
            Don't have an account? {" "} <button onClick={() => props.onFormSwitch("signup")}>Sign up here </button>
        </div>
    );
}

export const Login = (props) => {
   
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); {/* page will get reloaded if not here */ }
        signInWithEmailAndPassword(auth, email, pass)
        .then ((userCredential) => {
            
        }).catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate("/userpage");
        }
    }, [user])

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <div style={{ display: "inline-block" }}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" /> {/*disappears when user starts typing their email}*/}
                        <label htmlFor="password">Password</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                        <button type="submit">Login</button>
                    </form>
                    <SignUpLink onFormSwitch={props.onFormSwitch} />
                    <div style={{ textAlign: "center" }}>
                        <div style={{ display: "inline-block" }}>
                            <GoogleButton onClick={handleGoogleSignIn} />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}