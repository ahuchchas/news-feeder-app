/* eslint-disable react/prop-types */
import LeftNewsCard from "./LeftNewsCard";
import LeftNewsCardOne from "./LeftNewsCardOne";
import LeftNewsCardTwo from "./LeftNewsCardTwo";

export default function Left({ news }) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {news.map((newsItem, index) =>
        index === 0 ? (
          <LeftNewsCardOne key={index} article={newsItem} />
        ) : index === 1 ? (
          <LeftNewsCardTwo key={index} article={newsItem} />
        ) : (
          <LeftNewsCard key={index} article={newsItem} />
        )
      )}
    </div>
  );
}
