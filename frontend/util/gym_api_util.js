export const getSingleGym = id => (
  $.ajax({
    method: "GET",
    url: `api/gyms/${id}`,
  })
);

export const getAllGyms = (query) => (
  $.ajax({
    method: "GET",
    url: "api/gyms",
    data: {query}
  })
);
