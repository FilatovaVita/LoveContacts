import { HelloMassege } from '../components/App/App.styled';
import { RiUserHeartLine } from 'react-icons/ri';

export default function Home() {
  return (
    <HelloMassege>
      <h1>
        Welcome to LoveContact manager <RiUserHeartLine />
        Save your favorite contact here!
      </h1>
    </HelloMassege>
  );
}
