import { FC, MouseEventHandler } from 'react'
import {
  FiSearch,
  FiUser,
  FiSettings,
  FiFilter,
  FiHeart,
  FiTwitter
} from 'react-icons/fi'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { SiRottentomatoes } from 'react-icons/si'
import { IoCaretBackCircle } from 'react-icons/io5'
interface IconProps {
  type: keyof typeof iconList
  className?: string
  onClick?: MouseEventHandler
}

const iconList = {
  filter: FiFilter,
  heart: FiHeart,
  search: FiSearch,
  settings: FiSettings,
  user: FiUser,
  emptyStar: FaRegStar,
  filledStar: FaStar,
  rotten: SiRottentomatoes,
  twitter: FiTwitter,
  back: IoCaretBackCircle
}

const Icon: FC<IconProps> = ({ type, className, onClick }) => {
  const SelectedIcon = iconList[type]
  return <SelectedIcon onClick={onClick} className={className} />
}

export { Icon }
