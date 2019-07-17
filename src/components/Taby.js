import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default () => (
  <>
    <div className="container container__background__gray">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xs-12 title">
          <h2>DLa kogo?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xs-12">
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
              <Tab>Title 3</Tab>
              <Tab>Title 4</Tab>
            </TabList>

            <TabPanel>
              <p>
                <strong>Dla organizacji z III sektora, </strong>które realizują
                projekty z grantów UE i oczekują gwarancji osiągnięcia
                określonych rezultatów.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <strong>COŚT TA M2 2Dla organizacji z III sektora, </strong>
                które realizują projekty z grantów UE i oczekują gwarancji
                osiągnięcia określonych rezultatów.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <strong>COŚT TA 4 2Dla organizacji z III sektora, </strong>które
                realizują projekty z grantów UE i oczekują gwarancji osiągnięcia
                określonych rezultatów.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <strong>COŚT TA 4 2Dla organizacji z III sektora, </strong>które
                realizują projekty z grantów UE i oczekują gwarancji osiągnięcia
                określonych rezultatów.
              </p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  </>
);
