import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSaturday } from 'date-fns';

export const DayComponent = ({ day, }: { day: Date, today: Date }) => {
    const isSat = isSaturday(day); // Check if the day is Saturday

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '12px',
                border: isToday(day) ? '1px solid #097320' : 'none',
                backgroundColor: isToday(day) ? '#DBF2E0' : 'transparent',
                borderRadius: '4px'
            }}
        >
            <div style={{
                padding: "14px 12px",
                fontWeight: "bold",
                fontFamily: "font-family: SF Pro-Semibold"
            }}>{format(day, 'EEEEEE')}</div>
            <div style={{
                padding: "14px 12px",
                borderRadius: '4px',
                border: isToday(day) ? "none" : isSat ? "1px solid #EA6060" : "1px solid #E7E7E7",
                fontFamily: "SF Pro",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "12px",
                textAlign: "center",
                color: 'black'
            }}>{format(day, 'd')}</div>
        </div >
    );
};

const DaysSwiper = () => {
    const [date, setDate] = useState(new Date());
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    const days = eachDayOfInterval({ start, end });
    const today = new Date();

    const handleMonthChange = (direction: string) => {
        setDate((prevDate) => addDays(prevDate, direction === 'next' ? 30 : -30));
    };

    return (
        <div className="container" style={{ paddingTop: "24px" }}>
            <div className="month-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                <div className='month-head-nav'>
                    <button onClick={() => handleMonthChange('prev')}>
                        <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.0839 1.11652C11.4444 1.47701 11.4444 2.06147 11.0839 2.42195L2.50585 11L11.0839 19.5781C11.4444 19.9385 11.4444 20.523 11.0839 20.8835C10.7234 21.244 10.139 21.244 9.77848 20.8835L0.547707 11.6527C0.187223 11.2922 0.187223 10.7078 0.547707 10.3473L9.77848 1.11652C10.139 0.75604 10.7234 0.75604 11.0839 1.11652Z" fill="black" />
                        </svg>
                    </button>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', minWidth: "160px", textAlign: "center" }}>
                        {format(date, 'MMMM yyyy')}
                    </div>
                    <button onClick={() => handleMonthChange('next')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.9161 21.8835C6.55561 21.523 6.55561 20.9385 6.9161 20.578L15.4942 12L6.9161 3.42194C6.55561 3.06145 6.55561 2.47699 6.9161 2.11651C7.27658 1.75603 7.86104 1.75603 8.22152 2.11651L17.4523 11.3473C17.8128 11.7078 17.8128 12.2922 17.4523 12.6527L8.22152 21.8835C7.86104 22.244 7.27658 22.244 6.9161 21.8835Z" fill="black" />
                        </svg>
                    </button>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.845703 7.86154C0.845703 5.31254 2.91208 3.24616 5.46109 3.24616H16.538C19.087 3.24616 21.1534 5.31254 21.1534 7.86154V17.0923C21.1534 19.6413 19.087 21.7077 16.538 21.7077H5.46109C2.91208 21.7077 0.845703 19.6413 0.845703 17.0923V7.86154ZM5.46109 5.09231C3.93168 5.09231 2.69186 6.33214 2.69186 7.86154V17.0923C2.69186 18.6217 3.93168 19.8615 5.46109 19.8615H16.538C18.0674 19.8615 19.3072 18.6217 19.3072 17.0923V7.86154C19.3072 6.33214 18.0674 5.09231 16.538 5.09231H5.46109Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0457 10.6308H1.58416V8.78462H20.0457V10.6308Z" fill="black" />
                        <path d="M6.38416 12.8462C6.38416 12.6422 6.54948 12.4769 6.7534 12.4769H7.86109C8.06501 12.4769 8.23032 12.6422 8.23032 12.8462V13.9539C8.23032 14.1578 8.06501 14.3231 7.86109 14.3231H6.7534C6.54948 14.3231 6.38416 14.1578 6.38416 13.9539V12.8462Z" fill="black" />
                        <path d="M6.38416 16.5385C6.38416 16.3345 6.54948 16.1692 6.7534 16.1692H7.86109C8.06501 16.1692 8.23032 16.3345 8.23032 16.5385V17.6462C8.23032 17.8501 8.06501 18.0154 7.86109 18.0154H6.7534C6.54948 18.0154 6.38416 17.8501 6.38416 17.6462V16.5385Z" fill="black" />
                        <path d="M10.0765 12.8462C10.0765 12.6422 10.2418 12.4769 10.4457 12.4769H11.5534C11.7573 12.4769 11.9226 12.6422 11.9226 12.8462V13.9539C11.9226 14.1578 11.7573 14.3231 11.5534 14.3231H10.4457C10.2418 14.3231 10.0765 14.1578 10.0765 13.9539V12.8462Z" fill="black" />
                        <path d="M10.0765 16.5385C10.0765 16.3345 10.2418 16.1692 10.4457 16.1692H11.5534C11.7573 16.1692 11.9226 16.3345 11.9226 16.5385V17.6462C11.9226 17.8501 11.7573 18.0154 11.5534 18.0154H10.4457C10.2418 18.0154 10.0765 17.8501 10.0765 17.6462V16.5385Z" fill="black" />
                        <path d="M13.7688 12.8462C13.7688 12.6422 13.9341 12.4769 14.138 12.4769H15.2457C15.4496 12.4769 15.6149 12.6422 15.6149 12.8462V13.9539C15.6149 14.1578 15.4496 14.3231 15.2457 14.3231H14.138C13.9341 14.3231 13.7688 14.1578 13.7688 13.9539V12.8462Z" fill="black" />
                        <path d="M13.7688 16.5385C13.7688 16.3345 13.9341 16.1692 14.138 16.1692H15.2457C15.4496 16.1692 15.6149 16.3345 15.6149 16.5385V17.6462C15.6149 17.8501 15.4496 18.0154 15.2457 18.0154H14.138C13.9341 18.0154 13.7688 17.8501 13.7688 17.6462V16.5385Z" fill="black" />
                        <path d="M6.38416 0.846159C6.38416 0.642239 6.54948 0.476929 6.7534 0.476929H7.86109C8.06501 0.476929 8.23032 0.642239 8.23032 0.846159V4.72308C8.23032 4.927 8.06501 5.09231 7.86109 5.09231H6.7534C6.54948 5.09231 6.38416 4.927 6.38416 4.72308V0.846159Z" fill="black" />
                        <path d="M13.7688 0.846159C13.7688 0.642239 13.9341 0.476929 14.138 0.476929H15.2457C15.4496 0.476929 15.6149 0.642239 15.6149 0.846159V4.72308C15.6149 4.927 15.4496 5.09231 15.2457 5.09231H14.138C13.9341 5.09231 13.7688 4.927 13.7688 4.72308V0.846159Z" fill="black" />
                    </svg>
                </div>
                <div className="helper-text " style={{ display: 'flex', gap: "16px" }}>
                    <p className="red" style={{ display: "flex", gap: "4px", color: "rgba(234, 96, 96, 1)" }
                    }>
                        <span >
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#EA6060" />
                            </svg>
                        </span>
                        Orthodox holiday</p>
                    <p className="green" style={{ display: "flex", gap: "4px", color: "rgba(9, 115, 32, 1)" }}>
                        <span >
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#097320" />
                            </svg>
                        </span>
                        Selected day
                    </p>
                </div>
            </div>
            <div className="gray-border" style={{ border: "1px solid #E7E7E7", borderRadius: "9px", padding: "8px 0px 8px 0px ", marginTop: "16px" }}>
                <Swiper
                    loop
                    slidesOffsetBefore={-25}
                    breakpoints={{
                        0: {
                            slidesPerView: 8,
                            spaceBetween: 4
                        },
                        320: {
                            slidesPerView: 8,
                            spaceBetween: 4

                        },
                        480: {
                            slidesPerView: 8,
                            spaceBetween: 4

                        },
                        640: {
                            slidesPerView: 10,
                            spaceBetween: 4

                        },
                        768: {
                            slidesPerView: 15,
                            spaceBetween: 4

                        },
                        1024: {
                            slidesPerView: 22,
                            spaceBetween: 8

                        },
                        1000: {
                            slidesPerView: 22,
                            spaceBetween: 8

                        },
                        1536: {
                            slidesPerView: 22,
                            spaceBetween: 8

                        }
                    }}
                >
                    {days.map((day) => (
                        <SwiperSlide key={day.toString()}>
                            <DayComponent day={day} today={today} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    );
};

export default DaysSwiper;