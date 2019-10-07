import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default () => (
  <>
    <div className="container container__background__gray">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xs-12 title">
          <h2>Dla kogo?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xs-12">
          <Tabs>
            <TabList>
              <Tab>Sektor 1</Tab>
              <Tab>Sektor 2</Tab>
              <Tab>Sektor 3</Tab>
              <Tab>Sektor 4</Tab>
            </TabList>

            <TabPanel>
              <p>
                <strong>Dla organizacji z III sektora,  </strong>które realizują projekty z grantów UE i oczekują gwarancji osiągnięcia określonych rezultatów
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <strong>Dla ministerstw i agend rządowych </strong>które oczekują realnych, udokumentowanych rezultatów kampanii informacyjnych
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <strong>Dla organizacji branżowych, </strong>którym zależy na dotarciu do decydentów i liderów opinii
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <strong>Dla organizacji, które  </strong>mają precyzyjnie określone cele komunikacyjne do zrealizowania
              </p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  </>
);
