import './styles/Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <div className="messages">
        <h1>Hi, I'm Franco!</h1>
        <h2>I'm a Systems Engineer student</h2>
        <h3>Welcome to my website!</h3>
      </div>
      <div className="image-container">
        <img src="/assets/dummy/colo-saluting.png" alt='colo-saluting.png' />
      </div>
    </section>
  );
};

export default Home;
