import { Flex, Select } from "antd";
import DeleteIcon from "./../assets/DeleteIcon.svg";
import ImageSlider from "./UI/ImageSlider";
import Note from "../assets/note.png";
import NoteIcon from "./../assets/Note.svg";
import Plus from "./../assets/plus.svg";

export default function RussianServiceMorning() {
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
                                paddingBottom: "12px",
                            }}>Утренняя</div>
                            <div className="deleteicon" style={{ cursor: "pointer" }}><img src={DeleteIcon} alt="" /></div>
                        </Flex >
                    </div >
                    {/* <div className="text" style={{ fontSize: "16px", paddingTop: "12px", lineHeight: "20px", fontWeight: "400" }}> */}
                    <div className="WordSection1">
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Всенощное бдение</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>На Всенощном бдении диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Востаните!</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, благослови! </span>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
                                <ImageSlider images={images} />

                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Иерей:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Слава Святей, и Единосущней,
                            и Животворящей, и Нераздельней Троице всегда, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь. </span>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Клирицы в олтаре:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Приидите, поклонимся Цареви нашему Богу. Приидите, поклонимся и припадем Христу
                            Цареви нашему Богу. Приидите, поклонимся и припадем Самому Христу, Цареви и
                            Богу нашему. Приидите, поклонимся и припадем Ему.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                    </div>
                </div>
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Псалом 103 </span></b>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Благослови, душе моя, Господа. / Благословен
                            еси, Господи. / Господи, Боже мой, возвеличился еси зело. / Благословен еси,
                            Господи. / Во исповедание и в велелепоту / облеклся еси. Благословен еси,
                            Господи. / Посреде гор пройдут воды. / Дивна дела Твоя, Господи. / Вся
                            премудростию сотворил еси. / Слава Ти, Господи, сотворившему вся&nbsp; Слава, и
                            ныне: Аллилуиа, аллилуиа, аллилуиа, слава Тебе Боже. </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></p>

                    </div>
                </div>
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Ектения великая </span></b>                         <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Миром Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О
                            свышнем мире и спасении душ наших, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О мире всего мiра,
                            благостоянии святых Божиих церквей и соединении всех, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О
                            святем храме сем и с верою, благоговением и страхом Божиим входящих в онь,
                            Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О Великом Господине и отце
                            нашем Святейшем Патриархе </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>(имярек), и о господине нашем
                                преосвященнейшем митрополите (или архиепископе, или </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>епископе</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>)
                                    (имярек)</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>, честнем пресвитерстве, во Христе диаконстве,
                                        о всем причте и людех, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О Богохранимей стране нашей,
                            властех и воинстве ея, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>О граде сем (или о веси сей,
                            или о святей обители сей), всяком граде, стране и верою живущих в них, Господу
                            помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О благорастворении воздухов, о
                            изобилии плодов земных и временех мирных, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О плавающих, путешествующих,
                            недугующих, страждущих, плененных и о спасении их, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О избавитися нам от всякия
                            скорби, гнева и нужды, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Заступи, спаси, помилуй и сохрани
                            нас, Боже, Твоею благодатию.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Пресвятую, пречистую,
                            преблагословенную, славную Владычицу нашу Богородицу и Приснодеву Марию со
                            всеми святыми помянувше, сами себе и друг друга, и весь живот наш Христу Богу
                            предадим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Тебе, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Возглашение:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Яко подобает Тебе
                            всякая слава, честь, и поклонение, Отцу, и Сыну, и Святому Духу, ныне и присно,
                            и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Псалом 1 Блажен муж </span></b>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Блажен муж, иже не иде на совет нечестивых.
                            Аллилуиа, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Яко весть Господь путь праведных, и путь
                            нечестивых погибнет. Аллилуиа, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Работайте Господеви со страхом и радуйтеся Ему
                            с трепетом. Аллилуиа, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Блажени вси надеющиися Нань. Аллилуиа, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Воскресни, Господи, спаси мя, Боже мой.
                            Аллилуиа, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господне есть спасение, и на людех Твоих
                            благословение Твое. Аллилуиа, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Слава, и ныне: Аллилуиа, аллилуиа, аллилуиа,
                            слава Тебе Боже. </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Трижды.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></b></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Ектения малая </span></b>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Паки и паки миром Господу
                            помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Заступи, спаси, помилуй и
                            сохрани нас, Боже, Твоею благодатию.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Пресвятую, пречистую,
                            преблагословенную, славную Владычицу нашу Богородицу и Приснодеву Марию со
                            всеми святыми помянувше, сами себе и друг друга, и весь живот наш Христу Богу
                            предадим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Тебе, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Возглашает священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Яко
                            Твоя держава и Твое есть Царство, и сила, и слава, Отца, и Сына, и Святаго
                            Духа, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь.</span></p>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_y6tgthe3ehow" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></b></h3>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_mucua5wszyw" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>«Господи, воззвах:» с 1- 8 глас </span>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                        </b>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Кананарх:</span><span style={{ color: ' rgba(234, 96, 96, 1)' }}> </span><span style={{ fontSize: '16px', lineHeight: '20px' }}>Глас 1-8<span style={{ color: ' rgba(234, 96, 96, 1)' }}> </span><span style={{ color: '#222222' }}>Господи,
                            воззвах к Тебе, услыши мя. </span></span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Первый хор:</span><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> </span></b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи,
                            воззвах к Тебе, услыши мя: / вонми гласу моления моего, / внегда воззвати ми к
                            Тебе. / Услыши мя, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Вторый хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Да исправится молитва
                            моя, / яко кадило пред Тобою, / воздеяние руку моею / – жертва вечерняя. /
                            Услыши мя, Господи.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></b></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Псалом</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Положи, Господи, хранение
                            устом моим, и дверь ограждения о устнах моих. Не уклони сердце мое в словеса
                            лукавствия, непщевати вины о гресех, с человеки делающими беззаконие, и не
                            сочтуся со избранными их. Накажет мя праведник милостию и обличит мя, елей же
                            грешнаго да не намастит главы моея, яко еще и молитва моя во благоволениих их.
                            Пожерты быша при камени судии их: услышатся глаголи мои, яко возмогоша. Яко
                            толща земли проседеся на земли, расточишася кости их при аде. Яко к Тебе,
                            Господи, Господи, очи мои: на Тя уповах, не отыми душу мою. Сохрани мя от сети,
                            юже составиша ми, и от соблазн делающих беззаконие. Падут во мрежу свою
                            грешницы: един есмь аз, дондеже прейду.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>На 10, стихиры, Кананарх:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Изведи из темницы душу мою, </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>исповедатися имени Твоему. </span>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Мене ждут праведницы, дондеже
                            воздаси мне.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>На 8, Кананарх: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Из
                            глубины воззвах к Тебе, Господи,</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи, услыши глас мой.
                        </span>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Да будут уши Твои внемлюще
                            гласу моления моего.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>На 6, стихиры, Канонарх:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp; Аще
                            беззакония назриши, Господи, Господи, кто постоит? </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Яко у Тебе очищение есть.
                        </span>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Имене ради Твоего потерпех Тя,
                            Господи, потерпе душа моя в слово Твое, упова душа моя на Господа. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>На 4, Канонарх:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>От
                            стражи утренния до нощи, от стражи утренния</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>да уповает Израиль на Господа.
                        </span>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Яко у Господа милость, и
                            многое у Него избавление, и Той избавит Израиля от всех беззаконий eго.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>На 2, Канонарх:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Хвалите
                            Господа вси языцы</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>похвалите Его вси людие.
                        </span>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Яко утвердися милость Его на
                            нас, и истина Господня пребывает во век.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канонарх:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Слава Глас 1-8 </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Слава&nbsp; Отцу и Сыну и Святому
                            Духу </span>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канонарх:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>И ныне Глас 1-8 </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px' }}>Богородичен. <span style={{ color: '#222222' }}></span></span>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                        </p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_brckudn0z93u" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Молитва входа</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Иерей:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Вечер, и заутра, и полудне,
                            хвалим, благословим, благодарим и молимся Тебе, Владыко всех: исправи молитву
                            нашу, яко кадило пред Тобою, и не уклони сердец наших в словеса или в
                            помышления лукавствия, но избави нас от всех ловящих души наша, яко к Тебе, Господи,
                            Господи, очи наши, и на Тя уповахом, да не посрамиши нас, Боже наш.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Яко подобает Тебе всякая слава, честь и
                            поклонение, Отцу, и Сыну, и Святому Духу, ныне и присно, и во веки веков.
                            Аминь.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Благослови, владыко, святый
                            вход.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Иерей благословляя, глаголет:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Благословен вход святых Твоих, всегда, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>И возглашает диакон:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Премудрость, прости.</span></p>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_h64n4oobk851" /><b><span style={{ fontSize: '13.0pt', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></b></h3>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_juc1u3cgjk9" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Свете тихий&nbsp;  </span></b></h3>

                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Свете тихий святыя славы, / Безсмертнаго, Отца
                            Небеснаго, / Святаго Блаженнаго, Иисусе Христе. / Пришедше на запад солнца, /
                            видевше свет вечерний, / поем Отца, Сына и Святаго Духа, Бога. / Достоин еси во
                            вся времена / пет быти гласы преподобными, / Сыне Божий, живот даяй, / темже
                            мiр Тя славит.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_bz1s88utj86i" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Прокимны на вечерне </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Вонмем.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Мир всем.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> И духови твоему. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Премудрость! Прокимен, глас:</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господь воцарися, / в лепоту
                            облечеся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господь воцарися, / в лепоту
                            облечеся. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Облечеся Господь в силу и
                            препоясася.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господь воцарися, / в лепоту
                            облечеся. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Ибо утверди вселенную, яже не
                            подвижится.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господь воцарися, / в лепоту
                            облечеся. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Дому Твоему подобает святыня,
                            Господи, в долготу дний.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господь воцарися, / в лепоту
                            облечеся. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господь воцарися,</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> в лепоту облечеся. </span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>

                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_k0z88tw0i8as" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтение Паремий</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Премудрость.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец, заглавие паремии.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Вонмем.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Мир ти.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>И
                            духови твоему.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_m8gkgr6t5lm" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Ектения сугубая </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Рцем вси от всея души, и от
                            всего помышления нашего рцем.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи Вседержителю, Боже
                            отец наших, молим Ти ся, услыши и помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Помилуй нас, Боже, по велицей
                            милости Твоей, молим Ти ся, услыши и помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>Еще молимся о Великом
                            Господине и отце нашем Святейшем Патриархе имярек, и о господине нашем
                            преосвященнейшем митрополите (или архиепископе, или епископе) (имярек), и о
                            всей во Христе братии нашей.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Еще молимся о Богохранимей
                            стране нашей, властех и воинстве ея, да тихое и безмолвное житие поживем во
                            всяком благочестии и чистоте.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>Еще молимся о блаженных и
                            приснопамятных создателех святаго храма сего (аще во обители: святыя обители
                            сея), и о всех преждепочивших отцех и братиях, зде лежащих и повсюду,
                            православных.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>Еще молимся о милости, жизни,
                            мире, здравии, спасении, посещении, прощении и оставлении грехов рабов Божиих,
                            братии святаго храма сего (аще во обители: святыя обители сея).</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Еще молимся о плодоносящих и
                            добродеющих во святем и всечестнем храме сем, труждающихся, поющих и
                            предстоящих людех, ожидающих от Тебе великия и богатыя милости.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Возглашает священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Яко
                            милостив и человеколюбец Бог еси, и Тебе славу возсылаем, Отцу, и Сыну, и
                            Святому Духу, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp; Аминь.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_ck7w0ea9r5oc" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Сподоби Господи </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Сподоби, Господи, в вечер сей без греха
                            сохранитися нам. / Благословен еси, Господи Боже отец наших, / и хвально и
                            прославлено имя Твое во веки, аминь. / Буди, Господи, милость Твоя на нас,
                            якоже уповахом на Тя. / Благословен еси, Господи, научи мя оправданием Твоим. /
                            Благословен еси, Владыко, вразуми мя оправданием Твоим. / Благословен еси,
                            Святый, просвети мя оправдании Твоими. / Господи, милость Твоя во век, дел руку
                            Твоею не презри. / Тебе подобает хвала. Тебе подобает пение, / Тебе слава
                            подобает, Отцу и Сыну и Святому Духу, ныне и присно и во веки веков. Аминь.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>


                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_vrng47qxgmlk" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Ектения просительная&nbsp; </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Исполним вечернюю молитву нашу
                            Господеви.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Заступи, спаси, помилуй и
                            сохрани нас, Боже, Твоею благодатию.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Вечера всего совершенна,
                            свята, мирна и безгрешна у Господа просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp; Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Ангела мирна, верна
                            наставника, хранителя душ и телес наших у Господа просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp; Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Прощения и оставления грехов и
                            прегрешений наших у Господа просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp; Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Добрых и полезных душам нашим,
                            и мира мiрови у Господа просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp; Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Прочее время живота нашего в
                            мире и покаянии скончати у Господа просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp; Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Христианския кончины живота
                            нашего, безболезнены, непостыдны, мирны и добраго ответа на страшнем судищи
                            Христове просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Пресвятую, пречистую,
                            преблагословенную, славную Владычицу нашу Богородицу и Приснодеву Марию со
                            всеми святыми помянувше, сами себе и друг друга, и весь живот наш Христу Богу
                            предадим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Тебе, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>И священник возглашает:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Яко
                            благ и человеколюбец Бог еси, и Тебе славу возсылаем, Отцу, и Сыну, и Святому
                            Духу, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник:
                        </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Мир всем.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            И духови твоему.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Главы
                            наша Господеви приклоним.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Тебе,
                            Господи.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>

                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_pe75gtgaahsk" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Молитва главопреклонения</span></b></h3>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_khl8p249m61l" /><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи
                            Боже наш, приклонивый небеса и сошедый на спасение рода человеческаго, призри
                            на рабы Твоя и на достояние Твое. Тебе бо страшному и человеколюбцу судии, Твои
                            раби подклониша главы, своя же покориша выя, не от человек ожидающе помощи, но
                            Твоея ожидающе милости и Твоего чающе спасения, яже сохрани на всякое время и
                            по настоящем вечере, и в приходящую нощь, от всякаго врага, от всякаго
                            противнаго действа диавольскаго и от помышлений суетных, и воспоминаний
                            лукавых.</span></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Таже возглашает священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Буди
                            держава Царствия Твоего благословена и препрославлена, Отца, и Сына, и Святаго
                            Духа, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь. <b></b></span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_60khjjxwx1hq" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Последование литии</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Таже исходим в притвор, поюще стихиру храма или
                            праздника, совершающе литию. Священник же и диакон с кадильницею исходят вкупе
                            северною страною, предыдут же им со двема лампадома. Слава, святаго. И ныне,
                            Богородичен. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>И по сих глаголет диакон (аще ли несть диакона,
                            священник) молитвы сия: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>Спаси, Боже, люди Твоя и
                                благослови достояние Твое, посети мiр Твой милостию и щедротами, возвыси рог
                                христиан православных и низпосли на ны милости Твоя богатыя, молитвами
                                всепречистыя Владычицы нашея Богородицы и Приснодевы Марии, силою Честнаго и
                                Животворящаго Креста, предстательствы честных Небесных Сил безплотных,
                                честнаго, славнаго пророка, Предтечи и Крестителя Иоанна, святых славных и
                                всехвальных Апостол, иже во святых отец наших и вселенских великих учителей и
                                святителей, Василия Великаго, Григория Богослова и Иоанна Златоустаго, иже во
                                святых отца нашего Николая, архиепископа Мирликийскаго, чудотворца, святых
                                равноапостольных Мефодия и Кирилла, учителей словенских, святых
                                равноапостольных великаго князя Владимира и великия княгини Ольги, иже во
                                святых отец наших всея России чудотворцев, Михаила, Петра, Алексия, Ионы,
                                Филиппа и Ермогена, святых, славных и добропобедных мучеников, преподобных и
                                богоносных отец наших, святых и праведных богоотец Иоакима и Анны (и святаго
                                имярек, егоже есть храм и егоже есть день), и всех святых. Молим Тя,
                                многомилостиве Господи, услыши нас, грешных, молящихся Тебе, и помилуй нас.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>40.
                        </span>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Еще молимся о
                            Богохранимей стране нашей, благочестивых людех и властех ея, о державе, победе,
                            пребывании, мире, здравии, спасении их, и Господу Богу нашему наипаче поспешити
                            и пособити во всех и покорити под нозе их всякаго врага и супостата.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>Еще молимся о Великом Господине и отце нашем
                            Святейшем Патриархе (имярек), и о господине нашем преосвященнейшем митрополите
                            (или архиепископе, или епископе имярек) (аще же во обители: и о архимандрите,
                            или игумене нашем имярек) и о всем во Христе братстве нашем, и о всякой души христианстей,
                            скорбящей же и озлобленней, милости Божия и помощи требующей; о покровении
                            града сего, и живущих в нем (или веси сея и живущих в ней, или святыя обители
                            сея и живущих в ней); о мире, и состоянии всего мiра; о благостоянии святых
                            Божиих церквей; о спасении и помощи со тщанием и страхом Божиим труждающихся и
                            служащих отец и братий наших; о оставльшихся и во отшествии сущих; о исцелении
                            в немощех лежащих; о успении, ослабе, блаженней памяти и о оставлении грехов
                            всех преждеотшедших отец и братий наших, зде лежащих и повсюду православных; о
                            избавлении плененных, и о братиях наших во службах сущих, и о всех служащих и
                            служивших во святем храме сем (аще же во обители: во святей обители сей) рцем.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>40.
                        </span>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>Еще молимся о еже
                            сохранитися граду сему (или веси сей), и святому храму сему (аще же во обители:
                            святей обители сей), и всякому граду и стране, от глада, губительства, труса,
                            потопа, огня, меча, нашествия иноплеменников и междоусобныя брани; о еже милостиву
                            и благоуветливу быти благому и человеколюбивому Богу нашему, отвратити всякий
                            гнев на ны движимый, и избавити ны от належащаго и праведнаго Своего прещения и
                            помиловати ны.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.
                        </span>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Еще молимся и о еже
                            услышати Господу Богу глас моления нас, грешных, и помиловати нас.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.
                        </span>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Услыши ны, Боже,
                            Спасителю наш, упование всех концев земли и сущих в мори далече, и милостив,
                            милостив буди, Владыко, о гресех наших, и помилуй ны. Милостив бо и
                            человеколюбец Бог еси, и Тебе славу возсылаем, Отцу, и Сыну, и Святому Духу,
                            ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь. </span>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Мир всем.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            И духови твоему. </span>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Главы
                            ваша Господеви приклоните.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Тебе,
                            Господи. </span>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник велегласно: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Владыко
                            многомилостиве, Господи Иисусе Христе, Боже наш, молитвами всепречистыя Владычицы
                            нашея Богородицы и Приснодевы Марии, силою Честнаго и Животворящаго Креста,
                            предстательствы честных Небесных Сил безплотных, честнаго, славнаго пророка,
                            Предтечи и Крестителя Иоанна, святых славных и всехвальных </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>Апостол,
                                святых славных и добропобедных мучеников, преподобных и богоносных отец наших,
                                иже во святых отец наших и вселенских великих учителей и святителей: Василия
                                Великаго, Григория Богослова и Иоанна Златоустаго, иже во святых отца нашего
                                Николая, архиепископа Мирликийскаго, чудотворца, святых равноапостольных
                                Мефодия и Кирилла, учителей словенских, святых равноапостольных великаго князя
                                Владимира и великия княгини Ольги, иже во святых отец наших всея России
                                чудотворцев, Михаила, Петра, Алексия, Ионы и Филиппа и Ермогена, и святых и праведных
                                богоотец Иоакима и Анны, (и святаго имярек, егоже есть храм, и егоже есть день)
                                и всех святых Твоих, благоприятну сотвори молитву нашу, даруй нам оставление
                                прегрешений наших, покрый нас кровом крилу Твоею, отжени от нас всякаго врага и
                                супостата, умири нашу жизнь. Господи, помилуй нас и мiр Твой, и спаси души
                                наша, яко благ и человеколюбец.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Аминь. </span>                          <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_gh9pcsc5gpz3" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стихиры на стиховне Глас с 1-8 </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господь воцарися, / в лепоту
                            облечеся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Ибо утверди вселенную, / яже
                            не подвижется.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Дому Твоему подобает святыня
                            / Господи, в долготу дний.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Слава, и ныне, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>Богородичен.
                        </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_ovh3olemwvcb" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Ныне отпущаеши </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Ныне отпущаеши раба Твоего, Владыко, / по
                            глаголу Твоему с миром; / яко видеста очи мои спасение Твое, / еже еси уготовал
                            пред лицем всех людей, / свет во откровение языков, / и славу людей Твоих
                            Израиля.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Таже чтец, Трисвятое по Отче наш</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Возглашает священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Яко
                            Твое есть Царство, и сила, и слава, Отца, и Сына, и Святаго Духа, ныне и
                            присно, и во веки веков. Аминь.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_9oxwm4s53wy5" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Тропарь </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Богородице Дево, радуйся, / Благодатная Марие,
                            Господь с Тобою: / Благословена Ты в женах, и Благословен Плод чрева Твоего, /
                            яко Спаса родила еси душ наших. </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господу помолимся.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Господи, помилуй.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_cmxhgox5xtg5" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Молитва на освящение хлебов</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Иерей:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}> Господи Иисусе Христе, Боже
                            наш, благословивый пять хлебов и пять тысящ насытивый, Сам благослови и хлебы
                            сия, пшеницу, вино и елей, и умножи сия во граде сем (или в веси сей, или во
                            святей обители сей), и во всем мiре Твоем, и вкушающия от них верныя освяти.
                            Яко Ты еси благословляяй и освящаяй всяческая, Христе Боже наш, и Тебе славу
                            возсылаем, со безначальным Твоим Отцем, и всесвятым, и благим, и животворящим
                            Твоим Духом, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь. Буди Имя Господне
                            благословено от ныне и до века. </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды. </span>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_qwtkbb7y352h" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Псалом 33</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Благословлю Господа на всякое время, выну хвала
                            Его во устех моих. О Господе похвалится душа моя, да услышат кротцыи и
                            возвеселятся. Возвеличите Господа со мною и вознесем имя Его вкупе. Взысках
                            Господа и услыша мя, и от всех скорбей моих избави мя. Приступите к Нему и
                            просветитеся, и лица ваша не постыдятся. Сей нищий воззва, и Господь услыша и,
                            и от всех скорбей eго спасе и. Ополчится Ангел Господень окрест боящихся Его, и
                            избавит их. Вкусите и видите, яко благ Господь; блажен муж, иже уповает Нань.
                            Бойтеся Господа, вси святии Его, яко несть лишения боящымся Его. Богатии
                            обнищаша и взалкаша, взыскающии же Господа не лишатся всякаго блага.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Иерей:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Благословение Господне на
                            вас. Того благодатию и человеколюбием, всегда, ныне и присно и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Мы же: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Аминь.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>И начинаем утреню с шестопсалмия.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>                        <h2 style={{ marginTop: '0in', marginRight: '0in', marginBottom: '4.0pt', marginLeft: '0in', pageBreakAfter: 'auto' }}><div className="_efgnzqoiq1v" /><b><span style={{ fontSize: '14.5pt', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>УТРЕНЯ </span></b></h2>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span> </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Слава
                            в вышних Богу, и на земли мир, в человецех благоволение. </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи, устне мои отверзеши,
                            и уста моя возвестят хвалу Твою. </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Дважды.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Псалом 3 </span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи, что ся умножиша стужающии ми? Мнози
                            востают на мя, мнози глаголют души моей: несть спасения eму в Бозе eго. Ты же,
                            Господи, Заступник мой еси, слава моя и возносяй главу мою. Гласом моим ко
                            Господу воззвах, и услыша мя от горы святыя Своея. Аз уснух, и спах, востах,
                            яко Господь заступит мя. Не убоюся от тем людей, окрест нападающих на мя.
                            Воскресни, Господи, спаси мя, Боже мой, яко Ты поразил еси вся враждующыя ми
                            всуе: зубы грешников сокрушил еси. Господне есть спасение, и на людех Твоих
                            благословение Твое.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Аз уснух, и спах,
                            востах, яко Господь заступит мя.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_zcju343fontl" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Псалом 37</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи, да не яростию Твоею обличиши мене,
                            ниже гневом Твоим накажеши мене. Яко стрелы Твоя унзоша во мне, и утвердил еси
                            на мне руку Твою. Несть исцеления в плоти моей от лица гнева Твоего, несть мира
                            в костех моих от лица грех моих. Яко беззакония моя превзыдоша главу мою, яко
                            бремя тяжкое отяготеша на мне. Возсмердеша и согниша раны моя от лица безумия
                            моего. Пострадах и слякохся до конца, весь день сетуя хождах. Яко лядвия моя наполнишася
                            поруганий, и несть исцеления в плоти моей. Озлоблен бых и смирихся до зела,
                            рыках от воздыхания сердца моего. Господи, пред Тобою все желание мое и
                            воздыхание мое от Тебе не утаися. Сердце мое смятеся, остави мя сила моя, и
                            свет очию моею, и той несть со мною. Друзи мои и искреннии мои прямо мне
                            приближишася и сташа, и ближнии мои отдалече мене сташа и нуждахуся ищущии душу
                            мою, и ищущии злая мне глаголаху суетная и льстивным весь день поучахуся. Аз же
                            яко глух не слышах и яко нем не отверзаяй уст своих. И бых яко человек не
                            слышай и не имый во устех своих обличения. Яко на Тя, Господи, уповах, Ты
                            услышиши, Господи Боже мой. Яко рех: да не когда порадуют ми ся врази мои: и
                            внегда подвижатися ногам моим, на мя велеречеваша. Яко аз на раны готов, и болезнь
                            моя предо мною есть выну. Яко беззаконие мое аз возвещу и попекуся о гресе
                            моем. Врази же мои живут и укрепишася паче мене, и умножишася ненавидящии мя
                            без правды. Воздающии ми злая возблагая оболгаху мя, зане гонях благостыню. Не
                            остави мене, Господи Боже мой, не отступи от мене. Вонми в помощь мою, Господи
                            спасения моего.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Не остави мене, Господи Боже мой, не
                            отступи от мене. Вонми в помощь мою, Господи спасения моего.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_5u6pfjuduapv" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Псалом 62</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Боже, Боже мой, к Тебе утренюю, возжада Тебе
                            душа моя, коль множицею Тебе плоть моя, в земли пусте и непроходне, и безводне.
                            Тако во святем явихся Тебе, видети силу Твою и славу Твою. Яко лучши милость
                            Твоя паче живот, устне мои похвалите Тя. Тако благословлю Тя в животе моем, о
                            имени Твоем воздежу руце мои. Яко от тука и масти да исполнится душа моя, и
                            устнама радости восхвалят Тя уста моя. Аще поминах Тя на постели моей, на
                            утренних поучахся в Тя. Яко был еси Помощник мой, и в крове крилу Твоею
                            возрадуюся. Прильпе душа моя по Тебе, мене же прият десница Твоя. Тии же всуе искаша
                            душу мою, внидут в преисподняя земли, предадятся в руки оружия, части лисовом
                            будут. Царь же возвеселится о Бозе, похвалится всяк кленыйся Им, яко
                            заградишася уста глаголющих неправедная.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>На утренних поучахся в Тя. Яко был еси Помощник
                            мой, и в крове крилу Твоею возрадуюся. Прильпе душа моя по Тебе, мене же прият
                            десница Твоя.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></b></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: 'rgba(234, 96, 96, 1)' }}>Слава, и ныне:</span></b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Аллилуиа, аллилуиа, аллилуиа, слава Тебе Боже. </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Трижды,
                            без поклонов.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                        </span></p>
                        <p className="MsoNormal" style={{}}><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></b></p>
                        <p className="MsoNormal" style={{}}><b><span style={{ fontSize: '16px', lineHeight: '20px', color: 'rgba(234, 96, 96, 1)' }}>Слава, и ныне:</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>И исходит священник от олтаря и глаголет молитвы
                            утренния тайно, стояй непокровен пред святыми дверьми.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_v0upnqsifknz" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Псалом 87</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи Боже спасения моего, во дни воззвах, и
                            в нощи пред Тобою. Да внидет пред Тя молитва моя: приклони ухо Твое к молению
                            моему, яко исполнися зол душа моя, и живот мой аду приближися. Привменен бых с
                            низходящими в ров, бых яко человек без помощи, в мертвых свободь, яко язвеннии
                            спящии во гробе, ихже не помянул еси ктому, и тии от руки Твоея отриновени
                            быша. Положиша мя в рове преисподнем, в темных и сени смертней. На мне
                            утвердися ярость Твоя, и вся волны Твоя навел еси на мя. Удалил еси знаемых
                            моих от мене, положиша мя мерзость себе: предан бых и не исхождах. Очи мои
                            изнемогосте от нищеты, воззвах к Тебе, Господи, весь день, воздех к Тебе руце
                            мои. Еда мертвыми твориши чудеса? Или врачеве воскресят, и исповедятся Тебе?
                            Еда повесть кто во гробе милость Твою, и истину Твою в погибели? Еда познана
                            будут во тьме чудеса Твоя, и правда Твоя в земли забвенней? И аз к Тебе,
                            Господи, воззвах и утро молитва моя предварит Тя. Вскую, Господи, отрееши душу
                            мою, отвращаеши лице Твое от мене? Нищ есмь аз, и в трудех от юности моея;
                            вознес же ся, смирихся, и изнемогох. На мне преидоша гневи Твои, устрашения
                            Твоя возмутиша мя, обыдоша мя яко вода, весь день одержаша мя вкупе. Удалил еси
                            от мене друга и искренняго, и знаемых моих от страстей.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи Боже спасения моего, во дни
                            воззвах, и в нощи пред Тобою. Да внидет пред Тя молитва моя: приклони ухо Твое
                            к молению моему.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_mnawzrtc9axb" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Псалом 102</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Благослови, душе моя, Господа, и вся внутренняя
                            моя имя святое Его. Благослови, душе моя, Господа, и не забывай всех воздаяний
                            Его, очищающаго вся беззакония твоя, исцеляющаго вся недуги твоя, избавляющаго
                            от истления живот твой, венчающаго тя милостию и щедротами, исполняющаго во
                            благих желание твое: обновится яко орля юность твоя. Творяй милостыни Господь,
                            и судьбу всем обидимым. Сказа пути Своя Моисеови, сыновом Израилевым хотения
                            Своя: Щедр и Милостив Господь, Долготерпелив и Многомилостив. Не до конца прогневается,
                            ниже во век враждует, не по беззаконием нашым сотворил есть нам, ниже по грехом
                            нашым воздал есть нам. Яко по высоте небесней от земли, утвердил есть Господь
                            милость Свою на боящихся Его. Елико отстоят востоцы от запад, удалил есть от
                            нас беззакония наша. Якоже щедрит отец сыны, ущедри Господь боящихся Его. Яко
                            Той позна создание наше, помяну, яко персть есмы. Человек, яко трава дние eго,
                            яко цвет сельный, тако оцветет, яко дух пройде в нем, и не будет, и не познает
                            ктому места своего. Милость же Господня от века и до века на боящихся Его, и
                            правда Его на сынех сынов, хранящих завет Его, и помнящих заповеди Его творити
                            я. Господь на Небеси уготова Престол Свой, и Царство Его всеми обладает.
                            Благословите Господа вси Ангели Его, сильнии крепостию, творящии слово Его,
                            услышати глас словес Его. Благословите Господа вся Силы Его, слуги Его,
                            творящии волю Его. Благословите Господа вся дела Его, на всяком месте
                            владычества Его, благослови, душе моя, Господа.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>На всяком месте владычества Его,
                            благослови, душе моя, Господа.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_x0xchf97ibky" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Псалом 142</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи, услыши молитву мою, внуши моление мое
                            во истине Твоей, услыши мя в правде Твоей и не вниди в суд с рабом Твоим, яко
                            не оправдится пред Тобою всяк живый. Яко погна враг душу мою, смирил есть в
                            землю живот мой, посадил мя есть в темных, яко мертвыя века. И уны во мне дух
                            мой, во мне смятеся сердце мое. Помянух дни древния, поучихся во всех делех
                            Твоих, в творениих руку Твоею поучахся. Воздех к Тебе руце мои, душа моя, яко
                            земля безводная Тебе. Скоро услыши мя, Господи, исчезе дух мой, не отврати лица
                            Твоего от мене, и уподоблюся низходящым в ров. Слышану сотвори мне заутра
                            милость Твою, яко на Тя уповах. Скажи мне, Господи, путь воньже пойду, яко к
                            Тебе взях душу мою. Изми мя от враг моих, Господи, к Тебе прибегох. Научи мя
                            творити волю Твою, яко Ты еси Бог мой. Дух Твой Благий наставит мя на землю
                            праву. Имене Твоего ради, Господи, живиши мя, правдою Твоею изведеши от печали
                            душу мою. И милостию Твоею потребиши враги моя и погубиши вся стужающыя души
                            моей, яко аз раб Твой есмь.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Услыши мя, Господи, в правде Твоей и не
                            вниди в суд с рабом Твоим. Услыши мя, Господи, в правде Твоей и не вниди в суд
                            с рабом Твоим. Дух Твой Благий наставит мя на землю праву.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></b></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: 'rgba(234, 96, 96, 1)' }}>Слава, и ныне:</span></b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Аллилуиа, аллилуиа, аллилуиа, слава Тебе Боже. </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>

                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_dwhtipabz6hf" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Ектения великая </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Миром Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О свышнем мире и спасении душ
                            наших, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О мире всего мiра,
                            благостоянии святых Божиих церквей и соединении всех, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О святем храме сем и с верою,
                            благоговением и страхом Божиим входящих в онь, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>О Великом Господине и
                            отце нашем, Святейшем Патриархе (имярек), и о господине нашем преосвященнейшем
                            митрополите (или архиепископе, или епископе) (имярек), честнем пресвитерстве,
                            во Христе диаконстве, о всем причте и людех, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О Богохранимей стране нашей,
                            властех и воинстве ея, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}> О граде сем (или о веси сей,
                            или о святей обители сей), всяком граде, стране, и верою живущих в них, Господу
                            помолимся</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О
                            благорастворении воздухов, о изобилии плодов земных, и временех мирных, Господу
                            помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}> </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О
                            плавающих, путешествующих, недугующих, страждущих, плененных и о спасении их,
                            Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>О избавитися нам от всякия
                            скорби, гнева и нужды, Господу помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Заступи, спаси, помилуй и
                            сохрани нас, Боже, Твоею благодатию.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Пресвятую, пречистую,
                            преблагословенную, славную Владычицу нашу Богородицу и Приснодеву Марию со
                            всеми святыми помянувше, сами себе и друг друга, и весь живот наш Христу Богу
                            предадим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Тебе, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник возглашает:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Яко
                            подобает Тебе всякая слава, честь и поклонение, Отцу, и Сыну, и Святому Духу,
                            ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_a6j0rzjzuuue" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Бог – Господь: на глас тропаря дня </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Бог Господь и явися нам, благословен Грядый во
                            имя Господне.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Исповедайтеся Господеви, яко
                            благ, яко в век милость Его.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Обышедше обыдоша мя и именем
                            Господним противляхся им.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Не умру, но жив буду и повем
                            дела Господня.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Камень, Егоже небрегоша
                            зиждущии, Сей бысть во главу угла, от Господа бысть Сей и есть дивен во очесех
                            наших.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Поется же Бог Господь: четырежды. Таже глаголется
                            тропарь случивыйся дважды и Богородичен в тойже глас. И аще случатся два
                            тропаря, всегда первый глаголется дважды, таже вторый и Богородичен.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Тропарь&nbsp; </span></b>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></b></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Слава и Ныне, Богородечен </span></b></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Ектения малая </span></b>
                            <div className="flexed" style={{ padding: '8px 0px' }} >
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
                            </div>
                        </p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Паки и паки, миром Господу
                            помолимся.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Заступи, спаси, помилуй и
                            сохрани нас, Боже, Твоею благодатию.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Пресвятую, пречистую,
                            преблагословенную, славную Владычицу нашу Богородицу и Приснодеву Марию со
                            всеми святыми помянувше, сами себе и друг друга, и весь живот наш Христу Богу
                            предадим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Тебе, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник возглашает:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Яко
                            Твоя держава и Твое есть Царство, и сила, и слава, Отца, и Сына, и Святаго
                            Духа, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>По 2-м стихословии:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Паки
                            и паки:</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Возглашение:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Яко благ и
                            человеколюбец Бог еси, и Тебе славу возсылаем, Отцу, и Сыну, и Святому Духу,
                            ныне и присно, и во веки веков</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Аще убо есть неделя, или Владычний, или
                            Богородичный праздник, или святый, имеяй великое славословие, поем:</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_fs5jifvpl644" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Полиелей. Псалом 134 </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span> </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Хвалите
                            имя Господне, хвалите, раби Господа. Аллилуиа, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Благословен Господь от Сиона,
                            живый во Иерусалиме. Аллилуиа, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Исповедайтеся Господеви, яко
                            благ, яко в век милость Его. Аллилуиа, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Исповедайтеся Богу Небесному,
                            яко в век милость Его. Аллилуиа, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>[Аще убо есть неделя о Блудном сыне, или
                            Мясопустная, или Сыропустная, припеваем же к сим и третий псалом со аллилуиею
                            красною.]</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Аще же прилучится праздник Господский или
                            Богородицы, или празднуемого святого, поем величание и псалом избранный. В
                            неделю же:</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_mi96yffzl757" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Тропари «по непорочных», глас 5 </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>На едином коемждо тропаре глаголем</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Благословен еси, Господи, научи мя оправданием
                            Твоим.</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Ангельский собор удивися, / зря Тебе в мертвых
                            вменившася, / смертную же, Спасе, крепость разоривша, / и с Собою Адама
                            воздвигша, / и от ада вся свобождша.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Благословен еси, Господи, научи мя оправданием
                            Твоим.</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Почто мира с милостивными слезами, / о ученицы,
                            растворяете? / Блистаяйся во гробе Ангел мироносицам вещаше: / видите вы гроб и
                            уразумейте, / Спас бо воскресе от гроба.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Благословен еси, Господи, научи мя оправданием
                            Твоим.</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Зело рано мироносицы течаху / ко гробу Твоему
                            рыдающия, / но предста к ним Ангел и рече: / рыдания время преста, не плачите,
                            / воскресение же апостолом рцыте.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Благословен еси, Господи, научи мя оправданием
                            Твоим.</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Мироносицы жены с миры пришедшия / ко гробу
                            Твоему, Спасе, рыдаху, / Ангел же к ним рече, глаголя: / что с мертвыми живаго
                            помышляете? / Яко Бог бо, воскресе от гроба.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>Слава:</span></b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}> </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Поклонимся Отцу / и Его Сынови, и Святому Духу,
                            / Святей Троице во едином существе, / с Серафимы зовуще: / Свят, Свят, Свят
                            еси, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>И ныне: </span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Жизнодавца рождши, / греха, Дево, Адама
                            избавила еси, / радость же Еве / в печали место подала еси, / падшия же от
                            жизни / к сей направи / из Тебе воплотивыйся Бог и Человек.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Аллилуиа, Аллилуиа, Аллилуиа, слава Тебе, Боже.
                        </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Ектения малая </span></b></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник возглашает:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Яко
                            благословися имя Твое и прославися Царство Твое, Отца, и Сына, и Святаго Духа,
                            ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Лик:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Ипакои. Таже степенны прилучившагося гласа. Аще
                            праздник Владычний или празднуемаго святаго, поем:</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_e0t3iji4j01g" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Степенна, антифон Гласа </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>От юности моея / мнози борют мя страсти, / но
                            Сам мя заступи, / и спаси, Спасе мой.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Ненавидящии Сиона, / посрамитеся от Господа, /
                            яко трава бо огнем / будете изсохше.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Слава:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Святым Духом / всяка душа
                            живится, / и чистотою возвышается, / светлеется Троическим Единством
                            священнотайне.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>И ныне, тойже.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Вонмем.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник:
                        </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Мир всем.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            И духови твоему.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Премудрость!
                        </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Прокимен.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_dt2d9t5vnl74" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Прокимны воскресные</span></b><b><span style={{ fontSize: '16px', lineHeight: '20px', color: 'black' }}>
                        </span></b></h3>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_220qkuqgmb50" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Глас 1 </span></b></h3>

                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Ныне воскресну, глаголет Господь, / положуся во
                            Спасение, не обинюся о нем.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Словеса Господня, словеса
                            чиста.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_9y7a7lut628a" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Глас 2 </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Востани, Господи, Боже мой, повелением, имже
                            заповедал еси, / и сонм людей обыдет Тя.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи Боже мой, на Тя
                            уповах, спаси мя.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></b></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Глас 3 </span></b></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Рцыте во языцех, яко Господь воцарися, / ибо
                            исправи вселенную, яже не подвижится.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Воспойте Господеви песнь
                            нову, воспойте Господеви вся земля.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_bpm22tvfbajy" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Глас 4 </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Воскресни, Господи, помози нам / и избави нас
                            имене Твоего ради.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Боже, ушима нашима услышахом,
                            и отцы наши возвестиша нам.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_rhkzxqmt6wge" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Глас 5 </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Воскресни, Господи Боже мой, да вознесется рука
                            Твоя, / яко Ты царствуеши во веки.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Исповемся Тебе, Господи, всем
                            сердцем моим, повем вся чудеса Твоя.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_fi6r7yuskqt2" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Глас 6 </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи, воздвигни силу Твою, / и прииди во еже
                            спасти нас.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Пасый Израиля вонми,
                            наставляяй яко овча Иосифа.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_ofx8sis96050" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Глас 7 </span></b></h3>

                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Воскресни, Господи Боже мой, да вознесется рука
                            Твоя, / не забуди убогих Твоих до конца.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Исповемся Тебе, Господи, всем
                            сердцем моим, повем вся чудеса Твоя.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_d54mxoapbogb" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Глас 8 </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Воцарится Господь во век, / Бог твой Сионе, в
                            род и род.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Хвали душе моя Господа,
                            восхвалю Господа в животе моем.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господу помолимся.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Господи, помилуй.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник возглашает:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Яко свят еси, Боже наш, и во святых почиваеши, и Тебе славу возсылаем, Отцу, и
                            Сыну, и Святому Духу, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Лик:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Аминь.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_xgyc6kwp71bm" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон возглашает второй прокимен</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Всякое дыхание / да хвалит Господа.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Стих:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Хвалите Бога во святых Его,
                            хвалите Его в утвержении силы Его.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>И посем возглашает диакон:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> И о
                            сподобитися нам слышанию святаго Евангелия Господа Бога молим.</span></p>
                        <p className="MsoNormal"><span style={{ color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи,
                            помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Премудрость, прости, услышим
                            святаго Евангелия</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Мир всем</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> И духови твоему. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>И абие:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>От
                            (имярек) святаго Евангелия чтение.</span></p>
                        <p className="MsoNormal"><span style={{ color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Слава
                            Тебе, Господи, слава Тебе. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Вонмем.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_funnqclzw5" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтение Евангелия</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Слава Тебе, Господи, слава
                            Тебе. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>                                                <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_8c99bihee9p7" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Воскресная песнь после Евангелия, глас 6
                    </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Воскресение Христово видевше,
                            / поклонимся Святому Господу Иисусу, / единому безгрешному. / Кресту Твоему
                            покланяемся, Христе, / и святое Воскресение Твое поем и славим: / Ты бо еси Бог
                            наш, / разве Тебе иного не знаем, / имя Твое именуем. / Приидите вси вернии, /
                            поклонимся Святому Христову Воскресению: / се бо прииде крестом радость всему
                            мiру. / Всегда благословяще Господа, / поем Воскресение Его: / распятие бо
                            претерпев, / смертию смерть разруши.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_pe44c9sckh38" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Псалом 50 </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Чтец: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Помилуй мя, Боже, по велицей
                            милости Твоей, и по множеству щедрот Твоих очисти беззаконие мое. Наипаче омый
                            мя от беззакония моего, и от греха моего очисти мя; яко беззаконие мое аз знаю,
                            и грех мой предо мною есть выну. Тебе Единому согреших и лукавое пред Тобою
                            сотворих, яко да оправдишися во словесех Твоих, и победиши внегда судити Ти. Се
                            бо, в беззакониих зачат есмь, и во гресех роди мя мати моя. Се бо, истину
                            возлюбил еси; безвестная и тайная премудрости Твоея явил ми еси. Окропиши мя
                            иссопом, и очищуся; омыеши мя, и паче снега убелюся. Слуху моему даси радость и
                            веселие; возрадуются кости смиренныя. Отврати лице Твое от грех моих и вся
                            беззакония моя очисти. Сердце чисто созижди во мне, Боже, и дух прав обнови во
                            утробе моей. Не отвержи мене от лица Твоего и Духа Твоего Святаго не отыми от
                            мене. Воздаждь ми радость спасения Твоего и Духом Владычним утверди мя. Научу
                            беззаконныя путем Твоим, и нечестивии к Тебе обратятся. Избави мя от кровей,
                            Боже, Боже спасения моего; возрадуется язык мой правде Твоей. Господи, устне
                            мои отверзеши, и уста моя возвестят хвалу Твою. Яко аще бы восхотел еси жертвы,
                            дал бых убо: всесожжения не благоволиши. Жертва Богу дух сокрушен; сердце
                            сокрушенно и смиренно Бог не уничижит. Ублажи, Господи, благоволением Твоим
                            Сиона, и да созиждутся стены Иерусалимския. Тогда благоволиши жертву правды,
                            возношение и всесожегаемая; тогда возложат на oлтарь Твой тельцы.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: 'rgba(234, 96, 96, 1)' }}>Слава:</span></b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Молитвами Апостолов, / Милостиве, очисти /
                            множества согрешений наши</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: 'rgba(234, 96, 96, 1)' }}>И ныне:</span></b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Молитвами Богородицы, / Милостиве, очисти /
                            множества согрешений наших.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Таже, глас 6:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Помилуй мя, Боже, / по
                            велицей милости Твоей / и по множеству щедрот Твоих / очисти беззаконие мое.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Посем стихира:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Воскрес Иисус от гроба, / якоже прорече, / даде нам живот вечный / и велию
                            милость</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>[Аще же есть неделя о Мытаре и фарисее и даже до
                            недели пятыя Великия Четыредесятницы по 50-м псалме поем тропари покаянные:
                            Покаяния отверзи ми двери:]</span></p>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_60uu3gx03cc4" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></b></h3>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_2fubwzr6nt7p" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>После же целования Евангелия возглашает
                            диакон:</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Спаси, Боже, люди Твоя и благослови достояние
                            Твое, посети мiр Твой милостию и щедротами, возвыси рог христиан православных и
                            низпосли на ны милости Твоя богатыя, молитвами всепречистыя Владычицы нашея
                            Богородицы и Приснодевы Марии, силою Честнаго и Животворящаго Креста,
                            предстательствы честных Небесных Сил безплотных, честнаго, славнаго пророка,
                            Предтечи и Крестителя Иоанна, святых славных и всехвальных Апостол, иже во
                            святых отец наших и вселенских великих учителей и святителей, Василия Великаго,
                            Григория Богослова и Иоанна Златоустаго, иже во святых отца нашего Николая,
                            архиепископа Мирликийскаго, чудотворца, святых равноапостольных Мефодия и
                            Кирилла, учителей словенских, святых равноапостольных великаго князя Владимира
                            и великия княгини Ольги, иже во святых отец наших всея России чудотворцев,
                            Михаила, Петра, Алексия, Ионы, Филиппа и Ермогена, святых, славных и
                            добропобедных мучеников, преподобных и богоносных отец наших, святых и
                            праведных богоотец Иоакима и Анны </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>(и святаго имярек, егоже есть
                                храм и егоже есть день), </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>и всех святых. Молим Тя,
                                    многомилостиве Господи, услыши нас, грешных, молящихся Тебе, и помилуй нас.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>12.
                        </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Таже глаголет священник возгласно:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Милостию и щедротами и человеколюбием единороднаго Твоего Сына, с Нимже
                            благословен еси, со пресвятым, и благим, и животворящим Твоим Духом, ныне и
                            присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь. </span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канон Гласа </span></b></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>И лик начинает каноны: воскресен, крестовоскресен,
                            Богородицы, и минеи. По 3-й песни творит диакон или священник малую ектению.
                            Таже седален минеи. По 6-й песни ектения. Кондак, и икос. И чтение в
                            Синаксарии.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>По 8-й песни канона диакон:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Богородицу и Матерь Света в песнех возвеличим.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_oczdcmplsa9l" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Песнь Пресвятой Богородицы </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Величит душа Моя Господа / и
                            возрадовася дух Мой о Бозе Спасе Моем.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>К коемуждо стиху припеваем:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Честнейшую Херувим / и славнейшую без сравнения Серафим, / без истления Бога
                            Слова рождшую, / сущую Богородицу, Тя величаем.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Яко призре на смирение рабы Своея, / се бо, от
                            ныне ублажат Мя вси роди.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Честнейшую Херувим:</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Яко сотвори Мне величие Сильный, / и свято имя
                            Его, / и милость Его в роды родов боящимся Его.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Честнейшую Херувим:</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Сотвори державу мышцею Своею, / расточи гордыя
                            мыслию сердца их.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Честнейшую Херувим:</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Низложи сильныя со престол, / и вознесе
                            смиренныя, алчущия исполни благ, / и богатящияся отпусти тщи.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Честнейшую Херувим:</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Восприят Израиля отрока Своего, / помянути
                            милости, / якоже глагола ко отцем нашим, / Аврааму и семени его даже до века.</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Честнейшую Херувим:</span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>По 9-й песни, аще убо несть неделя: Достойно есть:
                            Аще же есть неделя, по ирмосе ектения.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_5tnl0plzms10" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>В воскресенье диакон возглашает, Свят Господь
                            Бог наш. </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Свят Господь Бог наш.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Свят Господь Бог наш.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Яко свят
                            Господь Бог наш.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Свят Господь Бог наш.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Над всеми
                            людьми Бог наш.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Свят Господь Бог наш.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Воскресный ексапостиларий, и святаго, аще
                            празднуется. На хвалитех стихиры воскресны 4 и Анатолиевы 4.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Аще убо есть неделя, или Владычний праздник,
                            или святый, имеяй великое славословие, поется сице:</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_i7m1dyllrbzn" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хвалитные псалмы Глас 1-8 </span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канонарх:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}> Глас 1-8, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Всякое
                            дыхание да хвалит Господа.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Всякое дыхание да хвалит
                            Господа. / Хвалите Господа с небес, / хвалите Его в вышних. / Тебе подобает
                            песнь Богу. / Хвалите Его, вси Ангели Его, / хвалите Его, вся Силы Его. / Тебе
                            подобает песнь Богу. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канонарх, На 6: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Сотворити
                            в них суд написан.&nbsp; </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Слава сия будет всем
                            преподобным Его. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор, Стихира&nbsp; </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канонарх, на 4: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;Хвалите
                            Бога во святых Его,</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Хвалите Его во утвержении
                            силы Его. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канонарх: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Хвалите Его во гласе
                            трубнем,</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>хвалите Его во псалтири и
                            гуслех. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канонарх: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Хвалите Его в тимпане и
                            лице,</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>хвалите Его во струнах и
                            органе. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канонарх: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Хвалите Его в кимвалех
                            доброгласных, хвалите Его в кимвалех восклицания.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Всякое дыхание да хвалит
                            Господа. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Аще есть неделя:</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канонарх:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Воскресни, Господи
                            Боже мой, да вознесется рука Твоя, </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>не забуди убогих Твоих до
                            конца. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канонарх:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Исповемся Тебе,
                            Господи, всем сердцем моим, </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>повем вся чудеса Твоя. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>По стихирах, Слава, стихира Евангельская. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_w9sxbl264e1o" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Богородичен, глас 2 </span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Канонарх: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>И ныне, Богородичен,
                            глас 2</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>И ныне, и Присно и во веки
                            веков, Аминь. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Преблагословена еси,
                            Богородице Дево, / Воплощшим бо ся из Тебе ад пленися, / Адам воззвася, клятва
                            потребися, Ева свободися, / смерть умертвися, и мы ожихом. / Тем воспевающе
                            вопием: / благословен Христос Бог, благоволивый тако, слава Тебе. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Слава Тебе, показавшему
                            нам свет.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_pzekxsv0d6j3" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Славословие великое </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Слава в вышних Богу, и на
                            земли мир, в человецех благоволение. Хвалим Тя, благословим Тя, кланяем Ти ся,
                            славословим Тя, благодарим Тя великия ради славы Твоея. Господи, Царю Небесный,
                            Боже, Отче Вседержителю, Господи Сыне Единородный, Иисусе Христе, и Святый
                            Душе. Господи Боже, Агнче Божий, Сыне Отечь, вземляй грех мiра, помилуй нас.
                            Вземляй грехи мiра, приими молитву нашу. Седяй одесную Отца, помилуй нас. Яко
                            Ты еси Един Свят; Ты еси Един Господь, Иисус Христос, в славу Бога Отца, аминь.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>На всяк день благословлю Тя и восхвалю имя Твое
                            во веки, и в век века. Сподоби, Господи, в день сей без греха сохранитися нам.
                            Благословен еси, Господи Боже отец наших, и хвально и прославлено имя Твое во
                            веки, аминь.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Буди, Господи, милость Твоя на нас, якоже
                            уповахом на Тя.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Благословен еси, Господи, научи мя оправданием
                            Твоим. </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Господи, прибежище был еси нам в род и род. Аз
                            рех: Господи, помилуй мя, исцели душу мою, яко согреших Тебе. Господи, к Тебе
                            прибегох, научи мя творити волю Твою, яко Ты еси Бог мой, яко у Тебе источник
                            живота, во свете Твоем узрим свет. Пробави милость Твою ведущим Тя.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Святый Боже, Святый Крепкий, Святый
                            Безсмертный, помилуй нас. </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Слава Отцу и Сыну и Святому Духу, и ныне и
                            присно и во веки веков, аминь.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Святый Безсмертный, помилуй нас.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Таже высочайшим гласом:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Святый Боже, Святый Крепкий, Святый Безсмертный, помилуй нас</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_a8h7orhm0a2m" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>В воскресенье тропари глас 1, 3, 5, 7 </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Днесь спасение мiру бысть, / поем Воскресшему
                            из гроба, / и Начальнику жизни нашея: / разрушив бо смертию смерть, / победу
                            даде нам и велию милость.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_h2i808oe7z3h" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Глас 2, 4, 6, 8 </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Воскрес из гроба и узы растерзал еси ада, /
                            разрушил еси осуждение смерти, Господи, / вся от сетей врага избавивый; /
                            явивый же Себе апостолом Твоим, / послал еси я на проповедь, / и теми мир Твой
                            подал еси вселенней, / Едине Многомилостиве.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_9rv7idgy8mgu" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Ектения сугубая </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Помилуй нас, Боже, по велицей
                            милости Твоей, молим Ти ся, услыши, и помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}> Еще молимся о Великом
                            Господине и отце нашем, Святейшем Патриархе (имярек), и о господине нашем преосвященнейшем
                            митрополите (или архиепископе, или епископе) (имярек), и о всей во Христе
                            братии нашей.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}> </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Еще
                            молимся о Богохранимей стране нашей, властех и воинстве ея, да тихое и
                            безмолвное житие поживем во всяком благочестии и чистоте. </span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}> Еще молимся о блаженных и
                            приснопамятных создателех святаго храма сего (аще во обители: святыя обители
                            сея), и о всех преждепочивших отцех и братиях, зде лежащих и повсюду
                            православных.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}> Еще молимся о милости, жизни,
                            мире, здравии, спасении, посещении, прощении и оставлении грехов рабов Божиих,
                            братии святаго храма сего (аще во обители: святыя обители сея).</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Еще молимся о плодоносящих и
                            добродеющих во святем и всечестнем храме сем, труждающихся, поющих и
                            предстоящих людех, ожидающих от Тебе великия и богатыя милости.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Возглашает иерей:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Яко
                            милостив и человеколюбец Бог еси, и Тебе славу возсылаем, Отцу, и Сыну, и
                            Святому Духу, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Лик:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_a2c2j3k6ry46" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Ектения просительная </span></b></h3>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Исполним утреннюю молитву нашу
                            Господеви.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:&nbsp; </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Заступи, спаси, помилуй
                            и сохрани нас, Боже, Твоею благодатию.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи, помилуй.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Дне всего совершенна, свята,
                            мирна и безгрешна, у Господа просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Ангела мирна, верна
                            наставника, хранителя душ и телес наших, у Господа просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Прощения и оставления грехов и
                            прегрешений наших, у Господа просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Добрых и полезных душам нашим,
                            и мира мiрови, у Господа просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Прочее время живота нашего в
                            мире и покаянии скончати, у Господа просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Христианския кончины живота
                            нашего, безболезнены, непостыдны, мирны и добраго ответа на страшнем судищи
                            Христове просим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Подай, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Пресвятую, пречистую,
                            преблагословенную, славную Владычицу нашу Богородицу и Приснодеву Марию со
                            всеми святыми помянувше, сами себе и друг друга, и весь живот наш Христу Богу
                            предадим.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Тебе, Господи.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Возглашает иерей:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Яко
                            Бог милости, щедрот и человеколюбия еси, и Тебе славу возсылаем, Отцу, и Сыну,
                            и Святому Духу, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Иерей:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Мир всем.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            И духови твоему.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Главы
                            наша Господеви приклоним.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Тебе,
                            Господи.</span></p>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_bsfwmc9bsz44" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Молитва главопреклонения</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Иерей:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Господи святый, в вышних
                            живый, и на смиренныя призираяй, и всевидящим оком Твоим призираяй на всю
                            тварь, Тебе приклонихом выю сердца и телесе, и молимся Тебе: простри руку Твою
                            невидимую от святаго жилища Твоего, и благослови вся ны. И аще что согрешихом,
                            волею или неволею, яко благ и человеколюбец Бог прости, даруя нам мiрная и
                            премiрная благая Твоя.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Возглашает:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Твое бо есть еже
                            миловати и спасати ны, Боже наш, и Тебе славу возсылаем, Отцу, и Сыну, и Святому
                            Духу, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}> Аминь. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Диакон: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Премудрость.</span></p>
                        <p className="MsoNormal" style={{ marginBottom: '12.0pt' }}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Благослови.</span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Сый
                            благословен Христос, Бог наш, всегда, ныне и присно, и во веки веков.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                            Аминь. Утверди, Боже, святую православную веру, православных христиан во век
                            века. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>

                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Пресвятая
                            Богородице, спаси нас.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Честнейшую
                            Херувим / и славнейшую без сравнения Серафим, / без истления Бога Слова
                            рождшую, / сущую Богородицу, Тя величаем. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Слава
                            Тебе, Христе Боже, упование наше, слава Тебе.</span></p>
                        <p className="MsoNormal" style={{}}><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор: </span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>Слава,
                            и ныне: Господи, помилуй, </span><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>трижды.</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#222222' }}>
                                Благослови. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                    </div >
                </div >
                <div className="content" style={{ borderTop: "1px solid rgba(231, 231, 231, 1)  " }}>
                    <div className="services-container" style={{ padding: "16px" }}>
                        <h3 style={{ marginTop: '0in', pageBreakAfter: 'auto' }}><div className="_xgvz7apue8dn" /><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Священник произносит отпуст:</span></b></h3>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>В неделю:</span><span style={{ fontSize: '16px', lineHeight: '20px', color: '#434343' }}> Воскресый из мертвых,
                            Христос, истинный Бог наш, молитвами Пречистыя Своея Матере, святых славных и
                            всехвальных Апостол, (и святаго, егоже есть храм, и святаго, егоже есть день),
                            святых и праведных богоотец Иоакима и Анны, и всех святых, помилует и спасет
                            нас, яко благ и человеколюбец.</span></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор поет многолетие. </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Первый час </span></b></p>
                        <p className="MsoNormal"><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Хор, кондак </span></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>&nbsp;</span></b></p>
                        <p className="MsoNormal"><b><span style={{ fontSize: '16px', lineHeight: '20px', color: ' rgba(234, 96, 96, 1)' }}>Отпуст </span></b></p>
                        <div className="flexed" style={{ padding: '8px 0px' }} >
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
                        </div>
                    </div>
                    {/* </div> */}

                </div >
            </div >
        </>
    );
}