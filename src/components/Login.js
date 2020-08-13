import React from 'react';
import "./Login.css";
import { accessUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <img className="spotify_logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify-logo" />
      <a href={accessUrl}>Login with Spotify</a>
    </div>
  )
}

export default Login;
