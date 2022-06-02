import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import NavbarComponent from "../components/NavbarComponent";
import { WEB_API_URL } from "../constants";



function IndexPage() {

    const { setOuterUser } = useContext(UserContext)

    const [authCode, setAuthCode] = useState()
    const [isUserSet, setIsUserSet] = useState(false)
    const [guilds, setGuilds] = useState()



    useEffect(() => {

        axios.get(`${WEB_API_URL}/get-guilds`)
            .then(res => {
                var sorted_guilds = res.data.sort(compare_active_users)

                setGuilds(sorted_guilds)
            })
            .catch(err => console.log(err))

        setAuthCode(window.location.href.split("=")[1])
    }, [])

    useEffect(() => {
        var access_token = localStorage.getItem("a4b8c16")

        if (access_token === undefined || access_token === null) {
            console.log("burda")
            if (authCode) {
                var data = {
                    client_id: "",
                    client_secret: "f-IfOsepEOC4s3F2pYVExQZXJX44_Lze",
                    code: authCode,
                    grant_type: "authorization_code",
                    redirect_uri: "http://localhost:3000"
                }
                const params = new URLSearchParams();
                params.append('client_id', "979020208561876992");
                params.append('client_secret', "f-IfOsepEOC4s3F2pYVExQZXJX44_Lze");
                params.append('grant_type', 'authorization_code');
                params.append('code', authCode);
                params.append('redirect_uri', "http://localhost:3000");

                fetch("https://discord.com/api/v10/oauth2/token", {
                    method: 'POST',
                    body: params,
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded"
                    },
                })
                    .then(res => res.json())
                    .then(res => {
                        localStorage.setItem("a4b8c16", res["access_token"])
                        setIsUserSet(true)
                    })
                    .catch(err => console.log(err))



                



            }

        }
        else {
            setIsUserSet(true)
        }



    }, [authCode])

    useEffect(() => {

        if (isUserSet) {

            var accessToken = localStorage.getItem("a4b8c16")
            console.log(accessToken)
            if (accessToken !== undefined || accessToken !== null) {
                console.log("geldi")
                fetch('https://discord.com/api/users/@me', {
                    headers: {
                        authorization: `Bearer ${accessToken}`,
                    },
                })
                    .then(result => result.json())
                    .then(response => {
                        if (response.code !== 0) {
                            console.log(response)
                            localStorage.setItem("user_id", response.id)
                            localStorage.setItem("username", response.username)
                            localStorage.setItem("avatar", response.avatar)
                            localStorage.setItem("log_date", Date.now())
                            setOuterUser(response)

                        }


                    })
                    .catch(console.error);



            }




        }





    }, [isUserSet])


    function compare_active_users(a, b) {
        if (a.ActiveUsers < b.ActiveUsers) {
            return 1;
        }
        if (a.ActiveUsers > b.ActiveUsers) {
            return -1;
        }
        return 0;
    }

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
                                            <tr key={guild["Id"]}>
                                                <td style={{ verticalAlign: "middle", fontSize: "18px" }}><img className="img-thumbnail rounded-circle" style={{ width: "60px", height: "60px" }} src={`https://cdn.discordapp.com/icons/${guild["Id"]}/${guild["Icon"]}.png`} />{guild["Name"]}</td>
                                                <td style={{ verticalAlign: "middle", fontSize: "18px" }}><b>{guild["ActiveUsers"]}</b></td>
                                                <td style={{ verticalAlign: "middle" }}><a href={"/guild?id=" + guild["Id"]}><img style={{ width: "40px", height: "40px", background: "transparent" }} src="https://cdn.discordapp.com/attachments/966004450248523786/971460761312456734/My_project_4-modified.png" /></a></td>
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
