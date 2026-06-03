import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "../../styles/components/Accordion.module.scss"
import { fetchContent } from "../../lib/contentApi";

export default function SimpleAccordion() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetchContent("faqs")
            .then(setItems)
            .catch(() => setItems([]));
    }, []);

    if (items.length) {
        return (
            <div className={styles.back__accordion}>
                {items.map((item) => (
                    <Accordion className={styles.acc} key={item.id || item.question}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls={`faq-${item.id || item.question}`}
                            id={`faq-${item.id || item.question}-header`}
                            className={styles.wrapp}
                        >
                            <Typography className={styles.accordion}>{item.question}</Typography>
                        </AccordionSummary>
                        <Typography className={styles.panel}>{item.answer}</Typography>
                    </Accordion>
                ))}
            </div>
        );
    }

    return (
        <div className={styles.back__accordion}>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}>Чи можна змінювати час доставки\місце?
                    </Typography>
                </AccordionSummary>

                <Typography className={styles.panel}>
                    Так, зміни можливі. Якщо потрібно скоригувати час або адресу доставки,
                    повідомте нам заздалегідь, і ми постараємося підібрати зручний варіант.
                </Typography>

            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}>Як відбувається доставка?
                    </Typography>
                </AccordionSummary>

                    <Typography className={styles.panel}>
                        Доставка здійснюється кур'єром у погоджений часовий інтервал.
                        Ви заздалегідь знаєте, коли очікувати замовлення, тому зручно планувати день.
                    </Typography>

            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> Як і в чому приїжджає їжа?
                    </Typography>
                </AccordionSummary>

                    <Typography className={styles.panel}>
                        Усі страви приїжджають у герметичних порційних контейнерах, які зручно
                        зберігати в холодильнику і брати з собою. Упаковка зберігає свіжість та охайний вигляд страв.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> Коли ви готуєте?
                    </Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        Ми готуємо регулярно невеликими партіями, щоб їжа залишалася свіжою та смачною.
                        Меню складається з урахуванням графіка доставки, тому ви отримуєте страви в оптимальному стані.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> Які продукти ви використовуєте?
                    </Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        Ми використовуємо свіжі продукти і стараємося робити раціон збалансованим за білками,
                        жирами та вуглеводами. Основний акцент робимо на якості інгредієнтів і зрозумілому складі страв.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> Я буду їсти одне й те саме?
                    </Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        Ні, меню складається з чергуванням страв, щоб харчування не було одноманітним.
                        Ми стараємося зберігати баланс між користю, насиченням і різноманіттям смаків.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> У мене алергія та непереносимість певних
                        продуктів</Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        Повідомте нам про це заздалегідь під час оформлення замовлення. Ми врахуємо обмеження і підкажемо,
                        яка програма підійде краще, або обговоримо можливі заміни.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> У якій послідовності все їсти?
                    </Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        Краще дотримуватися послідовності прийомів їжі, зазначеної в програмі:
                        так раціон виходить більш збалансованим, а відчуття ситості зберігається на весь день.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> Чи можна заморожувати програму?
                    </Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        У більшості випадків краще зберігати страви в холодильнику та вживати їх у рекомендовані терміни.
                        Якщо потрібна пауза в програмі, краще заздалегідь зв'язатися з нами і погодити перенесення доставки.
                    </Typography>
            </Accordion>

        </div>
    );
}
