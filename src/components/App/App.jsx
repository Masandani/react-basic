import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from '../PRODUCTS/Products';
import Layout from '../Layout/Layout';
import PRODUCTS from './PRODUCTS.json';
import About from '../About/About';
import Contact from '../Contact/Contact';
import SingleProduct from '../SingleProduct/SingleProduct';
import Blog from '../Blog/Blog';
import ThemeContext from '../../context/ThemeContext';
import themeConfig from '../../configs/theme';

function App() {
  const [activeTheme, setActiveTheme] = useState('green');
  return (
    <ThemeContext.Provider
      value={{
        theme: themeConfig[activeTheme],
        setActiveTheme,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>

              <Route exact path="/">
                <Products data={PRODUCTS} />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/blog">
                <Blog />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/product/:id">
                <SingleProduct />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
