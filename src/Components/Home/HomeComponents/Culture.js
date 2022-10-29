import React from 'react';
import MyDivider from '../../../Common/Components/MyDivider';
import cultureBanner from '../../../images/image/home2.jpg';
import '../Home.css';

const Culture = () => {
    const Style = {
        main: {
            backgroundImage: `url(${cultureBanner})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            maxHeight: 680,
        },
        paragraph: {
            margin: '0 auto',
            background: 'linear-gradient(0deg, rgba(53,53,53,0.8491990546218487) 0%, rgba(35,35,35,0.5158657212885154) 100%)',
            borderRadius: 10,
        },
        title: {
            margin: '0 auto',
        },
    };
    return (
        <div style={Style.main} className="d-flex justify-content-center align-items-center text-white my-5 main-container">
            <div className="mx-3">
                <div style={Style.title} className="mb-3">
                    <h1 className="culture-title">Culture</h1>
                    <MyDivider width="80px" background="white" />
                </div>
                <div style={Style.paragraph}>
                    <p className="shadow rounded lead culture-text">
                        Our culture begins with our people; we like to think of ourselves as one big family working together toward one goal - Building Excellence. Our company
                        culture is a mix of hard work, fun, mutual respect and a strong commitment to our clients and community. There is close friendship among the employees of
                        this family-oriented company that adds value to their working and personal lives. We strive to maintain an open, family-like atmosphere in our offices and
                        on our job sites. Like most families, our expectations are high, we recruit and retain only the most talented and enthusiastic employees, We encourage
                        teamwork and collaboration. We support and reward individual initiative and resourcefulness. We value problem solvers and effective communicators and
                        acknowledge and celebrate the contributions and accomplishments of others - fellow employees as well as our project partners.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Culture;
