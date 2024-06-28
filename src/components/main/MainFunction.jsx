import { useNavigate } from "react-router-dom";
import mainFunctions from '../../constants/MainFunctionList';

function Lis(props){
    return (
        <>
            <li>{props.content.content1}</li>
            <li>{props.content.content2}</li>
            <li>{props.content.content3}</li>
            <li>{props.content.content4}</li>
        </>
    )
}

function Functions(props){
    let navigate = useNavigate();
    const list = [];
    for(let i = 0; i < props.mainFunctions.length; i++){
        let mainFunction = props.mainFunctions[i];
        list.push(
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm pb-3">
                <div className="card-header py-3">
                    <h5 className="my-0 fw-normal">{mainFunction.title}</h5>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                        <Lis content={ mainFunction.content }></Lis>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-outline-info" onClick={ () => {navigate(mainFunction.url)}}>{mainFunction.btn}</button>
                </div>
                </div>
            </div>
        )
    }
    return list;
}

function MainFunction(){
    return (
        <div className="func_info">
            <div className="func_title">주요 기능</div>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <Functions mainFunctions={mainFunctions}/>
            </div>
        </div>
    )
}

export default MainFunction;