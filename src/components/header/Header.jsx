
import { Link } from "react-router-dom";
const Header = () => {
    return (
      
      <div className="hero h-auto pl-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="  w-full lg:w-[50%] bg-slate-1000" src="https://i.ibb.co/VYD7tn5/middle-aged-man-presenting-book-shirt-looking-confident-front-view.png" ></img>
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up to your bookshop</h1>
         
      <Link to={'/ListedBook'}>
            <button  className=" bg-lime-500 h-10 p-2 rounded-md mt-4">View the list</button>
      </Link>
      
        </div>
      </div>
    </div>
    );
};

export default Header;