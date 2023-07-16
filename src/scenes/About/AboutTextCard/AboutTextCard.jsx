import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Bajron Ismailaj </span>
        from <span className={s.purple}> Florence, Italy.</span>
        <br />
        Software engineer with expertise in back end {' '}
        <br />
        development using Java Edition Enterprise.
        <br />
        <br />
        I have a Bachelor's degree in Computer Science and
        <br />
        Master's degree in Project Management from Ternopil Academy.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Chess
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Fitness
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Running
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
