import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import "./Share.css"

const Share = () => {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
          <input placeholder="What's in your mind Ayoub?" className="shareInput" />
        </div>

        <hr className="shareHR" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon"/>
              <div className="shareOptionText"> Photo or Video </div>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon"/>
              <div className="shareOptionText"> Tag </div>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon"/>
              <div className="shareOptionText"> Location </div>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
              <div className="shareOptionText"> Feelings </div>
            </div>
          </div>
          <button className="shareButton"> Share </button>
        </div>
      </div>
    </div>
  )
}

export default Share