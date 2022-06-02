import axios from "axios"
import _ from "lodash"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import InfoBadgeComponent from "../components/InfoBadgeComponent"
import InfoContainerComponent from "../components/InfoContainerComponent"
import NavbarComponent from "../components/NavbarComponent"
import { WEB_API_URL } from "../constants"




function GuildProfilePage() {

    const [isComments, setIsComments] = useState(false)
    const [guildInfo, setGuildInfo] = useState()
    const [voiceInfo, setVoiceInfo] = useState()
    const [rawGuild, setRawGuild] = useState()
    const [comments, setComments] = useState()
    const [averageStar, setAverageStar] = useState()
    const [searchParams, setSearchParams] = useSearchParams();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [newCommentContent, setNewCommentContent] = useState()
    const [badges, setBadges] = useState([])



    useEffect(() => {
        var guild_id = searchParams.get("id")
        if (guild_id) {
            axios.get(`${WEB_API_URL}/get-guild-profile?guild_id=${guild_id}`)
                .then(res => {
                    setRawGuild(res.data)
                })
                .catch(err => console.log(err))

            axios.get(`${WEB_API_URL}/comments?guild_id=${guild_id}`)
                .then(res => {
                    setAverageStar(res.data.averageStarPoint)
                    setComments(res.data.data)
                })
                .catch(err => console.log(err))

            axios.get(`${WEB_API_URL}/get-badges?guildId=${guild_id}`)
                .then(res => setBadges(res.data))
                .catch(err => console.log(err))
        }


    }, [])

    useEffect(() => {

        if (rawGuild) {
            var guildInfo = {}
            var voiceInfo = {}

            guildInfo["id"] = rawGuild["id"]
            guildInfo["bot count"] = rawGuild["BotCount"]
            guildInfo["owner id"] = rawGuild["owner_id"]
            guildInfo["region"] = rawGuild["region"]
            guildInfo["member count"] = rawGuild["BotCount"] + rawGuild["MuteCount"] + rawGuild["DeafCount"] + rawGuild["VoiceCount"]

            voiceInfo["mute count"] = rawGuild["MuteCount"]
            voiceInfo["deaf count"] = rawGuild["DeafCount"]
            voiceInfo["voice count"] = rawGuild["VoiceCount"]
            voiceInfo["bot count"] = rawGuild["BotCount"]



            setGuildInfo(guildInfo)
            setVoiceInfo(voiceInfo)





        }
    }, [rawGuild])

    const sendNewComment = () => {

        var guild_id = searchParams.get("id")
        var commentData = {
            guildId: guild_id,
            createdAt: Date.now(),
            content: newCommentContent,
            starPoint: rating,
            username: localStorage.getItem("username"),
            userImage: localStorage.getItem("userImage"),
            userId: localStorage.getItem("user_id")
        }

        axios.post(`${WEB_API_URL}/comment`, commentData)
            .then(res => console.log(res))
            .then(res => {
                axios.get(`${WEB_API_URL}/comments?guild_id=${guild_id}`)
                    .then(res => {
                        setAverageStar(res.data.averageStarPoint)
                        setComments(res.data.data)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <NavbarComponent />
            <div style={{ width: "100vw", marginTop: "100px", height: "100vh" }}>

                {
                    rawGuild ? (
                        <>
                            <div style={{ width: "65vw", height: "500px", backgroundImage: `url(https://cdn.discordapp.com/banners/${rawGuild["id"]}/${rawGuild["banner"]}.png?size=1024)`, marginTop: "5%", marginBottom: "2%", position: "relative", backgroundSize: "cover" }} className="mx-auto rounded">
                                <div style={{ width: "230px", height: "230px", zIndex: "3", position: "absolute", bottom: "20px", left: "20px", backgroundImage: `url(https://cdn.discordapp.com/icons/${rawGuild["id"]}/${rawGuild["icon"]}.gif)`, backgroundSize: "cover" }} className="rounded-circle border-5" />


                                <div style={{ width: "100%", height: "120px", backgroundColor: "rgb(29, 117, 189)", position: "absolute", bottom: "0", opacity: "0.9", paddingLeft: "300px" }} className="d-flex flex-row align-items-center">
                                    <span style={{ color: "white", fontSize: "35px" }}><b>{rawGuild["name"]}</b></span>
                                </div>



                            </div>

                            <div style={{ width: "65vw", height: "80px", marginBottom: "2%" }} className="mx-auto d-flex flex-row">
                                <button style={{ width: "50%", backgroundColor: isComments ? "#CED8E0" : "rgb(29, 117, 189)", border: "none", position: "relative", borderRadius: "6px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px", color: "white" }} onClick={() => setIsComments(false)}>
                                    <b style={{ fontSize: "25px" }}>Info</b>
                                </button>
                                <div style={{ height: "100%", width: "1px" }} />
                                <button style={{ width: "50%", border: "none", position: "relative", borderRadius: "6px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", color: "white", backgroundColor: isComments ? "rgb(29, 117, 189)" : "#CED8E0" }} onClick={() => setIsComments(true)}>
                                    <b style={{ fontSize: "25px" }}>Comments</b>
                                </button>

                            </div>
                        </>
                    ) : (
                        <div></div>
                    )
                }

                {
                    !isComments ? (
                        <>
                            <div className="d-flex flex-row justify-content-center" style={{ width: "100vw" }}>
                                <div className="d-flex flex-row flex-1  justify-content-around" style={{ width: "65vw" }}>
                                    {
                                        guildInfo && voiceInfo ? (
                                            <>
                                                <InfoContainerComponent componentData={guildInfo} componentTitle={"guild info"} />

                                                <div style={{ minWidth: "20vw", width: "20vw" }} className="border rounded d-flex flex-column align-items-center justify-content-around">
                                                    <div>
                                                        <b>Active User Count</b>
                                                    </div>
                                                    <div>
                                                        <b style={{ fontSize: "30px", color: "rgb(29, 117, 189)" }}>{voiceInfo["voice count"]}</b>
                                                    </div>
                                                    <div>
                                                        <b>Badge Count</b>
                                                    </div>
                                                    <div>
                                                        <b style={{ fontSize: "30px", color: "rgb(29, 117, 189)" }}>{badges.length}</b>
                                                    </div>

                                                </div>
                                                {console.log(voiceInfo)}
                                                <InfoContainerComponent componentData={voiceInfo} componentTitle={"voice info"} />

                                            </>

                                        ) : (
                                            <div></div>

                                        )
                                    }

                                </div>
                            </div>


                            <InfoBadgeComponent badges={badges} />
                        </>

                    ) : (
                        <>
                            <div style={{ width: "100vw", height: localStorage.getItem("a4b8c16") ? "35%" : "25%", position: "relative" }} className="mb-3">
                                <div style={{ width: "65vw", height: "100%", borderRadius: "10px", padding: "15px", position: "relative" }} className="mx-auto d-flex flex-column border border-3 justify-content-around">
                                    <div className="d-flex flex-row">
                                        <b style={{ fontSize: "30px" }}>rating & reviews</b>
                                    </div>
                                    <div className="d-flex flex-row align-items-end">
                                        <div>
                                            <b style={{ fontSize: "70px" }}>{averageStar ? averageStar : 0}</b>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: "25px" }}>{comments ? comments.length : 0} reviews</span>
                                        </div>
                                    </div>
                                    {
                                        localStorage.getItem("a4b8c16") ? (
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-row" className="mb-2">
                                                    {[...Array(5)].map((star, index) => {
                                                        index += 1;
                                                        return (
                                                            <button
                                                                style={{ border: "none", backgroundColor: "white", width: "30px", height: "30px" }}
                                                                type="button"
                                                                key={index}
                                                                onClick={() => setRating(index)}
                                                                onMouseEnter={() => setHover(index)}
                                                                onMouseLeave={() => setHover(rating)}


                                                            >
                                                                <span style={{ color: index <= (rating || hover) ? "rgb(29, 117, 189)" : "#ccc", fontSize: "30px" }} >&#9733;</span>
                                                            </button>
                                                        );
                                                    })}

                                                </div>


                                                <textarea style={{ width: "100%", height: "140px", borderRadius: "10px", resize: "none", boxSizing: "border-box" }} className="border border-2 mt-2" onChange={(e) => setNewCommentContent(e.target.value)} />
                                                <button style={{ width: "12%", height: "45px", border: "none", color: "white", backgroundColor: "rgb(29, 117, 189)", borderRadius: "5px" }} className="mt-2" onClick={sendNewComment}>Make Comment</button>
                                            </div>
                                        ) : (
                                            <div className="d-flex flex-row" style={{ fontSize: "20px" }}>
                                                Only logged users can make comments.
                                            </div>
                                        )
                                    }


                                </div>

                            </div>
                            {
                                comments ? (
                                    <>
                                        {comments.map((comment, index) => (
                                            <div style={{ width: "100vw", height: "20%", position: "relative" }} key={index}>
                                                <div style={{ width: "65vw", height: "80%", top: "10px", position: "relative", borderRadius: "10px", padding: "15px" }} className="mx-auto d-flex flex-row border border-3">
                                                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: "150px" }}>
                                                        <div style={{ width: "120px", height: "120px", backgroundImage: `url(https://cdn.discordapp.com/avatars/${comment.userId}/${comment.userImage}.png)`, backgroundColor: "#ccc" }} className="rounded-circle" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-around" style={{ width: "100%", backgroundColor: "white", marginLeft: "20px" }}>
                                                        <div>
                                                            <b style={{ fontSize: "25px" }}>{comment.username}</b>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div className="d-flex flex-row">
                                                                {_.times(comment.starPoint, () => (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                                        <path fill="rgb(29, 117, 189)" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                                                    </svg>
                                                                ))}
                                                                {_.times(5 - comment.starPoint, () => (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                                        <path fill="#ccc" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                                                    </svg>
                                                                ))}



                                                            </div>
                                                            -
                                                            {Date(comment.createdAt * 1000).split(" ").slice(0, 5).join(' ')}



                                                        </div>
                                                        <div style={{ fontSize: "20px", fontWeight: "", }}>
                                                            {comment.content}
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>

                                        ))}

                                    </>

                                ) : (
                                    <div>
                                        There is no comments yet
                                    </div>
                                )
                            }



                        </>

                    )
                }



            </div>

        </>



    )

}


export default GuildProfilePage