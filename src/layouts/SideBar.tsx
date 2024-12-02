import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Home,
  Library,
  Repeat,
  Flame,
  ShoppingBag,
  Music2,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Podcast,
} from "lucide-react"
import { Children, ElementType, ReactNode, useContext, useState } from "react"
import { Button, buttonStyles } from "../components/Button"
import { twMerge } from "tailwind-merge"
import { useSidebarContext } from "../context/SidebarContext"
import { PageHeaderFirstSection } from "./PageHeader"
import { Context } from "../context/ContextApi"

export function Sidebar() {
  const { selectedCategory } = useContext(Context);
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext()

  return (
    <>
      <aside
        className={`sticky top-0 scrollbar-hidden pb-4 flex flex-col ${isLargeOpen ? "lg:hidden" : "lg:flex"
          }`}
      >
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"
        />
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${isLargeOpen ? "lg:flex" : "lg:hidden"
          } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
          <PageHeaderFirstSection />
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem IconOrImgUrl={Home} title="Home" url="/" isActive={selectedCategory === "Home"} />
          <LargeSidebarItem
            IconOrImgUrl={Clapperboard}
            title="Subscriptions"
            url="/subscriptions"
            isActive={selectedCategory === "Subscriptions"}
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem
            IconOrImgUrl={Flame}
            title="Trending"
            url="/trending"
            isActive={selectedCategory === "Trending"}
          />
          <LargeSidebarItem
            IconOrImgUrl={ShoppingBag}
            title="Shopping"
            url="/shopping"
            isActive={selectedCategory === "Shopping"}
          />
          <LargeSidebarItem IconOrImgUrl={Music2} title="Music" url="/music" isActive={selectedCategory === "Music"} />
          <LargeSidebarItem
            IconOrImgUrl={Film}
            title="Movies & TV"
            url="/movies-tv"
            isActive={selectedCategory === "Movies & TV"}
          />
          <LargeSidebarItem IconOrImgUrl={Radio} title="Live" url="/live" isActive={selectedCategory === "Live"} />
          <LargeSidebarItem
            IconOrImgUrl={Gamepad2}
            title="Gaming"
            url="/gaming"
            isActive={selectedCategory === "Gaming"}
          />
          <LargeSidebarItem IconOrImgUrl={Newspaper} title="News" url="/news" isActive={selectedCategory === "News"} />
          <LargeSidebarItem
            IconOrImgUrl={Trophy}
            title="Sports"
            url="/sports"
            isActive={selectedCategory === "Sports"}
          />
          <LargeSidebarItem
            IconOrImgUrl={Lightbulb}
            title="Learning"
            url="/learning"
            isActive={selectedCategory === "Learning"}
          />
          <LargeSidebarItem
            IconOrImgUrl={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
            isActive={selectedCategory === "Fashion & Beauty"}
          />
          <LargeSidebarItem
            IconOrImgUrl={Podcast}
            title="Podcasts"
            url="/podcasts"
            isActive={selectedCategory === "Podcasts"}
          />
        </LargeSidebarSection>
      </aside>
    </>
  )
}

type SmallSidebarItemProps = {
  Icon: ElementType
  title: string
  url: string
  isActive?: boolean
}

function SmallSidebarItem({ Icon, title, url, }: SmallSidebarItemProps) {
  const { setSelectedCategory } = useContext(Context);
  return (
    <a
      href={url}
      onClick={(e) => {
        e.preventDefault();
        setSelectedCategory(title);
      }}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1 text-wrap"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  )
}

type LargeSidebarSectionProps = {
  children: ReactNode
  title?: string
  visibleItemCount?: number
}

function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = Children.toArray(children).flat()
  const showExpandButton = childrenArray.length > visibleItemCount
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount)
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded(e => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  )
}

type LargeSidebarItemProps = {
  IconOrImgUrl: ElementType | string
  title: string
  url: string
  isActive?: boolean
}

function LargeSidebarItem({
  IconOrImgUrl,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) {
  const { setSelectedCategory } = useContext(Context);
  return (
    <a
      href={url}
      onClick={(e) => {
        e.preventDefault();
        setSelectedCategory(title);
      }}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      {typeof IconOrImgUrl === "string" ? (
        <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
      ) : (
        <IconOrImgUrl className="w-6 h-6" />
      )}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  )
}