import Image from "../assets/youtube/Rectangle 3.svg"
import Image1 from "../assets/youtube/Rectangle 4.svg"
import Image2 from "../assets/youtube/Rectangle 6.svg"
import { ArrowRight } from "./Icons"

interface VideoCardProps {
    image: string;
    title: string;
    link: string;
}


const VideoCard = (props: VideoCardProps) => {
    return (
        <div>
            <div>
                <a href={props.link}>
                    <img src={props.image} alt="" className="border border-[#C5C5C5] rounded-lg" />
                    <p className="py-3 font-semibold">{props.title}</p>
                    <a href={props.link} className="flex items-center gap-2">
                        <span className="text-sm">Watch Video</span>
                        <ArrowRight />
                    </a>
                </a>
            </div>
        </div>
    )
}

export default VideoCard



export const VideoCardComponent = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-10">
            <VideoCard
                image={Image}
                title={"Money Lesson from 2023"}
                link={""}
            />
            <VideoCard
                image={Image1}
                title={"What You Need to Know About the Central Bank' Infrastructure Bond Offering: 8.5 Year...  "}
                link={""}
            />
            <VideoCard
                image={Image2}
                title={"Introducing Our 2024 Monthly Goals Tracking Template! 🚀💰"}
                link={""}
            />
        </div>
    )
}
