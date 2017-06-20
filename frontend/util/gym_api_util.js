export const getSingleGym = id => (
  $.ajax({
    method: "GET",
    url: `api/gyms/${id}`,
  })
);

export const getAllGyms = (query, bounds) => {
  return(
  $.ajax({
    method: "GET",
    url: "api/gyms",
    data: {query, bounds}
  })
);
}
