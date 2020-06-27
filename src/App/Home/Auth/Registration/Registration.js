import React, {useCallback, useContext} from "react";
import "./Registration.css";
import { useForm } from 'react-hook-form';
import app from "../Config/firebase";
import {createUser} from "../../../firestore";
import {AuthContext} from "../AuthProvider";
import { Navigate, useNavigate } from 'react-router-dom';


export const Registration = (props) => {
    const { register, handleSubmit, errors } = useForm();
    let navigate = useNavigate();

    const onSubmit = useCallback(
        async data => {
            console.log(data);
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(data.email, data.password)
                    .then(result => {
                        console.log(result);
                        createUser(result.user.uid, data.firstname, data.lastname)
                    });
                navigate("/login");
            } catch (error) {
                alert(error);
            }
        }
    );
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Navigate to="/" />;
    }
    return (
        <div className={"registration"}>
            <h2 className={"title"}>Գրանցվել</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="firstname"
                    ref={register({
                        required: true,
                        minLength:3
                    })}
                    placeholder="First name"
                />
                {errors.firstname && errors.firstname.type === "required" && <span>First name is required.</span>}
                {errors.firstname && errors.firstname.type === "minLength" && <span>First name min length of 3.</span>}<br/><br/>

                <input
                    name="lastname"
                    ref={register({
                        required: true,
                        minLength:5
                    })}
                    placeholder="Last name"
                />
                {errors.lastname && errors.lastname.type === "required" && <span>Last name is required.</span>}
                {errors.lastname && errors.lastname.type === "minLength" && <span>Last name min length of 5.</span>}<br/><br/>

                <input
                    name="email"
                    ref={register({
                        required: true,
                        minLength:8,
                        pattern: /^\S+@\S+$/i
                    })}
                    placeholder="Email"
                />
                {errors.email && errors.email.type === "required" && <span>Email is required.</span>}
                {errors.email && errors.email.type === "minLength" && <span>Email min length of 8.</span>}<br/><br/>

                <input
                    name="phone"
                    ref={register({
                        required: true,
                        pattern: /^\d\d\d-\d\d-\d\d-\d\d$/
                    })}
                    placeholder="Phone 0**-**-**-**"
                />
                {errors.phone && errors.phone.type === "required" && <span>Phone number is required.</span>}
                {errors.phone && errors.phone.type === "minLength" && <span>Phone number fill thats form 0**-**-**-**.</span>}<br/><br/>

                <input
                    name="age"
                    ref={register({
                        min: 8,
                        max: 100,
                        pattern: /\d+/
                    })}
                    placeholder="Age" />
                {errors.age && errors.age.type === "required" && <span>Please enter number for age.</span>}<br/><br/>

                <input
                    name="gender"
                    type="radio"
                    value="male"
                    ref={register({ required: true })}/> Male
                <input
                    name="gender"
                    type="radio"
                    value="female"
                    ref={register({ required: true })}/> Female
                {errors.gender && <span>Please select gender.</span>}<br/><br/>

                <input
                    type="password"
                    name="password"
                    ref={register({
                        required: true,
                        minLength:8,
                    })}
                    placeholder="Password"
                />
                {errors.password && errors.password.type === "required" && <span>Password is required.</span>}
                {errors.password && errors.password.type === "minLength" && <span>Password min length of 8.</span>}<br/><br/>

                <input type="submit" />
            </form>
        </div>
    );
};

