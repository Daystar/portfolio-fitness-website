import FooterLogo from "../../images/logo/logo-footer.svg";

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding pt-[7rem] pb-[5rem]">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col  min620:items-center min620:text-center min620:gap-[10rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/3  gap-8 min620:w-2/3 min620:gap-16 min620:items-center min620:text-center">
              <img src={FooterLogo} alt="footer_logo" className="w-[18rem] min620:w-[25rem]" />
              <p className="text-[15px] font-medium text-[#646464]  ">
                Elevate your health and transform your physique with our all-inclusive program meticulously crafted to help you attain your fitness objectives.
              </p>
              {/* socials */}
              <div className="flex gap-10 text-[18px] text-[#646464] min540:justify-center min540:mt-10">
                <a href="https://www.linkedin.com/in/sagar-koli/" target="_blank" rel="norefferrer">  <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-linkedin-in bg-[#efefef] p-4 rounded-full px-[11.5px] hover:bg-[#ff0366] hover:text-white"
                ></i></a>
                {/* <a href="https://twitter.com/Sagar33732459" target="_blank" rel="norefferrer"> <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-twitter bg-[#efefef] p-4 rounded-full  hover:bg-[#ff0366] hover:text-white"
                ></i></a> */}
                <a href="https://github.com/Daystar" target="_blank" rel="norefferrer"><i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-github bg-[#efefef] p-4 rounded-full px-[11.5px] hover:bg-[#ff0366] hover:text-white"
                ></i></a>
                <a href="https://www.youtube.com/@daystar_bob" target="_blank" rel="norefferrer">  <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i></a>
              </div>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Classes</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Fitness Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Aerobics Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Power Yoga
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Learn Machines
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Full-body Strength
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 9:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 7:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
        {/* bottom div */}
        <div className="text-center bg-gray-500">
          <p className="text-[16px] font-medium text-[#fffdfd] ">
            Privacy Policy | © 2023 Fitness Anytime
            
          </p>

        </div>
      </footer>
    </>
  );
}

export default Footer;
