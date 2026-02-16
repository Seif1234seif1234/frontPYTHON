import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import './App.css';
import {
  X
} from "lucide-react";


function Login({isDarkMode, setWindLogin, setWindLogup, handleLogIn, username, password, setUsername, setPassword, msgERROR}) {
  return (
    <div className="main-container div-login">
        <div className={`main-container div-login-v2 ${isDarkMode ? 'dark' : 'light'}`}>
        <div className='closeWind' onClick={() => setWindLogin(false)}><X size={30} className='iconX'></X></div>
        <div className="robot-model-v2">
          <p className='error'> {msgERROR}</p>
          <div className="head">
            <div className="cap"></div>
            <div className="ear left"></div>
            <div className="ear right"></div>
            <div className="eye-row">
              <div className="eye left"></div>
              <div className="eye right"></div>
            </div>
            <div className="mouth"></div>
          </div>

          <div className="neck"></div>

          <div className="arm left">
            <div className="shoulder"></div>
            <div className="upper-arm"></div>
            <div className="elbow"></div>
            <div className="lower-arm"></div>
            <div className="hand"></div>
          </div>

          <div className="arm right">
            <div className="shoulder"></div>
            <div className="upper-arm"></div>
            <div className="elbow"></div>
            <div className="lower-arm"></div>
            <div className="hand"></div>
          </div>

          <div className="torso">
            <div className="chest-screen">
              <div className="grid-container">
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="main-processor"></div>
              </div>
            </div>
            <div className="belly-text">ARDUINO<br />LOGIN</div>
          </div>

          <div className="leg-group">
            <div className="leg">
              <div className="thigh"></div>
              <div className="shin"><div className="knee-plate"></div></div>
              <div className="boot"></div>
            </div>
            <div className="leg">
              <div className="thigh"></div>
              <div className="shin"><div className="knee-plate"></div></div>
              <div className="boot"></div>
            </div>
          </div>
        </div>
        <div  className={`loginForm ${isDarkMode ? 'dark' : 'light'}`} >
          <fieldset>
            <legend><h1>Log In</h1></legend>
            <div className="cont">
              <input tt="false" type="text" id="login-user" value={username} onInput={(e)=>{setUsername(e.target.value)}} placeholder=" " />
              <label htmlFor="login-user">User Name</label>
            </div>
            <div className="cont">
              <input tt="false" type="password" id="login-pass" value={password} onInput={(e)=>{setPassword(e.target.value)}} placeholder=" " />
              <label htmlFor="login-pass">Password</label>
            </div>
            <div className="button-group">
              <input  type="button" value="Log In" onClick={handleLogIn}/>
              <div className='buttonSTYLE'>
                <input type="button" value="Create account" onClick={()=>{setWindLogin(false);setWindLogup(true);}} />
                <input type="button" value="Cancel" />
              </div>  
            </div>
          </fieldset>
        </div>
        </div>
      </div>
  )
}




function Logup({isDarkMode, setWindLogup, setWindLogin, setPassword, setNom, setUsername, username, nom, password, handleLogUp, Rpassword, setRPassword, msgERROR}) {
  return (
    <div class="main-container div-login">
      <div className={`main-container div-login-v2 ${isDarkMode ? 'dark' : 'light'}`}>
        <div className='closeWind' onClick={() => setWindLogup(false)}><X size={30} className='iconX'></X></div>
      <div className="robot-model-v2">
        <p className='error'> {msgERROR}</p>
        <div className="head">
          <div className="cap"></div>
          <div className="ear left"></div>
          <div className="ear right"></div>
          <div className="eye-row">
            <div className="eye left"></div>
            <div className="eye right"></div>
          </div>
          <div className="mouth"></div>
        </div>

        <div className="neck"></div>

        <div className="arm left">
          <div className="shoulder"></div>
          <div className="upper-arm"></div>
          <div className="elbow"></div>
          <div className="lower-arm"></div>
          <div className="hand"></div>
        </div>

        <div className="arm right">
          <div className="shoulder"></div>
          <div className="upper-arm"></div>
          <div className="elbow"></div>
          <div className="lower-arm"></div>
          <div className="hand"></div>
        </div>

        <div className="torso">
          <div className="chest-screen">
            <div className="grid-container">
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="main-processor"></div>
            </div>
          </div>
          <div className="belly-text">ARDUINO<br />SYSTEM</div>
        </div>

        <div className="leg-group">
          <div className="leg">
            <div className="thigh"></div>
            <div className="shin"><div className="knee-plate"></div></div>
            <div className="boot"></div>
          </div>
          <div className="leg">
            <div className="thigh"></div>
            <div className="shin"><div class="knee-plate"></div></div>
            <div className="boot"></div>
          </div>
        </div>
      </div>
      <div className={`loginForm ${isDarkMode ? 'dark' : 'light'}`}>
        <fieldset>
          <legend><h1>Sign Up</h1></legend>
          <div className="cont">
            <input tt="false" type="text" id="username" value={username} onInput={(e)=>{setUsername(e.target.value)}} placeholder=" " />
            <label htmlFor="username">User Name</label>
          </div>
          <div className="cont">
            <input tt="false" type="text" id="name" value={nom} onInput={(e)=>{setNom(e.target.value)}} placeholder=" " />
            <label htmlFor="name">Name</label>
          </div>
          <div className="cont">
            <input tt="false" type="password" id="pass" value={password} onInput={(e)=>{setPassword(e.target.value)}} placeholder=" " />
            <label htmlFor="pass">Password</label>
          </div>
          <div className="cont">
            <input tt="false" type="password" id="confirm" value={Rpassword} onInput={(e)=>{setRPassword(e.target.value)}} placeholder=" " />
            <label htmlFor="confirm">Confirm Password</label>
          </div>
          <div className="button-group">
            <input type="button" value="Sign Up" onClick={handleLogUp}/>
            <div className='buttonSTYLE'>
              <input type="button" value="Log in" onClick={()=>{setWindLogup(false);setWindLogin(true);}} />
              <input type="button" value="Cancel" />
            </div>
          </div>
        </fieldset>
      </div>
      </div>
    </div>
  )
}


async function GDFB(url) {
  try {
    const res = await axios.get(url+"/getUserData", {withCredentials: true})
    console.log(res.data);
    return true
  } catch (error) {
    console.error(error);
    console.log("error status " + error.status);
    console.log("error msg " + error.response.data.error);
  }
  return false
}



function App() {
  const backURL = "https://backendpython-vgws.onrender.com:3000/api"
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [windLogup, setWindLogup] = useState(false);
  const [windLogin, setWindLogin] = useState(false);

  const [nom, setNom] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Rpassword, setRPassword] = useState("");

  const [selectedChat, setSelectedChat] = useState("new")

  const [msgERROR, setMsgERROR] = useState("")

  const [chats, setChats] = useState({});
  const [messages, setMessages] = useState([
    { text: "System Online. Welcome to coding4ever Arduino AI.", sender: "bot" }
  ]);
  
  const chatEndRef = useRef(null);
  const block = useRef(false);

  useEffect(()=>{
    if (block.current) return;
    block.current = true
    handleCheckUser()
  }, [])
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (quest) => {
    setInputValue("")
    try {
      const res = await axios.post(backURL+"/bot", {"question": quest, username:username, key:selectedChat}, {withCredentials: true})
      console.log(res.data.key);
      const pp = res.data.key;
      const botMsg = { text: res.data.message, sender: "bot" };
      const userMsg = { text: quest, sender: "user" };
      setChats(prevChats => ({
        ...prevChats,
        [pp]: [...(prevChats[pp] || []),userMsg, botMsg ]
      }));

      setSelectedChat(res.data.key)
      

    } catch (error) {
      console.error(error);
      console.log("error status " + error.status);
      console.log("error msg " + error.response.data.error);
      setWindLogin(true)
      setMsgERROR("login required")
    }
    setDisabledBtn(false)
  };

  // const handleAddP = async (txt) => {
  //   try {
      
  //     const reskey = await axios.get(backURL+"/getKey", {withCredentials:true})
  //     setChats(prevChats => ({
  //       ...prevChats,
  //       [reskey.data.key]: [...(prevChats[reskey.data.key] || []), userMsg]
  //     }));
  //   } catch (error) {
  //     console.error(error);
  //     console.log("error status " + error.status);
  //     console.log("error msg " + error.response.data.error);
  //   }
  // };



  const handleLogIn = async () => {
    try {
      const res = await axios.post(backURL+"/getUser", {username:username, password:password}, {withCredentials: true})
      handleCheckUser()
      console.log(res.data);
    } catch (error) {
      console.error(error);
      console.log("error status " + error.status);
      console.log("error msg " + error.response.data.error);
    }
  } 
  const handleLogUp = async ()=>{
    setMsgERROR("")
    if (password != Rpassword) {
      setMsgERROR("password no match")
      return;
    }
    try {
      const res = await axios.post(backURL+"/addUser", {nom:nom,username:username, password:password}, {withCredentials: true})
      handleCheckUser()
      console.log(res.data);
    } catch (error) {
      console.error(error);
      console.log("error status " + error.status);
      console.log("error msg " + error.response.data.error);
      setMsgERROR(error.response.data.error)
    }
    
  }
  const handleCheckUser = async ()=>{
    try {
      const res = await axios.get(backURL+"/checkUser", {withCredentials: true})
    } catch (error) {
      console.error(error);
      console.log("error status " + error.status);
      console.log("error msg " + error.response.data.error);
      setIsLogin(false)
      return false
    }
    setIsLogin(true)
    setWindLogin(false)
    setWindLogup(false)
    GDFB()
    return true
  }


  const GDFB = async () => {
    try {
      const res = await axios.get(backURL+"/getUserData", {withCredentials: true})
      console.log(res.data.chats);
      setChats(res.data.chats)
      return true
    } catch (error) {
      console.error(error);
      console.log("error status " + error.status);
      console.log("error msg " + error.response.data.error);
    }
    return false
  }

  const handleSelect = (key)=>{
    console.log(key);
    setSelectedChat(key)
  }


  return (
    <>
    {windLogup && 
      <Logup isDarkMode={isDarkMode} setWindLogup={setWindLogup} setWindLogin={setWindLogin} setUsername={setUsername} setPassword={setPassword} setNom={setNom} setRPassword={setRPassword} Rpassword={Rpassword} nom={nom} password={password} username={username} handleLogUp={handleLogUp} msgERROR={msgERROR}  />
    }
    {windLogin && 
      <Login isDarkMode={isDarkMode} setWindLogin={setWindLogin} setWindLogup={setWindLogup} handleLogIn={handleLogIn} username={username} password={password} setUsername={setUsername} setPassword={setPassword} msgERROR={msgERROR}/>
    }
    <div className={`app-wrapper ${isDarkMode ? 'dark' : 'light'}`}>
      
      {/* --- TOP NAVIGATION --- */}
      <header className="navbar">
        <button className="theme-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? "✕" : <span className="vertical-bars">|||</span>}
        </button>

        <div className="brand-group">
        <img src="src/assets/c4e.png" alt="Logo" className="nav-logo" />
          <h1 className="main-title">coding<span>4ever</span></h1>
          <img src="src/assets/mjs.png" alt="Logo" className="nav-logo" />
        </div>

        <button className="theme-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </header>

      <div className="content-grid">
        {/* --- SIDEBAR --- */}
        <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
          {(isLogin) && <div className="sidebar-label">Recent Chats <button onClick={()=>{setSelectedChat("new")}}>new chat</button></div>}
          {!isLogin && <div className="sidebar-label"><button className='btnlogin' onClick={()=>{setWindLogin(true)}}>login</button></div>}
          
          <div className="history-link">
            <style>
              {()=>{return selectedChat}}{
                
              }
            </style>
            <style>
              {`
                .${selectedChat} {
                  background-color: var(--gold);
                }
              `}
              </style>
            {chats && Object.entries(chats).map(([key, messages]) => (  
              <div key={key} className={`mb-4 ${key}  ${isDarkMode ? 'dark' : 'light'}`} onClick={(e)=>{handleSelect(key)}}>
                <h3 className="font-bold">{key}</h3>
              </div>
              
            ))}
          </div>
        </aside>

        {/* --- MAIN CHAT AREA --- */}
        <main className="chat-window">
          <div className="message-list">
            {chats && Object.entries(chats).map(([key, messages]) => (
                key === selectedChat && (
                  <div key={key} className="chat-box">
                    {messages.map((msg, i) => (
                      <div key={i} className={`msg-row ${msg.sender}`}>
                        <div className="bubble">{msg.text}</div>
                      </div>
                    ))}
                  </div>
                )
              ))}
            <div ref={chatEndRef} />
          </div>

          {/* --- INPUT AREA --- */}
          <div className="bottom-bar">
          <input 
            type="text" 
            placeholder="Ask coding4ever..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="send-action"  onClick={async (e)=>{setDisabledBtn(true); handleSend(inputValue)  }} disabled={disabledBtn}> Send </button>
          </div>
          {/* handleAddP(inputValue) */}
        </main>
      </div>
    </div></>
  );
}

export default App;
