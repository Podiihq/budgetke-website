import Logo from "../assets/logo/logo.svg";
import Done from "../assets/images/Done.svg";
import Check from "../assets/images/check.svg";
import Illustration2 from "../assets/images/Illustration2.svg";
import HeroVideo from "../assets/video/BUDGETNKE Landscape.mp4";
import About from "../assets/images/me.svg";
import {
  ArrowDown,
  ArrowRight,
  EmailIcon,
  InstagramIcon,
  PhoneIcon,
  TelegramIcon,
  TikTokIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from "../components/Icons";
import ServiceCardComponent from "../components/ServiceCardComponent";

import Image1 from "../assets/illustrations/one.svg";
import Image2 from "../assets/illustrations/two.svg";
import Image3 from "../assets/illustrations/three.svg";
import Image4 from "../assets/illustrations/four.svg";
import Image5 from "../assets/illustrations/five.svg";
import Image6 from "../assets/illustrations/six.svg";
import { MasonryComponent } from "../components/MasonryComponent";
import { VideoCardComponent } from "../components/VideoCard";

const HomePage = () => {
  return (
    <div className="bg-[#FFF1F1] text-[#333333]">
      <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8">
        <nav className="lg:flex justify-between items-center">
          <img src={Logo} alt="" className="w-36 mx-auto lg:mx-0" />
          <div className="lg:flex gap-6 text-sm hidden">
            <a href="">Services</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
          </div>
        </nav>
      </section>
      <section>
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 pb-20 pt-8">
          <div className="grid lg:grid-cols-2 items-center gap-5">
            <div>
              <h1 className="main-heading text-4xl text-center lg:text-left lg:text-6xl font-bold">
                Master{" "}
                <span className="text-[#8B5177] main-heading">
                  Budgeting Skills{" "}
                </span>
                and Unlock Financial Freedom.
              </h1>
              <p className="mt-4 xl:w-11/12 text-md text-center lg:text-left">
                Empower your financial journey with personalized guidance from
                our expert personal finance coach. Navigate budgeting, savings,
                and investments seamlessly while gaining a supportive community
                through our engaging social media page.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <div className="">
                  <a
                    href="#templates"
                    className="flex items-center gap-2 py-3.5 px-6 text-white bg-[#333333] rounded-full mt-6
                    hover:bg-[#FFC7C8] hover:text-[#333333] hover:border border-[#333333]"
                  >
                    <span className=" font-medium transform duration-500">
                      Get Templates
                    </span>
                    <ArrowDown />
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://calendly.com/budgetnke"
                    className="flex items-center gap-2 py-3.5 px-6 bg-white border border-[#333333] rounded-full mt-6
                    hover:bg-[#FFC7C8]  transform duration-500"
                  >
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
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-20">
          <div className="grid lg:grid-cols-11 gap-4 lg:gap-0">
            <div className="flex items-start gap-2 col-span-3">
              <img src={Check} alt="" className="w-10" />
              <p>
                Learn to{" "}
                <span className="font-bold main-heading text-[#8B5177]">
                  create and stick to a budget{" "}
                </span>
                that reflects your priorities and lifestyle, turning financial
                stress into peace of mind with plans that work for you.
              </p>
            </div>
            <div className="h-full w-0.5 bg-[#6B6B6B] place-self-center"></div>
            <div className="flex items-start gap-2 col-span-3">
              <img src={Check} alt="" className="w-10" />
              <p>
                Discover{" "}
                <span className="font-bold main-heading text-[#8B5177]">
                  practical savings strategies{" "}
                </span>
                that fit your lifestyle and income, transforming sporadic saving
                into a consistent, growing nest egg for your future.
              </p>
            </div>
            <div className="h-full w-0.5 bg-[#6B6B6B] place-self-center"></div>
            <div className="flex items-start gap-2 col-span-3">
              <img src={Check} alt="" className="w-10" />
              <p>
                Break the{" "}
                <span className="font-bold main-heading text-[#8B5177]">
                  cycle of uncertainty{" "}
                </span>
                with comprehensive financial planning that takes the guesswork
                out of your financial future, offering clarity and actionable
                steps.
              </p>
            </div>
          </div>
        </div>
        <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8">
          <div>
            <video
              autoPlay
              muted
              loop
              src={HeroVideo}
              className="w-full border border-[#CFCFCF] rounded-xl"
            ></video>
          </div>
        </section>
        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-20">
          <div>
            <div className="flex flex-col-reverse lg:grid grid-cols-2 items-center gap-20">
              <img src={Illustration2} alt="" />
              <div>
                <h1 className="main-heading text-4xl lg:text-6xl font-bold">
                  Why{" "}
                  <span className="text-[#8B5177] main-heading">
                    Choose Me{" "}
                  </span>
                </h1>
                <p className="mt-4 lg:w-11/12 text-md">
                  I believe in empowering individuals to take control of their
                  financial destinies. Through personalized guidance, expert
                  advice, and a supportive community,I am here to help you
                  navigate the complexities of budgeting, savings, and
                  investments, transforming financial challenges into
                  opportunities for growth.
                </p>
                <div className="flex gap-4">
                  <div className="">
                    <a
                      href="https://calendly.com/budgetnke"
                      className="flex items-center gap-2 py-3.5 px-6 bg-[#FFC7C8] border border-[#333333] rounded-full mt-6
                      hover:bg-[#333333] hover:text-white transform duration-500"
                    >
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

      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-20">
        <div>
          <div id="templates">
            <h1 className="main-heading text-4xl lg:text-6xl font-bold lg:w-1/2 text-center mx-auto">
              My <span className="text-[#8B5177] main-heading">Products</span> &{" "}
              <span className="text-[#8B5177] main-heading">Services</span>
            </h1>
            <p className="mt-4 lg:w-3/5 text-md text-center mx-auto">
              Our services are tailored to meet you where you are in your
              financial journey. Whether you're starting to budget, looking to
              build your savings, or ready to dive into investments, we're here
              to guide you. Our offerings include:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <ServiceCardComponent
              image={Image1}
              title1={"30 Min One-on-One Budget Coaching Sessions "}
              title2={""}
              description={
                "During this session, we’ll collaborate to creater a tailored plan just for you."
              }
              price={"KSH 3500"}
              link={"https://calendly.com/budgetnke"}
              action="Book a Call"
            />
            <ServiceCardComponent
              image={Image2}
              title1={"Anonymous Budget Breakdown Form"}
              title2={""}
              description={
                "Keep yourself aligned with your monthly objectives as you track your finances."
              }
              price={"Free"}
              link={
                "https://docs.google.com/forms/d/e/1FAIpQLSdD5N_DMhCcmGaL2rG8CC6LVxa3LELfDHgC8ymWcatVlm2cew/viewform"
              }
              action="Get Template"
            />
            <ServiceCardComponent
              image={Image4}
              title1={"Monthly Budgeting"}
              title2={"Template."}
              description={
                "The budgeting template simplifies money management, tracks monthly expenses."
              }
              price={"KSH 1000"}
              link={
                "https://docs.google.com/forms/d/e/1FAIpQLSdubk0TAdwBFUrbHV7ROgZMOwAvozgE5MIdyrrK3h_w8sBd4A/viewform"
              }
              action="Get Template"
            />
            <ServiceCardComponent
              image={Image2}
              title1={"Savings & Investment Tracking Template."}
              title2={""}
              description={
                "Keep yourself aligned with your monthly objectives as you track your finances."
              }
              price={"KSH 700"}
              link={
                "https://docs.google.com/forms/d/e/1FAIpQLScfY7vXuCHmULBSWCa-8xr4TdApcfhmxjcjXcIKVagnkDgXiQ/viewform"
              }
              action="Get Template"
            />
            <ServiceCardComponent
              image={Image6}
              title1={"Monthly Goals Tracking "}
              title2={"Template."}
              description={
                "If my set templates don’t work for you,I can still tailor your budget to fit your unique needs."
              }
              price={"KSH 500"}
              link={
                "https://docs.google.com/forms/d/e/1FAIpQLSfD1yUau6XscvLfakiSrWirJunZDBTpaqcvaY-APyBBU-1nXw/viewform"
              }
              action="Get Template"
            />
            <ServiceCardComponent
              image={Image6}
              title1={"Savings Challange "}
              title2={"Template."}
              description={
                "If my set templates don’t work for you,I can still tailor your budget to fit your unique needs."
              }
              price={"KSH 500"}
              link={
                "https://docs.google.com/forms/d/e/1FAIpQLScDf2lNKvosDE3KGO5P8A8hCZsDaOqhcyHw-0jWgcxEBzkOMw/viewform"
              }
              action="Get Template"
            />
            <ServiceCardComponent
              image={Image3}
              title1={"Annual Budgeting"}
              title2={"Template."}
              description={
                "Take charge of your finances for the entire year and effortlessly track expenses."
              }
              price={"KSH 2000"}
              link={
                "https://docs.google.com/forms/d/e/1FAIpQLSe-wiV-WT-jinLBFLy9owUS7qsaXB5YaF8igIQ42BzdT1XLcA/viewform"
              }
              action="Get Template"
            />

            <ServiceCardComponent
              image={Image5}
              title1={"Debt Tracking "}
              title2={"Template."}
              description={
                "Monitor your progress andpave the way to a debt-free life!"
              }
              price={"KSH 500"}
              link={
                "https://docs.google.com/forms/d/e/1FAIpQLSfKghZEl08o2jVhzomKB8M1cKBP5_IwZVFGyz3xLSulV-1qSA/viewform"
              }
              action="Get Template"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#333333] text-white">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-20">
          <div className="lg:grid grid-cols-2 items-center gap-20">
            <div className="mb-6 lg:mb-0">
              <h1 className="main-heading text-4xl lg:text-6xl font-bold">
                About Me
              </h1>
              <p className="mt-4 text-md">
                Step into the world of financial confidence with Barbara the
                Budgeting Coach, the heart behind BudgetnKe. With a background
                in Chemical Engineering and an MBA, she brings a mix of
                analytical smarts and strategic know-how to the table. Picture
                this: a friendly guide who's been in your shoes, unraveling the
                complexities of personal finance.
              </p>
              <p className="mt-2 text-md">
                At BudgetnKe, Barbara is ready to delve into the nitty-gritty,
                offering personalized coaching that's all about making your
                money work for you. Let's turn those financial goals into a
                reality together!
              </p>
              <div className="flex gap-4">
                <div className="">
                  <a
                    href=""
                    className="flex items-center gap-2 py-3.5 px-6 border border-white rounded-full mt-6
                    hover:translate-x-2 transform duration-300"
                  >
                    <span className="font-medium">Get In Touch</span>
                    <ArrowDown />
                  </a>
                </div>
              </div>
            </div>
            <img src={About} alt="" className="w-full" />
          </div>
        </div>
      </section>
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-20">
        <div>
          <div>
            <h1 className="main-heading text-4xl lg:text-6xl font-bold lg:w-1/2 text-center mx-auto">
              <span className="text-[#8B5177] main-heading">Success</span>{" "}
              Stories
            </h1>
            <p className="mt-4 lg:w-3/5 text-md text-center mx-auto">
              Nunc convallis semper justo quis tempor. Praesent molestie, lorem
              sed imperdiet tempor, libero urna semper.
            </p>
          </div>
          <div className="mt-6">
            <MasonryComponent />
          </div>
        </div>
      </section>
      <section className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:pb-20">
        <div>
          <div className="lg:flex justify-between items-end">
            <h1 className="main-heading text-4xl lg:text-6xl font-bold lg:text-left text-center">
              Watch my{" "}
              <span className="text-[#8B5177] main-heading">Videos</span>
            </h1>
            <div className="lg:flex gap-4 hidden">
              <div className="">
                <a
                  href="https://www.youtube.com/@BudgetnKE/videos"
                  className="flex items-center gap-2 py-3.5 px-6 bg-[#FFC7C8] border border-[#333333] rounded-full mt-6
                  hover:bg-[#333333] hover:text-white transform duration-500"
                >
                  <span className="font-medium">See more Videos</span>
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <VideoCardComponent />
          </div>
          <div className="flex lg:hidden">
            <a
              href=""
              className="flex items-center gap-2 py-3.5 px-6 bg-[#FFC7C8] border border-[#333333] rounded-full mt-6"
            >
              <span className="font-medium">See more Videos</span>
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#333333] text-white">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <p className="uppercase text-center mb-4">Contact me today</p>
          <h1 className="main-heading text-4xl lg:text-6xl font-bold lg:w-3/4 text-center mx-auto">
            Ready to start your journey to financial freedom?
          </h1>
          <div className="flex flex-col lg:flex-row justify-center mt-10 lg:gap-10 gap-4">
            <div className="flex items-center gap-2 mx-auto lg:mx-0">
              <EmailIcon />
              <p>BudgetnKE(at)gmail.com</p>
            </div>
            <div className="flex items-center gap-2 mx-auto lg:mx-0">
              <PhoneIcon />
              <p>+254 798 704 305</p>
            </div>
          </div>

          <div className="flex gap-6 justify-center mt-10">
            <a
              href="https://www.instagram.com/budgetnKE"
              className="p-3 border border-[#666666] hover:bg-[#666666] rounded-full"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.tiktok.com/@budgetnke"
              className="p-3 border border-[#666666] hover:bg-[#666666] rounded-full"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://t.me/BudgetnKE"
              className="p-3 border border-[#666666] hover:bg-[#666666] rounded-full"
            >
              <TelegramIcon />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=254798704305"
              className="p-3 border border-[#666666] hover:bg-[#666666] rounded-full"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://www.youtube.com/channel/UCHUInOB11jhwRH-qWIZ8AoA"
              className="p-3 border border-[#666666] hover:bg-[#666666] rounded-full"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
        <div className="pb-6">
          <p className="text-xs text-center">
            © Copyright 2024 BudgetnKe || All Rights Reserved.
          </p>
          <p className="text-xs text-center mt-4">
            Designed and Developed by
            <br />{" "}
            <a href="https://podiihq.com/" className="underline">
              Podii Consultants LTD
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
