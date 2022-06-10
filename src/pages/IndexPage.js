import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import NavbarComponent from "../components/NavbarComponent";
import { API_URL, GO_API } from "../constants";
import { compare } from "../utils/utils";




function IndexPage() {

    const { setOuterUser } = useContext(UserContext)

    const [authCode, setAuthCode] = useState()
    const [isUserSet, setIsUserSet] = useState(false)
    const [guilds, setGuilds] = useState()



    useEffect(() => {
        if(!localStorage.getItem("logged")){
            window.location.href = "/set-user"
        }

        axios.get(`${API_URL}/web/db-guilds`)
        .then(response => {
            var ids = response.data.message
            console.log(ids)
            axios.get(`${GO_API}:9000/`)
            .then(res => {
                console.log(res)
                
                var filteredGuilds = res.data.filter(g => ids.includes(g.id))
                var sortedGuilds = filteredGuilds.sort(compare)
                setGuilds(sortedGuilds)
            })
            .catch(err => console.log(err))
        })

        
        
               
      
       
        
    }, [])





    return (
        <>
            <NavbarComponent />
            <main className="page landing-page">
                <section className="clean-block clean-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1517315003714-a071486bd9ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80)", color: "rgba(9, 162, 255, 0.65)" }}>
                    <div className="text">
                        <h2>Welcome to RainBlue</h2>
                        <p>Here comes the rain</p>
                    </div>
                </section>
                <section className="clean-block clean-info dark">
                    <div className="container">
                        <div className="block-heading">
                            {
                                guilds ? (
                                    <>
                                        <h2 className="text-info">Guilds</h2>
                                        <p>You can see all voice informations here.</p>
                                    </>
                                ) :
                                    (
                                        <h2 className="text-info">Loading...</h2>
                                    )
                            }

                        </div>
                        {
                            guilds ? (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Server</th>
                                            <th scope="col">Active Users</th>
                                            <th scope="col">Server Profile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {guilds.map(guild => (
                                            <tr key={guild["id"]}>
                                                <td style={{ verticalAlign: "middle", fontSize: "18px" }}><img className="img-thumbnail rounded-circle" style={{ width: "60px", height: "60px" }} src={guild["guildIcon"]} />{guild["guild_name"]}</td>
                                                <td style={{ verticalAlign: "middle", fontSize: "18px" }}><b>{guild["activeUsers"]}</b></td>
                                                <td style={{ verticalAlign: "middle" }}><a href={"/guild?id=" + guild["id"]}><img style={{ width: "40px", height: "40px", background: "transparent" }} src="https://cdn.discordapp.com/attachments/966004450248523786/971460761312456734/My_project_4-modified.png" /></a></td>
                                            </tr>
                                        ))}




                                    </tbody>
                                </table>
                            ) : (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Server</th>
                                            <th scope="col">Active Users</th>
                                            <th scope="col">Server Profile</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td style={{ verticalAlign: "middle", fontSize: "18px" }}><div className="img-thumbnail rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "gray", opacity: "0.5" }} /></td>
                                            <td style={{ verticalAlign: "middle", fontSize: "18px" }}><div style={{ width: "100px", height: "30px", backgroundColor: "gray", opacity: "0.5", borderRadius: "5px" }} /></td>
                                            <td style={{ verticalAlign: "middle" }}><div style={{ width: "100px", height: "30px", backgroundColor: "gray", opacity: "0.5", borderRadius: "5px" }} /></td>
                                        </tr>


                                    </tbody>
                                </table>
                            )
                        }

                    </div>
                </section>
            </main>


        </>
    );
}

export default IndexPage;
