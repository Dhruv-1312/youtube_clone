import { ArrowLeft, Bell, Menu, Mic, Search, UserCircle, Video } from "lucide-react"
import yt_logo from "../assets/yt_logo.png"
import { Button } from "../components/Button"
import { useState } from "react"
import { useSidebarContext } from "../context/SidebarContext"
import { useNavigate } from "react-router-dom"
const PageHeader = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const { toggle } = useSidebarContext()
    const [showFullWidth, setshowfullwidth] = useState<boolean>(false)

    const navigate = useNavigate();

    const searchQueryHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchQuery?.length > 0) {
            navigate(`/searchResult/${searchQuery}`);
        }
    };
    return (
        <div className="flex  gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
            <div className={`gap-4 items-center flex-shrink-0 ${showFullWidth ? "hidden" : "flex"}`}>
                <Button onClick={toggle} variant="ghost" size="icon">
                    <Menu />
                </Button> 
                <a href="/">
                    <img src={yt_logo} className="h-6" />
                </a>
            </div>
            <form onSubmit={searchQueryHandler} className={`md:flex gap-4 flex-grow justify-center ${showFullWidth ? "flex" : "hidden"}`}>
                <div className="flex flex-grow max-w-[600px]">
                    {(showFullWidth) ? <Button variant="ghost" size="icon" onClick={() => setshowfullwidth(false)}>
                        <ArrowLeft></ArrowLeft>
                    </Button> :
                        null
                    }
                    <input onChange={(e) => setSearchQuery(e.target.value)} type="search" placeholder="Search" className="rounded-l-full border border-secondary-border shadow-inner
                    shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" />
                    <Button type="submit" className="rounded-r-full border border-secondary-border">
                        <Search />
                    </Button>
                </div>
                <Button type="button" size="icon" className="flex-shrink-0">
                    <Mic />
                </Button>
            </form>
            <div className={`flex flex-shrink-0 md: gap-2 ${showFullWidth ? "hidden" : "flex"}`}>
                <Button onClick={() => setshowfullwidth(true)} variant="ghost" size="icon" className="md:hidden">
                    <Search />
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Mic />
                </Button>
                <Button variant="ghost" size="icon">
                    <Video />
                </Button>
                <Button variant="ghost" size="icon">
                    <Bell />
                </Button>
                <Button variant="ghost" size="icon">
                    <UserCircle />
                </Button>
            </div>
        </div>
    )
}

type PageHeaderFirstSectionProps = {
    hidden?: boolean
}

export function PageHeaderFirstSection({
    hidden = false,
}: PageHeaderFirstSectionProps) {
    const { toggle } = useSidebarContext()

    return (
        <div
            className={`gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"
                }`}
        >
            <Button onClick={toggle} variant="ghost" size="icon">
                <Menu />
            </Button>
            <a href="/">
                <img src={yt_logo} className="h-6" />
            </a>
        </div>
    )
}

export default PageHeader
