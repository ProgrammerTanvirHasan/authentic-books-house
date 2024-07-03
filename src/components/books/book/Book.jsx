
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {id,category,title,writer,rating,image}=book;
   
   

    return (
      <Link to={`/details/${id}`}>
        <div 
           className="card w-96 h-96 bg-base-100 shadow-xl">
        <img className="h-48 w-80 mx-auto rounded-lg" src={image} alt="Shoes" />
        <div className="card-body">
        
            <div className="flex justify-between text-lime-900">
                <p>young Adult</p>
                <p>Identity</p>
            </div>
          <h2 className="card-title">
           {title}
            
          </h2>
          <p>by:{writer}</p>

          <div className="flex justify-between mt-8">
            <p>{category}</p>
            <div className="flex gap-2 ">
                <p>{rating}</p>
             
            <FaRegStar className="w-5 h-5"></FaRegStar>
            </div>
              
          </div>
        
        </div>
      </div>
      
      </Link>
    
    );
};

export default Book;