function MyArticle(props) {
    //props.children - specialus props kuriuo mes perduodam visa
    // tarp pradzios ir pabaigos esancia strukstura ir teksta i komponenta
    return (
            <article>
                <h2>My article Heading</h2>
                <div>{props.children} </div>
            </article>
        )

}
export default  MyArticle
