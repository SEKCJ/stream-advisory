import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import './App.css';

function App() {
  const [password, setPassword] = useState('')
  const [matches, setMatches] = useState(false)

  const checkPassword = () => {
    if (password === 'hacker1') {
      console.log('matches')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {matches ? (
          <Row>
            <h1>Matches</h1>
          </Row>
        )
          : (
            <>
              <Row>
                <h1>Supper Important Company</h1>
              </Row>
              <img src={logo} className="App-logo" alt="logo" />
              <Row>
                <Form>
                  <FormGroup >
                    <Row>
                      <Label>
                        Enter Your Credentials to Start The Hack
                  </Label>
                    </Row>
                    <Row>
                      <Input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-100 mx-auto'
                      />
                    </Row>
                    <Button color='primary' className='my-2 w-50' onClick={checkPassword}>Confirm</Button>
                  </FormGroup>
                </Form>
              </Row>
            </>
          )
        }
      </header >
    </div >
  );
}

export default App;
