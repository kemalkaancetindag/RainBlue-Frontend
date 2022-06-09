import axios from "axios"
import { useEffect, useState } from "react"



export default function Callback(){
    const [authSetted, setAuthSetted] = useState(false)


    useEffect( () => {
        var url = window.location.href.split("/")
        var authCode = url[url.length-1].split("=")[1]

        var access_token = localStorage.getItem("a4b8c16")

        if (access_token === undefined || access_token === null) {

            if (authCode) {
                
                const params = new URLSearchParams();
                params.append('client_id', "976141006389014588");
                params.append('client_secret', "5Ypsbvx_6PlZfCo3bW-VtDR7XeMLrNii");
                params.append('grant_type', 'authorization_code');
                params.append('code', authCode);
                params.append('redirect_uri', "http://rain.blue/callback");

                
               


                axios.post("https://discord.com/api/v10/oauth2/token", params, {
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                        },
                })
                .then(res =>{
                    localStorage.setItem("a4b8c16", res.data["access_token"]) 

                                        
                    axios.get('https://discord.com/api/users/@me', {
                        headers: {
                            authorization: `Bearer ${res.data["access_token"]}`,
                        },
                    })
                    .then(response => {
                        if (response.code !== 0) {
                            
                            localStorage.setItem("user_id", response.data.id)
                            localStorage.setItem("username", response.data.username)
                            localStorage.setItem("avatar", response.data.avatar)
                            localStorage.setItem("log_date", Date.now())
                            localStorage.setItem("logged",true)
                            
                            setAuthSetted(true)
                        }
                    })

                })
                .catch(err => console.log(err))

                // 

               
                    

            }

        }

    }, [])

    useEffect(() => {
        
        if(authSetted){
            
            window.location.href = "/"
        }
        
    }, [authSetted])

    return(
        <div>
            Wait...
        </div>
    )
}