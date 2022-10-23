import {Card, CardContent, Container, Grid, Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import {Form, Formik} from "formik";
import {MultiFileUpload} from "../components/MultiFileUpload";

export const Home = () => {
    return (
        <>
            <Toolbar/>
            <Container>
                <Typography>File Upload</Typography>
                <Card>
                    <CardContent>
                        <Formik initialValues={{}} onSubmit={() => {
                        }}>
                            {({values, errors}) => (
                                <Form>
                                    <Grid container spacing={2} direction={'column'}>
                                        <h1>Hello</h1>
                                        <MultiFileUpload/>
                                    </Grid>
                                    <pre>
                                        {
                                            JSON.stringify({values, errors}, null, 4)
                                        }
                                    </pre>
                                </Form>
                            )}
                        </Formik>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}
