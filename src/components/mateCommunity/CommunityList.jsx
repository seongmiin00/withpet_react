

function CommunityList(){
    return(
        <table className="table table-hover" style={{margin: '20px auto'}}>
            <colgroup>
                <col style={{width:'15%'}}></col>
                <col style={{width:'35%'}}></col>
                <col style={{width:'15%'}}></col>
                <col style={{width:'15%'}}></col>
                <col style={{width:'20%'}}></col>
            </colgroup>
            <thead>
            <tr>
                <th className="th_bs" style={{textAlign:'center', borderRight : '1px solid'}}>분류</th>
                <th className="th_bs" style={{textAlign:'center', borderRight : '1px solid'}}>제목</th>
                <th className="th_bs" style={{textAlign:'center', borderRight : '1px solid'}}>모집 인원</th>
                <th className="th_bs" style={{textAlign:'center', borderRight : '1px solid'}}>모집 상태</th>
                <th className="th_bs" style={{textAlign:'center'}}>작성일</th>
            </tr>
            </thead>
            <tbody>
            <tr style={{cursor: 'pointer'}}>
                <td className="td_basic" style={{textAlign: 'center'}}>
                    <span ></span>
                </td>
                <td className="td_left align-middle">
                    <span style="font-weight: bold; margin-left: 10px;"></span>
                </td>

                <td className="td_left align-middle" style="text-align: center;">
                    <span th:text="${mateCommunityVO.walkingM}" ></span> 명
                </td>

                <td className="td_left align-middle" style="text-align: center;">
                    <span th:id="'current_status' + ${mateCommunityVO.MCommunityNo}" style="font-weight: bold"></span>
                </td>

                <td className="td_left align-middle" style="text-align: center;">
                    <span th:id="'rdate'+${mateCommunityVO.mCommunityNo}" th:text="${mateCommunityVO.WDate.substring(0, 10)}" style="font-weight: normal"></span>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

{/* <script th:inline="javascript">
    window.addEventListener('load', function() {
        // 집합 날짜가 현재 날짜보다 작을경우(과거)
        if (new Date([[${mateCommunityVO.assembleTime.split(" ")}]][0]) < new Date()){
            let status = document.getElementById('current_status' + [[${mateCommunityVO.MCommunityNo}]]);
            status.innerText = '모집 종료';
        } else{
            let status = document.getElementById('current_status' + [[${mateCommunityVO.MCommunityNo}]]);
            if ([[${mateCommunityVO.status}]] == 0){
                status.innerText = '모집중';
            } else if([[${mateCommunityVO.status}]] == 1) {
                status.innerText = '모집 마감';
            }
        }

        let today = new Date();

        let year = today.getFullYear();
        let month = ('0' + (today.getMonth() + 1)).slice(-2);
        let day = ('0' + today.getDate()).slice(-2);

        let dateString = year + '-' + month  + '-' + day;

        let rdate = document.getElementById('rdate'+[[${mateCommunityVO.mCommunityNo}]]).innerText;

        console.log(dateString, rdate);

        if (dateString==rdate){
            document.getElementById('rdate'+[[${mateCommunityVO.mCommunityNo}]]).innerHTML = [[${mateCommunityVO.WDate.substring(11, 16)}]];
        }
    });
</script> */}