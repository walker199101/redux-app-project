import mobileCampaignImage from './../../../img/mobile_campaign.png';
import './_styles.scss';

function MobileAuth() {

    return (
        <div className="container" >
            <button className="doLater" onClick={() => alert("다음에 하기") }/>
            <button className="mobileAuth" onClick={() => alert("본인인증 시작")}/>
            <img className="eventImage" src={mobileCampaignImage} />
        </div>
    )
}

export default MobileAuth;