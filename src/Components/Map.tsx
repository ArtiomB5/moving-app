import { load } from '@2gis/mapgl';
import { Directions } from '@2gis/mapgl-directions';
import { FC, useEffect, useState } from 'react';
import { MapWrapper } from './MapWrapper';
import { Point } from './Point';
import { Button } from 'rebass';
import { CustomModal } from './CustomModal';
import { Ordering } from '../Pages/Ordering';
import { CustomButton } from './CustomButton';
import { Auth } from '../Pages/Auth';

interface IMapProps {
  geolocation: [number, number]
  isOrdering: boolean
  setIsOrdering: (param: boolean) => void
}

type PointsStateType = [][] | [number[], number[] | []]

const token = localStorage.getItem("token");

export const Map: FC<IMapProps> = ({ geolocation, isOrdering, setIsOrdering }) => {
  const [points, setPoints] = useState<PointsStateType>([[], []])
  const [isOpenOrdering, setIsOpenOrdering] = useState(false)
  const [distance, setDistance] = useState(0)

  const onSubmitOrderingHandler = () => setIsOpenOrdering(false)

  const getDistance = (e: any) => {
    let distance = 0
    const polylines = e.ppnaDrawer.polylines
    for (let i = 0; i < polylines.length; i++) {
      const distances = polylines[i].polyline._impl.distances
      const distancesLength = distances.length
      distance = distance + distances[distancesLength - 1]
    }
    const km = distance / 1000
    setDistance(km)
  }

  useEffect(() => {
    let map: any;
    const markers: any[] = []

    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: geolocation,
        zoom: 13,
        key: 'a1893935-6834-4445-b97a-3405fb426c5b',
      });

      map.on('click', (e: any) => {
        if (points[0].length === 0 && points[1].length === 0) {
          setPoints((pv: PointsStateType) => {
            return [e.lngLat as number[], pv[1]]
          })
        }

        if (points[0].length > 0 && points[1].length === 0) {
          setPoints((pv: any) => {
            return [pv[0], e.lngLat as number[]]
          })
        }
      });

      if (points[0].length !== 0 && points[1].length === 0) {
        const marker = new mapglAPI.Marker(map, {
          coordinates: points[0],
          icon: 'https://docs.2gis.com/img/dotMarker.svg',
        })
        markers.push(marker)
      }

      if (points[0].length !== 0 && points[1].length !== 0) {
        const directions = new Directions(map, {
          directionsApiKey: 'rujany4131',
        });
        const pointsClearButton = document.getElementById("clear")
        const pointsClearHandler = () => {
          directions.clear()
          setPoints([[], []])
        }
        pointsClearButton?.addEventListener("click", pointsClearHandler)

        directions.carRoute({
          points: points,
        }).then((e: any) => {
          console.log('d-points', e)
          console.log('directions', directions)
          console.log('map', map)
          console.log('points', points)
          console.log('distance', getDistance(directions))
        })
        markers.forEach((m) => {
          m.destroy();
        });
      }
    });

    // Удаляем карту при размонтировании компонента
    return () => {
      map && map.destroy()
    }
  }, [points]);

  const clearHandler = () => {
    setPoints([[], []])
  }

  return (
    <>
      {<div style={{
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "5px",
        minHeight: "86px"
      }}>
        {points[0].length === 0 && <h3>Welcom! Choose your moving route!</h3>}
        {points[0].length > 0 && <>
          <div>
            {points[0].length > 0
              && <Point coords={points[0]} pointName={"Point A"} />}

            {points[1].length > 0
              && <Point coords={points[1]} pointName={"Point B"} />}
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {points[0].length > 0
              && <CustomButton handler={clearHandler} title={'Clear Points'} isPrimary={false} />}

            {points[0].length > 0
              && points[1].length > 0
              && <CustomModal
                buttonTitle={'Ordering'}
                isOpen={isOpenOrdering}
                setIsOpen={setIsOpenOrdering}
                buttonType={'button'}
              >
                <>
                  {isOrdering && <Ordering onSubmitHandler={onSubmitOrderingHandler} distance={distance} points={points} />}
                  {!isOrdering && <Auth onSubmitHandler={() => { setIsOrdering(true) }} />}
                </>
              </CustomModal>}
          </div>
        </>}
      </div>}

      <div style={{ width: '100%', height: '100%' }}>
        <MapWrapper />
      </div >
    </>
  );
};