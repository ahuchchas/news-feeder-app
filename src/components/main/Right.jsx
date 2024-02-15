/* eslint-disable react/prop-types */
import RightNewsCard from "./RightNewsCard";
import RightNewsCardOne from "./RightNewsCardOne";

export default function Right({ news }) {
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {news.map((newsItem, index) =>
          index === 0 ? (
            <RightNewsCardOne key={index} article={newsItem} />
          ) : (
            <RightNewsCard key={index} article={newsItem} />
          )
        )}
      </div>
    </div>
  );
}
