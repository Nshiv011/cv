import React from "react";
import word from '../src/images/wordpress.png';
import boot from '../src/images/boot.png';
import reac from '../src/images/react.jpg';
import node from '../src/images/node.png';
import express from '../src/images/express.png';
import mongo from '../src/images/mongo.jpg';
import seo from '../src/images/seo.png';
import smo from '../src/images/smo.jpg';
import goog from '../src/images/google a.png';
import goo from '../src/images/google ad.jpg';
import sql from '../src/images/mysql.png';
import stats from '../src/images/stats.png';
import open from '../src/images/open.png';
import mat from '../src/images/matplot.png';
import num from '../src/images/numpy.png';
import sea from '../src/images/seaborn.png';


const Banner=()=>{
    return(
        <>
<h1 className="skill"> SKILLS</h1>
<div className="cont">
  <div className="photobanner">
    <img src={boot} alt=""/>
    <img src={reac} alt=""/>
    <img src={node} alt=""/>
    <img src={express} alt=""/>
    <img src={mongo} alt=""/>
    <img src={word} alt=""/>
    <img src={seo} alt=""/>
    <img src={smo} alt=""/>
    <img src={goog} alt=""/>
    <img src={goo} alt=""/>
    <img src={sql} alt=""/>
    <img src={stats} alt=""/>
    <img src={open} alt=""/>
    <img src={mat} alt=""/>
    <img src={sea} alt=""/>
    <img src={num} alt=""/>
  </div>
</div>

  </>
    );
};
export default Banner;