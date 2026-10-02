import Layout from "./Components/layout/Layout";
import Artists from "./Components/sections/artists";
import Gallery from "./Components/sections/gallery";
import Hero from "./Components/sections/hero";


function App() {
  return (
    <Layout>
      <Hero />
      <Artists />
      <Gallery />
    </Layout>
  );
}

export default App;
