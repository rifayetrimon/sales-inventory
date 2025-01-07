import { useState, useEffect, useRef } from 'react';
import myaxios from '../../utils/myaxios';
import CatgoryCreateModel from '../../component/category/CatgoryCreateModel';
import CategoryUpdateModel from '../../component/category/CategoryUpdateModel';
import CategoryDeleteModel from '../../component/category/CategoryDeleteModel';

const Category = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const dataTable = useRef(null);

    const [dataUpdate, setDataUpdate] = useState({ 
        id: "",
        name: ""
    });


    const [isToDelete, setIsToDelete] = useState(null);


    const loadData = () => {
        setIsLoading(true);
        myaxios.get('/list-category')
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


    const handleUpdate = (itemId) => {
        itemId = parseInt(itemId);
        const item = data.find(item => item.id === itemId);

        setDataUpdate({...item});
    };



    const handleDelete = (itemId) => {
        setIsToDelete(itemId);
    };




    if (isLoading) {
        return (
            <div id="loader" className="LoadingOverlay">
                <div className="Line-Progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        );
    }





    


    return (
        <div >
             <div id="contentRef" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="card px-5 py-5">
                                <div className="row justify-content-between ">
                                    <div className="align-items-center col">
                                        <h4>Category</h4>
                                    </div>
                                    <div className="align-items-center col">
                                        <button data-bs-toggle="modal" data-bs-target="#create-modal" className="float-end btn m-0 bg-gradient-primary">Create</button>
                                    </div>
                                </div>
                                <hr className="bg-secondary"/>
                                <div className="table-responsive">
                                    <table className="table" id="tableData">
                                        <thead>
                                            <tr className="bg-light">
                                                <th>No</th>
                                                <th>Category</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableList">
                                            
                                            {
                                                data.map((item, index) => (
                                                    <tr key={item.id} className={index % 2 === 0 ? "even" : "odd"}>
                                                        <td className="sorting_1">{index + 1}</td>
                                                        <td>{item.name}</td>
                                                        <td>
                                                        <button  data-bs-toggle="modal" data-bs-target="#update-modal" type="button" className="btn editBtn btn-sm btn-outline-success ms-2" 
                                                        onClick={() => handleUpdate(item.id)}>Edit</button>

                                                        <button data-bs-toggle="modal" data-bs-target="#delete-modal" type="button" className="btn deleteBtn btn-sm btn-outline-danger ms-2" 
                                                        onClick={() => handleDelete(item.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                        
                                                ))
                                            }                     
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CatgoryCreateModel loadAllData={loadData} />

                <CategoryUpdateModel loadAllData={loadData} dataUpdate={dataUpdate} />

                <CategoryDeleteModel loadAllData={loadData} dataDelete={isToDelete} />

            </div>
        </div>
    );
};

export default Category;