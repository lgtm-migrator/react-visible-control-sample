import React, { Component } from 'react';
import {
  SecurityContext,
  NeedPrevilegeRead,
  NeedPrevilegeWrite,
  NeedRoleManager,
  NeedRoleStaff
} from './Security/index';
import { MOCK_USER } from './RolePermission/index';
import { Failback } from 'react-visible-control/dist';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SecurityContext data={MOCK_USER}>
          <NeedRoleStaff>
            <p>Welcome you staff</p>
            <NeedPrevilegeRead>
              <p>information is whatever</p>
            </NeedPrevilegeRead>
            <NeedPrevilegeWrite>
              <button>Save</button>
              <Failback>
                <p>You dont have privilege save info</p>
              </Failback>
            </NeedPrevilegeWrite>
          </NeedRoleStaff>
          <NeedRoleManager>
            <p>only manager could see child Components !</p>
          </NeedRoleManager>
        </SecurityContext>
      </div>
    );
  }
}

export default App;
