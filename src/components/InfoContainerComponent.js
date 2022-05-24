

const InfoFlexRows = ({title, value}) => {
    return (
        <div className="d-flex flex-row justify-content-between px-3 my-1">
            <span>
                {title}
            </span>
            <span>
                {value}
            </span>

        </div>
    )
}

function InfoContainerComponent() {

    return (
        <div style={{ minWidth: "20vw", width: "20vw"}} className="border rounded d-flex flex-column">
            <div className="d-flex flex-row justify-content-start mb-5 px-3">
                <b>guild info</b>
            </div>
            <InfoFlexRows title="id" value="727881213406347282"/>
            <InfoFlexRows title="created at" value="Wednesday, July 1st 2020 "/>
            <InfoFlexRows title="member count" value="100287"/>
            <InfoFlexRows title="bot count" value="1"/>
            <InfoFlexRows title="boost count" value="687"/>
            <InfoFlexRows title="channel count" value="258"/>


        </div>
    )
}

export default InfoContainerComponent