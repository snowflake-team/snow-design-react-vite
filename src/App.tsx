import './App.css'
import { Button, ConfigProvider, Pagination } from "@snow-design/components";
import React from "react";
import { zh_CN } from '@snow-design/locale';

function App() {
  return (
      <>
          <div className="box">
              Button:
              <Button>Default</Button>
              <Button type="primary">Primary</Button>
              <Button type="warning">Warning</Button>
              <Button type="danger">Danger</Button>
          </div>
          <div className="box">
              Pagination:
              <Pagination total={20} pageSize={2} showTotal></Pagination>
          </div>
          <div className="box">
              <ConfigProvider locale={zh_CN}>
                  Pagination:
                  <Pagination total={20} pageSize={2} showTotal></Pagination>
              </ConfigProvider>
          </div>
      </>
  )
}

export default App
