import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "../section/ModalOnlineProgram";
import TabPrice from "./tabPrice";
import TabTable from "./tabTable";
import { programs as defaultPrograms } from "./tabsData";

export default function Tabss({ programs = defaultPrograms }) {
  const [onlineActive, setOnlineActive] = useState(false);

  return (
    <>
      <Modal active={onlineActive} setActive={setOnlineActive} />

      <Tabs className="react-tabs" forceRenderTabPanel defaultIndex={1}>
        <h1 className="tab__title">Прогами харчування</h1>

        <TabList>
          {programs.map((program) => (
            <Tab key={program.slug}>
              <div className="tab__program_name"></div>
              <p>{program.label}</p>
              <p>{program.calories}</p>
            </Tab>
          ))}
        </TabList>

        {programs.map((program) => (
          <TabPanel key={program.slug}>
            <Tabs className="react-tabs" forceRenderTabPanel>
              <div className="tab__content_info">
                <div className="tab__content_info-text">
                  <h2>
                    {program.label} <span>{program.calories}</span>
                  </h2>
                  <p>{program.description}</p>
                </div>

                <div className="tab__content_price">
                  <TabPrice items={program.prices} />
                </div>

                <div
                  className="tab__content_btn"
                  onClick={() => setOnlineActive(true)}
                >
                  Замовити
                </div>
              </div>

              <div className="tab__wrapp">
                <TabList>
                  {program.days.map((day) => (
                    <Tab key={day.dayLabel} className="tab__days">
                      <p className="tab__days_name">{day.dayLabel}</p>
                    </Tab>
                  ))}
                </TabList>

                {program.days.map((day) => (
                  <TabPanel key={day.dayLabel}>
                    <TabTable meals={day.meals} />
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
}
