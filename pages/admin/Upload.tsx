// imports from frameworks
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
// imports from components
import axios from "axios";
// imports from clients/configs
import { ironOptions } from "../../lib/config/iron-config";
import { withSessionSsr } from "../../lib/config/withSession";

function TLDR() {
    // set tldr data from props, will be default on initial creation
    const [tldr, setTldr] = useState({});
    // Update create state w/ text input data
    function handleChange(e) {
        setTldr({
            ...tldr,
            [e.target.name]: e.target.value,
        });
    }
    // Update date from and sort date
    function handleDateFromChange(e) {
        const date = e.target.value.split("-");
        date[0] = date[0].slice(-2);
        setTldr({
            ...tldr,
            [e.target.name]: date.reverse().join("."),
            sort_date: parseInt(e.target.value.split("-").join("")),
        });
    }
    // Update date to
    function handleDateToChange(e) {
        const date = e.target.value.split("-");
        date[0] = date[0].slice(-2);
        setTldr({
            ...tldr,
            [e.target.name]: date.reverse().join("."),
        });
    }
    // Main image upload
    // -----------------
    // States for image upload
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedFile, setSelectedFile] = useState<File>();
    const [currentImage, setCurrentImage] = useState("");
    // fallback image upload currently not in use since
    // better solution found with process watching for image upload

    // Upload main image and set main_image_src in state
    const handleMainImageUpload = async () => {
        setUploading(true);
        try {
            // if no file selected, return
            if (!selectedFile) {
                setUploading(false);
                return;
            }
            // if file is too big, return
            if (selectedFile.size > 3000000) {
                alert("Datei ist zu groß. Maximal 3MB erlaubt.");
                setUploading(false);
                return;
            } else {
                // set formData and send to backend
                // -------------------------------
                // set uid/name space safe file name and keep original file extension
                let fileNameArray = selectedFile.name.split(".");
                let fileExtension = fileNameArray[fileNameArray.length - 1];
                // create formData and append file and upload preset
                const formData = new FormData();
                formData.append("upload_preset", "ml_default");
                formData.append(
                    "file",
                    selectedFile,
                    // rename file to image_ + current time in milliseconds + original file extension
                    "main_image_" + Date.now() + "." + fileExtension
                );
                // send formData
                const { data } = await axios.post(
                    "/api/uploadImages",
                    formData
                );
                console.log(data);
            }
        } catch (error) {
            console.log("Error uploading file");
        }

        setUploading(false);
    };
    // Watch for current image change and set as main image
    useEffect(() => {
        setTldr({
            ...tldr,
            main_image_src: currentImage,
        });
    }, [currentImage]);
    // Watch for fallback image change and set as main image fallback
    // currently not in use since better solution found with process watching for image upload

    // use Router to redirect after create

    const router = useRouter();

    // Create exhibition

    return (
        <>
            <div className="hero_slider">
                <img className="hero_slider_image" src={selectedImage} alt="" />
                <div className="hero_slider_details">
                    <div className="hero_slider_details_left"></div>
                </div>
            </div>
            {/* inputs for main image with headline */}
            <div className="inputs">
                <h3>1. Abschnitt Hauptinformationen</h3>
                <h3>Hauptbild hochladen/ändern:</h3>
                <p>
                    Laden Sie ein Bild mit maximal 3MB als .jpg hoch.
                    <br />
                    Dateien lassen sich{" "}
                    <a
                        href="https://www.freeconvert.com/de/image-converter"
                        target="_blank"
                        rel="noreferrer"
                        className="red"
                    >
                        hier
                    </a>{" "}
                    herunterrechnen.
                </p>
                <p>
                    Einstellungen: <br />
                    Breite: 4000px <br />
                    Maximale Dateigröße: 3MB <br />
                    Format: .jpg
                </p>
                <div>
                    <input
                        type="file"
                        onChange={({ target }) => {
                            // set selected image for use with axios
                            if (target.files) {
                                const file = target.files[0];
                                setSelectedImage(URL.createObjectURL(file));
                                setSelectedFile(file);
                            }
                        }}
                    />
                    <button
                        onClick={handleMainImageUpload}
                        disabled={uploading}
                        style={{ opacity: uploading ? ".5" : "1" }}
                    >
                        Hauptbild verwenden
                    </button>
                </div>
            </div>
        </>
    );
}

export default TLDR;

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
    // get user data from session
    const user = req.session.user || null;
    // if user is not logged in, return 404
    if (!user) {
        // return {
        //     redirect: {
        //         destination: "/admin",
        //         permanent: false,
        //     },
        // };
        return {
            notFound: true,
        };
    }
    return {
        props: {},
    };
});
