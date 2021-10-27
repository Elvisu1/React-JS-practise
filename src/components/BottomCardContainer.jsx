import MyPicCard from "./MyBottomCard/MyPicCard";

function BottomCardContainer(){
    return(<div className='tour-cards-container d-flex justify-around'>
        <MyPicCard town='vilnius' />
        <MyPicCard town='moscow'/>
        <MyPicCard town='London'/>
    </div>)
}
export default BottomCardContainer;
