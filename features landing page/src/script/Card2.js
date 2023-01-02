import './Main.css';
import Image from "../images/folder.png"

function Card2() {
  return (

    <div className="card">
                <h4>Shared Files</h4>
                <img src={Image} />
                <div class="card-text">
                    <p>Tempus Sapien</p>
                    <h5>Nunc vestibulum libero</h5>
                </div>
                <hr />
                <div class="card-text2">
                   <p>Sed aliquam</p>
                   <p>Nisi aenean</p>
                   <p>Faucibus eu</p>
                </div>
            </div>

  );
}

export default Card2;
