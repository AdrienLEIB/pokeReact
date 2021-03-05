import React, {useState} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import DisplayPokemons from '../component/Pokemons/displayPokemons'



const Routes = () => {
    // const [isToken, setIsToken] = useState("")
    return(
        <Router>
            {/* <Header isToken={isToken} setIsToken={setIsToken} /> */}
            <Switch>
                <Route exact path="/"  component={DisplayPokemons} />
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes;