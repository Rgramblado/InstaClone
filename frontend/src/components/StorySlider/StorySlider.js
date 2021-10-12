import './StorySlider.css'
import Logo from '../../logo.svg'

const StorySlider = (props) => {
    return(
    <div className="story-slider">
        <div className="story-container">
            <button>
                <img src={Logo} alt="Mi foto de perfil"/>
            </button>
            <span>My stories</span>
        </div>
        {props.stories.map((story, index) => {
            return (
            <div className="story-container" key={index}>
                <button>
                    <img src={story.image} className={story.seen ? "" : "not-seen"} alt={"Foto de perfil de " + story.username}/>
                </button>
                <span>{story.username}</span>
            </div>
            )
        })}
    </div>)
}

export default StorySlider