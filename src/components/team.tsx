import userPhoto from '../assets/userPhoto.svg'

export default function Team() {
    return (

        <div className="container" style={{ paddingTop: "24px", paddingBottom: "10px" }}>
            <div className="team-head">
                <div className="content-title">Team</div>
                <div className="btn-small">Go to team</div>
            </div>
            <div className="team-people" >
                <div className="user">
                    <img src={userPhoto} alt="" />
                    <div className="name">
                        Alexey
                    </div>
                </div>
                <div className="user">
                    <img src={userPhoto} alt="" />
                    <div className="name">
                        Victoria
                    </div>
                </div>
                <div className="user">
                    <img src={userPhoto} alt="" />
                    <div className="name">
                        Alex
                    </div>
                </div>
                <div className="user">
                    <img src={userPhoto} alt="" />
                    <div className="name">
                        Julia
                    </div>
                </div>
            </div>
        </div>
    )
}