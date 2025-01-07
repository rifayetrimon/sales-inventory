import { useRef } from 'react';
import myaxios from '../../utils/myaxios';
import { errorToast, successToast } from '../../utils/toast';


const CategoryUpdateModel = ({ dataUpdate, loadAllData }) => {


    const closeBtn = useRef(null);

    const handleUpdate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        myaxios.post("/update-category", formDataObj)
            .then((response) => {
                if (response.data === 1) {
                    successToast("Category updated successfully");
                    closeBtn.current.click();
                    loadAllData();
                } else {
                    console.error(response);
                    errorToast("Failed to update category");
                }
            })                
            .catch((error) => {
                console.error(error);
                errorToast("Failed to update category");
            });

    };





    return (
        <div>
            <div className="modal animated zoomIn" id="update-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Category</h5>
                        </div>
                        <div className="modal-body">
                            <form id="update-form" onSubmit={handleUpdate}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 p-1">
                                            <label className="form-label">Category Name *</label>
                                            <input defaultValue={dataUpdate.name} name='name' type="text" className="form-control" id="categoryNameUpdate"/>
                                            <input defaultValue={dataUpdate.id} name='id' className="d-none" id="updateID"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button id="update-modal-close" className="btn bg-gradient-primary" data-bs-dismiss="modal" aria-label="Close" ref={closeBtn}>Close</button>
                            <button type='submit' form="update-form" id="update-btn" className="btn bg-gradient-success" >Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryUpdateModel;