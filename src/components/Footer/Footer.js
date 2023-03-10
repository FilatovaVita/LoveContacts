import { Box } from '../AppBar/AppBar.styled';
import { BsGithub } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <Box>
      <NavLink
        to={'https://github.com/FilatovaVita/LoveContacts'}
        style={{ color: 'black' }}
      >
        <BsGithub style={{ width: 50, height: 50 }} />
      </NavLink>
      <h4>2023</h4>
    </Box>
  );
};
