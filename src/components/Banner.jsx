import { AiOutlineMail } from "react-icons/ai";

const Banner = () => {
  return (
    <section className="flex flex-col gap-4 lg:flex-row justify-between items-stretch">
      <div className="bg-emerald-100 flex flex-col-reverse lg:flex-row items-center justify-between p-8 rounded-xl lg:w-[66%] shadow-md">
        <div className="space-y-4">
          <h2 className="font-semibold text-4xl text-emerald-800">
            Welcome back 👋 Jaydon Frankie
          </h2>
          <p className="text-emerald-500">
            If you are going to use passage of Lorem Ipusm, you need to be sure
            thera isnt anything
          </p>
          <button className="p-2  rounded-md w-full lg:w-20 bg-emerald-600 text-white font-semibold">
            Go Now
          </button>
        </div>
        <img src="/analytics.png" alt="" className="w-[30%]" />
      </div>
      <div className="w-full lg:w-[32%] rounded-xl overflow-hidden shadow-md">
        <img src="/background.jpg" alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Banner;
