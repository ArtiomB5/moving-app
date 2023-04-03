import { Checkbox, Input, Select } from "@rebass/forms";
import { ChangeEvent, FC, useState } from "react";
import { CustomButton } from './../Components/CustomButton';
import { getCars } from "../Utils/getCars";
import { getPrice } from "../Utils/getPrice";

interface IOrderingProps {
  onSubmitHandler: () => void,
  points: number[][],
  distance: number
}

export const Ordering: FC<IOrderingProps> = ({ onSubmitHandler, points, distance }) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [loading, setLoading] = useState('1')
  const [packing, setPacking] = useState('1')
  const [carLoadCapacity, setCarLoadCapacity] = useState(getCars()[2])

  const submitHandler = () => {
    console.log({
      date,
      time,
      loading,
      packing,
      carLoadCapacity,
      points,
      distance
    })
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span>Date:</span>
          <Input type="date" placeholder={'Choose Moving Date'} value={date} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setDate(e.currentTarget.value)
          }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span>Time:</span>
          <Input type="time" placeholder={'Choose Moving Time'} value={time} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTime(e.currentTarget.value)
          }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span>Car Load Capacity, tonnes:</span>
          <Select
            id='carLoadCapacity'
            name='carLoadCapacity'
            defaultValue={carLoadCapacity}
            style={{ padding: '0 100px' }}
            onChange={e => {
              setCarLoadCapacity(Number(e.currentTarget.value))
            }}
          >
            {getCars().map(car => <option key={car}>{car}</option>)}
          </Select>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <span>Loading:</span>
            <input
              value={loading}
              type={'checkbox'}
              onClick={() => setLoading(pv => pv === '0' ? '1' : '0')}
              style={{height: '20px', width: '20px'}}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <span>Packing:</span>
            <input
              value={packing}
              type={'checkbox'}
              onClick={() => setPacking(pv => pv === '0' ? '1' : '0')}
              style={{height: '20px', width: '20px'}}
            />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <h3>{`${getPrice(carLoadCapacity, distance)} ТГ`}</h3>
        </div>

        <CustomButton handler={submitHandler} title={'Submit Order'} isDisabled={date === '' || time === ''} />
      </div >
    </>
  );
}
