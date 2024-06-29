import '../../styles/main.css';
import MainImage from './MainImage';
import MainFunction from './MainFunction';
import CultureFacilityImages from './CultureFacilityImages';

function Main(){
    return(
        <div style={{width: '100%', textAlign: 'center'}}>
            <MainImage/>
            <MainFunction/>
            <CultureFacilityImages/>
        </div>
    )
}

export default Main;