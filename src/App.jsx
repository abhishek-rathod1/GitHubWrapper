import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App () {
  
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState();

  const handleFormSubmit = async (e) =>{
    e.preventDefault();

    console.log('hi form submit')
    console.log(username);

    const response = await axios.get(`https://api.github.com/users/${username}`);


    console.log(response.data);

    setUserInfo(response.data);
  }

  return (
    <>
      <div className="container">
      <h1 className="heading">GitHub Wrapper</h1>
      <form className="formCard" onSubmit={handleFormSubmit}>
        <input type="text" onChange={(e)=>setUsername(e.target.value)}></input>
        <button>Search</button>
      </form>
      {userInfo && (<div className="userDetailCard">
        <div className="userDetailBody">
          <p className="name">{userInfo.name}</p>
          <em className="userName">{userInfo.login}</em>
          <div className="follow">
            <p>Followers: {userInfo.followers}</p>
            <p>Following: {userInfo.following}</p>
          </div>
          <div className="follow">
            <p>Public Repositorys: {userInfo.public_repos}</p><br></br>
            
          </div>
          <div className="prof">
            <p>🏢{userInfo.company}</p>
            <p>✍️ {userInfo.bio}</p>
          </div>
        </div>
        <div className="userImage">
          <img src={userInfo.avatar_url} alt="" />
        </div>
      </div>)}
      </div>
    </>
  );
}

export default App;
