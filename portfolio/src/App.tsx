import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
    <AppHeader />
    <main>
      <Routes>
        <Route path='/' element={<StayIndex scrolledPage={scrolledPage} />} />
        <Route path='/:stayId' element={<StayDetails />} />
        <Route path='/:stayId/payment' element={<StayPayment />} />
        <Route path='/trips' element={<UserTrips />} />
        <Route path='/dashboard' element={<UserDashboard />}></Route>
        <Route path='/wishlist' element={<UserWishlist />} />
        <Route path='/messages' element={<UserMessages />} />
        <Route path='/edit' element={<StayEdit />} />
        <Route path='/edit/:stayId' element={<StayEdit />} />
      </Routes>
    </main>
    <AppFooter />
  </Router>
  )
}

export default App
