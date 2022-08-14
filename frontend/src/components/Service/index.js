import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getServicesRequest } from '../../actions/actionCreators';
import { Link } from 'react-router-dom';

function Service() {
  const { item, loading, error } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getServicesRequest(id));
  }, []);

  const handleReload = () => {
    dispatch(getServicesRequest(id));
  };

  return (
    <div className="service-details p-2">
      {loading && (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {error && (
        <>
          <div className="alert alert-danger">Произошла ошибка</div>
          <button type="button" className="btn btn-info" onClick={handleReload}>
            Повторить запрос
          </button>
        </>
      )}

      {!loading && !error && item && (
        <>
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.price}</p>
              <p className="card-text">{item.content}</p>
            </div>
          </div>
          <Link to={'/services'}>
            <button type="button" className="btn btn-info">
              Вернуться к списку
            </button>
          </Link>
        </>
      )}
      {/* <Link to={'/services'}>Back to the list</Link> */}
    </div>
  );
}

export default Service;
