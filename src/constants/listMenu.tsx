import { BiBell, BiHomeCircle, BiMessageMinus } from "react-icons/bi"
import { BsPersonFill, BsPerson } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
import { FiBookmark } from "react-icons/fi"
import { HiOutlineHashtag } from "react-icons/hi"
import { RiFileListLine, RiHome7Fill } from "react-icons/ri"
export const listMenu = [
  {
    key: "home",
    title: "Home",
    iconOutline: <BiHomeCircle />,
    icon: <RiHome7Fill className="mr-3 text-2xl" />,
  },
  {
    key: "explore",
    title: "Explore",
    iconOutline: <HiOutlineHashtag />,
    icon: <HiOutlineHashtag className="mr-3 text-2xl" />,
  },
  {
    key: "noitifications",
    title: "Noitifications",
    iconOutline: <BiBell />,
    icon: <BiBell className="mr-3 text-2xl" />,
  },
  {
    key: "messages",
    title: "Messages",
    iconOutline: <BiMessageMinus />,
    icon: <BiMessageMinus className="mr-3 text-2xl" />,
  },
  {
    key: "bookmarks",
    title: "Bookmarks",
    iconOutline: <FiBookmark />,
    icon: <FiBookmark className="mr-3 text-2xl" />,
  },
  {
    key: "lists",
    title: "Lists",
    iconOutline: <RiFileListLine />,
    icon: <RiFileListLine className="mr-3 text-2xl" />,
  },
  {
    key: "profile",
    title: "Profile",
    iconOutline: <BsPersonFill />,
    icon: <BsPerson className="mr-3 text-2xl" />,
  },
  {
    key: "more",
    title: "More",
    iconOutline: <CgMoreO />,
    icon: <CgMoreO className="mr-3 text-2xl" />,
  },


];
