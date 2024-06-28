import { useContext } from "react";
import { petContext } from "./PetContext";

function Count(props){
    const {searchWord} = useContext(petContext);

    if (searchWord == ''){
        return(
            <span>총 모집글 수 {props.count}</span>
        )
    }else{
        return(
            <span>검색결과 {props.count} </span>
        )
    }
}

export default Count;