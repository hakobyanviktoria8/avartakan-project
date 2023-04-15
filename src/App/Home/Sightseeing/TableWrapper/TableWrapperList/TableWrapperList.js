import  React from "react";
import { useParams } from 'react-router-dom';
import Table from "./Table";

export  function TableWrapperList(props) {
    let { section } = useParams();

    return (
        <Table url={`https://json-server-data.onrender.com/${section}`}/>
    );
}