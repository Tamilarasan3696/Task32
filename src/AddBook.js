import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
//import "yup-phone";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";


const bookValidationSchema = yup.object({
    poster: yup.string()
        .min(4, "Paste a valid url")
        .required("Image is mandatory "),
    name: yup.string()
        .min(2, "Please enter valid name")
        .required("Name is mandatory "),
    rating: yup.number()
        .min(0, "Rating is necessary").max(10)
        .required("Rating is necessary "),
    summary: yup.string()
        .min(10, "Summary is required")
        .required("Summary is required "),
});

export default function AddBook({ detail, setDetail }) {
    const formik = useFormik({
        initialValues: {
            poster: "",
            name: "",
            rating: "",
            summary: "",
        },
        validationSchema: bookValidationSchema,
        onSubmit: (newbook) => {
            createBook(newbook);
        },
    });
    const navigate = useNavigate();

   


    const createBook = async (newbook) => {
        console.log("createBook", newbook);
        try {
            const response = await axios.post("https://637c2c686f4024eac21f56a7.mockapi.io/book", newbook);
            console.log(response.data);
            navigate("/");
            setDetail([...detail, newbook]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit} style={{ marginLeft: '100px', marginTop: '50px' }} className="add-user-form">
            <h1 style={{ color: "green", fontWeight: 'bolder'}}>ADD BOOK 📚</h1><br />

            <TextField
                id="poster"
                name="poster"
                label="Image"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.poster}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}
            <br />
            <TextField
                id="name"
                name="name"
                label="name"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""}
            <br />
            <TextField
                id="rating"
                name="rating"
                label="rating"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rating}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.rating && formik.errors.rating
                ? formik.errors.rating
                : ""}
            <br />
            <TextField
                id="summary"
                name="summary"
                label="summary"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.summary}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.summary && formik.errors.summary
                ? formik.errors.summary
                : ""}
            <br />
            <Button
                type="submit"
                variant="contained"
                color="success"
                onClick={createBook}
            >
                Add New Book
            </Button>

            <Button variant="contained" color="success" onClick={() => navigate(-1)}>
                <ArrowBackIosIcon /> BACK
            </Button>
        </form>
    );
}