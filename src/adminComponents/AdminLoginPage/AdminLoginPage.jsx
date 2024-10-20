import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./AdminLoginPage.css";
import { AnimatedBackground } from "../AnimatedBackground/AnimatedBackground";

export const AdminLoginPage = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        adminLogin: "",
        adminPassword: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prev) => ({
            ...prev, // Расширяем предыдущее состояние
            [name]: value, // Обновляем только нужное поле
        }));
    };

    async function handleLogin(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        try {
            const response = await fetch("http://localhost:5000/api/admin_login/authenticate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: credentials.adminLogin, // Используем логин из состояния
                    password: credentials.adminPassword, // Используем пароль из состояния
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // Успешный вход
                // Перенаправьте на страницу админа
                navigate("/admin-page"); // Используйте navigate для перенаправления
            } else {
                const errorData = await response.json();
                console.error(errorData.message); // Неверные учетные данные
                // Обработка ошибки
            }
        } catch (error) {
            console.error("Error during login", error);
        }
    }

    return (
        <div className='admin-login-box'>
            <AnimatedBackground />
            <form className='log-in-form' onSubmit={handleLogin}>
                <TextField
                    required
                    id='filled-multiline-flexible'
                    label='Log-in'
                    name='adminLogin'
                    multiline
                    maxRows={4}
                    variant='filled'
                    sx={{
                        backgroundColor: "#383838",
                        borderRadius: "5px",
                        width: "100%",
                    }}
                    onChange={handleChange}
                />

                <TextField
                    required
                    id='filled-password-input'
                    label='Password'
                    name='adminPassword'
                    type='password'
                    autoComplete='current-password'
                    variant='filled'
                    sx={{
                        backgroundColor: "#383838",
                        borderRadius: "5px",
                        width: "100%",
                    }}
                    onChange={handleChange}
                />
                <Button variant='outlined' sx={{ width: "50%" }} type='submit'>
                    Outlined
                </Button>
            </form>
        </div>
    );
};
