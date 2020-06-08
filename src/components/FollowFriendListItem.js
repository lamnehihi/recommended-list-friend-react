import React, { Component } from "react";

class FollowFriendListItem extends Component {
  render() {
    return (
      <div className="recommend-friend">
        <div className="info">
          <div className="avatar">
            <img src={this.props.user.avatar} />
          </div>

          <div className="name">
            <span>{this.props.user.name}</span>
            <span className="faded">Gợi ý cho bạn</span>
          </div>
        </div>
        <a href="#" className="follow">
          Theo dõi
        </a>
      </div>
    );
  }
}

export default FollowFriendListItem;
