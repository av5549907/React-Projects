import { useState } from "react"

export const Form=()=>{
    const[uname,setUname]=useState('')
    const[upass,setUpass]=useState('')
    return (<form>
          <div>
            
            <label>Username </label>
            <input type="text" name="uname" value={uname} onChange={(event)=>setUname(event.target.value)}/>
            <label>Password</label>
            <input type="text" name="upass" value={upass} onChange={(event)=>setUpass(event.target.value)}/>
            <div><button>Submit</button></div>
          </div>
    </form>)
}