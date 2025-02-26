import './style/JobButton.css'
const JobButton = ({title,action}) => {
  return (
    <div className='job-title-btn' onClick={action}>
        <p>{title}</p>
    </div>
  )
}

export default JobButton
