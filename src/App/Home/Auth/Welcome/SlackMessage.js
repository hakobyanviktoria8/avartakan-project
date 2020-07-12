import React, { useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export function SlackMessage(props) {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const axios = require('axios');
    
    async function submitForm(e) {
        // e.preventDefault();

        const url = "https://hooks.slack.com/services/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";
        const data = {
            text: `Name: ${name} \n Message: ${message} \n Email: ${email} `,
        };
        try {
            let res = await axios.post(url, JSON.stringify(data), {
                    withCredentials: false,
                    transformRequest: [
                        (data, headers) => {
                            delete headers.post["Content-Type"];
                            return data;
                        },
                    ],
                }
            );
            console.log("Arach", res, res.data);
            if (res.status === 200) {
                alert("Your message was successfully sent to.");
                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (err) {
            console.error(err);
            alert("There was an error. Please try again later.");
        }
    }

    return(
        <form className={classes.root} noValidate autoComplete="off">
            <textarea
                style={{width: "100%"}}
                name=""
                id="message"
                placeholder="Write message ..."
                cols="60"
                rows="3"
                value={message}
                onChange={(e) => {setMessage(e.target.value)}}
            />
            <TextField
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                style={{width: "100%"}}
                id="standard-basic"
                label="Your Name"
                type="text"
            />
            <TextField
                style={{width: "100%"}}
                id="standard-basic"
                label="Your Email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <Button
                onClick={(e) => submitForm(e)}
                disabled={!email}
                variant="contained"
                color="primary"
                style={{width: "100%"}}
                className={classes.button}
            >
                Send
            </Button>
        </form>
    )
}