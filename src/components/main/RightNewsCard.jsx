import { getFormattedDate } from "../../utils/format-date";

/* eslint-disable react/prop-types */
export default function RightNewsCard({ article }) {
  return (
    <div className="col-span-12 md:col-span-8">
      <div className="col-span-12 md:col-span-4">
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
