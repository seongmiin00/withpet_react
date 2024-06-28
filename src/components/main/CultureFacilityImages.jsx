import MainFacilityImgs from "../../constants/MainFacilityImgs";
import cafe from '../../assets/cafe.jpg'

function ImgsList(props){
    const list = []
    for(let i=0; i<props.MainFacilityImgs.length; i++){
        let img = MainFacilityImgs[i];
        list.push(
            <div className="card culture_facillity_img" style={ {width: '18rem', margin: 'auto', backgroundColor : '#89c9fe', border: '0'} }>
                <img src={ cafe } className="card-img-top rounded" alt="..." style={ {width: '85%', margin: 'auto'} }/>
            </div>
        )
    }
    return (
        <div className="card-group culture_facillity_imgs">
            {list}
        </div>
    );
}

function CultureFacilityImages(){
    
    return (
        <>
            <div className="culture_facillity">
                <p className="func_curture">동반가능 문화시설</p>
                <ImgsList MainFacilityImgs={MainFacilityImgs}/>
            </div>
        </>
    )
}

export default CultureFacilityImages;