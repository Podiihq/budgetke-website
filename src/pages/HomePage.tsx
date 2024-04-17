import Logo from "../assets/logo/logo.svg"
import Done from "../assets/images/Done.svg"
import Check from "../assets/images/check.svg"
import Illustration2 from "../assets/images/Illustration2.svg"
import HeroVideo from "../assets/video/BUDGETNKE Landscape.mp4"
import About from "../assets/images/me.svg"
import { ArrowDown } from "../components/Icons"
import ServiceCardComponent from "../components/ServiceCardComponent"

import Image1 from "../assets/illustrations/one.svg"
import Image2 from "../assets/illustrations/two.svg"
import Image3 from "../assets/illustrations/three.svg"
import Image4 from "../assets/illustrations/four.svg"
import Image5 from "../assets/illustrations/five.svg"
import Image6 from "../assets/illustrations/six.svg"


const HomePage = () => {
    return (
        <div className="bg-[#FFF1F1] text-[#333333]">
            <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
                <nav className="lg:flex justify-between items-center">
                    <img src={Logo} alt="" className="w-36" />
                    <div className="flex gap-6">
                        <a href="">Services</a>
                        <a href="">About Us</a>
                        <a href="">Contact Us</a>
                    </div>
                </nav>
            </section>
            <section>
                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-20 pt-8">
                    <div className="grid lg:grid-cols-2 items-center">
                        <div>
                            <h1 className="main-heading text-7xl font-bold">Master
                                <span className="text-[#8B5177] main-heading">Budgeting Skills </span>
                                and Unlock Financial Freedom.
                            </h1>
                            <p className="mt-4 lg:w-11/12 text-md">Empower your financial journey with personalized guidance from our expert personal finance coach. Navigate budgeting, savings, and investments seamlessly while gaining a supportive community through our engaging social media page.</p>
                            <div className="flex gap-4">
                                <div className="">
                                    <a href="" className="flex items-center gap-2 py-3.5 px-6 text-white bg-[#333333] rounded-full mt-6">
                                        <span className="text-white font-medium">Get Templates</span>
                                        <ArrowDown />
                                    </a>
                                </div>
                                <div className="">
                                    <a href="" className="flex items-center gap-2 py-3.5 px-6 bg-white border border-[#333333] rounded-full mt-6">
                                        <span className="font-medium">Book a Call</span>
                                        <ArrowDown />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img src={Done} alt="" />
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid lg:grid-cols-11">
                        <div className="flex items-start gap-2 col-span-3">
                            <img src={Check} alt="" className="w-10" />
                            <p>
                                Learn to {" "}
                                <span className="font-bold main-heading text-[#8B5177]">
                                    create and stick to a budget {" "}
                                </span>
                                that reflects your priorities and lifestyle, turning financial stress into peace of mind with plans that work for you.
                            </p>
                        </div>
                        <div className="h-full w-0.5 bg-[#6B6B6B] place-self-center"></div>
                        <div className="flex items-start gap-2 col-span-3">
                            <img src={Check} alt="" className="w-10" />
                            <p>
                                Discover {" "}
                                <span className="font-bold main-heading text-[#8B5177]">
                                    practical savings strategies {" "}
                                </span>
                                that fit your lifestyle and income, transforming sporadic saving into a consistent, growing nest egg for your future.
                            </p>
                        </div>
                        <div className="h-full w-0.5 bg-[#6B6B6B] place-self-center"></div>
                        <div className="flex items-start gap-2 col-span-3">
                            <img src={Check} alt="" className="w-10" />
                            <p>
                                Break the {" "}
                                <span className="font-bold main-heading text-[#8B5177]">
                                    cycle of uncertainty {" "}
                                </span>
                                with comprehensive financial planning that takes the guesswork out of your financial future, offering clarity and actionable steps.
                            </p>
                        </div>
                    </div>
                </div>
                <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
                    <div>
                        <video autoPlay muted loop src={HeroVideo} className="w-full border border-[#CFCFCF] rounded-xl"></video>
                    </div>
                </section>
                <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div>
                        <div className="lg:grid grid-cols-2 items-center gap-20">
                            <img src={Illustration2} alt="" />
                            <div>
                                <h1 className="main-heading text-6xl font-bold">Why {" "}
                                    <span className="text-[#8B5177] main-heading">Choose Me </span>
                                </h1>
                                <p className="mt-4 lg:w-11/12 text-md">
                                    I believe in empowering individuals to take control of their financial destinies. Through personalized guidance, expert advice, and a supportive community,I am here to help you navigate the complexities of budgeting, savings, and investments, transforming financial challenges into opportunities for growth.
                                </p>
                                <div className="flex gap-4">
                                    <div className="">
                                        <a href="" className="flex items-center gap-2 py-3.5 px-6 bg-[#FFC7C8] border border-[#333333] rounded-full mt-6">
                                            <span className="font-medium">Book a Call</span>
                                            <ArrowDown />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div>
                    <div>
                        <h1 className="main-heading text-6xl font-bold lg:w-1/2 text-center mx-auto">My {" "}
                            <span className="text-[#8B5177] main-heading">Products</span> & {" "}
                            <span className="text-[#8B5177] main-heading">Services</span>
                        </h1>
                        <p className="mt-4 lg:w-3/5 text-md text-center mx-auto">
                            Our services are tailored to meet you where you are in your financial journey. Whether you're starting to budget, looking to build your savings, or ready to dive into investments, we're here to guide you. Our offerings include:
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4 mt-8">
                        <ServiceCardComponent
                            image={Image1}
                            title1={"30 Min One-on-One Budget Coaching Sessions "}
                            title2={""}
                            description={"During this session, we’ll collaborate to creater a tailored plan just for you."}
                            price={"KSH 3500"}
                            link={""}
                            action="Book a Call"
                        />
                        <ServiceCardComponent
                            image={Image2}
                            title1={"Monthly Goals Tracking."}
                            title2={"Template."}
                            description={"Keep yourself aligned with your monthly objectives as you track your finances."}
                            price={"KSH 1000"}
                            link={""}
                            action="Get Template"
                        />
                        <ServiceCardComponent
                            image={Image3}
                            title1={"Annual Budgeting"}
                            title2={"Template."}
                            description={"Take charge of your finances for the entire year and effortlessly track expenses."}
                            price={"KSH 2000"}
                            link={""}
                            action="Get Template"
                        />
                        <ServiceCardComponent
                            image={Image4}
                            title1={"Monthly Budgeting"}
                            title2={"Template."}
                            description={"The budgeting template simplifies money management, tracks monthly expenses."}
                            price={"KSH 1000"}
                            link={""}
                            action="Get Template"
                        />
                        <ServiceCardComponent
                            image={Image5}
                            title1={"Free Debt Tracking "}
                            title2={"Template."}
                            description={"Monitor your progress andpave the way to a debt-free life!"}
                            price={"Free"}
                            link={""}
                            action="Get Template"
                        />
                        <ServiceCardComponent
                            image={Image6}
                            title1={"Customizable Budget "}
                            title2={"Template."}
                            description={"If my set templates don’t work for you,I can still tailor your budget to fit your unique needs."}
                            price={"Custom"}
                            link={""}
                            action="Get Template"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#333333] text-white">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="lg:grid grid-cols-2 items-center gap-20">
                        <div>
                            <h1 className="main-heading text-6xl font-bold">About Me</h1>
                            <p className="mt-4 text-md">
                                Step into the world of financial confidence with Barbara the Budgeting Coach, the heart behind BudgetnKe. With a background in Chemical Engineering and an MBA, she brings a mix of analytical smarts and strategic know-how to the table. Picture this: a friendly guide who's been in your shoes, unraveling the complexities of personal finance.
                            </p>
                            <p className="mt-2 text-md">
                                At BudgetnKe, Barbara is ready to delve into the nitty-gritty, offering personalized coaching that's all about making your money work for you. Let's turn those financial goals into a reality together!
                            </p>
                            <div className="flex gap-4">
                                <div className="">
                                    <a href="" className="flex items-center gap-2 py-3.5 px-6 border border-white rounded-full mt-6">
                                        <span className="font-medium">Get In Touch</span>
                                        <ArrowDown />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img src={About} alt="" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomePage