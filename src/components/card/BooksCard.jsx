

const BooksCard = ({card}) => {

    const{image,rating,title,writer,yearOfPublishing,numberOfPages,category}=card;


    return (
        <div className="flex gap-8 ml:2 lg:ml-8 flex-col lg:flex-row">
       <div>
          <img className="h-48 w-auto lg:w-80 mb-4 rounded-lg" src={image} alt="" />
       </div>
       <div>
       <h2 className="text-2xl font-bold">{title}</h2>
       <p className="font-semibold mb-2">by:{writer}</p>
       <div className="flex gap-8">
        <h2 className="font-semibold">Tag:</h2>
       <div className="lg:flex gap-2 justify-between text-lime-900">
                <p>youngAdult</p>
                <p>Identity</p>
            </div>
            <div >
                <h2>Year of publishing:{yearOfPublishing}</h2>
            </div>
       </div>
       <div className="lg:flex gap-4 mt-2 font-light mb-2">
        <h2>Publisher: scribner</h2>
        <h2>pages :{numberOfPages}</h2>
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="grid-cols-1 text-cyan-500">
                <h2>category:{category}</h2>
            </div>
            <div className="grid-cols-1 text-orange-400">
            <h2>Rating:{rating}</h2>
            </div>
            <div className="grid-cols-1">
                <button className="bg-lime-500 h-10 p-2 rounded-xl">View Details</button>
            </div>
       </div>
       </div>
      </div>
    );
};

export default BooksCard;