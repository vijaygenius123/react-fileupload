import {useEffect, useState} from "react";
import {Grid, LinearProgress} from "@mui/material";

const uploadFile = (file, onProgress) => {
    const url = 'https://api.cloudinary.com/v1_1/demo/image/upload'
    const key = 'docs_upload_example_us_preset'

    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest()
        xhr.open("POST", url)
        xhr.onload = () => {
            const resp = JSON.parse(xhr.responseText)
            res(resp.secure_url)
        }
        xhr.onerror = (evt) => rej(evt)
        xhr.upload.onprogress = (evt) => {
            if (evt.lengthComputable) {
                const {loaded, total} = evt,
                    percentage = loaded * 100 / total
                onProgress(Math.round(percentage))
            }
        }

        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', key)
        xhr.send(formData)

    })
}


export const FileUploadWithProgress = ({file}) => {


    const [progress, setProgress] = useState(0);
    useEffect(() => {
        async function upload() {
            const url = await uploadFile(file, setProgress)
            console.log(url)
        }

        upload()
    },[file]);
    return (
        <Grid item>
            <LinearProgress value={progress} variant={"determinate"}/>
        </Grid>
    )
}
