import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContextProvider from '../context/Context';
import Layout from './layout';

const PageHome = lazy(() => import('../pages/pageHome/PageHome.jsx'));
const PageGallery = lazy(() => import('../pages/pageGallery/PageGallery.jsx'));
const PageProject = lazy(() => import('../pages/pageProject/PageProject.jsx'));
const PageContacts = lazy(() => import('../pages/pageContacts/PageContacts'));
const PageSummary = lazy(() => import('../pages/pageSummary/PageSummary'));

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path="gallery" element={<PageGallery />} />
          <Route path="gallery/project/:projectId" element={<PageProject />} />
          <Route path="contacts" element={<PageContacts />} />
          <Route path="summary" element={<PageSummary />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}
export default App;
