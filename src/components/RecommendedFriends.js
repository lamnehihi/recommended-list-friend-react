import React, { Component } from "react";
import FollowFriendListItem from './FollowFriendListItem';

class RecommendedFriends extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <span className="faded">Gợi ý cho bạn</span>
          <span>Xem tất cả</span>
        </div>

        <div className="list-friend">
          <FollowFriendListItem user={{
            name: "Thanh Lam"
          }}/>
          <FollowFriendListItem user={{
            name: "Thanh Lam"
          }}/>
          <FollowFriendListItem user={{
            name: "Thanh Lam"
          }}/>
        </div>
      </div>
    );
  }
}

export default RecommendedFriends;
