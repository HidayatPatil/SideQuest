import { useState } from "react";
import styles from "@/components/carousel/carousel.module.css";
import IconButton from "../iconButton/iconButton";

const slides = [
    {
        title: "No more flying solo",
        image: "/appGraphics/froggy.svg",
        description:
            "Whether you’re looking to meet new people, or just need company when friends are busy, we’ve got you covered",
    },
    {
        title: "Find your crowd",
        image: "/appGraphics/hifive.svg",
        description:
            "From grocery runs to weekend trips, game nights to concert nights, connect with the right crowd for any type of adventure",
    },
    {
        title: "Adventure is out there!",
        image: "/appGraphics/adventure_t.svg",
        description:
            "With new quests popping up every day, there’s always something exciting to do and the perfect crowd to do it with",
    },
];
export default function Carousel({}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.slideContent}>
                <h1>{slides[currentSlide].title}</h1>
                <div className={styles.imageContainer}>
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className={styles.slideImage}
                    />
                </div>
                <p className={styles.description}>{slides[currentSlide].description}</p>
                <div className={styles.paginationContainer}>
                    <IconButton
                        icon="/Icons/arrowLeft.svg"
                        variant={"primaryOutline"}
                        onClick={prevSlide}
                    ></IconButton>
                    <div className={styles.pagination}>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${
                                    index === currentSlide ? styles.activeDot : ""
                                }`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                    <IconButton
                        icon="/Icons/arrowRight.svg"
                        variant={"primaryOutline"}
                        onClick={nextSlide}
                    ></IconButton>
                </div>
            </div>
        </div>
    );
}
