import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import CategoryProvider from "./provider/CategoryProvider";
import NewsProvider from "./provider/NewsProvider";
import SearchProvider from "./provider/SearchProvider";

export default function App() {
  return (
    <CategoryProvider>
      <SearchProvider>
        <NewsProvider>
          <Header />
          <Main />
          <Footer />
        </NewsProvider>
      </SearchProvider>
    </CategoryProvider>
  );
}
