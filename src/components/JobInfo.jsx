import JobDuties from './JobDuties'

const JobInfo = ({ company, dates, duties, id, order, title }) => {
  console.log(duties)
  return (
    <article>
      <h3>{title}</h3>
      <div className="job-company">{company}</div>
      <div className="job-date">{dates}</div>
      <div className="">
        <JobDuties duties={duties} />
      </div>
    </article>
  )
}

export default JobInfo
