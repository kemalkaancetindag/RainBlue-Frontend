import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import InfoBadgeComponent from "../components/InfoBadgeComponent"
import InfoContainerComponent from "../components/InfoContainerComponent"
import LineChartComponent from "../components/LineChartComponent"


function GuildProfilePage() {

    const [isComments, setIsComments] = useState(false)



    return (
        <div style={{ width: "100vw", marginTop: "100px", height: "100vh" }}>
            <div style={{ width: "65vw", height: "500px", backgroundImage: "url(https://cdn.discordapp.com/banners/727881213406347282/a_17d5ff6cff28e4010f4110967260ea2c.png?size=1024)", marginTop: "5%", marginBottom: "2%", position: "relative", backgroundSize: "cover" }} className="mx-auto rounded">
                <div style={{ width: "230px", height: "230px", zIndex: "3", position: "absolute", bottom: "20px", left: "20px", backgroundImage: "url(https://cdn.discordapp.com/icons/727881213406347282/a_3a8dfdf029ddab79789db1a85e8f9cbf.gif)", backgroundSize: "cover" }} className="rounded-circle border-5" />


                <div style={{ width: "100%", height: "120px", backgroundColor: "rgb(29, 117, 189)", position: "absolute", bottom: "0", opacity: "0.9", paddingLeft: "300px" }} className="d-flex flex-row align-items-center">
                    <span style={{ color: "white", fontSize: "35px" }}><b>Guild Name</b></span>
                </div>



            </div>

            <div style={{ width: "65vw", height: "80px", marginBottom: "2%" }} className="mx-auto d-flex flex-row">
                <button style={{ width: "50%", backgroundColor: isComments ? "#CED8E0" : "rgb(29, 117, 189)", border: "none", position: "relative", borderRadius: "6px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px", color: "white" }}>
                    <b style={{ fontSize: "25px" }}>Info</b>
                </button>
                <div style={{ height: "100%", width: "1px" }} />
                <button style={{ width: "50%", border: "none", position: "relative", borderRadius: "6px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", color: "white", backgroundColor: isComments ?  "rgb(29, 117, 189)" : "#CED8E0"  }}>
                    <b style={{ fontSize: "25px" }}>Comments</b>
                </button>

            </div>
            {
                !isComments ? (
                    <>
                    <div className="d-flex flex-row flex-1  justify-content-center">
                        <InfoContainerComponent />
                        <LineChartComponent />
                        <InfoContainerComponent />                        
                    </div>
                    <InfoBadgeComponent/>
                    </>

                ) : (
                    <>
                        <div style={{ width: "100vw", height: "20%", position: "relative" }}>
                            <div style={{ width: "65vw", height: "80%", top: "10px", position: "relative", borderRadius: "10px", padding: "15px" }} className="mx-auto d-flex flex-row border border-3">
                                <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: "150px" }}>
                                    <div style={{ width: "120px", height: "120px", backgroundImage: "url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png)" }} className="rounded-circle" />
                                </div>
                                <div className="d-flex flex-column justify-content-around" style={{ width: "100%", backgroundColor: "white", marginLeft: "20px" }}>
                                    <div>
                                        <b style={{ fontSize: "25px" }}>Username</b>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="d-flex flex-row">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                <path fill="rgb(29, 117, 189)" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                <path fill="rgb(29, 117, 189)" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                <path fill="rgb(29, 117, 189)" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                <path fill="rgb(29, 117, 189)" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                <path fill="rgb(29, 117, 189)" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                            </svg>
                                        </div>
                                        -
                                        Saturday, November 20th 2021


                                    </div>
                                    <div style={{ fontSize: "20px", fontWeight: "", }}>
                                        Lorem ipsum dolor
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div style={{ width: "100vw", height: "20%", position: "relative" }}>
                            <div style={{ width: "65vw", height: "80%", top: "10px", position: "relative", borderRadius: "10px", padding: "15px" }} className="mx-auto d-flex flex-row border border-3">
                                <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: "150px" }}>
                                    <div style={{ width: "120px", height: "120px", backgroundImage: "url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png)" }} className="rounded-circle" />
                                </div>
                                <div className="d-flex flex-column justify-content-around" style={{ width: "100%", backgroundColor: "white", marginLeft: "20px" }}>
                                    <div>
                                        <b style={{ fontSize: "25px" }}>Username</b>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="d-flex flex-row">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                <path fill="rgb(29, 117, 189)" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                <path fill="rgb(29, 117, 189)" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                <path fill="rgb(29, 117, 189)" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                <path fill="rgb(29, 117, 189)" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: "50px", width: "50px", }}>
                                                <path fill="rgb(29, 117, 189)" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                            </svg>
                                        </div>
                                        -
                                        Saturday, November 20th 2021


                                    </div>
                                    <div style={{ fontSize: "20px", fontWeight: "", }}>
                                        Lorem ipsum dolor
                                    </div>
                                </div>


                            </div>
                        </div>

                    </>

                )
            }



        </div>


    )

}


export default GuildProfilePage