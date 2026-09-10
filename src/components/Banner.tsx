import banner from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="flex justify-between container mx-auto items-center">
            <div>
             <h1 className="text-8xl" >Build Your Ideal <br /> <span class="bg-gradient-to-r from-[#FE5525] via-[#E22667] to-[#8637E1] bg-clip-text text-transparent">Development Stack</span></h1>
             <p className="mt-8">Explore frontend, backend, database, and tooling options, <br /> compare them side by side, and put together the stack that fits your <br /> next project.</p>
             <div className="flex gap-2 mt-8">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg">Explore Technologies</button>
                <button className="border border-[#E5E7EB] px-7 rounded-2xl">Learn More</button>
             </div>
            </div>

            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;