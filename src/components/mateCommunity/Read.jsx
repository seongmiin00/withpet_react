import { useParams, useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {ReadAside} from "./Aside";
import "../../styles/read.css"
import { sessionContext } from "../session/SessionContext";
import KakaoMap from "./read/KakaoMap";
import RecruitBtn from "./read/RecruitBtn";

function CurrentStatus({assembleTime,status}){
    if (!assembleTime) {
        return <span>Loading...</span>; // assembleTime이 없으면 로딩 중 표시
    }

    const date = new Date(assembleTime.split(" ")[0]);  // assembleTime을 Date 객체로 변환
    const today = new Date();

    return(
        <span>
            {date < today? '모집종료' : status === 0 ? '모집중' : status === 1 ? '모집마감' : ''}
        </span>
    )
}

function Read(){
    const { postId } = useParams();
    const [query, setQuery] = useSearchParams()
    const page = query.get('page');
    const cateNo = query.get('cateNo');
    const [post, setPost] = useState([]);
    const {userNo} = useContext(sessionContext);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:9093/api/mateCommunity/read/${postId}`)
                setPost(response.data);
                console.log(response.data);
            } catch (error) {
                alert('게시글을 조회하지 못했습니다.');
            }
        };
        fetchPost();
    }, [postId]);

    return (
        <div>
            <div style={{paddingTop: '20px'}}>
                <div id="list_all" style={{width:'80%', margin: 'auto', height: 'auto', overflow: 'hidden'}}>
                    <div className='title_line2'>
                        산책 메이트 모집
                    </div>
                    <ReadAside cateNo={cateNo} page={page}/>
                    <div class="menu_line"></div>
                    <div>
                        <div className="row mb-3 text-center pb-3" style={{borderBottom: '3px solid rgba(33, 150, 243, 0.95)'}}>
                        <div style={{fontWeight: 'bolder', textAlign: 'left', fontSize: '16px'}} class="col-md-4">{post.title}</div>
                        <div class="col-md-4" style={{textAlign: 'right'}}><span>작성일 | </span><span  style={{fontWeight: 'bolder'}}>{post.wdate}</span></div>
                        <div class="col-md-2" style={{textAlign: 'right'}}>
                            <span>작성자 | </span>
                            <a  style={{fontWeight:'bold', color:"black"}} class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">{post.name}</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item a_button" >반려동물 정보</a></li>
                            </ul>
                        </div>
                        <div class="col-md-2" style={{textAlign: 'right'}}><span>조회수 | </span><span style={{fontWeight: 'bolder'}}>{post.viewCnt}</span></div>
                        </div>
                        <div>
                            <div style={{whiteSpace: 'pre-wrap', wordBreak:'break-all', height: '300px'}} class="col ps-4 pe-4 pt-3">{post.content}</div>
                            <div>
                                <span style={{color:'deepskyblue'}}>{post.searchTag}</span>
                            </div>
                        </div>
                        <div className="menu_line mt-2 mb-2"></div>
                        <div>
                            <div className="row mb-3 text-center">
                                <div className="col-md-3" style={{textAlign:'left'}}><span>시간 | </span><span>{post.assembleTime}</span></div>
                                <div className="col-md-3" style={{textAlign:'left'}}><span>위치 | </span><span style={{fontWeight:'bold'}}>{post.startingP}</span>&nbsp;<span style={{fontWeight:'bold'}}>{post.startingDetail}</span>
                                </div>
                                <div className="col-md-3" style={{textAlign:'right'}}><span>모집현황 | </span><span>{post.acceptCnt}</span> 명 / <span style={{fontWeight:'bold'}}>{post.walkingM}</span> 명</div>
                                <div className="col-md-3" style={{textAlign:'right'}}><span>신청현황 | </span> <span id="current_status" style={{fontWeight:'bold'}}>
                                    <CurrentStatus assembleTime={post.assembleTime} status={post.status} />
                                    </span>
                                </div>
                            </div>
                            <KakaoMap startingP={post.startingP} startingDetail={post.startingDetail}/>
                        </div>
                        <div class="recruit_btns w-50">
                            <RecruitBtn userNo={userNo} post={post}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read;