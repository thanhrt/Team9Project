import React from "react";
import AppNav from "./Nav";
import Sidebar from "./Sidebar"
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import '../Fonts.css';
import '../App.css';
//npm install react-minimal-side-navigation



function Login() {
  return(
    <>
      <AppNav/>
      <Sidebar/>
    </>
  );
}
export default Login;

/*
function Login () {
    return (
        <>
          <AppNav/>
          
          <section className="SideBar">
          <div style={{display: 'flex'}}>
          <Navigation
              // you can use your own router's api to get pathname
              activeItemId="/loginoptions/sidebar"
              onSelect={({itemId}) => {
                //push to the route here
              }}
              items={[
                {
                  title: 'Dashboard',
                  itemId: '/dashboard',
                },
                {
                  title: 'History',
                  itemId: '/history',
                },
                {
                  title: 'User Settings',
                  itemId: '/User Settings',
                  subNav: [
                    {
                      title: 'Edit Profile',
                      itemId: '/loginoptions/usersettings',
                    },
                  ],
                },
                {
                    title: 'Logout',
                    itemId: '/Logout',
                },
              ]}
            />
            </div>
            </section>
            <Container>
                <div style = {{textAlign: 'center'}}>
                   <button type="button" class="btn btn-danger" onClick={openeditorbutton}>Open Editor</button>
                </div>
            </Container>
            
        </>
      );
}*/