import express from 'express';
import authRoutes from './routes/auth';
import cookieParser from "cookie-parser";
import cors from 'cors';
import compression from 'compression';
import fileUpload from 'express-fileupload'
import wasteRequirementsRoutes from './routes/wasteRequirement';
import innovativeProductRoutes from './routes/innovativeProduct';
import userRoutes from './routes/user';
import paymentRoutes from './routes/payment';


const app = express();
require("dotenv").config();

app.use(cors({
    origin: 'https://resculpt.abhiramverse.tech',
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(express.json({limit: '50mb'}));
app.use(fileUpload({
    useTempFiles: true
}));

app.use('/api/v1/auth', authRoutes);
app.use(wasteRequirementsRoutes);
app.use(innovativeProductRoutes);
app.use(userRoutes);
app.use(paymentRoutes);


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})