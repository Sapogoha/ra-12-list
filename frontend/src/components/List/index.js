import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServicesRequest } from '../../actions/actionCreators';
import { Link } from 'react-router-dom';

function List() {
  const { items, loading, error } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, []);

  const handleReload = () => {
    dispatch(fetchServicesRequest());
  };

  return (
    <div className="app p-2">
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

      {!loading && items && (
        <ul className="mt-2">
          {items.map((item) => (
            <Link key={item.id} to={`${item.id}/details`}>
              <li className="card mb-2 p-2">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Цена: {item.price}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
