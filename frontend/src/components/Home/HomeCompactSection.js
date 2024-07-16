import React from "react";
import { Link } from 'react-router-dom';
import './HomeCompactSection.css';

function HomeCompactSection () {
  return (
    <div className='homeCompactSectionContainer'>


        <div className="circularNavyBg sectionCalendar">
          <i className="far fa-calendar-alt sectionIcon"></i>
        </div>
        <div className="circularNavyBg sectionPray">
          <i className="fas fa-pray sectionIcon"></i>
        </div>
        <div className="circularNavyBg sectionTestimony">
          <i className="fas fa-fire sectionIcon"></i>
        </div>
        <div className="circularNavyBg sectionAlbum">
          <i className="fas fa-icons sectionIcon"></i>
        </div>

        <div className="sectionCalendarSub sectionTitle">聚会时间</div>
        <div className="sectionPraySub sectionTitle">聚会时间</div>
        <div className="sectionTestimonySub sectionTitle">聚会时间</div>
        <div className="sectionAlbumSub sectionTitle">聚会时间</div>

        <div className="circularNavyBg sectionBuilding">
          <i className="fas fa-building sectionIcon"></i>
        </div>
        <div className="circularNavyBg sectionMinistry">
          <i className="fas fa-walking sectionIcon"></i>
        </div>
        <div className="circularNavyBg sectionSpiritFood">
          <i className="fas fa-hamburger sectionIcon"></i>
        </div>
        <div className="sectionEmpty"></div>

        <div className="sectionBuildingSub sectionTitle">聚会时间</div>
        <div className="sectionMinistrySub sectionTitle">聚会时间</div>
        <div className="sectionSpiritFoodSub sectionTitle">聚会时间</div>

    </div>
  )
}

export default HomeCompactSection;


/**
<div className="circularNavyBg sectionCalendar">
          <i className="far fa-calendar-alt sectionIcon"></i>
        </div>
        <div className="circularNavyBg sectionPray">
          <i className="fas fa-pray sectionIcon"></i>
        </div>
        <div className="circularNavyBg sectionTestimony">
          <i className="fas fa-fire sectionIcon"></i>
        </div>
        <div className="circularNavyBg sectionAlbum">
          <i className="fas fa-icons sectionIcon"></i>
        </div>

        <div className="sectionCalendarSub sectionTitle">聚会时间</div>
        <div className="sectionPraySub sectionTitle">聚会时间</div>
        <div className="sectionTestimonySub sectionTitle">聚会时间</div>
        <div className="sectionAlbumSub sectionTitle">聚会时间</div>

        <div className="circularNavyBg sectionBuilding">
          <i className="fas fa-building sectionIcon"></i>
        </div>
        <div className="circularNavyBg sectionMinistry">
          <i className="fas fa-walking sectionIcon"></i>
        </div>
        <div className="circularNavyBg sectionSpiritFood">
          <i className="fas fa-hamburger sectionIcon"></i>
        </div>
        <div className="sectionEmpty"></div>

        <div className="sectionBuildingSub sectionTitle">聚会时间</div>
        <div className="sectionMinistrySub sectionTitle">聚会时间</div>
        <div className="sectionSpiritFoodSub sectionTitle">聚会时间</div>
 */
