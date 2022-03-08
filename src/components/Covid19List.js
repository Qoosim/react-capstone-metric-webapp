import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchDataFromApi, getData } from '../redux/covid19/covid19';

const Covid19List = () => {
  const covids = useSelector((state) => state.covids);
  console.log(covids);

  useEffect(() => {
    fetchDataFromApi().then((result) => console.log(getData(result)));
  }, []);

  return (
    <>
    </>
  );
};

export default Covid19List;
