import React from "react";
import like from "./like.png";
import "./Like.css";

class LikeButton extends React.Component {
    state = {
        likes: 0
    };

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    render() {
        return(
            <div className={"likeBtn"} onClick={this.addLike} id={this.props.itemId}>
                <img className={"likeImg"} src={like} alt=""/>
                <span className={"likeNum"}>{this.state.likes}</span>
            </div>

        )
    }
}
export default LikeButton