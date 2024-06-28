import { useContext } from "react";
import { sessionContext } from "../session/SessionContext";

function ListAside(){
    const { userLogin } = useContext(sessionContext);
    
    if (userLogin){
        return (
            <aside className="aside_right" >
                <a href="javascript:location.reload();">새로고침</a>
                <span className='menu_divide'>│</span>
                <a href="./create">글 등록</a>
                <span className='menu_divide'>│</span>
                <a href="/mateCommunity/my_list_all|}">내 게시글</a>
                <span className='menu_divide'>│</span>
                <a href="/mateApply/applyList?now_page=${now_page}">내 신청내역</a>
                <span className='menu_divide'>│</span>
                <a href="/mateReview/myList">내 후기 </a>
            </aside>
        )
    }else{
        return(
            <aside className="aside_right">
                <a href="javascript:location.reload();">새로고침</a>
            </aside>
        )
    }
}

export default ListAside;