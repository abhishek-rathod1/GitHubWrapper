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
      <h1 className="heading">Git Dekho</h1>
      <p className="desc">Ek chhoti si React app jisme aap kisi bhi GitHub user ka profile dekh sakte ho — naam, followers, company, aur repo count sab kuch!</p>
      <form className="formCard" onSubmit={handleFormSubmit}>
        <input placeholder="enter github username" type="text" onChange={(e)=>setUsername(e.target.value)}></input>
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
            <p className="bio">✍️ {userInfo.bio}</p>
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
