import React from "react";
import AdSense from "react-adsense";

const GoogleAdsense = () => {
  return (
    <div className="google-adsense my-2">
      <div className="d-block d-sm-none">
        {/* 300x50 / 510 */}
        <AdSense.Google
          style={{ display: "inline-block", width: 300, height: 50 }}
          client="ca-pub-7150456660061561"
          slot="7233345380"
          format=""
        />
      </div>
      <div className="d-none d-sm-block d-md-none">
        {/* 468x60 / 510 */}
        <AdSense.Google
          style={{ display: "inline-block", width: 468, height: 60 }}
          client="ca-pub-7150456660061561"
          slot="1733606698"
          format=""
        />
      </div>
      <div className="d-none d-md-block d-lg-none">
        {/* 468x60 / 690 */}
        <AdSense.Google
          style={{ display: "inline-block", width: 468, height: 60 }}
          client="ca-pub-7150456660061561"
          slot="1733606698"
          format=""
        />
      </div>
      <div className="d-none d-lg-block d-xl-none">
        {/* 728x90 / 930 */}
        <AdSense.Google
          style={{ display: "inline-block", width: 728, height: 90 }}
          client="ca-pub-7150456660061561"
          slot="9914832125"
          format=""
        />
      </div>
      <div className="d-none d-xl-block">
        {/* 970x90 / 1110 */}
        <AdSense.Google
          style={{ display: "inline-block", width: 970, height: 90 }}
          client="ca-pub-7150456660061561"
          slot="2349179203"
          format=""
        />
      </div>
    </div>
  );
};

export { GoogleAdsense };
