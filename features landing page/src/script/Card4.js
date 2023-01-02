import './Main.css';
import Image from "../images/camera.png"

function Card4() {
  return (
    <div className="card">
                <h4>Videos & Photos</h4>
                <img src={Image} />
                <div className="card-text">
                    <p>Magna Consectetur</p>
                    <h5>Integer risus sem maximus</h5>
                </div>
                <hr />
                <div className="card-text2">
                   <p>Cras Lectus</p>
                   <p>Commodo mauris</p>
                   <p>Sapien consequat</p>
                </div>
            </div>

  );
}

export default Card4;
