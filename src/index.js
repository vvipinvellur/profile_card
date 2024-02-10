import React from 'react';
import './index.css'
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "react-query";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    {/* <QueryClientProvider client={queryClient}> */}
        <App />
    {/* </QueryClientProvider> */}
  </BrowserRouter>
);

reportWebVitals();