import AdminPage from "../pages/AdminPage/AdminPage";
import Contact from "../pages/Contact/Contact";
import DetailsOrderPage from "../pages/DetailsOrderPage/DetailsOrderPage";
import HomePage from "../pages/HomePage/HomePage";
import Info from "../pages/Info/Info";
import MyOrderPage from "../pages/MyOrder/MyOrder";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import OrderSucess from "../pages/OrderSuccess/OrderSuccess";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SinginPage from "../pages/SigninPage/SinginPage";
import SignupPage from "../pages/SingupPage/SignupPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path: '/payment',
        page: PaymentPage,
        isShowHeader: true,
    },
    {
        path: '/my-order',
        page: MyOrderPage,
        isShowHeader: true,
    },
    {
        path: '/details-order/:id',
        page: DetailsOrderPage,
        isShowHeader: true
    },
    {
        path: '/orderSuccess',
        page: OrderSucess,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductPage,
        isShowHeader: true
    },
    {
        path: '/product/:type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SinginPage,
        isShowHeader: true
    },
    {
        path: '/sign-up',
        page: SignupPage,
        isShowHeader: true
    },
    {
        path: '/product-detail/:id',
        page: ProductDetailPage,
        isShowHeader: true 
    },
    {
        path: '/contact',
        page: Contact,
        isShowHeader: true 
    },
    {
        path: '/info',
        page: Info,
        isShowHeader: true 
    },
    {
        path: '/profile-user',
        page: ProfilePage,
        isShowHeader: true 
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivate: true
    },
    {
        path: '*',
        page: NotFoundPage
    },
]