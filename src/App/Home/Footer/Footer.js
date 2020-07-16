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

//online message
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5f10820b7258dc118bee61d7/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();