import { FC } from 'react'
import { getUser } from '../../../services/auth/useCases'
import { Icon } from '../../atoms'
import { RatingStars } from '../../molecules'
import { useNavigate } from 'react-router-dom'

interface MovieCardProps {
  image: string
  name: string
  duration: string
  year: string
  rotten: string
  rating?: number
  id: string
}

const MovieCard: FC<MovieCardProps> = props => {
  const { image, name, duration, year, rotten, rating = 0, id } = props
  const { isAuth } = getUser()
  const navigate = useNavigate()

  const goToDetail = () => (isAuth ? navigate(id) : null)

  return (
    <section
      onClick={goToDetail}
      className=' last-of-type:mb-28 flex overflow-hidden rounded-md bg-gradient-to-tr to-slate-700 from-slate-900 bg-opacity-80 backdrop-blur-sm'
    >
      <img
        src={image}
        alt={`poster of ${name}`}
        className='w-1/4 flex-shrink-0'
      />
      <div className='p-3 flex flex-col justify-between flex-grow'>
        <div className='flex justify-between'>
          <h3>{name}</h3>
          {isAuth && <Icon type='heart' className='right-5 text-2xl' />}
        </div>
        <div className='flex justify-between items-end'>
          <div>
            <p>Duration: {duration} mins</p>
            <p>Year: {year}</p>
          </div>
          {isAuth && <p className='text-2xl'>😱</p>}
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Icon type='rotten' className='text-xl' />
            <small>{rotten}%</small>
          </div>
          {isAuth && <RatingStars rating={rating} />}
        </div>
      </div>
    </section>
  )
}

export { MovieCard }
