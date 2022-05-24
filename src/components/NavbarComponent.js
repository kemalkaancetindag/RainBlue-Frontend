

function NavbarComponent() {
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
                        <li className="nav-item"><a className="nav-link" href="https://discord.com/oauth2/authorize?client_id={{.BotID}}&scope=bot&permissions=3201">Invite Bot</a></li>

                        <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>

                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default NavbarComponent