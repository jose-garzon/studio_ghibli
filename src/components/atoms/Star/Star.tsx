import { FC } from 'react'
import { Icon } from '../Icon'

interface StartProps {
  active: boolean
}

const Star: FC<StartProps> = ({ active }) => {
  return <Icon type={active ? 'filledStar' : 'emptyStar'} />
}

export { Star }
