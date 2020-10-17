import React from 'react';

const UserOutput = (props) => {
    return (
        <div className = "UserOutput">
            <p>Author : {props.username} A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
            </p>
            <p>During medieval times, the mark evolved into the paragraph symbol [¶] (called a pilcrow or a paraph) and eventually became the modern-day paragraph break, which is now indicated by only a line break and indentation.
            </p>
        </div>
    )
}

export default UserOutput