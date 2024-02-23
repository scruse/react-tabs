const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  const setActiveBtn = (index) => {
    console.log(index)
    setCurrentItem(index)
  }

  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            className={currentItem === index ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setActiveBtn(index)}
          >
            {job}
          </button>
        )
      })}
    </div>
  )
}

export default BtnContainer
