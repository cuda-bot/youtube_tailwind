export function VideoCard(props:any){
    return <div className="p-2 cursor-pointer">
        <img src={props.image} className="rounded-xl"></img>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
               <img className={"rounded-full w-12 h-12"} src ={props.thumb}></img>
            </div>
            <div className="col-span-11  ">
                <div> 
                  {props.tittle} 
                </div>
                <div className="col-span-11 text-gray-400 text-xs">
                    {props.author}
                </div>
                <div className="col-span-11 stext-gray-400 text-xs">
                    {props.views} | {props.timestamp}
                </div>

            </div>
            
            
        </div>
        
    </div>
}