import React, {useCallback, useState} from "react";
import {useDropzone} from "react-dropzone";
import {FileUploadWithProgress} from "./FileUploadWithProgress";

const MultiFileUpload = () => {
    const [files, setFiles] = useState([])
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles)
        setFiles(acceptedFiles)
    }, [])
    const {getInputProps, getRootProps} = useDropzone({onDrop})
    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()}/>
                <p>Drag 'n' drop files here, or click here to select files </p>
            </div>
            {files.map(file => (<FileUploadWithProgress file={file} />))}
        </>
    )
}

export {MultiFileUpload}
