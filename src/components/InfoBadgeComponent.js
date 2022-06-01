





function InfoBadgeComponent({badges}) {
    return (
        <div style={{ width: "100vw", height: "100px", marginTop: "2%" }}>
            <div style={{ width: "25%", height: "100%", marginLeft: "17.5vw", borderRadius: "5px", padding: "5px" }} className="border border-2 d-flex flex-column">
                <div className="d-flex flex-row mb-2">
                    <div>
                        <b>badges</b>
                    </div>
                </div>
                <div className="d-flex flex-row overflow-auto">
                    {badges.map(badge => (
                        <div className="d-flex flex-column align-items-center" style={{ marginRight:"5px"}} key={badge.SqlId}>
                            <img style={{ height: "25px", width: "25px", borderRadius:"5px"}} src={`http://localhost:9010/static/${badge.badgeIcon}`}/>
                            <div>
                                {badge.badgeName}
                            </div> 
                        </div>
                            
                    ))}                                   
                </div>

            </div>

        </div>
    )
}

export default InfoBadgeComponent