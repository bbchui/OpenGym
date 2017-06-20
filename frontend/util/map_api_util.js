export const fetchBounds = location => {
  debugger
  return $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBGzD2V58XXZuo4vQkXksUHJJVjEaKjYi4`
  });
};
