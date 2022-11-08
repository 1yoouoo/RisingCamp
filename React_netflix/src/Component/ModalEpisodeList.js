import "./ModalEpisodeList.css"

const ModalEpisodeList = ({ art }) => {
    const episodeList = art.episodeList
    return (
        <div className="episodeList-main">
            <div className="episodeList-title">
                <h2>회차</h2>
                <h3>{art.title}</h3>
            </div>
            <div className="episodeList-wrapper">
                {episodeList.map(( episode ) => {
                    return (
                        <>
                            <div className="episode" key={episode.episodeId}>
                                <div className="episodeNumber">
                                    {episode.episodeNumber}
                                </div>
                                <div className="episodeImg">
                                    <img src={require(`${episode.episodeThumbnail}`)} alt=""/>
                                </div>
                                <div>
                                    <div>
                                        <div className="episodeSubject">
                                            {episode.episodeSubject}
                                            <div>{episode.episodeDuration}분</div>
                                        </div>
                                    </div>
                                    <div className="episodeSummary">
                                        {episode.episodeSummary}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                } )}
            </div>
        </div>
    )
}

export default ModalEpisodeList