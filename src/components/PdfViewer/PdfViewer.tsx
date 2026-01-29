import React from 'react'
import styles from "./PdfViewer.module.css"

type Props = {
    hidePdf: () => void;
}

function PdfViewer({hidePdf}: Props) {
    const pdfUrl = '/Jason_Xavier_CV_2026.pdf'; // Relative path to your 2026 CV file inside the public directory

    const handleButtonClick = () => {
        hidePdf();
    }

    return (
      <div className={styles.viewer}>
        <div className={styles.backButton} onClick={handleButtonClick} title="Back to portfolio">
          {"<< CLICK HERE TO GO BACK"}
        </div>
        <iframe className={styles.iframe} src={pdfUrl} title="Jason Xavier CV 2026" />
      </div>
    );
}

export default PdfViewer;