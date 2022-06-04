import { FC } from 'react'
import { Star } from '../../atoms'

interface RatingStarsProps {
  rating: number
}

const RatingStars: FC<RatingStarsProps> = ({ rating }) => {
  return (
    <div className='flex gap-2'>
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Star key={i} active={i >= rating ? false : true} />
      ))}
    </div>
  )
}

export { RatingStars }
