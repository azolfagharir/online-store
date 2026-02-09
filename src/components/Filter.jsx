import { CiCircleList } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const data = [
    "All",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  const handleCategory = (category) => {
    setSearchParams(prev => {
      if (category === "All") {
        prev.delete("category");
      } else {
        prev.set("category", category);
      }
      return prev;
    });
  };

  return (
    <div className="border-2 rounded-2xl border-dashed border-orange-500
                    w-60 absolute right-40 mt-24">
      <div className="flex m-2 text-2xl text-orange-500">
        <CiCircleList className="mr-2 mt-2" />
        <p>category</p>
      </div>

      <div className="ml-4 text-2xl">
        {data.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className="mb-6 block"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
