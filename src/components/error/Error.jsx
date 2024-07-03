import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center items-center mt-16">
             <h1 className="text-5xl ">404</h1>
            <h2 className="text-3xl font-bold">Page not found !</h2>
       <Link to='/'>
       <button className="btn btn-error mt-2">Go To Home</button>
       </Link>
      
        </div>
    );
};

export default Error;