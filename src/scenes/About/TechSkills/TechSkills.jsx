import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiEclipse,
  DiPostgresql,
  DiGit,
  DiMsqlServer,
} from 'react-icons/di';
import {
  SiJava,
  SiRedux,
  SiSocketdotio,
  SiLinux,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <SiJava />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiEclipse />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiPostgresql />
      </li>
      <li className={s.techIcon}>
        <DiMsqlServer />
      </li>
      <li className={s.techIcon}>
        <SiLinux />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiSocketdotio />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
