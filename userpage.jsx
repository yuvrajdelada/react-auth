import React from "react";
import { UserAuth } from "./AuthContext";

export const User = () => {
    const { user } = UserAuth();
    return (
        <div className="User">
            <h1>Welcome {user?.displayName}, you have successfully logged in!</h1>
        </div>
    );
};


