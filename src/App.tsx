import './App.css'
import { Content, Footer, } from 'antd/es/layout/layout'
import { Layout } from 'antd'

import FooterPages from './components/footer.tsx'
import HomePages from './pages/HomePages.tsx'
import TeamPages from './pages/TeamPages.tsx'
import { Route, Routes } from 'react-router'
import ChurchService from './pages/ChurchService.tsx'
import Chat from './pages/Chat.tsx'
function App() {

  return (
    <>
      <div>
        <Layout style={{ minHeight: '100vh', position: "relative", paddingBottom: "50px" }}>
          <Content style={{ backgroundColor: 'white', marginBottom: " 25px " }}>
            <Routes>
              <Route index element={<HomePages />} />
              <Route path='/churchService' element={<ChurchService />} />
              <Route path='/team' element={<TeamPages />} />
              <Route path='/chat' element={<Chat />} />
            </Routes>
          </Content>
          <Footer style={{
            textAlign: 'center',
            borderTop: "1px solid rgb(231, 231, 231)",
            position: 'fixed',
            bottom: 0,
            width: '100%',
            marginTop: "10px",

          }}>
            <FooterPages />
          </Footer>
        </Layout>
      </div >
    </>
  )
}

export default App
