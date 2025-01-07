import { useState, useEffect, useRef } from 'react';
import CustomerUpdateModel from '../../component/customer/CustomerUpdateModel';
import CustomerCreateModel from '../../component/customer/CustomerCreateModel';
import CustomerDeleteModel from '../../component/customer/CustomerDeleteModel';
import myaxios from '../../utils/myaxios';
// import { destroyDataTable, makeDataTable } from '../../utils/datatable';


const Customer = ({isNavOpen}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const dataTable = useRef(null);

    const [dataUpdate, setDataUpdate] = useState({ 
        id: "",
        name: "",
        email: "",
        mobile: ""
    });

    const [isToDelete, setIsToDelete] = useState(null);

    
    const loadData = () => {
        setIsLoading(true);
        myaxios.get('/list-customer')
        .then(response => {
            setData(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    };


    // useEffect(() => {
    //     const dt = makeDataTable(dataTable.current);

    //     return () => {
    //         destroyDataTable(dt);
    //     };  
    // }, [data]);


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
        <div>
            <div id="contentRef" className={isNavOpen}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="card px-5 py-5">
                                <div className="row justify-content-between ">
                                    <div className="align-items-center col">
                                        <h4>Customer</h4>
                                    </div>
                                    <div className="align-items-center col">
                                        <button data-bs-toggle="modal" data-bs-target="#create-modal" className="float-end btn m-0 bg-gradient-primary">Create</button>
                                    </div>
                                </div>
                                <hr className="bg-dark "/>
                                
                                <table className="table" id="tableData" ref={dataTable}>
                                    <thead>
                                        <tr className="bg-light">
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody id="tableList">

                                        {
                                            data.map((item, index) => (
                                                <tr key={item.id} className={index % 2 === 0 ? "even" : "odd"}>
                                                    <td className="sorting_1">{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.mobile}</td>
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
                
                
                <CustomerCreateModel loadAllData={loadData} />

                <CustomerUpdateModel data={dataUpdate} loadAllData={loadData} />

                <CustomerDeleteModel data={isToDelete} loadAllData={loadData} />

            </div>
        </div>
    );
};

export default Customer;