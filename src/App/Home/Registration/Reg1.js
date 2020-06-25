import React from 'react';
import { useForm } from 'react-hook-form';

export default function Reg1(props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First name" name="FirstName" ref={register({required: true, minLength: 3,maxLength: 10})} />
            <input type="text" placeholder="Last name" name="LastName" ref={register({required: true, minLength: 5,maxLength: 15})} />
            <input type="email" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
            <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
            {/*<select name="Title" ref={register({ required: true })}>*/}
                {/*<option value="Mr">Mr</option>*/}
                {/*<option value="Mrs">Mrs</option>*/}
                {/*<option value="Miss">Miss</option>*/}
                {/*<option value="Dr">Dr</option>*/}
            {/*</select>*/}

            <input name="gender" type="radio" value="Male" ref={register({ required: true })}/> Male
            <input name="gender" type="radio" value="Female" ref={register({ required: true })}/> Female

            <input type="submit" />
        </form>
    );
}