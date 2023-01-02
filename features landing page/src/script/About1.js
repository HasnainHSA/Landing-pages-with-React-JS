import './Main.css';
import Image from "../images/gears.jpg"

function About1() {
  return (
    <div className="about">
                <h4>
                    Commited to Our <span>clients</span>
                </h4>
                <hr />
                <img src={Image} />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est itaque nulla quos accusamus iste, veritatis similique numquam sunt alias optio ea sapiente quaerat voluptate? Velit labore earum ipsa aliquid harum!</p>
                <button>Read more..</button>
            </div>
  );
}

export default About1;
