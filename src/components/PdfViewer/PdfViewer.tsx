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
        <div className={styles.backButton} onClick={handleButtonClick} title="*professional experiance in Comic Sans*">
          {"<< CLICK HERE TO GO BACK"}
        </div>
        <iframe className={styles.iframe} src={pdfUrl} title="PDF Viewer" />
      </div>
    );
}

export default PdfViewer;