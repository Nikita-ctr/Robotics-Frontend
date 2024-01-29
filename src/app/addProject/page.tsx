import styles from "./page.module.css";
import addImage from "../../static/images/addprojectimage.png";
import Image from "next/image";
import Input from "@/app/components/UI/Inputs/Input/Input";
import InputSelect from "@/app/components/UI/Inputs/InputSelect/InputSelect";
import SecondaryButton from "@/app/components/UI/Buttons/SecondaryButton/SecondaryButton";

export default function AddProject() {
    const directionOptions = [
        "Робототехника",
        "Цифровой инжиниринг",
        "Техническое зрение",
        "Разработка ПО",
    ];

    const statusOptions = [
        "В процессе выполенения",
        "НИР",
        "Внедрен в производство",
    ];

    return (
        <main className={styles.form_container}>
            <Image
                width={0}
                height={500}
                className={styles.image}
                src={addImage}
                alt={"some image"}
            />
            <div className={styles.title}>Добавление проекта</div>
            <div className={styles.form}>
                <div className={styles.inputs_container}>
                    <Input placeHolder={"Название проекта"} label={"Название проекта"}/>
                    <InputSelect
                        placeHolder={"Выберите направление"}
                        label={"Направление"}
                        options={directionOptions}
                    />
                    <Input
                        placeHolder={"Описание проекта"}
                        label={"Описание проекта"}
                        className={styles.discription_container}
                    />
                    <Input
                        placeHolder={"Ссылка ваш на проект"}
                        label={"Ссылка на проект"}
                    />
                    <Input placeHolder={"Авторы проекта"} label={"Авторы"}/>
                    <InputSelect
                        placeHolder={"Выберите статус проекта"}
                        label={"Статус проекта"}
                        options={statusOptions}
                    />
                </div>
                <div className={styles.button_container}>
                    <button className={styles.cancel_button}>Отменить</button>
                    <button className={styles.confirm_button}>Сохранить</button>
                </div>
            </div>
        </main>
    );
}