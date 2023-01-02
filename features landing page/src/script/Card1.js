import './Main.css';
import Image from "../images/services.png"

function Card1() {
  return (

    <div className="card">
                <h4>Services</h4>
                <img src={Image} />
                <div className="card-text">
                    <p>Supendisse Sollicitudin</p>
                    <h5>Duis vitae semper turpis</h5>
                </div>
                <hr />
                <div className="card-text2">
                   <p>Sodales farmentum</p>
                   <p>Qquam integer</p>
                   <p>Nibh arcu</p>
                </div>
            </div>
      

  );
}

export default Card1;
