export const ChildComponent=(props)=>{
    return(

        <div>
        <button conClick={props.greethandler()}>Greet Parent</button>

        </div>
    )
}