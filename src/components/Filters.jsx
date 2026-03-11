function Filters({ filters, setFilters }) {

  const categories = [
    "Web Development",
    "Mobile Dev",
    "Design",
    "Writing",
    "Marketing"
  ];

  const handleCategoryChange = (category) => {

    let updatedCategories;

    if (filters.categories.includes(category)) {
      updatedCategories = filters.categories.filter(
        (c) => c !== category
      );
    } else {
      updatedCategories = [...filters.categories, category];
    }

    setFilters({
      ...filters,
      categories: updatedCategories
    });
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      experience: "All",
      min: "",
      max: ""
    });
  };

  return (
    <div className="border p-4 rounded mb-4 bg-white">

      <h2 className="font-semibold text-lg mb-3">Filters</h2>

      {/* CATEGORY FILTER */}
      <div className="mb-4">

        <p className="font-medium mb-2">Category</p>

        {categories.map((category) => (
          <label key={category} className="block text-sm">

            <input
              type="checkbox"
              checked={filters.categories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />

            <span className="ml-2">{category}</span>

          </label>
        ))}

      </div>

      {/* BUDGET RANGE FILTER */}
      <div className="mb-4">

        <p className="font-medium mb-2">Budget Range (₹)</p>

        <div className="flex gap-3">

          <input
            type="number"
            placeholder="Min"
            value={filters.min}
            onChange={(e) =>
              setFilters({
                ...filters,
                min: Number(e.target.value)
              })
            }
            className="border p-2 rounded w-24"
          />

          <input
            type="number"
            placeholder="Max"
            value={filters.max}
            onChange={(e) =>
              setFilters({
                ...filters,
                max: Number(e.target.value)
              })
            }
            className="border p-2 rounded w-24"
          />

        </div>

        {filters.max && filters.min && filters.max < filters.min && (
          <p className="text-red-500 text-xs mt-1">
            Max budget cannot be smaller than Min
          </p>
        )}

      </div>

      {/* EXPERIENCE FILTER */}
      <div className="mb-4">

        <p className="font-medium mb-2">Experience Level</p>

        <select
          value={filters.experience}
          onChange={(e) =>
            setFilters({
              ...filters,
              experience: e.target.value
            })
          }
          className="border p-2 rounded"
        >

          <option value="All">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>

        </select>

      </div>

      {/* CLEAR BUTTON */}

      <button
        onClick={clearFilters}
        className="bg-red-500 text-white px-3 py-1 rounded text-sm"
      >
        Clear All Filters
      </button>

    </div>
  );
}

export default Filters;