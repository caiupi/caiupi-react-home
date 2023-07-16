import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>{/*Made with ❤️ by caiupi*/}</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/caiupi"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/caiupi"
                target="_blank"
                rel="noreferrer"
                aria-label="FaTwitter"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bajron/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
