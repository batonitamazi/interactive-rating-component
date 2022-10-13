import React, { useState } from 'react'



const ratings = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
]

function RatingCard() {
  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState(false)
  const handleClick = (e) => {
    setRating(Number(e.target.value))
  }
  const handleSubmit = () => {
    if (Number(rating) > 0) {
      setSubmit(true)
    }
  }
  return (
    <div className='rating--container'>
      {submit ? (
        <>
          <div className='thanks--component--card'>
            <div className='thank--image--container'>
              <img src='/assets/illustration-thank-you.svg' alt='thank you image' id='thank-you' />
            </div>
            <div className='submit--value--container'>
              you rate us {rating} out of 5
            </div>
            <h1 className='card--header'>Thank you</h1>
            <p className='card--thank--paragraph'>
              We appreciate you taking the
              time to give a rating. If
              you ever need more support,
              don’t hesitate to get in touch!
            </p>
          </div>

        </>
      ) : (
        <>
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
            {ratings.map((rate, index) => {
              return (
                <button className={rating === rate.value ? 'rounded--container--choosen' : 'rounded--container'} value={rate.value} key={index} onClick={handleClick}>
                  {rate.value}
                </button>
              )
            })}
          </div>
          <button className='submit--button' onClick={handleSubmit}>
            Submit
          </button>
        </>
      )}

    </div>
  )
}

export default RatingCard