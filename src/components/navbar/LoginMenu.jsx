import React, { useContext } from 'react';
import '../../styles/navbar.css';
import { sessionContext } from '../session/SessionContext'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginMenu(){
	const {userLogin, setUserLogin, userNo, setUserNo, userName, setUserName,
		masterLogin, setMasterLogin, masterNo, setMasterNo, masterName, setMasterName} = useContext(sessionContext);

	const navigate = useNavigate();

	function UserLogout(){
		axios.get(`http://localhost:9093/api/member/logout`)
		.then(res=>{
			const data= res.data;
			console.log(data);
			if (data.resultMsg == "invalid_request"){
				alert("유효하지 않은 요청입니다.");
			}else{
				setUserLogin(false);
				setUserName('');
				setUserNo(0);
			}
			navigate('/');
		})
	}

	if (userLogin && !masterLogin){
		return(
			<div className="nav-item dropdown pt-2 pb-2">
				<a className="dropdown-toggle" id="dropdown2" data-bs-toggle="dropdown" aria-expanded="false" 
				style={ {color:'rgba(33, 150, 243, 0.95)', textDecoration : 'none', cursor : 'pointer'} }>{userName}님</a>
				<ul className="dropdown-menu" aria-labelledby="dropdown2">
					<li><Link className="dropdown-item a_button" to={"/member/read"}>마이페이지</Link></li>
					<li><Link className="dropdown-item a_button" to={"/pet/list"}>반려동물 정보</Link></li>
					<li><a className="dropdown-item a_button" onClick={UserLogout} style={{cursor:'pointer'}}>로그아웃</a></li>
				</ul>
			</div>
		)
	}else if(masterLogin && !userLogin){
		return(
			<div className="nav-item dropdown pt-2 pb-2">
				<a className="dropdown-toggle"  id="navbarDropdownMenuLink" role="button"
				data-bs-toggle="dropdown" aria-expanded="false" style={ {color:'rgba(33, 150, 243, 0.95)', textDecoration : 'none', cursor : 'pointer'} }>{masterName} 관리자님
				</a>
				<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<li className="nav-item">
						<Link className="dropdown-item a_button" to={"/master/logout"}>로그아웃</Link>
						<Link className="dropdown-item a_button" to={"/member/list"}>회원목록 조회</Link>
						<Link className="dropdown-item a_button" to={"/login/login_list"}>회원 로그인 내역 조회</Link>
						<Link className="dropdown-item a_button" to={"/masterlogin/login_list"}>관리자 로그인 내역 조회</Link>
						<Link className="dropdown-item a_button" to={"/petType/list"}>반려동물 카테고리 관리</Link>
						<Link className="dropdown-item a_button" to={"/master/list"}>관리자 목록</Link>
					</li>
				</ul>
			</div>
		)
	}else if(!userLogin && !masterLogin){
		return(
			<>
				<div className="nav-item dropdown pt-2 pb-2 me-2">
					<a className="dropdown-toggle"  id="dropdown1" data-bs-toggle="dropdown" aria-expanded="false"
					style={ {color:'rgba(33, 150, 243, 0.95)', textDecoration : 'none', cursor : 'pointer'} }>로그인</a>
					<ul className="dropdown-menu" aria-labelledby="dropdown1">
						<li><Link className="dropdown-item a_button" to={"/member/login"}>로그인</Link></li>
						<li><Link className="dropdown-item a_button" to={"/member/create"}>회원가입</Link></li>
						<li><Link className="dropdown-item a_button" to={"/member/findIdView"}>아이디 찾기</Link></li>
						<li><Link className="dropdown-item a_button" to={"/member/findPasswdView"}>비밀번호 찾기</Link></li>
					</ul>
				</div>
				<div className="nav-item dropdown pt-2 pb-2">
					<a className="dropdown-toggle"  id="navbarDropdownMenuLink" role="button" style={ {color:'rgba(33, 150, 243, 0.95)', textDecoration : 'none', cursor : 'pointer'} }
					data-bs-toggle="dropdown" aria-expanded="false">관리자
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<li className="nav-item">
							<Link className="dropdown-item a_button" to={"/master/login"}>관리자 로그인</Link>
							<Link className="dropdown-item a_button" to={"/master/create"}>관리자 회원가입</Link>
						</li>
					</ul>
				</div>
			</>
		)
	}
}

export default LoginMenu;