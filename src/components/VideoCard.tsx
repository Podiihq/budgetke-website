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
        <div className="mb-6  border border-[#C5C5C5] rounded-lg hover:shadow-lg">
            <a href={props.link}>
                <img src={props.image} alt="" className="w-full rounded-t-lg" />
                <p className="py-3 font-semibold pl-4">{props.title}</p>
                <p className="flex items-center gap-2 pl-4 pb-4">
                    <span className="text-sm">Watch Video</span>
                    <ArrowRight />
                </p>
            </a>
        </div>
    )
}

export default VideoCard



export const VideoCardComponent = () => {
    return (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-4">
            <VideoCard
                image={Image1}
                title={"What You Need to Know About the Central Bank' Infrastructure Bond Offering: 8.5 Year...  "}
                link={""}
            />
            <VideoCard
                image={Image}
                title={"Money Lesson from 2023"}
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
