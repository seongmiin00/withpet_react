import { Link } from "react-router-dom";

function CheckDate(props){
    const date = new Date(props.assembleTime.split(" ")[0]);  // assembleTime을 Date 객체로 변환
    const today = new Date();

    function ChangeStatus(){
        if(date <today){
            return('모집종료');
        }else{
            if (props.status == 0){
                return('모집중');
            }else if (props.status == 1){
                return('모집마감');
            }
        }
    }

    return(
        <span style={{fontWeight: 'bold'}}>
            <ChangeStatus/>
        </span>
    )
}

function Wdate(props){
    const today = new Date();

    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '-' + month  + '-' + day;

    const wdate = props.wdate.substring(0,10);
    const time = props.wdate.substring(11,16);
    
    function CheckWdate(){
        if(dateString == wdate){
            return time;
        }else{
            return wdate;
        }
    }

    return(
        <span id='rdate' style={{fontWeight: 'normal'}}>
            <CheckWdate/>
        </span>
    )

}

function CommunityList(props){

    const getPetType = (petTypeNo) => {
        switch (petTypeNo) {
            case 1:
                return '강아지';
            case 2:
                return '고양이';
            default:
                return '기타';
        }
    };

    if (parseInt(props.list.length) > 0){
    return(
            <table className="table table-hover" style={{margin: '20px auto,'}}>
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
                    {props.list&&props.list.map((VO)=>{
                        return(
                            <tr style={{cursor: 'pointer'}}>
                                <td className="td_basic" style={{textAlign: 'center'}}>
                                    {getPetType(VO.petTypeNo)}
                                </td>
                                <td className="td_left align-middle">
                                    <span style={{fontWeight: 'bold', marginLeft: '10px'}}>
                                        <Link to={`/mateCommunity/read/${VO.mcommunityNo}?page=${props.nowPage}&cateNo=${props.cateNo}`}>{VO.title}</Link>    
                                    </span>
                                </td>
                
                                <td className="td_left align-middle" style={{textAlign: 'center'}}>
                                    <span>{VO.walkingM}</span> 명
                                </td>
                
                                <td className="td_left align-middle" style={{textAlign: 'center'}}>
                                    <CheckDate assembleTime={VO.assembleTime} status={VO.status} />
                                </td>
                
                                <td className="td_left align-middle" style={{textAlign: 'center'}}>
                                    <Wdate wdate={VO.wdate}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }else{
        return(
            <>
                <table className="table table-hover" style={{margin: '20px auto,'}}>
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
                </table>
                <div style={{textAlign: 'center', padding: '160px'}}>
                    <span>작성된 게시글이 없습니다.</span><br/>
                    <span>첫 게시글을 작성해주세요!</span>
                </div>
            </>
        )
    }
}

export default CommunityList;

{/* <script th:inline="javascript">
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