import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import { API_URL } from "../constants";


export default function AnnouncementDetail() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [announcement, setAnnouncement] = useState()

    useEffect(() => {
        var annId = searchParams.get("id")

        if (annId) {
            axios.get(`${API_URL}/web/announcement?id=${annId}`)
                .then(res => setAnnouncement(res.data.message))
                .catch(err => console.log(err))
        }
        else {
            window.location.href = "/"
        }

    }, [])

    return (
        <div style={{ marginTop: "100px", width: "100vw", height: "100vh" }}>
            <NavbarComponent  />
            <div className="d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                {
                    announcement ? (
                        <>
                            <div className="d-flex flex-row justify-content-center" style={{marginTop:"20px"}}>
                                <div style={{ width: "40vw", height: "30vh", backgroundColor: "grey", borderRadius: "10px", backgroundImage:`url(${API_URL}/images/${announcement.image})`, backgroundSize:"cover" }} />


                            </div>
                            <div className="d-flex flex-row justify-content-center" style={{ marginTop: "20px" }}>
                                <div className="d-flex flex-row align-items-center" style={{ width: "40vw" }}>
                                    <div style={{ marginRight: "20px" }}>
                                        <b style={{ fontSize: "40px" }}>{announcement.title}</b>
                                    </div>
                                    -
                                    <div style={{ marginLeft: "20px" }}>
                                        <small style={{ fontSize: "20px" }}>{Date(announcement.createdAt*1000).split(" ").slice(1,5).join(" ")}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-center" style={{ marginTop: "30px" }}>
                                <div style={{ width: "40vw" }}>
                                    <p style={{ fontSize: "20px" }}>
                                        {announcement.content}
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div>There is no announcement like this</div>
                    )

                }


            </div>
        </div>
    )
}