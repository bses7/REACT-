import Button from "C:/Users/user/Desktop/hello/project1/my-project/src/Buttons/button.jsx";

const Hero = () => {
  return <Wrapper> </Wrapper>;
};
const Wrapper = () => {
  return (
    <body>
      <div className=" h-[32rem] w-100% bg-[url('C:/Users/user/Desktop/hello/project1/my-project/src/images/hero_1.png')] bg-contain">
        <div className="grid grid-rows-3  gap-4 Capitalized 500 ml-[250px] pt-[8%]">
          <h1 className="text-6xl text-[#3F3F46] w-[200px] leading-[83.2pxpx] font-semibold">
            Scandinavian Supremacy
          </h1>
          <p className="text-sm/[24px] leading-[25px] text-black w-[380px] pt-[25px] font-medium">
            At miralou we have turned traditional skin care ingredients lists on
            its head
          </p>
          <Button className=""></Button>
        </div>
      </div>
    </body>
  );
};
export default Hero;
