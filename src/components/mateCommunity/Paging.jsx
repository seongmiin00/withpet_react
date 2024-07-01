function Paging({pgCount, nowPage, setNowPage}){
    // 블록당 보여줄 페이지 번호수
    const page_per_block = 7
    // 전체 페이지 그룹번호
    const tot_group = parseInt(Math.ceil(parseFloat(pgCount)/page_per_block));
    // 현재 페이지 그룹번호
    const now_group = parseInt(Math.ceil(parseFloat(nowPage)/page_per_block));

    function groupUp(){
        now_group = (now_group * page_per_block) + 1;
        setNowPage(now_group);
    }

    function groupDown(){
        now_group -= 1;
        setNowPage(now_group * page_per_block);
    }

    function PagingGroup(){
        const start_num = ((now_group - 1) * page_per_block) + 1;
        const end_num = now_group * page_per_block;
        const paging_box = [];

        {/* 목록에 출력하는 페이지가 현재페이지와 같다면 CSS 강조(차별을 둠) */}
        {/*  현재 페이지가 아닌 페이지는 이동이 가능하도록 링크를 설정 */}
        for(let i = start_num; i <= end_num; i++){
            
            if (i > pgCount){
                break;
            }

            if (i == nowPage){
                paging_box.push(
                    <span class='span_box_2'>{i}</span>
                )
            }else{
                paging_box.push(
                    <span class='span_box_1'>
                        <a onClick={()=>setNowPage(i)} style={{cursor:'pointer'}}>{i}</a>
                    </span>
                )
            }
            
        }
         
        return(     
            <>
                {paging_box}
            </>
        )
    }

    return(
        <div class="Bottom_menu">
            <div id='paging'>
                {/* 현재 그룹번호가 2이상이면 페이지수가 8페이지 이상임으로 이전 그룹으로 갈수 있는 링크 생성 */}
                {now_group > 1 && (
                    <span className='span_box_1'>
                        <a onClick={groupDown} style={{cursor:'pointer'}}> 이전 </a>
                    </span>
                )}
                <PagingGroup/>
                {/* 현재 그룹 번호가 1이고 페이지수가 8페이지 이상임으로 다음 그룹으로 갈수 있는 링크 생성 */}
                {now_group < tot_group && (
                    <span className="span_box_1">
                        <a onClick={groupUp} style={{cursor:'pointer'}}>다음</a>
                    </span>
                )}
            </div>
        </div>
    )
}

export default Paging;