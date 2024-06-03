import React, { useState, useContext } from "react";
import itemImg from '../../assets/image/item.png'
import QuantitySelectionCart from "./QuantitySelecotionCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import BeatLoader from "react-spinners/BeatLoader";
import { AppContext } from "../../Context/AppContext";
import DialogForm from "../../components/Dialog/DialogForm"
import axios from "axios";

const CartItem = ({ value }) => {
    const [quantity, setQuantity] = useState(value.amount)
    const [isLoading, setIsLoading] = useState(false)
    const { fetchCart } = useContext(AppContext)
    const [dialogVisible, setDialogVisible] = useState(false);
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };
    const deleteItem = () => {
        setIsLoading(true)
        axios.delete(`http://localhost:8082/carts/665995e6c747351b4d9a709b?customerId=6659770a93ff789d47918207&itemId=${value._id}`)
            .then(() => {
                toast.success('Xóa sản phẩm trong giỏ hàng thành công', {
                    position: "top-right",
                    autoClose: 700,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    onClose: async () => {
                        await fetchCart()
                    }
                });
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleDialogResponse = (confirmed) => {
        setDialogVisible(false);
        if (confirmed) {
            deleteItem();
        }
    };
    return (
        <>
            {isLoading == false ?
                value && (
                    <div className="w-full flex flex-row mt-3 pt-3 border-t border-gray-300">
                        <ToastContainer />
                        <div className="w-1/12 flex items-center justify-center">
                            <i className="fa-solid fa-xmark-circle cursor-pointer hover:text-[#fc0307]"
                                onClick={() => setDialogVisible(true)}></i>
                        </div>
                        <div className="w-11/12 md:w-7/12 flex flex-row gap-3">
                            <img
                                src={value.item.image}
                                className="w-[100px] h-[100px] border rounded-xl p-2"
                            />
                            <div className="h-full flex flex-col justify-between  w-full md:w-auto ">
                                <div className="w-full">
                                    <p className="text-xl font-semibold truncate">{value.item.name}</p>
                                    <p className="mt-1 font-medium text-gray-500">{formatNumber(value.item.price - value.item.price * value.item.tag)}đ</p>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center  md:hidden">
                                    <QuantitySelectionCart
                                        quantity={quantity}
                                        updateQuantity={setQuantity}
                                        limit={20}
                                    />
                                    <p className="w-auto text-end font-medium text-[17px]">{formatNumber(value.price)}đ</p>

                                </div>
                            </div>
                        </div>
                        <div className="w-2/12 md:flex justify-center hidden">
                            <QuantitySelectionCart
                                quantity={quantity}
                                updateQuantity={setQuantity}
                                limit={20}
                            />
                        </div>
                        <p className="w-2/12 text-end font-medium text-[17px] md:block hidden">{formatNumber(value.price)}đ</p>
                        {dialogVisible && <DialogForm onDialog={handleDialogResponse} />}
                    </div>
                )
                :
                <div className="flex justify-center items-center h-[250px]">
                    <BeatLoader
                        color={"#36d7b7"}
                        size={30}
                    />
                </div>
            }
        </>
    );
}

export default CartItem;