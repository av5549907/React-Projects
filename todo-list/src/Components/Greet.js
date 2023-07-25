export const Greet=(props)=>{
    return  (
    <div>
      <h1>
       Hello {props.name} a.k.a {props.hero}
     </h1>
     {props.children}
    </div>
    );
}