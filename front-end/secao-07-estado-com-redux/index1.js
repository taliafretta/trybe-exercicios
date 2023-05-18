import { legacy_createStore as createStore } from 'redux';

const reducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    case 'TOGGLE_STATUS':
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
      }
    default:
      return state;
  }
};

themeButton.addEventListener('click', () => {
  store.dispatch({type: 'TOGGLE_THEME'});
});

statusButton.addEventListener('click', () => {
  store.dispatch({type: 'TOGGLE_STATUS'});
});

store.subscribe(() => {
  const state = store.getState();
  const body = document.querySelector('body');
  const status = document.getElementById('status');

  if (state.theme === 'light') {
    themeButton.innerText = 'Dark Mode';
    body.style.backgroundColor = '#fff';
    body.style.color = '#333';
  } else {
    themeButton.innerText = 'Light Mode';
    body.style.backgroundColor = '#333';
    body.style.color = '#fff';
  }

  if (state.status === 'online') {
    statusButton.innerText = 'Ficar Offline';
    status.innerText = 'Online';
  } else {
    statusButton.innerText = 'Ficar Online';
    status.innerText = 'Offline';
  }
});

const store = Redux.createStore(reducer);