// import '../../styles/index.css';

export default function Notice() {
    return (
        <>
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
                    <a>새로고침</a>
                </aside>

                {/*<div th:replace="~{notice/list_search_component::list_search_fragment}"></div>*/}

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

                    {/*<tr th:each="noticeVO, status:${list_all}">*/}
                    {/*    <td class='td_left'><a th:href="@{|./read?noticeno=${noticeVO.noticeno}|}" th:text="${status.count}"></a></td>*/}
                    {/*    <td class='td_left'><a th:href="@{|./read?noticeno=${noticeVO.noticeno}|}" th:text="${noticeVO.title}"></a></td>*/}
                    {/*    <td class='td_left'><a th:href="@{|./read?noticeno=${noticeVO.noticeno}|}" th:text="${noticeVO.notice}"></a></td>*/}
                    {/*    <td class='td_left'><a th:href="@{|./read?noticeno=${noticeVO.noticeno}|}" th:text="${noticeVO.noticedate}"></a>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                </table>
        </>
    );
}