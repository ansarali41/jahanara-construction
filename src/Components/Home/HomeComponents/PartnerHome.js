import React from 'react';
import handsLogo from '../../../images/hands-logo.png';
import afconsLogo from '../../../images/afcons-logo.png';
import partners from '../../../images/partners.png';
import MyDivider from '../../../Common/Components/MyDivider';
const PartnerHome = () => {
    const Style = {
        main: {
            backgroundColor: '#F58128',
            color: '#FFFFFF',
        },
        handsIcon: {
            width: 100,
        },
        partnersImg: {
            maxWidth: 280,
            width: '100%',
            borderRadius: 10,
        },
        afconsIcon: {
            maxWidth: 180,
            width: '100%',
            borderRadius: 10,
        },
    };
    return (
        <div className="p-3" style={Style.main}>
            <div className="d-flex justify-content-center mt-4">
                <img src={handsLogo} alt="" className="img-fluid" style={Style.handsIcon} />
            </div>

            <div className="d-flex justify-content-center">
                <h2 style={Style.bannerTitle} className="pb-2">
                    Our Existing Partner
                </h2>
            </div>
            <div className="mx-5 mb-5 px-5">
                <MyDivider width="100%" height="2px" background="white" />
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                {/* img section */}
                <div className="col-12 col-md-4">
                    <div className="text-center mb-3" style={Style.document}>
                        <div>
                            <img src={partners} alt="" className="img-fluid" style={Style.partnersImg} />
                        </div>
                        <div className="pt-3">
                            <img src={afconsLogo} alt="" className="img-fluid" style={Style.afconsIcon} />
                        </div>
                    </div>
                </div>
                {/* para section */}
                <div className="col-12 col-md-8">
                    <MyDivider width="90px" height="12px" background="white" />
                    <p>
                        Afcons Begins its journy As a civil construction Company- a partnership between Radio Foundation Engineering Limited, Switzerland and Hazarat and Company,
                        India Afcons is a subsidiary of the Indian business conglomerate Shapoorji Pallonji Group who acquired the company in 2000. In 2006, there was widespread
                        speculation that Afcons would go public in an IPO but the company did not go through with it
                    </p>
                    <p>
                        <span style={{ color: '#1664AE', fontWeight: 'bold' }}>The Shapoorji Pallonji Group (SP Group) </span>
                        was established in 1865 in India. A diversified institution, the SP Group has a leading presence in Engineering & Construction, Infrastructure, Real Estate,
                        Water, Energy and Financial Services sectors across the globe. It has a strong employee base of over 70,000, and, delivers end-to-end solutions across
                        70-plus countries. The group companies build mega-structures, develop iconic landmarks, drive innovative technologies in water management, renewable energy,
                        oil & gas and power, with a focus on good governance, and, sustainable development, to engineer a better planet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PartnerHome;
