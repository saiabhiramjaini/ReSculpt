import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { ForgotPassword } from "./pages/ForgotPassword"
import { ResetPassword } from "./pages/ResetPassword"
import { HomePage } from "./pages/HomePage"
import { UploadInnovativeProdsPage } from "./pages/UploadInnovativeProdsPage"
import { UploadWasteReqPage } from "./pages/UploadWasteReqPage"
import { InnovativeProdPage } from "./pages/InnovativeProdPage"
import { WasteReqPage } from "./pages/WasteReqPage"
import { ContributePage } from "./pages/ContributePage"
import {ProfilePage} from "./pages/ProfilePage"
import { DisplayWasteReqPage } from "./pages/DisplayWasteReqPage"
import { DisplayInnovativeProdsPage } from "./pages/DisplayInnovativeProdsPage"
import { SatisfiedRequirements } from "./pages/SatisfiedRequirementsPage"
import { UserWasteReqPage } from "./pages/UserWasteReqPage"
import { UserInnovativeProdsPage } from "./pages/UserInnovativeProdsPage"
import { UserContributionsPage } from "./pages/UserContributionsPage"
import { PaymentSuccessPage } from "./pages/PaymentSuccessPage"
import { PaymentFailurePage } from "./pages/PaymentFailurePage"

import InitialLoader from "./components/InitialLoader"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialLoader/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/resetPassword/:token" element={<ProtectedRoute><ResetPassword/></ProtectedRoute>}/>

        <Route path="/home" element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>

        <Route path="/uploadInnovativeProd" element={<ProtectedRoute><UploadInnovativeProdsPage/></ProtectedRoute>}/>
        <Route path="/uploadWasteReq" element={<ProtectedRoute><UploadWasteReqPage/></ProtectedRoute>}/>

        <Route path="/product/:id" element={<ProtectedRoute><InnovativeProdPage/></ProtectedRoute>}/>
        <Route path="/requirement/:id" element={<ProtectedRoute><WasteReqPage/></ProtectedRoute>}/>

        <Route path="/requirement/:id/contribution/:id" element={<ProtectedRoute><ContributePage/></ProtectedRoute>}/>

        <Route path="/displayWasteReq" element={<ProtectedRoute><DisplayWasteReqPage/></ProtectedRoute>}/>
        <Route path="/displayInnovativeProds" element={<ProtectedRoute><DisplayInnovativeProdsPage/></ProtectedRoute>}/>

        <Route path="/profile/userData" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
        <Route path="/profile/satisfiedReq" element={<ProtectedRoute><SatisfiedRequirements/></ProtectedRoute>}/>
        <Route path="/profile/uploadedReq" element={<ProtectedRoute><UserWasteReqPage/></ProtectedRoute>}/>
        <Route path="/profile/uploadedInnovations" element={<ProtectedRoute><UserInnovativeProdsPage/></ProtectedRoute>}/>
        <Route path="/profile/contributions" element={<ProtectedRoute><UserContributionsPage/></ProtectedRoute>}/>

        <Route path="/paymentSuccessful" element={<ProtectedRoute><PaymentSuccessPage/></ProtectedRoute>}/>
        <Route path="/paymentFailed" element={<ProtectedRoute><PaymentFailurePage/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
