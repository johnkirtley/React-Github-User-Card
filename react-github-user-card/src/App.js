
import React from 'react'
import Card from "./components/Card";
import axios from 'axios'
import Styled from 'styled-components'

const Grid = Styled.div`
display: grid;
grid-template-columns: repeat (3, 1fr);
text-align: center;
`


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      location: '',
      login: '',
      avatar: '',
      followCount: '',
      followers: [],
      url: ''
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/johnkirtley`)
      .then(res => {
        this.setState({
          name: res.data.name,
          location: res.data.location,
          login: res.data.login,
          avatar: res.data.avatar_url,
          id: res.data.id,
          followCount: res.data.followers,
          url: res.data.html_url
        });
      });

    axios.get(`https://api.github.com/users/johnkirtley/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
  }

  render() {
    return (
      <>
        <div>
          <h1>Github Cards</h1>
          <Card id={this.state.id}
            name={this.state.name}
            login={this.state.login}
            location={this.state.location}
            avatar={this.state.avatar}
            followCount={this.state.followCount}
            url={this.state.url}
          />
        </div>
        <h2>Followers</h2>
        {this.state.followers.map(follower => {
          return (
            <Grid>
              <Card
                id={follower.id}
                name={follower.name}
                location={follower.location}
                login={follower.login}
                avatar={follower.avatar_url}
                followCount={follower.followers}
                url={follower.html_url}
              />
            </Grid>
          )
        })}
      </>
    )
  }
}

export default App;





