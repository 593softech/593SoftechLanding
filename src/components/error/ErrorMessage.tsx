import Image from "next/image";
import imgNotFound from "@/assets/img/NotFound.png"

interface ErrorProps {
    errorMessage: string;
    onClick: () => void;
    btnMeessage?: string
}

const ErrorMessage: React.FC<ErrorProps> = ({ errorMessage, onClick, btnMeessage }) => {
    return (
        <div className="flex justify-center w-full py-16 ">
            <div className="mx-auto">
                <Image src={imgNotFound} className="w-96 mx-auto" alt="Error" />
                <div className="relative -top-16">
                    <span className="text-black-500 text-center text-lg -top-10">
                        <div className="grid">
                            <div className='text-2xl text-primary-500 text-center py-2'>
                                {errorMessage}
                            </div>
                            <div className="grid gap-y-1.5">

                                <div onClick={onClick}
                                    className="cursor-pointer bg-primary-400 hover:bg-primary-500 transition-colors duration-200 text-white w-fit mx-auto p-2 px-7 rounded-full">
                                    <span>{btnMeessage ? btnMeessage : "Reintentar"}</span>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ErrorMessage;
