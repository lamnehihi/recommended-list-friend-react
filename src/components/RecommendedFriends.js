import React, { Component } from "react";
import FollowFriendListItem from "./FollowFriendListItem";

class RecommendedFriends extends Component {
  constructor(props) {
    console.log("child constructor")
    super(props);
  }
  render() {
    console.log("render child constructor")
    return (
      <div className="container">
        <div className="header">
          <span className="faded">Gợi ý cho bạn</span>
          <span>Xem tất cả</span>
        </div>

        <div className="list-friend">
          {this.props.friends.map((item, index) => (
            <FollowFriendListItem user={item} key={index}/>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("mount child constructor");
  }

  componentDidUpdate() {
    console.log("update child constructor");
  }

  componentWillUnmount() {
    console.log("update child constructor");
  }

}

export default RecommendedFriends;
