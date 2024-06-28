import { useContext, useState } from "react";
import { petContext } from "./PetContext";

function Search(props){
    const [ searchWord, setSearchWord ] = useState(props.searchWord);

    // console.log(searchWord);

    // if (searchWord != null && searchWord != ''){
    //     document.getElementById('searchWord').value = searchWord;
    // }

    function changeSearchWord(){
        let word = document.getElementById('searchWord').value;
        setSearchWord(word);
    }

    return (
        <div className="search-box">
            <input placeholder="검색어 입력" id="searchWord" className="search-input" value={searchWord && searchWord}/>
            <button id="search-btn" className="search-btn" type="button" onClick={()=>changeSearchWord}>검색</button>
        </div>
    )
}

export default Search;