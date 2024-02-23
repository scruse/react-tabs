import { useState, useEffect } from 'react'
import JobInfo from './components/JobInfo'
import BtnContainer from './components/BtnContainer'
const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobsData, setJobsData] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      setJobsData(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const jobs = jobsData.map((job) => job.company)

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return 'loading...'
  }

  if (jobsData.length > 0) {
    return (
      <main className="jobs-center">
        <div className="btn-container">
          <BtnContainer
            jobs={jobs}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        </div>
        <JobInfo {...jobsData[currentItem]} />
      </main>
    )
  }
}
export default App
