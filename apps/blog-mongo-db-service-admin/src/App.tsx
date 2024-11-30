import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PostEventList } from "./postEvent/PostEventList";
import { PostEventCreate } from "./postEvent/PostEventCreate";
import { PostEventEdit } from "./postEvent/PostEventEdit";
import { PostEventShow } from "./postEvent/PostEventShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"BlogMongoDBService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PostEvent"
          list={PostEventList}
          edit={PostEventEdit}
          create={PostEventCreate}
          show={PostEventShow}
        />
      </Admin>
    </div>
  );
};

export default App;
