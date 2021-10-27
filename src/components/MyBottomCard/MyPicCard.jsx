// MyPicCard()
import TopCardImage from "./TopCardImage";
import CardBottomText from "./CardBottomText";
import BtnBlack from "./BtnBlack";

export default function MyPicCard(){
    return (
        <div>
            <article className='tour-card'>
                <TopCardImage />
                <CardBottomText />
                <BtnBlack />
            </article>
        </div>
    )
}
