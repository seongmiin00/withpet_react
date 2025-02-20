import PetCate from "./PetCategory";
import '../../styles/list.css';
import {ListAside} from "./Aside";
import Count from "./Count";
import Search from "./Search";
import { useParams, useSearchParams } from "react-router-dom";
import CommunityList from "./CommunityList";
import { useEffect, useState } from "react";
import axios from "axios";
import Paging from "./Paging";

function MateCommunity(){
    // const { cateNo, searchWord } = useParams();
    const [query, setQuery] = useSearchParams()
    const getWord = query.get('searchWord');
    const { cateNo } = useParams();
    const [ nowPage , setNowPage ] = useState(1);
    const [ searchWord, setSearchWord ] = useState(getWord);
    const [ pgCount, setPgCount ] = useState();
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:9093/api/mateCommunity/list_all/${cateNo}/${nowPage}`);
            setList(response.data);
        };

        const pagingCount = async () => {
            const response = await axios.get(`http://localhost:9093/api/mateCommunity/page_count/${cateNo}`)
            setPgCount(response.data['pagingCount']);
            console.log(response.data['pagingCount']);
        }

        const fetchDataWithSearchWord = async () => {
            const response = await axios.get(`http://localhost:9093/api/mateCommunity/list_all/${cateNo}/${nowPage}/${searchWord}`);
            setList(response.data);
        };

        const pagingCountWithSearchWod = async () => {
            const response = await axios.get(`http://localhost:9093/api/mateCommunity/page_count/${cateNo}/${searchWord}`)
            setPgCount(response.data['pagingCount']);
            console.log(response.data['pagingCount']);
        }

        if(searchWord == ''){
            fetchData()
            pagingCount();
        }else{
            fetchDataWithSearchWord();
            pagingCountWithSearchWod();
        }


    }, [cateNo, nowPage, searchWord]);


    return(
        <div style={{paddingTop: '20px', marginTop:'100px'}}>
            <div id="list_all" style={list.length < 10?{width:'80%', margin: 'auto', height: '579.1px', overflow: 'hidden'}:{width:'80%', margin: 'auto', height: 'auto', overflow: 'hidden'} }>
                <div className='title_line'>
                    산책 메이트 모집
                </div>
                <PetCate cateNo={ cateNo } setSearchWord={ setSearchWord }></PetCate>
                <ListAside/>
                <div className="menu_line"></div>
                <div className="row">
                    <div className="col-6">
                        <Count count={list.length} searchWord={searchWord}/>
                    </div>
                    <div className="col-6" style={{textAlign:'right'}}>
                        <Search searchWord={searchWord} setSearchWord={setSearchWord}/>
                    </div>
                </div>
                <CommunityList list={list&&list} nowPage={nowPage} cateNo={cateNo} searchWord={searchWord}/>
            </div>
            <Paging pgCount={pgCount} nowPage={nowPage} setNowPage={setNowPage}/>
        </div>
    )
}

export default MateCommunity;