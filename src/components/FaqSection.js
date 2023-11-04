import React from 'react';

const FaqSection = () => {
    return (
        <div className={"faq__section"}>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className={"question"}>
                <h4>Can I learn on your platform?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                </div>
            </div>
            <div className={"question"}>
                <h4>How can I pay on your platform?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                </div>
            </div>
            <div className={"question"}>
                <h4>What is your address?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                </div>
            </div>
            <div className={"question"}>
                <h4>How many students study at your platform?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;