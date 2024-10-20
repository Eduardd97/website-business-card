import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

import "./Contacts.css";

export const Contacts = () => {
    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState(""); // Состояние для хранения содержимого диалога

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleClickOpen = (content) => {
        setDialogContent(content); // Устанавливаем содержимое диалога
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        try {
            const response = await fetch(
                "http://localhost:5000/api/message_me",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        message,
                    }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log("Сообщение отправлено:", data);
                // Выводим данные сообщения в диалоговом окне
                handleClickOpen(`Сообщение от ${data.firstName} ${data.lastName} (${data.email}): ${data.message}`);
                
                // Очищаем форму
                setFirstName("");
                setLastName("");
                setEmail("");
                setMessage("");
            } else {
                const errorData = await response.json();
                console.error(errorData.error);
                // Обработка ошибки
                handleClickOpen(`Ошибка: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Error sending message", error);
            handleClickOpen("Ошибка отправки сообщения. Пожалуйста, попробуйте позже.");
        }
    }; // Закрывающая скобка для функции handleSubmit

    return (
        <div className='contacts-container'>
            <Header />

            <div className='contacts-box'>
                <h2 className='contact-page-title' style={{ color: "#fff" }}>
                    My Contacts
                </h2>
                <section className='contact-icons'>
                    <a
                        href='https://www.linkedin.com/in/eduard-kozeichuk-843b06221/'
                        className='contact-link'
                        style={{ color: "#000" }}
                    >
                        <LinkedInIcon
                            sx={{
                                color: "#1976d2",
                                fontSize: 50,
                                cursor: "pointer",
                            }}
                        />
                    </a>
                    <a
                        href='https://t.me/Eduard0725'
                        className='contact-link'
                        style={{ color: "#000" }}
                    >
                        <TelegramIcon sx={{ color: "#1976d2", fontSize: 50 }} />
                    </a>

                    <EmailIcon
                        onClick={() =>
                            handleClickOpen("Email: kozeychukk1997@gmail.com")
                        }
                        sx={{
                            color: "#1976d2",
                            fontSize: 50,
                            cursor: "pointer",
                        }}
                    />
                    <PhoneAndroidIcon
                        onClick={() =>
                            handleClickOpen("Phone: +48 577 366 267")
                        }
                        sx={{
                            color: "#1976d2",
                            fontSize: 50,
                            cursor: "pointer",
                        }}
                    />
                </section>

                <h2 className='contact-page-title' style={{ color: "#fff" }}>
                    Message Me
                </h2>

                <form className='contact-form' onSubmit={handleSubmit}>
                    <TextField
                        id='filled-first-name'
                        label='First Name'
                        placeholder='Eduard'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        multiline
                        variant='filled'
                        sx={{
                            backgroundColor: "#5b5b5b",
                            width: "80%",
                            "& .MuiFilledInput-input": {
                                color: "#ffffff", // Цвет текста
                            },
                        }}
                    />
                    <TextField
                        id='filled-last-name'
                        label='Last Name'
                        placeholder='Kozeichuk'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        multiline
                        variant='filled'
                        sx={{
                            backgroundColor: "#5b5b5b",
                            width: "80%",
                            "& .MuiFilledInput-input": {
                                color: "#ffffff", // Цвет текста
                            },
                        }}
                    />
                    <TextField
                        id='filled-email'
                        label='Your Email'
                        placeholder='email@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        multiline
                        variant='filled'
                        sx={{
                            backgroundColor: "#5b5b5b",
                            width: "80%",
                            "& .MuiFilledInput-input": {
                                color: "#ffffff", // Цвет текста
                            },
                        }}
                    />
                    <TextField
                        id='filled-message'
                        label='Message'
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        variant='filled'
                        sx={{
                            backgroundColor: "#5b5b5b",
                            width: "80%",
                            "& .MuiFilledInput-input": {
                                color: "#ffffff", // Цвет текста
                            },
                        }}
                    />
                    <Button
                        variant='contained'
                        endIcon={<SendIcon />}
                        sx={{ width: 150, height: 50 }}
                        type='submit' // Обязательно добавьте type="submit" для кнопки
                    >
                        Send
                    </Button>
                </form>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='contact-info-dialog-title'
            >
                <DialogTitle id='contact-info-dialog-title'>
                    Contact Info
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>{dialogContent}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Footer />
        </div>
    );
};
