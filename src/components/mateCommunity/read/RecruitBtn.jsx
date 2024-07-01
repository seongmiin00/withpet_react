import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RecruitBtn({userNo, post}){
    const [isRecruited, setIsRecruited] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchRecruitedStatus = async () => {
            try {
                const response = await axios.get(`http://localhost:9093/api/mateCommunity/isRecruited/${userNo}/${post['mcommunityNo']}`);
                setIsRecruited(response.data.isRecruited);
                console.log(response.data.isRecruited);
            } catch (error) {
                console.error('신청 여부를 조회하지 못했습니다.');
            }
        };
        if(!post['mcommunityNo']) return;
        
        fetchRecruitedStatus();
    }, [userNo, post]);

    const loginRedirect = () => {
        navigate('/member/login');
    };

    const handleBtn = (action) => {
        // Handle the button click logic here
        console.log(action);
    };

    if (!userNo) {
        return (
            <div className="recruit_btns w-50">
                <button type="button" onClick={loginRedirect} id="login_need" className="btn btn-md btn-outline-info">
                    로그인
                </button>
            </div>
        );
    }

    const recruit = () => (
        <>
            {post.status === 1 ? (
                <button type="button" id="finish" className="btn btn-md btn-outline-info">
                    모집 마감
                </button>
            ) : isRecruited === 1 ? (
                <button type="button" id="recruit_wait" className="btn btn-md btn-outline-info">
                    수락 대기중
                </button>
            ) : (
                <button type="button" id="recruit" onClick={() => handleBtn('recruit')} className="btn btn-md btn-outline-info w-70">
                    산책 메이트 신청
                </button>
            )}
        </>
    );

    const controlBtn = () => (
        <>
            {post.status === 0 ? (
                <button type="button" id="recruit_finish" onClick={() => handleBtn('recruit_finish')} className="btn btn-md btn-outline-info">
                    산책 메이트 신청 마감
                </button>
            ) : (
                <button type="button" id="recruit_start" onClick={() => handleBtn('recruit_start')} className="btn btn-md btn-outline-info">
                    산책 메이트 신청 모집시작
                </button>
            )}
        </>
    );

    return(
        <>
            <div className="recruit_btns w-50">
                {post.memberNo !== userNo ? recruit() : controlBtn()}
            </div>
        </>
    )
}

export default RecruitBtn;