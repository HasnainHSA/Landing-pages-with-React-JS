import './Main.css';
import Image from "../images/email_icon.png"

function Footer3() {
    return (
        <div className="footer">
                <div className="footer-text1">
                    <div className="footer-icons">
                        <img src={Image} />
                    </div>
                    <div className="footer-text-heading">
                        <h3>EMAIL</h3>
                        <h4>CONTACT US</h4>
                    </div>
                </div>
                <div>
                    <p><span>Email:</span> Infomail@dot.com</p>
                    <p><span>Tel:</span> +31(0)xx xxx xx xx</p>
                    <p><span>Address:</span> Phasellus pellenteque 88hs 6000 Lobortis vehicula, Mauris</p>
                </div>
            </div>
  );
}

export default Footer3;
