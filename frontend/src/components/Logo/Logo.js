import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

function Logo() {

  return (
    <div className='logoContainer'>
      <Link to="/" className="logoLink">
        <div className='logoAndName'>
          <div>
            <img className="logoImg" alt='logo' src="https://lh3.googleusercontent.com/pw/AP1GczP2bkQS6sktX_b3FX3mLEsi7VUc_YskWINYIfBx8oJ2Z2wdPm0GsWNkI3PKV4PC6mY_HK8nKqqj-jtoHFY0yRhjBNhaSph2B5v8csMrIoNzHHCae8U46e7BapPQPQ-XmqDTFG_uq5IQOJEwj1ET1jwujN22mXeb8AnXq2KKNs7UH80HQGP3HSepLd6gEuY_eNXoLqwEELwkQU9gTrXJHuV5PK-B-R07gTK4XlpMQLYjXq3H05GiI_G2nmlWnlCOvrX1BB5NETuXz10YAzaBR-eie11HqVM4wtzMRaHmaD6SbgHLTubZzAEJUGbqoWU7sXEZqAQni9OywgilAmFi-mNmTmm5drffI7gp40pWPnfEA5avZaqPD1_biYbuhoiEG_uCHLUqCjqB1Rpe-2Ml6elU7cfm6wIb2_Lb_YZPOJ3zOU62LDWDngtiMLhb49x-bOm6w39tVidOr0IGuCcXS5j3g3sGeoS2GcU8A7iLITIH5sYDgYKa-dMTWxED7nUY2-iIG68N10B9YcxDBCFWSy9jFV5u1YL5zQ2JPBAEGxDyTabu_zOKbaDB3QWnj_gTm1gmFFBF3A89rhGgV5GpfoIWnMi716X-mlH6n7BCJYRSLP8tZldhVyL_8mwOZogCgoawh2RHF3N_URMdrOvSb_3ljNiCNNn7nSYtz310WC5G74IWAtGhbF5iqum9x4MnLgUcqNcC9dS-Em4d9BBYnt9wKEPN_1NMroEh4rpq6OHRCGB3eGrbatr5P3F8jGh2lmA_lBTSipBMsJAhHasjodph9bmMpjeHeQRV04VAEBMDIkA81JtuRsy9hPBJUR8BMBDnGDB9PwMiSelhzJ3t2FOYbxza2d7AWPZLW2_hmHrzLUl9VuNSyLmuBt2Ctc2Ye6HjAlpwpGyOHALCNUhCczA10m4d-CXuGaQOd0skOQHwqYhhXMkhkqMUMExrG5aAOk2yoO-Hz-XESIwkKB0=s500-no?authuser=0"/>
          </div>
          <div className='logoNameDiv'>
            <div className='logoNameCHN'>基督教会信心以勒堂</div>
            <div className='logoNameENG'>Faith Jireh Christian Church</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Logo
