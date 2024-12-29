export default function ImageCard({ image, onClick }) {
    const { urls, alt_description } = image;

    return (
        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={onClick}>
            <img src={urls.small} alt={alt_description || "Image"} style={{width: "380px", height: "250px", borderRadius: "8px"}}/>
        </div>
    );
};