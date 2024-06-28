import { PetProvider } from "./PetContext";
import PetCate from "./PetCategory";
import '../../styles/list.css';
import ListAside from "./Aside";
import Count from "./Count";
import Search from "./Search";
import { useParams } from "react-router-dom";

function MateCommunity(){
    const { cateNo, searchWord } = useParams();
    
    console.log(searchWord);

    return(
        <div style={{paddingTop: '20px', marginTop:'100px'}}>
            <div id="list_all" style={{width:'80%', margin: 'auto', height: 'auto', overflow: 'hidden'}}>
                <div className='title_line'>
                    산책 메이트 모집
                </div>
                <PetProvider>
                    <PetCate cateNo={ cateNo }></PetCate>
                    <ListAside/>
                    <div className="menu_line"></div>
                    <div className="row">
                        <div className="col-6">
                            <Count count={10}/>
                        </div>
                        <div className="col-6" style={{textAlign:'right'}}>
                            <Search searchWord={searchWord}/>
                        </div>
                    </div>

                </PetProvider>
            </div>
        </div>
    )
}

export default MateCommunity;