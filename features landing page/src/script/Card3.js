import './Main.css';
import Image from "../images/note-book.png"

function Card3() {
  return (
    <div className="card">
    <h4>Manage Lists & Subscribers</h4>
    <img src={Image} />
    <div class="card-text">
        <p>Aliquam Massa</p>
        <h5>Nam at rhoncus odio</h5>
    </div>
    <hr/>
    <div class="card-text2">
       <p>Varius sit amet</p>
       <p>Cursus lacinia</p>
       <p>Metus phaselius</p>
    </div>
</div>
  );
}

export default Card3;
