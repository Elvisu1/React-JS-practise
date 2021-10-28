// kitas funkcijos uzrasymas destruktizacija
const MyArticleExpresion = ({children, title}) => {
    //props.children - specialus props kuriuo mes perduodam visa
    // tarp pradzios ir pabaigos esancia strukstura ir teksta i komponenta
    return (
            <article>
                <h2>{title}</h2>
                <div>{children} </div>
            </article>
        )

}
export default  MyArticleExpresion


// const MyObj = {
//     color: 'blue',
//     text: 'green'
// }
// // const {color} = MyObj
// const color = MyObj.color
