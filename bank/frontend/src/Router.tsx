import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home'
import AccountPage from './pages/API/CreateAccount'
// import LoginPage from './pages/LogIn'
import AccountListPage from './pages/API/AccountList' 
import AccountDetailPage from './pages/API/AccountDetail' 
import AccountTransPage from './pages/API/AccountTransAll' 
import AccountNamePage from './pages/API/AccountName' 
import AccountTransferPage from './pages/API/AccountTransfer' 
import AccountMasterPage from './pages/API/AccountMaster' 
import PasswordResetPage from './pages/API/PasswordReset'
import ResultPage from './pages/API/ResultPage'
// import MyApiPage from './pages/MyApi'

function Router() {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            {/* <Route path="/login" element={<LoginPage/>}/> */}
            <Route path="/account-master" element={<AccountMasterPage/>}/>
            <Route path="/password-reset" element={<PasswordResetPage/>}/>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="/account-list" element={<AccountListPage/>}/>
            <Route path="/account-detail" element={<AccountDetailPage/>}/>
            <Route path="/account-trans" element={<AccountTransPage/>}/>
            <Route path="/account-name" element={<AccountNamePage/>}/>
            <Route path="/account-transfer" element={<AccountTransferPage/>}/>
            <Route path="/transfer-result" element={<ResultPage/>}/>

            {/* <Route path="/myapi" element={<MyApiPage/>}></Route> */}
        </Routes>
    )
}

export default Router