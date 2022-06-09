import axios from "axios";
import { useEffect, useState } from "react";



export default function SetLogin() {
    const [userSetted, setUserSetted] = useState(false)


    useEffect(() => {

        var accessToken = localStorage.getItem("a4b8c16")

        console.log(accessToken)
        if (accessToken) {
            

            axios.get('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            })
                .then(response => {
                    if (response.code !== 0) {
                        
                        localStorage.setItem("user_id", response.data.id)
                        localStorage.setItem("username", response.data.username)
                        localStorage.setItem("avatar", response.data.avatar)
                        localStorage.setItem("log_date", Date.now())
                        localStorage.setItem("logged",true)
                        setUserSetted(true)
                    }
                })



        }
        else{
            localStorage.setItem("logged",false)
            window.location.href = "/"
        }






    }, [])


    useEffect(() => {
        if (userSetted) {
            window.location.href = "/"
        }
    }, [userSetted])

    return (
        <div>

        </div>
    )
}