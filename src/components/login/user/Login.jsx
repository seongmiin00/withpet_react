import { useContext, useEffect, useState } from "react";
import { sessionContext } from "../../session/SessionContext";
import { LoginAside } from "../Aside";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const {setUserLogin, setUserNo, setUserName} = useContext(sessionContext);
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    function GoMain(){
        navigate('/');
    }

    function handleIdChange(event) {
        setId(event.target.value);
    }
    
    function handlePwChange(event) {
        setPw(event.target.value);
    }

    function login(){
        const body = new Array();
        const userInfo = new Object();
        
        if (id != '' && pw != ''){
            userInfo.id = `${id}`;
            userInfo.passwd = `${pw}`;
            body.push(userInfo);
        }else{
            alert("아이디와 비밀번호를 입력하세요.")
            return false;
        }

        console.log(body);

        axios.post(`http://localhost:9093/api/member/login`,body)
        .then(res=>{
            const data = res.data
            const result = data.resultMsg;
            if (result == "login_success"){
                const VO = data.memberVO;
                setUserLogin(true);
                setUserNo(VO.memberno);
                setUserName(VO.name);

                GoMain();
            }else{
                alert("회원정보가 없습니다. 다시 시도해 주세요");
                window.location.reload();
            }
        })
    }
    

    return(
        <div style={{paddingTop: '20px', marginTop:'100px'}}>
            <div style={{width:'80%', margin: 'auto', height: '555px', overflow: 'hidden'}}>
                <div className='title_line mb-3'>
                    로그인
                </div>
                <LoginAside/>
                <div className="menu_line"></div>
                <div style={{width:'45%', margin:'80px auto'}}>
                    <div>
                        <label for="id" class="mb-2">ID </label>
                        <input type="text" name="id" id="id" autoFocus onChange={handleIdChange}
                            class="form-control form-control-sm" style={{width:'100%', marginBottom:'5px'}}/>
                        <span id='id_msg'></span>
                    </div>

                    <div class="form-group">
                        <label for="pw" class="mb-2">PW </label>
                        <input type='password' class="form-control form-control-sm" name='pw' onChange={handlePwChange}
                            id='pw' required="required" style={{width:'100%'}}/>
                        <span id='passwd_msg'></span>
                    </div>

                    <div className="login_btn_box mt-4" style={{textAlign: 'center'}}>
                        <button type="button" className="login_btn" id="btn_send" onClick={login}
                        style={{
                            width:'100%', backgroundColor:'deepskyblue', color:'white', 
                            height:'30px', borderRadius:'5px', border : 'none'
                            }}>로그인</button>
                        <div style={{marginTop: '10px'}} className="row">
                            <span className="col-3"><a href="/hmember/info_search" className="a_button" style={{fontSize:'12px'}}>ID 찾기</a></span>
                            <span className="col-1">|</span>
                            <span className="col-3"><a href="/hmember/info_search" className="a_button" style={{fontSize:'12px'}}>PW 찾기</a></span>
                            <span className="col-1">|</span>
                            <span className="col-4"><a href="/hmember/info_search" className="a_button" style={{fontSize:'12px'}}>회원가입</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;