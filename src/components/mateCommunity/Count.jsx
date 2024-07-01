function Count(props){

    if (props.searchWord == ''){
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