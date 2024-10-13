import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import hillel from "../../assets/certificates/Hillel-certificate.png";
import EnITStepPageOne from "../../assets/certificates/Kozeichuk-En-IT-Step-certificate-page-1.jpg";
import UkITStepPageOne from "../../assets/certificates/Козейчук-Укр-IT-Step-page-1.jpg";
import HillelPDF from "../../assets/documents/Hillel.pdf";
import EnITStepPDF from "../../assets/documents/Kozeichuk-En-IT-Step.pdf";
import UkITStepPDF from "../../assets/documents/Козейчук-Укр-IT-Step.pdf";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

import "./Certificates.css"

// Массив объектов с данными сертификатов
const certificates = [
    {
        image: hillel,
        title: "Hillel IT School",
        description: "Сертифікат про проходження курсу 'Вступ до Python' у Hillel IT School.",
        file: HillelPDF, // Путь к PDF-файлу
    },
    {
        image: EnITStepPageOne,
        title: "Step IT Academy (English)",
        description: "Сертифікат про завершення курсу Frontend Developer на англійській мові.",
        file: EnITStepPDF, // Путь к PDF-файлу
    },
    {
        image: UkITStepPageOne,
        title: "Step IT Academy (Ukrainian)",
        description: "Сертифікат про завершення курсу Frontend Developer українською мовою.",
        file: UkITStepPDF, // Путь к PDF-файлу
    },
];

export const Certificates = () => {
    const [open, setOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const handleClickOpen = (certificate) => {
        setSelectedCertificate(certificate);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCertificate(null);
    };

    return (
        <div className="certificate-conteyner">
            <Header />

            <div className='certificate-box'>
                {certificates.map((certificate, i) => (
                    <Card sx={{ maxWidth: 745, height:"max-content", position: 'relative' }} key={i}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                height='140'
                                image={certificate.image}
                                alt={certificate.title}
                            />

                            <IconButton
                                aria-label='settings'
                                onClick={() => handleClickOpen(certificate)}
                                sx={{
                                  position: 'absolute',
                                  top: 15,
                                  right: 0,
                                  zIndex: 1, // Чтобы кнопка была выше остальных элементов4
                                  color: "black",
                              }}
                            >
                                <MoreVertIcon />
                            </IconButton>

                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'>
                                    {certificate.title}
                                </Typography>
                                <Typography variant='body2' sx={{ color: "text.secondary" }}>
                                    {certificate.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>

            {/* Модальное окно */}
            {selectedCertificate && (
                <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                        <DialogContentText>
                            {selectedCertificate.title}
                        </DialogContentText>
                        <DialogContentText>
                            Нажмите на одну из кнопок ниже, чтобы открыть или скачать сертификат.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => window.open(selectedCertificate.file, "_blank")}>
                            Открыть PDF
                        </Button>
                        <Button onClick={() => {
                            const link = document.createElement("a");
                            link.href = selectedCertificate.file; // Путь к файлу
                            link.setAttribute("download", ""); // Атрибут для скачивания
                            document.body.appendChild(link);
                            link.click(); // Симуляция клика по ссылке
                            document.body.removeChild(link); // Удаление ссылки после скачивания
                        }}>
                            Скачать PDF
                        </Button>
                        <Button onClick={handleClose}>Закрыть</Button>
                    </DialogActions>
                </Dialog>
            )}

            <Footer />
        </div>
    );
};
