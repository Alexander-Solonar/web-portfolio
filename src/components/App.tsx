import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContextProvider from '../context/Context';
import Layout from './layout';
import PageHome from '../pages/pageHome/PageHome';

const PageProjects = lazy(() => import('../pages/pageProjects/pageProjects'));
const PageProject = lazy(() => import('../pages/pageProject/PageProject'));
const PageContacts = lazy(() => import('../pages/pageContacts/PageContacts'));
const PageSummary = lazy(() => import('../pages/pageSummary/PageSummary'));

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path="projects" element={<PageProjects />} />
          <Route path="projects/project/:projectId" element={<PageProject />} />
          <Route path="contacts" element={<PageContacts />} />
          <Route path="summary" element={<PageSummary />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}
export default App;
