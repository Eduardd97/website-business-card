import { useEffect, useState } from "react";
import "./AdminPage.css"; // Подключите файл стилей, если он есть
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const AdminPage = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true); // Состояние загрузки
    const [error, setError] = useState(null); // Состояние ошибки

    useEffect(() => {
        const fetchMessages = async () => {
            setLoading(true); // Устанавливаем загрузку в true
            setError(null); // Сбрасываем ошибку перед загрузкой
            try {
                const response = await fetch(
                    "http://localhost:5000/api/message_me"
                );
                if (!response.ok) {
                    throw new Error("Ошибка при загрузке сообщений"); // Обработка ошибки сети
                }
                const data = await response.json();
                setMessages(data); // Устанавливаем полученные сообщения в состояние
            } catch (error) {
                console.error("Error fetching messages", error);
                setError(error.message); // Устанавливаем сообщение об ошибке
            } finally {
                setLoading(false); // Завершаем загрузку
            }
        };

        fetchMessages();
    }, []); // Запускать один раз при монтировании компонента

    return (
        <div>
          <Header/>
            <div
                className='admin-page-container'
                style={{
                    backgroundColor: "black",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    alignItems: "center",
                    gap: 40,
                    padding: "40px 0 0 0",
                }}
            >
                <h1>Сообщения</h1>
                {loading && <p>Загрузка сообщений...</p>}{" "}
                {/* Индикатор загрузки */}
                {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}{" "}
                {/* Сообщение об ошибке */}
                {!loading && !error && messages.length === 0 && (
                    <p>Нет сообщений</p>
                )}{" "}
                {/* Сообщение об отсутствии данных */}
                <div
                    className='messages-list'
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        gap: 25,
                        overflowY: "auto", // Добавляем прокрутку, если сообщений много
                    }}
                >
                    {messages.map((message) => (
                        <section
                            key={message.id}
                            className='message-item'
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                color: "white",
                                fontSize: 18,
                                width: "100%",
                                textAlign: "center",
                                alignItems: "center",
                                gap: 15,
                            }}
                        >
                            <h3>
                                {message.firstName} {message.lastName}
                            </h3>
                            <span>{message.email}</span>
                            <p
                                style={{
                                    maxWidth: "100%",
                                    overflowWrap: "break-word",
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                }}
                            >
                                {message.message}
                            </p>
                            <em>
                                {new Date(message.createdAt).toLocaleString()}
                            </em>
                            <span
                                style={{
                                    width: "30%",
                                    border: "1px solid white",
                                    margin: "40px 0 0 0",
                                }}
                            ></span>
                        </section>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};
