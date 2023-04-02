import { Checkbox, Input, Label, Select } from "@rebass/forms";
import { ChangeEvent, FC, useState } from "react";
import { Button } from "rebass";
import { CustomButton } from './../Components/CustomButton';

const cars = [4.5, 5.5, 6, 8, 10, 11, 20]

interface IOrderingProps {
  onSubmitHandler: () => void,
  points: number[][],
  distance: number
}

export const Ordering: FC<IOrderingProps> = ({ onSubmitHandler, points, distance }) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [loading, setLoading] = useState('0')
  const [packing, setPacking] = useState('0')
  const [carLoadCapacity, setCarLoadCapacity] = useState(cars[2])

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
            style={{padding: '0 100px'}}
            onChange={e => {
              setCarLoadCapacity(Number(e.currentTarget.value))
            }}
          >
            {cars.map(car => <option key={car}>{car}</option>)}
          </Select>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <span>Loading:</span>
            <Checkbox
              type={'checkbox'}
              placeholder={'loading checkbox'}
              onChange={(e) => setLoading(e.currentTarget.value)}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <span>Packing:</span>
            <Checkbox
              type={'checkbox'}
              placeholder={'packing checkbox'}
              onChange={(e) => setPacking(e.currentTarget.value)}
            />
          </div>
        </div>

        <CustomButton handler={submitHandler} title={'Submit Order'} />
      </div >
    </>
  );
}
