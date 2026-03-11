function GigCard({ gig, onClick }) {

  return (
    <div
      onClick={() => onClick(gig)}
      className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer transition"
    >

      <h3 className="text-lg font-semibold">
        {gig.title}
      </h3>

      <p className="text-sm text-gray-500">
        {gig.category}
      </p>

      <div className="flex justify-between mt-3 text-sm">

        <span className="text-green-600 font-semibold">
          ₹{gig.budget}
        </span>

        <span className="bg-gray-100 px-2 py-1 rounded">
          {gig.experienceLevel}
        </span>

      </div>

      <p className="text-xs text-gray-400 mt-3">
        Posted: {gig.postedDate}
      </p>

    </div>
  );
}

export default GigCard;