

import Books from '../books/Books';
import Header from '../header/Header';

const Home = () => {
    return (
        <div   className="w-[95%] mx-auto">
      
        <Header></Header>
         <Books></Books>  
        </div>
    );
};

export default Home;