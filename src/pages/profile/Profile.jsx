import './Profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feeds from '../../components/feeds/Feeds'

const Profile = () => {
  return (
    <>
    <Topbar/>
    <div className='profileContainer'>
    <Sidebar/>
    <div className="profileRight">
    <div className="profileRightTop">
      <div className="profileCover">
      <img className='profileCoverImg' src="assets/post/3.jpeg" alt="" />
      <img className='profileUserImg' src="assets/person/1.jpeg" alt="" />
      </div>
      <div className="profileInfo">
        <h4 className='profileInfoName'> Ayoub Shah </h4>
        <span className="profileInfoDesc"> Description checking </span>
      </div>
    </div>
    <div className="profileRightBottom">
    <Feeds/>
    <Rightbar profile/>
    </div>
    </div>
    </div>
</>
  )
}

export default Profile