import { useParams } from 'react-router-dom';
import React from 'react';

import { fetchReviews } from 'axios/fetchData';
import { ReviewItem } from './ReviewsItem/index';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await fetchReviews(id);
        setReviews(results);
      } catch (error) {
        console.log(error);
        alert('failed to fetch data');
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={styles.list}>
          {reviews &&
            reviews.map(({ author, content, id }) => (
              <ReviewItem key={id} author={author} content={content} />
            ))}
        </ul>
      ) : (
        <p className={styles.title}>Comments nor found</p>
      )}
    </>
  );
};

export default Reviews;
