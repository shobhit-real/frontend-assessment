export default function Hero() {
    return (
        <div className="relative h-screen bg-[url('/images/bg.png')] bg-cover bg-center">

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0B0F1A]/75"></div>

            <div className="relative flex justify-between items-center px-8 py-4">
                <div className="flex justify-between items-center gap-6">
                    <h1 className="text-white text-xl font-bold">Stake</h1>

                    <div className="sm:flex gap-6 text-gray-300 hidden">
                        <p className="max-md:text-sm cursor-pointer transition-all ease-in hover:scale-102">Properties</p>
                        <p className="max-md:text-sm cursor-pointer transition-all ease-in hover:scale-102">Digital Assets</p>
                        <p className="max-md:text-sm cursor-pointer transition-all ease-in hover:scale-102">Stake & Earn</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className="text-white cursor-pointer transition-all ease-in hover:scale-102">Login</button>
                    <button className="bg-orange-400 px-4 py-2 rounded-full text-white cursor-pointer transition-all ease-in hover:scale-102">
                        Sign Up
                    </button>
                </div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

                <div className="mt-10 mb-6">
                    <h1 className="text-2xl  sm:text-4xl md:text-6xl font-bold text-white">
                        Discover <span className="text-orange-500">high-growth</span> <br />
                        property investments
                    </h1>

                    <p className="text-gray-300 text-xs sm:text-base mt-4 max-w-[80%] mx-auto">
                        Join the CEG Equity Token batch. Start building your portfolio with fractional ownership of global assets.
                    </p>

                    <button className="mt-4 bg-orange-400 px-4 py-1 sm:px-6 sm:py-3 rounded-full text-white font-semibold group cursor-pointer transition-all ease-in hover:scale-102 ">
                        Start Earning Now →
                    </button>
                </div>

                <div className="px-3">
                    <div className="rounded-2xl p-4 shadow-lg flex flex-col md:flex-row items-center gap-y-16 gap-x-16 mx-10">
                        <div className="relative w-full md:w-[65%] mx-auto md:ml-7">
                            <img
                                src="/images/villa.png"
                                alt="villa"
                                className="rounded-xl w-full object-cover"
                            />
                            <img src="/images/jigsaw.png" alt="jigsaw" className="h-[46%] absolute top-[40%] left-[47%]" />
                            <img src="/images/arrow.png" alt="arrow" className="hidden md:block h-[19%] absolute top-[53%] left-[72%]" />

                            <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-[#0B0F1A] to-transparent rounded-xl"></div>

                        </div>

                        <div className="max-md:flex flex-col mt-8 justify-center max-md:h-26 max-md:items-center gap-4 md:flex-1">
                            <div className="text-white text-2xl md:text-[54px] md:leading-[3.25rem] w-full md:w-[80%]">
                                <p className="font-bold text-start">
                                    Access premium property ownership
                                </p>
                                <p className="text-orange-400 font-bold mt-2 text-start">for $150</p>
                            </div>
                            <div className="bg-[#111827]/80 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-3 shadow-lg w-[220px] mt-5">
                                {/* Top row */}
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                                        S
                                    </div>
                                    <p>All Time Returns</p>
                                </div>

                                {/* Amount */}
                                <div className="flex items-end justify-between mt-2">
                                    <p className="text-white text-xl font-bold">
                                        AED 165,000
                                    </p>
                                    <p className="text-green-400 text-[13px] font-semibold">
                                        +111%
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}