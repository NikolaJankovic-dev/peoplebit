import { Fragment, useEffect, useState } from 'react';
import './App.css';
import { UserList } from './user/UserList'
import { UserCards } from './user/UserCards';
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import { User } from '../entities/user';
import React from 'react';

const Home = () => {
    const [data, setData] = useState();
  const [dataCopy, setCopy]=useState();
  const [view, setView] = useState(true);
  const fetchData = () =>
    fetch('https://randomuser.me/api/?results=15').then(response => {
      return response.json();
    }).then(response => {
      let userData = response.results.map(user => new User(`${user.name.first} ${user.name.last}`, user.email, user.dob, user.picture));
      setData(userData);
      setCopy(userData);
    })

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    fetchData();
  }

  const filterList = (event) => {
    
    let filtered = [];
    if(event.target.value) {
      filtered = dataCopy.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
    } else {
      filtered = dataCopy;
    }
    setData(filtered);
  }

  const changeView = () => {
    setView(!view)
  }


  return (
    <Fragment>
      <Header title="React Users" />
      <button className="red lighten-2 right" onClick={refresh}> <i className="material-icons">refresh</i></button>
      <button className="red lighten-2"  onClick={changeView}>{view ? <i className="material-icons">list</i> : <i className="material-icons">grid_on</i>}</button>
      <input type="text" onChange={filterList} placeholder="Search users by name" />
      {view ? <UserCards data={data} />: <UserList data={data} />}
      
      <Footer />
    </Fragment>
  )
}

export default Home;