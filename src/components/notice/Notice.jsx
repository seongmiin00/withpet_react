import {getListAll} from "./list_all";
import {useEffect, useState} from "react";

export default function Notice() {
    const [noticeList, setNoticeList] = useState([]);

    // 컴포넌트가 마운트 될 때 데이터를 가져오기 위함
    useEffect(() => {
        const notices = async () => {
            try {
                const data = await getListAll();
                setNoticeList(data);
            } catch (e) {
                console.log(e);
            }
        }
        notices();
    }, []);

    // 문자 길면 끝부분 ... 으로 바꾸기
    function truncate(str, maxlength) {
        return (str.length > maxlength) ?
            str.slice(0, maxlength - 1) + '…' : str;
    }

    return (
        <>
            <div style={{width: '80%', margin: 'auto'}}>
            <div className='title_line'>공지사항</div>

                <aside className="aside_right">

                {/* 공지사항 등록 - 관리자 권한이 있어야함  */}
                {/*<span th:if="${session.masterno != null}">*/}
                {/*  <a th:href="@{|/notice/create?masterno=${session.masterno}|}">공지사항 등록</a>*/}
                {/*  <span class="menu_devide">│</span>*/}
                {/*</span>*/}

                    <a>목록형</a>
                    <span className="menu_devide">│</span>
                    <a>갤러리형</a>
                    <span className="menu_devide">│</span>
                    <a onClick={() => window.location.reload()}
                       style={{cursor : "pointer"}}
                    >새로고침</a>
                </aside>

                <div className='menu_line'></div>

                <table className="table table-striped" style={{width: '100%'}}>
                    <colgroup>
                        <col style = {{width: '10%'}} />
                        <col style = {{width: '30%'}} />
                        <col style = {{width: '30%'}} />
                        <col style = {{width: '30%'}} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th className='th_bs'>번호</th>
                            <th className='th_bs'>제목</th>
                            <th className='th_bs'>내용</th>
                            <th className='th_bs'>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        noticeList.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td className={'td_basic'}>{noticeList[i].noticeno}</td>
                                    <td className={'td_left'}>
                                        <span style={
                                            {
                                                marginLeft : '85px',
                                                cursor : "pointer"
                                            }
                                        }>{truncate(noticeList[i].title)}</span>
                                    </td>
                                    <td className={'td_left'}>
                                        <span style={
                                            {
                                                marginLeft : '85px',
                                                cursor : "pointer"
                                            }
                                        }>{truncate(noticeList[i].notice, 20)}</span>
                                    </td>
                                    <td className={'td_basic'}>{noticeList[i].noticedate}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}