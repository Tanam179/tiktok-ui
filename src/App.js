import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes/index';
import MainLayout from './components/Layouts/mainLayout/MainLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((el, ind) => {
                        let Layout = MainLayout;
                        if (el.layout) {
                            Layout = el.layout;
                        } else if (el.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = el.component;
                        return (
                            <Route
                                key={ind}
                                path={el.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
