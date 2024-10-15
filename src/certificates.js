import hillel from "./assets/certificates/Hillel-certificate.png";
import EnITStepPageOne from "./assets/certificates/Kozeichuk-En-IT-Step-certificate-page-1.jpg";
import UkITStepPageOne from "./assets/certificates/Козейчук-Укр-IT-Step-page-1.jpg";
import HillelPDF from "./assets/documents/Hillel.pdf";
import EnITStepPDF from "./assets/documents/Kozeichuk-En-IT-Step.pdf";
import UkITStepPDF from "./assets/documents/Козейчук-Укр-IT-Step.pdf";


// Массив объектов с данными сертификатов
const certificates = [
    {
        image: hillel,
        title: "Hillel IT School",
        description:
            "Сертифікат про проходження курсу 'Вступ до Python' у Hillel IT School.",
        file: HillelPDF,
    },
    {
        image: EnITStepPageOne,
        title: "Step IT Academy (English)",
        description:
            "Сертифікат про завершення курсу Frontend Developer на англійській мові.",
        file: EnITStepPDF,
    },
    {
        image: UkITStepPageOne,
        title: "Step IT Academy (Ukrainian)",
        description:
            "Сертифікат про завершення курсу Frontend Developer українською мовою.",
        file: UkITStepPDF,
    },
];

export default certificates