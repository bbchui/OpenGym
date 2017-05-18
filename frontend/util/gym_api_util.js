export const getSingleGym = id => (
  $.ajax({
    method: "GET",
    url: `api/gyms/${id}`,
  })
);

export const getAllGyms = () => (
  $.ajax({
    method: "GET",
    url: "api/gyms"
  })
);
