import React from 'react'
import styles from "./PdfViewer.module.css"

type Props = {}

function PdfViewer({}: Props) {
    const pdfUrl = '/Jason Xavier CV 2023.pdf'; // Relative path to your PDF file inside the public directory

    return (
      <div className={styles.viewer}>
        <iframe className={styles.iframe} src={pdfUrl} title="PDF Viewer" />
      </div>
    );
}

export default PdfViewer;