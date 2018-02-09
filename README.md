# react visible control sample

You could use react-visible-control to control app render in elegant way. 

## App

An app with react visible control: 

```jsx
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
```

render result: 

```html
<div id="root">
  <div class="App">
    <p>Welcome you staff</p>
    <p>information is whatever</p>
    <p>You dont have privilege save info</p>
  </div>
</div>
```