import './Publication.css'
import {useState} from 'react'
import {ChatBubbleOutlineOutlined, Favorite, FavoriteBorder, SendOutlined } from '@material-ui/icons';

const Publication = (props) => {
    const [nComments, setNComments] = useState(1);
    return(
    <div className="publication">
        <div className="profile">
            <div className="profile-image">
                <img src={props.data.profile.image} alt={"Foto de perfil de " + props.data.profile.username}/>
            </div>
            <div className="profile-name">
                <span>{props.data.profile.username}</span>
            </div>
        </div>
        <div className="publication-data">
            <img src={props.data.publication.image} alt="Publicacion"/>
        </div>
        <div className="publication-buttons">
            <div className="left-controls">
                <button>
                    {props.data.publication.likedByMe ? 
                    <Favorite  style={{fill: 'red'}}/> :
                    <FavoriteBorder/>}
                </button>
                <button>
                    <ChatBubbleOutlineOutlined/>
                </button>
                <button>
                    <SendOutlined/>
                </button>
            </div>
        </div>

        <div className="publication-title">
            <p>
                <span className="profile-name">
                    {props.data.profile.username}
                </span>
                {props.data.publication.title}
            </p>
        </div>
        
        <div className="publication-comments">
            {nComments < props.data.publication.comments.length ? 
            <span className="see-more-comments" onClick={() => setNComments(nComments+3)}>Ver más comentarios</span> 
            : ""}
            {props.data.publication.comments.map((comment, index) => {
                if(index < nComments){
                    return (
                    <p key={index}>
                        <span className="profile-name">
                            {comment.username}
                        </span>
                        {comment.content}
                    </p>)
                }else{return null}
            } )}
        </div>
    </div>)
}

export default Publication