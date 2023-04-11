import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feeds from '../../components/feeds/Feeds'
import "./Home.css";

const Home = () => {
  return (
    <>
        <Topbar/>
        <div className='homeContainer'>
        <Sidebar/>
        <Feeds/>
        <Rightbar/>
        </div>
    </>
  )
}

export default Home