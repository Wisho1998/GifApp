import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {
  const {data:images, loading} = useFetchGifs(category);
  return ( <>
      <h3 className='animate__animated animate__slideInRight'>{category}</h3>
      <i className='animate__animated animate__flash'>{loading && "loading"}</i>
      <section className='gallery-content'>
        {
          images.map((img,index) => (
            <GifGridItem 
              key={img.id} 
              {...img}
            />
          ))
        }
      </section>
    </>
  )
}

export default GifGrid