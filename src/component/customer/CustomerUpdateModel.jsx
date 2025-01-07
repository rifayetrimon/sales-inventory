import { useRef } from 'react';
import myaxios from '../../utils/myaxios';
import { errorToast, successToast } from '../../utils/toast';


const CustomerUpdateModel = ({ data, loadAllData }) => {

    const closeBtn = useRef(null);  

    const handleUpdate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        myaxios.post("/update-customer", formDataObj)
            .then((response) => {
                if (response.data === 1) {
                    successToast("Customer updated successfully");
                    closeBtn.current.click();
                    loadAllData();
                } else {
                    console.error(response);
                    errorToast("Failed to update customer");
                }
            })
            .catch((error) => {
                console.error(error);
                errorToast("Failed to update customer");
            });
    };



    return (
        <div>
            <div className="modal animated zoomIn" id="update-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update Customer</h5>
                            </div>
                            <div className="modal-body">
                                <form id="update-form" onSubmit={handleUpdate}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 p-1">
                                                <label className="form-label">Customer Name *</label>
                                                <input defaultValue={data.name} name='name' type="text" className="form-control" id="customerNameUpdate"/>
                                                
                                                <label className="form-label mt-3">Customer Email *</label>
                                                <input defaultValue={data.email} name='email' type="text" className="form-control" id="customerEmailUpdate"/>
                                                
                                                <label className="form-label mt-3">Customer Mobile *</label>
                                                <input defaultValue={data.mobile} name='mobile' type="text" className="form-control" id="customerMobileUpdate"/>
                                                
                                                <input type="text" className="d-none" name='id' defaultValue={data.id} id="updateID"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button id="update-modal-close" className="btn bg-gradient-primary" data-bs-dismiss="modal" aria-label="Close" ref={closeBtn}>Close</button>
                                <button id="update-btn" type="submit" form="update-form" className="btn bg-gradient-success" >Update</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CustomerUpdateModel;