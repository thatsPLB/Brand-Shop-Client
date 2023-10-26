import Banner from "./Banner";
import BrandName from "./BrandName";
import CustomerReview from "./CustomerReview";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Navbar from "./Navbar";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Slider></Slider> */}
            <Banner></Banner>
            <h2 className="text-2xl bold text-center text-blue-700">Choose Your Brand</h2>
            <BrandName></BrandName>
            <CustomerReview></CustomerReview>
            <FAQ></FAQ>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;