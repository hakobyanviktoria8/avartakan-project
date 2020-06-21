import React  from "react";
import Card from "./Card";

export default function Waterfalls(props) {
    return(
        <div>
            <Card url={"https://am-places.herokuapp.com/waterfalls"} title={"Ջրվեժներ"}/>
        </div>
    )
}

// class Waterfalls extends React.Component{
//     state = {
//         items: []
//     };
//     componentDidMount() {
//         axios.get("https://am-places.herokuapp.com/waterfalls")
//             .then(res => {
//                 const items = res.data;
//                 this.setState({ items });
//             })
//     }
//     render() {
//         console.log(this.state.items);
//         return (
//             <div onClick={()=>console.log("Waterfalls")} style={{backgroundColor:""}}>
//                 <UncontrolledCarousel items={this.state.items}/>
//                 <h3 className={"subtitle"}>Ջրվեժներ</h3>
//             </div>
//         )
//     }
// }
// export default Waterfalls