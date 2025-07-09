import { Link } from 'react-router-dom'
import webtoon from '../assets/images/webtoon.jpg'

function Main({userId, setUserId}){
    return(<>
        {userId ? (
            <div id="login_main">
                <p>{userId}님 환영합니다. <button onClick={()=>setUserId(null)}>로그아웃</button></p>
                <h2>관심웹툰</h2>
                <div className="webtoon">
                    <img src={webtoon} alt="" />
                    <h3>대학일기</h3>
                    <p>자까</p>
                </div>
            </div>) 
            : 
            (<div id="logout_main">
                <p className="login_msg">로그인이 필요합니다.</p>
                <h2>관심웹툰</h2>
                <p className="login_msg2">로그인 하시면 PC와 모바일에 등록하신<br />
                관심웹툰을 모두 보실 수 있습니다.</p>
                {userId ? (<></>) : (<Link to="/login">로그인</Link>)}
            </div>)
        }
    </>)
}

export default Main;