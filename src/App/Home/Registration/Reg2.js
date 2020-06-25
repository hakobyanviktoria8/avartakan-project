import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";

export default function Reg2(props) {
    const { control, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller as={Input} name="HelloWorld" control={control} defaultValue="" />
            <Controller as={InputField} name="AntdInput" control={control} defaultValue="" />
            <Controller
                as={Select}
                name="reactSelect"
                control={control}
                onChange={([selected]) => {
                    // React Select return object instead of value for selection
                    return { value: selected };
                }}
                defaultValue={{}}
            />

            <input type="submit" />
        </form>
    );
}
