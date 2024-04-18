interface CardContent {
  userName: string;
  description: string;
}

const MasonryLayout = (props: CardContent) => {
  return (
    <figure className="p-4 mb-2  bg-[#F8F9FA] border border-[#C5C5C5] rounded-lg">
      <p className="text-center text-xs font-bold">{props.userName}</p>
      <p className="text-center text-xs md:text-sm mt-4">
        "{props.description}"
      </p>
    </figure>
  );
};

export default MasonryLayout;

export const MasonryComponent = () => {
  return (
    <div className="relative">
      <div className="container">
        <MasonryLayout
          userName={"David "}
          description={"Am a beneficiary of your budget plans. Ubarikiwe 👏"}
        />
        <MasonryLayout
          userName={"Njoki S."}
          description={
            "Thanks so much for the time and for helping me structure my finances. Looking Forward for further engagements in the future😊."
          }
        />
        <MasonryLayout
          userName={"Mwende M."}
          description={
            "Just Found your channel, nice. I’ve more or less been doing a 50/25/25 planning on my salary and was starting to loose focus, your channel is a great reminder"
          }
        />
        <MasonryLayout
          userName={"Emily W."}
          description={
            "Great job teaching people about finances... Proud of you great job al look 4 for automate of all these processes"
          }
        />

        <MasonryLayout
          userName={"Aisha "}
          description={
            "Thank you for the tool... Am truly grateful I got last year ........ to see my progress and to target paying more."
          }
        />
        <div className="hidden lg:block">
          <MasonryLayout
            userName={"David "}
            description={
              "Hi Barbz, I have just bumped on your page this morning and I must say, you are changing lives. I am interested in the one month budget template. How can I go about it?"
            }
          />
        </div>
        <div className="hidden lg:block">
          <MasonryLayout
            userName={"Linda A. "}
            description={
              "The educational workshops were insightful. I learned practical tips for managing my finances, and now I feel more confident making financial decisions."
            }
          />
        </div>
        <div className="hidden lg:block">
          <MasonryLayout
            userName={"David "}
            description={
              "I finally feel in control of my finances, thanks to Barbz "
            }
          />
        </div>
        <div className="hidden lg:block">
          <MasonryLayout
            userName={"Linda A. "}
            description={
              "Hi Barbz! Thank you so much I really appreciate your time and effort. Im grateful. I’ve also made a change to the template. I have removed the miscellaneous amount and added it to transport. I use more than ... on transport."
            }
          />
        </div>

        <div className="hidden lg:block">
          <MasonryLayout
            userName={"Grace A. "}
            description={
              "The debt elimination strategies worked wonders. I’m now on a path to financial freedom, and I can't thank you enough!"
            }
          />
        </div>
        <div className="hidden lg:block">
          <MasonryLayout
            userName={"Emmanuel "}
            description={"Once again I am so grateful. Thank you! "}
          />
        </div>

        <MasonryLayout
          userName={"Oyaso "}
          description={
            "I love how customizable and intuitive the financial templates are"
          }
        />
        <MasonryLayout
          userName={"David "}
          description={
            "Man, these financial templates are a lifesaver! Budgeting has never been easier."
          }
        />
        <MasonryLayout
          userName={"Bruce"}
          description={"BudgetnKe helped me turn my financial life around."}
        />
        <MasonryLayout
          userName={"Jose "}
          description={
            "Simple and effective,Budget KE transformed my budget into a tool for success. I feel in control and optimistic about my financial future."
          }
        />
        <MasonryLayout
          userName={"Daniel"}
          description={
            "I was tired of living paycheck to paycheck and knew I needed to make a change. Barbz empowered me to take control of my finances and set myself up for future success."
          }
        />
      </div>
      <div className="absolute inset-0 z-30 bg-gradient-to-b from-transparent to-[#FFF1F1]"></div>
    </div>
  );
};
