export function HeadForm(prop){
    return(
        <form action={prop.action}>
          <input type='text' placeholder='e.g.oregano' className='inputbox' name='ingredient' ></input>
           <button className="button"> + Add ingredient </button>
          
          </form>
    )
}