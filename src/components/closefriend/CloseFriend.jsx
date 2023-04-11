import "./CloseFriend.css";

const CloseFriend = ({friend}) => {
  return (
      <div>
          <li className="sidebarFriend">
              <img src={friend.profilePicture} alt="" className="sidebarFriendImg" />
              <span className="sidbarFriendName"> {friend.username} </span>
          </li>
      </div>
  )
}

export default CloseFriend