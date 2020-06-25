import React from "react";
import "./Registration.css";
// import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';
import Reg2 from "./Reg2";
// import Reg1 from "./Reg1";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

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
            <Reg2/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="firstname" ref={register({ required: true, minLength:3 })} placeholder="First name" />
                {errors.firstname && errors.firstname.type === "required" && <p>First name is required.</p>}
                {errors.firstname && errors.firstname.type === "minLength" && <p>First name min length of 3.</p>}<br/><br/>

                <input
                    name="lastname"
                    ref={register({
                        required: true,
                        minLength:5
                    })}
                    placeholder="Last name" />
                {errors.lastname && errors.lastname.type === "required" && <p>Last name is required.</p>}
                {errors.lastname && errors.lastname.type === "minLength" && <p>Last name min length of 5.</p>}<br/><br/>

                <input
                    name="email"
                    ref={register({
                        required: true,
                        minLength:8,
                        pattern: /^\S+@\S+$/i})}
                    placeholder="Email" />
                {errors.email && errors.email.type === "required" && <p>Email is required.</p>}
                {errors.email && errors.email.type === "minLength" && <p>Email min length of 8.</p>}<br/><br/>

                <input  name="phone" ref={register({ required: true })} placeholder="Phone 0**-**-**-**" />
                {errors.phone && errors.phone.type === "required" && <p>Phone number is required.</p>}
                {errors.phone && errors.phone.type === "minLength" && <p>Phone number fill thats form 0**-**-**-**.</p>}<br/><br/>

                <input name="age" ref={register({ min: 8, max: 100, pattern: /\d+/ })}  placeholder="Age" />
                {errors.age && errors.age.type === "required" && <p>Please enter number for age.</p>}
                {errors.age && errors.age.type === "min" && <p>Sorry but you are small 8.</p>}<br/><br/>

                {/*<label htmlFor="">Gender</label>*/}
                {/*<select name="gender" ref={register({ required: true })}>*/}
                    {/*<option value="">Select...</option>*/}
                    {/*<option value="male">Male</option>*/}
                    {/*<option value="female">Female</option>*/}
                {/*</select>*/}
                <input
                    name="gender"
                    type="radio"
                    value="Male"
                    ref={register({ required: true })}/> Male
                <input
                    name="gender"
                    type="radio"
                    value="Female"
                    ref={register({ required: true })}/> Female
                {errors.gender && <p>Please select gender.</p>}<br/><br/>

                {/*<div style={{ color: 'red' }}>*/}
                    {/*{Object.keys(errors).length > 0 &&*/}
                    {/*'There are errors, check your console.'}*/}
                {/*</div>*/}
                <input type="submit" />
            </form>
        </div>
    );
};

