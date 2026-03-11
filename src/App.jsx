import { useState, useEffect, useMemo } from "react";

import { gigs } from "./data/gigs";

import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import GigList from "./components/GigList";
import SortDropdown from "./components/SortDropdown";
import GigModal from "./components/GigModal";

import { filterGigs, sortGigs } from "./utils/filterUtils";

function App() {

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedGig, setSelectedGig] = useState(null);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    categories: [],
    experience: "All",
    min: "",
    max: ""
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const filteredGigs = useMemo(() => {

    const filtered = filterGigs(gigs, {
      ...filters,
      search
    });

    return sortGigs(filtered, sortBy);

  }, [search, filters, sortBy]);

  if (loading) {
    return (
      <p className="text-center mt-20">
        Loading gigs...
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-4">
        Freelance Gig Board
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filters
        filters={filters}
        setFilters={setFilters}
      />

      <div className="flex justify-between mb-4">

        <p className="text-sm text-gray-500">
          Showing {filteredGigs.length} of {gigs.length} gigs
        </p>

        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

      </div>

      <GigList
        gigs={filteredGigs}
        onGigClick={setSelectedGig}
      />

      <GigModal
        gig={selectedGig}
        close={() => setSelectedGig(null)}
      />

    </div>
  );
}

export default App;