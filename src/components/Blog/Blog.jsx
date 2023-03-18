import TitleRed from "../../images/who-we-are/title-bg.svg";
import BlogBox from "./BlogBox";

function Blog() {
  return (
    <>
      <section id="blog" className="bg-white ">
        <div className="container page-padding py-[10rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              latest blog
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]"
            />

            <h2 className="text-[3.4rem] font-bold mb-4">Our Recent News</h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Fitness Anytime an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>

          {/* blog boxes */}
          <div className="flex gap-6 w-full mt-[5rem] md1200:justify-center flex-wrap">
            <BlogBox
              bgClass="box1Bg"
              date="22.03.2022"
              title="Yoga For Everyone in 2023"
              description="Yoga has become an increasingly popular fitness activity and relaxation technique, accessible to people of all ages and abilities. As we enter 2022, yoga remains a versatile and holistic approach to wellness, offering benefits such as increased flexibility, stress reduction, and improved overall health. "
            />
            <BlogBox
              bgClass="box2Bg"
              date="13.09.2022"
              title="Getting Back Into CrossFit After Vacation"
              description="Returning to CrossFit after vacation can be challenging, but taking it slow and easing back into your routine is key. Start with a light workout and gradually increase intensity and volume. Focus on form and listen to your body to prevent injury."
            />
            <BlogBox
              bgClass="box3Bg"
              date="28.06.2022"
              title="Meet Fitness Ambassador Anny"
              description="She is a fitness ambassador who inspires and motivates others to prioritize their health & fitness. With a background in dance & fitness, she leads by example through her dedication to an active lifestyle. She believes in the power of fitness to improve both physical & mental well-being."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
