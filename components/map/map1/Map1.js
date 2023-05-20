import React, {useEffect, useState} from 'react';
import {
    FullscreenControl, GeolocationControl,
    Map,
    Placemark,
    SearchControl,
    TrafficControl,
    TypeSelector,
    YMaps,
    ZoomControl
} from "react-yandex-maps";
import classes from "./map1.module.scss";
import {useSelector} from "react-redux";
import {
    filteringCategory, filteringInfrastructure, filteringMap, filteringMaxPrice,
    filteringMinPrice, filteringPage,
    filteringSearch,
    filteringType
} from "../../../filtering/filteringSportArea";
import {getFetcher} from "../../../store/api";

export default function Map1({mapAreas}) {

    return (
        <YMaps>
            <div className={classes.map1_content}>
                <Map
                    className={classes.map1}
                    width={'100%'}
                    height={500}
                    defaultState={{
                        center: [42.875969, 74.603701],
                        zoom: 11.58,
                    }}
                >
                    <TrafficControl options={{
                        float: 'right'
                    }}/>
                    <TypeSelector options={{
                        float: 'right'
                    }}/>
                    <ZoomControl
                        options={{
                            float: 'left'
                        }}
                    />
                    <FullscreenControl/>
                    <GeolocationControl options={{
                        float: 'left'
                    }}/>
                    <SearchControl options={{
                        float: 'left'
                    }}/>

                    {mapAreas && mapAreas.map(area =>
                        <Placemark
                            key={area.id}
                            geometry={[area.latitude, area.longitude]}
                            options={{
                                iconColor: '#f46d6d',
                                iconLayout: 'default#image',
                                iconImageSize: [30, 40],
                                iconImageOffset: [-20, -20],
                                iconImageHref: 'http://sports.com.kg/img/marker.png',
                                iconShape: {
                                    type: 'Circle',
                                    coordinates: [0, 0],
                                    radius: 20
                                },
                            }}
                        />
                    )}
                </Map>
            </div>
        </YMaps>
    );
};