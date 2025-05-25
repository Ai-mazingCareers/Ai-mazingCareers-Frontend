import Image from "next/image";
import "./style/Card.css";
function Card({link,head,body}){
  return (
    <div className="card-box">
      <div className="card-image-container">
        <Image
            src={link}
            fill
            alt="image"
            style={{ objectFit: 'contain',borderRadius: '16px'}}
        />
      </div>
      <div className="card-heading">{head}</div>
      <div className="card-body">{body}</div>
    </div>
  )
}

export default Card
