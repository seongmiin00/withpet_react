import { useContext } from "react";
import { sessionContext } from "../session/SessionContext";
import { Link } from "react-router-dom";

function ListAside(){
    const { userLogin } = useContext(sessionContext);
    
    return (
        <aside className="aside_right">
            <a onClick={() => window.location.reload()}>새로고침</a>
            {userLogin && (
                <>
                    <span className='menu_divide'>│</span>
                    <Link to="/create">글 등록</Link>
                    <span className='menu_divide'>│</span>
                    <Link to="/mateCommunity/my_list_all">내 게시글</Link>
                    <span className='menu_divide'>│</span>
                    <Link to={'/mateApply/applyList'}>내 신청내역</Link>
                    <span className='menu_divide'>│</span>
                    <Link to="/mateReview/myList">내 후기</Link>
                </>
            )}
        </aside>
    );
}

export default ListAside;