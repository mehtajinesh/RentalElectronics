import axios from "axios";

const USER_API = 'http://localhost:4000/api/users';

export const findAllRentalsByUser = async (uid) => {
  const response = await axios.get(`${USER_API}/${uid}/rentals`);
  return response.data;
};

export const findAllListingsByUser = async (uid) => {
  const response = await axios.get(`${USER_API}/${uid}/listings`);
  return response.data;
};

export const findWishlistByUser = async (uid) => {
  const response = await axios.get(`${USER_API}/${uid}/wishlist`);
  return response.data;
};

export const findReviewsByUser = async (uid) => {
  const response = await axios.get(`${USER_API}/${uid}/reviews`);
  return response.data;
};