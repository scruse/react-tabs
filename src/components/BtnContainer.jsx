const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  const setActiveBtn = (index) => {
    setCurrentItem(index)
  }

  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            className={currentItem === index ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setActiveBtn(index)}
            key={index}
          >
            {job}
          </button>
        )
      })}
    </div>
  )
}

export default BtnContainer
