import './featuredProperties.css'
import useFetch from '../hooks/useFetch'

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch()
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/450409111.jpg?k=39fa0e03c43dcb2bc2ddd9b1523e1762087a7b6db0debdeda3d9088be3feaff4&o=&hp=1" alt="" />
        <span className="fpName">Aparthotel stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/450409111.jpg?k=39fa0e03c43dcb2bc2ddd9b1523e1762087a7b6db0debdeda3d9088be3feaff4&o=&hp=1" alt="" />
        <span className="fpName">Aparthotel stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/450409111.jpg?k=39fa0e03c43dcb2bc2ddd9b1523e1762087a7b6db0debdeda3d9088be3feaff4&o=&hp=1" alt="" />
        <span className="fpName">Aparthotel stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/450409111.jpg?k=39fa0e03c43dcb2bc2ddd9b1523e1762087a7b6db0debdeda3d9088be3feaff4&o=&hp=1" alt="" />
        <span className="fpName">Aparthotel stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties