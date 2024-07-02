import { useEffect, useState } from "react";

function Search({searchWord, setSearchWord}) {
    const [inputValue, setInputValue] = useState(searchWord);

    useEffect(()=>{
        setInputValue(searchWord)
    },[searchWord])

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSearch() {
        setSearchWord(inputValue);
        console.log('검색버튼 누름. 검색어 : ' + inputValue + ', 저장된 검색어 : ' + searchWord);
    }

    return (
        <div className="search-box">
            <input placeholder="검색어 입력" id="searchWord" className="search-input" value={inputValue} onChange={handleChange}/>
            <button id="search-btn" className="search-btn" type="button" onClick={handleSearch}>검색</button>
        </div>
    );
}

export default Search;