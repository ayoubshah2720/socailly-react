
import { Users } from "../../dummyData"
import Online from "../online/Online"
import "./Rightbar.css"

const Rightbar = ({profile}) => {

  const HomeRightbar = () => {
    return (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src="assets/gift.png" alt="" />
        <span className="birthdayText"> <b> Ideal Saher </b>and 3 <b> others have birthday</b> today! </span>
      </div>
      <img className="rightbarAd" src="assets/ad.png" alt="" />
      <h4 className="rightbarTitle"> Online Friends </h4>
      <ul className="rightbarFriendList">
        {Users.map(u => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
    )
  }

  const ProfileRightbar = () => {
    return (
    <>
      <h4 className="rightbarTitle"> User Information </h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey"> City: </span>
          <span className="rightbarInfoValue"> Islamabad </span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey"> From: </span>
          <span className="rightbarInfoValue"> Bahawalpur </span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey"> Relatoinship: </span>
          <span className="rightbarInfoValue"> Single </span>
        </div>
      </div>
      <h4 className="rightbarTitle"> User Friends </h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName"> John Carter </span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName"> John Carter </span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName"> John Carter </span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName"> John Carter </span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName"> John Carter </span>
        </div>
      </div>
    </>
    )
  }

  return (
    <div className="rightbarContainer">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
    </div>
  )
}

export default Rightbar