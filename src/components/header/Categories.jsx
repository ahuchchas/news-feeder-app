import { useContext } from "react";
import { CategoryContext } from "../../context";

export default function Categories() {
  const { setCategory } = useContext(CategoryContext);
  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a
            href="#"
            onClick={() => setCategory((c) => ({ ...c, state: "general" }))}
          >
            General
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setCategory((c) => ({ ...c, state: "business" }))}
          >
            Business
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() =>
              setCategory((c) => ({ ...c, state: "entertainment" }))
            }
          >
            Entertainment
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setCategory((c) => ({ ...c, state: "health" }))}
          >
            Health
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setCategory((c) => ({ ...c, state: "science" }))}
          >
            Science
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setCategory((c) => ({ ...c, state: "sports" }))}
          >
            Sports
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setCategory((c) => ({ ...c, state: "technology" }))}
          >
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
}
