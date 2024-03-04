import { TextAndButton } from "../molecules/text-and-button/text-and-button";

const Home = () => {
  return (
      <TextAndButton
        label="hola"
        text="click"
        onClick={() => console.log('Hello')}
      />
  );
}

export default Home;
