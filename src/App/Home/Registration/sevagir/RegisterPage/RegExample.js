import React from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';

export const Registration = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Container>
            <Form className={"form"} onSubmit={handleSubmit(onSubmit)}>
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="exampleFname">First Name</Label>
                            <Input type="text" name="fName" id="exampleFname" placeholder="First Name" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="exampleLname">Last Name</Label>
                            <Input type="text" name="lName" id="exampleLname" placeholder="Last Name" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="exampleAddress">Address</Label>
                            <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="examplePhone">Phone Namber</Label>
                            <Input type="text" name="phoneNumber" id="examplePhone" placeholder="+374-**-**-**"/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check>
                    <Input type="checkbox" name="check" id="exampleCheck"/>
                    <Label for="exampleCheck" check>Check me out</Label>
                </FormGroup>
                <Button>Sign in</Button>
            </Form>
        </Container>
    );
};
export default function Registration(props) {
    return(
        <div className={"registration"}>
            <h2 className={"title"}>Մուտք գործել</h2>
            {/*<RegHook/>*/}
            {/*<RegExample/>*/}
            {/*<form action="">*/}
            {/*<input type="text" placeholder="Full name" name="fullName"/>*/}
            {/*<input type="email" placeholder="Email"  name="email"/>*/}
            {/*<input type="password" placeholder="Password"  name="password"/>*/}
            {/*<input type="text" placeholder="Address ex. 1234 Main St 7"  name="address"/>*/}
            {/*<input type="text" placeholder="Phone Number 0**-**-**-**"  name="phoneNumber"/>*/}
            {/*<label className="form-check-label" htmlFor="inlineRadio1">Female*/}
            {/*<input type="radio" name="gender" value="Female"/>*/}
            {/*</label>*/}
            {/*<label className="form-check-label" htmlFor="inlineRadio2">Male*/}
            {/*<input type="radio" name="gender" value="Male"/>*/}
            {/*</label>*/}
            {/*<button type="button">Sign up</button>*/}
            {/*</form>*/}

            {/*<form action="">*/}
            {/*<div className="form-row">*/}
            {/*<div className="offset-md-3 my-1 col-md-6">*/}
            {/*<button type="button" className="btn btn-secondary reg-log-btn" id="regBtn">Registration*/}
            {/*</button>*/}
            {/*<button type="button" className="btn btn-secondary reg-log-btn" id="logBtn">Login</button>*/}
            {/*</div>*/}
            {/*<div id="regBtnForm" className="w-100">*/}
            {/*<div className="form-group offset-md-3 my-2 col-md-6">*/}
            {/*<div className="form-check form-check-inline">*/}
            {/*<input className="form-check-input" type="radio" name="inlineRadioOptions"*/}
            {/*id="inlineRadio1" value="Female"/>*/}
            {/*<label className="form-check-label" htmlFor="inlineRadio1">Female</label>*/}
            {/*</div>*/}
            {/*<div className="form-check form-check-inline">*/}
            {/*<input className="form-check-input" type="radio" name="inlineRadioOptions"*/}
            {/*id="inlineRadio2" value="Male"/>*/}
            {/*<label className="form-check-label" htmlFor="inlineRadio2">Male</label>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="form-group offset-md-3 my-2 col-md-6">*/}
            {/*<button type="button" className="btn btn-secondary btn-lg btn-block" id="btnReg">Sign up*/}
            {/*</button>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div id="logBtnForm" className="w-100">*/}
            {/*<div className="form-group offset-md-3 my-2 col-md-6">*/}
            {/*<input id="loginEmale" type="email" className="form-control" placeholder="Email"/>*/}
            {/*</div>*/}
            {/*<div className="form-group offset-md-3 my-2 col-md-6">*/}
            {/*<input id="loginPassword" type="password" className="form-control" placeholder="Password"/>*/}
            {/*</div>*/}
            {/*<div className="form-group offset-md-3 my-2 col-md-6">*/}
            {/*<button type="button" className="btn btn-secondary btn-lg btn-block" id="btnLog">Login*/}
            {/*</button>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</form>*/}
        </div>
    )
}
