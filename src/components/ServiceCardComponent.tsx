import { Link } from "react-router-dom";
import { ArrowRight } from "./Icons";

interface ServiceCardProps {
  image: string;
  title1: string;
  title2: string;
  description: string;
  price: string;
  link: string;
  action: string;
}

const ServiceCardComponent = (props: ServiceCardProps) => {
  return (
    <Link to={props.link}>
      <div
        className="bg-white p-6 border border-[#C5C5C5] rounded-lg
        hover:-translate-y-2 transform duration-300 cursor-pointer"
      >
        <img src={props.image} alt="" className="mx-auto" />
        <p className="text-xl text-[#8B5177] text-center font-medium">
          {props.title1}
        </p>
        <p className="text-xl text-[#8B5177] text-center font-medium">
          {props.title2}
        </p>
        <p className="text-center text-sm mt-2">{props.description}</p>
        <p className="text-xl font-bold text-center mt-2 uppercase">
          {props.price}
        </p>
        <a
          href={props.link}
          className="flex items-center mt-4 gap-2 justify-center"
        >
          <span>{props.action}</span>
          <ArrowRight />
        </a>
      </div>
    </Link>
  );
};

export default ServiceCardComponent;
