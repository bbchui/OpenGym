export const allGyms = ({ gyms }) => Object.keys(gyms).map(id => gyms[id]);

export const allReviews = ({ reviews }) => Object.keys(reviews).map(key => reviews[key]);
