import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getReviews } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import s from './Reviews.module.css';

function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async id => {
      try {
        setIsLoading(true);
        const receivedTrends = await getReviews(id);
        setMovieReviews(receivedTrends);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops...Somesing went wrong..</p>}
      <ul className={s.list}>
        {Array.isArray(movieReviews) &&
          movieReviews?.map(el => {
            return (
              <li key={el.id}>
                <h3>{el?.author}</h3>
                <p>{el?.content}</p>
              </li>
            );
          })}
      </ul>
      {movieReviews.length === 0 && (
        <h4 className={s.message}>There are no reviews for this movie</h4>
      )}
    </>
  );
}

export default Reviews;
