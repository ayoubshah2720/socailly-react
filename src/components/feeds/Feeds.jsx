// import { Share } from "@mui/icons-material"
import Post from "../post/Post"
import Share from "../share/Share"
import "./Feeds.css"
import {Posts} from "../../dummyData"

const Feeds = () => {
  return (
    <div className="feedsContainer">
        <div className="feedsWrapper">
            <Share />
            {Posts.map(p => (
              <Post key={p.id} post={p} />
            ))}
        </div>
    </div>
  )
}

export default Feeds