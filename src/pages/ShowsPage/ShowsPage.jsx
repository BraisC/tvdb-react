import React from 'react';
import { ShowList } from 'components';
import { useHistory } from 'react-router-dom';

const ShowsPage = (props) => {
  const history = useHistory();
  console.log(history);

  return (
    <>
      <button onClick={() => history.goBack()} />
      <ShowList />;
    </>
  );
};

export default ShowsPage;

//Aqui hacemos la request
