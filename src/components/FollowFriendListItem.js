import React, { Component } from "react";

class FollowFriendListItem extends Component {
  render() {
    return (
      <div className="recommend-friend">
        <div className="info">
          <div className="avatar">
            <img src="https://picsum.photos/id/237/300/300" />
          </div>

          <div className="name">
            <span>{this.props.user.name}</span>
            <span class="faded">Gợi ý cho bạn</span>
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
