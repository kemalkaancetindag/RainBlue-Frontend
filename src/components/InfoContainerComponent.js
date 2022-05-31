

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

function InfoContainerComponent({componentData, componentTitle}) {

    return (
        <div style={{ minWidth: "20vw", width: "20vw"}} className="border rounded d-flex flex-column">
            <div className="d-flex flex-row justify-content-start mb-5 px-3">
                <b>{componentTitle}</b>
            </div>
            {
                Object.keys(componentData).map( key => (
                    <InfoFlexRows title={key} value={componentData[key]}/>
                ))
            }
            
            


        </div>
    )
}

export default InfoContainerComponent