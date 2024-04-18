import { FiPhoneCall } from "react-icons/fi";

const ModalCall = () => {
    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box text-center p-6">
                    <h3 className="font-bold  text-3xl">Contact Us</h3>
                    <div className="flex my-5 justify-center">
                        <img className="w-[70%]" src="https://i.ibb.co/hRBXMRc/image.png" alt="" />
                    </div>
                    <p className="md:text-3xl text-2xl font-semibold text-green-400 flex  justify-center items-center gap-4"><FiPhoneCall className="text-green-500 text-3xl"></FiPhoneCall>+088 01876158706</p>
                    <div className="border my-5"></div>
                    <p className="text-lg font-medium">Please quote property reference</p>
                    <p className="text-lg font-medium">When calling us</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ModalCall;