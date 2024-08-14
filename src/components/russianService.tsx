import { Flex, Select } from "antd";
import DeleteIcon from "./../assets/DeleteIcon.svg";
import Plus from "./../assets/plus.svg";
import ImageSlider from "./UI/ImageSlider";
import Note from "../assets/note.png";

export default function RussianService() {
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

                            }}>Вечерняя</div>
                            <div className="deleteicon" style={{ cursor: "pointer" }}><img src={DeleteIcon} alt="" /></div>
                        </Flex >
                    </div >
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Придя во храм и возложив на себя епитрахиль, священник, став пред Царскими вратами возглашает:</p>
                        <p>Благословен Бог наш всегда, ныне и присно, и во веки веков.</p>
                    </div>
                    <div className="chor" style={{ fontSize: "16px", paddingTop: "12px", paddingBottom: "8px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">
                            Хор:
                        </p>
                    </div>
                    <div className="flexed" >
                        <Select

                            defaultValue={"Choose a note"}

                            style={{ width: 330, height: 40, borderColor: "black", borderRadius: "12px" }}
                            options={[
                                { value: 'хор1', label: 'хор1' },
                                { value: 'хор2', label: 'хор2' },
                                { value: 'хор3', label: 'хор3' },
                                { value: 'хор4', label: 'хор4', },
                            ]}
                        />
                        <div className="btn-chor"><span style={{ paddingRight: "12px" }}><img src={Plus} alt="" /></span>
                            Add your own notes
                        </div>
                    </div>
                    <p style={{ paddingTop: "8px" }}>Господи, благослови!</p>
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Иерей:</p>
                        <p>Слава Святей, и Единосущней, и Животворящей, и Нераздельней Троице всегда, ныне и присно, и во веки веков.</p>
                    </div>
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Иерей:</p>
                        <ImageSlider images={images} />
                    </div>
                </div >
            </div >
            <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                <div className="services-container" style={{ padding: "16px" }}>
                    <div className="head-service">
                        <Flex justify="space-between" className="flexed" align="center" style={{ width: "100%" }}>

                            <div className="title color-red" style={{
                                fontFamily: "SF Pro",
                                fontSize: "22px",
                                fontWeight: "Bold",
                                lineHeight: "24px",

                            }}>Вечерняя</div>
                            <div className="deleteicon" style={{ cursor: "pointer" }}><img src={DeleteIcon} alt="" /></div>
                        </Flex >
                    </div >
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Придя во храм и возложив на себя епитрахиль, священник, став пред Царскими вратами возглашает:</p>
                        <p>Благословен Бог наш всегда, ныне и присно, и во веки веков.</p>
                    </div>
                    <div className="chor" style={{ fontSize: "16px", paddingTop: "12px", paddingBottom: "8px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">
                            Хор:
                        </p>
                    </div>
                    <div className="flexed" >
                        <Select

                            defaultValue={"Choose a note"}

                            style={{ width: 330, height: 40, borderColor: "black", borderRadius: "12px" }}
                            options={[
                                { value: 'хор1', label: 'хор1' },
                                { value: 'хор2', label: 'хор2' },
                                { value: 'хор3', label: 'хор3' },
                                { value: 'хор4', label: 'хор4', },
                            ]}
                        />
                        <div className="btn-chor"><span style={{ paddingRight: "12px" }}><img src={Plus} alt="" /></span>
                            Add your own notes
                        </div>
                    </div>
                    <p style={{ paddingTop: "8px" }}>Господи, благослови!</p>
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Иерей:</p>
                        <p>Слава Святей, и Единосущней, и Животворящей, и Нераздельней Троице всегда, ныне и присно, и во веки веков.</p>
                    </div>
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Иерей:</p>
                        <ImageSlider images={images} />
                    </div>
                </div >
            </div>
            <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                <div className="services-container" style={{ padding: "16px" }}>
                    <div className="head-service">
                        <Flex justify="space-between" className="flexed" align="center" style={{ width: "100%" }}>

                            <div className="title color-red" style={{
                                fontFamily: "SF Pro",
                                fontSize: "22px",
                                fontWeight: "Bold",
                                lineHeight: "24px",

                            }}>Вечерняя</div>
                            <div className="deleteicon" style={{ cursor: "pointer" }}><img src={DeleteIcon} alt="" /></div>
                        </Flex >
                    </div >
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Придя во храм и возложив на себя епитрахиль, священник, став пред Царскими вратами возглашает:</p>
                        <p>Благословен Бог наш всегда, ныне и присно, и во веки веков.</p>
                    </div>
                    <div className="chor" style={{ fontSize: "16px", paddingTop: "12px", paddingBottom: "8px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">
                            Хор:
                        </p>
                    </div>
                    <div className="flexed"  >
                        <Select

                            defaultValue={"Choose a note"}

                            style={{ width: 330, height: 40, borderColor: "black", borderRadius: "12px" }}
                            options={[
                                { value: 'хор1', label: 'хор1' },
                                { value: 'хор2', label: 'хор2' },
                                { value: 'хор3', label: 'хор3' },
                                { value: 'хор4', label: 'хор4', },
                            ]}
                        />
                        <div className="btn-chor"><span style={{ paddingRight: "12px" }}><img src={Plus} alt="" /></span>
                            Add your own notes
                        </div>
                    </div>
                    <p style={{ paddingTop: "8px" }}>Господи, благослови!</p>
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Иерей:</p>
                        <p>Слава Святей, и Единосущней, и Животворящей, и Нераздельней Троице всегда, ныне и присно, и во веки веков.</p>
                    </div>
                    <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}>
                        <p className="color-red">Иерей:</p>
                        <ImageSlider images={images} />
                    </div>
                </div >
            </div>
        </>
    );
}