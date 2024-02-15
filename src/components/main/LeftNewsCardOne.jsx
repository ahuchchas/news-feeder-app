import { getFormattedDate } from "../../utils/format-date";

/* eslint-disable react/prop-types */
export default function LeftNewsCardOne({ article }) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
            {article?.title}
          </h3>
        </a>
        <p className="text-base text-[#5C5955]">
          {article?.description || "News description not provided"}
        </p>
        <p className="mt-5 text-base text-[#5C5955]">
          {getFormattedDate(article?.publishedAt)}
        </p>
      </div>

      <div className="col-span-12 lg:col-span-8">
        {!article?.urlToImage && <p>News image not provided</p>}
        <img className="w-full" src={article?.urlToImage} alt="thumb" />
        <p className="mt-5 text-base text-[#5C5955]">
          Illustration: Karolis Strautniekas
        </p>
      </div>
    </div>
  );
}
