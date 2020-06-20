import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Sightseeing from "./components/Sightseeing/Sightseeing";
import PopularPlace from "./components/PopularPlace/PopularPlace";
import Registration from "./components/Registration/Registration";
import Footer from "./components/Footer/Footer";
import Table from "./components/Sightseeing/Table";
import {Params1} from "./components/Sightseeing/Params";



function App() {
  return (
      <div className={"bigDiv"}>
         <Navigation/>

          <Switch>
              <Route exact path="/"><Header /></Route>
              <Route exact path="/sightseeing"><Sightseeing /></Route>
              <Route exact path="/popular-place"><PopularPlace /></Route>
              <Route exact path="/registration"><Registration /></Route>

              <Route exact path="/sightseeing/church"><Table url={"https://am-places.herokuapp.com/church"}/></Route>
              <Route exact path="/sightseeing/museums"><Table url={"https://am-places.herokuapp.com/museums"}/></Route>
              <Route exact path="/sightseeing/culture"><Table url={"https://am-places.herokuapp.com/culture"}/></Route>
              <Route exact path="/sightseeing/festivals"><Table url={"https://am-places.herokuapp.com/festivals"}/></Route>
              <Route exact path="/sightseeing/parks"><Table url={"https://am-places.herokuapp.com/parks"}/></Route>
              <Route exact path="/sightseeing/lakes"><Table url={"https://am-places.herokuapp.com/lakes"}/></Route>
              <Route exact path="/sightseeing/mountains"><Table url={"https://am-places.herokuapp.com/mountains"}/></Route>
              <Route exact path="/sightseeing/waterfalls"><Table url={"https://am-places.herokuapp.com/waterfalls"}/></Route>
              <Route exact path="/sightseeing/extreme"><Table url={"https://am-places.herokuapp.com/extreme"}/></Route>
              <Route exact path="/sightseeing/restaurants"><Table url={"https://am-places.herokuapp.com/restaurants"}/></Route>
              <Route exact path="/sightseeing/winehouses"><Table url={"https://am-places.herokuapp.com/winehouses"}/></Route>

              <Route path="/sightseeing/church/:itemID" component={Params1}/>
          </Switch>

          <Footer className={"footer"}/>
      </div>
  );
}

export default App;