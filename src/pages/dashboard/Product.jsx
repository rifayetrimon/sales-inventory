import { useEffect, useState, useRef } from "react";
import myaxios from "../../utils/myaxios";
import ProductCreateModel from "../../component/product/ProductCreateModel";


const Product = ({ isNavOpen }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const dataTable = useRef(null);


    const loadData = () => {
        setIsLoading(true);
        myaxios.get('/list-product')
        .then(response => {
            setData(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {    
        loadData();
    }, []);




    return (
        <div>
            <div id="contentRef" className={ isNavOpen }>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="card px-5 py-5">
                                <div className="row justify-content-between ">
                                    <div className="align-items-center col">
                                        <h4>Product</h4>
                                    </div>
                                    <div className="align-items-center col">
                                        <button data-bs-toggle="modal" data-bs-target="#create-modal" className="float-end btn m-0  bg-gradient-primary">Create</button>
                                    </div>
                                </div>
                                <hr className="bg-dark "/>
                                <table className="table" id="tableData">
                                    <thead>
                                        <tr className="bg-light">
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Unit</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tableList">

                                        {
                                            data.map((item, index) => {
                                                return (
                                                    <tr className="odd">
                                                        <td className="sorting_1"><img className="w-15 h-auto" alt="" src="./uploads/1-1692093134-2.jpg"/></td>
                                                        <td>{item.name}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.unit}</td>
                                                        <td>
                                                            <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                                            <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <ProductCreateModel loadAllData={loadData} />

            </div>
        </div>
    );
};

export default Product;