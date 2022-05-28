import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import FavoriteCats from './pages/FavoriteCats';
import AllCats from './pages/AllCats';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Main />}>
							<Route index element={<AllCats />} />
							<Route path='favorite' element={<FavoriteCats />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
  </React.StrictMode>
);

