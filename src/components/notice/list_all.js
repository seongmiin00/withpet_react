import axios from "axios";

// 리스트 가져오기
const getListAll = async () => {
    try {
        const response = await axios.get('http://localhost:9093/api/notice/list_all');
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

getListAll().then((data) => {
    console.log(data);
})


const tempData = [
    {
        num: 1,
        title: '임시 데이터 공지사항 제목',
        content: '임시 데이터 공지사항 내용',
        date: new Date()
    },
    {
        num: 2,
        title: '임시 데이터 공지사항 제목',
        content: '임시 데이터 공지사항 내용',
        date: new Date()
    },
]

export {getListAll, tempData};
