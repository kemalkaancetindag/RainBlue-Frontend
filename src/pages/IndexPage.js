

function IndexPage() {
    return (
        <>
            <main className="page landing-page">
                <section className="clean-block clean-hero" style={{backgroundImage:"url(https://images.unsplash.com/photo-1517315003714-a071486bd9ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80)",color:"rgba(9, 162, 255, 0.65)"}}>
                    <div className="text">
                        <h2>Welcome to RainBlue</h2>
                        <p>Here comes the rain</p>
                    </div>
                </section>
                <section className="clean-block clean-info dark">
                    <div className="container">
                        <div className="block-heading">
                            <h2 className="text-info">Guilds</h2>
                            <p>You can see all voice informations here.</p>
                        </div>
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
                                    <td style={{verticalAlign: "middle", fontSize: "18px"}}><img className="img-thumbnail rounded-circle" style={{width: "60px", height: "60px"}} src="{{.Icon}}" />Name</td>
                                    <td style={{verticalAlign: "middle", fontSize: "18px"}}><b>16</b></td>
                                    <td style={{verticalAlign: "middle"}}><a href="/guild?id={{.ID}}"><img style={{width: "40px", height: "40px", background:"transparent"}} src="https://cdn.discordapp.com/attachments/966004450248523786/971460761312456734/My_project_4-modified.png" /></a></td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </section>
            </main>


        </>
    );
}

export default IndexPage;
