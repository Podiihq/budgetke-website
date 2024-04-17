import Logo from "../assets/logo/logo.svg"
import Done from "../assets/images/Done.svg"
import Check from "../assets/images/check.svg"
import { ArrowDown } from "../components/Icons"


const HomePage = () => {
    return (
        <div className="bg-[#FFF1F1] text-[#333333]">
            <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
                <nav className="lg:flex justify-between items-center">
                    <img src={Logo} alt="" className="w-32" />
                    <div className="flex gap-6">
                        <a href="">Services</a>
                        <a href="">About Us</a>
                        <a href="">Contact Us</a>
                    </div>
                </nav>
            </section>
            <section>
                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-20">
                    <div className="grid grid-cols-2 items-center">
                        <div>
                            <h1 className="main-heading text-7xl font-bold">Master
                                <span className="text-[#8B5177] main-heading">Budgeting Skills </span>
                                and Unlock Financial Freedom.
                            </h1>
                            <p className="mt-4">Empower your financial journey with personalized guidance from our expert personal finance coach. Navigate budgeting, savings, and investments seamlessly while gaining a supportive community through our engaging social media page.</p>
                            <div className="flex gap-4">
                                <div className="">
                                    <a href="" className="flex items-center gap-2 py-3.5 px-6 text-white bg-[#333333] rounded-full mt-6">
                                        <span className="text-white">Get Templates</span>
                                        <ArrowDown />
                                    </a>
                                </div>
                                <div className="">
                                    <a href="" className="flex items-center gap-2 py-3.5 px-6 bg-white border border-[#333333] rounded-full mt-6">
                                        <span className="">Book a Call</span>
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
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid grid-cols-11">
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
                                Learn to {" "}
                                <span className="font-bold main-heading text-[#8B5177]">
                                    create and stick to a budget {" "}
                                </span>
                                that reflects your priorities and lifestyle, turning financial stress into peace of mind with plans that work for you.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default HomePage