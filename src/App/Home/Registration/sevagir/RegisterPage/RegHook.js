import React from 'react';
import { useForm } from 'react-hook-form';

export function RegHook(props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstname" ref={register} />
            <input name="lastname" ref={register({ required: true })} />
            {errors.lastname && 'Last name is required.'}
            <input name="age" ref={register({ pattern: /\d+/ })} />
            {errors.age && 'Please enter number for age.'}
            <input type="submit" />
        </form>
//         <Form className={"form"} onSubmit={handleSubmit(onSubmit)}>
//         <Row form>
//     <Col md={3}>
//         <FormGroup>
//         <Input type="text" name="firstname" ref={register({ required: true })} placeholder="First name" />
//         {errors.firstname && 'First name is required.'}
// </FormGroup>
// </Col>
//     <Col md={3}>
//         <FormGroup>
//             <Input type="text" name="lastname" ref={register({ required: true })} placeholder="Last name" />
//             {errors.lastname && 'Last name is required.'}
//         </FormGroup>
//     </Col>
//     </Row>
//     <Row form>
//         <Col md={3}>
//             <FormGroup>
//                 <Input type="email" name="email" ref={register({ required: true })} placeholder="Email" />
//             </FormGroup>
//         </Col>
//         <Col md={3}>
//             <FormGroup>
//                 <Input type="password" name="password" ref={register({ required: true })} placeholder="Password" />
//             </FormGroup>
//         </Col>
//     </Row>
//     <Row form>
//     <Col md={3}>
//         <FormGroup>
//         <Input type="text" name="address" ref={register({ required: true })} placeholder="Address 1234 Main St"/>
//         </FormGroup>
// </Col>
// <Col md={3}>
//         <FormGroup>
//         <Input type="text" name="phone" ref={register({ required: true })} placeholder="Phone  +374-**-**-**"/>
//         {errors.age && 'Please enter your phone number.'}
// </FormGroup>
// </Col>
// </Row>
// <Row form>
//     <Col md={3}>
//         <FormGroup>
//         <Input type="text" name="age" ref={register({ pattern: /\d+/ })} placeholder="Age"/>
//         {errors.age && 'Please enter number for age.'}
// </FormGroup>
// </Col>
//     <Col md={3}>
//         <FormGroup>
//
//         </FormGroup>
//     </Col>
//     </Row>
//     <Row form>
//         <Col md={3}>
//             <input type="submit" value="Registration"/>
//         </Col>
//         <Col md={3}>
//             <Input type="submit" value="Login"/>
//         </Col>
//     </Row>
//     </Form>
    );
}
