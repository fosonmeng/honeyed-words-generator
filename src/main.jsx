import Client from 'react-dom/client';
import App from './App';
import GlobalStyle from './Global.style';

(() => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.readyState == 4) {
      window.G_Words = JSON.parse(xhr.responseText);
      
      initApp();
    }
  };
  xhr.open('GET', './data/words.json');
  xhr.send();
})();


const initApp = () => {
  const root = Client.createRoot(document.getElementById('root'));
  root.render(
    <>
      <GlobalStyle />
      <App />
    </>
  );
};
