import React from "react";
import { Link } from 'react-router-dom';
import './HomeCompactSection.css';

function HomeCompactSection () {
  return (
    <div className='homeCompactSectionContainer'>

        <Link to="meetingTime">
        <div className="sectionCalendar">
          <div className="circularNavyBg">
            <i className="far fa-calendar-alt sectionIcon"></i>
          </div>
          <div className="sectionCalendarSub sectionTitle">聚会时间</div>
        </div>
        </Link>

        <Link to="prayerLetter">
        <div className="sectionPray">
          <div className="circularNavyBg">
            <i className="fas fa-pray sectionIcon"></i>
          </div>
          <div className="sectionPraySub sectionTitle">代祷</div>
        </div>
        </Link>

        <Link to="testimony">
        <div className="sectionTestimony">
          <div className="circularNavyBg">
            <i className="fas fa-fire  sectionIcon"></i>
          </div>
          <div className="sectionTestimonySub sectionTitle">生命见证</div>
        </div>
        </Link>

        <Link to="album">
        <div className="sectionAlbum">
          <div className="circularNavyBg">
            <i className="fas fa-icons sectionIcon"></i>
          </div>
          <div className="sectionAlbumSub sectionTitle">活动花絮</div>
        </div>
        </Link>

        <Link to="building">
        <div className="sectionBuilding">
          <div className="circularNavyBg">
            <i className="fas fa-building sectionIcon"></i>
          </div>
          <div className="sectionCalendarSub sectionTitle">大楼</div>
        </div>
        </Link>

        <Link to="ministry">
        <div className="sectionMinistry">
          <div className="circularNavyBg">
            <i className="fas fa-walking sectionIcon"></i>
          </div>
          <div className="sectionBuildingSub sectionTitle">外展事工</div>
        </div>
        </Link>

        <Link to="spirtualFood">
        <div className="sectionSpiritFood">
          <div className="circularNavyBg">
            <i className="fas fa-hamburger sectionIcon"></i>
          </div>
          <div className="sectionSpiritFoodSub sectionTitle">灵粮宝库</div>
        </div>
        </Link>

        <div className="sectionEmpty"></div>

    </div>
  )
}

export default HomeCompactSection;
