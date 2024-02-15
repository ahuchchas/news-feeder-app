import { getFormattedDate } from "../../utils/format-date";

/* eslint-disable react/prop-types */
export default function RightNewsCardOne({ article }) {
  return (
    <div className="col-span-12 mb-6 md:col-span-8">
      {!article?.urlToImage && <p>News image not provided</p>}
      <img className="w-full" src={article?.urlToImage} alt="thumb" />

      <div className="col-span-12 mt-6 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
            {article?.title}
          </h3>
        </a>
        <p className="text-base text-[#292219]">
          {article?.description || "News description not provided"}
        </p>
        <p className="mt-5 text-base text-[#94908C]">
          {getFormattedDate(article?.publishedAt)}
        </p>
      </div>
    </div>
  );
}
