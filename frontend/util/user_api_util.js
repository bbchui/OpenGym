export const fetchUser = userId => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  })
);

// export const updateUser = (userId) => (
//   $.ajax({
//     method: "PATCH",
//     url: `api/users/${userId}`,
//     data: {userId}
//   })
// );
