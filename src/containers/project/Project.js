import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { projectSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Project() {
    function openUrlInNewTab(url) {
        var win = window.open(url, "_blank");
        win.focus();
    }
    return ( <
        Fade bottom duration = { 1000 }
        distance = "20px" >
        <
        div className = "main"
        id = "projects" >
        <
        div className = "achievement-main-div" >
        <
        div className = "achievement-header" >
        <
        h1 className = "heading achievement-heading" > { projectSection.title } < /h1> <
        p className = "subTitle achievement-subtitle" > { projectSection.subtitle } < /p> < /
        div > <
        div className = "achievement-cards-div" > {
            projectSection.achivementsCards.map(card => {
                return ( <
                    AchivementCard cardInfo = {
                        {
                            title: card.title,
                            description: card.subtitle,
                            image: card.image,
                            footer: card.footerLink
                        }
                    }
                    />
                );
            })
        } <
        /div> < /
        div > <
        /div> < /
        Fade >
    );
}