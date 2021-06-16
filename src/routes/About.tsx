import React from 'react';
import { useHistory } from 'react-router-dom';


const About: React.FC = () => {
    const history = useHistory();

  const handleClick = () => {
    history.push('/');
  }

return <div className='about-page'>
    <h1>About page!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deleniti explicabo, qui aut molestias quo vel recusandae corrupti a non! Error architecto at, sapiente nobis exercitationem reprehenderit harum ipsum odio.</p>
    <button className="btn" onClick={handleClick}>Вернуться на главную</button>
</div>;
}

export default About;