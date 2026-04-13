const batches = [
    { name: "Batch 1", price: "$4,000" },
    { name: "Batch 2", price: "$4,250" },
    { name: "Batch 3", price: "$4,500" },
    { name: "Batch 4", price: "$4,750", active: true },
    { name: "Batch 5", price: "$5,000" },
    { name: "Batch 6", price: "$5,250" },
];

export default function Pricing() {
    return (
        <div>
            <div className="mt-40 w-full md:w-[90%] mx-auto md:mt-20 px-6 h-[20vw]">
                <div className="mx-auto">
                    {/* 🔥 Main Container */}
                    <div className="rounded-2xl p-6 border border-white/10 backdrop-blur-lg shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden">

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-transparent to-orange-400/20 pointer-events-none"></div>

                        {/* Header */}
                        <div className="flex max-md:flex-col justify-between md:items-center mb-6 relative z-10 gap-4">
                            <h2 className="text-orange-400 font-semibold md:text-lg max-md:w-full">
                                Price Progression (200 Tokens)
                            </h2>

                            {/* Badges */}
                            <div className="flex gap-2">
                                <span className="text-xs px-3 py-1 rounded-md bg-gray-200 text-black font-medium">
                                    SOLD OUT 1-3
                                </span>
                                <span className="text-xs px-3 py-1 rounded-md bg-green-200 text-green-900 font-medium">
                                    ACTIVE 4
                                </span>
                            </div>
                        </div>

                        {/* Batches */}
                        <div className="flex gap-4 relative overflow-x-auto">

                            {batches.map((batch, i) => (
                                <div
                                    key={i}
                                    className={`min-w-32 w-[45%] px-5 py-4 rounded-xl border transition-all duration-300 cursor-pointer ${batch.active
                                            ? "border-orange-400 bg-[#0F1A2B] shadow-[0_0_20px_rgba(255,140,0,0.3)]"
                                            : "border-white/10 bg-[#0F1A2B]/60"
                                        }`}
                                >
                                    <p className="text-gray-400 text-sm">{batch.name}</p>
                                    <p
                                        className={`font-bold text-lg ${batch.active ? "text-orange-400" : "text-white"
                                            }`}
                                    >
                                        {batch.price}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}