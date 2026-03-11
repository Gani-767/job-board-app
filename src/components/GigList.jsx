import GigCard from "./GigCard";

function GigList({ gigs, onGigClick }) {

  // If there are no gigs after filtering
  if (gigs.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-medium text-gray-600">
          No gigs found
        </p>
        <p className="text-sm text-gray-400">
          Try adjusting your filters or search keywords
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6
      "
    >
      {gigs.map((gig) => (
        <GigCard
          key={gig.id}
          gig={gig}
          onClick={onGigClick}
        />
      ))}
    </div>
  );
}

export default GigList;