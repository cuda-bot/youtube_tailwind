import { VideoCard } from "./videocard"

const VIDEOS=[{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
},{
    tittle: "creating youtube interface | using Tailwind |in 1 day",
     author: "CUDA-BOT",
     views: "100k",
     timestamp: "1 day ago",
     image: "photo.jpeg",
     thumb: "thumb2.jpeg"
}]


export const VideoGrid = ()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video=>
            <VideoCard 
            tittle={video.tittle}
            author= {video.author}
            views= {video.views}
            timestamp={video.timestamp}
            image= {video.image}
            thumb= {video.thumb}
            ></VideoCard>
        )}
    </div>

}