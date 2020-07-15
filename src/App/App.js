import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import {Home} from "./Home/Home";
import Header from "./Home/Header/Header";
import Sightseeing from "./Home/Sightseeing/Sightseeing";
import {SightseeingList} from "./Home/Sightseeing/SightseeingList/SightseeingList";
import TableWrapper from "./Home/Sightseeing/TableWrapper/TableWrapper";
import {TableWrapperList} from "./Home/Sightseeing/TableWrapper/TableWrapperList/TableWrapperList";
import PopularPlace from "./Home/PopularPlace/PopularPlace";
import {SelectedItem} from "./Home/Sightseeing/TableWrapper/SelectedItem/SelectedItem";
import {Search} from "./Home/Search/Search";
import {Login} from "./Home/Auth/Login/Login";
import {AuthProvider} from "./Home/Auth/AuthProvider";
import {Registration} from "./Home/Auth/Registration/Registration";

function App() {
  return (
      <div className={"bigDiv"}>
          <BrowserRouter>
              <AuthProvider>
                  <Routes>
                      {/*inside Home => Navigation + Outlet + Footer*/}
                      <Route path="/" element={<Home />}>
                          {/*Home Outlet*/}
                          <Route path="/" element={<Header/>}/>
                          <Route path="/avartakan-project" element={<Header/>}/>
                          <Route path="/sightseeing" element={<Sightseeing />}>
                              <Route path="/" element={<SightseeingList />} />
                              <Route path=":section" element={<TableWrapper />}>
                                  <Route path="/" element={<TableWrapperList />}/>
                                  <Route path=":name" element={<SelectedItem />}/>
                              </Route>
                          </Route>
                          <Route path="/popular-place" element={<PopularPlace />} />
                          <Route path="/registration" element={<Registration/>} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/search" element={<Search />} />
                     </Route>
                  </Routes>
              </AuthProvider>
          </BrowserRouter>
      </div>
  );
}

export default App;