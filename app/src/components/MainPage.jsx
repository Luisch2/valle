import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const MainPage = () => {
  const { logout } = useAuth0();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button 
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default MainPage;
