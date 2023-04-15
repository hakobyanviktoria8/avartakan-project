import React  from "react";
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
                <img
                    src={require(`./../TableWrapper/SelectedItem/Item/Images/${this.props.srcName}/1.jpg`)}
                    alt="headImage"
                />
                <h3 className={"subtitle"}>{this.props.title}</h3>
            </div>
        )
    }
}
export default Card