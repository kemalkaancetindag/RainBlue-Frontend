import axios from "axios"
import { useEffect, useState } from "react"
import NavbarComponent from "../components/NavbarComponent"
import { ADMIN_API_URL, WEB_API_URL } from "../constants"



export default function Announcements() {

    const [announcements, setAnnouncements] = useState()

    useEffect(() => {
        axios.get(`${WEB_API_URL}/announcements`)
            .then(res => setAnnouncements(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <NavbarComponent />
            <div style={{ marginTop: "80px", width: "100vw", height: "100%" }}>

                <div className="d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                    {
                        announcements ? (
                            <>
                                {announcements.map(ann => (
                                    <a href={`/announcement-detail?id=${ann.SqlId}`} style={{ textDecoration: "none", color: "black" }} key={ann.SqlId}>
                                        <div className="d-flex flex-row justify-content-center" style={{ width: "100%", height: "100%", marginTop: "30px" }}>
                                            <div style={{ width: "60%", height: "200px", borderRadius: "10px" }} className="border border-2">
                                                <div className="d-flex flex-row" style={{ height: "100%", width: "100%" }}>
                                                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "350px", height: "100%" }}>
                                                        <div style={{ width: "300px", height: "150px", backgroundColor: "grey", borderRadius: "5px", backgroundImage: `url(${ADMIN_API_URL}/static/${ann.image})`, backgroundSize: "cover" }} />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-around" style={{ padding: "20px" }}>
                                                        <div>
                                                            <b>{ann.title}</b>
                                                        </div>
                                                        <div>
                                                            <small>{Date(ann.createdAt * 1000).split(" ").slice(1, 5).join(" ")}</small>
                                                        </div>
                                                        <div style={{ textOverflow: "ellipsis", maxWidth: "600px", overflow: "hidden" }}>
                                                            <p>{ann.content}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </a>

                                ))}
                            </>
                        ) : (
                            <div>
                                There is no announcements yet
                            </div>
                        )
                    }


                </div>
            </div>
        </>

    )
}