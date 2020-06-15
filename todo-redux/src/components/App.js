import React from 'react';
import { useSelector } from 'react-redux';
import useInitLogin from './useInitLogin';

import Spinner from './Spinner';
import AppBar from './AppBar';
import Todos from './Todos';

const App = () => {
  const user = useSelector(state => state.user);
  const userLoading = useInitLogin(); // initialze if user is logged in or not

  const renderSpinner = () => {
    if (userLoading) return <Spinner />
    return null;
  }

  const renderContent = () => {
    if (user) return (
      <div>
        <Todos />
      </div>
    )

    if (!user) return (
      <div>
        기능을 사용하려면 로그인을 해주세요
      </div>
    )
  }

  return (
    <div className="app">
      {renderSpinner()}
      <AppBar />
      {renderContent()}
    </div>
  )
}

export default App;