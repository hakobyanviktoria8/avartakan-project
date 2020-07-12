import React, {useCallback, useContext} from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Registration.css";
import { useForm } from 'react-hook-form';
import app from "../Config/firebase";
import {createUser} from "../../../firestore";
import {AuthContext} from "../AuthProvider";
import { Navigate, useNavigate } from 'react-router-dom';


export const Registration = (props) => {
    //react-hook-form
    const { register, handleSubmit, errors } = useForm();
    //react-router-dom
    let navigate = useNavigate();
    //useContext
    const { currentUser } = useContext(AuthContext);

    const onSubmit = useCallback(
        async data => {
            console.log(data);
            try {
                let result = await app.auth().createUserWithEmailAndPassword(data.email, data.password);
                //firestore add user
                await createUser(result.user.uid, data.firstname, data.lastname, data.email, data.phone);
                navigate("/login");
            } catch (error) {
                alert("Տվյալ էլեկտրոնային հասցեն արդեն զբաղված է: Խնդրում ենք փորձել մեկ այլ տարբերակ:");
            }
        }
    );

    if (currentUser) {
        return <Navigate to="/" />;
    }

    return (
        <div className={"registration"}>
            <h2 className={"title"}>Գրանցվել</h2>
            <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="my-3">
                    <Col xs="10" sm="8" md="6" lg="5" xl="4" className="colSize">
                        <input className={"p-2"}
                            name="firstname"
                            ref={register({
                                required: true,
                                minLength:3
                            })}
                            placeholder="First name"
                        />
                        {errors.firstname && errors.firstname.type === "required" && <span>First name is required.</span>}
                        {errors.firstname && errors.firstname.type === "minLength" && <span>First name min length of 3.</span>}
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col xs="10" sm="8" md="6" lg="5" xl="4" className="colSize">
                        <input className={"p-2"}
                            name="lastname"
                            ref={register({
                                required: true,
                                minLength:5
                            })}
                            placeholder="Last name"
                        />
                        {errors.lastname && errors.lastname.type === "required" && <span>Last name is required.</span>}
                        {errors.lastname && errors.lastname.type === "minLength" && <span>Last name min length of 4.</span>}
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col xs="10" sm="8" md="6" lg="5" xl="4" className="colSize">
                        <input className={"p-2"}
                            name="email"
                            ref={register({
                                required: true,
                                minLength:8,
                                pattern: /^\S+@\S+$/i
                            })}
                            placeholder="Email"
                        />
                        {errors.email && errors.email.type === "required" && <span>Email is required.</span>}
                        {errors.email && errors.email.type === "minLength" && <span>Email min length of 8.</span>}
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col xs="10" sm="8" md="6" lg="5" xl="4" className="colSize">
                        <input className={"p-2"}
                            name="phone"
                            ref={register({
                                required: true,
                                pattern: /^\d\d\d-\d\d-\d\d-\d\d$/
                            })}
                            placeholder="Phone 0**-**-**-**"
                        />
                        {errors.phone && errors.phone.type === "required" && <span>Phone number is required.</span>}
                        {errors.phone && errors.phone.type === "minLength" && <span>Phone number fill thats form 0**-**-**-**.</span>}
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col xs="10" sm="8" md="6" lg="5" xl="4" className="colSize">
                        <input className={"p-2"}
                            name="age"
                            ref={register({
                                min: 8,
                                max: 100,
                                pattern: /\d+/
                            })}
                            placeholder="Age" />
                        {errors.age && errors.age.type === "required" && <span>Please enter number for age.</span>}
                    </Col>
                </Row>
                <Row className={"mt-0"}>
                    <Col xs="10" sm="8" md="6" lg="5" xl="4" className="colSize">
                        <Row>
                            <Col xs="6" sm="6" md="6" lg="6" xl="6">
                                Female <input className={"gender"}
                                name="gender"
                                type="radio"
                                value="female"
                                ref={register({ required: true })}/>
                            </Col>
                            <Col xs="6" sm="6" md="6" lg="6" xl="6">
                                Male <input className={"gender"}
                                name="gender"
                                type="radio"
                                value="male"
                                ref={register({ required: true })}/>
                            </Col>
                        </Row>
                        {errors.gender && <span>Please select gender.</span>}
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col xs="10" sm="8" md="6" lg="5" xl="4" className="colSize">
                        <input className={"p-2"}
                            type="password"
                            name="password"
                            ref={register({
                                required: true,
                                minLength:8,
                            })}
                            placeholder="Password"
                        />
                        {errors.password && errors.password.type === "required" && <span>Password is required.</span>}
                        {errors.password && errors.password.type === "minLength" && <span>Password min length of 8.</span>}
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col xs="10" sm="8" md="6" lg="5" xl="4" className="colSize">
                        <input type="submit"  className={"p-2"} value="Գրանցվել" />
                    </Col>
                </Row>
            </form>
            </Container>
        </div>
    );
};

