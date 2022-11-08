import ModalEpisodeList from "./ModalEpisodeList"
import "./ModalInfo.css"

const ModalInfo = ({ art }) => {
    return (
        <>
            <div className='preview-modal-info'> 
                <div className="preview-modal-info-flex">
                    <div className="preview-modal-info-detail-left">
                        <div className="left-detail">
                            <div>{art.interestPercent}% 일치</div>
                            <div>{art.productionYear}</div>
                            <div>{art.ageRestricted}</div>
                            <div>에피소드 {art.episodeCount}개</div>
                            <div>{art.videoQuality}</div>
                        </div>
                        <div>
                            {art.artSummary}
                        </div>
                    </div>
                    <div className="preview-modal-info-detail-right">
                        <div>출연: {art.actorList}</div>
                        <div>장르: {art.genre}</div>
                        <div>시리즈 특징: {art.genreDescriptionList}</div>
                    </div>
                </div>
                <div>
                    <ModalEpisodeList art={art} />
                </div>
            </div>
        </>
        
    )
}

export default ModalInfo