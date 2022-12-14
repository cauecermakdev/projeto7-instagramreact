import Posts from './Posts';
import SideBar from './SideBar';
import Stories from './Stories';

export default function Corpo(){
    return (
    <div className="corpo">

        <div className="esquerda">
            <Stories/>
            <Posts/>
        </div>

        <SideBar/>

        <div className="fundo-mobile">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon> 
        </div>

    </div>
    );
}