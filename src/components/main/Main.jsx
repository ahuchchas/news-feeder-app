import { useContext } from "react";
import { NewsContext } from "../../context";
import Left from "./Left";
import Right from "./Right";

export default function Main() {
  const { loading, error, newsData } = useContext(NewsContext);
  const totalLength = newsData?.length;
  const firstArrayLength = Math.ceil((2 / 3) * totalLength);

  const leftNews = newsData?.slice(0, firstArrayLength);
  const rightNews = newsData?.slice(firstArrayLength);

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {error && <p className="text-xl text-center mt-12">{error.message}</p>}

        {loading.state && (
          <p className="text-xl text-center mt-12">{loading.message}</p>
        )}

        {newsData.length > 0 && (
          <>
            <Left news={leftNews} />
            <Right news={rightNews} />
          </>
        )}
      </div>
    </main>
  );
}
