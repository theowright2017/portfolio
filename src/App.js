import React from 'react';
import Main from './Components/Main';
import { Button, Card, CardText, Layout, Header,
          Navigation, Drawer, Content} from 'react-mdl';
import { Grid, Cell} from 'react-mdl';

import './App.css';

import { Link } from 'react-router-dom';



function App() {
  return (
    <div style={{height: '100vh', position: 'relative'}}>
    <Layout >
      <Header className="header-colour"  style={{color: 'white'}}
        >
      <Grid>
        <Cell col={8}>

            <Navigation>
                <Link to="/">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>

            </Navigation>

        </Cell>
      </Grid>





        
              </Header>



        <Content>
          <div className="page-content" >
             <Main />
          </div>
        </Content>
    </Layout>
</div>



  );
}

export default App;


// <div className="social_links">
//   <Grid>
//     <Cell col={4}>
//
//       <a href="https://www.linkedin.com/in/theo-wright/"
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//           <i className="fa fa-linkedin-square" aria-hidden="false" />
//       </a>
//
//       <a href="https://github.com/theowright2017"
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//           <i className="fa fa-github-square" aria-hidden="false" />
//       </a>
