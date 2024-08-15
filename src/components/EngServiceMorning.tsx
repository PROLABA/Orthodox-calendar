import { Flex, Select } from "antd";
import DeleteIcon from "./../assets/DeleteIcon.svg";
import Plus from "./../assets/plus.svg";
import ImageSlider from "./UI/ImageSlider";
import Note from "../assets/note.png";
import NoteIcon from "./../assets/note.svg";

export default function EngServiceMorning() {
    const images = [
        Note,
        Note,
        Note,
        Note,
        Note,
    ]

    return (
        <>
            <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                <div className="services-container" style={{ padding: "16px" }}>
                    <div className="head-service">
                        <Flex justify="space-between" className="flexed" align="center" style={{ width: "100%" }}>

                            <div className="title color-red" style={{
                                fontFamily: "SF Pro",
                                fontSize: "22px",
                                fontWeight: "Bold",
                                lineHeight: "24px",

                            }}>Morning</div>
                            <div className="deleteicon" style={{ cursor: "pointer" }}><img src={DeleteIcon} alt="" /></div>
                        </Flex >
                    </div >
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Having come to the temple and having put on the stole, the priest, standing before the Royal Gates, proclaims:</p>
                        <p>Blessed is our God always, now and ever, and forever and ever.</p>
                    </div>
                    <div className="chor" style={{ fontSize: "16px", paddingTop: "12px", paddingBottom: "8px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">
                            Хор:
                        </p>
                    </div>
                    <Flex gap={8}>
                        <Select
                            defaultValue={
                                'Choose a note'}
                            style={{ width: 330, height: 40, borderColor: "black", borderRadius: "12px" }}
                            options={[
                                { value: 'хор1', label: 'хор1', icon: NoteIcon },
                                { value: 'хор2', label: 'хор2', icon: NoteIcon },
                                { value: 'хор3', label: 'хор3', icon: NoteIcon },
                                { value: 'хор4', label: 'хор4', icon: NoteIcon },
                            ]}
                            optionRender={(option) => (
                                <Flex align="center" gap={8}>
                                    <img src={option.data.icon} alt="" />
                                    {option.data.label}
                                </Flex>
                            )}
                        />
                        <div className="btn-chor"><span style={{ paddingRight: "12px" }}><img src={Plus} alt="" /></span>
                            Add your own notes
                        </div>
                    </Flex>
                    <p style={{ paddingTop: "8px" }}>Господи, благослови!</p>
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Priest:</p>
                        <p>Glory to the Most Holy, and Consubstantial, and Life-giving, and Inseparable Trinity always, now and ever, and forever and ever.</p>
                    </div>
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Priest:</p>
                        <ImageSlider images={images} />
                    </div>
                </div >
            </div>

        </>
    );
}