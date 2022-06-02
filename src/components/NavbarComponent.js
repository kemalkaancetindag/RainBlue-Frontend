import { useState } from "react"






function NavbarComponent({authCode}) {
    const [isLoggined, setIsLoggined] = useState()
    const [username, setUsername] = useState()
    const [image, setImage] = useState()
    useState(() => {
        
        
        setIsLoggined(localStorage.getItem("a4b8c16"))
        setUsername(localStorage.getItem("username"))
        setImage(localStorage.getItem("avatar"))
    }, [])
    

    const logOut = () => {
        localStorage.removeItem("a4b8c16")
        localStorage.removeItem("avatar")
        localStorage.removeItem("log_date")
        localStorage.removeItem("user_id")
        localStorage.removeItem("username")


        

        window.location.reload()
    }





    return (
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
            <a className="navbar-brand">
                &nbsp;&nbsp;<img src="https://cdn.discordapp.com/attachments/966004450248523786/971485352500019321/son_hali.png" width="60" height="60" />
            </a>
            <div className="container">
                <a className="navbar-brand logo" href="/">RainBlue</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/announcements">Announcements</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://discord.gg/rainblue">Discord</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://discord.com/oauth2/authorize?client_id=976141006389014588&scope=bot&permissions=3201">Invite Bot</a></li>
                        {
                            isLoggined ? (
                                <li className="nav-item  d-flex">
                                    <div className="d-flex flex-row align-items-center justify-content-around" style={{ width: "300px" }}>

                                        {
                                            image ? (
                                                <div style={{ width: "40px", height: "40px", backgroundColor: "gray", borderRadius: "20px", backgroundImage: `url(https://cdn.discordapp.com/avatars/${localStorage.getItem("user_id")}/${localStorage.getItem("avatar")}.png)`, backgroundSize: "cover" }} />
                                            ) : (
                                                <div style={{ width: "40px", height: "40px", backgroundColor: "gray", borderRadius: "20px", backgroundImage: `url(/dc_user_null_image.png)`, backgroundSize: "cover" }} />
                                            )
                                        }



                                        <div className="d-flex flex-row">
                                            {username}
                                        </div>
                                        
                                        <button style={{height:"30px", backgroundColor:"white", border:"none", color:"rgb(29, 117, 189"}} onClick={logOut}>
                                            <i className="fas fa-sign-out-alt fa-xl" ></i>
                                        </button>


                                    </div>


                                </li>
                            ) :
                                (
                                    <li className="nav-item"><a className="nav-link" href="https://discord.com/oauth2/authorize?client_id=979020208561876992&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=identify" target="_self">Login</a></li>
                                )
                        }





                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default NavbarComponent