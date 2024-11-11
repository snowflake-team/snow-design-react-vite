import './App.css'
import { Button, Pagination } from "@snow-design/components";

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

      </>
  )
}

export default App
