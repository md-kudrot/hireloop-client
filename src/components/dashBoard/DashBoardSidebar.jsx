import { auth } from "@/lib/auth"
import { LayoutSideContentLeft, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons"
import { Button, Drawer } from "@heroui/react"
import { headers } from "next/headers"
import Link from "next/link"

export async function DashBoardSidebar() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user
    const role = user?.role.toLowerCase() || "recruiter"
    console.log(role)

    const navItems = {
        job_seeker: [
            { icon: "House", label: "Home", link: "/dashboard/job_seeker" },
            { icon: Magnifier, label: "Search", link: "/dashboard/job_seeker/search" },
            { icon: Bell, label: "Notifications", link: "/dashboard/job_seeker/notifications" },
            { icon: Envelope, label: "Messages", link: "/dashboard/job_seeker/messages" },
            { icon: Person, label: "Profile", link: "/dashboard/job_seeker/profile" },
            { icon: Gear, label: "Settings", link: "/dashboard/job_seeker/settings" }
        ],
        recruiter: [
            { icon: "House", label: "Home", link: "/dashboard/recruiter" },
            { icon: Magnifier, label: "Search", link: "/dashboard/recruiter/search" },
            { icon: Bell, label: "Notifications", link: "/dashboard/recruiter/notifications" },
            { icon: Envelope, label: "Post Job", link: "/dashboard/recruiter/jobs/new" },
            { icon: Person, label: "Profile", link: "/dashboard/recruiter/profile" },
            { icon: Gear, label: "Settings", link: "/dashboard/recruiter/settings" }
        ]
    }
    // console.log(navItems.recruiter.icon)

    // const navItems = [
    //     { icon: House, label: "Home" },
    // { icon: Magnifier, label: "Search" },
    // { icon: Bell, label: "Notifications" },
    // { icon: Envelope, label: "Messages" },
    // { icon: Person, label: "Profile" },
    // { icon: Gear, label: "Settings" }
    // ]

    const navContent = (
        <nav className="flex flex-col gap-1">
            {navItems[role]?.map((item, index) => (
                <Button key={index} variant="ghost" className="justify-start w-full" asChild>
                    <Link href={item?.link} className="flex items-center">
                        {item.icon === "House" ? <House /> : <item.icon />} {/* Render the icon */}
                        <span className="ml-3">{item.label}</span>
                    </Link>
                </Button>
            ))}
        </nav>
    )

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default md:block p-4 h-screen">{navContent}</aside>
            <Drawer>
                <Button variant="secondary" className={"lg:hidden"}>
                    <LayoutSideContentLeft />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>{navContent}</Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    )
}
