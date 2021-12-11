import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index'; 
import Shop from '../components/Shop';

const GalleryPg = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="UNIPHI Car wash and Detailing"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title="Our Shop" 
        /> 

        <Shop />   
 
     </LayoutOne>

    </Fragment>
  );
};

export default GalleryPg;