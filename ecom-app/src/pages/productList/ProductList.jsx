import { useParams } from "react-router-dom";
import { useState } from "react";
import Loader from "../../components/loader/Loader";
import Product from "../../components/product/Product";
import useFetchData from "../../hooks/useFetchData";
import Pagination from "../../components/pagination";
import './productList.css'

const ProductList = () => {

    const { categoryName } = useParams();
    const { 
        isLoading, 
        error, 
        data: products
    } = useFetchData(
        `https://fakestoreapi.com/products/category/${ categoryName ? categoryName: '' }`,
        []
    );

    // Adding Pagination logic
    const itemsPerPage = 3; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    return (
        <div className="container">
            {
                isLoading ? (
                    <Loader />
                ): (
                    <>
                        <div className="product-list">
                            {
                                currentProducts && currentProducts.map((product)=>{
                                    return <Product key={product.id} product={product}/>   
                                })
                            }
                        </div>
                        <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} /> 
                    </>
                )
            }
        </div>
    )
}

export default ProductList;