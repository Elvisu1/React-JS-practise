//image
import guitarImg from "../../assets/guitar.jpg"
import posterImg from "../../assets/posters.jpg"
import equipmentImg from "../../assets/tshirt.jpg"

function PeopleCard (props) {
    return(

            <article className='people-card'>
                <p>{props.cardName}</p>
                <img src={guitarImg} alt='cart' />
                
            </article>





)
}
export default PeopleCard
