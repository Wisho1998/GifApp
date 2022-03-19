import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';
import { getRandom } from '../helpers/tool';

const GifGrid = ({category}) => {
  const {data:images, loading} = useFetchGifs(category);
  return ( <>
      <h3>{category}</h3>
      {loading && "loading"}
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