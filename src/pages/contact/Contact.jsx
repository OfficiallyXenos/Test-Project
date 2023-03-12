import Hero from "../../components/Hero";
import Image from "../../images/nike3.jpeg";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Hero image={Image} copy="Reach Out To Us">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, ab.
      </Hero>
      <div className="container contact__icons">
        <a href="#">
          <BsTwitter />
        </a>
        <a href="">
          <MdEmail />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
      </div>
    </>
  );
};

export default Contact;
