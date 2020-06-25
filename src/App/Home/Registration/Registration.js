import React from "react";
import "./Registration.css";
// import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const Registration = (props) => {
    const { register, handleSubmit,watch, errors, setError } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    // const onSubmit = async data => {
    //     await sleep(2000);
    //     if (data.username === 'bill') {
    //         alert(JSON.stringify(data));
    //     } else {
    //         alert('There is error');
    //         setError('username', 'validate');
    //     }
    // };
    // console.log(watch("firstname"));
    return (
        <div className={"registration"}>
            <h2 className={"title"}>Մուտք գործել</h2>
            {/*<Reg2/>*/}
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
                        required: true
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

                {/*<label htmlFor="">Gender</label>*/}
                {/*<select name="gender" ref={register({ required: true })}>*/}
                    {/*<option value="">Select...</option>*/}
                    {/*<option value="male">Male</option>*/}
                    {/*<option value="female">Female</option>*/}
                {/*</select>*/}
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

                {/*<div style={{ color: 'red' }}>*/}
                    {/*{Object.keys(errors).length > 0 &&*/}
                    {/*'There are errors, check your console.'}*/}
                {/*</div>*/}
                <input type="submit" />
            </form>
        </div>
    );
};

