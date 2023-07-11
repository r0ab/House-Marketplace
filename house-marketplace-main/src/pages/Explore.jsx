import React from 'react'
import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from'../assets/jpg/sellCategoryImage.jpg'
function Explore() {
  return (
    <div>
    <header>
      <p className="pageHeader">Exlore</p>
    </header>
    <main>
      {/* {slider} */}

      <p className="exploreCategoryHeading">Catagories</p>
      <div className="exploreCategories">
        <Link to='/category/rent'>
          <img src={rentCategoryImage} alt="rent" className='exploreCategoryImg' />
          <p className="exploreCategoryName">Places for rent</p>
        </Link>
        <Link to='/category/sell'>
          <img src={sellCategoryImage} alt="sale" className='exploreCategoryImg' />
          <p className="exploreCategoryName">Places for sale</p>
        </Link>
      </div>
    </main>
    {/* <h1>Explore</h1> */}
    </div>
  )
}

export default Explore