import Styles from './Recipe.module.css'
function Recipe({title,ingreidents,calories,image}){
return(
    <div className={Styles.container}>
        <h1>{title}</h1>
        <ol>
            <h3>Recipe Ingredients</h3>
            {ingreidents.map((ingre,key) => (<li key={key} className={Styles.recipeList}>{ingre.text}</li>))}
        </ol>
        <p>Total number of Calories {calories}</p>
        <img className={Styles.product} src={image} alt="API ERROR"/>
    </div>
)
}

export default Recipe