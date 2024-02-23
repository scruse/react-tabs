const JobDuties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div className="job-desc" key={index}>
            <p>{duty}</p>
          </div>
        )
      })}
    </div>
  )
}

export default JobDuties
