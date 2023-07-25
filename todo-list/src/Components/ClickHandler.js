

export const ClickHandler=()=>{
    const clickhandler=(event,count=1)=>{
        console.log('Button Clicked',count,event)
    }
    return (
        <div>
        <button onClick={clickhandler}>Click</button>
        <button onClick={(event,count)=>clickhandler(event,5)}>Click 5</button>

        </div>
    )
}