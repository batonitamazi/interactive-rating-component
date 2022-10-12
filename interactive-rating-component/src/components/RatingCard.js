import React from 'react'

function RatingCard() {
  return (
    <div className='rating--container'>
      <div className='rounded--container'>
        <img src='/assets/icon-star.svg' alt='star icon' id='star' />
      </div>
      <h1 className='card--header'>How Did we do?</h1>
      <p className='card--paragraph'>
        Please let us know how we did with
        your support request. All feedback
        is appreciated to help us improve our offering!
      </p>
      <div className='rating--button--container'>
        <div className='rounded--container'>
          5
        </div>
        <div className='rounded--container'>
          5
        </div>
        <div className='rounded--container'>
          5
        </div>
        <div className='rounded--container'>
          5
        </div>
        <div className='rounded--container'>
          5
        </div>
      </div>
      <button className='submit--button'>
        Submit
      </button>
    </div>
  )
}

export default RatingCard