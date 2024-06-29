import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PetCate(props){
    const [cates, setCates] = useState();

    useEffect(()=>{
        axios.get('http://localhost:9093/petType/cate_list')
        .then((response) => 
            setCates(response['data'])
        )
    },[]);

    return(
        <div className="row mb-3 text-center">
            <Link className={`col pt-3 themed-grid-col 
            ${props.cateNo == 0 ? 'cate-on' : 'cate-off'}`}
                style={ {textDecoration : 'none', cursor: 'pointer'} } 
                to={`/mateCommunity/list_all/${0}`}>
                    전체
            </Link>
            {cates&&cates.map((cate) => {
                return(
                    <Link key={cate.petTypeNo} className={`col pt-3 themed-grid-col 
                        ${props.cateNo == cate.petTypeNo ? 'cate-on' : 'cate-off'}`}
                        style={ {textDecoration : 'none', cursor: 'pointer'} } 
                        to={`/mateCommunity/list_all/${cate.petTypeNo}`}>
                        {cate.petType}
                    </Link>
                )
            })}
        </div>
    )
}

export default PetCate;