import { 
    AiFillHome, 
    AiOutlineFlag 
  } from 'react-icons/ai';
  import { 
    MdLocalFireDepartment, 
    MdLiveTv 
  } from 'react-icons/md';
  import { CgMusicNote } from 'react-icons/cg';
  import { 
    FiFilm, 
    FiSettings, 
    FiHelpCircle 
  } from 'react-icons/fi';
  import { IoGameControllerSharp } from 'react-icons/io5';
  import { ImNewspaper } from 'react-icons/im';
  import { 
    GiDiamondTrophy, 
    GiEclipse 
  } from 'react-icons/gi';
  import { 
    RiLightbulbLine, 
    RiFeedbackLine 
  } from 'react-icons/ri';
import { IconType } from 'react-icons';

type SidebarItem = {
    IconOrImgUrl: IconType
    title: string
    url: string
    isActive?: boolean
  }

  export const sidebarItems: SidebarItem[] = [
    {
      IconOrImgUrl: AiFillHome,
      title: "Home",
      url: "/",
      isActive: true
    },
    {
      IconOrImgUrl: MdLocalFireDepartment,
      title: "Trending",
      url: "/trending"
    },
    {
      IconOrImgUrl: CgMusicNote,
      title: "Music",
      url: "/music"
    },
    {
      IconOrImgUrl: FiFilm,
      title: "Films",
      url: "/films"
    },
    {
      IconOrImgUrl: MdLiveTv,
      title: "Live",
      url: "/live"
    },
    {
      IconOrImgUrl: IoGameControllerSharp,
      title: "Gaming",
      url: "/gaming"
    },
    {
      IconOrImgUrl: ImNewspaper,
      title: "News",
      url: "/news"
    },
    {
      IconOrImgUrl: GiDiamondTrophy,
      title: "Sports",
      url: "/sports"
    },
    {
      IconOrImgUrl: RiLightbulbLine,
      title: "Learning",
      url: "/learning"
    },
    {
      IconOrImgUrl: GiEclipse,
      title: "Fashion & Beauty",
      url: "/fashion-beauty"
    },
    {
      IconOrImgUrl: FiSettings,
      title: "Settings",
      url: "/settings"
    },
    {
      IconOrImgUrl: AiOutlineFlag,
      title: "Report History",
      url: "/report-history"
    },
    {
      IconOrImgUrl: FiHelpCircle,
      title: "Help",
      url: "/help"
    },
    {
      IconOrImgUrl: RiFeedbackLine,
      title: "Send Feedback",
      url: "/feedback"
    }
  ];

export const playlists = [
    { id: "1", name: "Frontend & Backend" },
    { id: "2", name: "Favorites" },
    { id: "3", name: "React" },
    { id: "4", name: "Non-Dev" },
    { id: "5", name: "TypeScript" },
  ]


  export const subscriptions = [
    {
      channelName: "Fireship",
      id: "Fireship",
      imgUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      channelName: "Caleb Curry",
      id: "CalebCurry",
      imgUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      channelName: "Web Dev Simplified",
      id: "WebDevSimplified",
      imgUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    {
      channelName: "Kevin Powell",
      id: "KevinPowell",
      imgUrl:
        "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
    },
    {
      channelName: "Sonny Sangha",
      id: "SonnySangha",
      imgUrl:
        "https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      channelName: "Traversy Media",
      id: "TraversyMedia",
      imgUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj-mo",
    },
  ]
  