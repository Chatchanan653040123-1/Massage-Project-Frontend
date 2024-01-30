import './App.css';
import Login from './components/Login'
import Success from './components/Success';
function App() {
  function isLogin() {
    const token = localStorage.getItem("token");
    if (token) {
      const payloadBase64 = token.split(".")[1];
      const decodedPayload = atob(payloadBase64);
      const exp = JSON.parse(decodedPayload)['exp'];
      if (Date.now() < exp * 1000) {
        return true;
      } else {
        localStorage.removeItem("token");
        return false;
      }
    }
    return false;
  }
  return (
    <>
      <div className="w-screen h-screen flex items-center bg-[url('https://media.discordapp.net/attachments/1201907264508923965/1201911220740046909/image.png?ex=65cb8a0d&is=65b9150d&hm=9818639b044b44cd12e86127edd5cc44bf719865277d871fb7ae5c519e8b4212&=&format=webp&quality=lossless')] bg-no-repeat bg-cover justify-center">
        <div className="grid-flow-col">
          {isLogin() ? <Success /> : <Login />}
        </div>
      </div>
    </>
  );
}
export default App;
