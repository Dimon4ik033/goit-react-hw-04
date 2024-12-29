import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";


export default function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const accessKey = "9RqUm9C6bqIXT72LfqT-UrGTcP1_eKI3PepbZaD3pXY";

    const fetchImages = async (newQuery = query, newPage = 1) => {
        setLoading(true);
        setError(null);

    const url = `https://api.unsplash.com/search/photos?query=${newQuery}&page=${newPage}&per_page=12&client_id=${accessKey}`;

    try {
      const response = await axios.get(url);
      if (newPage === 1) {
        setImages(response.data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      }
    } catch (error) {
      setError("Failed to load images. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
    };
    
    const handleSearch = (newQuery) => {
        if (!newQuery.trim()) {
            toast.error("Please enter a search term!");
            return;
        }
        setQuery(newQuery);
        setPage(1);
        fetchImages(newQuery, 1);
    };

    const handleLoadMore = async () => {
        const nextPage = page + 1;
        setPage(nextPage);
        await fetchImages(query, nextPage);

        setTimeout(() => {
            window.scrollBy({
            top: window.innerHeight / 2,
            behavior: "smooth", 
            });
        }, 100);
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            {error && <ErrorMessage message={error} />}
            <ImageGallery images={images} onImageClick={openModal} />
            {loading && <Loader />}
            {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
            <ImageModal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
            <Toaster position="top-right" />
        </div>
    );
};