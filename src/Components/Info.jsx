import "./Info.css"
import img from "../assets/info-img.png";



function Info() {
  return (
  <div className="info">
    <img className="img" src={img} alt="bg" />
    <div className="steps">
        <div className="step">
            <span className="circle">1</span>
            <span className="label">STEP 1</span>
            <p className="title">YOUR INFO</p>
        
        </div>
        <div className="step">
            <span className="circle">2</span>
            <span className="label">STEP 2</span>
            <p className="title">SELECT PLAN</p>
        
        </div>
        <div className="step">
            <span className="circle">3</span>
            <span className="label">STEP 3</span>
            <p className="title">ADD-ONS</p>
        
        </div>
        <div className="step">
            <span className="circle">4</span>
            <span className="label">STEP 4</span>
            <p className="title">SUMMARY</p>
        
        </div>
    </div>
  </div>
  )
}

export default Info;