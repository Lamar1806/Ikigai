import styles from './app.module.scss';
import { HeroComponent } from '../components/hero-component/HeroComponent';
import myPaypal from '../assets/my-paypal.jpeg';
import enchantedTree from '../assets/enchanted-tree.jpg';

export const MyContent = () => {
  return (
    <div className={styles.MyContent}>
      <h2>ABJ Inc</h2>
      <h2>Hurricane Idalia</h2>
      <h3>Clean Up</h3>
      <a href="tel:+15087236444">Call Us: (508) 723 - 6444</a>
      <br />
      <br />
      <img src={myPaypal} alt="Our Paypal" />
    </div>
  );
};

export function App() {
  return (
    <div>
      <HeroComponent backgroundImage={enchantedTree} children={<MyContent />} />
    </div>
  );
}

export default App;
