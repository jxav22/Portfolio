import React from 'react'
import styles from "./PdfViewer.module.css"

type Props = {
    hidePdf: () => void;
}

function PdfViewer({hidePdf}: Props) {
    const pdfUrl = '/Jason Xavier CV 2023.pdf'; // Relative path to your PDF file inside the public directory

    const handleButtonClick = () => {
        hidePdf();
    }

    return (
      <div className={styles.viewer}>
        <iframe className={styles.iframe} src={pdfUrl} title="PDF Viewer" />
        <button className={styles.backButton} onClick={handleButtonClick}>BACK</button>
      </div>
    );
}

export default PdfViewer;