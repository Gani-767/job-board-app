export function filterGigs(gigs, filters) {

  return gigs.filter((gig) => {

    const searchMatch =
      gig.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      gig.description.toLowerCase().includes(filters.search.toLowerCase());

    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(gig.category);

    const experienceMatch =
      filters.experience === "All" ||
      gig.experienceLevel === filters.experience;

    const budgetMatch =
      (!filters.min || gig.budget >= filters.min) &&
      (!filters.max || gig.budget <= filters.max);

    return (
      searchMatch &&
      categoryMatch &&
      experienceMatch &&
      budgetMatch
    );
  });
}


export function sortGigs(gigs, sortBy) {

  const sorted = [...gigs];

  if (sortBy === "newest") {
    sorted.sort(
      (a, b) => new Date(b.postedDate) - new Date(a.postedDate)
    );
  }

  if (sortBy === "oldest") {
    sorted.sort(
      (a, b) => new Date(a.postedDate) - new Date(b.postedDate)
    );
  }

  if (sortBy === "highBudget") {
    sorted.sort((a, b) => b.budget - a.budget);
  }

  if (sortBy === "lowBudget") {
    sorted.sort((a, b) => a.budget - b.budget);
  }

  return sorted;
}