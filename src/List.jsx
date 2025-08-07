
export default function List(prop) {


    return(
      <>
          <h2 className="listname">Ingredients on Hand</h2>
          <ul className='list'>
           {prop.ingredients}
           </ul>
      </>
    )
}



