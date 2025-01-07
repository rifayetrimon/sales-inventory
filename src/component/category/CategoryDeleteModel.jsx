import{ useRef } from 'react';
import myaxios from '../../utils/myaxios';
import { errorToast, successToast } from '../../utils/toast';


const CategoryDeleteModel = ({ dataDelete, loadAllData }) => {

    const closeBtn = useRef(null);

    const handleDelete = (e) => {
        e.preventDefault();

        myaxios.post("/delete-category", { id: dataDelete })
            .then((response) => {
                if (response.data === 1) {
                    successToast("Category removed successfully");
                    closeBtn.current.click();
                    loadAllData();
                } else {
                    console.error(response);
                    errorToast("Failed to remove category");
                }
            })
            .catch((error) => {
                console.error(error);
                errorToast("Failed to remove category");
            });
    };
    


    return (
        <div>
            <div className="modal animated zoomIn" id="delete-modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <h3 className=" mt-3 text-warning">Delete !</h3>
                            <p className="mb-3">Once delete, you can't get it back.</p>
                            <input className="d-none" id="deleteID"/>
                        </div>
                        <div className="modal-footer justify-content-end">
                            <div>
                                <button type="button" id="delete-modal-close" className="btn bg-gradient-success mx-2" data-bs-dismiss="modal" ref={closeBtn}>Cancel</button>
                                <button onClick={handleDelete} type="button" id="confirmDelete" className="btn bg-gradient-danger" >Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDeleteModel;