import React from 'react';
import POPOSSpace from './POPOSSpace';

function POPOSList() {
  return (
    <div>
        <POPOSSpace
            name="Glasgow Green"
            address="Greendyke St, Saltmarket, Glasgow G1 5DB"
            image="glasgow/Glasgow-Green-content-block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
        />
        <POPOSSpace
            name="Glasgow Necropolis"
            address="Castle St, Glasgow G4 0UZ"
            image="glasgow/Parks_Glasgow-Cathedral-and-Necropolis_Content-Block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
        />
        <POPOSSpace
            name="Kelvingrove Park"
            address="Park Terrace, Glasgow G3 6BY"
            image="glasgow/Parks-and-Gardens_Kelvingrove-fountain_Content-Block-1_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
        />
        <POPOSSpace
            name="Pollok Country Park"
            address="2060 Pollokshaws Rd, Bellahouston, Glasgow G43 1AT"
            image="glasgow/Parks-and-Gardens_Pollok-House_Content-Block_11e6b377409ad0b26f1269c19e5bbf18.jpg"
        />
        <POPOSSpace
            name="Botanic Gardens Gardens"
            address="730 Great Western Rd, Glasgow G12 0UE"
            image="glasgow/Parks-Gardens_Botanics_Content-Block_11e6b377409ad0b26f1269c19e5bbf18.jpg"
        />
        <POPOSSpace
            name="Queen's Park"
            address="Langside Rd, Glasgow G42 9QL"
            image="glasgow/Summer-walks_Queens-Park_content-block_2023-06-14-150047_tfsw_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
        />
    </div>
  )
}

export default POPOSList