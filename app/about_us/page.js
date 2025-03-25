import styles from './page.module.css';
import Crew from './Crew'; 

const Page = () => {
  return (
    <div className={styles.container}>
      <Crew /> {/* Use the Crew component here */}
    </div>
  );
};

export default Page;
