import { successToast, errorToast } from '../../utils/toast';
import myaxios from '../../utils/myaxios';
import { useRef } from 'react';

const CustomerCreateModel = ({ loadAllData }) => {

    const closeBtn = useRef(null);

    const handleCreate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        myaxios.post("/create-customer", formDataObj)
            .then((response) => {
                if (response.status === 201) {
                    e.target.reset();
                    successToast("Customer created successfully");
                    closeBtn.current.click();
                    loadAllData();
                }else{
                    console.error(response);
                    errorToast("Failed to create customer");
                }
            })
            .catch((error) => {
                console.error(error);
                errorToast("Failed to create customer");
            });
    };


    return (
        <div>
            <div className="modal animated zoomIn" id="create-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-md modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Customer</h5>
                            </div>
                            <div className="modal-body">
                                <form id="save-form" onSubmit={handleCreate}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 p-1">
                                                <label className="form-label">Customer Name *</label>
                                                <input name='name' type="text" className="form-control" id="customerName"/>
                                                <label className="form-label">Customer Email *</label>
                                                <input name='email' type="text" className="form-control" id="customerEmail"/>
                                                <label className="form-label">Customer Mobile *</label>
                                                <input name='mobile' type="text" className="form-control" id="customerMobile"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button id="modal-close" className="btn bg-gradient-primary" data-bs-dismiss="modal" aria-label="Close" ref={closeBtn}>Close</button>
                                <button type='submit' form='save-form' id="save-btn" className="btn bg-gradient-success" >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CustomerCreateModel;