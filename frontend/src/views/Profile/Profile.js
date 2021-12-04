import axios from "axios"
import {useEffect, useState} from "react"
import { Me } from "../../services/auth.service"

const Profile = () => {
    const [userContext, setUserContext] = useState({})
    useEffect(() => {
        Me().then((res) => {
            console.log(res)
            setUserContext({ 
                profileImage: new Blob(res.data.user.profileImage.data).text(),
            })
        })
    }, [])

    useEffect(() => {
        console.log(userContext.profileImage)
    }, [userContext.profileImage])

    return (
    <section className="profile">
        <header className="header">
            <div className="profile-img">
                <img src={new Blob(userContext.profileImage).text()}/>
            </div>
            <div className="header-data">
                <h2>{userContext.username}</h2>
            </div>
        </header>
    </section>
    )
}

export default Profile