export const fetchBounds = place => {
  return $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=AIzaSyBGzD2V58XXZuo4vQkXksUHJJVjEaKjYi4`
  });
};
