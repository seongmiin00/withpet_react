import {Route, Routes} from "react-router";
import Main from "./components/main/Main";
import MateCommunity from "./components/mateCommunity/MateCommunity";
import Notice from "./components/notice/Notice";
import NavBar from "./components/navbar/NavBar";
import Read from "./components/mateCommunity/Read";
import Login from "./components/login/user/Login";

function Router() {
    return (
        <Routes>
            <Route path={'/'} element={ <Main/> } />
            <Route path={'/notice/list_all'} element={<Notice />}/>
            <Route path={'/culturefacility/list_search'}/>
            <Route path={'/community/list_all'}/>

            {/* 산책 메이트 커뮤니티 */}
            <Route path={`/mateCommunity/list_all/:cateNo`} element={ <MateCommunity/> }/>
            <Route path={`/mateCommunity/read/:postId`} element={ <Read/> } />

            {/* 로그인 */}
            <Route path={'/member/login'} element={<Login/>}/>
        </Routes>
    );
}

export default Router;