import React  from "react";
import { UncontrolledCarousel } from 'reactstrap';
import axios from 'axios';
import Border from "./Border";

class Card extends React.Component{
    state = {
        items: [],
    };
    componentDidMount() {
        axios.get(this.props.url)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
    }
    render() {
        return (
            <Border>
                <div>
                    {console.log(this.state.items)}
                    <UncontrolledCarousel items={this.state.items}/>
                    <h3 className={"subtitle"}>{this.props.title}</h3>
                </div>
            </Border>
        )
    }
}
export default Card