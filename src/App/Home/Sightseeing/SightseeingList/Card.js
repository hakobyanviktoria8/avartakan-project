import React  from "react";
import { UncontrolledCarousel } from 'reactstrap';
import axios from 'axios';

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
            <div  className="cardBorder">
                {/*img, header, caption, key*/}
                <UncontrolledCarousel items={this.state.items}/>
                <h3 className={"subtitle"}>{this.props.title}</h3>
            </div>
        )
    }
}
export default Card