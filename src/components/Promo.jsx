import React, { useState } from 'react';

import content from './commons/content';

function Promo() {
    const [story, setStory] = useState({
        ...content.stories[0]
    });

    function refreshHandler() {
        const random = Math.floor((Math.random() * 6));
        setStory(content.stories[random])
    }
    return (
        <div id="promo-wrapper">
           <h2> {content.storiesTitle} </h2>
           <br />
           <a target="_blank" href={story.link}>
            <div>
                <section id="promo">
                    <h2>{story.title}</h2>
                </section>
            </div>
            </a>
        <br />
        <a onClick={refreshHandler} className="button">{content.storyRefresh}</a>
        </div>
    );
}

export default Promo;