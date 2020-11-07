import Jobs from '../features/Jobs';
import SEO from '../components/SEO';

function HomePage() {
  const title = 'Github Jobs - find your next job';
  return (
    <>
      <SEO title={title} />
      <h1>Github Jobs</h1>
      <Jobs />
    </>
  );
}

export default HomePage;
