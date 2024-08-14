import './App.css'
import { Content, Footer, } from 'antd/es/layout/layout'
import { Layout } from 'antd'

import FooterPages from './components/footer.tsx'
import HomePages from './pages/HomePages.tsx'
import { Route, Routes } from 'react-router'
import ChurchService from './pages/ChurchService.tsx'
function App() {

  return (
    <>
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Content style={{ backgroundColor: 'white' }}>
            <Routes>
              <Route index element={<HomePages />} />
              <Route path='/churchService' element={<ChurchService />} />
            </Routes>
          </Content>
          <Footer style={{
            textAlign: 'center',
            borderTop: "1px solid rgb(231, 231, 231)",

          }}>
            <FooterPages />
          </Footer>
        </Layout>
      </div >
    </>
  )
}

export default App
