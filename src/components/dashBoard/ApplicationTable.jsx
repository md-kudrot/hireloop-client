import { FileText, Users, Zap, Check, Building2, MapPin } from "@gravity-ui/icons"
import React from "react"

const ApplicationTable = () => {
    // Mock Data - Recent Applications
    const applications = [
        {
            id: 1,
            name: "Julianne Moore",
            role: "Senior Product Designer",
            dateApplied: "Oct 24, 2023",
            experience: "6 years",
            status: "Interviewing",
            initials: "JM"
        },
        {
            id: 2,
            name: "Robert Downey",
            role: "Backend Engineer",
            dateApplied: "Oct 23, 2023",
            experience: "4 years",
            status: "New",
            initials: "RD"
        },
        {
            id: 3,
            name: "Emma Stone",
            role: "Marketing Lead",
            dateApplied: "Oct 22, 2023",
            experience: "8 years",
            status: "Reviewing",
            initials: "ES"
        },
        {
            id: 4,
            name: "Chris Pratt",
            role: "Product Manager",
            dateApplied: "Oct 21, 2023",
            experience: "5 years",
            status: "Rejected",
            initials: "CP"
        }
    ]

    // Mock Data - Top Companies
    const topCompanies = [
        {
            id: 1,
            name: "Google Inc.",
            category: "Technology • Mountain View",
            activeJobs: 24,
            icon: "🔵"
        },
        {
            id: 2,
            name: "Meta Platforms",
            category: "Social Media • Menlo Park",
            activeJobs: 18,
            icon: "📘"
        },
        {
            id: 3,
            name: "Stripe",
            category: "Fintech • San Francisco",
            activeJobs: 12,
            icon: "⚙️"
        },
        {
            id: 4,
            name: "Tesla",
            category: "Automotive • Austin",
            activeJobs: 31,
            icon: "⚡"
        }
    ]

    // Helper function to get status badge color
    const getStatusColor = (status) => {
        const statusColors = {
            Interviewing: "bg-green-900/30 text-green-400 border border-green-700",
            New: "bg-blue-900/30 text-blue-400 border border-blue-700",
            Reviewing: "bg-orange-900/30 text-orange-400 border border-orange-700",
            Rejected: "bg-red-900/30 text-red-400 border border-red-700"
        }
        return statusColors[status] || "bg-gray-700 text-gray-300"
    }

    // Helper function to get avatar background color
    const getAvatarColor = (initials) => {
        const colors = ["bg-blue-600", "bg-purple-600", "bg-pink-600", "bg-green-600", "bg-yellow-600", "bg-red-600"]
        const index = initials.charCodeAt(0) % colors.length
        return colors[index]
    }

    return (
        <div className="bg-transparent text-white min-h-screen p-6">
            <div className="">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Recruiter Dashboard</h1>
                    <p className="text-gray-400 mt-2">Manage your job applications and top companies</p>
                </div>

                {/* Main Grid - Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Applications - Takes 2 columns */}
                    <div className="lg:col-span-2 bg-gray-900 rounded-lg p-6 border border-gray-800">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Recent Applications</h2>
                            <button className="text-sm text-blue-400 hover:text-blue-300 transition">View all</button>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-800">
                                        <th className="text-left py-4 px-3 text-gray-400 font-medium">
                                            Candidate Name
                                        </th>
                                        <th className="text-left py-4 px-3 text-gray-400 font-medium">Role</th>
                                        <th className="text-left py-4 px-3 text-gray-400 font-medium">Date Applied</th>
                                        <th className="text-left py-4 px-3 text-gray-400 font-medium">Experience</th>
                                        <th className="text-left py-4 px-3 text-gray-400 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {applications.map((app) => (
                                        <tr
                                            key={app.id}
                                            className="border-b border-gray-800 hover:bg-gray-800/50 transition"
                                        >
                                            {/* Candidate Name with Avatar */}
                                            <td className="py-4 px-3">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`w-10 h-10 rounded-full ${getAvatarColor(app.initials)} flex items-center justify-center font-semibold text-sm`}
                                                    >
                                                        {app.initials}
                                                    </div>
                                                    <span className="font-medium">{app.name}</span>
                                                </div>
                                            </td>
                                            {/* Role */}
                                            <td className="py-4 px-3 text-gray-300">{app.role}</td>
                                            {/* Date Applied */}
                                            <td className="py-4 px-3 text-gray-400">{app.dateApplied}</td>
                                            {/* Experience */}
                                            <td className="py-4 px-3 text-gray-400">{app.experience}</td>
                                            {/* Status Badge */}
                                            <td className="py-4 px-3">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}
                                                >
                                                    {app.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* My Top Companies - Right Column */}
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 h-fit">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">My Top Companies</h2>
                            <button className="text-sm text-blue-400 hover:text-blue-300 transition">View all</button>
                        </div>

                        {/* Companies List */}
                        <div className="space-y-4">
                            {topCompanies.map((company) => (
                                <div
                                    key={company.id}
                                    className="flex items-start gap-4 pb-4 border-b border-gray-800 last:border-b-0 last:pb-0 hover:bg-gray-800/30 p-3 rounded transition cursor-pointer"
                                >
                                    {/* Company Icon */}
                                    <div className="w-12 h-12 rounded bg-gray-800 flex items-center justify-center text-lg flex-shrink-0">
                                        {company.icon}
                                    </div>

                                    {/* Company Info */}
                                    <div className="flex-grow min-w-0">
                                        <h3 className="font-semibold text-white">{company.name}</h3>
                                        <p className="text-xs text-gray-400 mt-1">{company.category}</p>
                                    </div>

                                    {/* Active Jobs Count */}
                                    <div className="text-right flex-shrink-0">
                                        <p className="text-lg font-bold text-white">{company.activeJobs}</p>
                                        <p className="text-xs text-gray-500">ACTIVE JOBS</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Companies Button */}
                        <button className="w-full mt-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-gray-600 hover:bg-gray-800/50 transition font-medium">
                            View All Companies
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationTable
