import React from 'react';
import History from '../assets/about/history-cocktail.jpeg'
import Art from '../assets/about/art-cocktails.jpeg'
import Tiki from '../assets/about/tiki-culture.jpeg'

const About = () => {
    return (
        <section className="section about-section">
            <h1 className="section-title">about us</h1>
            <p>Cocktails were initially inspired by British punches, which contained spirits, fruit juices, and spices
                in big bowls. The term “cocktail” was first seen on March 17, 1798, as referenced from a newspaper.

                There are several theories around why cocktails are called cocktails, the most popular of which relates
                to horse racing.

                Though the origin of mixed drinks can be traced back to the 17th century, it wasn’t clear where, who,
                and how the “original” cocktail was created.

                The first-ever reference to cocktails appeared in a spoof editorial in the Farmer’s Cabinet (Amherst,
                New Hampshire, April 28, 1803).

                It talked of a “lounger” who, while nursing an 11 a.m. hangover, “Drank a glass of cocktail – excellent
                for the head…”

                But it wasn’t until 1806 when The Balance and Columbian Repository of Hudson, New York pinned the
                definition down to what we know of cocktails today: “A stimulating liquor composed of any kind of sugar,
                water, and bitters.”</p>

            <article>
                <h2 className="section-title">History of Cocktails</h2>
                <img src={History} alt="history"/>
                <p style={{paddingTop: "30px"}}>There are several theories around why cocktails are called cocktails, the most popular of which
                    relates to horse racing.

                    Though the origin of mixed drinks can be traced back to the 17th century, it wasn’t clear where,
                    who, and how the “original” cocktail was created.

                    The first-ever reference to cocktails appeared in a spoof editorial in the Farmer’s Cabinet
                    (Amherst, New Hampshire, April 28, 1803).

                    It talked of a “lounger” who, while nursing an 11 a.m. hangover, “Drank a glass of cocktail –
                    excellent for the head…”

                    But it wasn’t until 1806 when The Balance and Columbian Repository of Hudson, New York pinned the
                    definition down to what we know of cocktails today: “A stimulating liquor composed of any kind of
                    sugar, water, and bitters.”</p>
            </article>
            <article>
                <h2 className="section-title">The Art of Bartending</h2>
                <img src={Art} alt="art"/>
                <p style={{paddingTop: "30px"}}>As cocktails made their way into becoming a social badge of honour during the Shakespearean times,
                    developments into the mood-altering effects of booze turned mixing drinks and bartending into big
                    news.

                    Jerry Thomas or Professor Thomas, an American bartender, helped define the art of bartending. Using
                    the experience he gained from working all over Europe and America, he wrote “The Bartender’s Guide
                    (or How to Mix Drinks).”

                    It is one of the first comprehensive recipe books that became a standard-bearer for new and
                    experienced bartenders alike, becoming a significant milestone from the Golden Age of the history of
                    cocktails.

                </p>
            </article>

            <article>
                <h2 className="section-title">Tiki Culture</h2>
                <img src={Tiki} alt="titki"/>
                <p style={{paddingTop: "30px"}}>From the tourism and war-ravaged era, the Tiki culture started to rise. But it wasn’t until Ernest Raymond Beaumont Gantt’s (a.k.a. Don the Beachcomber) Hollywood restaurant was opened that the Tiki craze started.

                    It became so popular that Gantt’s place later became a Polynesian hotspot.

                    Meanwhile, Victor Bergeron (a.k.a. Trader Vic) opened his competing location in San Francisco around the same time, boosting the popularity of exotic tropical and colourful mixed drinks.

                    The trend died down in the 1970s when the sluggish economy took a turn for the worse.

                    High-end Tiki establishments were forced to close down, leaving behind colourful signature drinks to be recreated for years to come.

                </p>
            </article>

        </section>
    )
}

export default About
