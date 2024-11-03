
import { Routes , Route } from 'react-router-dom'
import Authpage from './pages/auth'
import RouteGuard from './components/route-guard/index'
import { useContext } from 'react'
import { Authcontext } from './context/auth.context'
import InstructorDashboard from './pages/instructor/dashboard/index'
import StudentViewCommonlayout from './components/student-view/common-layout'
import StudentHomePage from './pages/student/home/index'


function App() {
  
const {auth} = useContext(Authcontext)
  return (
    
    <Routes>
      <Route
      path='/auth'
      element={
        <RouteGuard
        element={<Authpage/>}
        authenticated={auth?.authenticate}
        user={auth?.user}
        />
         
      } />

      <Route
      path='/instructor'
      element={
        <RouteGuard
        element={<InstructorDashboard/>}
        authenticated={auth?.authenticate}
        user={auth?.user}
        />
      }
      />

      <Route
      path='/'
      element={
        <RouteGuard
        element={<StudentViewCommonlayout/>}
        authenticated={auth?.authenticate}
        user={auth?.user}
        />
      }
      >
         <Route path="" element={<StudentHomePage/>}/>
         <Route path="home" element={<StudentHomePage/>}/>
      </Route>
      
      
    </Routes>
   
  )
}

export default App
