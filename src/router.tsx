import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DashboardPage, LoginPage, SignInPage} from "@/pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DashboardPage/>}></Route>
                <Route path='/login' element={<LoginPage/>}></Route>
                <Route path='/signIn' element={<SignInPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;