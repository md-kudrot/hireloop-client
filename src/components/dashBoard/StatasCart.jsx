"use client"

export default function StatsCard({ icon: Icon, label, value }) {
    return (
        <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 rounded-lg p-6 transition-all duration-300 hover:bg-gray-900/70 hover:shadow-lg hover:shadow-blue-500/10">
            {/* Icon Container */}
            <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 group-hover:bg-blue-600/20 transition-colors">
                <Icon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
            </div>

            {/* Label */}
            <p className="text-sm text-gray-400 mb-2">{label}</p>

            {/* Value */}
            <h3 className="text-3xl sm:text-4xl font-bold text-white">{value}</h3>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-blue-500/0 transition-all duration-300 pointer-events-none"></div>
        </div>
    )
}
