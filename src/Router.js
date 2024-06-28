import {Route, Routes} from "react-router";
import Main from "./components/main/Main";
import MateCommunity from "./components/mateCommunity/MateCommunity";

function Router() {
    return (
        <Routes>
            {/* NavBar */}
            <Route path={'/'} element={ <Main/> } />
            <Route path={'/notice/list_all'} />
            <Route path={'/culturefacility/list_search'}/>
            {/*<Route path={`/mateCommunity/list_all/:cateNo/:searchWord`} element={ <MateCommunity/> }/>*/}
            <Route path={`/mateCommunity/list_all/:cateNo`} element={ <MateCommunity/> }/>
            <Route path={'/community/list_all'}/>

            {/*  Login menu  */}
            {/*<Route path={'/member/login'} element={} />*/}
            {/*<Route path={'/member/create'} element={} />*/}
            {/*<Route path={'/member/findIdView'} element={} />*/}
            {/*<Route path={'/member/findPasswdView'} element={} />*/}
        </Routes>
    );
}

export default Router;