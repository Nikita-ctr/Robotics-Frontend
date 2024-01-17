import styles from "./page.module.css"
import addImage from "../../static/images/addprojectimage.png"
import Image from "next/image";
import Input from "@/app/components/UI/Inputs/Input/Input";
import InputSelect from "@/app/components/UI/Inputs/InputSelect/InputSelect";

export default function AddProject() {
    return (
        <main className={styles.form_container}>
            <Image width={0} height={500} className={styles.image} src={addImage} alt={"some image"}/>
            <div className={styles.form}>
                <div className={styles.inputs_container}>
                    <Input placeHolder={"Название проекта"} label={"Название проекта"}/>
                    <InputSelect></InputSelect>
                    <Input placeHolder={"Описание проекта"} label={"Описание проекта"}/>
                    <Input placeHolder={"Ссылка ваш на проект"} label={"Ссылка на проект"}/>
                    <Input placeHolder={"Авторы проекта"} label={"Авторы"}/>
                </div>
            </div>
        </main>
    )
}
