import "./loader.css";

const Loader = () => {
    return (
        <div
            className="flex justify-center items-center min-h-screen z-20">
            <div className="container relative">
                <div className="tiktok"></div>
                <div className="tiktok red"></div>
            </div>
        </div>
    );
};

export default Loader;
