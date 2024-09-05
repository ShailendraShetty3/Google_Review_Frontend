// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GoogleMyBusinessReviews = ({ accessToken, locationId }) => {
//   const [reviews, setReviews] = useState([]);

//     const accountId = "integration-434704"
    
//   useEffect(() => {
//     const fetchReviews = async () => {
//       if (!accessToken) return;

//       try {
//         const response = await axios.get(
//           `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`,
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//             },
//           }
//         );
//         setReviews(response.data.reviews);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, [accessToken, locationId]);

//   return (
//     <div>
//       <h3>Google My Business Reviews</h3>
//       {reviews.length > 0 ? (
//         <ul>
//           {reviews.map((review) => (
//             <li key={review.reviewId}>
//               <p>{review.comment}</p>
//               <p>Rating: {review.starRating}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No reviews found.</p>
//       )}
//     </div>
//   );
// };

// export default GoogleMyBusinessReviews;




















import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleMyBusinessReviews = ({ accessToken }) => {
  const [reviews, setReviews] = useState([]);
    const accountId = "integration-434704";
    
    // const accessToken = sessionStorage.getItem("accessToken");

  useEffect(() => {
    const fetchReviewsForAllLocations = async () => {
      if (!accessToken) return;

      try {
        // Fetch all locations for the account
        const locationsResponse = await axios.get(
          `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const locations = locationsResponse.data.locations;

        // Iterate through locations and fetch reviews for each location
        const allReviews = [];
        for (const location of locations) {
          const locationId = location.name.split('/').pop(); // Extract locationId from the location name
          
          const reviewsResponse = await axios.get(
            `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          if (reviewsResponse.data.reviews) {
            allReviews.push(...reviewsResponse.data.reviews); // Append reviews to the list
          }
        }

        setReviews(allReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviewsForAllLocations();
  }, [accessToken]);

  return (
    <div>
      <h3>Google My Business Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.reviewId}>
              <p>{review.comment}</p>
              <p>Rating: {review.starRating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default GoogleMyBusinessReviews;
