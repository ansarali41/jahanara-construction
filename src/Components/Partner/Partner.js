import React from 'react';
import banner from '../../images/partner-banner.png';
import handsLogo from '../../images/hands-logo.png';
import afconsLogo from '../../images/afcons-logo.png';
import partners from '../../images/partners.png';
import MyDivider from '../../Common/Components/MyDivider';
const Partner = () => {
    const Style = {
        main: {
            position: 'relative',
        },
        document: { position: 'absolute', bottom: '-30px' },
        banner: {
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '540px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        handsIcon: {
            width: 90,
        },
        bannerTitle: {
            color: '#fff',
        },
        partnersImg: {
            width: 250,
            borderRadius: '5px',
        },
        afconsIcon: {
            width: 180,
            borderRadius: '5px',
        },
    };
    return (
        <div className="my-5">
            {/* banner section */}
            <div style={Style.main}>
                <div style={Style.banner}>
                    <div className="text-center" style={Style.document}>
                        <div>
                            <img src={handsLogo} alt="" className="img-fluid" style={Style.handsIcon} />
                        </div>
                        <h1 style={Style.bannerTitle} className="pb-5">
                            Our Existing Partner
                        </h1>
                        <div>
                            <img src={partners} alt="" className="img-fluid" style={Style.partnersImg} />
                        </div>
                        <div className="pt-4">
                            <img src={afconsLogo} alt="" className="img-fluid" style={Style.afconsIcon} />
                        </div>
                    </div>
                </div>
            </div>

            {/* text */}
            <div className="container my-5 pb-5">
                <MyDivider width="90px" height="12px" background="#F58128" />
                <p className="lead">
                    Afcons Begins its journy As a civil construction Company- a partnership between Radio Foundation Engineering Limited, Switzerland and Hazarat and Company, India
                    Afcons is a subsidiary of the Indian business conglomerate Shapoorji Pallonji Group who acquired the company in 2000. In 2006, there was widespread speculation
                    that Afcons would go public in an IPO but the company did not go through with it
                </p>
                <p className="lead">
                    <span style={{ color: 'red' }}>The Shapoorji Pallonji Group (SP Group) </span>
                    was established in 1865 in India. A diversified institution, the SP Group has a leading presence in Engineering & Construction, Infrastructure, Real Estate,
                    Water, Energy and Financial Services sectors across the globe. It has a strong employee base of over 70,000, and, delivers end-to-end solutions across 70-plus
                    countries. The group companies build mega-structures, develop iconic landmarks, drive innovative technologies in water management, renewable energy, oil & gas
                    and power, with a focus on good governance, and, sustainable development, to engineer a better planet.
                </p>
            </div>
        </div>
    );
};

export default Partner;
