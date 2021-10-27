// MyPicCard()
import TopCardImage from "./TopCardImage";
import CardBottomText from "./CardBottomText";
import BtnBlack from "./BtnBlack";

export default function MyPicCard(props){
    return (
        <div>
            <article className='tour-card'>
                <TopCardImage />
                <CardBottomText town={props.town}/>
                <BtnBlack />
            </article>
        </div>
    )
}
