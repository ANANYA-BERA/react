import React from 'react'
import './index.css'
import Card from './components/card.jsx'
const App = () => {

const jobData = [
  {
    brandLogo: "/amazon_logo.jpg",
    company: "Amazon",
    date: "5 days ago",
    post: "Frontend Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    stipend: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://e7.pngegg.com/pngimages/56/318/png-clipart-google-logo-logo-logo-company-text.png",
    company: "Google",
    date: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Onsite",
    tag2: "Senior Level",
    stipend: "$120/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Meta",
    date: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    stipend: "$140/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.freeiconspng.com/uploads/apple-icon-4.png",
    company: "Apple",
    date: "1 week ago",
    post: "iOS Developer",
    tag1: "Onsite",
    tag2: "Junior Level",
    stipend: "$80/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003",
    company: "Netflix",
    date: "3 days ago",
    post: "Backend Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    stipend: "$150/hr",
    location: "India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png?20210729021049",
    company: "Microsoft",
    date: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Onsite",
    tag2: "Junior Level",
    stipend: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "/amazon_logo.jpg",
    company: "Amazon",
    date: "4 days ago",
    post: "DevOps Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    stipend: "$130/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://e7.pngegg.com/pngimages/56/318/png-clipart-google-logo-logo-logo-company-text.png",
    company: "Google",
    date: "5 weeks ago",
    post: "Data Scientist",
    tag1: "Onsite",
    tag2: "Senior Level",
    stipend: "$160/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Meta",
    date: "1 day ago",
    post: "Product Designer",
    tag1: "Remote",
    tag2: "Junior Level",
    stipend: "$55/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://www.freeiconspng.com/uploads/apple-icon-4.png",
    company: "Apple",
    date: "2 days ago",
    post: "ML Engineer",
    tag1: "Onsite",
    tag2: "Senior Level",
    stipend: "$180/hr",
    location: "Noida, India"
  }
];


 

  return (
    <div className='parent'>
      {jobData.map(function(elem){
        return <Card companyName= {elem.company} post = {elem.post} date={elem.date} tag1 = {elem.tag1} tag2= {elem.tag2} pay= {elem.stipend} location= {elem.location} logo = {elem.brandLogo}/>;
      })}
    </div>
  )
}

export default App
