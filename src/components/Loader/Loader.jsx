import { LineWave } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
    return (
        <div style={{ textAlign: "center", margin: "20px 0" }} className={css.loaderContainer}>
            <LineWave
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave-loading"
                wrapperStyle={{}}
                wrapperClass=""
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </div>
    );
};