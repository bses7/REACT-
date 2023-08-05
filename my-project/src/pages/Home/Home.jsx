import Hero from "../hero/hero";
import Men from "../../images/men.png";
import women from "../../images/women.png";
import pregnant_women from "../../images/pregnant_women.png";
import children from "../../images/children.png";
import { StarIcon } from "@heroicons/react/24/outline";
import arrival_img from "../../images/arrival_img.png";
import Home_pic from "../../images/Home_pic.png";
import Grey_cosmetic from "../../images/Grey_cosmetic.png";

const Categories_card = ({ category }) => {
  return (
    <div className="relative flex justify-center">
      {category.image}
      <div className="absolute bg-gray-300 px-8 py-4 bottom-[-15px]">
        {category.category}
      </div>
    </div>
  );
};

const Arrival_card = ({ arrival }) => {
  return (
    <div className="px-2">
      <img src={arrival.image} className="w-full" />
      <div className="flex mx-auto ">
        <div>{arrival.review}</div>
        <h1 className="px-5">{arrival.text}</h1>
      </div>
      <h1 className="font-bold">{arrival.heading}</h1>
      <h1 className="font-bold">{arrival.price}</h1>
    </div>
  );
};

const Three_card = ({ three }) => {
  return (
    <div>
      <img src={three.image} className="w-full" />
      <div className="">
        <h1 className="">{three.date}</h1>
      </div>
      <h1 className="font-bold my-[10px]">{three.heading}</h1>
      <p className="py-[8px]">{three.para}</p>
    </div>
  );
};
const Home = () => {
  const categories = [
    {
      category: "For Women",
      image: <img src={Men} alt="" />,
    },
    {
      category: "For Men",
      image: <img src={women} alt="" />,
    },
    {
      category: "For Pregnant Women",
      image: <img src={pregnant_women} alt="" />,
    },
    {
      category: "For Children",
      image: <img src={children} alt="" />,
    },
  ];

  const three = [
    {
      image: arrival_img,
      date: <h1>25th July</h1>,
      heading: <h1>Anti-Acne Serum</h1>,
      para: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          cum pariatur eaque fugit suscipit laboriosam!
        </p>
      ),
    },
    {
      image: arrival_img,
      date: <h1>25th July</h1>,
      heading: <h1>Anti-Acne Serum</h1>,
      para: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          cum pariatur eaque fugit suscipit laboriosam!
        </p>
      ),
    },
    {
      image: arrival_img,
      date: <h1>25th July</h1>,
      heading: <h1>Anti-Acne Serum</h1>,
      para: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          cum pariatur eaque fugit suscipit laboriosam!
        </p>
      ),
    },
  ];

  const arrivals = [
    {
      image: arrival_img,
      review: <StarIcon className="w-6 h-6" />,
      text: <h1>1 Review</h1>,
      heading: <h1>LOREM IPSUM</h1>,
      price: <h1>$4.99</h1>,
      date: <h1>25th July</h1>,
      heading_2: <h1>Anti-Acne Serum</h1>,
    },
    {
      image: arrival_img,
      review: <StarIcon className="w-6 h-6" />,
      text: <h1>1 Review</h1>,
      heading: <h1>LOREM IPSUM</h1>,
      price: <h1>$4.99</h1>,
      date: <h1>25th July</h1>,
    },
    {
      image: arrival_img,
      review: <StarIcon className="w-6 h-6" />,
      text: <h1>1 Review</h1>,
      heading: <h1>LOREM IPSUM</h1>,
      price: <h1>$4.99</h1>,
      date: <h1>25th July</h1>,
    },
    {
      image: arrival_img,
      review: <StarIcon className="w-6 h-6" />,
      text: <h1>1 Review</h1>,
      heading: <h1>LOREM IPSUM</h1>,
      price: <h1>$4.99</h1>,
    },
    {
      image: arrival_img,
      review: <StarIcon className="w-6 h-6" />,
      text: <h1>1 Review</h1>,
      heading: <h1>LOREM IPSUM</h1>,
      price: <h1>$4.99</h1>,
    },
    {
      image: arrival_img,
      review: <StarIcon className="w-6 h-6" />,
      text: <h1>1 Review</h1>,
      heading: <h1>LOREM IPSUM</h1>,
      price: <h1>$4.99</h1>,
    },
    {
      image: arrival_img,
      review: <StarIcon className="w-6 h-6" />,
      text: <h1>1 Review</h1>,
      heading: <h1>LOREM IPSUM</h1>,
      price: <h1>$4.99</h1>,
    },
    {
      image: arrival_img,
      review: <StarIcon className="w-6 h-6" />,
      text: <h1>1 Review</h1>,
      heading: <h1>LOREM IPSUM</h1>,
      price: <h1>$4.99</h1>,
    },
  ];
  return (
    <div className="div">
      <Hero />
      <section>
        <div className="container mx-auto flex gap-24 py-36">
          {categories.map((category) => {
            return <Categories_card category={category} />;
          })}
        </div>
      </section>
      <section>
        <h1 className="text-6xl text-center">New Arrivals!</h1>
        <p className="text-center font-bold my-4 w-[940px] mx-48">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
          enim. Duis in tortor sit amet turpis rutrum fermentum in non arcu.
          Praesent porta auctor odio a suscipit. Quisque sagittis suscipit
          ultricies.
        </p>
        <div className="grid grid-cols-4 gap-4 w-full my-10">
          {arrivals.map((arrival) => {
            return <Arrival_card arrival={arrival} />;
          })}
        </div>
        <button className="rounded-[5px] font-bold border-2 border-slate-950 h-10 w-[11rem] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 hover:text-yellow-300">
          Buy Now
        </button>
      </section>
      <section className="my-[100px]">
        <div className="grid grid-cols-2 gap-0.5">
          <div>
            <img src={Home_pic} alt="" className="mx-[150px]" />
          </div>
          <div className="mx-[40px] py-[50px]">
            <h1 className="text-6xl text-center w-[580px]">About Miralou</h1>
            <p className="w-[600px] py-[50px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              officia hic quibusdam nisi vero nesciunt ab! Velit officia quos
              sapiente unde aliquam ab fuga voluptatem quas facilis
              exercitationem. Architecto culpa excepturi aperiam, porro nam
              magni! Veritatis, saepe voluptatum consequuntur itaque provident
              reprehenderit accusantium pariatur. Animi suscipit nam laboriosam
              reprehenderit vel? Culpa illo, quasi accusantium harum voluptatem
              possimus ut odio repellendus, magnam sunt temporibus nisi fuga? At
              mollitia cum deserunt eius pariatur dolor soluta nihil eum id
              earum aut accusamus culpa similique praesentium fuga assumenda
              itaque repellat a, sunt magni ex, nam eaque! Vero provident unde
              quod impedit et quas repudiandae?
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-6xl text-center">About Miralou</h1>
        <p className="text-center my-4 w-[940px] mx-48">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
          enim. Duis in tortor sit amet turpis rutrum fermentum in non arcu.
          Praesent porta auctor odio a suscipit. Quisque sagittis suscipit
          ultricies.
        </p>
        <div className="grid grid-cols-3 gap-8 w-[1100px] mx-[10%] my-[5%]">
          {three.map((three) => {
            return <Three_card three={three} />;
          })}
        </div>
      </section>
      <section>
        <div className="grid grid-cols-[55%_45%] bg-[#504D67] w-full h-[30%]">
          <div className="grid grid-row-3 w-[500px] h-[60%] mx-auto my-auto text-white gap-4 ">
            <h1 className="text-2xl">
              Get Your Emails For Info On New Items, Sales and More
            </h1>
            <p className="w-[400px] my-[-10px]">
              Subscribe to receive 10% off your next purchase. Plus hear about
              new arrivals and offers
            </p>
            <div className="flex  ">
              <input
                type="text"
                placeholder="Your Email"
                className="w-[100%] h-[100%] "
              />
              <button className="mx-[-180px] my-auto rounded-none font-bold h-10 w-[11rem] bg-[#504D67] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 hover:text-yellow-300">
                Buy Now
              </button>
            </div>
          </div>
          <div className="bg-cover ">
            <img src={Grey_cosmetic} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
