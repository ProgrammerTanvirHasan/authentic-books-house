
import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDataFromStorage, saveCardToStorage } from "../../utility/localStorage";


const BookDetails = () => {
    const details=useLoaderData();
    const {id}=useParams();
    const currentId=parseInt(id)
    const detail=details.find(detail=>detail.id===currentId);

 
    const handleToRead=()=>{
      const verifiedData =getDataFromStorage('read')
      if(verifiedData.includes(currentId)){
        toast.error('already added to readBook')
      }else{
        saveCardToStorage(currentId,'read')
        toast('You have read successfully')
      }
    }



    const handleToWish=()=>{
    const verifyToRead=getDataFromStorage('read')
  if(verifyToRead.includes(currentId)){
    toast.error('This book is already marked as read.');
  }else{
    saveCardToStorage(currentId,'wishList')
      toast('You wish to read')
  }
      
    }

   

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img className=" w-full lg:w-1/2 h-96" src={detail.image} alt="" />
           
          <div className="ml-8 ">
            <h1 className=" text-3xl font-bold">{detail.title}</h1>
            <p className="py-6">
            by:{detail.writer}
            </p>
            <p>{detail.category}</p>
            <p className="mt-4"> <span className="text-base font-bold">Review:</span> {detail.review}</p>
            
            <div className="flex mt-4">
              <p className="text-base font-bold ">Tag:</p>
               <span  className="flex gap-8 text-lime-900">
               <p>young Adult</p>
               <p>Identity</p>
               </span>
            </div>

            <p className="mt-2">Number of pages: <span className="text-base ml-6 font-bold">{detail.numberOfPages}</span> </p>
            <p>Publisher:  <span className="text-base ml-20 font-bold">{detail.publisher}</span> </p>
            <p>Year of publishing: <span className="text-base ml-4 font-bold" >{detail.yearOfPublishing}</span> </p>
            <p>Rating: <span className="text-base ml-24 font-bold ">{detail.rating}</span> </p>
            <button onClick={()=>handleToRead('read')} className="btn btn-outline btn-success font-bold mr-2">Read</button>
            <button onClick={()=>handleToWish('wishList')} className="btn btn-outline btn-primary font-bold">WishList</button>
          </div>
        </div>
     <ToastContainer/>
      </div>
      
    );
};

export default BookDetails;