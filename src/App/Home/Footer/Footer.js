import React from "react";
import './Footer.css';


function Footer(props) {
    return (
        <div className="footer">
            <p >Copyright &copy; 2020 Armenian trip</p>
            <p className={"nameCopyright"}>Lecturer: <b>A.Margaryan</b>. Students: <b>M</b>. Sofyan, <b>V</b>. Hakobyan, <b>M</b>. Grigoryan</p>
        </div>
    )
}
export default Footer