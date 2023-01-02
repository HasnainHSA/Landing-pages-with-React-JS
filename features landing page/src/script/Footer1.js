import './Main.css';
import Image from "../images/@icon.png"

function Footer1() {
    return (
    <div className="footer">
    <div className="footer-text1">
        <div className="footer-icons">
            <img src={Image} />
        </div>
        <div className="footer-text-heading">
            <h3>SUBSCRIBE</h3>
            <h4>GET NEWSLETTERS</h4>
        </div>
    </div>

    <div className="footer-text2">
        <input type="text" />
        <p>Subscribe</p>
    </div>
</div>
  );
}

export default Footer1;
