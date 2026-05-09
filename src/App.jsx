import Header from "./components/Header";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

import blogs from "./data/blog";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <BlogList blogs={blogs} />

      <Footer />
    </div>
  );
}

export default App;
