import DefImg from "../../assets/thumb.png";
import { getFormattedDate } from "../../utils/format-date";

/* eslint-disable react/prop-types */
export default function LeftNewsCardTwo({ article }) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
      <div className="col-span-12 md:col-span-6">
        <a href="">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
            {article?.title}
          </h3>
        </a>
        <p className="text-base text-[#292219]">
          {article?.description || "News description not provided"}
        </p>
        <p className="mt-5 text-base text-[#5C5955]">
          {getFormattedDate(article?.publishedAt)}
        </p>
      </div>

      <div className="col-span-12 md:col-span-6">
        <img
          className="w-full"
          src={article?.urlToImage ? article?.urlToImage : DefImg}
          alt="thumb"
        />
      </div>
    </div>
  );
}
