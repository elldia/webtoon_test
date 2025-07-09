import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({setUserId}){

    const idRef = useRef(null);
    const pwRef = useRef(null);
    const navigate = useNavigate();

    useEffect(()=>{
        idRef.current.focus();
    },[])

    const loginBtnFunc = ()=>{
        const idChk = idRef.current.value;
        const pwChk = pwRef.current.value;
        console.log(idChk, pwChk)
        
        if(!idChk){ alert('아이디를 입력하세요'); return; }
        if(!pwChk){ alert('비밀번호를 입력하세요'); return; }
        //alert(`${idChk}님 로그인 성공`);
        setUserId(idChk);
        navigate('/');
    }

    return(
        <>
            <h2>Login</h2>
            <input ref={idRef} type="text" placeholder="아이디 입력" />
            <input ref={pwRef} type="password" placeholder="비밀번호 입력" />
            <button onClick={loginBtnFunc}>로그인</button>
        </>
    )
}

export default Login;