import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute} from '../../const.ts';
import { HelmetProvider } from 'react-helmet-async';
import PagesMainContainer from '../../pages/pages-main-container/pages-main-container.tsx';
import PagesNotFoundContainer from '../../pages/pages-not-found-container/pages-not-found-container.tsx';
import PagesFavoritesContainer from '../../pages/pages-favorites-container/pages-favorites-container.tsx';
import PagesLoginContainer from '../../pages/pages-login-container/pages-login-container.tsx';
import PagesOfferContainer from '../../pages/pages-offer-container/pages-offer-container.tsx';


export default function App():JSX.Element{

  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<PagesMainContainer />}
          />
          <Route
            path={AppRoute.Favorites}
            element={<PagesFavoritesContainer/>}
          />
          <Route
            path={AppRoute.Login}
            element={<PagesLoginContainer />}
          />
          <Route
            path={AppRoute.Offer}
            element={<PagesOfferContainer />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<PagesNotFoundContainer />}
          />
          <Route
            path='*'
            element={<PagesNotFoundContainer />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}
