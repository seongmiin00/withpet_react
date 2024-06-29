import { PetProvider } from "./PetContext";
import PetCate from "./PetCategory";
import '../../styles/list.css';
import ListAside from "./Aside";
import Count from "./Count";
import Search from "./Search";
import { useParams } from "react-router-dom";
import CommunityList from "./CommunityList";
import { useEffect, useState } from "react";
import axios from "axios";

function MateCommunity(){
    // const { cateNo, searchWord } = useParams();
    const { cateNo } = useParams();
    const [ nowPage , setNowPage ] = useState(1);
    const [ searchWord, setSearchWord ] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:9093/api/mateCommunity/list_all/${cateNo}/${nowPage}`);
            setList(response.data);
        };
        fetchData();
    }, [cateNo, nowPage]);


    return(
        <div style={{paddingTop: '20px', marginTop:'100px'}}>
            <div id="list_all" style={list.length < 10?{width:'80%', margin: 'auto', height: '600px', overflow: 'hidden'}:{width:'80%', margin: 'auto', height: 'auto', overflow: 'hidden'} }>
                <div className='title_line'>
                    산책 메이트 모집
                </div>
                <PetProvider>
                    <PetCate cateNo={ cateNo }></PetCate>
                    <ListAside/>
                    <div className="menu_line"></div>
                    <div className="row">
                        <div className="col-6">
                            <Count count={list.length}/>
                        </div>
                        <div className="col-6" style={{textAlign:'right'}}>
                            <Search searchWord={searchWord}/>
                        </div>
                    </div>
                    <CommunityList list={list&&list}/>
                </PetProvider>
            </div>
        </div>
    )
}

export default MateCommunity;