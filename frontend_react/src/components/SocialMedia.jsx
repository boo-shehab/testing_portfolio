import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandGithubFilled } from "react-icons/tb";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/boo-shehab" target='_blank'>
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://github.com/boo-shehab" target='_blank'>
        <TbBrandGithubFilled />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/boo_shehab/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
